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
    {
      level: 1,
      features: [
        {
          level: 1,
          name: "Spellcasting",
          description:
            "You cast wizard spells recorded in a spellbook, using Intelligence as your spellcasting ability. Each day you prepare a subset of the spells written in your book, and you cast them using the full-caster spell slots shown on the class progression table.",
        },
        {
          level: 1,
          name: "Spellbook",
          description:
            "You possess a spellbook containing your known spells. You can copy new wizard spells into it from scrolls or other spellbooks by spending time and gold, letting your repertoire grow far beyond that of any innate caster. If your spellbook is lost, you can prepare only the spells you have memorized until you replace it.",
        },
      ],
    },
    {
      level: 2,
      features: [
        { level: 2, name: "Arcane Tradition Feature", description: "You gain a feature from your chosen Arcane Tradition." },
      ],
    },
    {
      level: 3,
      features: [
        {
          level: 3,
          name: "Arcane Recovery",
          description:
            "Once per day when you finish a short rest, you can recover expended spell slots with a combined level equal to or less than half your wizard level (rounded up), none of which can be 6th level or higher.",
        },
      ],
    },
    {
      level: 4,
      features: [
        {
          level: 4,
          name: "Cantrip Formulae",
          description:
            "Your mastery of foundational magic lets you rewrite the basics. Whenever you finish a long rest, you can replace one wizard cantrip you know with another from the wizard spell list.",
        },
      ],
    },
    {
      level: 5,
      features: [
        {
          level: 5,
          name: "Focused Casting",
          description:
            "Your discipline steadies your most powerful magic. When you cast a wizard spell of 3rd level or higher that requires a saving throw, one target of your choice makes its first save against it with disadvantage. You can use this once per short or long rest.",
        },
      ],
    },
    {
      level: 6,
      features: [
        { level: 6, name: "Arcane Tradition Feature", description: "You gain a feature from your chosen Arcane Tradition." },
      ],
    },
    {
      level: 7,
      features: [
        {
          level: 7,
          name: "Ritual Mastery",
          description:
            "You can cast any wizard spell in your spellbook that has the ritual tag as a ritual, even if it isn't prepared. Additionally, ritual casting takes you 5 minutes less than normal.",
        },
      ],
    },
    {
      level: 8,
      features: [
        {
          level: 8,
          name: "Arcane Precision",
          description:
            "Your spell attacks find their mark. Once per turn when you miss with a wizard spell attack, you can turn the miss into a hit. You can use this a number of times equal to your Intelligence modifier per long rest.",
        },
      ],
    },
    {
      level: 9,
      features: [
        {
          level: 9,
          name: "Warding Sigils",
          description:
            "You inscribe protective runes into your equipment. You gain a +1 bonus to AC and to saving throws against spells while you are conscious and not wearing armor.",
        },
      ],
    },
    {
      level: 10,
      features: [
        { level: 10, name: "Arcane Tradition Feature", description: "You gain a feature from your chosen Arcane Tradition." },
      ],
    },
    {
      level: 11,
      features: [
        {
          level: 11,
          name: "Signature Spells",
          description:
            "Choose two 3rd-level wizard spells in your spellbook as your signature spells. They are always prepared, don't count against your prepared limit, and you can cast each of them once at 3rd level without expending a spell slot. You regain the ability to do so after a short or long rest.",
        },
      ],
    },
    {
      level: 12,
      features: [
        {
          level: 12,
          name: "Arcane Efficiency",
          description:
            "Your command of magic reduces its cost. When you cast a wizard spell of 5th level or lower, you can spend a spell slot one level lower than the spell's level, once per long rest.",
        },
      ],
    },
    {
      level: 13,
      features: [
        {
          level: 13,
          name: "Improved Arcane Recovery",
          description:
            "Your Arcane Recovery now returns slots with a combined level up to your wizard level (rounded up) instead of half, though still none of 6th level or higher.",
        },
      ],
    },
    {
      level: 14,
      features: [
        { level: 14, name: "Arcane Tradition Feature", description: "You gain a feature from your chosen Arcane Tradition." },
      ],
    },
    {
      level: 15,
      features: [
        {
          level: 15,
          name: "Spell Resistance",
          description:
            "Your deep understanding of magic wards you against it. You have advantage on saving throws against spells, and you have resistance to the damage of spells cast against you.",
        },
      ],
    },
    {
      level: 16,
      features: [
        {
          level: 16,
          name: "Arcane Mastery",
          description:
            "Choose one wizard spell of 4th level or lower in your spellbook. It becomes a mastered spell, and you can cast it at its lowest level without expending a spell slot.",
        },
      ],
    },
    {
      level: 17,
      features: [
        {
          level: 17,
          name: "Overwhelming Magic",
          description:
            "The sheer force of your highest spells is difficult to withstand. When you cast a wizard spell of 6th level or higher, creatures that fail their saving throw against it take an additional 2d10 force damage.",
        },
      ],
    },
    {
      level: 18,
      features: [
        { level: 18, name: "Arcane Tradition Feature", description: "You gain a feature from your chosen Arcane Tradition." },
      ],
    },
    {
      level: 19,
      features: [
        {
          level: 19,
          name: "Archmage's Command",
          description:
            "Your mastery of the Weave reaches its zenith. Once per long rest, you can cast a wizard spell of 5th level or lower without expending a spell slot and without concentration (if it normally requires it), maintaining its full duration. While concentrating on a spell, you have advantage on all Constitution saving throws to maintain it.",
        },
      ],
    },
    {
      level: 20,
      features: [
        {
          level: 20,
          name: "Signature Mastery",
          description:
            "You gain a third signature spell of 3rd, 4th, or 5th level from your spellbook, always prepared and castable once at its base level without a spell slot per short or long rest. In addition, whenever you roll a 1 on a damage die for a wizard spell, you can reroll it once and must use the new roll.",
        },
      ],
    },
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
        }
      ]
    }
  ],
  expertise: {
    exploration: [
      "When researching arcane lore, deciphering magical writing, or identifying spells",
      "When analyzing or manipulating magical phenomena and enchanted objects",
    ],
    social: [
      "When advising others on matters of magic, history, or the planes",
      "When negotiating with scholars, mages, or arcane institutions",
    ]
  },
  spellcasting: "full"
};
