<template>
    <div>
        <p>So I've been using Ubuntu for a few days now, and progressively getting more adventurous with docker, php and nginx. I decided to try get a basic, standard installation of Laravel working, something that I was able to do on a Mac, but ran into an issue which completely stumped me.</p>
        <h1 class="page-title">The Issue</h1>
        <p>So, I had a super basic docker-compose file, and all it did, was create 2 services. An Nginx service, and a PHP-FPM service. There was nothing special in these files, and with a normal .php file, it was able to display a basic <code>hello world</code> webpage.</code></p>
        <p>However, when I installed Laravel on the host, and linked to it through the various docker/nginx config files, I got a Laravel Whoops page, with a lovely "permission denied" error when trying to access an error log file in the storage/logs directory.</p>
        <p>What was going on? Unfortunately, at this point, I had very little experience understanding linux permissions, and really how programs run on linux.</p>
        <h1 class="page-title">Understanding Permissions, Owners and groups</h1>
        <p>The first thing I wanted to understand, is how permissions, owners and groups really find out how they worked. All of those weird rwxrwxrwx letters, and the numeric recodesentations lke 777.</p>
        <p>Every file and directory, has an owner, and a group. The owner is a user, and users belong to groups. Those weird letters come into it, because they're actually split into 3 groups. &lt;owner&gt;&lt;group&gt;&lt;public&gt;, and each section is compromised of 3 permissions, read, write and execute. If you see these 9 letters codefixed with a <code>d</code> character, it indicates they're for a directory.</p>
        <p>So, if we take <code>rwxr-xr--</code>, this indicates that: The owner of the file (or directory), has read, write and execute permission. Any user in the group, has read and execute permission, and users in general only have read permission.</p>
        <p>When you run a command like <code>ls -al</code>, you'll get an output like <code>drwxr-xr-x   3 phil phil   4096 Apr  7 22:23 public</code>. You can see my name is written twice. The first <code>phil</code> is the owner. The second <code>phil</code> is the group. My user is a member of the group.</p>
        <h1 class="page-title">Understanding users and Docker</h1>
        <p>The next step in learning what was going on is understanding how Docker interacts with users, when building up containers. This is only a very basic understanding.</p>
        <p>When I installed Laravel, I did it on the host machine, my Ubuntu OS - not inside the container. Because of this, the directory, and all files within it, were owned by the user I was currently logged in as. When I used docker-compose to build the container, it was creating a bridge to the code on my host machine, and linking it to inside the container.</p>
        <p>From what I understood, the host system, and containers all share a user/group system. My user account on my host had the username phil, which mapped to user ID (UID) 1000. Because the UID is shared to the container, when I viewed the files inside the container, they were all owned by UID 1000. It didn't display my username, because only the UID was shared, not the username.</p>
        <p>So, files inside the container were owned by UID 1000, but PHP-FPM was being <em>run</em> by www-data (UID 82). This meant that php-fpm only had public permission to read and execute the files, but nothing more (different owners / different groups).</p>
        <h1 class="page-title">Attempted fix 1: Changing ownership</h1>
        <p>The first thing I thought of trying, was to change the owner of the files on the host system. <code>www-data</code> is available within the container and on the host, so figured the easiest way to get it working was to run <code>sudo chown -R www-data:www-data ./code</code> on the host system. This actually worked. When I refreshed the browser, the Laravel application loaded! Win! The real problem came when I opened the directory in PhpStorm.</p>
        <p>Because I was running PhpStorm on my host, it was started with user <code>phil</code>, and was trying to read, write and execute files and directories owned by <code>www-data</code>. This meant, PhpStorm couldn't save settings (because the root was owned by a different user). I couldn't make changes to files (Directory owned by a different user). Effectively, the directory and all files were readonly.</p>
        <p>Which lead me to...</p>
        <h1 class="page-title">Attempted fix 2: Adding me to www-data</h1>
        <p>Because the application worked now, I just needed to be able to create, delete and edit files in the code directory. Going back to my knowledge of ownership and groups, I thought the easiest way to fix this, was to add my host user account <code>phil</code> to the <code>www-data</code> group, and then grant it write permissions.</code></p>
        <p>Easily done with: <code>usermod -a -G www-data phil</code>, to add my user account to the group, then run <code>sudo chmod -R g+w ./code</code>. This recursively changed permissions on directories and files inside the code directory, by adding the write permission to the group section.</p>
        <p>I thought this would fix it. After opening PhpStorm, it was able to create the <code>.idea</code> settings directory successfully, and I was able to update existing files. <em>But</em>, because of PhpStorms safe write feature, which saves changes to a temporary file, saves it, then replaces the original with the updated one, it was changing the owner of the file back to owned by my user account, and primary group, so this would mean that those updated / created files would break the application.</p>
        <h1 class="page-title">Attempted fix 3: Changing fpm user and group</h1>
        <p>I was starting to get a bit desperate. The next thought I had was since all these issues were (I think) down to php-fpm running as <code>www-data</code>, was to just change php-fpm from configured with www-data, to run with phil (1000).</p>
        <p>Unfortunately, this was a non-starter. I took a look at the Dockerfile for the php-fpm image, and was drawn to this line: <code>ENV PHP_EXTRA_CONFIGURE_ARGS --enable-fpm --with-fpm-user=www-data --with-fpm-group=www-data --disable-cgi</code>. So to change it, I created my own Dockerfile, from <code>php:7.3-fpm</code>, copy and pasted the offending line, and change <code>www-data</code> to <code>phil</code></p>
        <p>Didn't work. Not 100% sure why, but it's something to do with ENV not being able to be overwritten at that point, and that ARG should have been used instead. Not sure about the difference (again, still at a learning stage with Docker), but after trying a few different ways to do this, and seeing <a href="https://github.com/docker-library/php/issues/698" target="_blank">This github issue</a> that suggested a change, closed, I gave up, and resorted to <a href="https://stackoverflow.com/questions/55620273/docker-php-fpm-running-as-www-data">Stackoverflow</a>.</p>
        <h1 class="page-title">Attempted fix 4: Running phpstorm as www-data</h1>
        <p>At this point, I was trying anything. So I set the owner of all the files to <code>www-data</code>, built the container, then ran phpstorm with <code>sudo -u www-data phpstorm.sh</code>. This didn't work at all. Just got a Java graphics exception, I assume because www-data wasn't setup to use a GUI. Instantly abandoned this idea.</p>
        <h1 class="page-title">The actual fix</h1>
        <p>I'd lost all hope of resolving my issue at this point! I was super close to resorting back to Vagrant just to be able to write some PHP again! Fortunately, I got an answer codetty quickly, and the solution that's worked (so far), was actually super simple.</p>
        <p>It goes back to users and user IDs again. You can actually change, the user ID of an existing user. This actually hadn't occurred to me, because I'm so used to the user ID as being a source of immutable truth.</p>
        <p>The idea was, as provided in the accepted answer, was to just change the UID of the <code>www-data</code> user in the container, to the UID of my user account on the host system.</p>
        <p>This would allow me to keep php-fpm running as www-data, would allow files on the host OS to still be owned by me, and would allow the files in the container to keep being owned by me.</p>
        <p>It took about 2 minutes to create a new php dockerfile:</p>
        <pre><code>FROM php:7.3-fpm

RUN usermod -u 1000 www-data</code></pre>
        <p>This simple change, remapped the `www-data` username, to the UID 1000, which also mapped to my host UID, and also the container files UID.</p>
        <p>A quick refresh of the browser, Laravel was still working. Create a new PHP file with a small 1 liner: <code>mkdir(__DIR__.'/test');</code>, checked it was owned by <code>phil</code> on the host, ran it, and it created the directory. Settings were being saved by phpstorm. Everything was working!</p>
        <h1 class="page-title">Conclusion</h1>
        <p>This issue set me back a good couple of days. It frustrated me beyond belief, but it also showed me things I still didn't understand. Users, Ownership, Groups, how files ran etc. While it did take me a couple of days to get the answer, trying to do it on my own taught me a lot, that I probably wouldn't have learnt if I got the answer straight away.</p>
    </div>
</template>

<script>
    export default {
        name: 'PhpFpmAndWwwData',
    }
</script>
