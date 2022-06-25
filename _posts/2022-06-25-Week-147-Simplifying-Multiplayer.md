---
author: jock
---
-   VPN testing
-   De-synch simplification
-   Released

Running a Dwerg Saga dedicated server on my PC at home, I go out to Levels café on Saturday with my Mac laptop and connect over a VPN. I encounter more de-synch issues than I'd like and make notes hoping to find patterns. Friday's multiplayer playtest with Athena did not have these problems. I suspect there may be differences between the Mac and PC that mean the simulations are not deterministic. Another possibility may be where many builders construct multi-part buildings in close proximity.

Investigating further on Monday and I find all the de-synch issues stem from a fix I made last Thursday. De-synch occurs when there is network lag between peers. To fix this the host pauses the game, sends the full state of the world to the clients and then resumes. Except it's not the full state. To keep world-state small there are short processes (e.g. jobs-in-progress and conversations) that are not included. The short processes are stopped when world-state is created. In theory a world created from some state and a world where that state was obtained from are identical. This is proving too complex to maintain and on Tuesday I change the host so that it also re-creates its own world. Writing this makes me realise all the clients need to re-create their own world, not just those that had a de-synch issue, fixing that takes up Thursday morning.

The rest of this week Athena and I have been testing and trying to break things. We find a small number of minor issues but nothing serious so the release goes ahead on Friday.

For the next week I'll be re-designing the tools hierarchy and fixing minor bugs. It's Athena's last week and we'll be doing a retrospective and planning for the next release. I'm planning on doing only 60 tickets for the next release so there is time to play-test and bug-fix, fitting the release inside three months.
