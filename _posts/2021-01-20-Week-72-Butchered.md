---
author: jock
---
* Butchery implementation trade-offs
* Git Large File Storage
* Butchery reconsidered
* Tree UI implemented
* Streamer research - [Nookrium](https://www.twitch.tv/nookrium)
* Backlogging the bladder need
* Salt caves and forest generation
* Learning [LFA Tai Chi Form](https://www.lfataichi.online/)

**Butchery and Tanning video**
[![Butchery and Tanning](http://img.youtube.com/vi/qYb-n_m-XXo/0.jpg)](https://youtu.be/qYb-n_m-XXo)

This week I bring you a rawer account of what I've been up to, it's less filtered, there's a lot of thinking out loud and probably too much techno-babble. Love it or loathe it? Let me know. ;-)

I started on Thursday with considering how butchering deer corpses for leather and meat will work. Ugh. Currently, there are only Dwerg corpses that are just items. There's a problem with this in that when a Dwerg dies, their story is lost, you can't even find out how they died. There's nothing in a corpse-item to say what kind of corpse it is. I came up with a couple of ways to resolve this. 

The first, simplest option, is to add a sub-type field to the item class indicating what type of corpse it is if it is a corpse. My object-oriented brain dislikes this idea because not all items are corpses so the sub-type field is unused in the majority of items. My optimisation brain dislikes this idea because it increases the memory size of all items to solve a corpse-specific problem. 

The second, complex option, is to add a corpses system that keeps a reference to the corpse item and a reference to the actor (Dwerg or animal) that the corpse came from. In addition to satisfying my object-oriented and optimisation brain, this option ensures that if an actor loses a limb, that limb does not also appear when the corpse is butchered. It also prevents the loss of Dwerg stories when they die. The complexity comes in when saving the state of the system; the items system must make an exception for corpse items and not store them  because the corpses system needs a reference to that specific item so it will be tied with the actor who died.

This is one of the many reasons why all software is broken. Any new feature adds complexity, but after a certain point, if the software design has not anticipated it, any implementation will have trade-offs.

Much of Thursday I spent adopting Large File Storage on my Git repository. A perilous task since it involves deleting the history of every image file. I used the [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) and everything appears to have worked OK. I did have one moment of panic when I made image changes on one branch, realised I wanted to be on another branch, stashed the changes and switched branches; the other branch didn't have LFS for the image file so I merged the main branch into it and then tried to apply my stash. I got a conflict which I thought I'd resolved but ended up with the LFS text files with the image file-extension on my file system. Simply deleting the offending files and having git restore them restored the images. I think LFS is probably overkill for my images which are mostly less than 1MB but probably worthwhile for the audio files. It looks like this is a path to monetisation for GitHub; you only get 1GB of free LFS space, I'm at 90% already.

Thursday afternoon I went and implemented the simpler solution for corpses and by the end of the day I had a Dwerg butcher a deer for giblets and skin. Next step is the outhouse and urine collection. Yuck!

But is there a third option for corpses? I'm not liking the current implementation because the Provisions I introduced last week will need modified. Why can't the corpse 'material' just be Deer? Conceptually because a Deer is a type of item and not a material, although all these concepts come from the same type (a giant enumeration of everything in the game). There are assumptions made about the material of an item, (e.g. its colour comes from the material) but there is no Deer material. Another option is to add a flesh-material for each type of animal. The problem here is that the number of materials are limited.

Of course, does it matter? Provided we are not butchering Dwergs, the outcome is the same; meat for food and skin for leather. The type of meat and skin is only decoration.

I should be more honest about why I'm not liking the current implementation. The initial workshop-templates were configured with a set of items that can be made there and a set of materials those items can be made from. Butchering an animal involves taking only the carcass and producing a number of different items. Problem of cardinality and type.

So my dislike stems from different problems that I am conflating. Separate and deal with.

What are the other problems with the new item sub-type?

The names of items are currently "\<material\> \<type\>", the skin produced from butchering the deer is now "Flesh Skin". Fix: Where items have subtypes names become "\<sub-type\> \<type\>". This works for "Deer Skin" but will it hold up for future uses of sub-type? Tanning the "Deer Skin" will produce "Deer Hide", making boots from the "Deer Hide" will produce either "Leather Boots" if we drop the subtype or "Deer Boots" if we keep it. Or we can use both sub-type and material: "Deer Flesh Skin", "Deer Leather Hide", "Deer Leather Boots"

On Friday morning, after fixing a handful of issues with the butchering and the item sub-types, I was not feeling ready to implement the bladder need. I wanted to work on something better understood and more precisely defined. The list of items in the stockpile is becoming unwieldy and needs better organised. Stockpiles have the ability to restrict by material type but this requires a tree UI element. This has been in the back of my mind for a while and I'd even looked at a few tree implementations but always felt that there was a simple way of doing it with dictionaries. This [stackoverflow post](https://stackoverflow.com/a/942088/595050) shows what this most elegant implementation is. That's just the data-structure representing the tree, the UI element took a bit more work but it was satisfying to inherit from my ScrollPanel and have everything just work(TM).

The prolific and always entertaining streamer, [Nookrium](https://www.twitch.tv/nookrium), recently [uploaded](https://youtu.be/VpyZ_AhPS4s) [three](https://youtu.be/GBByOCfUUfU) [videos](https://youtu.be/O-0QT9T1IAA) of another game inspired by Dwarf Fortress, [King Under The Mountain](http://kingunderthemounta.in/). This is looking amazing and the team has ambitious plans for it, including multiplayer. A comment from Nookrium while playing was that he would like three z-levels. I know I've felt overwhelmed by the size of maps in Dwarf Fortress but it also adds to the discoverability and adventure of the game. Let me know how you feel about z-levels in Dwerg Saga, too many or too few?

On Saturday I spent most of the day finishing off the tree UI for the types of items in a stockpile. The basic tree element handles the expanding and collapsing of nodes in the tree but the checkboxes that select individual items and groups is part of the stockpile element. The checkboxes also indicate if a subset of the child nodes are selected. I feel like the checkboxes logic could be abstracted into a checkbox-tree which I'll look into when that functionality is needed in another element. Much of the code felt repeated and it could certainly be improved but I am happy with the end-result. Using stockpiles highlighted the issue that they should remember what nodes of the tree are expanded and where the scroll-bar is. This is part of a larger job that involves saving user-interface state for the client, separate to the state of the game. One for the backlog.

I finished up on Saturday evening with fixing a handful of bugs and picked up the bladder need on Sunday morning. The motivation for implementing this was to supply urine for tanning leather. I'd picked up this idea from a description by Neal Stephenson in his Baroque Cycle. Reading more Wikipedia articles about this I think fermented urine was used to de-hair hides. This is part of the process but can also be done with lime. Leather processing has a number of steps: salting, washing, liming, fleshing, tanning and drying. So tanners will also need salt, plenty water, tubs for soaking, bark for tanning and racks for drying.

So I'm looking into tanning more than I really need to. There's a part of me that wants to just simplify it for gameplay and there's a part of me that wants to put all the detail in. There's also a part of me that wants to address the poisonous waste products. (One of the motivations for the bladder need is that keeping fresh and waste water separate is a fun challenge.) So I'm not going to implement the bladder need yet. The Tanning workshop will be simplified; I'm going to introduce salt as a minable resource and a piece of salt, plus logs (bark) and a skin will be needed to produce a piece of leather.

After compromising on what tanning involves on Sunday I started adding salt-caves that can be mined out. I hit a few snags here colliding with the existing copper and tin caves but eventually got patches of salt near the surface that I am happy with. Making changes to the terrain generation system requires me to visualise the results of octaves of noise which is mentally taxing. There are not many tests around this system so the code quality is also sub-par.

On Monday morning, while I still had terrain generation relatively fresh in mind, I increased the quantity of fruit-bushes found in forests and fixed an issue with tree generation that was making the forests look patterned.

So making a piece of leather requires the skin, salt and bark. Everything crafted in a workshop so far has been made with raw materials. The skin is not a raw material. And this is the first item made from multiple parts. Some buildings are made from multiple parts and a static template is used to determine the provisions of the parts. However, the player has no choice in the parts of the building. With the workshop there's the choice of what type of wood to use. Do I A: Specify the material in the job or B: Specify indices into the static template describing the item construction. The first increases the memory size of the object used to communicate jobs over the network, but is more expressive and easier to understand, but it is more complex to test crafting jobs, and doesn't even cover all the varieties of the use of details. i.e. sometimes details specify buildings. Or C: Specify provisions as an additional thing in the job.

So I went with specifying the material in the job which involved a large refactoring, changing all job-commands and details to the new provisions. This took the rest of Monday and part of Tuesday morning. Sometimes I wonder if I enjoy refactoring too much.

Adding a sub-type to provisions allows me to clean-up the butchering job so that the type of animal being butchered is specified in the provision rather than pretending to be a material. As well as craft items being constructed from multiple parts, each part can be varied by either material or sub-type. So a piece of leather can be tanned with oak or pine logs and either a deer or dire wolf skin (although I've yet to add dire wolf corpses).

In non-game news I've decided to learn a new Tai Chi form. This is the [Lee Family Arts](https://www.lfataichi.online/) Form and is one of seven. I bought the book at least ten years ago, but [Sheila Dickinson's demonstration](https://youtu.be/NxNZWGtAX4o) has inspired me to actually learn it.

If you like jazz, I highly recommend the [Emmet Cohen Trio](https://www.youtube.com/c/EmmetCohen/featured) on YouTube. They stream a live concert every Monday night (10pm, New York time).

For the next week I will be mostly brushing up on Unity and AWS in preparation for some contract work starting in February.
