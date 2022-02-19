---
author: jock
---
* Contracting QA
* Tool-Responsibility conflict
* Stockpile fix
* Next feature: Needs

I'm looking for a contract QA person for one day per week to test Dwerg Saga. Fully remote. Three months or until the next release, whichever is later. 

Requirements:
* Own computer (PC or Mac) capable of running Dwerg Saga
* Willing to learn new processes and tools
* Within one hour of UK time zone

Responsibilities:
* Create a smoke-test covering the key components of the game
* Provide criticism
* Provide critical feedback on features as they are added
* Report bugs with concise reproduction steps

If interested, contact jock _at_ haikuinteractive.com with your CV and daily rate.

On Saturday afternoon I enjoy chats with fellow developers on the Edinburgh GameDev Discord. I'm working on making the mine tool also remove plants. I am conflicted about this as there is an implicit relationship between Tools and Responsibilities, implied by the similarity of their icons. Now the Mining Tool requires the Forestry Responsibility to remove plants. I'm not sure if this is a big problem, the Harvest Tool already requires Forestry when it is used to chop down trees to make timber. I wonder if using the responsibility icon to display jobs in the world might help.

Sunday morning and I do some testing of the removing plants. I don't find any problems so I move on to the few remaining bugs.

On Monday I address an issue I observed with many Dwergs all trying to stockpile items at the same location. The fix restricts hauling jobs to one per stockpile location and indicates where items are being hauled to.

On Tuesday I decide to do some network testing but I'm slowed down by Windows and Visual Studio updates and don't get as much done as I'd liked. I make a start on defining the next feature; filling out the Needs and satisfying them.

The next feature will be the Needs system and on Wednesday I start using JIRA to organise the work for it. I fill out the details for the Bladder need and add some details missing for the Sleep need. Given my previously measured rate of working at approximately one card per day, I'm keeping in mind an upper limit of 90 cards in order to make the next release in about three months time.

In the afternoon I take a look at a congestion issue I noticed while testing on Tuesday; many Dwergs travelling in opposite directions down a tight corridor get stuck. I create a test with two Dwergs getting past six Dwergs which works fine but another test with four Dwergs going in opposite directions reproduces the problem.

Doing some play-testing on Thursday and I find a number of issues with the mining tool that I'll address before starting the new feature. Odd that I didn't notice these issues when I was looking for them on Monday. Partly why I'm looking for someone to help with testing, I'm not good at testing my own work.

For the next week I'll continue fixing bugs and filling in details of the needs feature.
