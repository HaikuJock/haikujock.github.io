---
author: jock
---
-   Ngram: Loam vs Soil
-   View Tool default
-   Job-progress update
-   Task organising

With the new font I rename 'Loam' to 'Soil' because soil is a more common word, but it looked very like 'Soll' in the old font.

Now that the context-menu will always have at least one item ('Show Terrain' is always available) it makes sense for the View tool default action to show what is most prominent on a tile. Having to re-open the Job Panel to see progress updates was tedious so all the game-panels now update while visible.

Observing a build job in-progress, and I see the progress bar goes backwards at times. This is a bug in the job-estimation code which I improve but conclude the progress-bar should represent the building and not the gathering of materials. Further, progress should be retained if a job is interrupted. This will be addressed in a future release.

Adding a 'Show Building' panel and improving the context-menu takes me through to Wednesday. Wednesday and Thursday, I fix some bugs and do some refactorings that I'd added to the 'In-progress' list of my Trello board.

On Friday I sort the list of 300 TODO items into short, medium and long-term lists. At the top of the short-term list are tasks to have crafter skill affect the quality of crafted items and the quality of tools affect job speed. I start work on these.

For the next week I'll be finishing the item-quality tasks, playtesting, balancing and making a release.​
