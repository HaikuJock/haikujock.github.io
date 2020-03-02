---
author: jock
---
* Networked game development
* Credits

The goal for this week was to finish the new LAN game hosting, lobby, joining and leaving.

I begin the week realizing I've not credited Professor Lewis Goldberg for using his work and fix this immediately.  The release pipeline Just Worked and Version 0.2 is available. I contacted Professor Goldberg to apologize for not crediting him and it got me thinking about how to make personality more... personal. In the next month or two I will add the ability for players to enter their own values from the five-factor model for the leader of their clan. The personality test to determine these values is freely available and has the snappy name, IPIP-NEO, go take the test and learn something about yourself! Long-term I'd like to make the test a piece of interactive fiction in the game.

LAN development is being hindered by the lack of tests around this part of the code. I've resisted doing this both for networking code and MonoGame-specific code because the shape of the code is somewhat dictated by the idiosyncrasies of the library being used.

The LAN development now has everything in it that I need to progress on to the dedicated server. One notable missing feature is host-migration. I've left this out because it is not a requirement for the cloud-version of the game; and that's the current road-map milestone. While testing with five machines I found a crash bug and bugs with the code that synchronizes peers when lag causes them to get out of synch.

The goal for next week is to fix the remaining network bugs, wrap the network library, add tests around the network code and start work on the dedicated server. Next week I will release version 0.3 to $3 tier patrons.

Keep on Dwerging!