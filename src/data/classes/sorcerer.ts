import type { CharacterClass } from "@/types/character-class";

export const sorcerer: CharacterClass = {
  slug: "sorcerer",
  name: "Sorcerer",
  description:
    "Magic is not something sorcerers learn — it is something they are. Raw arcane power flows through their blood, shaped by a supernatural origin rather than academic study. Sorcerers wield fewer spells than wizards but bend them further, spending Sorcery Points to twist, amplify, or multiply their magic in ways no textbook could anticipate.",
  hitDie: "d6",
  savingThrow: "Will",
  armorProficiency: "none",
  weaponProficiency: "simple",
  shieldProficiency: false,
  perception: ".5",
  spellcasting: "full",
  choiceLevel: 1,
  expertise: {
    exploration: [
      "When identifying or interacting with magical phenomena, objects, or creatures",
      "When pushing through hostile magical environments using sheer force of will",
    ],
    social: [
      "When projecting authority or presence through visible displays of power",
      "When intimidating or impressing creatures sensitive to magical auras",
    ],
  },
  levels: [
    { level: 1,  features: ["Spellcasting", "Sorcerous Origin", "Archetype Feature"], extras: { "Sorcery Points": 0 } },
    { level: 2,  features: ["Font of Magic"], extras: { "Sorcery Points": 2 } },
    { level: 3,  features: ["Metamagic (×2)"], extras: { "Sorcery Points": 3 } },
    { level: 4,  features: [], extras: { "Sorcery Points": 4 } },
    { level: 5,  features: ["Archetype Feature", "Sorcery Point Surge"], extras: { "Sorcery Points": 5 } },
    { level: 6,  features: [], extras: { "Sorcery Points": 6 } },
    { level: 7,  features: [], extras: { "Sorcery Points": 7 } },
    { level: 8,  features: [], extras: { "Sorcery Points": 8 } },
    { level: 9,  features: ["Archetype Feature"], extras: { "Sorcery Points": 9 } },
    { level: 10, features: ["Metamagic (×3)"], extras: { "Sorcery Points": 10 } },
    { level: 11, features: ["Overchannel"], extras: { "Sorcery Points": 11 } },
    { level: 12, features: [], extras: { "Sorcery Points": 12 } },
    { level: 13, features: [], extras: { "Sorcery Points": 13 } },
    { level: 14, features: [], extras: { "Sorcery Points": 14 } },
    { level: 15, features: ["Archetype Feature"], extras: { "Sorcery Points": 15 } },
    { level: 16, features: [], extras: { "Sorcery Points": 16 } },
    { level: 17, features: ["Metamagic (×4)"], extras: { "Sorcery Points": 17 } },
    { level: 18, features: [], extras: { "Sorcery Points": 18 } },
    { level: 19, features: ["Archetype Feature", "Arcane Apotheosis"], extras: { "Sorcery Points": 19 } },
    { level: 20, features: ["Sorcerous Restoration"], extras: { "Sorcery Points": 20 } },
  ],
  subclasses: [
    {
      slug: "draconic-bloodline",
      name: "Draconic Bloodline",
      description:
        "A dragon ancestor suffuses this sorcerer's magic with elemental power and physical resilience. Their skin thickens, their presence grows commanding, and their spells carry the unmistakable force of dragonkind.",
      features: [
        {
          level: 1,
          name: "Dragon Ancestor",
          description:
            "You choose one type of dragon as your ancestor: black (acid), blue (lightning), brass (fire), bronze (lightning), copper (acid), gold (fire), green (poison), red (fire), silver (cold), or white (cold). This determines the damage type for several of your features. You can speak, read, and write Draconic, and you have advantage on Charisma checks made to interact with dragons.",
        },
        {
          level: 1,
          name: "Draconic Resilience",
          description:
            "The magic in your blood strengthens your body. Your hit point maximum increases by 1 per sorcerer level, and when you aren't wearing armor, your AC equals 13 + your Dexterity modifier.",
        },
        {
          level: 5,
          name: "Elemental Affinity",
          description:
            "When you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour.",
        },
        {
          level: 9,
          name: "Dragon Wings",
          description:
            "You gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current walking speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn. You cannot manifest your wings while wearing armor unless the armor is made to accommodate them.",
        },
        {
          level: 15,
          name: "Draconic Presence",
          description:
            "You can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration, each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw against your sorcerer spell save DC or be charmed (awe) or frightened (fear) until the aura ends.",
        },
        {
          level: 19,
          name: "Ascended Dragon",
          description:
            "Your draconic blood reaches its apex. You permanently gain resistance to the damage type of your dragon ancestor. Additionally, you can spend 8 sorcery points to transform into a Large dragon form for 1 minute as a bonus action. While transformed, you gain a natural weapon bite attack that deals 2d10 damage of your ancestry type, your AC increases by 2, and you gain blindsight out to 30 feet.",
        },
      ],
    },
    {
      slug: "wild-magic",
      name: "Wild Magic",
      description:
        "Wild Magic sorcerers draw power from a chaotic maelstrom that defies control. Their spells occasionally trigger surges of uncontrolled magic, and they learn to ride that chaos rather than suppress it — transforming volatility into a weapon of its own.",
      features: [
        {
          level: 1,
          name: "Wild Magic Surge",
          description:
            "When you cast a sorcerer spell of 1st level or higher, the GM can have you roll a d20. On a 1, roll on the Wild Magic Surge table to create a random magical effect. The GM is more likely to call for this roll when you are under stress, in danger, or distressed.",
        },
        {
          level: 1,
          name: "Tides of Chaos",
          description:
            "You can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again. Alternatively, the GM can allow you to regain the use of this feature early by having you roll on the Wild Magic Surge table after you cast a sorcerer spell of 1st level or higher.",
        },
        {
          level: 5,
          name: "Bend Luck",
          description:
            "You have the ability to twist fate using your wild magic. When another creature you can see makes an attack roll, ability check, or saving throw, you can use your reaction and spend 2 sorcery points to roll 1d4 and apply the number rolled as a bonus or penalty (your choice) to the creature's roll. You can do so after the creature rolls but before any effects of the roll occur.",
        },
        {
          level: 9,
          name: "Controlled Chaos",
          description:
            "You gain a modicum of control over the surges of your wild magic. Whenever you roll on the Wild Magic Surge table, you can roll twice and use either number.",
        },
        {
          level: 15,
          name: "Spell Bombardment",
          description:
            "The harmful energy of your spells intensifies. When you roll damage for a spell and roll the highest number possible on any of the dice, choose one of those dice, roll it again, and add that roll to the damage. You can use this feature only once per turn.",
        },
        {
          level: 19,
          name: "Chaos Incarnate",
          description:
            "You become a living conduit for wild magic. Once per long rest, when you roll on the Wild Magic Surge table, you can choose the result instead of rolling randomly. Additionally, once per short rest, you can release a burst of wild energy as a bonus action: all creatures within 10 feet must make a Dexterity saving throw against your spell save DC or take 4d8 force damage, while you regain 4 sorcery points.",
        },
      ],
    },
    {
      slug: "shadow-magic",
      name: "Shadow Magic",
      description:
        "Shadow Magic sorcerers draw power from the Plane of Shadow, weaving darkness into their spells and slipping through it like a second skin. They are survivalists and assassins in equal measure, at their most dangerous when the lights go out.",
      features: [
        {
          level: 1,
          name: "Eyes of the Dark",
          description:
            "You gain darkvision with a range of 120 feet. If you already have darkvision from your species, its range increases by 60 feet. You can also cast darkness by spending 2 sorcery points, and you can see through magical darkness you create this way.",
        },
        {
          level: 1,
          name: "Strength of the Grave",
          description:
            "When damage reduces you to 0 hit points, you can make a Charisma saving throw (DC 5 + the damage taken). On a success, you instead drop to 1 hit point. You can't use this feature if you are reduced to 0 hit points by radiant damage or by a critical hit. Once used, you must finish a long rest before using it again.",
        },
        {
          level: 5,
          name: "Hound of Ill Omen",
          description:
            "You can spend 3 sorcery points as a bonus action to summon a hound of ill omen targeting a creature you can see within 120 feet. The hound uses the dire wolf statistics except it is a Medium shadow creature, has resistance to all damage except force, psychic, and radiant, and can move through other creatures and objects as if they were difficult terrain. The hound appears in an unoccupied space within 30 feet of the target. Roll initiative for the hound. On its turn, it moves toward the target and attacks. The hound disappears if it is reduced to 0 hit points, if its target is reduced to 0 hit points, or after 5 minutes.",
        },
        {
          level: 9,
          name: "Shadow Walk",
          description:
            "When you are in dim light or darkness, you can use a bonus action to teleport up to 120 feet to an unoccupied space you can see that is also in dim light or darkness.",
        },
        {
          level: 15,
          name: "Umbral Form",
          description:
            "You can spend 6 sorcery points as a bonus action to transform into a shadowy form for 1 minute. While in this form, you have resistance to all damage except force and radiant, you can move through other creatures and objects as difficult terrain (taking 5 force damage if you end your turn inside an object), and you gain a flying speed equal to your walking speed.",
        },
        {
          level: 19,
          name: "One With Shadow",
          description:
            "While in dim light or darkness, you can become invisible as a bonus action. This invisibility lasts until you move, take an action or reaction, or a bright light shines on you. While invisible this way, you also become insubstantial — you have resistance to all damage and can move through objects and creatures as if they were difficult terrain.",
        },
      ],
    },
    {
      slug: "divine-soul",
      name: "Divine Soul",
      description:
        "Divine Soul sorcerers carry a spark of celestial or infernal power within them, manifesting as access to divine magic alongside their innate arcane gifts. They are rare individuals who blur the line between miracle and sorcery, equally at home healing wounds and unleashing devastation.",
      features: [
        {
          level: 1,
          name: "Divine Magic",
          description:
            "Your link to the divine allows you to learn spells from the cleric spell list in addition to the sorcerer spell list. A spell you choose from the cleric list is nonetheless a sorcerer spell for you. You also learn the cure wounds spell, which does not count against your spells known.",
        },
        {
          level: 1,
          name: "Favored by the Gods",
          description:
            "When you fail a saving throw or miss with an attack roll, you can roll 2d4 and add it to the total, possibly changing the outcome. Once you use this feature, you can't use it again until you finish a short or long rest.",
        },
        {
          level: 5,
          name: "Empowered Healing",
          description:
            "When you or an ally within 5 feet of you rolls dice to determine the number of hit points a spell restores, you can spend 1 sorcery point to reroll any number of those dice once, using the new rolls. You can use this feature only once per turn.",
        },
        {
          level: 9,
          name: "Otherworldly Wings",
          description:
            "You can use a bonus action to manifest a pair of spectral wings from your back. While the wings are present, you have a flying speed of 30 feet. The wings last until you're incapacitated, you die, or you dismiss them as a bonus action.",
        },
        {
          level: 15,
          name: "Unearthly Recovery",
          description:
            "You gain the ability to overcome grievous injuries. As a bonus action when you have fewer than half of your hit points remaining, you can regain a number of hit points equal to half your hit point maximum. Once you use this feature, you can't use it again until you finish a long rest.",
        },
        {
          level: 19,
          name: "Divine Ascendancy",
          description:
            "You have become an avatar of your divine patron's will. Once per long rest, you can cast any cleric spell of 8th level or lower without expending a spell slot. Additionally, while you have at least 1 sorcery point, friendly creatures within 30 feet of you have advantage on death saving throws.",
        },
      ],
    },
  ],
};
