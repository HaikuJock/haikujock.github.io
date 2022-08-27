---
author: jock
---
-   Treehopper nests
-   Networked not scripted

**Treehopper video**
[![Treehoppers](http://img.youtube.com/vi/wZBryKVYmQU/0.jpg)](https://youtu.be/wZBryKVYmQU)

I charge on with spawning Treehopper nests and the Treehopper behaviour and have everything working by Friday. Then I start looking at periodically spawning Dire Wolves at the edge of the map and hit a stumbling block. The nest spawning is managed by a script but scripts do not run in networked games.

I did intend scripts to run in networked games and I've done part of the work for it. I gave up when I considered what would happen when two clients have progressed the same script to different points. Defining the nest spawning parameters in a template file and triggering it with a flag from script is less risky. In networked games, if any client has the flag set then nests will be spawned.

Adding the wandering Dire Wolves is straightforward, re-using the same mechanism that keeps the deer population up, but with a flag and timing constraint.

For the next week I'll be fixing the Treehopper nest-spawning and updating the mouse controls.
