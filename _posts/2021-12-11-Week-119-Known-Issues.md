---
author: jock
---
* Wild ideas
* [Ray Harryhausen](https://www.nationalgalleries.org/exhibition/ray-harryhausen-titan-cinema) exhibition
* Crash bug not so serious
* Test-driving route-finding
* A* analysis
* Breaking things worse

**Part-way Route-finding video**
[![Part-way Route-finding](http://img.youtube.com/vi/nPcQOYB3PVE/0.jpg)](https://youtu.be/nPcQOYB3PVE)

On Saturday evening I start a number of things that I'm interested in. I'm play-testing at the same time on a second machine and find that I really need water-pumps. The job-indicator for fleeing is the same as for other move jobs. I have an idea on how to fix the path-finding. Before hiring a QA person I want to gather all my unit tests and make human-readable test-cases. I decide to implement my own priority-queue. I think doors would be more interesting if they could be held open and allow water to flow through them. Travelling through a closed door would require time to open and close it. I consider the possibility of a shader for water on grass that would result in puddles and streams.

On Sunday I go to the [Ray Harryhausen](https://www.nationalgalleries.org/exhibition/ray-harryhausen-titan-cinema) exhibition at the [Scottish National Gallery of Modern Art](https://www.nationalgalleries.org/visit/scottish-national-gallery-modern-art). Recommended++. On Sunday evening I'm showing off the game to a friend and I find networked games crash when a client tries to connect.

On Wednesday morning I sift through all the wild ideas and shelve most of them. I keep the flee icon and exporting human-readable unit tests for [TestRail](https://www.gurock.com/testrail/). Now I just need to find and fix the crash bug... Turns out this was caused by me copying the clan on one machine to another and therefore trying to have the same clan from two different clients. This shouldn't be supported but it also shouldn't crash. I'll look into it further for the future internet-release.

Back to the list of Known Issues, I fix three. Moving options tabs into their own screens, updating world information under the cursor every frame and fixing the door rendering issue.

I have a separate Visual Studio solution that contains the core projects and their test-projects. It doesn't depend on the game engine or the UI so build time is reduced and that all important [red-green-blue cycle](https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html) is faster as a result. Happiness. This is what I work with on Thursday morning.

I start putting tests around the region-bound route-finding class. Asserting some simple things on the simpler public methods, adding a constructor that takes interfaces instead of concrete classes and removing the hacky part-way route-finding I added last week.

I go on to write more tests around the core route-finding functionality and soon find a bug. The route-finder executes over a number of frames but the regions can change during this time. If any region on a route changes, the route-finder has to restart. The bug is that this check on the region-route is never performed.

I finish Thursday re-implementing the part-way route-finding that left me feeling dirty last week. Test-driven and the solution is robust enough to break apart any piece of the region route that is too long. As part-way routes are completed they are concatenated with the route found so far.

While testing in-game on Friday morning I find a cute bug. Dwergs will move diagonally if their route takes them one direction and then another. The calculation used to decide if they can do this assumes that a route does not go back on itself. The concatenation of part-way routes means that now routes sometimes do go back on themselves. The bug manifested as the Dwerg making a short diversion to avoid themselves.

I spend more time than I should on the path-finding. There's one last piece that's annoying me. It feels like agents should be finding more direct routes. I'm using Manhattan distance as the heuristic estimate for the [A* algorithm](http://theory.stanford.edu/~amitp/GameProgramming/). This is a perfect heuristic because neighbours for the algorithm are only edge-neighbours. But it does result in many more searched nodes than appear necessary and when agents traverse these routes they move diagonally so the route is sub-optimal. Using an octile distance, but still using only edge-neighbours, results in even more nodes searched but a more direct route. I'm further constrained by insisting on using integers instead of floats for priority. (This is to avoid de-synch issues in float implementations across hardware in networked games). All of this is somewhat moot since terrain will eventually add cost to movement. I think I'll revisit, probably using an octile distance approximation and including all-neighbours, when I add terrain movement costs.

I move on to the Known Issue "Building: Sometimes build order prevents access to other build jobs". I make a change that makes things worse.
Building a solid block of 7x7 walls:

![Solid block of wall commands](/assets/img/SolidBlockOfWalls.png)

I broke it:

![Inaccessible build wall commands](/assets/img/WorseBuilding.png)

This already sometimes breaks depending on the order the build commands are given, but my change made it worse. Reverting that I have another idea I want to try.

For the next week I will continue working on Known Issues and bugs. If you find a bug that you find particularly irksome, let me know and I'll take a look.
