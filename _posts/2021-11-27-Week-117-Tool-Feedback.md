---
author: jock
---
* Hunting deer
* Not-a-bug
* Tool feedback
* Region-system bugs and tests

**Tool Feedback video**
[![Tool Feedback](http://img.youtube.com/vi/bhsiBqfJCQs/0.jpg)](https://youtu.be/bhsiBqfJCQs)

Damn I can't stop adding things. It was too easy to catch deer so I had to make them run away and escape off the side of the map. Then there weren't any deer so I had to add wandering animals coming on to the map. The idea and working prototype came on Saturday evening but only now on Wednesday morning do I have a fully-tested system that will work for any animals.

I'm trying to ensure that Dwergs die of thirst and hunger but I've over-optimised the representation of Need state such that I can't represent 11 days of time for death by starvation... Then I realise I can, and I already have tests that verify this behaviour. Right (sigh) back to the tutorials.

On Thursday I fix an issue with the workshop tutorials failing to continue when workshops are built on top of trees. I fix it by preventing that and providing feedback when a tool cannot be used in a location - a red cursor instead of yellow. I spend the rest of the day play-testing the hunt/butcher and tan/armour tutorials. In the evening I come back to my notes on how to fix the tutorials taking control of the camera while the user is busy doing something else. I outline a few possible solutions, conclude that I'm not going to get it done in the evening and pick up what I think will be a simple bug fix. It's not a simple bug.

The bug involves detecting when segments of the map become fragmented when walls are built and doors are locked. I have a number of tests around this so I find a case where the bug is occurring. I have a breakpoint in that case right now pinpointing exactly the problem. 

There's a definite problem with how I've implemented this region system. I chose to test it at a high level, e.g. creating worlds with walls down the middle, asserting an agent can't reach the other side, breaking down the wall and then asserting an agent can reach the other side. The problem with writing at this level is that I tend to write untested code. There's a lesson for me here about choosing a level of abstraction for the tests appropriate to the size and complexity of a problem.

After two hours of re-learning the code and understanding what is happening in this instance I have written a description of the problem and a possible solution. Unfortunately the first solution will take an order of magnitude that is not acceptable ~ O(N^3). On Saturday morning I go back and start writing low-level tests that eventually lead me to an acceptable fix.

Next week is release day. I have the last tutorial to write and there are a handful of bugs I'd like to fix and the screen resolution support. Wish me luck!
