---
author: jock
---
* Networking at the Creative Edinburgh awards ceremony and Creative Circles Leith.
* Building and running a Dwerg Saga dedicated server in the cloud.
* Meeting game-developers at Game Dev Edinburgh.
* T-Shirts for my fantastic Patrons.

## Detail

I went to the [Creative Edinburgh](https://www.creative-edinburgh.com/) awards ceremony and 8th birthday bash on Thursday evening to make contact with writers and find out about Creative Edinburgh's Mentorship programme. I was greatly encouraged by the people I met there and have applied to the Mentorship programme for help with marketing. I met with only one writer but it got me thinking about when and how I want to involve a writer. Once I have written the prologue and the first scripted story piece I can prepare a presentation to make to the [various](https://www.facebook.com/events/scottish-poetry-library/bame-writers-group/2354931501245673/) [writers](https://www.meetup.com/Shut-Up-Write-Edinburgh-Meetup/) [groups](https://www.meetup.com/Edinburgh-Creative-Writers-Club/) [that](https://www.meetup.com/Rogue-Writers-Edinburgh/) meet here in Edinburgh.

Work on the dedicated server continues. I first built and ran the dedicated server on a local Linux virtual machine and had two clients connect and run the game successfully. I've set up an Amazon Code Pipeline to build and deploy the dedicated server to an EC2 instance. When I first connected to the EC2 instance via the LAN lobby, the peer-to-peer networking didn't work because I needed to "punch through the NAT". Reading up on [NAT punching](https://bford.info/pub/net/p2pnat/) and half of the problem was fixed by the client sending a packet of unconnected data to the server. I was actually **playing Dwerg Saga in the cloud** for a while; my biggest fear was that the lag between client and server would be too high but it Just Worked! NAT punching required more work, e.g. two clients behind the same router will use two different public port numbers and some of my code assumed certain ports are used for the game and lobby.

After my refactoring of the network code last week, I had full test-coverage and could develop a solution for NAT punching with confidence. It's taken me two days but I now have a system that will make local connections where possible and resort to NAT punching and connecting over the internet only as needed. I've assumed that the host of the game is not behind a NAT because that is true for the cloud version of the game. It should be possible to set up a dedicated server behind a NAT with port forwarding but I haven't tested this.

My latest test today involved two Windows machines and a Mac laptop all connecting to a Linux dedicated server running on an EC2 instance. It's running right now. Ingolf from "The Blue Durable Buccaneers" clan has just met Kettil from "The Grandiose Glorious Stalwarts" clan and "felt much better about it."

Another component that I've missed rears its head: a database of the states of worlds; an entry created when the world is first visited and created, a field indicating if the game is currently running and its address, a link to where the world is stored in S3. I estimate this as an additional 4 days of work.

Looking at last week's estimate and progress I've reached my first checkpoint 3 days behind schedule. With the addition of the database work the estimate is again, 23 days from today. This coming week I'm going to figure out how to get the user's location, make Lambda functions to create worlds and decide what to do with a user when they start a cloud game. I suspect I'll be starting on the world database as well.
