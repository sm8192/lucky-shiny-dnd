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
    { level: 1, features: ["Unarmored Defense", "Martial Arts"], extras: { kiPoints: 0, martialArtsDie: "d4" } },
    { level: 2, features: ["Ki", "Unarmored Movement (+10 ft)"], extras: { kiPoints: 2, martialArtsDie: "d4" } },
    { level: 3, features: ["Monastic Tradition", "Deflect Missiles"], extras: { kiPoints: 3, martialArtsDie: "d4" } },
    { level: 4, features: ["Slow Fall", "Feat"], extras: { kiPoints: 4, martialArtsDie: "d4" } },
    { level: 5, features: ["Extra Attack", "Stunning Strike"], extras: { kiPoints: 5, martialArtsDie: "d6" } },
    { level: 6, features: ["Ki-Empowered Strikes", "Monastic Tradition Feature", "Unarmored Movement (+15 ft)"], extras: { kiPoints: 6, martialArtsDie: "d6" } },
    { level: 7, features: ["Evasion", "Stillness of Mind"], extras: { kiPoints: 7, martialArtsDie: "d6" } },
    { level: 8, features: ["Feat"], extras: { kiPoints: 8, martialArtsDie: "d6" } },
    { level: 9, features: ["Unarmored Movement (+20 ft)", "Unarmored Movement (vertical)"], extras: { kiPoints: 9, martialArtsDie: "d6" } },
    { level: 10, features: ["Purity of Body"], extras: { kiPoints: 10, martialArtsDie: "d6" } },
    { level: 11, features: ["Monastic Tradition Feature", "Focused Strike"], extras: { kiPoints: 11, martialArtsDie: "d8" } },
    { level: 12, features: ["Feat"], extras: { kiPoints: 12, martialArtsDie: "d8" } },
    { level: 13, features: ["Tongue of the Sun and Moon", "Unarmored Movement (+25 ft)"], extras: { kiPoints: 13, martialArtsDie: "d8" } },
    { level: 14, features: ["Diamond Soul"], extras: { kiPoints: 14, martialArtsDie: "d8" } },
    { level: 15, features: ["Timeless Body"], extras: { kiPoints: 15, martialArtsDie: "d8" } },
    { level: 16, features: ["Feat"], extras: { kiPoints: 16, martialArtsDie: "d8" } },
    { level: 17, features: ["Monastic Tradition Feature", "Quivering Palm", "Unarmored Movement (+30 ft)"], extras: { kiPoints: 17, martialArtsDie: "d10" } },
    { level: 18, features: ["Empty Body"], extras: { kiPoints: 18, martialArtsDie: "d10" } },
    { level: 19, features: ["Inner Sanctum"], extras: { kiPoints: 19, martialArtsDie: "d10" } },
    { level: 20, features: ["Perfect Self", "Feat"], extras: { kiPoints: 20, martialArtsDie: "d10" } },
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
        },
      ],
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
        },
      ],
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
        },
      ],
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
        },
      ],
    },
  ],
  expertise: {
    exploration: [
      "when moving silently, scaling surfaces, or passing through hostile territory undetected",
    ],
    social: [
      "when meditating on a problem or sensing deception through calm observation",
    ],
  },
  spellcasting: "none",
};
