import type { CharacterClass } from "@/types/character-class";

export const druid: CharacterClass = {
  slug: "druid",
  name: "Druid",
  description:
    "Druids speak the oldest language — the one spoken before words existed. They draw power from the living world itself: the turning of seasons, the fury of storms, the patience of stone. In battle they can become the beast or command the elements, and in counsel they speak with a weight that comes from witnessing centuries of cycles.",
  hitDie: "d8",
  savingThrow: "Will",
  armorProficiency: "medium",
  weaponProficiency: "simple",
  shieldProficiency: true,
  perception: "1",
  levels: [
    { level: 1, features: ["Spellcasting", "Druidic"] },
    { level: 2, features: ["Wild Shape (CR 1/4)", "Druid Circle"] },
    { level: 3, features: [] },
    { level: 4, features: ["Wild Shape (CR 1/2)", "Feat"] },
    { level: 5, features: ["Wild Strike"] },
    { level: 6, features: ["Druid Circle Feature"] },
    { level: 7, features: [] },
    { level: 8, features: ["Wild Shape (CR 1)", "Feat"] },
    { level: 9, features: [] },
    { level: 10, features: ["Druid Circle Feature"] },
    { level: 11, features: ["Wild Shape (CR 2)", "Elemental Wild Shape"] },
    { level: 12, features: ["Feat"] },
    { level: 13, features: [] },
    { level: 14, features: ["Druid Circle Feature"] },
    { level: 15, features: ["Timeless Body"] },
    { level: 16, features: ["Feat"] },
    { level: 17, features: ["Beast Spells"] },
    { level: 18, features: ["Wild Shape (CR 3)"] },
    { level: 19, features: ["Archdruid"] },
    { level: 20, features: ["Perfect Wild Shape", "Feat"] },
  ],
  choiceLevel: 2,
  subclasses: [
    {
      slug: "circle-of-the-moon",
      name: "Circle of the Moon",
      description:
        "Moon druids push Wild Shape to its violent extreme, taking the forms of powerful predators and elemental beasts to tear enemies apart from inside the fray. Their transformations are faster, wilder, and far more dangerous than those of any other circle.",
      features: [
        {
          level: 2,
          name: "Combat Wild Shape",
          description:
            "You can use Wild Shape as a bonus action rather than an action. Additionally, while in beast form you can expend a spell slot to recover hit points. For each slot level expended, you recover 1d8 hit points.",
        },
        {
          level: 2,
          name: "Circle Forms",
          description:
            "You can use Wild Shape to transform into beasts with a challenge rating as high as 1 (ignoring the usual CR 1/4 limit at this level). Starting at level 6, this increases by 1 for every 3 druid levels beyond 6th.",
        },
        {
          level: 6,
          name: "Primal Strike",
          description:
            "Your beast form attacks count as magical for the purpose of overcoming resistance and immunity to nonmagical bludgeoning, piercing, and slashing damage.",
        },
        {
          level: 10,
          name: "Elemental Wild Shape",
          description:
            "You can expend two uses of Wild Shape at the same time to transform into an air elemental, an earth elemental, a fire elemental, or a water elemental.",
        },
        {
          level: 14,
          name: "Thousand Forms",
          description:
            "You can cast the alter self spell at will, without expending a spell slot.",
        },
      ],
    },
    {
      slug: "circle-of-the-land",
      name: "Circle of the Land",
      description:
        "Land druids are the memory of a specific terrain — arctic wastes, sunken coasts, dense forests, or shimmering deserts. Their spells come more readily than other druids, and their endurance in the wild is unmatched.",
      features: [
        {
          level: 2,
          name: "Natural Recovery",
          description:
            "Once between long rests, after a short rest you can recover expended spell slots whose combined level is no greater than half your druid level (rounded up). You cannot recover slots of 6th level or higher this way.",
        },
        {
          level: 2,
          name: "Bonus Cantrip",
          description:
            "You learn one additional druid cantrip of your choice.",
        },
        {
          level: 6,
          name: "Land's Stride",
          description:
            "Moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them. Additionally, you have advantage on saving throws against plants that are magically created or manipulated to impede movement.",
        },
        {
          level: 10,
          name: "Nature's Ward",
          description:
            "You can't be charmed or frightened by elementals or fey, and you are immune to poison and disease.",
        },
        {
          level: 14,
          name: "Nature's Sanctuary",
          description:
            "Creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw (DC = 8 + your proficiency bonus + your Wisdom modifier). On a failed save, the creature must choose a different target, or the attack automatically misses. The creature is immune to this effect if it is immune to being charmed.",
        },
      ],
    },
    {
      slug: "circle-of-spores",
      name: "Circle of Spores",
      description:
        "Spore druids find beauty in decay, seeing the mushroom and the rot as agents of transformation rather than destruction. They spread living death through clouds of toxic spores and animate the fallen to continue a different kind of existence.",
      features: [
        {
          level: 2,
          name: "Halo of Spores",
          description:
            "When a creature you can see moves into a space within 10 feet of you or starts its turn there, you can use your reaction to deal 1d4 necrotic damage to it (Constitution saving throw negates; DC = 8 + your proficiency bonus + your Wisdom modifier). The damage increases to 1d6 at level 6, 1d8 at level 10, and 1d10 at level 14.",
        },
        {
          level: 2,
          name: "Symbiotic Entity",
          description:
            "As an action, expend a use of Wild Shape to channel fungal energy into your body for 10 minutes (no beast form). You gain temporary hit points equal to 4 × your druid level, your Halo of Spores damage doubles, and your melee weapon attacks deal an extra 1d6 necrotic damage.",
        },
        {
          level: 6,
          name: "Fungal Infestation",
          description:
            "When a Small or Medium beast or humanoid dies within 10 feet of you, you can use your reaction to animate it as a zombie (using that stat block). The zombie obeys your mental commands (no action required) and lasts for 1 hour or until destroyed. You can have a number of zombies active at once equal to your Wisdom modifier (minimum 1).",
        },
        {
          level: 10,
          name: "Spreading Spores",
          description:
            "You can spend an action to shed your Halo of Spores into a 10-foot cube within 30 feet of you. The spores persist in the cube for 1 minute; any creature that enters the area or starts its turn there takes your Halo of Spores damage. While this cloud is active, your Halo of Spores is suppressed.",
        },
        {
          level: 14,
          name: "Fungal Body",
          description:
            "The fungal spores in your body fortify you. You are immune to the blinded, deafened, frightened, and poisoned conditions. Additionally, when you would be critically hit, you can use your reaction to turn the hit into a normal hit instead. You can use this reaction a number of times equal to your proficiency bonus per long rest.",
        },
      ],
    },
    {
      slug: "circle-of-stars",
      name: "Circle of Stars",
      description:
        "Stars druids read celestial patterns to glean secrets and channel astral power. They call on constellations to transform their Wild Shape into radiant starlight forms, each granting a distinct cosmic boon in battle.",
      features: [
        {
          level: 2,
          name: "Star Map",
          description:
            "You've created a star map — a small object (scroll, tablet, or similar) that serves as a spellcasting focus and stores your observations. While holding it, you know the guidance and guiding bolt cantrips and can cast guiding bolt without expending a spell slot a number of times equal to your proficiency bonus per long rest.",
        },
        {
          level: 2,
          name: "Starry Form",
          description:
            "As a bonus action, expend a use of Wild Shape to take on a starry form for 10 minutes. Choose Archer, Chalice, or Dragon. Archer: a ranged spell attack (1d8 + Wisdom modifier radiant damage) appears as a bonus action each turn. Chalice: when you cast a healing spell of 1st level or higher, a creature of your choice within 30 feet regains hit points equal to 1d8 + your Wisdom modifier. Dragon: you have a minimum roll of 10 on concentration saving throws and Intelligence/Wisdom/Charisma checks.",
        },
        {
          level: 6,
          name: "Cosmic Omen",
          description:
            "When you finish a long rest, you consult your star map for omens. Roll a d6; on an even result you gain a Weal omen and on an odd result a Woe omen. As a reaction, you can use a Weal omen to add 1d6 to an attack roll, ability check, or saving throw of a creature within 30 feet, or a Woe omen to subtract 1d6 from the same. Each omen can be used a number of times equal to your proficiency bonus per long rest.",
        },
        {
          level: 10,
          name: "Twinkling Constellations",
          description:
            "While in Starry Form, your form sheds bright light in a 10-foot radius and dim light for an additional 10 feet. At the start of each turn in Starry Form you can switch which constellation you embody.",
        },
        {
          level: 14,
          name: "Full of Stars",
          description:
            "While in Starry Form, you become partially incorporeal, gaining resistance to bludgeoning, piercing, and slashing damage.",
        },
      ],
    },
  ],
  expertise: {
    exploration: [
      "when navigating, foraging, or surviving in natural environments",
      "when identifying plants, animals, weather patterns, or natural hazards",
    ],
    social: [
      "when speaking on behalf of nature, the land, or its creatures",
    ],
  },
  spellcasting: "full",
};
