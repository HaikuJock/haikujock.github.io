---
author: jock
---
* Flora refactor
* Farming tutorial progress
* Cart sprites
* [Twitch](https://youtu.be/j-q4AUAX93o?t=1643) appearance
* Procrastination
* Stockpile fixes

**Watching the Grass Grow video**
[![Watching the Grass Grow](http://img.youtube.com/vi/_jTPI_zhTaA/0.jpg)](https://youtu.be/_jTPI_zhTaA)

Before extending the second tutorial to cover farming I refactored the flora, adding new plants is achieved by adding data and doesn't require new functionality. Leaving code in a better state than you found it is an excellent rule of thumb that both your colleagues and future you will be grateful for.

The first step in extending the second tutorial is to go back to the first tutorial and spawn the merchant's cart mentioned in the text. I use [Sprite Something](https://terriblegames.com/spriteSomething/) to draw sprites when I'm on public transport and in August last year I made a number of cart sprites. I am planning for the cart to be a mobile stockpile that allows the player to travel with their clan in the real-world-mapped Dwerg universe (Dwergiverse?) I have a variety of sprites, from single-tile hand-carts to multi-tile wagons, that just needed tweaked. The first stage of the cart implementation will be a static prop which you can see in the video-clip.

Over the weekend I got carried away with drawing the cart elevation-view sprite. The orthogonal drawing didn't look great so I tried angling it to give it more depth. It looks better but I'll spend more time on it when I go back to do the elevation sprite when the cart is facing east-west. I spent too much time playing [Rogue's Tale](https://store.steampowered.com/app/265990/Rogues_Tale/). It is best played with a number-pad rather than a mouse.

Dwerg Saga made another appearance [on Twitch](https://youtu.be/j-q4AUAX93o?t=1643). That's two of two Twitch streams where the user skipped the tutorial, so I'm only going to allow skipping for users that have already played the tutorial. The flooding of the user's desktop with a ton of files is pretty bad so I've adjusted the packaging to include a batch file that launches the game and put all the game files in a subfolder. This is the first step in making a proper launcher app that allows the user to choose screen-resolution and other configuration details.

Monday was all about procrastinating over adding seeds to the cart for the second tutorial. This led to questions about having the cart move worlds with the tribe and the cart being a stockpile. Before making the cart a stockpile I thought I'd best do that refactoring to make stocks work like other job-providers. Looking into that I figured it wasn't desirable. Then I started making carts stockpiles, but why? I know carts and wagons are going to be significant components in the game, moving goods between worlds and trading with other players. How the player interacts with their cart is going to be quite different to stockpile interactions. So that got parked.

I got back to the tutorial and farming on Tuesday, and guess what? One of the Dwergs found some seeds in their pocket. Problem solved. I did some work on the UI to give the player information about the crops they choose, this just needs tweaking and highlighted in the tutorial.

Today I fixed some issues with stockpiles so that items already in a stockpile are updated when stockpile parameters are changed. Increasing the test-coverage around this made me happy.

Frans has been working on the winter and spring night-time music. These are sounding great and working on the spring music has prompted Frans to go back and improve the spring daytime music with instruments that appear in the other tracks.

At GameDevEd last year I had the pleasure of seeing a work-in-progress of a 3D representation of the inside of a 4D cube and last month the developer made a video of the latest progress. This [video](https://www.youtube.com/watch?v=BSP1k2ydg14) will bend your mind!

For the next week I will be finishing off the farming tutorial and going through a list of bugs and small improvements that I've noted while testing. Frans will be finishing the re-vamped spring music.
