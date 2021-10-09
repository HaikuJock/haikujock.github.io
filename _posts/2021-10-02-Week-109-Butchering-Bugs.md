---
author: jock
---
* Meet the butcher
* The 'last' path-finding bug
* Contemplating concept art
* Playtesting
* Conversational Animals

**Copperpede infestation video**
[![Copperpede infestation](http://img.youtube.com/vi/a4b9UD9C07o/0.jpg)](https://youtu.be/a4b9UD9C07o)

I start this week by adding light and shadow to a Butcher sprite I started some months ago.

![The Butcher Sprite](/assets/img/Butcher256.png)

This needs some work but it's not on the critical path so it's going in as is.

There's one last (I promise) piece of path-finding I want to fix. Dwergs can get stuck in loops of asking each other to get out of the way. Recall that only two Dwergs can occupy a location at a time. One way to solve this is to add complexity to deciding who a Dwerg should ask to get out of the way. Another way is to have an idle activity that has Dwergs move off a crowded location.

Contemplating getting some artwork done - concept art and marketing stuff as I want to continue doing the pixel-art myself. I took a look at ArtStation, Fiverr and Upwork as possible sources. It's going to take some time to find the right style, something I'll come back to.

Continuing with more playtesting I've found more path-finding bugs. The 'mini-routes' added to existing path-traversal is dangerous as there is no constraint on having a mini-route on top of a mini-route, ad infinitum. This was happening when Bertha the bear and a Dwerg were blocking another Dwerg as animals could not be asked to move out of the way. Dwergs are polite to each other and start a conversation before asking each other to get out of the way. Animals don't participate in conversations so they are simply instructed.

This got me thinking about how animals can empathise and be trained to understand basic commands and that every conversation statement should have some emotional weight. Something I'll come back to.
