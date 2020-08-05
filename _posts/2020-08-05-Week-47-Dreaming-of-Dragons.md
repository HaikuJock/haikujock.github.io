---
author: jock
---
* Chris Crawford's StoryWorld
* Building materials
* Scope reduction win
* Adding fun
* Ramp rendering
* First workshop

**Pink Sandstone Grand Hall video**
[![Pink Sandstone Grand Hall](http://img.youtube.com/vi/ycguYwtvL28/0.jpg)](https://youtu.be/ycguYwtvL28)

I got drawn into [Chris Crawford's](http://www.erasmatazz.com/) [StoryWorld Authoring Toolkit](https://github.com/storytron/swat) work on Wednesday afternoon. I'm embarrassed to admit that I did not know of Chris, he's the guy that started GDC after all. I highly recommend his [Dragon Talk](https://www.youtube.com/watch?v=VwZi58u1FjI). His work is fascinating and I've already learned a few things. I should be modelling personality attributes on a scale of -1 to 1; easier to think about and you never get overflows from multiplication. I need to model an agent's perceptions of other agents; without this there is no room for misunderstanding or deception.

The remainder of Wednesday I reduced the repetitiveness of conversation audio by limiting the frequency of audible greetings and farewells.

On Thursday I added the option to select building materials for walls, doors, stairs and floors. The grand hall of my latest fortress has a lovely pink sandstone floor.

I took a break on Friday to go for a walk and enjoy the beautiful weather while it lasts. In the evening I fixed a bug and smoothed out the follow-camera.

On Saturday I added an icon to indicate when a player is in the middle of a scripted-story and prevented them from moving to a new world while that's in progress. Reducing scope is a great way to fix millions of bugs.

I've been thinking about how to add fun for a few months and settled on the idea of the deeper you dig the more challenging the encounters but the greater the rewards. The first set of these rewards will provide the resources and tools needed to repair the merchant's cart. Spending Sunday reading about stone tools, cartwrights, wheelwrights, blacksmiths, wheels and ancient carts gave me too many ideas to implement.

Monday was a day of self-doubt and feeling overwhelmed. Instead of continuing with adding risk and reward I took a look at the ramp-rendering. One play-tester expected the ground beneath the top of a ramp to be solid and I have to agree with this.  I tried not rendering the top of the ramp and rendering the bottom of the ramp black instead of white. I think it looks much better. Unfortunately it's not that simple; ramps occupy two cells, one above the other, and the top part can be occupied by a Dwerg or contain items, so not rendering it is not an option. I tried another way which is better but concluded the best way to fix this is to remove the tops of ramps as occupiable spaces. I'll be looking into this again in the coming week.

On Tuesday I added flint, a tool-stone that can be found in nodules near the river and a required component for the first workshop.

For the next week I'll be mostly developing the first workshop. There's quite a lot involved in this and I will be breaking it down into sub-tasks today. Next week will see a new release that I hope will allow you to build a workshop but there probably won't be anything to make in it.
