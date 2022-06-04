---
author: jock
---
* Merge resolution
* Audio feedback
* Crash bug rage

Merging the Needs work into the main branch on Saturday isn't too painful but I do have some failing tests around Mood changes in Conversations. The rest of the week is play-testing and bug-fixing.

[Ethan Robson](https://www.ethanrobsonaudio.co.uk/) joins me on Wednesday to review the game's audio, do some play-testing and make audio suggestions. I'm very happy with his efforts and hope to work with him again once I have accumulated a batch of new sound requirements.

Athena finds a crash bug on Thursday which causes me undue stress. The crash dump cannot be debugged: "Managed debugging is not available for this minidump. Not enough information in this minidump is available to support managed debugging." So what's the point? Why make a dump? 💩 I assume that the crash must be happening in native code.

Athena is undaunted and reproduces the crash twice more on Friday. With her save-game I get it to happen in a debug build. It's not in native code. There is no reason for the dumps not to work. I feel the flames of tech-rage licking at the periphery of my consciousness. I make a ticket to investigate further and swear terrible retribution on Microsoft. Ironic.

For the next week Athena will continue with test-plans around the new Needs features and I will continue with bug-fixing.
