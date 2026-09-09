import type { CharacterClass } from "@/types/character-class";

export const paladin: CharacterClass = {
  slug: "paladin",
  name: "Paladin",
  description:
    "A paladin's power is not granted — it is sworn. Through an oath that binds body, soul, and will to a sacred cause, paladins channel divine energy into every strike and every word. They are armor-clad champions who project an aura of righteousness that bolsters allies and terrifies enemies, blending healing magic with devastating holy retribution.",
  hitDie: "d10",
  savingThrow: "Will",
  armorProficiency: "heavy",
  weaponProficiency: "martial",
  shieldProficiency: true,
  perception: "1",
  levels: [
    {
      level: 1,
      features: [
        { level: 1, name: "Sacred Oath Feature", description: "You swear your oath and gain a feature from your chosen Sacred Oath." },
        {
          level: 1,
          name: "Divine Sense",
          description:
            "As an action, you can open your awareness to detect celestials, fiends, and undead. Until the end of your next turn, you know the location of any such creature within 60 feet that isn't behind total cover, as well as the location of any place or object that has been consecrated or desecrated. You can use this feature a number of times equal to 1 + your Charisma modifier per long rest.",
        },
        {
          level: 1,
          name: "Lay on Hands",
          description:
            "You have a pool of healing power that replenishes on a long rest, with points equal to your paladin level × 5. As an action, you can touch a creature to restore hit points from the pool, or spend 5 points to cure one disease or neutralize one poison affecting it.",
        },
      ],
    },
    {
      level: 2,
      features: [
        {
          level: 2,
          name: "Fighting Style",
          description:
            "You adopt a style of fighting as your specialty. Choose one: Defense (+1 AC while wearing armor), Dueling (+2 damage with a one-handed weapon), Great Weapon Fighting (reroll 1s and 2s on two-handed weapon damage), or Protection (impose disadvantage on an attack against an adjacent ally as a reaction).",
        },
        {
          level: 2,
          name: "Divine Smite",
          description:
            "When you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage in addition to the weapon's damage: 2d8 for a 1st-level slot, plus 1d8 for each slot level above 1st (maximum 5d8). The damage increases by 1d8 against undead and fiends.",
        },
        {
          level: 2,
          name: "Spellcasting",
          description:
            "You draw on divine magic to cast paladin spells, using Charisma as your spellcasting ability. You prepare a number of spells each day and cast them using the half-caster spell slots shown on the class progression table.",
        },
      ],
    },
    {
      level: 3,
      features: [
        {
          level: 3,
          name: "Divine Health",
          description:
            "The divine magic flowing through you makes you immune to disease.",
        },
        {
          level: 3,
          name: "Channel Divinity",
          description:
            "You gain a Channel Divinity option determined by your Sacred Oath, plus a universal option: as an action, you can brandish your holy symbol and speak a prayer, forcing each fiend or undead within 30 feet that can see or hear you to make a Wisdom saving throw (DC = 8 + your proficiency bonus + your Charisma modifier) or be turned for 1 minute. You can use Channel Divinity once per short or long rest.",
        },
      ],
    },
    {
      level: 4,
      features: [
        {
          level: 4,
          name: "Oathbound Resolve",
          description:
            "Your conviction steadies you. You add your Charisma modifier (minimum +1) to any saving throw you make while you have at least 1 hit point and are not incapacitated.",
        },
      ],
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
        { level: 5, name: "Sacred Oath Feature", description: "You gain a feature from your chosen Sacred Oath." },
      ],
    },
    {
      level: 6,
      features: [
        {
          level: 6,
          name: "Aura of Protection",
          description:
            "Whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the save equal to your Charisma modifier (minimum +1). You must be conscious to grant this bonus. The aura's radius increases to 30 feet at level 18.",
        },
      ],
    },
    {
      level: 7,
      features: [
        {
          level: 7,
          name: "Radiant Strikes",
          description:
            "Your weapon strikes carry a spark of the divine. Once per turn when you hit with a melee weapon attack, you deal an additional 1d8 radiant damage.",
        },
      ],
    },
    {
      level: 8,
      features: [
        {
          level: 8,
          name: "Aura of Courage",
          description:
            "You and friendly creatures within 10 feet of you can't be frightened while you are conscious. The radius increases to 30 feet at level 18.",
        },
      ],
    },
    {
      level: 9,
      features: [
        { level: 9, name: "Sacred Oath Feature", description: "You gain a feature from your chosen Sacred Oath." },
      ],
    },
    {
      level: 10,
      features: [
        {
          level: 10,
          name: "Cleansing Touch",
          description:
            "As an action, you can end one spell on yourself or on one willing creature you touch. You can use this feature a number of times equal to your Charisma modifier (minimum once) per long rest.",
        },
      ],
    },
    {
      level: 11,
      features: [
        {
          level: 11,
          name: "Improved Divine Smite",
          description:
            "You are so suffused with divine might that all your melee weapon hits deal an extra 1d8 radiant damage, and this stacks with the radiant damage of Radiant Strikes.",
        },
        { level: 11, name: "Sacred Oath Feature", description: "You gain a feature from your chosen Sacred Oath." },
      ],
    },
    {
      level: 12,
      features: [
        {
          level: 12,
          name: "Unyielding Guardian",
          description:
            "When a creature within your Aura of Protection is reduced to 0 hit points but not killed outright, you can use your reaction to grant it temporary hit points equal to your paladin level, keeping it conscious. Once used, you must finish a long rest to use it again.",
        },
      ],
    },
    {
      level: 13,
      features: [
        {
          level: 13,
          name: "Radiant Bulwark",
          description:
            "When you use your reaction to Protect an ally with your Fighting Style or a similar effect, you can also reduce the triggering attack's damage by an amount equal to your Charisma modifier.",
        },
      ],
    },
    {
      level: 14,
      features: [
        {
          level: 14,
          name: "Restoring Touch",
          description:
            "When you use Lay on Hands, you can also end one of the following conditions on the target for no additional cost: blinded, deafened, paralyzed, or stunned.",
        },
      ],
    },
    {
      level: 15,
      features: [
        { level: 15, name: "Sacred Oath Feature", description: "You gain a feature from your chosen Sacred Oath." },
      ],
    },
    {
      level: 16,
      features: [
        {
          level: 16,
          name: "Aura of Devotion",
          description:
            "You and friendly creatures within your Aura of Protection can't be charmed while you are conscious.",
        },
      ],
    },
    {
      level: 17,
      features: [
        {
          level: 17,
          name: "Holy Reckoning",
          description:
            "Once per turn when you hit a creature with a melee weapon attack, you can expend a use of Channel Divinity to force it to make a Constitution saving throw (DC = 8 + your proficiency bonus + your Charisma modifier). On a failure, the target takes an additional 4d8 radiant damage and is blinded until the end of its next turn; on a success, it takes half as much and is not blinded.",
        },
      ],
    },
    {
      level: 18,
      features: [
        {
          level: 18,
          name: "Expanded Auras",
          description:
            "The range of your Aura of Protection, Aura of Courage, and Aura of Devotion increases to 30 feet.",
        },
      ],
    },
    {
      level: 19,
      features: [
        { level: 19, name: "Sacred Oath Feature", description: "You gain a feature from your chosen Sacred Oath." },
      ],
    },
    {
      level: 20,
      features: [
        {
          level: 20,
          name: "Avatar of the Oath",
          description:
            "As an action, you can transform into a radiant embodiment of your oath for 1 minute. For the duration, you emit bright light in a 30-foot radius, your melee weapon attacks deal an extra 2d8 radiant damage, allies within your auras gain resistance to necrotic and radiant damage, and you can cast paladin spells of 4th level or lower without expending spell slots. Once you use this feature, you must finish a long rest before using it again.",
        },
      ],
    },
  ],
  choiceLevel: 1,
  subclasses: [
    {
      slug: "oath-of-devotion",
      name: "Oath of Devotion",
      description:
        "Devotion paladins embody the classic knightly ideal: honor, courage, compassion, and unwavering faith. They are guardians first and warriors second, and their divine light burns most fiercely against corruption and undead.",
      features: [
        {
          level: 1,
          name: "Sacred Weapon",
          description:
            "As a Channel Divinity option, you can imbue one weapon you hold with positive energy for 1 minute. You add your Charisma modifier to attack rolls made with it (minimum +1), it emits bright light in a 20-foot radius, and its damage counts as magical.",
        },
        {
          level: 5,
          name: "Aura of Devotion's Light",
          description:
            "Undead and fiends within 10 feet of you have disadvantage on attack rolls against you and any creature in your Aura of Protection.",
        },
        {
          level: 9,
          name: "Purity of Spirit",
          description:
            "You are always under the effect of a protection from evil and good effect, preventing aberrations, celestials, elementals, fey, fiends, and undead from charming, frightening, or possessing you.",
        },
        {
          level: 11,
          name: "Consecrated Smite",
          description:
            "When you use Divine Smite, the radiant damage ignores resistance, and the target sheds dim light for 1 minute, unable to benefit from being invisible.",
        },
        {
          level: 15,
          name: "Unyielding Faith",
          description:
            "You have advantage on saving throws against being charmed or frightened, and once per long rest you can automatically succeed on one such save you would otherwise fail.",
        },
        {
          level: 19,
          name: "Holy Nimbus",
          description:
            "As an action, you emanate an aura of sunlight in a 30-foot radius for 1 minute. Each enemy that starts its turn in the aura takes 10 radiant damage, and you have advantage on saving throws against spells cast by fiends and undead. Once used, you must finish a long rest to use it again.",
        },
      ]
    },
    {
      slug: "oath-of-the-ancients",
      name: "Oath of the Ancients",
      description:
        "Ancients paladins swear to preserve the light of life and joy against the encroaching darkness of cruelty and nihilism. As ancient as the first forests, their power is nature's own — less holy fire and more the patient, inexorable growth of roots through stone.",
      features: [
        {
          level: 1,
          name: "Nature's Wrath",
          description:
            "As a Channel Divinity option, you can cause spectral vines to grasp a creature you can see within 15 feet. It must succeed on a Strength or Dexterity saving throw (its choice) against your spell save DC or be restrained. It repeats the save at the end of each of its turns, ending the effect on a success.",
        },
        {
          level: 5,
          name: "Aura of Warding",
          description:
            "Ancient magic lies so heavily upon you that you and friendly creatures within 10 feet of you have resistance to damage from spells.",
        },
        {
          level: 9,
          name: "Undying Sentinel",
          description:
            "When you are reduced to 0 hit points and not killed outright, you can choose to drop to 1 hit point instead. Additionally, you show no signs of aging and can't be aged magically. Once you save yourself this way, you must finish a long rest to do so again.",
        },
        {
          level: 11,
          name: "Verdant Smite",
          description:
            "When you use Divine Smite, you can deal poison damage instead of radiant, and the target's speed is halved until the end of its next turn as roots snare its footing.",
        },
        {
          level: 15,
          name: "Elder Champion",
          description:
            "As an action, you undergo a nature transformation for 1 minute: you regain 10 hit points at the start of each of your turns, you can cast paladin spells with a casting time of 1 action as a bonus action, and enemies within 10 feet have disadvantage on saving throws against your spells and Channel Divinity. Once used, you must finish a long rest to use it again.",
        },
        {
          level: 19,
          name: "Timeless Guardian",
          description:
            "Your bond with the ancient world is complete. You gain resistance to necrotic damage, allies within your auras have advantage on death saving throws, and once per long rest you can end all charmed, frightened, and poisoned conditions on creatures within your Aura of Protection as a bonus action.",
        },
      ]
    },
    {
      slug: "oath-of-vengeance",
      name: "Oath of Vengeance",
      description:
        "Vengeance paladins are hunters of the wicked. They set aside the comfort of forgiveness to pursue a singular purpose: making those who commit the gravest evils answer for them. Cold, relentless, and absolutely certain of their cause, they are terrifying to oppose.",
      features: [
        {
          level: 1,
          name: "Vow of Enmity",
          description:
            "As a Channel Divinity option, you can use a bonus action to utter a vow of enmity against a creature you can see within 10 feet. You gain advantage on attack rolls against that creature for 1 minute or until it drops to 0 hit points or falls unconscious.",
        },
        {
          level: 5,
          name: "Relentless Avenger",
          description:
            "When you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack and as part of the same reaction. This movement doesn't provoke opportunity attacks.",
        },
        {
          level: 9,
          name: "Soul of Vengeance",
          description:
            "When a creature under your Vow of Enmity makes an attack, you can use your reaction to make a melee weapon attack against it if it is within range.",
        },
        {
          level: 11,
          name: "Vengeful Smite",
          description:
            "When you use Divine Smite against a creature under your Vow of Enmity, roll one additional damage die, and you can't be forced to move away from that creature against your will until your next turn.",
        },
        {
          level: 15,
          name: "Unrelenting Hunter",
          description:
            "Your quarry cannot escape. You always know the direction to any creature currently under your Vow of Enmity while it is on the same plane, and it can't become hidden from you or benefit from being invisible against your attacks.",
        },
        {
          level: 19,
          name: "Avenging Angel",
          description:
            "As an action, you can transform for 1 hour, sprouting spectral wings that grant a 60-foot flying speed. Enemies within 30 feet when you transform, and any that start their turn there, must succeed on a Wisdom saving throw against your spell save DC or be frightened of you for 1 minute. You have advantage on attacks against frightened creatures. Once used, you must finish a long rest to use it again.",
        },
      ]
    },
    {
      slug: "oathbreaker",
      name: "Oathbreaker",
      description:
        "An Oathbreaker has shattered their sacred vow, turning their divine power to dark ends. Their aura now corrodes rather than protects, and their smites carry the chill of necrotic energy. Whether fallen through corruption or deliberate choice, Oathbreakers are agents of shadow who weaponize the very power that once made them holy.",
      features: [
        {
          level: 1,
          name: "Control Undead",
          description:
            "As a Channel Divinity option, you target one undead creature you can see within 30 feet. It must succeed on a Wisdom saving throw against your spell save DC or be compelled to obey your commands for 24 hours or until you use this feature again. A creature with an Intelligence of 8 or higher repeats the save each hour.",
        },
        {
          level: 5,
          name: "Aura of Hate",
          description:
            "You, and any fiends and undead within 10 feet of you, gain a bonus to melee weapon damage rolls equal to your Charisma modifier (minimum +1).",
        },
        {
          level: 9,
          name: "Supernatural Resistance",
          description:
            "You gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.",
        },
        {
          level: 11,
          name: "Dreadful Smite",
          description:
            "When you use Divine Smite, you can deal necrotic damage instead of radiant. When you do, the target must succeed on a Wisdom saving throw or be frightened of you until the end of its next turn.",
        },
        {
          level: 15,
          name: "Soul Harvest",
          description:
            "Whenever a creature within 30 feet of you dies, you regain hit points equal to your Charisma modifier + your paladin level, up to once per turn.",
        },
        {
          level: 19,
          name: "Dread Lord",
          description:
            "As a bonus action, you surround yourself with an aura of gloom in a 30-foot radius for 1 minute. The area is dim light, enemies within it take 4d10 necrotic damage the first time they enter it or start their turn there, and as a bonus action you can conjure spectral shades to give one enemy in the aura disadvantage on a saving throw. Once used, you must finish a long rest to use it again.",
        },
      ]
    }
  ],
  expertise: {
    exploration: [
      "When detecting the presence of evil, corruption, or the undead",
      "When enduring hardship in service of a sworn cause",
    ],
    social: [
      "When invoking divine authority",
      "When inspiring others to live up to their ideals"
    ]
  },
  spellcasting: "half",
};
