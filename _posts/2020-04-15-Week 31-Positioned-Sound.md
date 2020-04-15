---
author: jock
---
* Listener position and velocity
* Scrum planning
* Combat music
* Wind
* Dire Wolves in the tutorial

Audio work continues with a set of UI sounds to play for buttons, toggles, pausing, playing and using tools. After this we'll be adding in-game sounds so on Thursday I added support for playing sounds with position and updating the position of the audio listener. I've made a mistake here of converting zoom-level to a vertical position which makes the listener closer to surface sounds when zoomed-out with the camera at the bottom of the world. Oops. Having all positional sounds in the same audio bus means I can instead reduce the volume according to the zoom-level. Sorted.

On Friday I added velocity to the listener position and tested with a pure-tone sine wave. Using a sine-wave I could very quickly tell when the Doppler effect was sounding odd. In particular this was happening when changing z-levels as the speed of the camera was instantly high and then instantly zero. I've got around this problem by limiting the per-frame change in velocity.

On Monday Frans and I did a full Scrum planning session using [Scrumpoker online](https://www.scrumpoker.online/) to estimate our tasks. Again, this is more process than we need and somewhat artificial as we don't really know what each other's tasks involve, but it's a good learning experience for Frans and useful for us to talk through our tasks.

Frans has been researching medieval music and has composed a tense and alarming music track for combat. I'll post it here for Patrons when he's replaced the synth instruments with his own guitar playing. Frans has completed a first-pass of the ambient wind sounds generated from noise and is now recording some mining sounds in his garden.

I've made a Dire Wolf sprite which is too shonky to share and now I'm working on script commands to support the Dire Wolf encounter in the tutorial.

For the coming week Frans will be continuing with music composition and ambiences. We have planned a separate track for each season and day/night variations. I'll be continuing with script commands for the tutorial and adding in sound-effect hooks as needed.
