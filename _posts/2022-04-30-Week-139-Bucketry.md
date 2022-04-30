---
author: jock
---
* Buckets and Tankards
* Liquid Containers
* [Ultimate Adom Software Design](https://youtu.be/fGLJC5UY2o4)
* Filling bathtubs
* UI Idioms

**Bucketry video**

[![Bucketry](http://img.youtube.com/vi/YqsGBniuXoU/0.jpg)](https://youtu.be/YqsGBniuXoU)

Starting on Saturday with the dehydration icon my first stop is [The Noun Project](https://thenounproject.com/) for some inspiration. A crossed-out water droplet looks simple enough for 16x16 but I already have a tankard indicating thirst so I use that instead. Then I realise the Dwergs will need something to carry the water from the river to the dining room. That brings in the Carpenter's workshop, buckets and tankards, all built by the end of the day.

On Sunday I start on supporting liquid-containers, considering a few software design options I eventually go with a component attached to items and a flag indicating its type. There are many things wrong with this but it is the simplest solution and does not take long to implement. By the end of Monday Dwergs are picking up tankards, filling them at the river and drinking them in the dining rooms.

On Monday and Tuesday morning I am watching [Thomas Biskup](https://twitter.com/adom_dev) give a talk about the [Entity Component System in Ultimate Adom](https://youtu.be/fGLJC5UY2o4). I get a strong impression that this system allows for interesting emergent gameplay. It also looks like it is very moddable.

I finish the Thirst Need with Dehydration on Tuesday and start on the Hygiene need. I planned to do Illness before Hygiene but I can't write a test for it without a cause.
Wednesday is a good day to refactor buildings and their templates moving out some immutable data and deleting some dead code. Re-using the same component idea I'm using for items and now bathtubs can contain liquids. Mighty useful for these Dwergs who haven't washed in almost four years!

Getting Dwergs to fill the bathtub, undress, bathe and then re-dress takes me through until Friday. I have some fun with audio on Friday, recording sounds for a carpentry sound effect that you can hear in the video.

Athena's research on user-interfaces in the genre concludes that there is not a well-defined set of idioms. Interfaces are made to accommodate what needs doing. It looks like we'll be moving the map panning from the left mouse button to the middle mouse button. This will open up the left mouse button for default tool use and the right mouse button for context-sensitive menus.

For the next week I'll be working on Hygiene and Illness. Athena will be continuing with test-plans for each of the tools.
