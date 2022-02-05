---
author: jock
---
* [Global Game Jam: OccuIT](https://globalgamejam.org/2022/games/occult-it-9)
* Scripting bugs


**OccuiIT video**

[![OccuiIT](http://img.youtube.com/vi/wLLxFxO9nUM/0.jpg)](https://youtu.be/wLLxFxO9nUM)


For the [Global Game Jam](https://globalgamejam.org/2022/games/occult-it-9) I teamed up with a couple of other programmers and a designer/artist. Us programmers wanted to experiment with making a multiplayer game using WebRTC. The finished game is called [OccuIT](https://andersmurphy.github.io/ggj2022-occult-it/) and it's a casual, fun little game. To play multiplayer, scroll down and hit the 'Play online' button. If someone else is playing anywhere in the world you will automatically join their game.

Tuesday and I'm putting together a job-description for a QA person, fixing some bugs and doing a bit of work on OccuIT.

Wednesday and Thursday and I'm fixing the issue 'Workshop tutorial: Proceeds for items crafted in any workshops'. Last week I said I wouldn't fix this and that was partly due to the complexity and partly due to it being unimportant (a few of the tutorials will behave oddly but still explain the mechanics correctly). I decided to pursue a fix because it will be useful for future scripts. That and I don't like not fixing things. And I don't like that I tried and failed to make a fix last month. These are not good business-sense reasons. On the other hand this fix will also help fix a bug with the harvesting tutorial.

Friday morning and I'm adding versioning to scripts. I get to the point where if an old script spawns some actors a new version that is loaded will restart and spawn those actors again. This is a pickle. Fortunately scripts already track spawned actors so they can be removed from the world before restarting the script. Unfortunately items and vehicles are not tracked. I add tracking for vehicles but decide it's not important to track spawned items yet.

I've not decided on the next feature yet and I will be fixing a few more bugs before then.
