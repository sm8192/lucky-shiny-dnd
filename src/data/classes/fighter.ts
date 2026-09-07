import type { CharacterClass } from "@/types/character-class";

export const fighter: CharacterClass = {
  slug: "fighter",
  name: "Fighter",
  description:
    "Fighters are masters of martial combat, skilled with a variety of weapons and armors. They are the most versatile of adventurers, excelling at both offense and defense, and capable of weathering the most punishing battles.",
  hitDie: "d10",
  savingThrows: ["Fortitude"],
  armorProficiencies: ["light armor", "medium armor", "heavy armor", "shields"],
  weaponProficiencies: ["simple", "martial"],
  perception: "1",
  levels: [
    { level: 1, features: ["Fighting Style", "Second Wind"] },
    { level: 2, features: ["Action Surge (x1)"] },
    { level: 3, features: ["Martial Archetype"] },
    { level: 4, features: ["Ability Score Improvement"] },
    { level: 5, features: ["Extra Attack (x1)"] },
    { level: 6, features: ["Ability Score Improvement"] },
    { level: 7, features: ["Martial Archetype Feature"] },
    { level: 8, features: ["Ability Score Improvement"] },
    { level: 9, features: ["Indomitable (x1)"] },
    { level: 10, features: ["Martial Archetype Feature"] },
    { level: 11, features: ["Extra Attack (x2)"] },
    { level: 12, features: ["Ability Score Improvement"] },
    { level: 13, features: ["Indomitable (x2)"] },
    { level: 14, features: ["Ability Score Improvement"] },
    { level: 15, features: ["Martial Archetype Feature"] },
    { level: 16, features: ["Ability Score Improvement"] },
    { level: 17, features: ["Action Surge (x2)", "Indomitable (x3)"] },
    { level: 18, features: ["Martial Archetype Feature"] },
    { level: 19, features: ["Ability Score Improvement"] },
    { level: 20, features: ["Extra Attack (x3)"] },
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
          level: 3,
          name: "Improved Critical",
          description:
            "Your weapon attacks score a critical hit on a roll of 19 or 20.",
        },
        {
          level: 7,
          name: "Remarkable Athlete",
          description:
            "You can add half your proficiency bonus (rounded up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus. Your jump distance increases by a number of feet equal to your Strength modifier.",
        },
        {
          level: 10,
          name: "Additional Fighting Style",
          description: "You can choose a second option from the Fighting Style class feature.",
        },
        {
          level: 15,
          name: "Superior Critical",
          description:
            "Your weapon attacks score a critical hit on a roll of 18–20.",
        },
        {
          level: 18,
          name: "Survivor",
          description:
            "At the start of each of your turns in combat, you regain hit points equal to 5 + your Constitution modifier if you have no more than half your hit points remaining. You don't gain this benefit if you have 0 hit points.",
        },
      ],
    },
  ],
  expertise: {
    exploration: [],
    social: []
  }
};
