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
    { level: 1, features: ["Favored Enemy", "Natural Explorer"] },
    { level: 2, features: ["Spellcasting", "Fighting Style"] },
    { level: 3, features: ["Ranger Conclave", "Primeval Awareness"] },
    { level: 4, features: ["Feat"] },
    { level: 5, features: ["Extra Attack"] },
    { level: 6, features: ["Favored Enemy Improvement", "Natural Explorer Improvement"] },
    { level: 7, features: ["Ranger Conclave Feature"] },
    { level: 8, features: ["Land's Stride", "Feat"] },
    { level: 9, features: [] },
    { level: 10, features: ["Natural Explorer Improvement", "Hide in Plain Sight"] },
    { level: 11, features: ["Vanish", "Ranger Conclave Feature"] },
    { level: 12, features: ["Feat"] },
    { level: 13, features: [] },
    { level: 14, features: ["Favored Enemy Improvement", "Vanish Improvement"] },
    { level: 15, features: ["Feral Senses"] },
    { level: 16, features: ["Feat"] },
    { level: 17, features: ["Ranger Conclave Feature"] },
    { level: 18, features: ["Feral Senses Improvement"] },
    { level: 19, features: ["Apex Predator"] },
    { level: 20, features: ["Foe Slayer", "Feat"] },
  ],
  choiceLevel: 3,
  subclasses: [
    {
      slug: "hunter",
      name: "Hunter",
      description:
        "Hunters study the tactics of their quarry to become more efficient killers. They can adapt to face any threat — a single massive monster, a horde of weaker enemies, or a nimble skirmisher — by selecting specialized combat techniques for each situation.",
      features: [
        {
          level: 3,
          name: "Hunter's Prey",
          description:
            "Choose one: Colossus Slayer (once per turn, deal 1d8 extra damage to a creature below its hit point maximum), Giant Killer (when a Large or larger creature misses you with a melee attack, you can use your reaction to attack it), or Horde Breaker (once per turn, attack a second creature adjacent to the first target if it is within range).",
        },
        {
          level: 7,
          name: "Defensive Tactics",
          description:
            "Choose one: Escape the Horde (opportunity attacks against you have disadvantage), Multiattack Defense (when a creature hits you with an attack, you gain +4 AC against all subsequent attacks by that creature until the start of your next turn), or Steel Will (advantage on saving throws against being frightened).",
        },
        {
          level: 13,
          name: "Multiattack",
          description:
            "Choose one: Volley (use your action to make a ranged attack against any number of creatures within 10 feet of a point within range, expending one piece of ammunition or one use of a spell for each target) or Whirlwind Attack (use your action to make a melee attack against any number of creatures within 5 feet of you, making one separate attack roll for each).",
        },
        {
          level: 17,
          name: "Superior Hunter's Defense",
          description:
            "Choose one: Evasion (when subjected to an effect allowing a Dexterity save for half damage, you take no damage on a success and half on a failure) or Stand Against the Tide (when a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the attack against another creature of your choice).",
        },
      ],
    },
    {
      slug: "beast-master",
      name: "Beast Master",
      description:
        "Beast Master rangers forge a deep supernatural bond with an animal companion, fighting alongside it as a seamless unit. The bond goes beyond training — it is a spiritual link that allows ranger and beast to share senses and coordinate with uncanny precision.",
      features: [
        {
          level: 3,
          name: "Ranger's Companion",
          description:
            "You magically bond with a beast of challenge rating 1/4 or lower. While the beast is within 5 feet of you, it acts on your initiative. On your turn, you can use a bonus action to command your companion to take the Attack, Dash, Disengage, Dodge, or Help action. If your companion dies, you can bond with a new beast after a 24-hour ceremony.",
        },
        {
          level: 7,
          name: "Exceptional Training",
          description:
            "When you use a bonus action to command your companion, the companion can use its reaction to make one attack. Additionally, your companion's attacks count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
        },
        {
          level: 13,
          name: "Bestial Fury",
          description:
            "Your companion can make two attacks whenever commanded with a bonus action. It also deals an extra 1d6 damage on all attacks.",
        },
        {
          level: 17,
          name: "Share Spells",
          description:
            "When you cast a spell targeting yourself, you can also affect your companion with the spell if your companion is within 30 feet of you.",
        },
      ],
    },
    {
      slug: "gloom-stalker",
      name: "Gloom Stalker",
      description:
        "Gloom Stalkers prowl the darkest places in the world — underdark tunnels, lightless crypts, moonless forests — and they are creatures of those shadows as much as any monster within them. They strike first, strike hard, and are gone before their enemy's eyes can adjust.",
      features: [
        {
          level: 3,
          name: "Dread Ambusher",
          description:
            "On the first round of combat, your walking speed increases by 10 feet. If you take the Attack action, you can make one additional weapon attack as part of that action; on a hit, this extra attack deals an extra 1d8 damage of the weapon's type. You also gain a +5 bonus to initiative.",
        },
        {
          level: 3,
          name: "Umbral Sight",
          description:
            "You gain darkvision out to 60 feet, or if you already have darkvision, its range increases by 30 feet. While in darkness, you are invisible to any creature that relies on darkvision to see you.",
        },
        {
          level: 7,
          name: "Iron Mind",
          description:
            "You gain proficiency in Wisdom saving throws. If you already have proficiency in Wisdom saving throws, you instead gain proficiency in Intelligence or Charisma saving throws (your choice).",
        },
        {
          level: 13,
          name: "Stalker's Flurry",
          description:
            "Once on each of your turns when you miss with a weapon attack, you can make another weapon attack as part of the same action.",
        },
        {
          level: 17,
          name: "Shadowy Dodge",
          description:
            "Whenever a creature makes an attack roll against you and doesn't have advantage on the roll, you can use your reaction to impose disadvantage on it. You must use this reaction before you know whether the attack hits or misses.",
        },
      ],
    },
    {
      slug: "horizon-walker",
      name: "Horizon Walker",
      description:
        "Horizon Walkers guard the boundary between worlds, hunting those who slip through planar rifts to cause harm. They have learned to step between planes themselves, giving them a ghostly unpredictability in combat and access to forces that originate far beyond the material world.",
      features: [
        {
          level: 3,
          name: "Detect Portal",
          description:
            "As an action, you sense the location and distance to the nearest planar portal within 1 mile of you. Once you use this feature, you can't use it again until you finish a short or long rest.",
        },
        {
          level: 3,
          name: "Planar Warrior",
          description:
            "As a bonus action, choose one creature you can see within 30 feet. The next time you hit that creature with a weapon attack, all of the weapon's damage becomes force damage, and it deals an extra 1d8 force damage. At level 11, this extra damage increases to 2d8.",
        },
        {
          level: 7,
          name: "Ethereal Step",
          description:
            "As a bonus action, you can cast the etherealness spell with this feature, without expending a spell slot. It lasts until the end of your turn. Once you use this feature, you can't do so again until you finish a short or long rest.",
        },
        {
          level: 13,
          name: "Distant Strike",
          description:
            "When you take the Attack action, you can teleport up to 10 feet before each attack to an unoccupied space you can see. If you attack at least two different creatures with the action, you can make one additional attack against a third creature.",
        },
        {
          level: 17,
          name: "Spectral Defense",
          description:
            "When you are hit by an attack, you can use your reaction to gain resistance to all of that attack's damage on this turn.",
        },
      ],
    },
  ],
  expertise: {
    exploration: [
      "when tracking, navigating, or surviving in the wilderness",
      "when identifying creatures, terrain features, or environmental hazards",
    ],
    social: [
      "when dealing with natural communities, hunters, or those who live off the land",
    ],
  },
  spellcasting: "half",
};
