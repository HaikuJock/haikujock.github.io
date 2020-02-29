---
author: jock
---
* Documentation of cloud architecture
* Development stack is complete
* Patrons are now in the game credits

## Detail

On Friday I documented the cloud architecture for the game. Not really an architecture, more a handful of boxes connected with arrows. I did this because I need to create a development stack before release. After release I need to replicate the stack in different regions to ensure minimal lag between users and servers. Stepping back and looking at the diagram, I realised the only part that needs to be replicated is the ECS task that runs the server. Documentation FTW!

Starting work on the development stack I identified another opportunity for automation, the build and deployment of the Lambda functions. There's a [good tutorial](https://docs.aws.amazon.com/lambda/latest/dg/build-pipeline.html) on how to do this and it was going well until I came to executing the Cloud Formation change-set. The Lambda functions already exist and the change-set was failing because it couldn't create them. It turns out providing a 'FunctionName' means that it can't be updated. Arcane but at least it's [documented](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-functionname).

At Konbo on Saturday I discussed Solas with it's designer and completed Golden Axe, way shorter than I remember. The development stack was complete and running by the end of the day. I now have branches that deploy both the Lambdas and the Docker image for the dedicated server whenever it is pushed to; one for release and one for development.

On Sunday I was visiting family but spent the evening looking over the [Patreon API](https://docs.patreon.com/#introduction). They have everything I need for me to identify users in particular tiers and provide appropriate in-game rewards. I made some notes on what I need to do to do the integration and then wandered over to YouTube to continue watching one of Jonathan Blow's videos on motivation. (I don't have any issue with motivation at the moment but it's good to be prepared). While there I noticed some videos of Tarn Adams giving talks on Dwarf Fortress. Gold bullion! What I found most interesting is that they are also using the Big-5 model of personality and, amusingly, had also added in their own facets due to a lack of negative descriptions.

On Monday I revamped the tier-rewards and, having looked at the Patreon API, adding member names to the credits looked possible. Writing a tool to do this took most of the day but gave me a better understanding of the API and certainty about using it to enable in-game rewards. In the evening I started making the Windows build pipeline for the full version of the game which is a UWP app. This continued into Tuesday and I had a signed, installable version of the game running ... for 5 seconds before crashing. I headed to GameDevEd at Ox184 feeling a bit gloomy but cheered up after a pint, a burger and some valuable play-testing. I was feeling like I'd done enough play-testing and need to get on with fixing the things the playtests have told me, but two play-tests later I had a bunch of new notes.

The remainder of the week was spent updating build pipelines and fixing the bugs that only appear in Release builds. Fun. I'm very close to release but don't want to rush it out in the late evening. I'll update again tomorrow.
