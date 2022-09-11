---
author: jock
---
* The Naming of the Chest
* Items refactoring
* Item and Animal panels
* Testing
* Releases

I'm in Levels on Saturday on a low-powered laptop adding chests. The low-power constrains me to working with a subset of projects; the core simulation and tests. The first hard problem is naming; chests are already a body-part. I eventually rename the body part to ChestBodyPart and add ChestBuilding. Not having either of them named simply Chest lowers the risk of using that name incorrectly.

As items are dropped and picked-up other systems need to know where that happens. The next few days involve refactoring to support this for chest buildings as well as the existing Items class. I finish the item-containers work with a UI panel to show items in chests. I re-use elements from the Inventory panel and this new panel also shows items on the ground.

I finish adding new features with an Animal panel on Wednesday. With the exception of a Terrain panel and finding a more readable font I've finished all the features I set out to include in this release. I've hired a graphic designer to find better fonts and make Dwerg Saga a new logo.

Wednesday afternoon and Thursday are spent going through the test-plan. I do upgrade-path and network testing on Friday, finding a handful of bugs here. One bug is particularly onerous and I end up making a hacky fix for the release. Build pipelines just work (TM).

I spend time on Saturday trying to answer the question "Is it possible for the player to defeat the Dire Wolves in the early tutorial?" Saving and reloading while in a large combat caused a crash, so I've released a new build to fix that.

For the next week I'm going to re-work the hacky fix, take some time off and extend the test-plan to cover the new features.
