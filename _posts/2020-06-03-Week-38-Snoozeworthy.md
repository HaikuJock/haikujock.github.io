---
author: jock
---
* Overlapping rectangles is hard(!?)
* Elevation view is done
* Dwergs get some sleep
* Thesis complete 🤞

**Snoring Dwerg video**
[![Snoring Dwerg](http://img.youtube.com/vi/ArqvgBO1H1k/0.jpg)](https://youtu.be/ArqvgBO1H1k)

A bit of a learning experience for me at the start of the week. I was fixing a recurring bug where part of the world would not be drawn when zoomed out. I previously fixed this without thinking about the problem clearly and this is why it was recurring. It was really annoying me because it seemed like such a simple problem to fix. Visualising what I was doing, rather than fiddling with the code while the game was running, made me realise that the problem was simply "what is the overlap of two rectangles?" I re-wrote the function using TDD and then ran the game but the bug was still occurring. I then realised one of the rectangles was wrong; the size of the camera was being clamped to the size of the world, but when fully zoomed out what could be displayed was larger than the world.

The point is that I don't use words in my head when trying to solve a problem like this, it's a visualisation. Code is words. Taking the time to think clearly about the problem away from the code allowed me to see what I was trying to do. Using TDD allowed me to make a solution that was as simple as possible. Having a simple solution that I thoroughly understood helped me see the real bug.

The elevation view is now complete barring a few questions I have around how tools work. The kind of questions answered by observing someone play the game. Normally I'd take the game out to GameDevEd and EdIndies but that's not happening so I'm hoping to arrange something online this week.

The rest of this week I've been fixing bugs, getting the Dwergs to go to sleep and adding Dwerg corpses. So sad.

Frans has had to make more adjustments to his thesis but he's also managed to compose the summer music track, record some more ambiences and tweak the water ambience. Frans has also been doing a bunch of testing and kept me busy with bug-fixing.

Today I woke with the strong desire not to have to do six months of contract work to continue funding Dwerg Saga development. So I'm taking time to apply for the SMART: Scotland grant and having a look around for other funding sources.

For the next week Frans will be working more on the summer and winter music and ambiences. I'll be adding a UI element to remind the player what they need to do to continue the tutorial, addressing some performance issues with path-finding and getting back to finishing stockpiles.
