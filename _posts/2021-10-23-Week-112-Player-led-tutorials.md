---
author: jock
---
* [Roguelike Celebration](https://roguelike.club/)
* Crude Toolshop
* Refactoring the tutorials
* Inky scripting ![Heart Emoji](/assets/img/HeartEmoji.png)

**Player-led tutorials video**
[![Player-led tutorials](http://img.youtube.com/vi/7l2_Agekmvs/0.jpg)](https://youtu.be/7l2_Agekmvs)

It's Wednesday and I've been reflecting on [Roguelike Celebration](https://roguelike.club/), listening to some early [Dwarf Fortress Talks](http://bay12games.com/dwarves/df_talk.html) and thinking about how to make the tutorial order of execution more likely to happen in the most sensible fashion. I'm trying to figure out how to make the tutorial on the Crude Toolshop come before the Butchers' tutorial.

I conclude the ordering is not essential so the tutorial on the Crude Toolshop is triggered when a job fails because a tool is missing or the player selects the Workshop tool. I was tempted to deliberately force this situation by not giving spades to starting Farmers but this muddied the Farming and Workshop concepts.

In the video you can see clips from the [Stockpile](https://www.youtube.com/watch?v=7l2_Agekmvs&t=5s), [Workshop](https://www.youtube.com/watch?v=7l2_Agekmvs&t=9s), [Melee](https://www.youtube.com/watch?v=7l2_Agekmvs&t=12s), [Craft](https://www.youtube.com/watch?v=7l2_Agekmvs&t=20s), [Harvest](https://www.youtube.com/watch?v=7l2_Agekmvs&t=27s) and [Farm](https://www.youtube.com/watch?v=7l2_Agekmvs&t=33s) tutorials.

Separating out the tutorial parts makes a story harder to put together as the parts could be played in any order. However I'm happy with the results and will separate the walls, ramps, floors and stairs from tutorial one because it is long and tiring.

So far these new tutorials are functional but lacking in story. The next big story plot point requires bronze so the tutorial on smelting and forging will see the story starting again. There's an opportunity for a side-quest before then but not for this release.

Coming back to the scripting system after not using it for a while means I am sensitive to what parts are painful or not intuitive. I'm fixing these things as I go, including [forking and hacking Inky](https://github.com/HaikuJock/inky/tree/easy-export) so exporting again automatically exports to the last exported file without navigating the Save File dialog. It works with multiple windows but be careful, there's no way to export to a different file after the first.

For the next week I'm going to write the remainder of the tutorials in a similar fashion and break apart tutorial one.
