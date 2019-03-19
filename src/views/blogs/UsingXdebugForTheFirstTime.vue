<template>
    <div>
        <p>I've known about Xdebug for a while now, that it's a great tool for debugging, but I've never actually used it. I've always thought it'd be too complicated to setup.</p>
        <p>The job I'll be starting next week expect me to know Xdebug, they use it a lot. I was told once I start using it, I'll be wondering why I never used it before! So I thought it was time to work out more about what it is, what it can do, and how it works.</p>
        <p>This blog isn't meant to be an installation guide - there are a lot of them around, and they all seem to be different. Instead, this is more trying to explain what it is, and what I found after using it for the first time.</p>

        <p class="page-title">What is Xdebug</p>
        <p>I'm by no means an expert in Xdebug. I hopefully know enough now to understand the basics. Hopefully I can explain it to people in a similar position to me.</p>
        <p>Xdebug is a debugging and profiler tool. When you debug applications, a lot of people will use something like <code>var_dump()</code> to output a value to the screen. This has got me through many bugfixes. But sometimes you need more information, like a stack trace.</p>
        <p>Again, you can use something like <code>debug_print_backtrace()</code> to get the stacktrace, but often it's super hard to read, and the data can be truncated. Not only that, but if you stick an exit statement mid-way thorough your PHP script, it sometimes breaks the flow of the request you were making, so if you need to get further in the journey, you often need to restart what you were doing.</p>
        <p>This is where Xdebug is really helpful. Instead of outputting little bits of data and exiting, you can instead use "break points" to tell PHP to pause execution, dump all the information, then resume. And you can have multiple break points in a single request!</p>

        <p class="page-title">Initial install attempts and Laravel Homestead</p>
        <p>I'm not a dev-ops'y person. I have enough working knowledge to get a site deployed to a server from github, the basics of piping the deploy through something like Semaphore etc. I used Ubuntu for a while, and really liked it, and use git through the command line. So I'm fairly comfortable using the terminal. When I get errors, thats when I get uncomfortable.</p>
        <p>We currently use docker for our local development environment, with a slightly older version of PHP. So figured it'd be a good chance to try install xdebug. Unfortunately it didn't go too well. I didn't build the docker container, I know enough to bash into it, build it etc, but not really enough to edit it. Trying to install xdebug for a non 7.x PHP version was frustrating.</p>
        <p>I must of clicked on most results on the first page of google. Each with slightly different versions of what to run. <code>apt-get install php-xdebug</code>, each time got an error message saying the package couldn't be found.</code></p>
        <p>At this point, I just wanted to get Xdebug working so I could see what it does. I use Laravel Homestead for my side projects and trying out new things, and fortunately, Xdebug was already installed and setup for it.</p>

        <p class="page-title">Setting up the browser</p>
        <p>When using Xdebug, Xdebug acts as a client. It makes requests with the data to the server, which in my case is PhpStorm. Like a normal HTTP request, the client won't continue until it receives a acknowledgement response from the server. In order for the browser, or console or whatever you're using to tell Xdebug to send data to the server, you need to set a querystring or session cookie that Xdebug is looking for. The key would be <code>XDEBUG_SESSION</code>. The value should be a key, if using PhpStorm, it'll usually be <code>PHPSTORM</code>: <code>?XDEBUG_SESSION=PHPSTORM</code></code></p>
        <p>There is an easier way to do it, there's a helpful Xdebug extension called "Xdebug helper for chrome" - there's probably more for other browsers. <a href="https://github.com/mac-cain13/xdebug-helper-for-chrome" target="_blank" class="text-blue hover:text-blue-dark no-underline">Heres the official website</a>. But once installed as a browser extension, you can just turn it on when you start wanting to debug.</p>

        <p class="page-title">Setting up PhpStorm</p>
        <p>Getting Xdebug working in PhpStorm was slightly tricky. PhpStorm is a great IDE. For years I used Sublime, but now would not enjoy going back to it! The problem I find with PhpStorm, is there are so many options, and way too much tiny icons. You need to know what icon you're looking for before you know what it is.</p>
        <p>It didn't help either that my PhpStorm was setup using the Mac version of PHP, and wasn't pointing to he PHP install inside Vagrant. I spent a bit of time, looking through all the project configurations, setting it up to use Vagrant. After that, it got pretty easy.</p>

        <div class="w-full text-center mb-6">
            <img src="../../../public/images/blogs/xdebug/breakpoint.jpg" class="shadow-lg">
        </div>

        <p>The breakpoint indicates a place you'd like to output the data. This will output the stacktrace, including all method calls, objects created, variables etc up to that point. In the image above, the breakpoint is indicated with the red circle.</p>
        <p>All information up to that point will be recorded, but not the breakpoint line itself. This is an example of the output in PhpStorm.</p>

        <div class="w-full text-center mb-6">
            <img src="../../../public/images/blogs/xdebug/output.jpg" class="shadow-lg">
        </div>

        <p>The block on the left shows me the stack trace up to the breakpoint, and the block on the right shows the variables. The coolest thing, is you can see the variables set inside the function. You can see what object is bound to <code>$this</code></p>
        <p>The interviewer was right. I've only got into the basics, and I already cant believe it's taken me this long to start using it. I've only scratched the surface of Xdebug at the moment, but will keep posting as I learn more about it. Hopefully this post will help explain it a little!</p>
    </div>
</template>

<script>
    export default {
        name: 'ReflectingOnRecentInterviews',
    }
</script>
