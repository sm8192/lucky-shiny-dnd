import type { CharacterClass } from "@/types/character-class";

export const monk: CharacterClass = {
  slug: "monk",
  name: "Monk",
  description:
    "Monks are living weapons, having spent years honing their bodies and minds into instruments of precise, devastating force. They move faster than the eye can follow, strike harder than their slight frames suggest, and channel a mysterious inner energy — ki — to perform feats that blur the line between martial discipline and magic.",
  hitDie: "d8",
  savingThrow: "Reflex",
  armorProficiency: "none",
  weaponProficiency: "simple",
  shieldProficiency: false,
  perception: "1.5",
  levels: [
    {
      level: 1,
      features: [
        {
          level: 1,
          name: "Martial Arts",
          description:
            "Your practiced technique lets you fight with deadly grace using unarmed strikes and monk weapons (simple melee weapons that lack the two-handed or heavy property). While unarmored and not wielding a shield, you can use Dexterity instead of Strength for the attack and damage rolls of these attacks, you roll your Martial Arts die in place of the normal damage, and when you take the Attack action you can make one unarmed strike as a bonus action.",
        },
        {
          level: 1,
          name: "Unarmored Defense",
          description:
            "While you wear no armor and wield no shield, your Armor Class equals 10 + your Dexterity modifier + your Wisdom modifier.",
        },
      ],
      extras: { kiPoints: 0, martialArtsDie: "d4" },
    },
    {
      level: 2,
      features: [
        {
          level: 2,
          name: "Ki",
          description:
            "You gain a pool of ki points (shown in the Ki Points column) that fuel special techniques and refresh on a short or long rest. You start with three: Flurry of Blows (spend 1 ki after the Attack action to make two unarmed strikes as a bonus action), Patient Defense (spend 1 ki to Dodge as a bonus action), and Step of the Wind (spend 1 ki to Dash or Disengage as a bonus action and double your jump distance for the turn). Ki save DC = 8 + your proficiency bonus + your Wisdom modifier.",
        },
        {
          level: 2,
          name: "Unarmored Movement",
          description:
            "Your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases as you gain monk levels, reaching +30 feet at level 18.",
        },
      ],
      extras: { kiPoints: 2, martialArtsDie: "d4" },
    },
    {
      level: 3,
      features: [
        { level: 3, name: "Monastic Tradition Feature", description: "You gain a feature from your chosen Monastic Tradition." },
        {
          level: 3,
          name: "Deflect Missiles",
          description:
            "You can use your reaction to deflect or catch a ranged weapon attack when you are hit by one, reducing its damage by 1d10 + your Dexterity modifier + your monk level. If you reduce the damage to 0, you can catch the missile and spend 1 ki point to make a ranged attack with it as part of the same reaction.",
        },
      ],
      extras: { kiPoints: 3, martialArtsDie: "d4" },
    },
    {
      level: 4,
      features: [
        {
          level: 4,
          name: "Slow Fall",
          description:
            "You can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.",
        },
      ],
      extras: { kiPoints: 4, martialArtsDie: "d4" },
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
          name: "Stunning Strike",
          description:
            "When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.",
        },
      ],
      extras: { kiPoints: 5, martialArtsDie: "d6" },
    },
    {
      level: 6,
      features: [
        {
          level: 6,
          name: "Ki-Empowered Strikes",
          description:
            "Your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
        },
      ],
      extras: { kiPoints: 6, martialArtsDie: "d6" },
    },
    {
      level: 7,
      features: [
        { level: 7, name: "Monastic Tradition Feature", description: "You gain a feature from your chosen Monastic Tradition." },
        {
          level: 7,
          name: "Evasion",
          description:
            "When you are subjected to an effect that allows a Dexterity saving throw to take only half damage, you instead take no damage on a success and only half damage on a failure.",
        },
      ],
      extras: { kiPoints: 7, martialArtsDie: "d6" },
    },
    {
      level: 8,
      features: [
        {
          level: 8,
          name: "Stillness of Mind",
          description:
            "You can use your action to end one effect on yourself that is causing you to be charmed or frightened.",
        },
      ],
      extras: { kiPoints: 8, martialArtsDie: "d6" },
    },
    {
      level: 9,
      features: [
        {
          level: 9,
          name: "Wall Runner",
          description:
            "Your Unarmored Movement lets you move along vertical surfaces and across liquids on your turn without falling during the move.",
        },
      ],
      extras: { kiPoints: 9, martialArtsDie: "d6" },
    },
    {
      level: 10,
      features: [
        {
          level: 10,
          name: "Purity of Body",
          description:
            "Your mastery of ki makes you immune to disease and poison.",
        },
      ],
      extras: { kiPoints: 10, martialArtsDie: "d6" },
    },
    {
      level: 11,
      features: [
        {
          level: 11,
          name: "Flurry of Perfection",
          description:
            "When you use Flurry of Blows, you can make three unarmed strikes instead of two. If any of these strikes hit the same creature, the third strike deals additional damage equal to your Martial Arts die.",
        },
      ],
      extras: { kiPoints: 11, martialArtsDie: "d8" },
    },
    {
      level: 12,
      features: [
        {
          level: 12,
          name: "Tongue of Sun and Moon",
          description:
            "You learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.",
        },
      ],
      extras: { kiPoints: 12, martialArtsDie: "d8" },
    },
    {
      level: 13,
      features: [
        { level: 13, name: "Monastic Tradition Feature", description: "You gain a feature from your chosen Monastic Tradition." },
        {
          level: 13,
          name: "Diamond Soul",
          description:
            "You gain proficiency in all saving throws. Additionally, when you fail a saving throw, you can spend 1 ki point to reroll it and take the second result.",
        },
      ],
      extras: { kiPoints: 13, martialArtsDie: "d8" },
    },
    {
      level: 14,
      features: [
        {
          level: 14,
          name: "Empty Body",
          description:
            "You can spend 4 ki points as an action to become invisible for 1 minute, gaining resistance to all damage except force damage for the duration.",
        },
      ],
      extras: { kiPoints: 14, martialArtsDie: "d8" },
    },
    {
      level: 15,
      features: [
        {
          level: 15,
          name: "Timeless Body",
          description:
            "Your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You still die of extreme old age, but you no longer need food or water.",
        },
      ],
      extras: { kiPoints: 15, martialArtsDie: "d8" },
    },
    {
      level: 16,
      features: [
        {
          level: 16,
          name: "Rushing Onslaught",
          description:
            "When you use Step of the Wind, you can make one unarmed strike as part of the same bonus action. If it hits, the target's speed is reduced to 0 until the end of its next turn.",
        },
      ],
      extras: { kiPoints: 16, martialArtsDie: "d8" },
    },
    {
      level: 17,
      features: [
        { level: 17, name: "Monastic Tradition Feature", description: "You gain a feature from your chosen Monastic Tradition." },
        {
          level: 17,
          name: "Ki Overflow",
          description:
            "When you roll initiative and have no ki points remaining, you regain 4 ki points.",
        },
      ],
      extras: { kiPoints: 17, martialArtsDie: "d10" },
    },
    {
      level: 18,
      features: [
        {
          level: 18,
          name: "Perfect Movement",
          description:
            "Your Unarmored Movement bonus reaches +30 feet, and you have a flying speed equal to your walking speed whenever you begin and end your turn on a solid surface.",
        },
      ],
      extras: { kiPoints: 18, martialArtsDie: "d10" },
    },
    {
      level: 19,
      features: [
        {
          level: 19,
          name: "Perfect Self",
          description:
            "Your body and ki are one. Your unarmed strikes deal an additional die of Martial Arts damage, and when you use Stunning Strike, a creature that succeeds on its save is still incapacitated until the end of its current turn. Whenever you spend ki, you can treat one such expenditure per turn as if it cost 1 fewer ki point (minimum 0).",
        },
      ],
      extras: { kiPoints: 19, martialArtsDie: "d10" },
    },
    {
      level: 20,
      features: [
        {
          level: 20,
          name: "Body and Soul",
          description:
            "When you roll initiative and have no ki points remaining, you regain all expended ki points. In addition, your maximum ki pool has no upper bound imposed by your level, and your Martial Arts die increases to a d12.",
        },
      ],
      extras: { kiPoints: 20, martialArtsDie: "d10" },
    },
  ],
  choiceLevel: 3,
  subclasses: [
    {
      slug: "way-of-the-open-hand",
      name: "Way of the Open Hand",
      description:
        "Open Hand monks master the complete mastery of unarmed combat, turning every strike into an opportunity to control, cripple, or incapacitate. They are the purest expression of the monk's art — no weapons, no magic, just a body trained to perfection.",
      features: [
        {
          level: 3,
          name: "Open Hand Technique",
          description:
            "Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects: the target must succeed on a Dexterity saving throw or be knocked prone; the target must succeed on a Strength saving throw or be pushed up to 15 feet away; the target can't take reactions until the end of your next turn.",
        },
        {
          level: 7,
          name: "Wholeness of Body",
          description:
            "As an action, you can regain hit points equal to three times your monk level. Once you use this feature, you must finish a long rest before using it again.",
        },
        {
          level: 13,
          name: "Tranquility",
          description:
            "At the end of a long rest, you gain the effect of a sanctuary spell (DC = 8 + your proficiency bonus + your Wisdom modifier) that lasts until the start of your next long rest or until you make an attack roll, cast a spell, or deal damage.",
        },
        {
          level: 17,
          name: "Quivering Palm",
          description:
            "When you hit a creature with an unarmed strike, you can spend 3 ki points to start imperceptible vibrations in the creature's body. The vibrations are harmless unless you use your action to end them. When you do, the creature must make a Constitution saving throw. It takes 10d10 necrotic damage on a failed save, or half on a success. You can only maintain one instance of this feature at a time.",
        }
      ]
    },
    {
      slug: "way-of-shadow",
      name: "Way of Shadow",
      description:
        "Shadow monks follow a tradition that reveres darkness as a tool and silence as a weapon. They slip between shadows like water, strike without warning, and vanish before anyone can react — assassins of the highest order who need no blade to be lethal.",
      features: [
        {
          level: 3,
          name: "Shadow Arts",
          description:
            "You can spend 2 ki points to cast darkness, darkvision, pass without trace, or silence — no spell slot required and without material components. Wisdom is your spellcasting ability for these spells.",
        },
        {
          level: 3,
          name: "Shadow Step",
          description:
            "When you are in dim light or darkness, as a bonus action you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. You have advantage on the first melee attack you make before the end of your turn after using this feature.",
        },
        {
          level: 7,
          name: "Cloak of Shadows",
          description:
            "When you are in an area of dim light or darkness, you can use your action to become invisible. You remain invisible until you make an attack, cast a spell, or enter an area of bright light.",
        },
        {
          level: 13,
          name: "Shadow Strike",
          description:
            "While you are invisible, your weapon and unarmed attacks deal an extra 2d6 necrotic damage. Additionally, whenever you reduce a creature to 0 hit points with an attack while invisible, you can immediately teleport up to 30 feet to an unoccupied space in dim light or darkness without breaking your invisibility.",
        },
        {
          level: 17,
          name: "Living Shadow",
          description:
            "You can spend 4 ki points as a bonus action to step into the Plane of Shadow. Until the start of your next turn, you are immune to all damage and conditions, you cannot be targeted by spells or attacks, and you can observe your surroundings normally. At the start of your next turn you re-emerge in any unoccupied space within 30 feet that you could see before you entered.",
        }
      ]
    },
    {
      slug: "way-of-the-four-elements",
      name: "Way of the Four Elements",
      description:
        "Four Elements monks learn to treat ki as a conduit for elemental forces, hurling flame, shaping earth, and redirecting water with nothing but focused will. They are less reliant on pure martial strikes than other monks, trading some physical precision for elemental versatility.",
      features: [
        {
          level: 3,
          name: "Disciple of the Elements",
          description:
            "You learn Elemental Attunement (a minor cantrip-like effect: briefly creating a small flame, a gust of wind, a ripple of water, or a tremor in stone at no ki cost) and two Elemental Disciplines of your choice. You learn one additional discipline at levels 6, 11, and 17. Disciplines have ki costs ranging from 2–6; each uses Wisdom for any save DCs (DC = 8 + proficiency bonus + Wisdom modifier).",
        },
        {
          level: 7,
          name: "Elemental Surge",
          description:
            "Immediately after you take the Attack action on your turn, you can spend 1 ki point to cast one of your Elemental Disciplines that has a ki cost of 2 as a bonus action. This cast does not require you to spend the discipline's ki cost.",
        },
        {
          level: 13,
          name: "Ride the Wind",
          description:
            "You can spend 4 ki points to gain a flying speed equal to your walking speed for 10 minutes.",
        },
        {
          level: 17,
          name: "Eternal Mountain Defense",
          description:
            "You can spend 5 ki points to cast stoneskin on yourself, without material components, lasting 1 hour or until you end it as a bonus action.",
        }
      ]
    },
    {
      slug: "way-of-the-drunken-master",
      name: "Way of the Drunken Master",
      description:
        "Drunken Master monks disguise lethal precision behind a performance of stumbling chaos. Every lurch and tumble is calculated misdirection — opponents can never predict where the next strike will land, making the drunken master almost impossible to pin down.",
      features: [
        {
          level: 3,
          name: "Drunken Technique",
          description:
            "You gain proficiency in the Performance skill and the brewer's supplies tool. When you use Flurry of Blows, you gain the benefit of the Disengage action, and your walking speed increases by 10 feet until the end of the current turn.",
        },
        {
          level: 3,
          name: "Tipsy Sway",
          description:
            "When a melee attack misses you, you can spend 1 ki point as a reaction to redirect the attack against a different creature of your choice within 5 feet of you. The original attacker makes the attack roll again against the new target.",
        },
        {
          level: 7,
          name: "Drunkard's Luck",
          description:
            "You always seem to get a lucky bounce at the right moment. Whenever you make an ability check, attack roll, or saving throw and have disadvantage on the roll, you can spend 2 ki points to cancel the disadvantage for that roll.",
        },
        {
          level: 13,
          name: "Intoxicated Frenzy",
          description:
            "When you use Flurry of Blows, you can make up to three additional strikes with it (a maximum of five Flurry of Blows strikes total), provided that each strike targets a different creature.",
        },
        {
          level: 17,
          name: "Stumbling Perfection",
          description:
            "Your unpredictable movement becomes impossible to track. You have advantage on all Dexterity saving throws. Additionally, opportunity attacks against you have disadvantage.",
        }
      ]
    },
  ],
  expertise: {
    exploration: [
      "When crossing treacherous terrain through agility, balance, or acrobatics",
      "When enduring physical hardship through disciplined control of the body",
    ],
    social: [
      "When maintaining composure under pressure or provocation",
      "When observing the subtle tells and intentions of others",
    ],
  },
  spellcasting: "none",
};