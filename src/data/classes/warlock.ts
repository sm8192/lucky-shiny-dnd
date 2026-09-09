import type { CharacterClass } from "@/types/character-class";

export const warlock: CharacterClass = {
  slug: "warlock",
  name: "Warlock",
  description:
    "Warlocks draw their power from a pact struck with an otherworldly patron — a being of tremendous power who grants magic in exchange for service, devotion, or something less definable. Unlike other spellcasters, warlocks recover their limited but potent spell slots on a short rest, and much of their power comes from Eldritch Invocations that bend the rules of what magic can do.",
  hitDie: "d6",
  savingThrow: "Will",
  armorProficiency: "light",
  weaponProficiency: "simple",
  shieldProficiency: false,
  perception: ".5",
  spellcasting: "pact",
  choiceLevel: 1,
  expertise: {
    exploration: [
      "When uncovering forbidden lore or the secrets of extraplanar beings",
      "When bargaining with or reading the intent of otherworldly entities",
    ],
    social: [
      "When extracting concessions through implied threat or hidden leverage",
      "When invoking the name or authority of your patron to unsettle others",
    ]
  },
  levels: [
    {
      level: 1,
      features: [
        {
          level: 1,
          name: "Pact Magic",
          description:
            "Your patron grants you spellcasting, using Charisma as your spellcasting ability. Your spell slots are few but always cast at the highest level available to you, and you regain all expended slots on a short or long rest rather than only on a long rest.",
        },
        { level: 1, name: "Otherworldly Patron Feature", description: "You gain a feature from your chosen Otherworldly Patron." },
      ],
      extras: { "Invocations Known": 0 },
    },
    {
      level: 2,
      features: [
        {
          level: 2,
          name: "Eldritch Invocations",
          description:
            "You learn fragments of forbidden knowledge that grant persistent magical abilities. You know a number of invocations shown in the Invocations Known column, chosen from a broad list; some grant at-will spells, others enhance your eldritch blast or senses. When you gain a warlock level, you can swap one known invocation for another.",
        },
      ],
      extras: { "Invocations Known": 2 },
    },
    {
      level: 3,
      features: [
        {
          level: 3,
          name: "Pact Boon",
          description:
            "Your patron rewards your service with a gift. Choose one: Pact of the Blade (summon a magical weapon you are proficient with as an action), Pact of the Chain (gain an enhanced familiar that can take special forms), or Pact of the Tome (gain a Book of Shadows granting three cantrips from any class).",
        },
      ],
      extras: { "Invocations Known": 2 },
    },
    {
      level: 4,
      features: [
        {
          level: 4,
          name: "Patron's Insight",
          description:
            "Whispers from your patron sharpen your reflexes. You add your Charisma modifier to your initiative rolls.",
        },
      ],
      extras: { "Invocations Known": 2 },
    },
    {
      level: 5,
      features: [
        { level: 5, name: "Otherworldly Patron Feature", description: "You gain a feature from your chosen Otherworldly Patron." },
      ],
      extras: { "Invocations Known": 3 },
    },
    {
      level: 6,
      features: [
        {
          level: 6,
          name: "Pact Empowerment",
          description:
            "Your Pact Boon grows in strength: your Pact of the Blade weapon deals extra damage equal to your Charisma modifier once per turn, your Pact of the Chain familiar can deliver your cantrips, or your Pact of the Tome grants you a 1st-level ritual spell from any class.",
        },
      ],
      extras: { "Invocations Known": 3 },
    },
    {
      level: 7,
      features: [
        {
          level: 7,
          name: "Fell Vigor",
          description:
            "The presence of your patron steadies you in the thick of danger. When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + half your warlock level (rounded down).",
        },
      ],
      extras: { "Invocations Known": 4 },
    },
    {
      level: 8,
      features: [
        {
          level: 8,
          name: "Eldritch Resilience",
          description:
            "Otherworldly power hardens you against harm. You gain proficiency in one saving throw of your choice, and you have advantage on saving throws against spells cast by aberrations, celestials, fey, fiends, and undead.",
        },
      ],
      extras: { "Invocations Known": 4 },
    },
    {
      level: 9,
      features: [
        { level: 9, name: "Otherworldly Patron Feature", description: "You gain a feature from your chosen Otherworldly Patron." },
      ],
      extras: { "Invocations Known": 5 },
    },
    {
      level: 10,
      features: [
        {
          level: 10,
          name: "Patron's Protection",
          description:
            "Your patron shields you from the worst harm. When you take damage that would reduce you to 0 hit points, you can use your reaction to reduce that damage by an amount equal to twice your warlock level. Once used, you must finish a long rest to use it again.",
        },
      ],
      extras: { "Invocations Known": 5 },
    },
    {
      level: 11,
      features: [
        {
          level: 11,
          name: "Mystic Arcanum (6th)",
          description:
            "Your patron bestows a secret of high magic. Choose one 6th-level spell from the warlock spell list as an arcanum. You can cast it once without expending a spell slot, regaining the ability to do so after a long rest. You gain higher-level arcana as you advance: 7th at level 13, 8th at level 15, and 9th at level 17.",
        },
      ],
      extras: { "Invocations Known": 6 },
    },
    {
      level: 12,
      features: [
        {
          level: 12,
          name: "Empowered Blast",
          description:
            "Your signature eldritch attacks grow more devastating. When you cast a warlock cantrip that deals damage, you can add your Charisma modifier to one of its damage rolls if it doesn't already do so.",
        },
      ],
      extras: { "Invocations Known": 6 },
    },
    {
      level: 13,
      features: [
        {
          level: 13,
          name: "Mystic Arcanum (7th)",
          description:
            "Choose one 7th-level spell from the warlock spell list as an arcanum. You can cast it once without a spell slot, regaining use after a long rest.",
        },
      ],
      extras: { "Invocations Known": 7 },
    },
    {
      level: 14,
      features: [
        {
          level: 14,
          name: "Pact Ascendant",
          description:
            "Your Pact Boon reaches its full expression: your Pact of the Blade lets you make an additional attack when you take the Attack action, your Pact of the Chain familiar gains resistance to all damage, or your Pact of the Tome lets you cast its cantrips as though one level higher.",
        },
      ],
      extras: { "Invocations Known": 7 },
    },
    {
      level: 15,
      features: [
        { level: 15, name: "Otherworldly Patron Feature", description: "You gain a feature from your chosen Otherworldly Patron." },
        {
          level: 15,
          name: "Mystic Arcanum (8th)",
          description:
            "Choose one 8th-level spell from the warlock spell list as an arcanum. You can cast it once without a spell slot, regaining use after a long rest.",
        },
      ],
      extras: { "Invocations Known": 8 },
    },
    {
      level: 16,
      features: [
        {
          level: 16,
          name: "Otherworldly Fortitude",
          description:
            "The power of your pact suffuses your being. You gain resistance to a damage type associated with your patron (chosen when you gain this feature), and you no longer age and can't be aged magically.",
        },
      ],
      extras: { "Invocations Known": 8 },
    },
    {
      level: 17,
      features: [
        {
          level: 17,
          name: "Mystic Arcanum (9th)",
          description:
            "Choose one 9th-level spell from the warlock spell list as an arcanum. You can cast it once without a spell slot, regaining use after a long rest.",
        },
      ],
      extras: { "Invocations Known": 9 },
    },
    {
      level: 18,
      features: [
        {
          level: 18,
          name: "Eldritch Recovery",
          description:
            "The bond with your patron replenishes your power in battle. When you roll initiative and have no Pact Magic spell slots remaining, you regain one expended slot.",
        },
      ],
      extras: { "Invocations Known": 9 },
    },
    {
      level: 19,
      features: [
        { level: 19, name: "Otherworldly Patron Feature", description: "You gain a feature from your chosen Otherworldly Patron." },
      ],
      extras: { "Invocations Known": 10 },
    },
    {
      level: 20,
      features: [
        {
          level: 20,
          name: "Eldritch Master",
          description:
            "You draw on the deepest reserves of your patron's power. As an action, you can entreat your patron to regain all your expended Pact Magic spell slots. Once you use this feature, you must finish a long rest before you can use it again.",
        },
      ],
      extras: { "Invocations Known": 10 },
    },
  ],
  subclasses: [
    {
      slug: "the-fiend",
      name: "The Fiend",
      description:
        "This warlock has bargained with a powerful devil or demon from the Lower Planes. Their patron grants them access to destructive fire, resilience drawn from the suffering of enemies, and eventually command over lesser fiends.",
      features: [
        {
          level: 1,
          name: "Expanded Spell List",
          description:
            "The Fiend lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you: burning hands, command, blindness/deafness, scorching ray, fireball, stinking cloud, fire shield, wall of fire, flame strike, hallow.",
        },
        {
          level: 1,
          name: "Dark One's Blessing",
          description:
            "When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1).",
        },
        {
          level: 5,
          name: "Dark One's Own Luck",
          description:
            "You can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so after seeing the initial roll but before any of the roll's effects occur. Once you use this feature, you can't use it again until you finish a short or long rest.",
        },
        {
          level: 9,
          name: "Fiendish Resilience",
          description:
            "You can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance.",
        },
        {
          level: 15,
          name: "Hurl Through Hell",
          description:
            "When you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape. At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its horrific experience. Once you use this feature, you can't use it again until you finish a long rest.",
        },
        {
          level: 19,
          name: "Master of the Nine Hells",
          description:
            "Your bond with your patron reaches its fullest expression. Once per long rest, you can cast wish without expending a spell slot. When you do, your patron is immediately aware of the wish and may add conditions or complications to its fulfillment at the GM's discretion. Additionally, you have resistance to fire and poison damage permanently.",
        }
      ]
    },
    {
      slug: "the-archfey",
      name: "The Archfey",
      description:
        "Warlocks of the Archfey serve a powerful lord or lady of the Feywild — a being of ancient beauty, caprice, and bewildering magic. Their patron's gifts make them masters of enchantment and fear, capable of charming enemies and vanishing at will.",
      features: [
        {
          level: 1,
          name: "Expanded Spell List",
          description:
            "The Archfey lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you: faerie fire, sleep, calm emotions, phantasmal force, blink, plant growth, dominate beast, greater invisibility, dominate person, seeming.",
        },
        {
          level: 1,
          name: "Fey Presence",
          description:
            "As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail are all charmed or frightened by you (your choice) until the end of your next turn. Once you use this feature, you can't use it again until you finish a short or long rest.",
        },
        {
          level: 5,
          name: "Misty Escape",
          description:
            "When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack or cast a spell. Once you use this feature, you can't use it again until you finish a short or long rest.",
        },
        {
          level: 9,
          name: "Beguiling Defenses",
          description:
            "Your patron teaches you the full extent of the ward that is used to protect the fey. You are immune to being charmed, and when another creature attempts to charm you, you can use your reaction to attempt to turn the charm back on that creature. The creature must succeed on a Wisdom saving throw against your warlock spell save DC or be charmed by you for 1 minute or until the creature takes any damage.",
        },
        {
          level: 15,
          name: "Dark Delirium",
          description:
            "You can plunge a creature into an illusory realm. As an action, choose a creature you can see within 60 feet of you. It must make a Wisdom saving throw against your warlock spell save DC. On a failed save, it is charmed or frightened by you (your choice) for 1 minute or until your concentration is broken. This effect ends early if the creature takes any damage. Until this illusion ends, the creature thinks it is lost in a misty realm, its surroundings obscured by fey magic. Once you use this feature, you can't use it again until you finish a short or long rest.",
        },
        {
          level: 19,
          name: "Fey Sovereign",
          description:
            "Your connection to the Feywild elevates you to a position of fey nobility. You are permanently under the effect of a nondetection spell. Additionally, once per long rest, you can cast mass suggestion without expending a spell slot, affecting up to 12 creatures. Creatures that succeed on the saving throw are unaware you attempted to influence them.",
        }
      ]
    },
    {
      slug: "the-great-old-one",
      name: "The Great Old One",
      description:
        "This warlock's patron is a mysterious entity of incomprehensible power dwelling in the spaces between worlds. Their gifts manifest as telepathy, mental intrusion, and the ability to drive others mad — power that comes at the cost of knowing things no mortal mind was meant to hold.",
      features: [
        {
          level: 1,
          name: "Expanded Spell List",
          description:
            "The Great Old One lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you: dissonant whispers, Tasha's hideous laughter, detect thoughts, phantasmal force, clairvoyance, sending, dominate beast, Evard's black tentacles, dominate person, telekinesis.",
        },
        {
          level: 1,
          name: "Awakened Mind",
          description:
            "Your alien knowledge gives you the ability to touch the minds of other creatures. You can telepathically speak to any creature you can see within 30 feet of you. You don't need to share a language with the creature, but it must be able to understand at least one language. The creature can respond telepathically if it chooses.",
        },
        {
          level: 5,
          name: "Entropic Ward",
          description:
            "You learn to magically ward yourself against attack and to turn an enemy's failed strike into good luck for yourself. When a creature makes an attack roll against you, you can use your reaction to impose disadvantage on that roll. If the attack misses you, your next attack roll against the creature has advantage if you make it before the end of your next turn. Once you use this feature, you can't use it again until you finish a short or long rest.",
        },
        {
          level: 9,
          name: "Thought Shield",
          description:
            "Your thoughts can't be read by telepathy or other means unless you allow it. You also have resistance to psychic damage, and whenever a creature deals psychic damage to you, that creature takes the same amount of damage that you do.",
        },
        {
          level: 15,
          name: "Create Thrall",
          description:
            "You gain the ability to infect a humanoid's mind with the alien magic of your patron. You can use your action to touch an incapacitated humanoid. That creature is then charmed by you until a remove curse spell is cast on it, the charmed condition is removed from it, or you use this feature again. You can communicate telepathically with the charmed creature as long as the two of you are on the same plane of existence.",
        },
        {
          level: 19,
          name: "Void Conduit",
          description:
            "Your mind has been partially unmade and remade by your patron's endless whispers. You are immune to psychic damage and the frightened condition. Once per long rest, as an action, you can project a 30-foot cone of maddening energy. Each creature in the area must make an Intelligence saving throw against your spell save DC. On a failure, the creature is incapacitated and takes 8d8 psychic damage; on a success, it takes half damage and is not incapacitated. An incapacitated creature repeats the save at the end of each of its turns, ending the effect on a success.",
        }
      ]
    },
    {
      slug: "the-celestial",
      name: "The Celestial",
      description:
        "A warlock whose patron is a powerful being of the Upper Planes — an angel, solar, or deity's servant — receives gifts of radiance and healing alongside more typical warlock power. They are the rarest of their kind: warlocks who genuinely heal.",
      features: [
        {
          level: 1,
          name: "Expanded Spell List",
          description:
            "The Celestial lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you: cure wounds, guiding bolt, flaming sphere, lesser restoration, daylight, revivify, guardian of faith, wall of fire, flame strike, greater restoration.",
        },
        {
          level: 1,
          name: "Healing Light",
          description:
            "You gain the ability to channel celestial energy to heal wounds. You have a pool of d6s that you spend to fuel this healing. The number of dice in the pool equals 1 + your warlock level. As a bonus action, you can heal one creature you can see within 60 feet of you, spending dice from the pool. The maximum number of dice you can spend at once equals your Charisma modifier (minimum 1). Roll the dice you spend and the creature regains hit points equal to the total. Your pool regains all expended dice when you finish a long rest.",
        },
        {
          level: 5,
          name: "Radiant Soul",
          description:
            "Your link to the Celestial allows you to serve as a conduit for radiant energy. You have resistance to radiant damage. When you cast a spell that deals radiant or fire damage, you can add your Charisma modifier to one radiant or fire damage roll of that spell against one of its targets.",
        },
        {
          level: 9,
          name: "Celestial Resilience",
          description:
            "You gain temporary hit points whenever you finish a short or long rest. These temporary hit points equal your warlock level + your Charisma modifier. Additionally, choose up to five creatures you can see at the end of the rest. Those creatures each gain temporary hit points equal to half your warlock level + your Charisma modifier.",
        },
        {
          level: 15,
          name: "Searing Vengeance",
          description:
            "The radiant energy you channel allows you to resist death. When you have to make a death saving throw at the start of your turn, you can instead spring back to your feet with a burst of radiant energy. You regain hit points equal to half your hit point maximum, and then you stand up if you so choose. Each creature of your choice that is within 30 feet of you takes radiant damage equal to 2d8 + your Charisma modifier, and it is blinded until the end of the current turn. Once you use this feature, you can't use it again until you finish a long rest.",
        },
        {
          level: 19,
          name: "Celestial Apotheosis",
          description:
            "Your patron elevates you to a semi-divine state. You gain immunity to radiant damage and the charmed condition. Once per long rest, when you or a creature within 60 feet of you would drop to 0 hit points, you can use your reaction to instantly restore that creature to its maximum hit points. If you use this on yourself, you also regain all expended pact magic spell slots.",
        }
      ]
    }
  ]
};
