---
author: jock
---
* Combat bugs
* Build pipeline
* Various bugs
* Build pipeline fixed
* Git LFS regrets

**City of Dwergheim video**
[![City of Dwergheim](http://img.youtube.com/vi/DEYxooyLjGk/0.jpg)](https://youtu.be/DEYxooyLjGk)

Monday morning and after a hearty breakfast of fried Flintworm and eggs I settle into the bug where unarmed Dwergs sometimes flee after being instructed to attack. My approach this time is to make some guesses about the cause and I write tests that rule out two possibilities. I make an adjustment that makes attack jobs retry repeatedly and this causes the test that verifies Dwergs will surround a hostile target to fail. Figuring out why this test fails helps me identify the cause of the original bug. Another example of how a comprehensive set of tests can be used to support development.

I have a gas engineer round to diagnose my broken boiler so I am working from my bedroom with my laptop. I find little bits of code duplicated in route-finding and route-traversing classes and I'm not so proud of myself. I feel like I am traversing a tree of bugs whenever I look into path-finding bugs; I find two more branches whenever I look closely at one. By the end of the day I have a fix that passes all the tests and play-testing confirms it is good.

Tuesday morning and I decide it's time to sort out the build pipeline once and for all (ha ha). First step is to make a Docker image that can build for Windows, then one that can build for Mac. Once that's done I can think about where to run them, either AWS or Azure. Except I've misunderstood. I was thinking I could build a Docker image for each operating system but Docker is only Linux. To build for Windows I could use [Wine](https://www.winehq.org/). To build for Mac there is a GitHub repo [Docker-MacOSX](https://github.com/sickcodes/Docker-OSX) (it just needs 200GB for the base system!) or I could use AWS Mac EC2 instances. Ho hum... I want to minimize the height of the technology stack, the taller they are the more often they fall. So really I don't want to use Docker. I want a Windows machine to do the Windows build and a Mac machine to do the Mac build. Which is exactly what Azure Pipelines gave me. Sounds like I've come full circle, let's see if I can fix the Azure Pipelines.

The error on the build server is:

Error : Importer 'TextureImporter' had unexpected failure!

Googling this error and I eventually come to the conclusion that the build server has had a library removed in one of its [updates](https://github.com/actions/virtual-environments/commits/main?after=9b6af5b76eee1c6d7ef95b086a6a740c4fec7443+34&branch=main&path%5B%5D=images&path%5B%5D=win&path%5B%5D=Windows2019-Readme.md) in the past year. (It actually hasn't, the library I assume is missing is listed but I refuse to acknowledge this information. A bad case of confirmation bias). Apparently, [the best way to fix this](https://github.com/MonoGame/MonoGame/issues/4485) is to rebuild four dlls linking them statically with the missing library.

* [mojoshader](https://github.com/MonoGame/mojoshader)
* [NVidia texture tools](https://github.com/castano/nvidia-texture-tools) (NVTT.DLL)
* [FreeImage](https://github.com/MonoGame/FreeImage)
* [FreeType](https://github.com/freetype/freetype)

Sure, how hard can that be? Hard. I spend the afternoon and evening just trying to get mojoshader to compile. I get sad about it and decide to cheer myself up with a pizza which results in eating too much and drinking cola, thus a night without much sleep. Note to self: go for a walk next time.

To cheer myself up on Wednesday morning I fix a bug asking agents to move out of the way. It's a good fix and it makes me happy. The rest of Wednesday I continue to pursue fixing the build pipeline. Making little progress and with no guarantee that what I'm doing will fix the problem I conclude it's a waste of time. Builds take minutes to make and I intend to have someone doing QA for only one day a week.

Back to the bugs on Thursday morning I add mood-modifiers when needs are very low and when fully satisfied. This is a simple fix to prevent Dwergs being ecstatic while they starve to death. I'm struggling with motivation on Thursday afternoon and end up reading the first book in [The Murderbot Diaries](https://en.wikipedia.org/wiki/The_Murderbot_Diaries) by Martha Wells. Recommended and I'm half-way through the second book now.

I'm playing my long-running, big-clan game on Friday and notice Dwergs are struggling to get to a water source when many are gathered there. Re-using Wednesday's move-away fix for finding personal space sorts this out.

I'm looking at a mining bug on Friday afternoon and I'm somewhat shocked at how bad the bug is and wonder how long it has been in the game. The bug is with the mining tool, dragging out an area that starts on flat terrain and ends on flat terrain on a z-level below, creates jobs that cannot be completed. I roll-back the code to version 0.15 and build. The build fails because I added [Git Large File Storage](https://git-lfs.github.com/) (LFS) since 0.15 and that required deleting the history of all the images. I cherry-pick the images and run the build again, this time I get the error:

Error : Importer 'TextureImporter' had unexpected failure!

Cherry-picking a file under LFS on to a branch that does not have LFS brings the LFS reference file (a text file) rather than the real file. In this case the image files are actually text files and the texture-importer fails. That error looks mighty familiar, and yes (aaargh!), the build pipelines are failing because Azure Pipelines don't support LFS by default. Thankfully it's a simple fix.

I am definitely regretting switching to Git LFS. As well as not being able to run old versions quickly and losing about five days on a wild goose chase fixing the pipelines, I have exceeded my 1GB LFS data limit with GitHub and must pay $5 per month for it. The upside is that Git works quickly and will continue to do so no matter how large my binary files grow. I do wonder if it would be worth dropping LFS. It doesn't look straightforward and I'd lose all the file history I've accumulated since adding it.

For the next week I'll continue bug-fixing and hope to make a release on Friday. Friday is the start of the [Edinburgh Global Game Jam](https://globalgamejam.org/2022/jam-sites/edinburgh-global-game-jam) which I will be attending over that weekend.
