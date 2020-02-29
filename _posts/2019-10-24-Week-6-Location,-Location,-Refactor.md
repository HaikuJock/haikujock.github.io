---
author: jock
---
* Ask the user to use their geo-location.
* Set up a database to store world and running-game state.
* Testing the cloud game in the wild (cafes).
* Thai red curry.
* Extracting terrain generation from the simulation.

## Detail

On Thursday evening I reviewed the work planned for the week and dug into areas I am unfamiliar with. I dipped my toes into how to get the user's location and found [XPlat-Windows-APIs](https://github.com/XPlat-Apps/XPlat-Windows-APIs) to be a decent starting point. It doesn't support Mac but the Mac location APIs are very similar to iOS. I settled on Amazon RDS for the database to store a registry of the states of worlds and wrote out an initial set of fields.

On Friday I changed the Windows cloud version of the game to be a UWP app because that looks like the only way to get a user's location. Thankfully having two different versions of the MonoGame framework isn't a problem but the compiler takes noticeably longer to figure out it doesn't need to build the assets. Location access on Windows has worked out fine although I've yet to test it on a laptop in a cafe.

As is my habit now, I was in Konbo on Saturday, with the main purpose of testing NAT punching. Before leaving my house, I launched a dedicated server on AWS and set up my PC to repeatedly connect every 5 minutes, stay in game for 10 minutes and then disconnect. I took two Macbooks to Konbo and attempted to connect to the dedicated server and my home PC. After a number of tests, and then poring over the logs, I learned four things. Firstly, the network in Konbo would not allow connections between my machines, even when trying to set up a LAN game. Secondly, peers need to send a heartbeat to each other to maintain their connection. Thirdly, there's a bug where a peer can lose its clan when connecting to a host fails. Fourthly, there's a bug where a new peer joining a game in progress does not send its clan to the server.

On Sunday I made a big pan of Thai red curry; long slices of chicken breast, green beans, sweet potato, sweetcorn, chilies, ginger, garlic, onions, peppers, tomatoes, coconut milk and peanut butter. Despite burning it tastes damn fine and that's my freezer stocked with eight more meals.

I figured out that the two bugs were caused by the same thing; the server was starting the game before receiving all the clans. A couple of tests added and it's fixed. The heartbeat is a few more tests and I finish off the day with four peers joining the dedicated server in the cloud and all is well.

On Monday I set up my PC auto-connecting again and joined the dedicated server, while my home PC was in-game, with two Macs from [Codebase](https://www.thisiscodebase.com/edinburgh-1) hot-desking. This test worked well; the two Macs connecting to my home PC via it's public IP address and connecting to each other over the local-area network in Codebase. The second test where my Mac in Codebase is connected to the dedicated server and my home PC joins the game failed; my home PC was not able to connect to my Mac. This puts a bit of a dampener on the whole idea of being able to play Dwerg Saga "anywhere and any time." There's another piece I can put in where, if a peer is failing to connect to another peer, the host can instruct the second peer to make the connection instead. A friend, and former colleague, suggested looking at the [Factorio](https://www.factorio.com/blog/) blog and the [GDC vault](https://www.gdcvault.com/), and if all else fails clients can proxy their commands through the server. For the moment I'm going to leave NAT punching and networking as it is and I will revisit shortly after the first release.

While at Codebase I got the geo-location working on Mac but there's some oddness where, if you don't allow access, it doesn't ask you again and the app doesn't appear in System Preferences under the Location settings. I'll re-check this in Release mode but suspect I have to be a registered Mac developer and do the whole code-signing dance. Shudder.

On Tuesday I created the database to store a registry of all the worlds and running games. After some faffing about (VPCs, Security Groups, MySQL and not RDS) I have a Lambda function querying the database for a world at the user's geo-location and inserting a new record if one doesn't already exist.

On Wednesday I had a meeting with [my accountant](https://www.oneaccounting.co.uk/) and cleared up some questions I had on what I can and cannot expense. Wednesday afternoon I spent uploading accumulated expenses to [FreeAgent](https://www.freeagent.com/) and then refactoring.

The terrain generation part of the game was one of the first pieces written. It doesn't have any tests around it because generating good terrain is more about aesthetics than engineering. It is also heavily dependent on the rest of the simulation code but doesn't need to be. As part of creating the world-generation service, I will be separating out the terrain generation. I could include the entire simulation code in the world-generation service, only refactoring if there's a problem with generation because of simulation changes. It would allow me to move faster now but it would mean moving slower, and duplicate work, in the future.

As recommended by Patron Number One, I've been reading [The Curve](http://www.thecurveonline.com/) by Nicholas Lovell to help me with marketing. It's a very interesting book and I'll be revisiting the reward tiers here before releasing the cloud version of Dwerg Saga.

Reviewing the road-map to the Dwerg Saga Cloud I estimate I have made 4 days of progress this week, so only 19 days until release.

Thank you for reading and have a sweet, sweet day.
