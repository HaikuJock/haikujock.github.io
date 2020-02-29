---
author: jock
---
* LAN game host and client lobbies. "LAN Games" from the launch screen.
* New water and solid terrain sprites
* Crash bug fixes around rendering
* Bug fixes around network game syncing

Version 0.3 of Dwerg Saga is now available for $3-tier patrons via [itch.io](https://haikuinteractive.itch.io/dwerg-saga/patreon-access). Changes in this version:

By this point I hoped to have the persistent-universe version of the game available. That hasn't happened so I've taken a bit of time to map out exactly what needs done and investigate areas of uncertainty to come up with a more accurate estimate of when it will be ready. The new estimate is a further 23 days.

Have fun and try not to drown your Dwergs!

![Drowning Dwergs](/assets/img/DrowningSmall.gif "Drowning Dwergs")

## Detail
This week I've been fixing lots of bugs with the networking code that handles re-syncing the game state with clients when lag causes them to get out of sync. I had previously tested this with a host and a single client but had failed to take into account the complexities introduced by additional clients that don't necessarily require a full re-sync. I'm tempted to just re-create the host in the same way as the clients and send the same state to all clients regardless of whether they requested the state or not. The trade-off is increased complexity vs increased network traffic. I took a day away from programming to think about this.

I almost managed an entire day of not programming. Pixel-art; I acted on some feedback that the solid terrain was not distinguishable from the floor, got the silhouette of a Fisher-Dwerg, went to Konbo to chat with fellow [edindies](https://twitter.com/edindies), fiddled with the water textures but ended up also adjusting water transparency in code. I concluded I would live with the increased complexity for game-syncing over the network but will re-assess if it continues to cause problems.

On Sunday I did a refactor; wrapping the [networking library](https://github.com/lidgren/lidgren-network-gen3) so I can test my use of it and removing the dependency between my server and the world simulation. Sweet, I can now write tests around the server in a tiny solution file, super-fast code-build-test cycle. I completed full test-coverage of the game networking code, improving my understanding, adding better error-handling and removing some pointless code. This area of the app is complex because a peer is both making connections and accepting connections. Peers should now work over the internet as they make direct connections with IP addresses instead of relying on local network discovery, essential for the dedicated server.

I spent some time investigating Amazon EC2 instances and decided I can use these to run the game using an Amazon Machine Image. I've run a VirtualBox with Amazon Linux on it locally and verified I can build and run .NET core console applications on it. This is the work I need to do next along with approximate estimates:

* Dedicated server that doesn't require MonoGame or any of the assets - 2 days
* Fix assumption that all peers in a game have a clan (the dedicated server doesn't have one) - 1 day
* Amazon Machine Image running Linux, dotnet core and the dedicated server - 1 day
* Checkpoint: Connect to a dedicated server running in the cloud.
* User-interface to start a cloud game - 1 day
* Lambda function to decide what to do with a user when they start a cloud game - 2 days
* Determine user's location - 1 day
* Lambda function to generate a new world based on a user's location - 2 days
* S3 bucket to store worlds - 1 day
* Lambda function to store a world in the S3 bucket - 1 day
* Lambda function to start a dedicated server with a world - 1 day
* Dedicated server functionality to start with a given world - 1 day
* Dedicated server functionality to accept new users from a Lambda function - 2 days
* Lambda function to connect a user to a dedicated server - 1 day
* Checkpoint: Connect to a game running a persistent world based on location
* Dedicated server functionality to trigger a Lambda when all users disconnect - 1 day
* Lambda function that stores the world and shuts down the dedicated server - 1 day
* User-interface messaging of errors - 1 day
* Testing & bug-fixing - 3 days

There are some caveats to this estimate:

* If EC2 instances don't start up fast enough I will need to look at having a permanent instance on standby.
* Lambdas, S3s and EC2 instances will be in Europe so the cloud game is unlikely to work outside of Europe. Additional Amazon regions will be added after launch.
* At this stage updating the dedicated server will require an overnight full shutdown and manual update. This needs to be automated and not require a shutdown.

## Development Process
When I went to work for a little app development company called Kotikan, I was introduced to the discipline of Test-Driven Development and the brilliant [Uncle Bob](http://cleancoder.com/products). Having worked with large code bases in the past and endured the pain of long build times, I wanted to always ensure that Dwerg Saga would have very short build and test cycles. I'm happy to say that I have achieved this.

The core of Dwerg Saga is a library that depends only on .NET Standard and an [implementation](https://github.com/protobuf-net/protobuf-net) of [Google's protocol buffers](https://developers.google.com/protocol-buffers). Development of new features is test-driven and usually involves creating a tiny 3x3x3 world, spawning the required elements, running the update loop a number of times and then asserting something about the world that has changed. This ability to develop features without having to run the full game means I can develop new features quickly and with confidence that they won't break existing features. After completing the fluid simulation I was able to separate it from the core of the game and it is now independently testable. As the game grows I expect to break out separate libraries to ensure high productivity.
