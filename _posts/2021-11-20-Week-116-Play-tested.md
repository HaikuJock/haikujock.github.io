---
author: jock
---
* [edindies](http://edindi.es/) Play-test
* Parking the Collapsed Wave Function
* Hunting, Butchering, Tanning and Armourer Tutorials

On Saturday afternoon I was out in the real world at Levels café for an actual in-person [edindies](http://edindi.es/) meetup. I had forgotten to push my [Wave Function Collapse](https://github.com/mxgmn/WaveFunctionCollapse) (WFC) changes so I focussed on getting the Mac version working and then observed a fellow game-developer play-testing it. I noted 22 issues and improvements which I'll need to prioritise. The biggest issue was the tutorials taking control of the camera while the user was on the other side of the map. I've been contemplating possible fixes over the last week.

![Solid terrain with borders](/assets/img/BorderedSolids.png)

![Solid terrain without borders using WFC for variants](/assets/img/BorderlessSolids.png)

It's Wednesday morning and I'm coming to the conclusion that I should park the WFC work and not include it in this release. I'm not entirely happy with the results, it adds a significant amount of time to map generation, the generated textures need to be saved and it impacts performance. The last thing I tried was removing the borders on the solid tiles. I think this looks better but the borders made it easier to plan layouts and provided a clear separation between solid and floor. The borders are artificial, reduce the feeling of exploration but distinguish solid and flat terrain better. Not something I need to decide on for this release. Have a look at the images above and let me know what you think.

It's Friday evening and for the past two days I've been working on the Hunting and Armour tutorial. Last week I mentioned finding a deer corpse is an expensive operation and I decided not to do it for this release. On Thursday the tutorial required this capability so I added it in spreading the cost over several frames. Of course I re-wrote it on Friday and replaced another function that was being used to find buildings and animals. This tutorial is much longer than the others and feels like it needs to be broken up.

I've separated out the Hunting and Butchering tutorial and play-tested it enough so that I'm satisfied with it. I could separate these two concepts further but feel like I should press on with the Tanning and Armour tutorial.

After filtering my in-progress list I'm down to 44 issues including the remaining tutorials. This doesn't include any work on changing screen-resolution which I said I'd have done this month. Next weekend is the last in November. I'm aiming to make the release on 4th December. Wish me luck!
