---
author: jock
---
* The dedicated server is included in version 0.4.
* Give your clan chief your own personality.
* Text-input and UWP fun.
* Dwerg Saga Cloud to be released next week.

## Detail

On Thursday I extended the dedicated server to save the world state and exit when no clients have been connected for a given period of time. As well as using the dedicated server for my own purposes in the cloud, I want it to be possible for users who want to run their own servers to do so. The server-launcher application is only part of the cloud game so it  uploads the state of the world when the dedicated server exits.

By the end of Friday I had the dedicated server saving and exiting after 15 minutes of inactivity, the server-launcher detecting this, updating the database and uploading the new world state. Yay! The persistent, real-world-mapped, Dwerg universe is a reality! On Saturday morning I was full of questions: Why does the server-launcher need to download the code? Surely the Lambda could just run a CodeDeploy, then I wouldn't need an AMI with the server-launcher pre-installed. Why am I thinking each server needs its own docker image? The most effective use of resources would be to run multiple servers from the same  image, or even the same process.

Saturday was the first day I struggled to achieve anything. Just feeling tired after a poor night's sleep. At Konbo it was good to chat with fellow game developers and play-test the delightful [SOLAS](http://www.solasgame.com/). It's a rhythm-based puzzle-game that the developer has put a lot of time into play-testing and tweaking the early part of the game. They've set themselves the challenge of teaching the game mechanics without any text. By the end of the first part I understood the mechanics, didn't feel patronized, was challenged by some of the puzzles and wanted to play more. On Saturday evening I was feeling perkier and fixed a few bugs on the Mac.

On a number of play-tests with the dedicated server I noticed the Linux dedicated server would get out of sync with clients so I took a dive into what was causing this on Sunday. From my tests it appears that the thread spin-wait method was not doing what I was expecting and replacing it with a GOTO statement (gasp!) fixed the problem.

The Windows cloud version of the game has to be a UWP app because I need to use the geo-location API. This brings a bunch of other fun things. The first being the mouse-position doesn't get updated once the mouse goes outside the game XAML Page so scrolling with the mouse at the edge of the screen was broken. I previously mentioned that compilation takes about five seconds longer, after compiling with diagnostic level logging I can see this is the XAML compiling. That's a XAML document with two UI elements. Compiles. Every. Time.

I made another list of things that really need done before releasing the cloud-enabled, persistent-universe version of Dwerg Saga. Item number one is "Come up with a snappy name." Item number two was improving text-fields and making a secure version for passwords.

My text-fields were simply taking the XNA key-code and using a hard-coded map to a string. Yeah, that's only going to work for my keyboard in the UK. I went down a rabbit-hole on this one on Monday, had it working on Windows with the help of some calls to windows APIs, then discovered MonoGame already has a TextInput event handler. Darn, pesky rabbits. While down that rabbit-hole I found another fun UWP thing; the game is created on a different thread to the update thread. This means the keyboard state is different depending on the thread. Another piece of arcane knowledge I will file away in my Tome of Useless Knowledge... and then ritually burn. I finished my text-inputs, complete with selecting, cutting, copying, pasting, a password-secure version and... no I'm not implementing undo/redo on a text-field. Yet. Filed away for future-Jock to deal with.

Release 0.4 is now available from [Itch.io](https://haikuinteractive.itch.io/dwerg-saga/patreon-access) and includes the dedicated server. The dedicated server requires .NET Core run-time for [Windows](https://download.visualstudio.microsoft.com/download/pr/d046f80d-8ad4-4bb9-8db6-8510105de979/07319c666f9951e15c607aed260ab12d/dotnet-runtime-2.1.13-win-x64.exe) or [Mac](https://download.visualstudio.microsoft.com/download/pr/9314da31-774c-4d2b-8743-998f2a21f5ab/bc918ca05ab6b650f2991b205c04f623/dotnet-runtime-2.1.13-osx-x64.pkg). Once that's installed it can be run from the command-line with 'dotnet Haiku.Dwergheim.DedicatedServer.Main.dll'. I've found that the Mac dedicated server doesn't appear in the client's lobby but you can enter the IP address and connect that way. Creating a new clan will now prompt you to enter personality dimension scores from the [IPIP-NEO](http://www.personal.psu.edu/~j5j/IPIP/) test. The scores you enter will determine the personality of your clan chief. I finally got round to fixing the super-fast scrolling that happens when moving the mouse to the edge of the screen. It was making me flinch every time a user struggled with it in play-tests.

Toward the end of the list of completing Dwerg Saga Cloud (snappy enough?) is "Add a development cloud environment" so I can develop without breaking the real thing. I don't want to replicate the "5-minutes-to-start-a-game" way things are working now and then have to fix it twice. So I'm going to fix that first. This means I will be delaying the release by another week. I'll definitely be writing that cloud documentation this week as well :-)

I've been thinking more about additional tiers and in-game rewards for higher-tier patrons. I'll be looking into the Patreon APIs to see what's possible.

Thanks for reading and keep your Dwergs happy!