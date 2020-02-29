---
author: jock
---
![Story Tab on Legend](/assets/img/ScreenshotStory.png "Story Tab on Legend")

When you play the game now you will see the Story tab on the user-interface that pops down at the start of the game. Story events occur for the mundane tasks that Dwergs perform and for conversation statements. There are currently 20 statements a Dwerg can make in a conversation such as greetings, complaints, jokes and insults. What a Dwerg says in a conversation is determined by rules based on their needs, preferences, knowledge and relationships with other participants. The next piece of work in this part of the game is to have personality also play a part.

![Personality Tab on Legend](/assets/img/ScreenshotPersonality.png "Personality Tab on Legend")

Dwerg personalities are generated using the five factor personality model which classifies a personality along five dimensions: Openness to experience, Conscientiousness, Extraversion, Agreeableness and Neuroticism. The personality descriptions you see in the Personality tab are from the paper An Alternative "Description of Personality": The Big-Five Factor Structure with a few additions of my own. The personality generation process is straightforward; generate a random number for each of the five personality dimensions and then choose the closest descriptions to that point. To determine initial relationships between Dwergs I've assigned each of them a beloved and disliked personality. The beloved personality is a random point that is close to their own but not too close. The disliked personality is a point diametrically opposite to their own with a small random variance.

There are some 50 automated tests that verify the rules determining what Dwergs say in conversations. As new statements are added, and personalities taken into account, I expect the number of tests to grow into the thousands. When I am satisfied with the conversation model I intend to replace the rules governing it with a neural network, trained with the automated tests. The advantage of a neural network is that it will be able to determine reasonable conversation outcomes in novel situations not covered by the tests.

Here's what I've been up to this week.

Summary
I now have the Mac version of the full game communicating with the cloud. I shared a sample app demonstrating my build process. I've started work on improving the LAN game which is a step toward the dedicated server. I made a new sprite inspired by a statue of Artemis in the Petra museum, Jordan.

![Artemis Statue, Petra Museum](/assets/img/Artemis.JPG "Artemis Statue, Petra Museum")


And here's the sprite:

![Hunter Sprite](/assets/img/Hunter256.png "Hunter Sprite")


## Details with techno-babble

The goal of this week was to switch to the AWS REST API and get the Mac version of the full game up to the same level as the Windows version. Real life kicked in and I was looking after my nephews and nieces for most of the week. I drafted  my 6-year-old nephew for a play-test and braced myself for some brutal honesty: he doesn't want a T-shirt because he doesn't like my game because they can't attack. Noted. :-(

I first got re-authentication, clan upload, download and update working. Amazon version 4 signing is so easy to get wrong; a single incorrect character in about 500 bytes and it doesn't work but there's no feedback about where that might be wrong. Signing in has a hiccup called Secure Remote Protocol but I've managed to take a lot from the aws-sdk-net repository and it's now working. All AWS REST calls are now working and I've added some credentials caching so refreshing IAM roles won't happen every time I call a Lambda function.

In the spirit of giving something back to the MonoGame and Itchi.io communities I made a sample app and pipelines demonstrating continuous deployment to itch.io.

I found a small wrinkle with the copy/paste library I'm using; it crashes on Mac. Serendipity came calling; I re-targeted to Xamarin.Mac Modern and the copy/paste is working. Onward!

The first step toward a dedicated server is to change the current LAN game, so that users can start a local server and others can join and leave as much as they want. This generates additional work in the form of a UI to create and join servers but I feel it is warranted given I can verify behavior locally and then use LAN clients to test the dedicated server.

I found discover-local-peers on Mac was failing on the BT router at my brother's. Then my non-Apple Macbook charger failed so, on my bus trip back home, I made the Huntress sprite shown above.

My goal for next week is to get the improved LAN game working.

Let me know if you'd like to hear anything specific about the game, future plans, or more or less techno-babble.

Keep Dwerging!

Jock