import type { CharacterClass } from "@/types/character-class";

export const wizard: CharacterClass = {
  slug: "wizard",
  name: "Wizard",
  description:
    "Wizards are supreme magic-users, defined and united by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brutal force.",
  hitDie: "d6",
  savingThrows: ["Will"],
  armorProficiencies: [],
  weaponProficiencies: ["simple"],
  perception: ".5",
  levels: [
    { level: 1, features: ["Spellcasting", "Arcane Recovery"], spellSlots: { 1: 2 } },
    { level: 2, features: ["Arcane Tradition"], spellSlots: { 1: 3 } },
    { level: 3, features: [], spellSlots: { 1: 4, 2: 2 } },
    { level: 4, features: ["Ability Score Improvement"], spellSlots: { 1: 4, 2: 3 } },
    { level: 5, features: [], spellSlots: { 1: 4, 2: 3, 3: 2 } },
    { level: 6, features: ["Arcane Tradition Feature"], spellSlots: { 1: 4, 2: 3, 3: 3 } },
    { level: 7, features: [], spellSlots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
    { level: 8, features: ["Ability Score Improvement"], spellSlots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
    { level: 9, features: [], spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
    { level: 10, features: ["Arcane Tradition Feature"], spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } },
    { level: 11, features: [], spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 } },
    { level: 12, features: ["Ability Score Improvement"], spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 } },
    { level: 13, features: [], spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 } },
    { level: 14, features: ["Arcane Tradition Feature"], spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 } },
    { level: 15, features: [], spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 } },
    { level: 16, features: ["Ability Score Improvement"], spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 } },
    { level: 17, features: [], spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 } },
    { level: 18, features: ["Spell Mastery"], spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 } },
    { level: 19, features: ["Ability Score Improvement"], spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 } },
    { level: 20, features: ["Signature Spells"], spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 } },
  ],
  choiceLevel: 2,
  subclasses: [
    {
      slug: "school-of-evocation",
      name: "School of Evocation",
      description:
        "Evocation wizards channel the raw power of the elements, sculpting blasts of fire and lightning to devastating effect while protecting their allies from the same.",
      features: [
        {
          level: 2,
          name: "Evocation Savant",
          description:
            "The gold and time you must spend to copy an evocation spell into your spellbook is halved.",
        },
        {
          level: 2,
          name: "Sculpt Spells",
          description:
            "When you cast an evocation spell that affects other creatures you can see, you can choose a number of them equal to 1 + the spell's level to automatically succeed on their saving throws and take no damage.",
        },
        {
          level: 6,
          name: "Potent Cantrip",
          description:
            "Your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, it takes half the cantrip's damage but suffers no additional effects.",
        },
        {
          level: 10,
          name: "Empowered Evocation",
          description:
            "You can add your Intelligence modifier to the damage roll of any evocation spell you cast.",
        },
        {
          level: 14,
          name: "Overchannel",
          description:
            "When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with it. You can use this feature without ill effect once per long rest. After that, each use causes 2d12 necrotic damage per spell level, with no saving throw.",
        },
      ],
    },
  ],
  expertise: {
    exploration: [],
    social: []
  }
};
