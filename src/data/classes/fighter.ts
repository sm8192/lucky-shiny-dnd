import type { CharacterClass } from "@/types/character-class";

export const fighter: CharacterClass = {
  slug: "fighter",
  name: "Fighter",
  description:
    "Fighters are masters of martial combat, skilled with a variety of weapons and armors. They are the most versatile of adventurers, excelling at both offense and defense, and capable of weathering the most punishing battles.",
  hitDie: "d10",
  savingThrow: "Fortitude",
  armorProficiency: "heavy",
  weaponProficiency: "martial",
  shieldProficiency: true,
  perception: "1.5",
  levels: [
    {
      level: 1,
      features: [
        {
          level: 1,
          name: "Fighting Style",
          description:
            "You adopt a particular style of fighting as your specialty. Choose one: Archery (+2 to ranged weapon attack rolls), Defense (+1 AC while wearing armor), Dueling (+2 damage with a one-handed weapon and no other weapon), Great Weapon Fighting (reroll 1s and 2s on damage dice with two-handed weapons), Protection (impose disadvantage on an attack against an adjacent ally as a reaction), or Two-Weapon Fighting (add your ability modifier to the second attack's damage). You gain a second Fighting Style at level 10.",
        },
        {
          level: 1,
          name: "Second Wind",
          description:
            "On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.",
        },
      ],
    },
    {
      level: 2,
      features: [
        {
          level: 2,
          name: "Action Surge",
          description:
            "On your turn, you can take one additional action beyond your normal action and possible bonus action. Once you use this feature, you must finish a short or long rest before you can use it again. Beginning at level 17, you can use it twice before a rest, but only once on a given turn.",
        },
      ],
    },
    {
      level: 3,
      features: [
        { level: 3, name: "Martial Archetype Feature", description: "You gain a feature from your chosen Martial Archetype." },
      ],
    },
    {
      level: 4,
      features: [
        {
          level: 4,
          name: "Combat Superiority",
          description:
            "Your relentless training sharpens your instincts in a fight. You gain a +1 bonus to initiative rolls and to attack rolls made against any creature that has not yet acted in the current combat.",
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
            "You can attack twice, instead of once, whenever you take the Attack action on your turn. This increases to three attacks at level 11 and four attacks at level 20.",
        },
      ],
    },
    {
      level: 6,
      features: [
        { level: 6, name: "Martial Archetype Feature", description: "You gain a feature from your chosen Martial Archetype." },
      ],
    },
    {
      level: 7,
      features: [
        {
          level: 7,
          name: "Battle Readiness",
          description:
            "You can't be surprised while you are conscious, and if you roll initiative with no allies within 30 feet of you, you gain advantage on the roll.",
        },
      ],
    },
    {
      level: 8,
      features: [
        {
          level: 8,
          name: "Tactical Movement",
          description:
            "Your speed increases by 10 feet, and opportunity attacks made against you are rolled with disadvantage.",
        },
      ],
    },
    {
      level: 9,
      features: [
        {
          level: 9,
          name: "Indomitable",
          description:
            "When you fail a saving throw, you can choose to reroll it and must use the new roll. You can use this feature once per long rest, gaining an additional use at level 13 and a third at level 17.",
        },
      ],
    },
    {
      level: 10,
      features: [
        { level: 10, name: "Martial Archetype Feature", description: "You gain a feature from your chosen Martial Archetype." },
        {
          level: 10,
          name: "Second Fighting Style",
          description:
            "You choose a second Fighting Style option. You can't take an option you already have.",
        },
      ],
    },
    {
      level: 11,
      features: [
        {
          level: 11,
          name: "Extra Attack (2)",
          description:
            "You can attack three times whenever you take the Attack action on your turn.",
        },
      ],
    },
    {
      level: 12,
      features: [
        {
          level: 12,
          name: "Relentless",
          description:
            "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. Once you use this feature, you must finish a long rest before you can use it again.",
        },
      ],
    },
    {
      level: 13,
      features: [
        {
          level: 13,
          name: "Weapon Mastery",
          description:
            "Choose one weapon type. Your attacks with that weapon score a critical hit on a roll of 19 or 20, and you add half your proficiency bonus (rounded down) to the weapon's damage rolls.",
        },
      ],
    },
    {
      level: 14,
      features: [
        { level: 14, name: "Martial Archetype Feature", description: "You gain a feature from your chosen Martial Archetype." },
      ],
    },
    {
      level: 15,
      features: [
        {
          level: 15,
          name: "Superior Critical",
          description:
            "Your weapon attacks score a critical hit on a roll of 18–20. If you already have an expanded critical range from Weapon Mastery, it improves to 17–20 with that weapon.",
        },
      ],
    },
    {
      level: 16,
      features: [
        {
          level: 16,
          name: "Unbreakable",
          description:
            "You gain proficiency in all saving throws. Additionally, whenever you use Second Wind, you also end one condition affecting you: blinded, deafened, frightened, or poisoned (your choice).",
        },
      ],
    },
    {
      level: 17,
      features: [
        {
          level: 17,
          name: "Onslaught",
          description:
            "Once per turn, when you hit a creature with a weapon attack, you can force it to make a Strength saving throw (DC = 8 + your proficiency bonus + your Strength or Dexterity modifier). On a failure, the target is knocked prone and can't take reactions until the start of its next turn.",
        },
      ],
    },
    {
      level: 18,
      features: [
        { level: 18, name: "Martial Archetype Feature", description: "You gain a feature from your chosen Martial Archetype." },
      ],
    },
    {
      level: 19,
      features: [
        {
          level: 19,
          name: "Champion's Resolve",
          description:
            "Your martial mastery reaches its peak. Whenever you take the Attack action, you can make one additional attack. In addition, the first time each turn you reduce a creature to 0 hit points, you regain the use of Action Surge or Second Wind (your choice).",
        },
      ],
    },
    {
      level: 20,
      features: [
        {
          level: 20,
          name: "Extra Attack (3)",
          description:
            "You can attack four times whenever you take the Attack action on your turn.",
        },
      ],
    },
  ],
  choiceLevel: 2,
  subclasses: [
    {
      slug: "champion",
      name: "Champion",
      description:
        "The Champion focuses on raw physical power, honing combat skills to extraordinary levels of martial excellence.",
      features: [
        {
          level: 2,
          name: "Remarkable Athlete",
          description:
            "You can add half your proficiency bonus (rounded up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus. In addition, your running long jump distance increases by a number of feet equal to your Strength modifier.",
        },
        {
          level: 6,
          name: "Additional Fighting Style",
          description:
            "You choose an additional Fighting Style option you don't already have. This is separate from the second style granted by the Fighter's level 10 feature, giving you three styles in total once both are gained.",
        },
        {
          level: 10,
          name: "Heroic Warrior",
          description:
            "During combat, at the start of any turn on which you have no uses of your Second Wind remaining, you regain one use of it. In addition, you have advantage on death saving throws.",
        },
        {
          level: 14,
          name: "Indomitable Might",
          description:
            "If your total for a Strength check or Strength saving throw is less than your Strength score, you can use that score in place of the total.",
        },
        {
          level: 18,
          name: "Survivor",
          description:
            "At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half your hit points remaining and at least 1 hit point.",
        },
      ],
    },
  ],
  expertise: {
    exploration: [
      "When pushing your body to its physical limit against an obstacle or hazard",
      "When assessing an enemy's combat capabilities or the tactics of a battlefield",
    ],
    social: [
      "When commanding respect through martial reputation or a show of arms",
      "When holding the line as a trusted protector others rally behind",
    ],
  },
  spellcasting: "none"
};