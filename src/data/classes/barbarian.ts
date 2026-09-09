import type { CharacterClass } from "@/types/character-class";

export const barbarian: CharacterClass = {
  slug: "barbarian",
  name: "Barbarian",
  description:
    "Fury made flesh, barbarians draw on a primal wellspring of rage that makes them almost impossible to stop in open combat. Born of harsh lands and harder lives, they are at their most dangerous when wounded — and they are never more alive than when charging into deadly battle.",
  hitDie: "d12",
  savingThrow: "Fortitude",
  armorProficiency: "medium",
  weaponProficiency: "martial",
  shieldProficiency: true,
  perception: "1.5",
  levels: [
    {
      level: 1,
      features: [
        {
          level: 1,
          name: "Rage",
          description:
            "As a bonus action, you enter a rage for up to 1 minute. While raging and not wearing heavy armor, you gain: advantage on Strength checks and Strength saving throws, a bonus to melee weapon damage shown in the Rage Damage column, and resistance to bludgeoning, piercing, and slashing damage. Your rage ends early if you end your turn without having attacked a hostile creature or taken damage since your last turn, or if you fall unconscious. You have a limited number of rages per long rest, shown in the Rage Uses column.",
        },
        {
          level: 1,
          name: "Unarmored Defense",
          description:
            "While you are not wearing armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.",
        },
      ],
      extras: { rageUses: 2, rageDamage: 2 },
    },
    {
      level: 2,
      features: [
        {
          level: 2,
          name: "Reckless Attack",
          description:
            "When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
        },
        {
          level: 2,
          name: "Danger Sense",
          description:
            "You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.",
        },
      ],
      extras: { rageUses: 2, rageDamage: 2 },
    },
    {
      level: 3,
      features: [
        { level: 3, name: "Primal Path Feature", description: "You gain a feature from your chosen Primal Path." },
      ],
      extras: { rageUses: 3, rageDamage: 2 },
    },
    {
      level: 4,
      features: [
        {
          level: 4,
          name: "Fast Movement",
          description:
            "Your speed increases by 10 feet while you aren't wearing heavy armor.",
        },
      ],
      extras: { rageUses: 3, rageDamage: 2 },
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
        {
          level: 5,
          name: "Feral Instinct",
          description:
            "You have advantage on initiative rolls. Additionally, if you are surprised at the start of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.",
        },
      ],
      extras: { rageUses: 3, rageDamage: 2 },
    },
    {
      level: 6,
      features: [
        {
          level: 6,
          name: "Brutal Critical",
          description:
            "When you score a critical hit with a melee weapon attack, you can roll one additional weapon damage die. This increases to two additional dice at level 13 and three at level 17.",
        },
      ],
      extras: { rageUses: 4, rageDamage: 2 },
    },
    {
      level: 7,
      features: [
        { level: 7, name: "Primal Path Feature", description: "You gain a feature from your chosen Primal Path." },
      ],
      extras: { rageUses: 4, rageDamage: 2 },
    },
    {
      level: 8,
      features: [
        {
          level: 8,
          name: "Battering Charge",
          description:
            "If you move at least 10 feet in a straight line toward a creature before hitting it with a melee attack, the target must succeed on a Strength saving throw (DC = 8 + your proficiency bonus + your Strength modifier) or be pushed 5 feet away and knocked prone.",
        },
      ],
      extras: { rageUses: 4, rageDamage: 2 },
    },
    {
      level: 9,
      features: [
        {
          level: 9,
          name: "Relentless Rage",
          description:
            "If you drop to 0 hit points while raging and don't die outright, you can make a DC 10 Constitution saving throw. On a success, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. The DC resets to 10 when you finish a short or long rest.",
        },
      ],
      extras: { rageUses: 4, rageDamage: 3 },
    },
    {
      level: 10,
      features: [
        {
          level: 10,
          name: "Primal Knowledge",
          description:
            "Your instincts sharpen beyond the battlefield. You gain proficiency in one skill of your choice from Athletics, Intimidation, Perception, or Survival, and while raging you can move across difficult terrain without spending extra movement.",
        },
      ],
      extras: { rageUses: 4, rageDamage: 3 },
    },
    {
      level: 11,
      features: [
        {
          level: 11,
          name: "Relentless Assault",
          description:
            "While raging, whenever you reduce a creature to 0 hit points with a melee attack on your turn, you can immediately move up to half your speed and make one additional melee weapon attack as part of the same action.",
        },
      ],
      extras: { rageUses: 4, rageDamage: 3 },
    },
    {
      level: 12,
      features: [
        {
          level: 12,
          name: "Unstoppable",
          description:
            "While raging, you can't be frightened, and your movement can't be reduced below your normal speed by difficult terrain, spells, or other effects that would slow you.",
        },
      ],
      extras: { rageUses: 5, rageDamage: 3 },
    },
    {
      level: 13,
      features: [
        { level: 13, name: "Primal Path Feature", description: "You gain a feature from your chosen Primal Path." },
      ],
      extras: { rageUses: 5, rageDamage: 3 },
    },
    {
      level: 14,
      features: [
        {
          level: 14,
          name: "Bloodied Fury",
          description:
            "While raging and below half your hit point maximum, your Rage Damage bonus is doubled and your critical hit range with melee weapons expands to 19–20.",
        },
      ],
      extras: { rageUses: 5, rageDamage: 3 },
    },
    {
      level: 15,
      features: [
        {
          level: 15,
          name: "Persistent Rage",
          description:
            "Your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it. It no longer ends automatically for failing to attack or take damage.",
        },
      ],
      extras: { rageUses: 5, rageDamage: 3 },
    },
    {
      level: 16,
      features: [
        {
          level: 16,
          name: "Indomitable Might",
          description:
            "If your total for a Strength check or Strength saving throw is less than your Strength score, you can use that score in place of the total.",
        },
      ],
      extras: { rageUses: 5, rageDamage: 4 },
    },
    {
      level: 17,
      features: [
        { level: 17, name: "Primal Path Feature", description: "You gain a feature from your chosen Primal Path." },
      ],
      extras: { rageUses: 6, rageDamage: 4 },
    },
    {
      level: 18,
      features: [
        {
          level: 18,
          name: "Primal Champion",
          description:
            "You embody primal power. Your Strength and Constitution scores each increase by 4, to a maximum of 24.",
        },
      ],
      extras: { rageUses: 6, rageDamage: 4 },
    },
    {
      level: 19,
      features: [
        {
          level: 19,
          name: "Avatar of Fury",
          description:
            "When you enter your rage, you can let out a primal roar. Each enemy within 30 feet must succeed on a Wisdom saving throw (DC = 8 + your proficiency bonus + your Strength modifier) or be frightened of you until the end of your next turn. While raging, the first melee attack you make on each of your turns that hits deals additional damage equal to your Barbarian level.",
        },
      ],
      extras: { rageUses: 6, rageDamage: 4 },
    },
    {
      level: 20,
      features: [
        {
          level: 20,
          name: "Undying Rage",
          description:
            "Your rage becomes limitless — you have no cap on the number of times you can rage per day. Additionally, while raging, you have resistance to all damage except psychic, and you automatically succeed on Relentless Rage saving throws.",
        },
      ],
      extras: { rageUses: 0, rageDamage: 4 },
    },
  ],
  choiceLevel: 3,
  subclasses: [
    {
      slug: "berserker",
      name: "Berserker",
      description:
        "Some barbarians draw fury from an almost suicidal intensity, pushing their body past human limits through sheer will. A berserker thrives in the chaos of extended combat, becoming more dangerous with every wound received.",
      features: [
        {
          level: 3,
          name: "Frenzy",
          description:
            "While raging, you can go into a frenzy. For the duration of your rage, you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.",
        },
        {
          level: 7,
          name: "Mindless Rage",
          description:
            "You can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.",
        },
        {
          level: 13,
          name: "Intimidating Presence",
          description:
            "As an action, you can frighten one creature within 30 feet that can see or hear you. The target must succeed on a Wisdom saving throw (DC = 8 + your proficiency bonus + your Charisma modifier) or become frightened of you until the end of your next turn. Subsequent uses against the same target automatically fail until a short or long rest.",
        },
        {
          level: 17,
          name: "Retaliation",
          description:
            "When you take damage from a creature within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.",
        }
      ]
    },
    {
      slug: "totem-warrior",
      name: "Totem Warrior",
      description:
        "Totem warriors walk a spiritual path guided by an animal spirit. The chosen totem shapes their primal power, granting supernatural resilience, predatory senses, or the relentless drive of the wild.",
      features: [
        {
          level: 3,
          name: "Totem Spirit",
          description:
            "Choose a totem spirit: Bear, Eagle, or Wolf. Bear: while raging, you have resistance to all damage except psychic. Eagle: while raging, other creatures have disadvantage on opportunity attacks against you, and you can use the Dash action as a bonus action. Wolf: while raging, your allies have advantage on melee attack rolls against any creature within 5 feet of you that isn't incapacitated.",
        },
        {
          level: 7,
          name: "Aspect of the Beast",
          description:
            "You gain a magical benefit based on your totem animal. Bear: your carrying capacity doubles and you have advantage on Strength checks. Eagle: you can see up to 1 mile away with no difficulty, and dim light doesn't impose disadvantage on your Wisdom (Perception) checks. Wolf: you can track other creatures at a fast pace, and you can move stealthily at a normal pace.",
        },
        {
          level: 13,
          name: "Totemic Attunement",
          description:
            "Bear: while raging, any creature within 5 feet of you that is hostile to you has disadvantage on attack rolls against targets other than you. Eagle: while raging, you have a flying speed equal to your current walking speed; this ends if you start your turn without solid ground beneath your feet. Wolf: while raging, you can use a bonus action to knock a Large or smaller creature prone when you hit it with a melee weapon attack.",
        },
        {
          level: 17,
          name: "Spirit Walker",
          description:
            "You can cast the commune with nature spell, but only as a ritual. When you do so, a spiritual version of one of the animals you chose for Totem Spirit appears to you to convey the information you seek.",
        }
      ]
    },
    {
      slug: "storm-herald",
      name: "Storm Herald",
      description:
        "Storm heralds carry the fury of elemental weather in their blood. When they rage, the air around them crackles with electricity, howls with arctic wind, or scorches with desert heat — transforming the battlefield itself.",
      features: [
        {
          level: 3,
          name: "Storm Aura",
          description:
            "While raging, you emit an aura in a 10-foot radius. Choose Desert, Sea, or Tundra. Desert: enemies that start their turn in the aura take 2 fire damage. Sea: you can use your bonus action to cause one creature in the aura to make a Strength saving throw (DC 8 + proficiency bonus + Constitution modifier) or take 1d6 lightning damage and fall prone. Tundra: the ground in the aura becomes difficult terrain; creatures of your choice that start their turn there take 2 cold damage.",
        },
        {
          level: 7,
          name: "Storm Soul",
          description:
            "Desert: you gain resistance to fire damage and don't suffer ill effects from extreme heat. Sea: you gain resistance to lightning damage and can breathe underwater. Tundra: you gain resistance to cold damage and don't suffer ill effects from extreme cold.",
        },
        {
          level: 13,
          name: "Shielding Storm",
          description:
            "Creatures of your choice within your Storm Aura gain the damage resistance granted by your Storm Soul feature while you are raging.",
        },
        {
          level: 17,
          name: "Raging Storm",
          description:
            "Desert: when you hit a creature with a melee attack, it must succeed on a Dexterity saving throw or catch fire, taking 4d6 fire damage at the start of each of its turns until it uses an action to extinguish the flames. Sea: when you hit a creature with a melee attack, you can use your bonus action to hurl the target up to 20 feet horizontally; it must succeed on a Strength saving throw or fall prone. Tundra: whenever the effect of your Storm Aura is activated, you can choose to freeze the ground; it becomes difficult terrain for 1 minute.",
        }
      ]
    },
    {
      slug: "ancestral-guardian",
      name: "Ancestral Guardian",
      description:
        "Ancestral guardians summon the spirits of fallen warriors to fight beside them, drawing on the collective might of their lineage. In battle they are a living anchor — protecting allies as much as destroying foes.",
      features: [
        {
          level: 3,
          name: "Ancestral Protectors",
          description:
            "While raging, the first creature you hit with an attack on your turn becomes the target of your ancestral spirits. That creature has disadvantage on attack rolls against targets other than you, and any creature other than you that the target attacks has resistance to the damage from that attack. This effect ends when your rage ends.",
        },
        {
          level: 7,
          name: "Spirit Shield",
          description:
            "While raging, you can use your reaction when another creature you can see within 30 feet of you takes damage to reduce that damage by 2d6. At level 10 this becomes 3d6, and at level 14 it becomes 4d6.",
        },
        {
          level: 13,
          name: "Consult the Spirits",
          description:
            "You can cast clairvoyance and augury each once without spell slots; both recharge on a long rest. Wisdom is your spellcasting ability for these spells.",
        },
        {
          level: 17,
          name: "Vengeful Ancestors",
          description:
            "When you use Spirit Shield to reduce damage, the attacker takes force damage equal to the amount reduced.",
        }
      ]
    }
  ],
  expertise: {
    exploration: [
      "When destroying the works of civilization",
      "When adapting to extreme conditions"
    ],
    social: [
      "When cowing the weak and civilized",
      "When asserting authority among those who follow strength"
    ]
  },
  spellcasting: "none",
};