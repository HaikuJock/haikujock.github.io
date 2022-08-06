---
author: jock
---
-   Dwerg see, Dwerg talk
-   Ambience interpolation
-   Music and silence
-	New [Exon](https://raodaozao.itch.io/exon-fragment)

Taking time off on Sunday and Monday to enjoy the good weather I start with adding things in a Dwerg's vicinity as possible topics of conversation. Anything that a Dwerg has strong feelings about, including other Dwergs, are possible topics of conversation.

The water and indoor/outdoor ambiences are controlled by FMOD parameters; percentages of the visible tiles that are water or outdoors. The most jarring transitions occurred when moving between depth-levels. I've added a linear interpolation of these values so it takes about a second to go from zero to 100 percent.

On Wednesday I add the Cancel tool and removing buildings with the mining tool as part of the wall-building tutorial.

On Thursday I'm back in the audio trying to find a way of linking player activity to the music. After experimenting with measures of activity I conclude it will only be worth doing if I have each track broken into separate instruments. Four of the music tracks are six minutes long and since periods of day and night are eight minutes long I just remove the looping on these tracks. For the shorter tracks I adjust the loop to occur only 50% of the time and add a loop of silence with a transition back to the main loop that has a 50% chance of triggering. This is all done within FMOD studio rather than code.

On Friday I have another look at upgrading to MonoGame 3.8.1 but don't find any way to build .NET 6 against Xamarin.Mac.

For the next week I'll be playing the latest release of [Exon](https://raodaozao.itch.io/exon-fragment), adding a new enemy type, foreshadowing future threats and adding wandering enemies.
