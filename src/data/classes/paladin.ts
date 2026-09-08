import type { CharacterClass } from "@/types/character-class";

export const paladin: CharacterClass = {
  slug: "paladin",
  name: "Paladin",
  description:
    "A paladin's power is not granted — it is sworn. Through an oath that binds body, soul, and will to a sacred cause, paladins channel divine energy into every strike and every word. They are armor-clad champions who project an aura of righteousness that bolsters allies and terrifies enemies, blending healing magic with devastating holy retribution.",
  hitDie: "d10",
  savingThrow: "Fortitude",
  armorProficiency: "heavy",
  weaponProficiency: "martial",
  shieldProficiency: true,
  perception: "1",
  levels: [
    { level: 1, features: ["Divine Sense", "Lay on Hands"] },
    { level: 2, features: ["Spellcasting", "Divine Smite", "Fighting Style"] },
    { level: 3, features: ["Sacred Oath", "Divine Health"] },
    { level: 4, features: ["Feat"] },
    { level: 5, features: ["Extra Attack"] },
    { level: 6, features: ["Aura of Protection", "Sacred Oath Feature"] },
    { level: 7, features: [] },
    { level: 8, features: ["Feat"] },
    { level: 9, features: [] },
    { level: 10, features: ["Aura of Courage"] },
    { level: 11, features: ["Improved Divine Smite"] },
    { level: 12, features: ["Feat"] },
    { level: 13, features: [] },
    { level: 14, features: ["Cleansing Touch", "Sacred Oath Feature"] },
    { level: 15, features: [] },
    { level: 16, features: ["Feat"] },
    { level: 17, features: ["Aura of Devotion"] },
    { level: 18, features: ["Sacred Oath Feature"] },
    { level: 19, features: ["Holy Champion"] },
    { level: 20, features: ["Sacred Oath Capstone", "Feat"] },
  ],
  choiceLevel: 3,
  subclasses: [
    {
      slug: "oath-of-devotion",
      name: "Oath of Devotion",
      description:
        "Devotion paladins embody the classic knightly ideal: honor, courage, compassion, and unwavering faith. They are guardians first and warriors second, and their divine light burns most fiercely against corruption and undead.",
      features: [
        {
          level: 3,
          name: "Sacred Weapon",
          description:
            "As an action, imbue one weapon you hold with positive energy for 1 minute. For the duration, you add your Charisma modifier to attack rolls made with the weapon (minimum +1), the weapon emits bright light in a 20-foot radius and dim light 20 feet beyond that, and the weapon's attacks are magical. You can end this effect early as a free action. You can use this feature once per short or long rest.",
        },
        {
          level: 3,
          name: "Turn the Unholy",
          description:
            "As an action, expend a use of Channel Divinity and present your holy symbol. Each fiend or undead within 30 feet that can see or hear you must make a Wisdom saving throw (DC = 8 + your proficiency bonus + your Charisma modifier). On a failure, the creature is turned for 1 minute or until it takes damage.",
        },
        {
          level: 7,
          name: "Aura of Devotion",
          description:
            "You and friendly creatures within 10 feet of you can't be charmed while you are conscious. At level 18, the range increases to 30 feet.",
        },
        {
          level: 13,
          name: "Purity of Spirit",
          description:
            "You are always under the effects of a protection from evil and good spell.",
        },
        {
          level: 17,
          name: "Holy Nimbus",
          description:
            "As an action, you can emanate an aura of sunlight for 1 minute. Bright light fills a 30-foot radius around you and dim light 30 feet beyond that. Enemies in the bright light have disadvantage on saving throws against your paladin spells and Channel Divinity. Additionally, whenever a fiend or undead hits you with an attack, it takes radiant damage equal to your Charisma modifier.",
        },
      ],
    },
    {
      slug: "oath-of-the-ancients",
      name: "Oath of the Ancients",
      description:
        "Ancients paladins swear to preserve the light of life and joy against the encroaching darkness of cruelty and nihilism. As ancient as the first forests, their power is nature's own — less holy fire and more the patient, inexorable growth of roots through stone.",
      features: [
        {
          level: 3,
          name: "Nature's Wrath",
          description:
            "As an action, expend a use of Channel Divinity to cause spectral vines to spring up around a creature within 10 feet. The creature must succeed on a Strength or Dexterity saving throw (DC = 8 + your proficiency bonus + your Charisma modifier) or be restrained until you use a bonus action to release it, or until it succeeds on a Strength check (same DC) at the end of one of its turns.",
        },
        {
          level: 3,
          name: "Turn the Faithless",
          description:
            "As an action, expend a use of Channel Divinity and present your holy symbol. Each fey or fiend within 30 feet that can see or hear you must make a Wisdom saving throw (DC = 8 + your proficiency bonus + your Charisma modifier). On a failure, the creature is turned for 1 minute or until it takes damage.",
        },
        {
          level: 7,
          name: "Aura of Warding",
          description:
            "You and friendly creatures within 10 feet of you have resistance to damage from spells. At level 18, the range increases to 30 feet.",
        },
        {
          level: 13,
          name: "Undying Sentinel",
          description:
            "When you are reduced to 0 hit points and not killed outright, you drop to 1 hit point instead. Once you use this feature, you can't do so again until you finish a long rest. Additionally, you suffer none of the drawbacks of old age.",
        },
        {
          level: 17,
          name: "Elder Champion",
          description:
            "As an action, you take on the aspect of an ancient nature spirit for 1 minute. For the duration, you regain 10 hit points at the start of each of your turns; you can cast paladin spells as a bonus action; enemies within 10 feet of you have disadvantage on saving throws against your paladin spells and Channel Divinity.",
        },
      ],
    },
    {
      slug: "oath-of-vengeance",
      name: "Oath of Vengeance",
      description:
        "Vengeance paladins are hunters of the wicked. They set aside the comfort of forgiveness to pursue a singular purpose: making those who commit the gravest evils answer for them. Cold, relentless, and absolutely certain of their cause, they are terrifying to oppose.",
      features: [
        {
          level: 3,
          name: "Abjure Enemy",
          description:
            "As an action, expend a use of Channel Divinity and choose a creature within 60 feet. It must make a Wisdom saving throw (DC = 8 + your proficiency bonus + your Charisma modifier). On a failure, the creature is frightened and its speed becomes 0 for 1 minute. On a success, its speed is halved for the same duration. Fiends and undead have disadvantage on this save.",
        },
        {
          level: 3,
          name: "Vow of Enmity",
          description:
            "As a bonus action, expend a use of Channel Divinity to utter a vow of enmity against a creature within 10 feet. You gain advantage on attack rolls against the creature for 1 minute, or until it drops to 0 hit points or falls unconscious.",
        },
        {
          level: 7,
          name: "Relentless Avenger",
          description:
            "When you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack as part of the same reaction. This movement doesn't provoke opportunity attacks.",
        },
        {
          level: 13,
          name: "Soul of Vengeance",
          description:
            "When a creature under your Vow of Enmity makes an attack, you can use your reaction to make a melee weapon attack against that creature if it is within range.",
        },
        {
          level: 17,
          name: "Avenging Angel",
          description:
            "As an action, you transform for 1 hour. You gain a flying speed of 60 feet and an aura of menace in a 30-foot radius. Each hostile creature in the aura at the start of your turn must succeed on a Wisdom saving throw (DC = 8 + your proficiency bonus + your Charisma modifier) or become frightened of you for 1 minute; a creature that succeeds is immune to this aura for 24 hours.",
        },
      ],
    },
    {
      slug: "oathbreaker",
      name: "Oathbreaker",
      description:
        "An Oathbreaker has shattered their sacred vow, turning their divine power to dark ends. Their aura now corrodes rather than protects, and their smites carry the chill of necrotic energy. Whether fallen through corruption or deliberate choice, Oathbreakers are agents of shadow who weaponize the very power that once made them holy.",
      features: [
        {
          level: 3,
          name: "Dread Lord",
          description:
            "As an action, expend a use of Channel Divinity to create a 30-foot aura of gloom for 1 minute. The aura reduces bright light to dim light. Frightened creatures in the aura have disadvantage on saving throws. If a creature is not undead and starts its turn in the aura, it takes 4d10 + your Charisma modifier psychic damage (Constitution saving throw halves; DC = 8 + proficiency bonus + Charisma modifier).",
        },
        {
          level: 3,
          name: "Control Undead",
          description:
            "As an action, expend a use of Channel Divinity and target one undead creature within 30 feet. The target must make a Wisdom saving throw (DC = 8 + your proficiency bonus + your Charisma modifier). On a failure, the target is charmed by you for 24 hours or until it takes damage. While charmed, it obeys your commands to the best of its ability.",
        },
        {
          level: 7,
          name: "Aura of Hate",
          description:
            "You and friendly fiends and undead within 10 feet gain a bonus to melee weapon damage rolls equal to your Charisma modifier (minimum +1). A creature can benefit from this aura only if it can see you. At level 18, the range increases to 30 feet.",
        },
        {
          level: 13,
          name: "Supernatural Resistance",
          description:
            "You gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.",
        },
        {
          level: 17,
          name: "Dread Champion",
          description:
            "When you deal necrotic damage with Divine Smite, you can spend up to 5 additional ki points (substitute: additional spell slot levels) to increase the necrotic damage dealt by 1d8 per additional slot level. Additionally, the target of a smite that deals necrotic damage has its hit point maximum reduced by the necrotic damage dealt until it finishes a long rest.",
        },
      ],
    },
  ],
  expertise: {
    exploration: [
      "when detecting evil presences, curses, or consecrated/desecrated ground",
    ],
    social: [
      "when invoking divine authority, inspiring courage, or negotiating from a position of moral conviction",
    ],
  },
  spellcasting: "half",
};
