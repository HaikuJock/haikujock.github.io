---
author: jock
---
* Merge conflicts
* Pick-up menu
* Workshop queues
* QA & Play-testing

I'm in Levels café on Saturday afternoon fixing the Mac build and a few bugs. On Sunday morning I have an idea about optimising terrain generation but measuring indicates it makes no difference.

On Monday morning I merge from the QA branch into the Needs branch. This is a real fiddle and takes about an hour to fix all the conflicts. Working on two branches at once isn't great. Apart from the conflicts, I've been focussed on the Needs while Athena has been focussed on the release. Finding the cause of a bug with the Dwerg toolbar takes the rest of the morning and fixing it takes half an hour. The rest of the day I'm testing and fixing issues with combat and the new pick-up menu.

Refining the pick-up menu to work with Dwergs in the target location takes most of Tuesday. Testing, tweaking armour and fixing minor issues fills the rest of the day.

Athena raised an issue with the workshops last week that I chose to address on Wednesday. Removing all the items in a workshop's queue did not cancel the job in progress. This was unexpected and required the user to cancel the job with the job-cancellation tool.

Upgrade path-testing fills Thursday morning with Athena verifying all the bug-fixes and refining the in-game UI test-plan further. I make a number of 16x16 item icons for the UI in the afternoon.

We released [version 0.17.2](http://dwergsaga.com/2022/05/27/Release-0.17.2.html) on Friday. Athena verified all the bug fixes and finished the test-plan. The Azure pipeline worked as expected and it has been really useful providing Athena with builds.

For the next week I'll be merging in the Needs work, play-testing and balancing while Athena starts to QA it all. I'm hoping to make another release with the Needs work in before the end of June.
