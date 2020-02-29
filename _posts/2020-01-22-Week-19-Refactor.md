---
author: jock
---
* Refactoring
* Play-testing with a non-gamer

## Detail

While working on the new mining tool I became more and more aware of some shortcomings in the job system. So I refactored. When doing a large refactoring, my first step is to review all the areas of code that will be affected and make a note of namespaces and classes. Next I like to write down steps to achieve the refactoring. Each of these steps is a checkpoint where everything compiles and all the tests pass.

That's my preferred and usual process but this time, after writing down the steps, I got excited and just went from file to file rewriting as I went without even trying to compile. On this occasion I think I took the correct approach as there were a couple of re-writes and a very bad choice that I had to revert. I did commit the cardinal sin of changing behaviour while in the middle of the refactor. Luckily the change in behaviour was isolated to a single class that was well covered by tests.

On Saturday and Sunday I was away saying goodbye to friends emigrating to Australia. I didn't get any development done but I did get in a play-test with someone who does not play games much at all. Such play-testers are extremely valuable as they pick up on assumptions that I've made and give a good indication of how effective the tutorial is. This play-tester highlighted the problem of understanding that there are multiple vertical levels, despite the view being 2-dimensional. There's an obvious answer to this problem, make it 3-dimensional. I chose a 2D view when starting this game because the majority of actions performed by the player are best-performed on a plan or elevation view. With a 3D view objects get in the way of what the user is trying to do requiring re-orientation of the camera, something I find very annoying. For the moment I will be making some minor changes to the tutorial to explain the depth better but I will be looking out for this problem in future play-tests.

On Monday and Tuesday I took some time off to catch up on some reading, finishing Roger Zelazny's "The Door's of His Face, The Lamps of His Mouth" and Mihaly Csikszentmihalyi's "Flow: The Psychology of Happiness" and starting on Eric Ries' "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses." And I enjoyed playing Warhammer 40K, Deathwatch, Tyranid Invasion on iPad.

For the next week I'll finish up the refactoring and get on with the work I said I'd do last week.
