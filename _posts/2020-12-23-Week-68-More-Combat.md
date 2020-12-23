---
author: jock
---
* The Mini, Sedan or Rolls-Royce of combat systems
* Body parts and armour
* Staying focussed by constraining details
* Future modding-support
* Pause for contracting

If an agent is wearing armour it only covers a part of their body. This introduces body-parts. A Dwerg's skeleton is not the same as a Flintworm's. Dwergs may learn that some body-parts are better protected than others while fighting. This is the kind of thing I was thinking of when I came up with knowledge insights; bits of information that Dwergs could share in conversation that would impact gameplay. How much of this should I implement given my current goal of enabling the player to defeat Copperpedes in order to mine for tin and copper?

**Mini**: Ignore body-parts, each piece of armour covers a percentage of an agent, that percentage is the chance that any blow is affected by the armour. Some animals have natural armour that covers a percentage of their body.

**Sedan**: Add skeletons. Armour covers specific body parts. Blows hit a random body-part. If the body-part is hit the blow is affected by the armour there.

**Rolls-Royce**: Additionally damage to body parts causes specific types of injury (e.g. leg injuries impair speed, arm injuries impair dexterity). Agents can choose to target specific body-parts. Agents gain knowledge about others when they see that hitting one body-part does more damage than hitting others. Curious agents choose to vary where they attack to better understand their enemies. This knowledge can be transferred in conversations. Some body-parts are smaller than others and so are harder to hit. Armour is damaged by impacts. Weapons are damaged by armour. Natural weapons (e.g. fists, bites) that are damaged translates to damage to the attacker. Allow the player to instruct agents to subdue rather than kill.

As usual I'm inclined to choose the Mini option for this iteration. In this case however the "coverage percentage" will become obsolete in future iterations (or re-purposed as a coverage of the body-part rather than the whole body), so I'm reticent. Given a helmet and two shirts, how does a Dwerg decide which pieces to wear? With some concept of body parts a Dwerg can choose to wear parts that are not covered. So I definitely need body-parts.

I'm getting bogged-down in the details of combat so I need constraints to stay focussed. The player will only see a text description of the combat so details are only worth adding if they improve this description. Weapon damage types (slashing, piercing and bludgeoning) determine the description of the attack, dodges and parries are included and now I'm adding armour-types that will determine the description of how a damage type is deflected.

While adding weapons and armour I tried moving the static item stats into a JSON file. This is a move to support modding by having items, buildings, flora and fauna specified in JSON files. I've verified that this works but it's more work to add new items to JSON than it is to specify them in code so I will put this on hold for the moment. Continuing with the minimalist art-style I showed last week, I've made black and white sprites for these new items.

In January I will start contracting for about six months so I will pause billing for the duration. I will publish updates on progress as it happens but don't expect much.

Happy Holidays!
