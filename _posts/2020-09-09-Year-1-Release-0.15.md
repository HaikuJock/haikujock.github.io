---
author: jock
---
* Dwerg Saga is officially One! Happy Birthday Dwerg Saga!
* Release 0.15

It's been a year and I still love doing this. How about you dear patron/valued customer/casual observer? Are you satisfied with my progress? Am I focussing on the right things? What would you like to see more/less of in the next year?

This week was one of those rare beauties where I did what I said I'd do; I finished the Flintworms, added a tutorial on combat, added the health tab to the UI and indicated when a Dwerg is damaged. Conscious of the known bug in last month's build, I finished feature work on Monday to focus on testing. I found a number of serious bugs, mostly in networked games, the best one being the pets doubling in number every time I quit and re-joined.

For the next week I know I'll be upgrading everything to .NET Core 3.1. I'm going to take a few days to reflect on the year so far, seek some advice on what to do next and figure out some rough milestones for the next three months.

**Release Notes for version 0.15.0**

Release 0.15 is now available for $3 patrons on [itch.io](https://haikuinteractive.itch.io/dwerg-saga/patreon-access). 

Known Issues:

* Networked games: Water occasionally causes unending synch problems. Having clients quit and re-join the host is a workaround.

Features:

* Crude Workshops
* Craft simple tools in your workshops.
* Flintworms
* Plant pine, oak and grass.
* Colour failing jobs red and show why they are failing with a tool-tip.
* Diagonal movement
* Add health bar to Dwerg details UI.
* Flash Dwerg button when they take damage.

Bug-fixes:

* Render items in front of stockpiles.
* Fix crash with fast-moving entities when time is accelerated.
* Don't add build jobs in deep-water.
* Jobs: Improve which agent gets to do a job based on when it can get round to it.
* Move Tool: Select all visible agents in rectangle-selection.
* Camera: Stop following agent when they die.
* Audio: Don't play animal injury sound when it's drowning (sounded broken).
* All players now have a unique identity so networked games will remember who players are when they re-join; jobs will re-appear, workshops will work.
* Mining: Fix rare bug where mining would complete but broken job would still exist.
* Networked: Remove pets when clan disconnects.
* Networked: Assign deterministic GUIDs to animals
