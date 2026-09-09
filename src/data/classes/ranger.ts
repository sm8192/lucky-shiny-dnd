import type { CharacterClass } from "@/types/character-class";

export const ranger: CharacterClass = {
  slug: "ranger",
  name: "Ranger",
  description:
    "Rangers are the wardens of the wilderness, equally skilled at reading a creature's tracks and putting an arrow through its eye at a hundred paces. They combine martial precision with practical nature magic, making them extraordinarily effective in the terrain they have claimed as their own — and dangerous wherever they roam.",
  hitDie: "d10",
  savingThrow: "Reflex",
  armorProficiency: "medium",
  weaponProficiency: "martial",
  shieldProficiency: true,
  perception: "2",
  levels: [
    {
      level: 1,
      features: [
        { level: 1, name: "Ranger Archetype Feature", description: "You gain a feature from your chosen Ranger Archetype." },
        {
          level: 1,
          name: "Favored Quarry",
          description:
            "As a bonus action, you can mark one creature you can see within 90 feet as your quarry for 1 minute. You deal an extra 1d6 damage to it the first time you hit it on each of your turns, and you have advantage on Perception and Survival checks made to find and track it. You can mark a new quarry when the mark ends or the quarry drops to 0 hit points. The bonus damage increases to 2d6 at level 11.",
        },
        {
          level: 1,
          name: "Natural Explorer",
          description:
            "You are a master of wilderness travel. Difficult terrain doesn't slow your group's travel, you can't become lost except by magical means, and you remain alert to danger even while foraging, navigating, or tracking.",
        },
      ],
    },
    {
      level: 2,
      features: [
        {
          level: 2,
          name: "Fighting Style",
          description:
            "You adopt a style of fighting as your specialty. Choose one: Archery (+2 to ranged weapon attack rolls), Defense (+1 AC while wearing armor), Dueling (+2 damage with a one-handed weapon), or Two-Weapon Fighting (add your ability modifier to the second attack's damage).",
        },
        {
          level: 2,
          name: "Spellcasting",
          description:
            "You learn to channel the magic of nature to cast ranger spells, using Wisdom as your spellcasting ability. You cast using the half-caster spell slots shown on the class progression table.",
        },
      ],
    },
    {
      level: 3,
      features: [
        {
          level: 3,
          name: "Primeval Awareness",
          description:
            "As an action, you can expend a spell slot to sense whether aberrations, celestials, dragons, elementals, fey, fiends, or undead are present within 1 mile (or 6 miles in your favored terrain) for 1 minute per slot level. You learn their kinds and general direction but not their exact number or location.",
        },
      ],
    },
    {
      level: 4,
      features: [
        {
          level: 4,
          name: "Fleet of Foot",
          description:
            "Your speed increases by 5 feet, and moving through nonmagical difficult terrain never costs you extra movement.",
        },
      ],
    },
    {
      level: 5,
      features: [
        {
          level: 5,
          name: "Extra Attack",
          description:
            "You can attack twice, instead of once, whenever you take the Attack action on your turn.",
        },
        { level: 5, name: "Ranger Archetype Feature", description: "You gain a feature from your chosen Ranger Archetype." },
      ],
    },
    {
      level: 6,
      features: [
        {
          level: 6,
          name: "Favored Foe",
          description:
            "Choose a creature type (such as beasts, dragons, or fiends). You have advantage on Survival checks to track them and on Intelligence checks to recall information about them, and your Favored Quarry bonus damage against creatures of that type increases by one die.",
        },
      ],
    },
    {
      level: 7,
      features: [
        {
          level: 7,
          name: "Nature's Stride",
          description:
            "You can move through nonmagical difficult terrain created by plants without being slowed, and you can't be affected by hazards or spells created by plants unless the creator chooses to affect you.",
        },
      ],
    },
    {
      level: 8,
      features: [
        {
          level: 8,
          name: "Land's Stride",
          description:
            "You gain a climbing and swimming speed equal to your walking speed, and you have advantage on saving throws against being knocked prone or restrained.",
        },
      ],
    },
    {
      level: 9,
      features: [
        { level: 9, name: "Ranger Archetype Feature", description: "You gain a feature from your chosen Ranger Archetype." },
      ],
    },
    {
      level: 10,
      features: [
        {
          level: 10,
          name: "Hide in Plain Sight",
          description:
            "You can spend 1 minute creating camouflage for yourself. Once camouflaged, you can attempt to hide by pressing yourself against a solid surface, gaining a +10 bonus to Stealth checks as long as you remain there without moving or taking actions.",
        },
      ],
    },
    {
      level: 11,
      features: [
        {
          level: 11,
          name: "Precise Hunter",
          description:
            "Your Favored Quarry bonus damage increases to 2d6, and once per turn when you hit your quarry you can force it to make a Wisdom saving throw (DC = 8 + your proficiency bonus + your Wisdom modifier) or lose any advantage it has and gain no benefit from being invisible against you until the start of your next turn.",
        },
      ],
    },
    {
      level: 12,
      features: [
        {
          level: 12,
          name: "Vanish",
          description:
            "You can use the Hide action as a bonus action on your turn, and you can't be tracked by nonmagical means unless you choose to leave a trail.",
        },
      ],
    },
    {
      level: 13,
      features: [
        {
          level: 13,
          name: "Relentless Tracker",
          description:
            "You always know the direction to your current Favored Quarry as long as it is on the same plane, and it can't remove your quarry mark by moving out of range.",
        },
      ],
    },
    {
      level: 14,
      features: [
        {
          level: 14,
          name: "Feral Senses",
          description:
            "You gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage. You are also aware of the location of any invisible creature within 30 feet, provided it isn't hidden from you and you aren't blinded or deafened.",
        },
      ],
    },
    {
      level: 15,
      features: [
        { level: 15, name: "Ranger Archetype Feature", description: "You gain a feature from your chosen Ranger Archetype." },
      ],
    },
    {
      level: 16,
      features: [
        {
          level: 16,
          name: "Multiattack Defense",
          description:
            "When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks by that creature for the rest of the turn.",
        },
      ],
    },
    {
      level: 17,
      features: [
        {
          level: 17,
          name: "Volley",
          description:
            "As an action, you can make a ranged attack against any number of creatures within 10 feet of a point you can see, making a separate attack roll for each target. You can use this once per short or long rest.",
        },
      ],
    },
    {
      level: 18,
      features: [
        {
          level: 18,
          name: "Feral Instinct",
          description:
            "You have advantage on initiative rolls, and on your first turn of combat you can move up to your speed and take one Hide action without spending your normal action.",
        },
      ],
    },
    {
      level: 19,
      features: [
        { level: 19, name: "Ranger Archetype Feature", description: "You gain a feature from your chosen Ranger Archetype." },
      ],
    },
    {
      level: 20,
      features: [
        {
          level: 20,
          name: "Apex Predator",
          description:
            "You can have up to two creatures marked as Favored Quarry at once, and while at least one quarry lives you have advantage on all attack rolls against your quarries. Additionally, the first time each turn you hit a quarry, it must succeed on a Wisdom saving throw (DC = 8 + your proficiency bonus + your Wisdom modifier) or be frightened of you until the end of its next turn.",
        },
      ],
    },
  ],
  choiceLevel: 1,
  subclasses: [
    {
      slug: "hunter",
      name: "Hunter",
      description:
        "Hunters study the tactics of their quarry to become more efficient killers. They can adapt to face any threat — a single massive monster, a horde of weaker enemies, or a nimble skirmisher — by selecting specialized combat techniques for each situation.",
      features: [
        {
          level: 1,
          name: "Hunter's Prey",
          description:
            "Choose one: Colossus Slayer (once per turn, deal an extra 1d8 damage to a creature below its hit point maximum), Giant Killer (use your reaction to attack a Large or larger creature that hits or misses you in melee), or Horde Breaker (once per turn, make an additional attack against a different creature within 5 feet of your original target).",
        },
        {
          level: 5,
          name: "Escape the Horde",
          description:
            "Opportunity attacks made against you are rolled with disadvantage.",
        },
        {
          level: 9,
          name: "Defensive Tactics",
          description:
            "Choose one: Multiattack Defense (a creature that hits you grants you +4 AC against its further attacks this turn), Steel Will (advantage on saves against being frightened), or Evasive Footwork (add your Favored Quarry die to your AC when you move at least 10 feet on your turn).",
        },
        {
          level: 11,
          name: "Multiattack",
          description:
            "Choose one: Volley (make a ranged attack against any number of creatures within 10 feet of a point) or Whirlwind Attack (make a melee attack against any number of creatures within 5 feet). You can use the chosen option as your Attack action.",
        },
        {
          level: 15,
          name: "Superior Hunter's Defense",
          description:
            "When you take damage, you can use your reaction to reduce that damage by an amount equal to your ranger level + your Wisdom modifier. You can use this once per short or long rest.",
        },
        {
          level: 19,
          name: "Perfect Predation",
          description:
            "Your Hunter's Prey and Multiattack options both trigger without their once-per-turn limits, and the extra damage from Colossus Slayer (if chosen) increases to 2d8.",
        },
      ]
    },
    {
      slug: "beast-master",
      name: "Beast Master",
      description:
        "Beast Master rangers forge a deep supernatural bond with an animal companion, fighting alongside it as a seamless unit. The bond goes beyond training — it is a spiritual link that allows ranger and beast to share senses and coordinate with uncanny precision.",
      features: [
        {
          level: 1,
          name: "Primal Companion",
          description:
            "You magically bond with a primal beast that fights at your side. It shares your initiative, obeys your commands, and adds your proficiency bonus to its AC, attack rolls, damage, saves, and skills. You can command it to take the Attack action as part of your own action; otherwise it takes the Dodge action. If it drops to 0 hit points, you can revive it during a rest.",
        },
        {
          level: 5,
          name: "Coordinated Attack",
          description:
            "When you take the Attack action, your beast companion can use its reaction to make one attack of its own against a creature within its reach.",
        },
        {
          level: 9,
          name: "Shared Senses",
          description:
            "As an action, you can see through your companion's eyes and hear what it hears until the start of your next turn, gaining the benefit of any special senses it has. During this time you are blind and deaf to your own surroundings.",
        },
        {
          level: 11,
          name: "Bestial Fury",
          description:
            "When you command your companion to take the Attack action, it can make two attacks, or use one of its special attacks that requires an action.",
        },
        {
          level: 15,
          name: "Share Spells",
          description:
            "When you cast a spell targeting yourself, you can also affect your companion with it if the beast is within 30 feet of you.",
        },
        {
          level: 19,
          name: "Unbreakable Bond",
          description:
            "Your companion's hit point maximum doubles, and once per long rest, if it would drop to 0 hit points, it instead drops to 1 hit point. When you or your companion drops a creature to 0 hit points, the other regains hit points equal to your ranger level.",
        },
      ]
    },
    {
      slug: "gloom-stalker",
      name: "Gloom Stalker",
      description:
        "Gloom Stalkers prowl the darkest places in the world — underdark tunnels, lightless crypts, moonless forests — and they are creatures of those shadows as much as any monster within them. They strike first, strike hard, and are gone before their enemy's eyes can adjust.",
      features: [
        {
          level: 1,
          name: "Dread Ambusher",
          description:
            "You gain a bonus to initiative equal to your Wisdom modifier. On your first turn of each combat, your speed increases by 10 feet and you can make one additional weapon attack that deals an extra 2d8 damage on a hit. You also gain darkvision out to 60 feet (or +30 feet if you already have it).",
        },
        {
          level: 5,
          name: "Umbral Sight",
          description:
            "You are invisible to any creature that relies on darkvision to see you in darkness. This does not affect creatures that can see through darkness by other means or in bright light.",
        },
        {
          level: 9,
          name: "Iron Mind",
          description:
            "You gain proficiency in Wisdom saving throws. If you already have it, you gain proficiency in Intelligence or Charisma saves instead.",
        },
        {
          level: 11,
          name: "Stalker's Flurry",
          description:
            "Once on each of your turns when you miss with a weapon attack, you can make another weapon attack as part of the same action.",
        },
        {
          level: 15,
          name: "Shadowy Dodge",
          description:
            "When a creature you can see makes an attack roll against you, you can use your reaction to impose disadvantage on it, blurring into shadow.",
        },
        {
          level: 19,
          name: "Perfect Ambush",
          description:
            "Your Dread Ambusher extra attack triggers on the first turn you attack any creature that hasn't yet acted, not just the first round, and its bonus damage increases to 3d8. Enemies you strike from concealment on such a turn are frightened until the end of their next turn unless they succeed on a Wisdom save against your spell save DC.",
        },
      ]
    },
    {
      slug: "horizon-walker",
      name: "Horizon Walker",
      description:
        "Horizon Walkers guard the boundary between worlds, hunting those who slip through planar rifts to cause harm. They have learned to step between planes themselves, giving them a ghostly unpredictability in combat and access to forces that originate far beyond the material world.",
      features: [
        {
          level: 1,
          name: "Planar Warrior",
          description:
            "As a bonus action, choose one creature you can see within 30 feet. The next time you hit it with a weapon attack this turn, all damage from the attack becomes force damage and the target takes an extra 1d8 force damage (2d8 at level 11).",
        },
        {
          level: 5,
          name: "Ethereal Step",
          description:
            "As a bonus action, you can briefly step into the Ethereal Plane, teleporting up to 30 feet to an unoccupied space you can see. You can use this a number of times equal to your Wisdom modifier (minimum once) per long rest.",
        },
        {
          level: 9,
          name: "Distant Strike",
          description:
            "When you take the Attack action, you can teleport up to 10 feet before each attack. If you attack at least two different creatures, you can make one additional attack against a third creature.",
        },
        {
          level: 11,
          name: "Spectral Defense",
          description:
            "When you take damage from an attack, you can use your reaction to become partially incorporeal, gaining resistance to that attack's damage.",
        },
        {
          level: 15,
          name: "Planar Sight",
          description:
            "You can see into the Ethereal Plane out to 60 feet, and you always know if there is a planar portal or rift within 1 mile of you and the general direction to it.",
        },
        {
          level: 19,
          name: "Boundary Walker",
          description:
            "Your Ethereal Step has no limit on uses, and once per long rest as an action you can banish a creature you hit to a harmless demiplane for up to 1 minute (Charisma save against your spell save DC negates); it returns to the nearest unoccupied space when the effect ends.",
        },
      ]
    },
  ],
  expertise: {
    exploration: [
      "When using your wits to master the wilderness",
      "When tracking a creature or following signs of its passage",
    ],
    social: [
      "When communicating with or calming wild beasts",
      "When trading knowledge with those who live on the frontier",
    ]
  },
  spellcasting: "half",
};
