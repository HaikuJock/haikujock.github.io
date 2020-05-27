---
author: jock
---
* Ramps in elevation view
* Autumn, winter and battle music
* Sockventure: Prologue

**Moving through the world in elevation view video**
[![Elevation View](http://img.youtube.com/vi/_EHs0YZVKPw/0.jpg)](https://youtu.be/_EHs0YZVKPw)

The elevation view is very nearly complete. The biggest problem has been figuring out what to do with ramps. Ramps take up two cells; an up ramp and a down ramp above. This was done so ramps were visible on both layers when only a single layer was being drawn in plan view. Path-finding is done between adjacent, not diagonal, neighbours so ramps require a top and bottom for that to work. I could have made ground tiles fill half a tile in elevation view and then drawn both the tops and bottoms of ramps but this would increase the number of tiles significantly. In the end I decided to simply not draw the down ramps in elevation view.

Depth increases from the bottom of the screen whereas height increases from the top of the screen. If I'd considered this at the start of the project I would have put the origin at the upper-top-left corner of the world and saved myself some headaches. To give a feeling of depth, the first filling tile behind the front tile is darkened by distance and drawn behind. The world data is organised with the expectation that it will be read sequentially along the x-axis to make most effective use of the cache. The elevation view breaks this and I might have to limit zoom distance and/or the draw depth to maintain performance.

Frans has been working on the autumn, winter and battle music tracks. The autumn track is my favourite as it captures a feeling of a busy harvest time and celebration. The battle music has been made more exciting with the addition of a [Bodhran](https://www.bestservice.com/celtic_era.html) and a tambourine.

Yesterday saw the release of [Sockventure: Prologue](https://store.steampowered.com/app/1294300/Sockventure_Prologue/) on Steam. It's FREE! A super-sweet and hard as nails platformer. The controls are tight and work just as you'd expect. The visuals are bright and clear, you know what's going to kill you and what's safe straight away, no confusion with the backgrounds either. The coins show a clear path with extras thrown in to stretch your skills. I've not played platformers in years but this game brought back the joy.

For the next week I'll be constraining tools to only work on the near plane in elevation view, fixing some bugs and finally letting those poor Dwergs catch some shut-eye. Frans is putting the finishing touches to his thesis and working on the summer and winter tracks.
