import type { CharacterClass } from "@/types/character-class";

export const rogue: CharacterClass = {
  slug: "rogue",
  name: "Rogue",
  description:
    "Rogues are cunning operatives who rely on speed, guile, and precision over brute force. They excel at exploiting moments of vulnerability, vanishing into shadows, and turning a single opening into a decisive strike. Every rogue brings a particular trade to the table — thief, assassin, spy, or something stranger — but all share a talent for doing the unexpected.",
  hitDie: "d8",
  savingThrow: "Reflex",
  armorProficiency: "light",
  weaponProficiency: "martial",
  shieldProficiency: false,
  perception: "1.5",
  spellcasting: "none",
  choiceLevel: 3,
  expertise: {
    exploration: [
      "When navigating or bypassing physical obstacles such as locks, traps, or barriers",
      "When moving without being detected in an environment with cover or darkness",
    ],
    social: [
      "When gathering information through deception or misdirection",
      "When reading the motives or tells of a single target in conversation",
    ],
  },
  levels: [
    { level: 1,  features: ["Sneak Attack", "Thieves' Cant", "Expertise"] },
    { level: 2,  features: ["Cunning Action"] },
    { level: 3,  features: ["Roguish Archetype", "Archetype Feature"] },
    { level: 4,  features: ["Uncanny Dodge"] },
    { level: 5,  features: ["Sneak Attack Improvement", "Archetype Feature"] },
    { level: 6,  features: ["Expertise (2nd)"] },
    { level: 7,  features: ["Evasion"] },
    { level: 8,  features: [] },
    { level: 9,  features: ["Reliable Talent"] },
    { level: 10, features: ["Archetype Feature"] },
    { level: 11, features: ["Sneak Attack Improvement", "Blindsense"] },
    { level: 12, features: [] },
    { level: 13, features: ["Archetype Feature"] },
    { level: 14, features: ["Slippery Mind"] },
    { level: 15, features: [] },
    { level: 16, features: [] },
    { level: 17, features: ["Archetype Feature"] },
    { level: 18, features: ["Elusive"] },
    { level: 19, features: ["Stroke of Luck"] },
    { level: 20, features: ["Death Strike"] },
  ],
  subclasses: [
    {
      slug: "thief",
      name: "Thief",
      description:
        "Thieves are opportunists who have honed their craft to an art form — breaking in, breaking out, and walking away with more than they came with. Their training gives them unmatched speed and adaptability in almost any situation.",
      features: [
        {
          level: 3,
          name: "Fast Hands",
          description:
            "You can use the bonus action granted by Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action.",
        },
        {
          level: 3,
          name: "Second-Story Work",
          description:
            "Climbing no longer costs you extra movement. In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier.",
        },
        {
          level: 7,
          name: "Supreme Sneak",
          description:
            "You have advantage on Dexterity (Stealth) checks if you move no more than half your speed on the same turn.",
        },
        {
          level: 13,
          name: "Use Magic Device",
          description:
            "You have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items.",
        },
        {
          level: 17,
          name: "Thief's Reflexes",
          description:
            "You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised.",
        },
      ],
    },
    {
      slug: "assassin",
      name: "Assassin",
      description:
        "Assassins specialize in ending threats before combat truly begins. Their mastery of disguise and poison lets them operate in plain sight, and when the moment comes, a single precise blow can determine the entire outcome of an encounter.",
      features: [
        {
          level: 3,
          name: "Bonus Proficiencies",
          description:
            "You gain proficiency with the disguise kit and the poisoner's kit.",
        },
        {
          level: 3,
          name: "Assassinate",
          description:
            "You are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit.",
        },
        {
          level: 7,
          name: "Infiltration Expertise",
          description:
            "You can unfailingly create false identities for yourself. You must spend seven days and 25 gp to establish the history, profession, and affiliations for an identity. You can't establish an identity that belongs to someone else.",
        },
        {
          level: 13,
          name: "Impostor",
          description:
            "You gain the ability to unerringly mimic another person's speech, writing, and behavior. You must study the person by spending at least 3 hours observing their speech patterns, writing samples, and mannerisms.",
        },
        {
          level: 17,
          name: "Death Strike",
          description:
            "When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature.",
        },
      ],
    },
    {
      slug: "arcane-trickster",
      name: "Arcane Trickster",
      description:
        "Arcane Tricksters blend roguish stealth with arcane magic, using illusions and enchantments to bewilder foes and escape unscathed. They are manipulators as much as infiltrators, and a well-timed spell can be just as effective as a well-placed blade.",
      features: [
        {
          level: 3,
          name: "Spellcasting",
          description:
            "You gain the ability to cast spells from the wizard spell list. You know three 1st-level wizard spells, at least two of which must come from the enchantment or illusion schools. Intelligence is your spellcasting ability for these spells. You gain spell slots as normal for a one-third caster: 2 first-level slots at level 3, increasing as you gain levels.",
        },
        {
          level: 3,
          name: "Mage Hand Legerdemain",
          description:
            "When you cast Mage Hand, you can make the hand invisible. You can use the hand to perform the following tasks: stow or retrieve objects in a container, use thieves' tools to pick locks and disarm traps at range, or perform other fine manipulation tasks within 30 feet.",
        },
        {
          level: 7,
          name: "Magical Ambush",
          description:
            "If you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn.",
        },
        {
          level: 13,
          name: "Versatile Trickster",
          description:
            "You gain the ability to distract targets with your Mage Hand. As a bonus action on your turn, you can designate a creature within 5 feet of the spectral hand created by the spell. Doing so gives you advantage on attack rolls against that creature until the end of the current turn.",
        },
        {
          level: 17,
          name: "Spell Thief",
          description:
            "You gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster. Immediately after a creature casts a spell that targets you or includes you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast. You know the spell for the next 8 hours. The creature can't cast that spell until the 8 hours have passed.",
        },
      ],
    },
    {
      slug: "scout",
      name: "Scout",
      description:
        "Scouts are wilderness operators who combine the rogue's precision with a survivalist's knowledge of terrain and tracking. Where thieves work in cities and assassins in shadows, scouts excel in the open wild — ranging ahead of allies and picking apart threats before they close the distance.",
      features: [
        {
          level: 3,
          name: "Skirmisher",
          description:
            "You are difficult to pin down in a fight. When a creature ends its turn adjacent to you, you can use your reaction to move up to half your speed. This movement does not provoke opportunity attacks.",
        },
        {
          level: 3,
          name: "Natural Explorer",
          description:
            "You are difficult to track except in open terrain. You can move stealthily at a normal pace, and you gain advantage on Wisdom (Survival) checks to track creatures and on Intelligence checks to recall information about terrain, plants, animals, and weather in wilderness environments.",
        },
        {
          level: 7,
          name: "Superior Mobility",
          description:
            "Your walking speed increases by 10 feet. If you also have a climbing or swimming speed, these increase by 10 feet as well.",
        },
        {
          level: 13,
          name: "Ambush Master",
          description:
            "You excel at leading ambushes and acting first in a fight. You have advantage on initiative rolls. In addition, the first creature you hit during the first round of a combat becomes easier for you and others to strike. Attack rolls against that target have advantage until the start of your next turn.",
        },
        {
          level: 17,
          name: "Sudden Strike",
          description:
            "You can strike with deadly speed. If you take the Attack action on your turn, you can make one additional attack as a bonus action. This attack can benefit from your Sneak Attack even if you have already used it this turn, but you can't use your Sneak Attack against the same target twice in a single turn.",
        },
      ],
    },
  ],
};
