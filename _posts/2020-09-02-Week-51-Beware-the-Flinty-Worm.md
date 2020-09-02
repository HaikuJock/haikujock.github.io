---
author: jock
---
* Ramp fail
* Seasonal tiles
* The Flintworm
* More GDC videos

**The Flintworm video**
[![The Flintworm](http://img.youtube.com/vi/J-_1ubH7eLM/0.jpg)](https://youtu.be/J-_1ubH7eLM)

I hope that solution for ramps actually works... Nope. After two days of work I find a serious flaw. The plan was to prevent agents from ever being on the tops of ramps but allow traversal between the bottom and any flat terrain beside the top. For this to work it cannot be possible to travel from the top of one ramp to the top of another. This constraint breaks the region system (an implementation of [RimWorld's region system](https://youtu.be/RMBQn_sg7DA) extended to 3D) and I can't see a way around this. The changes I was making created a distinction between a navigable and occupiable location which I feel is fragile. On the plus side it was a unit test that revealed the flaw which allowed me to rapidly reproduce and fully comprehend it. It's just a shame that this was the last failing unit test I chose to fix. I'm going to park this work and revert the rendering of the tops of ramps. Let me know if you find ramps particularly annoying and I'll take another look.

I took a break on Saturday and continued with seasonal variations of grass and oak trees on Sunday. I'm not planning on adding these to the game any time soon but I'm using them for a surprise bonus for patrons that will be announced in a month or two.

On Monday and Tuesday I added the Flintworm, the first of the underground threats the Dwergs may encounter while they mine precious materials. I made them aggressive and tough as nails for their debut video, they will be significantly less threatening in next week's release.

I've been watching more GDC videos, some highlights; [Will Wright's Dynamics for Designers](https://youtu.be/JBcfiiulw-8), I find the idea of cellular automata feeding into agent networks compelling, [Failing to Fail: The Spiderweb Software Way](https://youtu.be/stxVBJem3Rs), encouraging to hear from a developer who's made a decent living doing his own thing and [Ken Levine On 'Narrative Lego'](https://youtu.be/p40p0AVUH70), I agree that we don't need to model people, it's enough to model characters. It will be interesting to see what comes out of [Ghost Story Games](https://www.ghoststorygames.com/).

Quitting vaping is going well, I'm finding it less difficult than quitting smoking which I managed eight years ago with the help of nicotine patches. This time I'm using nicorette gum, LENDOO stress relief magnetic rings and, next week, a set of Komboloi worry beads.
For the next week I'll be working on a tutorial to accompany the first encounter with the Flintworm, the Flintworms' behaviours and updating the UI to include health and damage.
