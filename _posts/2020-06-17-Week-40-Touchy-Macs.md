---
author: jock
---
* Virtual play-test session
* Mac woes
* Softening the pan
* Winter (music) is coming
* Testing and bug-fixing
* Release next week

A large world at 1920x1080 resolution
![A large world at 1920x1080 resolution](/assets/img/HighRes.jpg)

A big thank you to Anders for recording a play-testing session at the beginning of the week. Unfortunately the noise of the fan rendered his voice incomprehensible. I'm fairly certain this is caused by a thread created with the sole job of catching sub-frame TouchPad taps. It's an ugly hack to get round the [problem](https://github.com/MonoGame/MonoGame/issues/5988) that the XNA paradigm doesn't always catch these. After digging into the MonoGame source code and SDL I came up with a fix that doesn't involve a dedicated thread. Smarter developers in the community have since come up with a better solution so this issue should be resolved for all MonoGame users in a future release.

The other serious issue in this session was the problem that none of the Dwerg details were visible in the clan creation screen or in-game. This is a problem with the scissor rectangle used to clip scrolling content. It needs to be scaled and offset. Only on Catalina. Only in Release builds. Le sigh.

The hard-panning of positional sounds we are fixing by increasing the scale of the world so each voxel is 100 metres cubed. Sounds are played from the centroid and the camera is at the surface so the audio listener is never closer than 50 metres and both ears will always hear a portion of the sound. When Frans started I got him to make a pure-tone sound for testing attenuation and doppler. It's a horrible sound to have to listen to but you can clearly hear when there's something off with the listener position, facing or velocity.

As well as working on the attenuation Frans has made a few iterations of the winter music. We've been toying with the idea of only playing the seasonal music track once per day. Stopping it might give the player the idea that there's a reason for it stopping but we both like the idea of their being pauses in the music so the player can enjoy the ambience.

The rest of this week we've both been play-testing, tuning the audio and fixing bugs. The biggest fix for me was fixing the "water-pillar" bug; a voxel would randomly fill with water and never flow out, Dwergs would wander into them and drown. While working in the fluid simulation I improved tributaries so they don't spill out so much and changed the flow of water to fake the appearance of low-depth streams.

Next week will see a free release of Dwerg Saga so I'll be testing, bug-fixing, fine-tuning the tutorial and adding anonymous analytics so I can get some numbers on the duration of game-sessions. Frans will be continuing with the winter music, looking at the UI sound effects and balancing the in-game sounds.
