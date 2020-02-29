---
author: jock
---
* Core experience reflections
* Controlling the game world from Ink scripts
* Refining the first tutorial/story

## Details

What is the desired core experience of Dwerg Saga?

That the player cares for their clan. They want their Dwergs to be happy, to fulfil their goals, to defeat threats, to be prosperous and to fall in love. Or not. The player may dislike some of their Dwergs and this is also a desirable experience. As long as the Dwergs behave in a believable manner and are involved in dramatic situations, I feel the player will have feelings for them. The previous three months have not advanced this experience. When I explain Dwerg Saga to people they do express interest in the persistent, real-world mapped, shared universe but it's only valuable if the game is fun to play.

What does the player feel in the opening minutes of Dwerg Saga?

Confusion and bafflement. There are a large number of tools, way too many stats and no direction. The first tutorial should teach the player enough of one tool so that they feel comfortable experimenting with the others. It should provide enough story so that they want to know more. It should provide the player with a goal to accomplish.

This week I've mostly been working on the tutorial, using Inky to combine instructions and story. I've added a mechanism to highlight individual UI elements, debug controls to restart and go backward through a script and improved the saving and loading of running scripts.

Motivated by play-test feedback, I've combined the harvest and chop-trees tools and started work on making the camera pixel, rather than tile, positioned. Combining the harvest and chop-trees tools makes sense because they behave almost identically and reducing the number of tools reduces complexity. Having a pixel-positioned camera allows for moving the camera by dragging and will fix the horrible jerkiness when the camera is following a moving Dwerg.

For the next week I'll be continuing with the tutorial; adding custom commands to wait for the player to do things, more story and play-tests.

I hope you all had a wonderful Christmas and have a super-happy New Year.
