import type { CharacterClass } from "@/types/character-class";

export const rogue: CharacterClass = {
  slug: "rogue",
  name: "Rogue",
  description:
    "Rogues are cunning operatives who rely on speed, guile, and precision over brute force. They excel at exploiting moments of vulnerability, vanishing into shadows, and turning a single opening into a decisive strike. Every rogue brings a particular trade to the table — thief, assassin, spy, or something stranger — but all share a talent for doing the unexpected.",
  hitDie: "d8",
  savingThrow: "Reflex",
  armorProficiency: "light",
  weaponProficiency: "simple",
  shieldProficiency: false,
  perception: "1.5",
  spellcasting: "none",
  choiceLevel: 2,
  expertise: {
    exploration: [
      "When circumventing physical security measures",
      "When XxXxX",
    ],
    social: [
      "When gathering secret information",
      "When reading someone's hidden intentions",
    ]
  },
  levels: [
    {
      level: 1,
      features: [
        {
          level: 1,
          name: "Sneak Attack",
          description:
            "Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll, or if another enemy of the target is within 5 feet of it and you don't have disadvantage. The attack must use a finesse or ranged weapon. The extra damage increases by 1d6 at every odd rogue level (to 10d6 at level 19).",
        },
        {
          level: 1,
          name: "Expertise",
          description:
            "Choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make using either of the chosen proficiencies. You choose two more at level 6.",
        },
      ],
    },
    {
      level: 2,
      features: [
        { level: 2, name: "Roguish Archetype Feature", description: "You gain a feature from your chosen Roguish Archetype." },
        {
          level: 2,
          name: "Cunning Action",
          description:
            "Your quick thinking and agility let you take a bonus action on each of your turns to Dash, Disengage, or Hide.",
        },
      ],
    },
    {
      level: 3,
      features: [
        {
          level: 3,
          name: "Steady Aim",
          description:
            "As a bonus action, you can give yourself advantage on your next attack roll on the current turn. You can use this only if you haven't moved during this turn, and after you use it, your speed is 0 until the end of the current turn.",
        },
      ],
    },
    {
      level: 4,
      features: [
        {
          level: 4,
          name: "Uncanny Dodge",
          description:
            "When an attacker you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.",
        },
      ],
    },
    {
      level: 5,
      features: [
        {
          level: 5,
          name: "Evasion",
          description:
            "When you are subjected to an effect that allows a Dexterity saving throw to take only half damage, you instead take no damage on a success and only half damage on a failure.",
        },
      ],
    },
    {
      level: 6,
      features: [
        { level: 6, name: "Roguish Archetype Feature", description: "You gain a feature from your chosen Roguish Archetype." },
        {
          level: 6,
          name: "Expertise (2)",
          description:
            "Choose two more of your skill proficiencies to gain the doubled proficiency bonus of Expertise.",
        },
      ],
    },
    {
      level: 7,
      features: [
        {
          level: 7,
          name: "Cunning Strike",
          description:
            "When you deal Sneak Attack damage, you can forgo one or more of your Sneak Attack dice to add a rider effect, each costing a set number of dice: Poison (1d6, target must save against being poisoned), Trip (1d6, Large or smaller target must save or fall prone), or Withdraw (1d6, move up to half your speed without provoking opportunity attacks). The save DC equals 8 + your Dexterity modifier + your proficiency bonus.",
        },
      ],
    },
    {
      level: 8,
      features: [
        {
          level: 8,
          name: "Reliable Talent",
          description:
            "Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.",
        },
      ],
    },
    {
      level: 9,
      features: [
        {
          level: 9,
          name: "Slippery Target",
          description:
            "Opportunity attacks against you are made with disadvantage, and you can move through the space of any creature that is larger than you as though it were difficult terrain.",
        },
      ],
    },
    {
      level: 10,
      features: [
        { level: 10, name: "Roguish Archetype Feature", description: "You gain a feature from your chosen Roguish Archetype." },
      ],
    },
    {
      level: 11,
      features: [
        {
          level: 11,
          name: "Deadly Opening",
          description:
            "On the first turn of each combat, if you hit a creature that hasn't yet acted, your Sneak Attack against it deals its damage dice as maximum values rather than being rolled.",
        },
      ],
    },
    {
      level: 12,
      features: [
        {
          level: 12,
          name: "Blindsense",
          description:
            "If you can hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.",
        },
      ],
    },
    {
      level: 13,
      features: [
        {
          level: 13,
          name: "Improved Cunning Strike",
          description:
            "You can apply up to two Cunning Strike effects to a single Sneak Attack instead of one, forgoing the combined dice cost of both.",
        },
      ],
    },
    {
      level: 14,
      features: [
        { level: 14, name: "Roguish Archetype Feature", description: "You gain a feature from your chosen Roguish Archetype." },
        {
          level: 14,
          name: "Slippery Mind",
          description:
            "You gain proficiency in Wisdom and Charisma saving throws.",
        },
      ],
    },
    {
      level: 15,
      features: [
        {
          level: 15,
          name: "Elusive",
          description:
            "No attack roll has advantage against you while you aren't incapacitated.",
        },
      ],
    },
    {
      level: 16,
      features: [
        {
          level: 16,
          name: "Sixth Sense",
          description:
            "You have advantage on initiative rolls, and you can't be surprised while you are conscious. If you would be surprised, you instead act normally on your first turn.",
        },
      ],
    },
    {
      level: 17,
      features: [
        {
          level: 17,
          name: "Stroke of Luck",
          description:
            "If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20. Once you use this feature, you must finish a short or long rest before you can use it again.",
        },
      ],
    },
    {
      level: 18,
      features: [
        { level: 18, name: "Roguish Archetype Feature", description: "You gain a feature from your chosen Roguish Archetype." },
      ],
    },
    {
      level: 19,
      features: [
        {
          level: 19,
          name: "Killing Spree",
          description:
            "Whenever you reduce a creature to 0 hit points with an attack on your turn, you can immediately make one additional attack as part of the same action, and that attack can benefit from Sneak Attack even if you have already used it this turn (against a different target).",
        },
      ],
    },
    {
      level: 20,
      features: [
        {
          level: 20,
          name: "Perfect Assassin",
          description:
            "Your precision reaches lethal perfection. Your Sneak Attack no longer requires advantage or a nearby ally as long as you can see the target clearly, and once per turn a Sneak Attack that hits a creature that hasn't acted this combat forces a Constitution saving throw (DC = 8 + your Dexterity modifier + your proficiency bonus) or the target takes double Sneak Attack damage.",
        },
      ],
    },
  ],
  subclasses: [
    {
      slug: "thief",
      name: "Thief",
      description:
        "Thieves are opportunists who have honed their craft to an art form — breaking in, breaking out, and walking away with more than they came with. Their training gives them unmatched speed and adaptability in almost any situation.",
      features: [
        {
          level: 2,
          name: "Fast Hands",
          description:
            "You can use your Cunning Action bonus action to make a Sleight of Hand check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action.",
        },
        {
          level: 6,
          name: "Second-Story Work",
          description:
            "Climbing no longer costs you extra movement, and when you make a running jump the distance you cover increases by a number of feet equal to your Dexterity modifier.",
        },
        {
          level: 10,
          name: "Supreme Sneak",
          description:
            "You have advantage on Stealth checks if you move no more than half your speed on the same turn, and you can take the Hide action even when only lightly obscured.",
        },
        {
          level: 14,
          name: "Use Magic Device",
          description:
            "You ignore all class, species, and level requirements on the use of magic items. In addition, when you activate a magic item that requires a saving throw, you can roll a d6 and add it to the save DC once per short rest.",
        },
        {
          level: 18,
          name: "Thief's Reflexes",
          description:
            "You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised.",
        },
      ]
    },
    {
      slug: "assassin",
      name: "Assassin",
      description:
        "Assassins specialize in ending threats before combat truly begins. Their mastery of disguise and poison lets them operate in plain sight, and when the moment comes, a single precise blow can determine the entire outcome of an encounter.",
      features: [
        {
          level: 2,
          name: "Assassinate",
          description:
            "You have advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit. You also gain proficiency with the disguise kit and the poisoner's kit.",
        },
        {
          level: 6,
          name: "Infiltration Expertise",
          description:
            "You can spend seven days and 25 gp to establish a false identity complete with documentation, history, and affiliations. You can't establish an identity that belongs to someone else, and while maintaining it you have advantage on checks to avoid being recognized as an impostor.",
        },
        {
          level: 10,
          name: "Impostor",
          description:
            "After studying a creature for at least 3 hours, you can unerringly mimic its speech, handwriting, and mannerisms. A creature that hears or reads your mimicry must succeed on an Insight check contested by your Deception check to detect the ruse.",
        },
        {
          level: 14,
          name: "Death Strike",
          description:
            "When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC = 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature.",
        },
        {
          level: 18,
          name: "Ghost",
          description:
            "You have become nearly impossible to detect or pin down. You can attempt to hide even when observed as long as you are within 5 feet of anything larger than you, and creatures have disadvantage on Perception checks to notice you while you remain motionless.",
        },
      ]
    },
    {
      slug: "arcane-trickster",
      name: "Arcane Trickster",
      description:
        "Arcane Tricksters blend roguish stealth with arcane magic, using illusions and enchantments to bewilder foes and escape unscathed. They are manipulators as much as infiltrators, and a well-timed spell can be just as effective as a well-placed blade.",
      features: [
        {
          level: 2,
          name: "Arcane Spellcasting",
          description:
            "You gain the ability to cast wizard spells, drawing primarily from the enchantment and illusion schools. Intelligence is your spellcasting ability. You know a small number of spells and gain limited spell slots that scale as a one-third caster (2 first-level slots at this level, expanding to third-level slots by level 13).",
        },
        {
          level: 2,
          name: "Mage Hand Legerdemain",
          description:
            "When you cast Mage Hand, you can make the spectral hand invisible, and you can use it to stow or retrieve objects, pick locks and disarm traps with thieves' tools at range, or perform other fine manipulation, all as a bonus action.",
        },
        {
          level: 6,
          name: "Magical Ambush",
          description:
            "If you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn.",
        },
        {
          level: 10,
          name: "Versatile Trickster",
          description:
            "As a bonus action, you can designate a creature within 5 feet of your Mage Hand, gaining advantage on attack rolls against that creature until the end of the turn.",
        },
        {
          level: 14,
          name: "Spell Thief",
          description:
            "Immediately after a creature casts a spell that targets you or includes you in its area, you can use your reaction to force it to make a saving throw with its spellcasting ability. On a failure, you negate the spell's effect against you and steal knowledge of it if it is of a level you can cast, knowing it for 8 hours while the creature loses access to it for that time. Once used, you must finish a long rest to use it again.",
        },
        {
          level: 18,
          name: "Arcane Veil",
          description:
            "As a bonus action, you can wrap yourself in illusory magic, becoming heavily obscured to creatures more than 10 feet away until the start of your next turn. While veiled this way, your Sneak Attack requires no advantage or nearby ally.",
        },
      ]
    },
    {
      slug: "scout",
      name: "Scout",
      description:
        "Scouts are wilderness operators who combine the rogue's precision with a survivalist's knowledge of terrain and tracking. Where thieves work in cities and assassins in shadows, scouts excel in the open wild — ranging ahead of allies and picking apart threats before they close the distance.",
      features: [
        {
          level: 2,
          name: "Skirmisher",
          description:
            "When a creature ends its turn within 5 feet of you, you can use your reaction to move up to half your speed without provoking opportunity attacks.",
        },
        {
          level: 6,
          name: "Natural Explorer",
          description:
            "You gain expertise in Nature and Survival (doubling your proficiency bonus for those checks), you can move stealthily at a normal pace in the wilderness, and you have advantage on checks to track creatures.",
        },
        {
          level: 10,
          name: "Superior Mobility",
          description:
            "Your walking speed increases by 10 feet. If you have a climbing or swimming speed, it increases by the same amount.",
        },
        {
          level: 14,
          name: "Ambush Master",
          description:
            "You have advantage on initiative rolls. The first creature you hit during the first round of combat becomes easier to strike — attack rolls against it have advantage until the start of your next turn.",
        },
        {
          level: 18,
          name: "Sudden Strike",
          description:
            "If you take the Attack action, you can make one additional attack as a bonus action. This attack can benefit from Sneak Attack even if you have already used it this turn, provided it targets a different creature.",
        },
      ]
    }
  ]
};
