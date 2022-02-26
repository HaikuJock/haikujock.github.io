---
author: jock
---
* Congestion
* Busy stockpiles
* Needs planning

![Jira Needs 1 Epic](/assets/img/Needs1Epic.png)

Monday is for fixing congestion problems. Movement instructions are limited to one per Dwerg. If the player instructs a Dwerg to go somewhere but another Dwerg asks them to move out of their way, they will forget the player's instruction. To fix this, requests to move out of the way are prepended to a list of move instructions. This fix lays the groundwork for giving movement instructions with multiple waypoints.

On Tuesday I continue with fixing congestion problems caused by stockpile jobs. This time it's where there are many haulers but only a few items to haul, so the haulers get in each other's way when collecting. It's a simple fix to not give out more jobs than there are locations to collect from. I continue with a few more fixes for the stairs and mining tools and detailing the tasks for the Needs epic takes me through Wednesday.

Thursday and Friday I continue detailing the Needs epic. By Thursday afternoon I have made 80 cards and covered all the features I want to include. 

My refinement process is to go through all the cards repeatedly, fine-tuning, detailing, making consistent, generalising and data-driving. If I make any change in a pass I force myself to go through the whole lot again, as any change might have implications for other cards. This is a change in my process, previously I've left feature descriptions short and vague. Deciding when a card has enough detail isn't obvious. Could I implement it? What if ...? Are the questions I ask myself. I imagine how it will work. A few times I've thought a card done but come back the next day with changes.

On Friday afternoon I have 110 cards. Now I just need to cut out 20 so I can fit the work inside three months. My options are:

* Remove the effects of extreme needs. I don't want to do this because then there is no incentive to satisfy needs.
* Remove new effects of extreme Thirst, Hunger and Social. I don't want to do this for the same reason.
* Remove Bedrooms and Dining rooms which only add variety to satisfying Sleep, Hunger and Thirst. This is fewer than 20 cards.
* Remove Cooking and Brewing which only add new ways to satisfy Hunger and Thirst.

I move the Cooking and Brewing features into a new epic, Needs 2, and now I'm ready to start implementing Needs 1. For the next week I will be working on the effects of aging on Dwergs and adding indication on the UI when a need is becoming extreme.
