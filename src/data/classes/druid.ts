import type { CharacterClass } from "@/types/character-class";

export const druid: CharacterClass = {
  slug: "druid",
  name: "Druid",
  description:
    "Druids speak the oldest language — the one spoken before words existed. They draw power from the living world itself: the turning of seasons, the fury of storms, the patience of stone. In battle they can become the beast or command the elements, and in counsel they speak with a weight that comes from witnessing centuries of cycles.",
  hitDie: "d8",
  savingThrow: "Will",
  armorProficiency: "light",
  weaponProficiency: "simple",
  shieldProficiency: true,
  perception: "1",
  levels: [
    {
      level: 1,
      features: [
        {
          level: 1,
          name: "Spellcasting",
          description:
            "You draw on the divine essence of nature to cast druid spells, using Wisdom as your spellcasting ability. You prepare your spells from the full druid list each day and cast using the full-caster spell slots shown on the class progression table.",
        },
        {
          level: 1,
          name: "Druidic",
          description:
            "You know Druidic, the secret language of druids. You can speak it and use it to leave hidden messages; those who know the language automatically spot such a message, and others can find its presence only with a successful Perception check but can't decipher it without magic.",
        },
      ],
    },
    {
      level: 2,
      features: [
        {
          level: 2,
          name: "Wild Shape",
          description:
            "As an action, you can magically assume the shape of a beast you have seen before, twice per short or long rest. You retain your mental statistics and can revert as a bonus action. Your available beast forms improve in maximum challenge rating and permitted movement types as you gain levels.",
        },
        { level: 2, name: "Druid Circle Feature", description: "You gain a feature from your chosen Druid Circle." },
      ],
    },
    {
      level: 3,
      features: [
        {
          level: 3,
          name: "Wild Companion",
          description:
            "You can expend a use of Wild Shape to cast find familiar without material components. The familiar is a fey spirit that takes an animal form of your choice and lasts a number of hours equal to half your druid level.",
        },
      ],
    },
    {
      level: 4,
      features: [
        {
          level: 4,
          name: "Cantrip Versatility",
          description:
            "Whenever you finish a long rest, you can replace one druid cantrip you know with a different one from the druid spell list, reflecting nature's constant change.",
        },
      ],
    },
    {
      level: 5,
      features: [
        {
          level: 5,
          name: "Elemental Fury",
          description:
            "Nature's raw power sharpens your magic. Once per turn when you deal damage with a druid spell of 1st level or higher, or with an attack in Wild Shape, you deal an extra 1d8 damage of the spell's type or your natural weapon's type. This increases to 2d8 at level 14.",
        },
      ],
    },
    {
      level: 6,
      features: [
        { level: 6, name: "Druid Circle Feature", description: "You gain a feature from your chosen Druid Circle." },
      ],
    },
    {
      level: 7,
      features: [
        {
          level: 7,
          name: "Nature's Ward",
          description:
            "You can't be charmed or frightened by elementals or fey, and you are immune to poison and disease.",
        },
      ],
    },
    {
      level: 8,
      features: [
        {
          level: 8,
          name: "Beast Spells",
          description:
            "You can cast many of your druid spells in any shape you assume with Wild Shape, performing the somatic and verbal components while in a beast form.",
        },
      ],
    },
    {
      level: 9,
      features: [
        {
          level: 9,
          name: "Natural Recovery",
          description:
            "During a short rest, you can recover expended spell slots with a combined level up to half your druid level (rounded up), none of which can be 6th level or higher. Once used, you must finish a long rest to use it again.",
        },
      ],
    },
    {
      level: 10,
      features: [
        { level: 10, name: "Druid Circle Feature", description: "You gain a feature from your chosen Druid Circle." },
      ],
    },
    {
      level: 11,
      features: [
        {
          level: 11,
          name: "Primal Surge",
          description:
            "Nature's fury flows through you at will. When you cast a druid spell that deals damage to multiple creatures, you can force each of them to make its saving throw with disadvantage. You can use this once per short or long rest.",
        },
      ],
    },
    {
      level: 12,
      features: [
        {
          level: 12,
          name: "Enduring Form",
          description:
            "Your Wild Shape forms are hardier. You gain temporary hit points equal to your druid level each time you transform, and reverting to your normal form no longer causes you to fall unconscious from excess damage — instead the overflow carries into your own hit points.",
        },
      ],
    },
    {
      level: 13,
      features: [
        {
          level: 13,
          name: "Speech of the Wild",
          description:
            "You can communicate with beasts and plants as if you shared a language, and they are inclined to regard you as friendly unless they have been magically compelled otherwise.",
        },
      ],
    },
    {
      level: 14,
      features: [
        { level: 14, name: "Druid Circle Feature", description: "You gain a feature from your chosen Druid Circle." },
      ],
    },
    {
      level: 15,
      features: [
        {
          level: 15,
          name: "Seasons' Turning",
          description:
            "When you cast a druid spell of 1st level or higher, you can shift its damage type among cold, fire, lightning, and thunder, evoking the changing seasons. The chosen type ignores resistance from creatures native to a contrasting environment.",
        },
      ],
    },
    {
      level: 16,
      features: [
        {
          level: 16,
          name: "Guardian of the Wild",
          description:
            "As a reaction when a creature within 30 feet takes damage, you can call on nature to reduce that damage by 2d8 + your Wisdom modifier, wreathing the target in protective foliage. You can use this a number of times equal to your Wisdom modifier per long rest.",
        },
      ],
    },
    {
      level: 17,
      features: [
        {
          level: 17,
          name: "Elemental Mastery",
          description:
            "Your Elemental Fury damage increases to 3d8, and once per turn when a creature fails a saving throw against one of your druid spells, you can force it to be restrained by grasping terrain until the end of its next turn.",
        },
      ],
    },
    {
      level: 18,
      features: [
        { level: 18, name: "Druid Circle Feature", description: "You gain a feature from your chosen Druid Circle." },
        {
          level: 18,
          name: "Timeless Body",
          description:
            "The primal magic you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year, and you can't be aged magically.",
        },
      ],
    },
    {
      level: 19,
      features: [
        {
          level: 19,
          name: "Avatar of Nature",
          description:
            "As an action, you become an embodiment of the wild for 1 minute. You grow one size category, gain resistance to bludgeoning, piercing, and slashing damage, and difficult terrain of natural origin doesn't slow you. While transformed, each enemy that starts its turn within 15 feet of you is restrained by surging growth unless it succeeds on a Strength saving throw against your spell save DC. Once used, you must finish a long rest to use it again.",
        },
      ],
    },
    {
      level: 20,
      features: [
        {
          level: 20,
          name: "Archdruid",
          description:
            "You can use Wild Shape an unlimited number of times, and you can ignore the verbal, somatic, and material (worth 1 gp or less) components of your druid spells. Your connection to nature is so complete that you no longer need food, water, or sleep, though you must still rest to regain your abilities.",
        },
      ],
    },
  ],
  choiceLevel: 2,
  subclasses: [
    {
      slug: "circle-of-the-moon",
      name: "Circle of the Moon",
      description:
        "Moon druids push Wild Shape to its violent extreme, taking the forms of powerful predators and elemental beasts to tear enemies apart from inside the fray. Their transformations are faster, wilder, and far more dangerous than those of any other circle.",
      features: [
        {
          level: 2,
          name: "Combat Wild Shape",
          description:
            "You can use Wild Shape as a bonus action rather than an action. While transformed, you can use a bonus action to expend a spell slot and regain hit points equal to 1d8 per level of the slot expended. You can also transform into beasts of a higher challenge rating than other druids of your level.",
        },
        {
          level: 6,
          name: "Primal Strike",
          description:
            "Your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
        },
        {
          level: 10,
          name: "Elemental Wild Shape",
          description:
            "You can expend two uses of Wild Shape at once to transform into an air, earth, fire, or water elemental.",
        },
        {
          level: 14,
          name: "Thousand Forms",
          description:
            "You have learned to use magic to alter your physical form in more subtle ways. You can cast the alter self spell at will without expending a spell slot.",
        },
        {
          level: 18,
          name: "Apex Predator",
          description:
            "While in a Wild Shape form, your natural weapon attacks score a critical hit on a roll of 19 or 20, and once per turn you can make one additional natural weapon attack as a bonus action.",
        },
      ]
    },
    {
      slug: "circle-of-the-land",
      name: "Circle of the Land",
      description:
        "Land druids are the memory of a specific terrain — arctic wastes, sunken coasts, dense forests, or shimmering deserts. Their spells come more readily than other druids, and their endurance in the wild is unmatched.",
      features: [
        {
          level: 2,
          name: "Circle Spells",
          description:
            "Your bond with a chosen land type grants you access to a fixed list of terrain-themed spells (such as arctic, coast, desert, forest, grassland, mountain, swamp, or underdark). These circle spells are always prepared and don't count against the number of spells you can prepare. You gain additional circle spells at levels 6, 10, and 14.",
        },
        {
          level: 6,
          name: "Land's Aid",
          description:
            "As an action, you can expend a use of Wild Shape to cause a burst of life force at a point within 60 feet. One creature of your choice there takes 2d6 necrotic damage (Constitution save for half), and another creature of your choice there regains 2d6 hit points.",
        },
        {
          level: 10,
          name: "Nature's Sanctuary",
          description:
            "Beasts and plant creatures sense your bond with nature. When such a creature attacks you, it must succeed on a Wisdom saving throw against your spell save DC or choose a different target; on a success, it becomes immune to this effect for 24 hours.",
        },
        {
          level: 14,
          name: "Natural Recovery Mastery",
          description:
            "Your terrain sustains your magic. You can now recover spell slots with Natural Recovery on both short rests without a limit on uses, though still with a combined level up to half your druid level and none of 6th level or higher.",
        },
        {
          level: 18,
          name: "Guardian Grove",
          description:
            "As an action, you can raise a 30-foot-radius grove of protective foliage centered on yourself for 1 minute. Allies within it have half cover and resistance to a damage type of your choice, and the area is difficult terrain for your enemies.",
        },
      ]
    },
    {
      slug: "circle-of-spores",
      name: "Circle of Spores",
      description:
        "Spore druids find beauty in decay, seeing the mushroom and the rot as agents of transformation rather than destruction. They spread living death through clouds of toxic spores and animate the fallen to continue a different kind of existence.",
      features: [
        {
          level: 2,
          name: "Halo of Spores",
          description:
            "You are surrounded by invisible, necrotic spores. As a reaction when a creature moves into a space within 10 feet of you or starts its turn there, you can deal 1d6 necrotic damage to it unless it succeeds on a Constitution saving throw against your spell save DC. The damage increases as you gain levels.",
        },
        {
          level: 2,
          name: "Symbiotic Entity",
          description:
            "As an action, you can expend a use of Wild Shape to awaken your spores instead of transforming. You gain 4 temporary hit points per druid level, your Halo of Spores damage doubles, and your melee weapon attacks deal an extra 1d6 necrotic damage while the temporary hit points last.",
        },
        {
          level: 6,
          name: "Fungal Infestation",
          description:
            "As a reaction when a beast or humanoid within 10 feet dies, you can animate its corpse as a spore zombie under your control until the end of your next long rest. The zombie acts on your turn and can make one melee attack. You can use this a number of times equal to your Wisdom modifier per long rest.",
        },
        {
          level: 10,
          name: "Spreading Spores",
          description:
            "As a bonus action while Symbiotic Entity is active, you can hurl a cloud of spores to a 10-foot cube within 30 feet, lasting 1 minute. While the cloud persists, your Halo of Spores emanates from the cube instead of you, and any creature that enters it or starts its turn there takes the halo's damage.",
        },
        {
          level: 14,
          name: "Fungal Body",
          description:
            "The fungal spores in your body alter your form. You can't be blinded, deafened, frightened, or poisoned, and any critical hit against you counts as a normal hit unless you are incapacitated.",
        },
        {
          level: 18,
          name: "Cloud of Decay",
          description:
            "Your Halo of Spores radius increases to 20 feet, its damage die becomes a d10, and creatures reduced to 0 hit points within it can be immediately raised as spore zombies without expending Fungal Infestation uses.",
        },
      ]
    },
    {
      slug: "circle-of-stars",
      name: "Circle of Stars",
      description:
        "Stars druids read celestial patterns to glean secrets and channel astral power. They call on constellations to transform their Wild Shape into radiant starlight forms, each granting a distinct cosmic boon in battle.",
      features: [
        {
          level: 2,
          name: "Starry Form",
          description:
            "As a bonus action, you can expend a use of Wild Shape to take on a Starry Form of glowing constellations for 10 minutes. Choose one each time you transform: Archer (make a ranged spell attack as a bonus action dealing 1d8 + Wisdom radiant damage), Chalice (when you cast a healing spell, restore extra hit points to one creature), or Dragon (treat rolls of 9 or lower on Intelligence and Wisdom checks and concentration saves as a 10).",
        },
        {
          level: 6,
          name: "Cosmic Omen",
          description:
            "When you finish a long rest, roll a die to determine an omen: on an even roll (Weal), you can use a reaction to add 1d6 to a roll made by a creature within 30 feet; on an odd roll (Woe), you can subtract 1d6 from a roll instead. You can use this a number of times equal to your proficiency bonus per long rest.",
        },
        {
          level: 10,
          name: "Twinkling Constellations",
          description:
            "The Archer and Chalice options of your Starry Form improve to 2d8, the Dragon grants you a flying speed of 20 feet while in the form, and you can change which constellation is active at the start of each of your turns.",
        },
        {
          level: 14,
          name: "Full of Stars",
          description:
            "While in your Starry Form, you become partially incorporeal and gain resistance to bludgeoning, piercing, and slashing damage.",
        },
        {
          level: 18,
          name: "Astral Sovereign",
          description:
            "Your Starry Form lasts until you dismiss it, and once per long rest while it is active you can call down a beam of starlight as an action, dealing 6d10 radiant damage in a 10-foot-radius column (Dexterity save for half) and granting each ally in the area temporary hit points equal to your Wisdom modifier.",
        },
      ]
    }
  ],
  expertise: {
    exploration: [
      "When navigating, foraging, or surviving in natural environments",
      "When identifying plants, animals, weather patterns, or natural hazards"
    ],
    social: [
      "When speaking on behalf of nature, the land, or its creatures",
      "When communicating with beasts, fey, or elemental spirits",
    ],
  },
  spellcasting: "full",
};