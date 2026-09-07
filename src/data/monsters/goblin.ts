import type { Monster } from "@/types/monster";

export const goblin: Monster = {
  slug: "goblin",
  name: "Goblin",
  size: "small",
  type: "humanoid",
  subtype: "goblinoid",
  alignment: "neutral evil",
  armorClass: 15,
  armorType: "leather armor, shield",
  hitPoints: 7,
  hitDice: "2d6",
  speed: { walk: 30 },
  abilityScores: {
    str: 8,
    dex: 14,
    con: 10,
    int: 10,
    wis: 8,
    cha: 8,
  },
  skills: { Stealth: 6 },
  senses: {
    darkvision: 60,
    passivePerception: 9,
  },
  languages: ["Common", "Goblin"],
  challengeRating: "1/4",
  experiencePoints: 50,
  traits: [
    {
      name: "Nimble Escape",
      description:
        "The goblin can take the Disengage or Hide action as a bonus action on each of its turns.",
    },
  ],
  actions: [
    {
      name: "Scimitar",
      type: "action",
      description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target.",
      attackBonus: 4,
      damage: "1d6 + 2",
      damageType: "slashing",
      reach: "5 ft.",
    },
    {
      name: "Shortbow",
      type: "action",
      description: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target.",
      attackBonus: 4,
      damage: "1d6 + 2",
      damageType: "piercing",
      range: "80/320 ft.",
    },
  ],
  description:
    "Goblins are small, black-hearted humanoids that lair in caves, abandoned mines, despoiled dungeons, and other dismal settings. Individually weak, they gather in large numbers to torment other creatures.",
};
