import type { CharacterClass } from "@/types/character-class";

export const fighter: CharacterClass = {
  slug: "fighter",
  name: "Fighter",
  description:
    "Fighters are masters of martial combat, skilled with a variety of weapons and armors. They are the most versatile of adventurers, excelling at both offense and defense, and capable of weathering the most punishing battles.",
  hitDie: "d10",
  primaryAbility: ["STR", "DEX"],
  savingThrows: ["STR", "CON"],
  armorProficiencies: ["light armor", "medium armor", "heavy armor", "shields"],
  weaponProficiencies: ["simple weapons", "martial weapons"],
  skillChoices: {
    count: 2,
    options: [
      "Acrobatics",
      "Animal Handling",
      "Athletics",
      "History",
      "Insight",
      "Intimidation",
      "Perception",
      "Survival",
    ],
  },
  startingEquipment: [
    "Chain mail or leather armor, longbow, and 20 arrows",
    "A martial weapon and a shield, or two martial weapons",
    "A light crossbow and 20 bolts, or two handaxes",
    "A dungeoneer's pack or an explorer's pack",
  ],
  levels: [
    { level: 1,  proficiencyBonus: 2, features: ["Fighting Style", "Second Wind"] },
    { level: 2,  proficiencyBonus: 2, features: ["Action Surge (×1)"] },
    { level: 3,  proficiencyBonus: 2, features: ["Martial Archetype"] },
    { level: 4,  proficiencyBonus: 2, features: ["Ability Score Improvement"] },
    { level: 5,  proficiencyBonus: 3, features: ["Extra Attack (×1)"] },
    { level: 6,  proficiencyBonus: 3, features: ["Ability Score Improvement"] },
    { level: 7,  proficiencyBonus: 3, features: ["Martial Archetype Feature"] },
    { level: 8,  proficiencyBonus: 3, features: ["Ability Score Improvement"] },
    { level: 9,  proficiencyBonus: 4, features: ["Indomitable (×1)"] },
    { level: 10, proficiencyBonus: 4, features: ["Martial Archetype Feature"] },
    { level: 11, proficiencyBonus: 4, features: ["Extra Attack (×2)"] },
    { level: 12, proficiencyBonus: 4, features: ["Ability Score Improvement"] },
    { level: 13, proficiencyBonus: 5, features: ["Indomitable (×2)"] },
    { level: 14, proficiencyBonus: 5, features: ["Ability Score Improvement"] },
    { level: 15, proficiencyBonus: 5, features: ["Martial Archetype Feature"] },
    { level: 16, proficiencyBonus: 5, features: ["Ability Score Improvement"] },
    { level: 17, proficiencyBonus: 6, features: ["Action Surge (×2)", "Indomitable (×3)"] },
    { level: 18, proficiencyBonus: 6, features: ["Martial Archetype Feature"] },
    { level: 19, proficiencyBonus: 6, features: ["Ability Score Improvement"] },
    { level: 20, proficiencyBonus: 6, features: ["Extra Attack (×3)"] },
  ],
  subclasses: [
    {
      slug: "champion",
      name: "Champion",
      choiceLevel: 3,
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
};
