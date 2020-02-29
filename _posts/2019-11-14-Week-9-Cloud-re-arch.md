---
author: jock
---
* Cheaper, faster game servers
* Game jam at Edinburgh University
* Concurrency headaches and writing tests
* Release in ten days!

## Detail

On Friday I went to BrewDog on Lothian Road in Edinburgh to get some play-testing done and figure out an improved cloud architecture so launching a game doesn't take five minutes. Before my laptop battery died I had a running Docker image of the dedicated-server and server-launcher. Returning home I spent the evening reading up on ECS and concluded it can do everything I need: UDP is supported and I can specify the world to launch with the game. Assuming I can build the docker-image from CodeDeploy the server-launcher can be simplified as it doesn't need to download the latest dedicated-server build. Nice.

On Saturday and Sunday I took a break from my usual routine to attend a game-jam organised by the [Edinburgh University Game Development Society](https://www.eusa.ed.ac.uk/activities/societies/society/gamedevsoc/). It was fun to make a game really quickly in Unity. Have you ever wanted to hold your keyboard like a guitar and jam like a rock-star? Now you can with [BreakJam](https://gamedevsoc.itch.io/breakjam)!

On Monday I got stuck into ECS and set up a pipeline to build the dedicated server Docker image. Then I updated my Lambda function to launch the ECS task with the world for the user's location instead of launching an EC2 instance.  Decent AWS documentation and TDD meant I could develop this change entirely without having to deploy. The only wrinkle was getting hold of the public IP address of the machine the task is running on. Getting this requires keeping the EC2 SDK in the Lambda function to query the network interface. On Tuesday morning I fixed a few issues with permissions to run the task and an undocumented requirement on the network interface query. Tested with two clients connecting and it looks good. The server stops and uploads the changed world to S3 after 15 minutes of no clients connected. Launching a new game is down from 5 minutes to 45 seconds which is good enough for release but something to improve on.

On Wednesday I identified a concurrency issue when two users try to create the same game at the same time. After fixing this I realised why the clan refresh was taking longer than I'd like. I was relying on file modification-dates to decide if a clan was more recent which resulted in clans being uploaded unnecessarily. I didn't have tests around these functions so I was a good boy scout and remedied that too.

Today I got some advice on security and decided not to put everything behind an API for the first release of the cloud game. I finished the delete-account functionality and have a final, final list of things I need to do before release.

* Allow users to re-map key bindings
* Explain why the game needs the user's location
* Show the busy-indicator when the game is syncing
* Ensure text is always readable in alerts
* Add a privacy policy and terms and conditions on sign-up
* Document the cloud architecture
* Create a cloud development environment
* Create a new game on [itch.io](http://itch.io/)
* Create Azure build pipelines for the cloud game

So probably another ten days before release. So excited!