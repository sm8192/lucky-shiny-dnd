import type { CharacterClass } from "@/types/character-class";

export const wizard: CharacterClass = {
  slug: "wizard",
  name: "Wizard",
  description:
    "Wizards are supreme magic-users, defined and united by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brutal force.",
  hitDie: "d6",
  savingThrow: "Will",
  armorProficiency: "none",
  weaponProficiency: "simple",
  shieldProficiency: false,
  perception: ".5",
  levels: [
    { level: 1, features: ["Spellcasting", "Arcane Recovery"] },
    { level: 2, features: ["Arcane Tradition"] },
    { level: 3, features: [] },
    { level: 4, features: ["Ability Score Improvement"] },
    { level: 5, features: [] },
    { level: 6, features: ["Arcane Tradition Feature"] },
    { level: 7, features: [] },
    { level: 8, features: ["Ability Score Improvement"] },
    { level: 9, features: [] },
    { level: 10, features: ["Arcane Tradition Feature"] },
    { level: 11, features: [] },
    { level: 12, features: ["Ability Score Improvement"] },
    { level: 13, features: [] },
    { level: 14, features: ["Arcane Tradition Feature"] },
    { level: 15, features: [] },
    { level: 16, features: ["Ability Score Improvement"] },
    { level: 17, features: [] },
    { level: 18, features: ["Spell Mastery"] },
    { level: 19, features: ["Ability Score Improvement"] },
    { level: 20, features: ["Signature Spells"] }
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
  },
  spellcasting: "full"
};
