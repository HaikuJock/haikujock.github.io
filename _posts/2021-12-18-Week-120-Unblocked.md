---
author: jock
---
* [Exon: Fragment](https://raodaozao.itch.io/exon-fragment)
* Roguelike controls experiment
* Path-finding terrain costs experiment
* The [Dwerg Army](https://youtu.be/7GWBnVX135M)
* Building without blocking
* UI bug-fixes

**Building without blocking video**
[![Building without blocking](http://img.youtube.com/vi/CL2DZ4KpZrY/0.jpg)](https://youtu.be/CL2DZ4KpZrY)

This week I've been playing a bit of [Exon: Fragment](https://raodaozao.itch.io/exon-fragment). Exon has been developed part-time by a solo developer over a number of years and is a lot of fun to play. There's a combination of fast-paced action and the beginnings of an interesting narrative. I've not finished the first mission as I've been having too much fun being repeatedly smashed into my component parts in the Arena. The combination of melee and ranged abilities make for a control system that's easy to pick up but hard to master.

It's Thursday morning and I've not done much so far this week. I tried a couple of ideas, parked them and then took advantage of a month of free Amazon Prime, watching six episodes of the Wheel of Time and getting back into The Expanse.

The first idea I tried was something that occurred to me a few months back after playing [Rogue's Tale](https://store.steampowered.com/app/265990/Rogues_Tale/). I was encouraged to implement it after the Roguelike Celebration talk, [Possibility of Roguelike Elements](https://youtu.be/X4be22WoVgg). I mapped the numeric keypad to movement commands for the currently selected Dwerg. If there is a place for it, it will need to be more responsive and pause the game after each movement.

The second idea was to add the movement costs into the path-finding. I made floors quicker and forests slower to move through. The regions don't have any understanding of movement costs so sometimes the routes chosen appear odd. I think each region having an average movement cost will help with this.

I made a debug command to spawn a Dwerg and then [just spammed it](https://youtu.be/7GWBnVX135M).

Today, bugs...

A deeper dive into attempting to fix "Building: Sometimes build order prevents access to other build jobs". I've fiddled with job-priorities so that as a job becomes less accessible its priority increases. Additionally Dwergs won't work on a lower priority job in a contiguous block. Rendering the priorities and recording videos has made finding bugs simpler. I've improved the situation, it's not going to work in every situation, but enough of the common cases.

On Friday morning I check mining out floors is working and move on to fixing UI bugs. The tooltip not appearing when the UI changes beneath it and scroll-panels breaking when items are moved or they are cleared. On Friday evening I continue play-testing. I've started using a second machine to do play-testing on. This helps play-testing a long-running game as on my development machine I will often create a new game to test features.

For the next week I will continue looking at known issues and any bugs that appear while play-testing.
