import type { CharacterClass } from "@/types/character-class";

export const cleric: CharacterClass = {
  slug: "cleric",
  name: "Cleric",
  description:
    "Clerics are the chosen of the gods, channeling divine power through unwavering faith. More than healers, they are intermediaries between the mortal world and the divine — capable of calling down miraculous destruction or miraculous salvation depending on whose name they invoke.",
  hitDie: "d8",
  savingThrow: "Will",
  armorProficiency: "heavy",
  weaponProficiency: "simple",
  shieldProficiency: true,
  perception: "1",
  levels: [
    { level: 1, features: ["Spellcasting", "Divine Domain"] },
    { level: 2, features: ["Channel Divinity (x1)", "Divine Domain Feature"] },
    { level: 3, features: [] },
    { level: 4, features: ["Feat"] },
    { level: 5, features: ["Destroy Undead (CR 1/2)", "Divine Smite"] },
    { level: 6, features: ["Channel Divinity (x2)", "Divine Domain Feature"] },
    { level: 7, features: [] },
    { level: 8, features: ["Feat", "Destroy Undead (CR 1)"] },
    { level: 9, features: [] },
    { level: 10, features: ["Divine Intervention"] },
    { level: 11, features: ["Destroy Undead (CR 2)"] },
    { level: 12, features: ["Feat"] },
    { level: 13, features: [] },
    { level: 14, features: ["Destroy Undead (CR 3)", "Divine Domain Feature"] },
    { level: 15, features: [] },
    { level: 16, features: ["Feat"] },
    { level: 17, features: ["Destroy Undead (CR 4)", "Channel Divinity (x3)"] },
    { level: 18, features: ["Divine Domain Feature"] },
    { level: 19, features: ["Avatar of Faith"] },
    { level: 20, features: ["Divine Intervention Improvement", "Feat"] },
  ],
  choiceLevel: 1,
  subclasses: [
    {
      slug: "life-domain",
      name: "Life Domain",
      description:
        "Life clerics draw on the most positive force in existence, nurturing growth, healing the wounded, and standing as a bulwark against death itself. They are the indispensable anchor of any group pushing into mortal danger.",
      features: [
        {
          level: 1,
          name: "Disciple of Life",
          description:
            "When you cast a spell of 1st level or higher that restores hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level.",
        },
        {
          level: 5,
          name: "Preserve Life",
          description:
            "As an action, you present your holy symbol and expend a use of Channel Divinity to evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet; you distribute those hit points among them, up to half of each creature's maximum hit points. You cannot use this feature on undead or constructs.",
        },
        {
          level: 9,
          name: "Blessed Healer",
          description:
            "When you cast a spell of 1st level or higher that restores hit points to a creature other than yourself, you regain hit points equal to 2 + the spell's level.",
        },
        {
          level: 11,
          name: "Divine Strike",
          description:
            "Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage. At level 14, this increases to 2d8.",
        },
        {
          level: 15,
          name: "Supreme Healing",
          description:
            "When you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die.",
        },
        {
          level: 19,
          name: "Life Ward",
          description:
            "When a creature within 30 feet of you is reduced to 0 hit points, you can use your reaction to expend a spell slot of 1st level or higher. The creature is instead reduced to 1 hit point, and regains additional hit points equal to five times the level of the spell slot expended. You can use this feature once per short or long rest.",
        },
      ],
    },
    {
      slug: "war-domain",
      name: "War Domain",
      description:
        "War clerics serve gods of conflict and strategy, marrying divine power with martial excellence. They are equally at home calling down divine wrath and wading into the front line, and they make everyone around them fight harder.",
      features: [
        {
          level: 1,
          name: "War Priest",
          description:
            "Your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action a number of times equal to your Wisdom modifier (minimum 1) per long rest.",
        },
        {
          level: 1,
          name: "Guided Strike",
          description:
            "When you or a creature within 30 feet makes an attack roll, you can expend a use of Channel Divinity to grant a +10 bonus to the roll. You make this choice after you see the roll but before the DM says whether the attack hits or misses.",
        },
        {
          level: 5,
          name: "War God's Blessing",
          description:
            "When a creature within 30 feet makes an attack roll, you can use your reaction and expend a use of Channel Divinity to grant that creature a +10 bonus to the roll.",
        },
        {
          level: 9,
          name: "Divine Strike",
          description:
            "Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon. At level 14, this increases to 2d8.",
        },
        {
          level: 11,
          name: "Avatar of Battle",
          description:
            "You gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.",
        },
        {
          level: 19,
          name: "Indomitable Wrath",
          description:
            "When you use your action to cast a cleric spell, you can make two weapon attacks as a bonus action instead of one. Additionally, your War Priest attacks deal an extra 1d6 damage.",
        },
      ],
    },
    {
      slug: "light-domain",
      name: "Light Domain",
      description:
        "Light clerics wield radiance as both shield and weapon, driving back darkness and burning evil with solar intensity. They are aggressive spellcasters who control the battlefield with blinding brilliance.",
      features: [
        {
          level: 1,
          name: "Warding Flare",
          description:
            "When attacked by a creature within 30 feet that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before it. You can use this feature a number of times equal to your Wisdom modifier (minimum once) per long rest.",
        },
        {
          level: 1,
          name: "Radiance of the Dawn",
          description:
            "As an action, you present your holy symbol and expend a use of Channel Divinity to dispel magical darkness within 30 feet. Each hostile creature within 30 feet must make a Constitution saving throw, taking radiant damage equal to 2d10 + your cleric level on a failed save, or half as much on a success. Undead and oozes have disadvantage on this saving throw.",
        },
        {
          level: 5,
          name: "Improved Flare",
          description:
            "When a creature you can see attacks one of your allies within 30 feet, you can use your reaction to trigger Warding Flare, imposing disadvantage on the attack roll.",
        },
        {
          level: 9,
          name: "Potent Spellcasting",
          description:
            "You add your Wisdom modifier to the damage you deal with any cleric cantrip.",
        },
        {
          level: 11,
          name: "Searing Vengeance",
          description:
            "When you would need to make a death saving throw at the start of your turn, you can instead burst with radiant power. You regain hit points equal to half your hit point maximum, rise to your feet, and each hostile creature within 30 feet takes radiant damage equal to 2d8 + your Wisdom modifier and is blinded until the end of the current turn. Once you use this feature, you can't do so again until you finish a long rest.",
        },
        {
          level: 19,
          name: "Corona of Light",
          description:
            "As an action, you activate an aura of sunlight that lasts for 1 minute. For the duration, bright light fills a 60-foot radius around you, and dim light fills an additional 30 feet. Enemies within the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage.",
        },
      ],
    },
    {
      slug: "trickery-domain",
      name: "Trickery Domain",
      description:
        "Trickery clerics serve gods of deception and cunning, using misdirection as a weapon and illusion as armor. They thrive in chaos of their own making, pulling allies out of danger and planting enemies in traps they never saw coming.",
      features: [
        {
          level: 1,
          name: "Blessing of the Trickster",
          description:
            "You can use your action to touch a willing creature (not yourself) to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again.",
        },
        {
          level: 1,
          name: "Invoke Duplicity",
          description:
            "As an action, expend a use of Channel Divinity to create a perfect illusion of yourself that lasts for 1 minute or until you lose concentration. The illusion appears in an unoccupied space within 30 feet. As a bonus action you can move it up to 30 feet. For the duration, you can cast spells as though you were in the illusion's space. You have advantage on attack rolls against creatures within 5 feet of the illusion.",
        },
        {
          level: 5,
          name: "Cloak of Shadows",
          description:
            "As an action, expend a use of Channel Divinity to become invisible until the end of your next turn. Anything you are wearing or carrying is invisible with you.",
        },
        {
          level: 9,
          name: "Potent Spellcasting",
          description:
            "You add your Wisdom modifier to the damage you deal with any cleric cantrip.",
        },
        {
          level: 11,
          name: "Divine Strike",
          description:
            "Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage. At level 14, this increases to 2d8.",
        },
        {
          level: 19,
          name: "Improved Duplicity",
          description:
            "You can create up to four duplicates of yourself using Invoke Duplicity rather than one. As a bonus action, you can move any number of them up to 30 feet each.",
        },
      ],
    },
  ],
  expertise: {
    exploration: [
      "when identifying religious symbols, rituals, or divine phenomena",
    ],
    social: [
      "when acting as a spiritual authority or mediating disputes through faith",
      "when dealing with the faithful, the dying, or the desperate",
    ],
  },
  spellcasting: "full",
};
