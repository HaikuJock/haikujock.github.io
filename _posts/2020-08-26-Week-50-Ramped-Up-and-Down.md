---
author: jock
---
* Job-failure feedback
* Quitting vaping
* Fixing ramps

**Feedback for Failing Jobs video**
[![Feedback for Failing Jobs](http://img.youtube.com/vi/Qn6_YokFMMs/0.jpg)](https://youtu.be/Qn6_YokFMMs)


The work-bench component of a crude workshop needs a piece of flint, thematically, for hammers and chisels. Flint must be dug out of the earth otherwise the workshop construction just stops with no feedback as to why. I considered adding a global job-queue that would show all jobs in progress, highlight jobs that cannot be completed and why. This would be a big piece of work and the user still has to find the UI to show this information. Instead, I've coloured failing jobs red and show a tool-tip indicating why the job is failing. This works for all jobs and the tool-tip indicates either if the job is inaccessible or the material type needed.

I finished Friday with testing and noting down anything that didn't feel right. I didn't get much work done over the weekend, catching up with friends and watching [Don't Worry, He Won't Get Far on Foot](https://www.imdb.com/title/tt6288124/). This film has inspired me to stop vaping which will impact productivity in the short term but will save money and improve my health. To distract from the nicotine withdrawal I played a game of [Factorio](https://factorio.com/) with friends all day Sunday. Dwerg Saga will eventually share some of the gameplay elements in Factorio, so Sunday was also research.

On Monday and Tuesday I attempted to fix ramps. Currently ramps consist of a top and bottom. This is necessary for navigation to work but is visually confusing. I had to add some hacks to prevent the ground at the tops of ramps from being rendered in elevation view. In plan view, rendering them on the level they are on gave the impression that the terrain below them is solid, which is not the case. Attempting to fix this in the latest release, I made the tops of ramps appear as if they are on the level below but this is confusing beside rivers, where it appears ramps leading into water are dry when they are not.

I listed the requirements for ramps as follows:

* The tops of ramps are not rendered.
* The tops of ramps are only navigation points, not real terrain.
* The player is never aware of the tops of ramps.
* Ramps can be traversed from top to bottom and vice-versa.
* The tops and bottoms of ramps must be created and destroyed together, unusable ramps should never exist.
* No agent should ever be located at the top of a ramp.

For the last requirement to work agents must be able to move diagonally, this was surprisingly simple to implement and I had it finished on Monday evening. I wrote down outlines of various solutions for the other requirements on Tuesday but none of them were satisfactory. I woke early on Wednesday morning and figured out a way forward while half awake.

For the next week I'll be finishing ramps and finally introducing the first-level monster, I'm currently toying with the concept of Flint Wyrms.
