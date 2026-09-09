import type { CharacterClass } from "@/types/character-class";

export const cleric: CharacterClass = {
  slug: "cleric",
  name: "Cleric",
  description:
    "Clerics are the vehicles of the gods, channeling divine power through unwavering faith. More than healers, they are intermediaries between the mortal world and the divine — capable of calling down miraculous destruction or miraculous salvation depending on whose name they invoke.",
  hitDie: "d8",
  savingThrow: "Will",
  armorProficiency: "medium",
  weaponProficiency: "simple",
  shieldProficiency: true,
  perception: ".5",
  levels: [
    {
      level: 1,
      features: [
        {
          level: 1,
          name: "Spellcasting",
          description:
            "As a conduit for divine power, you can cast cleric spells using Wisdom as your spellcasting ability. You prepare your spell list from the entire cleric repertoire each day and cast using the full-caster spell slots shown on the class progression table.",
        },
        {
          level: 1,
          name: "Divine Domain Feature",
          description:
            "You choose a divine domain that shapes your calling and gain its first feature, including bonus domain spells that are always prepared and don't count against your prepared limit.",
        },
      ],
    },
    {
      level: 2,
      features: [
        {
          level: 2,
          name: "Channel Divinity",
          description:
            "You gain the ability to channel divine energy directly, fueling magical effects. You start with two options: Turn Undead (as an action, each undead within 30 feet that can see or hear you must succeed on a Wisdom saving throw against your spell save DC or be turned for 1 minute) and a domain-specific effect. You can use Channel Divinity once per short or long rest, increasing to twice at level 6 and three times at level 18.",
        },
        { level: 2, name: "Divine Domain Feature", description: "You gain a feature from your chosen Divine Domain." },
      ],
    },
    {
      level: 3,
      features: [
        {
          level: 3,
          name: "Blessed Strikes",
          description:
            "Divine power infuses your attacks and cantrips. Once per turn, when you hit a creature with a weapon attack or a cantrip, you can deal an extra 1d8 radiant damage to it. This increases to 2d8 at level 14.",
        },
      ],
    },
    {
      level: 4,
      features: [
        {
          level: 4,
          name: "Sanctified Focus",
          description:
            "Your faith steadies your magic. When you cast a cleric spell that restores hit points or removes a condition, you can add your Wisdom modifier to the amount healed, or reduce the spell slot cost by treating the slot as one level higher for the purpose of the effect, once per long rest.",
        },
      ],
    },
    {
      level: 5,
      features: [
        {
          level: 5,
          name: "Destroy Undead",
          description:
            "When an undead of CR 1/2 or lower fails its saving throw against your Turn Undead, it is instantly destroyed. The CR threshold rises as you gain levels, reaching CR 4 by level 17.",
        },
      ],
    },
    {
      level: 6,
      features: [
        { level: 6, name: "Divine Domain Feature", description: "You gain a feature from your chosen Divine Domain." },
      ],
    },
    {
      level: 7,
      features: [
        {
          level: 7,
          name: "Divine Intervention",
          description:
            "As an action, you can call on your deity for aid. Describe the assistance you seek and roll percentile dice; if you roll a number equal to or lower than your cleric level, your deity intervenes with an effect appropriate to the situation. On a success, you can't use this feature again for 7 days; otherwise you can try again after a long rest.",
        },
      ],
    },
    {
      level: 8,
      features: [
        {
          level: 8,
          name: "Empowered Faith",
          description:
            "Your Blessed Strikes radiant damage now applies even on a turn you have already dealt it, up to twice per round, and your healing spells restore the maximum on any die that rolls a 1.",
        },
      ],
    },
    {
      level: 9,
      features: [
        {
          level: 9,
          name: "Warding Prayer",
          description:
            "As a reaction when you or an ally within 30 feet fails a saving throw, you can expend a spell slot to let them reroll it with a bonus equal to the slot's level. You can use this once per short or long rest.",
        },
      ],
    },
    {
      level: 10,
      features: [
        { level: 10, name: "Divine Domain Feature", description: "You gain a feature from your chosen Divine Domain." },
      ],
    },
    {
      level: 11,
      features: [
        {
          level: 11,
          name: "Divine Radiance",
          description:
            "Your holy power surges outward. As an action, you can unleash a 15-foot burst of divine energy centered on yourself; each enemy in the area takes radiant damage equal to 3d8 + your Wisdom modifier (Constitution save for half), and each ally regains hit points equal to your Wisdom modifier. You can use this once per long rest.",
        },
      ],
    },
    {
      level: 12,
      features: [
        {
          level: 12,
          name: "Sacred Endurance",
          description:
            "Your devotion fortifies your body. You gain resistance to necrotic damage, and you can't be reduced below 1 hit point by a single instance of necrotic damage while you are conscious.",
        },
      ],
    },
    {
      level: 13,
      features: [
        {
          level: 13,
          name: "Improved Intervention",
          description:
            "Your bond with your deity strengthens. When you use Divine Intervention, you succeed on any roll of your cleric level or lower, and the cooldown on a success is reduced to 3 days.",
        },
      ],
    },
    {
      level: 14,
      features: [
        { level: 14, name: "Divine Domain Feature", description: "You gain a feature from your chosen Divine Domain." },
      ],
    },
    {
      level: 15,
      features: [
        {
          level: 15,
          name: "Undying Devotion",
          description:
            "When you drop to 0 hit points but are not killed outright, you can choose to drop to 1 hit point instead and radiate a burst of healing that restores hit points equal to your cleric level to each ally within 30 feet. Once used, you must finish a long rest to use it again.",
        },
      ],
    },
    {
      level: 16,
      features: [
        {
          level: 16,
          name: "Greater Blessing",
          description:
            "When you cast a spell of 1st level or higher that targets only one creature, you can also grant that creature temporary hit points equal to the spell's level + your Wisdom modifier.",
        },
      ],
    },
    {
      level: 17,
      features: [
        {
          level: 17,
          name: "Supreme Turning",
          description:
            "Your Destroy Undead threshold rises to CR 4, and creatures turned by your Channel Divinity are also frightened of you for the duration and cannot use reactions.",
        },
      ],
    },
    {
      level: 18,
      features: [
        { level: 18, name: "Divine Domain Feature", description: "You gain a feature from your chosen Divine Domain." },
      ],
    },
    {
      level: 19,
      features: [
        {
          level: 19,
          name: "Herald of the Divine",
          description:
            "You become a living instrument of your deity. As a bonus action, you manifest a divine aura in a 30-foot radius for 1 minute: allies within it add your Wisdom modifier to attack rolls and saving throws, enemies that start their turn within it take radiant damage equal to your cleric level, and you can cast one cleric spell of 5th level or lower per turn as a bonus action. Once used, you must finish a long rest to use it again.",
        },
      ],
    },
    {
      level: 20,
      features: [
        {
          level: 20,
          name: "Divine Conduit",
          description:
            "Your connection to the divine is limitless. You can use Divine Intervention without a roll, guaranteeing success, though doing so requires a long rest before you can use it again. You also gain immunity to being charmed or frightened.",
        },
      ],
    },
  ],
  choiceLevel: 2,
  subclasses: [
    {
      slug: "life-domain",
      name: "Life Domain",
      description:
        "Life clerics draw on the most positive force in existence, nurturing growth, healing the wounded, and standing as a bulwark against death itself. They are the indispensable anchor of any group pushing into mortal danger.",
      features: [
        {
          level: 2,
          name: "Disciple of Life",
          description:
            "Your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, it regains additional hit points equal to 2 + the spell's level.",
        },
        {
          level: 2,
          name: "Preserve Life",
          description:
            "As a Channel Divinity option, you present your holy symbol to restore a total number of hit points equal to five times your cleric level, divided as you choose among any creatures within 30 feet. You can restore a creature to no more than half its hit point maximum this way.",
        },
        {
          level: 6,
          name: "Blessed Healer",
          description:
            "When you cast a spell of 1st level or higher that restores hit points to another creature, you regain hit points equal to 2 + the spell's level.",
        },
        {
          level: 10,
          name: "Radiance of Life",
          description:
            "Whenever you restore hit points to a creature at or below half its maximum, that creature also gains resistance to necrotic damage until the end of its next turn.",
        },
        {
          level: 14,
          name: "Supreme Healing",
          description:
            "When you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die.",
        },
        {
          level: 18,
          name: "Font of Vitality",
          description:
            "As a bonus action, you can grant a creature you touch immunity to necrotic damage and the ability to automatically stabilize at 0 hit points for 1 minute. Once used, you must finish a long rest to use it again.",
        },
      ]
    },
    {
      slug: "war-domain",
      name: "War Domain",
      description:
        "War clerics serve gods of conflict and strategy, marrying divine power with martial excellence. They are equally at home calling down divine wrath and wading into the front line, and they make everyone around them fight harder.",
      features: [
        {
          level: 2,
          name: "War Priest",
          description:
            "You gain proficiency with martial weapons and heavy armor. Additionally, when you take the Attack action, you can make one weapon attack as a bonus action a number of times equal to your Wisdom modifier (minimum once) per long rest.",
        },
        {
          level: 2,
          name: "Guided Strike",
          description:
            "As a Channel Divinity option, you can grant yourself a +10 bonus to one attack roll, deciding to use it after you see the roll but before you know whether it hits.",
        },
        {
          level: 6,
          name: "War God's Blessing",
          description:
            "As a reaction when a creature within 30 feet makes an attack roll, you can expend a use of Channel Divinity to grant it a +10 bonus to the roll.",
        },
        {
          level: 10,
          name: "Divine Strike",
          description:
            "Once per turn when you hit a creature with a weapon attack, you can deal an extra 2d8 damage of a type associated with your deity (typically radiant, fire, or necrotic).",
        },
        {
          level: 14,
          name: "Battle Fury",
          description:
            "While you are below half your hit point maximum, your weapon attacks score a critical hit on a roll of 19 or 20, and you have advantage on Constitution saving throws to maintain concentration.",
        },
        {
          level: 18,
          name: "Avatar of Battle",
          description:
            "You gain resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks, and allies within 10 feet of you add your Wisdom modifier to their weapon damage rolls.",
        },
      ]
    },
    {
      slug: "light-domain",
      name: "Light Domain",
      description:
        "Light clerics wield radiance as both shield and weapon, driving back darkness and burning evil with solar intensity. They are aggressive spellcasters who control the battlefield with blinding brilliance.",
      features: [
        {
          level: 2,
          name: "Warding Flare",
          description:
            "When you are attacked by a creature within 30 feet that you can see, you can use your reaction to impose disadvantage on the attack roll, flaring bright light in the attacker's eyes. You can use this a number of times equal to your Wisdom modifier (minimum once) per long rest.",
        },
        {
          level: 2,
          name: "Radiance of the Dawn",
          description:
            "As a Channel Divinity option, you dispel any magical darkness within 30 feet and deal radiant damage to each hostile creature there equal to 2d10 + your cleric level (Constitution save for half).",
        },
        {
          level: 6,
          name: "Improved Flare",
          description:
            "You can use your Warding Flare when a creature you can see within 30 feet attacks a target other than you, protecting your allies as well as yourself.",
        },
        {
          level: 10,
          name: "Corona of Light",
          description:
            "As an action, you can activate an aura of sunlight lasting 1 minute. You emit bright light in a 60-foot radius, and enemies in that light have disadvantage on saving throws against your spells that deal fire or radiant damage.",
        },
        {
          level: 14,
          name: "Searing Radiance",
          description:
            "When you deal radiant or fire damage with a spell, you can cause the target to shed dim light and be unable to benefit from invisibility until the end of its next turn.",
        },
        {
          level: 18,
          name: "Avatar of the Sun",
          description:
            "Your Corona of Light also deals radiant damage equal to your Wisdom modifier to each enemy that starts its turn within it, and you gain immunity to being blinded and resistance to fire and radiant damage.",
        },
      ]
    },
    {
      slug: "trickery-domain",
      name: "Trickery Domain",
      description:
        "Trickery clerics serve gods of deception and cunning, using misdirection as a weapon and illusion as armor. They thrive in chaos of their own making, pulling allies out of danger and planting enemies in traps they never saw coming.",
      features: [
        {
          level: 2,
          name: "Blessing of the Trickster",
          description:
            "As an action, you can touch a willing creature other than yourself to give it advantage on Stealth checks. This blessing lasts for 1 hour or until you use this feature again.",
        },
        {
          level: 2,
          name: "Invoke Duplicity",
          description:
            "As a Channel Divinity option, you create a perfect illusory double of yourself in an unoccupied space within 30 feet for 1 minute. You can move it as a bonus action, cast spells as though you were in its space, and gain advantage on an attack when both you and the double are within 5 feet of the target.",
        },
        {
          level: 6,
          name: "Cloak of Shadows",
          description:
            "As a Channel Divinity option, you become invisible until the end of your next turn. You become visible if you attack or cast a spell.",
        },
        {
          level: 10,
          name: "Misdirection",
          description:
            "When you are targeted by an attack while a creature within 5 feet of you is granting you cover, you can use your reaction to redirect the attack to that creature instead.",
        },
        {
          level: 14,
          name: "Divine Sabotage",
          description:
            "Once per turn when you hit a creature with a weapon attack or damaging spell, you can deal an extra 2d8 poison damage and impose disadvantage on the target's next saving throw before the end of its next turn.",
        },
        {
          level: 18,
          name: "Improved Duplicity",
          description:
            "When you use Invoke Duplicity, you create up to four duplicates instead of one. As a bonus action you can move any number of them up to 30 feet, and while at least two are within 5 feet of a creature, your allies also gain advantage on attacks against it.",
        },
      ]
    },
  ],
  expertise: {
    exploration: [
      "When discerning the presence of the divine, the profane, or the undead",
      "When interpreting omens, religious texts, or sacred sites",
    ],
    social: [
      "When acting as a spiritual authority or mediating disputes through faith",
      "When offering counsel or comfort to the troubled and the grieving",
    ]
  },
  spellcasting: "full",
};