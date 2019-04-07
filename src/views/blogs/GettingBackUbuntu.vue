<template>
    <div>
        <p>Friday was my last working day at Upad, and I start my new job on the 22nd. That's 2 weeks without a laptop. I decided it was probably time look at buying a new laptop, and even though I've never enjoyed working on a Mac, I was tempted to buy one, just because it was simple to get up and running.</p>
        <p>The biggest turn off with Macs are there price tag. £1000 for a basic Macbook - i5, 8gb ram etc etc. That and the fact I was already on my second mac charger, and the cable was fraying again. If I was to buy my own one, I didn't feel like forking out a minimum of £1000 for a basic laptop, and another £100 or so every 6 months for a new charging cable.</p>
        <p>I was super close to pressing the purchase button on the Mac store, when I had flash backs to when I was at Crowdcube. For most of the time there, I was using a really cool Dell Inspiron laptop, which was setup with dual boot Windows and Ubuntu.</p>
        <p>It was the same price as a decent Macbook, but was way more powerful. Bigger screen, more ram, i7 processor, touch screen (gimmicky, but cool). I had a quick look around, but the Dell I had at Crowdcube has been discontinued. I found a similar one (less RAM, no touchscreen), which was half the price of a similar spec Macbook.</p>

        <p>I decided to get it, and picked it up the same day.</p>

        <p>The only problem was, it was pre-installed with Windows 10. My knowledge of how computers actually work (relating to BIOS etc) is poor, and when at Crowdcube, Jim, the System Engineer was the one who dual booted my machine. I decided to go for it anyway. I need a personal laptop, and I really wanted to start using Ubuntu again.</p>
        <p>I quickly created a bootable USB stick with Ubuntu on it, and I followed the instructions on how to install Ubuntu with Dual boot. However, when I actually went to install it on the hard drive, it only recognised the USB stick. <em>Crap.</em></p>
        <p>After a bit of Googling, and talking with some friends on Slack, I found out, it was because (and I'm not going into technical details here because I don't really understand what it all means!), but it was because the Laptop was using RAID instead of AHCI. I found how to switch it over easy enough in the BIOS, but when I made the selection, I got a super scary message saying I would likely loose my Windows installation.</p>
        <p>This laptop wasn't "cheap", and I was petrified of changing this setting, then not being able to install Ubuntu, and not being able to get Windows back.</p>

        <p>In the end, I read a load of blogs, and watched a few youtube videos. I wouldn't say I knew exactly what I was doing, so I bought a couple of high capacity USB sticks, created a recovery disk, took photos of blogs I found on my phone, and switched over to AHCI.</p>

        <p>I guess I was super lucky. After I made the switch, the laptop reloaded, and Windows loaded up by default. I checked device manager, and the storage was set to AHCI. Winner! I restarted again, and booted up the Ubuntu USB stick, went through the installation process, and it picked up the hard drive! Installation was actually easier than Windows 10.</p>
        <p>So after 2 days of worrying i was about to brick my new laptop, it went way better than expected. I'm now back using Ubuntu, and instantly fell in love with it again.</p>
        <p>Ubuntu isn't as "pretty" as a Mac, but it "just works". If your a developer working on a Mac, you probably have the knowledge of how to use Ubuntu, so I would recommend just checking it out.</p>

    </div>
</template>

<script>
    export default {
        name: 'GettingBackUbuntu',
    }
</script>
