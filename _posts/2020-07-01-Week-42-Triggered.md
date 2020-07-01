---
author: jock
---
* Resolved to fix the pipeline
* Opt-in analytics
* [Twitch debut](https://www.twitch.tv/videos/656327844?t=01h09m18s)
* New UI sounds
* Script triggers
* Dawn chorus
* Play-test request

**Harvest tutorial video**
[![Harvest tutorial](http://img.youtube.com/vi/8ju0aq8yn1Q/0.jpg)](https://youtu.be/8ju0aq8yn1Q)

Last week I was whining about difficulties with the build pipelines I set up back in Week 1. This isn't the first time I've had problems and most of the frustration comes from having to wait for the pipeline. Before the next release I will install the [agent](https://docs.microsoft.com/en-gb/azure/devops/pipelines/agents/v2-windows?view=azure-devops) locally so I can fix problems quicker.

Two weeks ago I added analytics to track the duration of game sessions. This is disabled by default, the user-id is a GUID generated locally, unrelated to any other user-id and there's a list of what the game tracks in the Options screen.

I got lucky and Dwerg Saga made its first [Twitch appearance](https://www.twitch.tv/videos/656327844?t=01h09m18s). The streamer spent 30 minutes imagining their ideal chief's personality with his friends and then 15 minutes playing the game. I feel bad because the personality test is part of a real-world research project and my game is polluting the data. I've since clarified that the personality test is intended to be taken as the actual player and store the scores locally so the player doesn't have to re-take the test when they create a new clan.

Up to last weeks release I spent most of my time fixing bugs, tweaking the tutorial and play-testing. Frans continued work on the ambiences and did a second-pass on the UI sounds. UI sounds are hard to get right as they need to sound appropriate to the game and the action while being distinct enough that they are not mistaken for something happening in the game-world.

Post-release I spent a couple of days fixing bugs and making a new wall tile-set that clarifies corners are impassable. The perspective gives the walls a slight sloping look but I can accept that if it is less confusing.

The rest of the week I've been working on triggers for scripts. These are very short [Ink](https://www.inklestudios.com/ink/) scripts that specify conditions in the world and load and run a larger script when those conditions are met. The purpose of triggers is to capture dramatic moments arising naturally in the game and run short pieces of interactive fiction to give depth to the drama. The video above shows the tutorial on food and farming that starts when a Dwerg gets hungry for the first time.

Frans has combined his own recordings of actual dawn choruses with birdsong from the [Yle Archives](https://freesound.org/people/YleArkisto/) on freesound.org to create a dawn-chorus for the Spring ambience. This is a subtle and pleasant reinforcement that a new day is starting. 

Not being able to socialise has limited how much play-testing I've been able to do. If you would like to record a game and share the video with me I would be very grateful. If you can think out loud while playing and record that too you get bonus points.

For the next week I'll be extending the second tutorial to cover farming while implementing farming and crop growth. Frans will be continuing work on the Winter music and taking a look at what to do for the night-time music.
