---
author: jock
---
* Addressing user confusion over vertical levels
* Shader experimentation
* Making mining work as users expect
* More work from play-test feedback

## Detail

I started the week by addressing the confusion caused by tools only affecting the current vertical level and how that is communicated. The game starts with the world displayed from a bird's-eye perspective. Is it obvious to you where the high and low levels in this screenshot are?

![View Tool showing all vertical levels](/assets/img/ViewToolBirdsEyeView.jpg)

Next, the user is introduced to the mine tool and their view immediately changes so that all levels below the current one are darkened:

![Mine Tool showing only one level](/assets/img/MineToolOnlyCurrentLevel.jpg)

It is a jarring transition and understandable why the darkened areas has been perceived as solid rock and the user now thinks they are looking at the bottom of a pit. I hoped that desaturating lower levels would look better and turned to shaders to achieve this. Unfortunately this just looked weird and I wasn't happy with it. Next, I tried a blur shader but the edges of tiles became very visible. A good blur shader would require rendering the lower-levels on to a render-texture, blurring the whole texture and then rendering the current level on top. Doing some profiling I found that even a basic shader was lowering the frame rate so a good blur-shader would be prohibitively expensive.

I concluded that I wasn't going to find a solution to this problem with shaders. On the bright side I refreshed my understanding of shaders and found a great tool, [ShaderED](https://github.com/dfranx/SHADERed), for developing shaders in real-time. While working on rendering, I couldn't resist increasing the number of tiles being drawn at each location from two to eight. This gets rid of the nasty black tiles that would appear from time to time.

Why are tools only usable on a single vertical level? The floor, wall and stair tools require building in open space: with the floor tool when building bridges or roofs, with the stair tool when building stairs up and with the wall tool when building high walls.

I was woken at 3 am on Tuesday morning by an idea: all tools can be used while all vertical levels are visible. Only a few tools, where the user wants to create an unusual effect, require use at a specific vertical level. Therefore I will make tools work while all levels are visible and add a view tool that changes the view to a single vertical level when a specific effect is desired. The transition to and from the single-level view can be smoothed to better communicate what is happening. The only downsides to this are that making bridges over rivers is more complex and building stairs up is not an unusual effect. However, I have an idea on how to do simple stairs up and, at some point, bridges will be special buildings.

A behaviour I've seen again and again in play-tests is users taking the mine tool, selecting an area of flat terrain and then being confused when nothing happens. When I ask what they expect they all say "to mine down into the ground." So that's what I'm working on at the moment. The mine tool will be context-sensitive; over solid terrain it will behave as it does currently, over flat terrain it will mine into the ground and over floors with nothing beneath it will remove the floor leaving empty space.

With addressing these problems I've not progressed the story and tutorial this week. There are a few more problems that came out of play-testing that I want to fix before I do.

* Explanatory text describing UI tools is often skipped when it's longer than a single line.
* Showing such text for the same tool makes it more likely to be skipped.
* The tutorial 'drags' the player along too much. When the player is asked to do something to progress the story I'd like to let the player re-initiate the story rather than it automatically continuing.
* The tutorial should listen for the player accomplishing things themselves and not explain what they already know.

I expect this work to take up the next week but hope to progress the story and tutorial the week after that.

I intend to apply for a grant from the [UK Games Fund](https://ukgamesfund.com/) so I've been writing up what I'd use the money for. I have instructions for a pixel-artist that will enable procedural Dwerg tiles and reached out to a musician to find out what it will cost for music for each season in the game.

Next week I start the [Creative Bridges](https://www.thisiscodebase.com/creative-bridge) course at Codebase in Edinburgh. I hope this course will help me with my marketing, help me focus on what will make this game a success and give me contacts for further funding.

All the best.