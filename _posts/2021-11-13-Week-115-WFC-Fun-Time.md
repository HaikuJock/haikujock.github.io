---
author: jock
---
* Tutorial bugs
* Horribly complicated system
* [Wave Function Collapse](https://github.com/mxgmn/WaveFunctionCollapse) (WFC) for natural textures

**Wave Function Collapse Blueberry Bush Generation video**
[![Wave Function Collapse Blueberry Bush Generation](http://img.youtube.com/vi/XMKFfVxuOWg/0.jpg)](https://youtu.be/XMKFfVxuOWg)

Tutorial bugs plague my Sunday. Special cases for inventory jobs make them awkward to track from script. Recalling inventory jobs only take a single frame, I realise I can just listen for the job to be issued, no need to wait for it to finish which was the complex part.

It's Thursday morning and I hate to admit to myself that I have created something horribly complicated. I'm talking about the way that scripts listen for jobs. What does 'horribly complicated' mean. For me, if you, the author of a system, must spend 15+ minutes re-learning it before even contemplating making any changes, and you have to do this every time you look at the system, it is horribly complicated. Like that sentence. Both of which I should rewrite but I won't do the sentence because it's making a point and the code because I want to release this month.

By the end of the day on Thursday I've fixed all the tutorial bugs and next on my list is the hunting, tanning and armour tutorial. I have about 30 other bugs but they don't pertain directly to the tutorials so they are deprioritised.

I want to trigger the hunting tutorial in a few different ways and I need to write code to support that. One of those triggers is if the player kills a deer. Corpses are items and there can be a very large number of items in the game. Trigger conditions need to execute in a single frame so we can't check all the items to see if there is a dead deer. I'm reminded of a previous task where I considered additional tracking for corpses but discarded the idea in favour of something simpler. I am deprioritising this trigger.

Oh boy, Saturday morning and I've been burning the midnight oil. Stupid, stupid, stupid brain decided WFC was worth revisiting. I don't know why but it feels important to me that the natural textures in each world are unique. Using my own WFC implementation I can produce 27 versions of each ground, rock, ore, floor, grass, tree and bush tile in under a minute. Here's what that looks like.

![WFC Natural Tile Variations](/assets/img/WfcTiles.png)
 
Yup, that there is many [bowls of porridge](https://galaxykate0.tumblr.com/post/139774965871/so-you-want-to-build-a-generator) each stirred a little bit differently. The edges between tiles are obviously jarring but that's a different job. Varied success with the trees, the pines look better than the oaks.

![WFC Tree Tile Variations](/assets/img/WfcTrees.png)
 
For the next week I'll be tidying up this WFC work and then focussing on the tutorials. I will not be distracted!
