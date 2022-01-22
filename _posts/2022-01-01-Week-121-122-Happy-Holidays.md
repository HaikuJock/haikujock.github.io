---
author: jock
---
* Happy Holidays

On Saturday evening I get started on preventing scripts from grabbing the camera off the player. I start by pausing any script as soon as it starts and highlighting a continue-script button. This is fine for the start of scripts but scripts frame Dwergs at any time, for example when the player completes a task. On Sunday I decide that the frame script-command will only frame its target if that target is visible, otherwise it will pause and the continue-script button will be highlighted. On Monday I remove Saturday's work and start testing each of the tutorials. I find that there are points where taking the camera from the player is acceptable, but this is the exception so I add another script command to support that.

I am now in the habit of making regular builds and running networked games on another machine. As I develop I can test behaviour by connecting to the networked game. This means the networked game will be getting more attention and I'm not going to be surprised by network bugs. Doing this provides motivation for fixing the CI pipeline ahead of contracting someone to do QA.

Last week I was playing with a much larger clan of Dwergs and found that it would be very useful to be able to select a Dwerg with the Move tool. This being a small change I went ahead with it. Adding and removing from the selection, making groups and hot-keys for groups will be essential features for larger clans.

Tuesday afternoon and I'm just fixing UI bugs. My scroll-panel implementation needs some love. The workshop panel is the first place items can be added and removed from any position in a scroll-panel. I did not test this enough when I first implemented it and there are a handful of issues involving the scroll-offset. Thankfully it's nothing too complex and I finish off the day fixing a couple of bugs with building floors over stockpiles and building doors out of loam.

On Wednesday I fix the issue with jobs reporting as missing materials when they are actually inaccessible.

On Thursday I’m fixing issues with the workshop tutorials not recognising when a workshop is built and I find a bug with building workshops on top of each other and another bug where a job remains inaccessible when it shouldn’t. Fixing these takes the rest of the day.

On Friday I fix the issue with the workshop tutorials failing to continue if there are no Dwerg builders. This is the first time I’ve used [InkScript Tunnels](https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md#1-tunnels) and they work as expected. Nice.

I’ve taken the last week as a holiday, visiting friends and family. I’m writing this on New Year’s Day while curtains of Highland rain drift past my window. I expect I won’t be doing much for the next week either. It’s time for some reflection and resolutions for the year ahead.

Reflecting on the past year I’m most annoyed at myself for taking a year to make a release. I’m blaming this on having too nebulous a goal and there being too many bugs.

I’ve been wrestling with the “Know Yourself” part of the game’s tagline. This was born from the idea that the game should be saying something important. I’d much rather the game was fun to play and, if the player wants to tell a story that is important to them, the game can be a vehicle for that.

My first resolution is to make at least four releases this year. The first will be a bug-fix release this month. My second resolution is to plan future releases so there is a clear goal for each. My third resolution is to contract at least one person.

A big thank you to all my patrons, your continued support really means a lot to me and I hope that at some point in the coming year I can deliver something that you find enjoyable.
