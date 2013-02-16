---
layout: post
title: Hackintosh Problems
---

{{ page.title }}
----------------
So I made a hackintosh a few weeks ago following this wonderful [guide][1] over
at [tonymacx86][2]. It was pretty fun to do and I like to think that I learned
something about computers. The installation was fairly straightfoward and the
finished machine ran really smoothly after some tweaking.

[1]: http://tonymacx86.blogspot.com/2011/09/building-sandy-bridge-customac-customac.html

[2]: http://tonymacx86.com/

But it's been having some weird issues since I got back from winter break.
Every now and then all the displays hooked up freeze and everything becomes
unresponsive, with the exception of any background audio running. Also I can
move my mouse.

The problem is that this "freezing" is not readily reproducible. I originally
thought it was an issue with QuickTime Player, as the problem occurred twice
when watching a video. But the exact same problem happened when I was opening a
new tab once in Chrome and another time when I was editing a photo.

I think it's a graphics problem, because background processes still ran even
during the weird "freezes". At one point I thought it was problem with the SSD
I installed because of the sketchier Sandforce controller it uses, but that
didn't make much sense after I thought about it some more.

I'm using Intel's onboard integrated graphics (HD3000), because I'm not a gamer
and it handles everything I've thrown at it so far. The forum at tonymacx86
suggested using the "480+2" setting on the motherboard for 8 gigs of RAM, but I
set it back to the "384" setting instead and the freezes have gone away.

Everything appears to be fine for the moment. But every now and then some
serious artifacts appear on select windows and I panic just a little before
saving all my current work.

I'm going to keep this post around so that I can refer back to it if I ever run
into the same issue again.

*UPDATE*: Encountered the same issue again. Wandered around some forums and at
the suggestion of some helpful people, ended up
editing org.chameleon.boot.plist and removed "generate Pstates" and "generate
Cstates". Also cleaned and rebuilt my hard drive using [OnyX][3]

[3]: http://www.titanium.free.fr/

*UPDATE*: Ok, I think I figured out what's going on and why my computer's been
freezing up randomly. Somebody else pointed out that the motherboard I'm using
supports HDMI audio. Turns out one of my monitors has speakers built in. I was
using my own sound system, so I didn't think that there was any relationship
between the two. I ran through the console and all the errors that occur at the
same time as the freeze are related to "Sound assertion" and failing at various
lines. For the time being I installed a fix for the HDMI audio issue and turned
off the speakers on my monitor (which were apparently still on the entire
time...).

*UPDATE*: Just passed a week of complete stability. Checked through the
console; no errors, no crashes, no "Sound assertions". Sweet. Plus I haven't
seen a serious artifact on my screen for about just as long. I keep expecting
youtube or a video to prove me wrong, but nothing so far. It's been running
like a dream. Almost completely certain now that the previous freezes were
related to HDMI-audio.
