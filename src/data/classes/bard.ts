import type { CharacterClass } from "@/types/character-class";

export const bard: CharacterClass = {
  slug: "bard",
  name: "Bard",
  description:
    "Whether through song, oration, or sheer force of personality, bards weave magic into every performance. They are the world's most versatile adventurers — part spellcaster, part face, part jack-of-all-trades — capable of lifting allies with an inspiring word or unraveling enemies with a well-placed insult.",
  hitDie: "d8",
  savingThrow: "Will",
  armorProficiency: "light",
  weaponProficiency: "simple",
  shieldProficiency: false,
  perception: "1",
  levels: [
    { level: 1, features: ["Spellcasting", "Bardic Inspiration"], extras: { inspirationDie: "d6" } },
    { level: 2, features: ["Jack of All Trades", "Song of Rest (d6)"], extras: { inspirationDie: "d6" } },
    { level: 3, features: ["Bard College", "Expertise"], extras: { inspirationDie: "d6" } },
    { level: 4, features: ["Feat"], extras: { inspirationDie: "d6" } },
    { level: 5, features: ["Bardic Inspiration (d8)", "Font of Inspiration"], extras: { inspirationDie: "d8" } },
    { level: 6, features: ["Bard College Feature", "Countercharm"], extras: { inspirationDie: "d8" } },
    { level: 7, features: [], extras: { inspirationDie: "d8" } },
    { level: 8, features: ["Feat"], extras: { inspirationDie: "d8" } },
    { level: 9, features: ["Song of Rest (d8)"], extras: { inspirationDie: "d8" } },
    { level: 10, features: ["Bardic Inspiration (d10)", "Expertise", "Magical Secrets"], extras: { inspirationDie: "d10" } },
    { level: 11, features: ["Greater Inspiration"], extras: { inspirationDie: "d10" } },
    { level: 12, features: ["Feat"], extras: { inspirationDie: "d10" } },
    { level: 13, features: ["Song of Rest (d10)"], extras: { inspirationDie: "d10" } },
    { level: 14, features: ["Bard College Feature", "Magical Secrets"], extras: { inspirationDie: "d10" } },
    { level: 15, features: ["Bardic Inspiration (d12)"], extras: { inspirationDie: "d12" } },
    { level: 16, features: ["Feat"], extras: { inspirationDie: "d12" } },
    { level: 17, features: ["Song of Rest (d12)"], extras: { inspirationDie: "d12" } },
    { level: 18, features: ["Magical Secrets"], extras: { inspirationDie: "d12" } },
    { level: 19, features: ["Bard College Feature"], extras: { inspirationDie: "d12" } },
    { level: 20, features: ["Superior Inspiration", "Feat"], extras: { inspirationDie: "d12" } },
  ],
  choiceLevel: 3,
  subclasses: [
    {
      slug: "college-of-lore",
      name: "College of Lore",
      description:
        "Lore bards gather secrets the way others collect gold, believing that knowledge is the sharpest weapon. They supplement their broad magical repertoire with cutting words that leave enemies rattled and off-balance.",
      features: [
        {
          level: 3,
          name: "Bonus Proficiencies",
          description:
            "You gain proficiency in three skills of your choice.",
        },
        {
          level: 3,
          name: "Cutting Words",
          description:
            "When a creature you can see within 60 feet makes an attack roll, ability check, or damage roll, you can use your reaction and expend one Bardic Inspiration die to roll the die and subtract the result from the creature's roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails.",
        },
        {
          level: 7,
          name: "Additional Magical Secrets",
          description:
            "You learn two spells of your choice from any class spell list. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells but don't count against the number of bard spells you know.",
        },
        {
          level: 13,
          name: "Peerless Skill",
          description:
            "When you make an ability check, you can expend one use of Bardic Inspiration, rolling a Bardic Inspiration die and adding the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the DM tells you whether you succeed or fail.",
        },
        {
          level: 17,
          name: "Unending Inspiration",
          description:
            "When a creature uses one of your Bardic Inspiration dice, you immediately regain one expended use of Bardic Inspiration.",
        },
      ],
    },
    {
      slug: "college-of-valor",
      name: "College of Valor",
      description:
        "Valor bards charge into the thick of battle, inspiring their companions through feats of daring rather than songs from safety. They bolster their martial capability with magic, becoming a formidable frontline presence.",
      features: [
        {
          level: 3,
          name: "Combat Inspiration",
          description:
            "A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits.",
        },
        {
          level: 3,
          name: "Bonus Proficiencies",
          description:
            "You gain proficiency with medium armor, shields, and martial weapons.",
        },
        {
          level: 7,
          name: "Extra Attack",
          description:
            "You can attack twice, instead of once, whenever you take the Attack action on your turn.",
        },
        {
          level: 13,
          name: "Battle Magic",
          description:
            "When you use your action to cast a bard spell, you can make one weapon attack as a bonus action.",
        },
        {
          level: 17,
          name: "Master's Flourish",
          description:
            "When you use Combat Inspiration and the roll would add to damage, the target of the attack must succeed on a Constitution saving throw (DC = 8 + your proficiency bonus + your Charisma modifier) or become stunned until the end of its next turn.",
        },
      ],
    },
    {
      slug: "college-of-glamour",
      name: "College of Glamour",
      description:
        "Glamour bards draw on the beguiling magic of the Feywild, wrapping themselves and their allies in an aura of supernatural allure. Their performances enchant and reshape perception, bending loyalty and attention to their will.",
      features: [
        {
          level: 3,
          name: "Mantle of Inspiration",
          description:
            "As a bonus action, expend one use of Bardic Inspiration to grant yourself a wondrous appearance. Each creature of your choice within 60 feet that can see you gains temporary hit points equal to your Bardic Inspiration die roll + your Charisma modifier, and may immediately move up to their speed without provoking opportunity attacks.",
        },
        {
          level: 3,
          name: "Enthralling Performance",
          description:
            "After performing for at least 1 minute, you can attempt to inspire deep admiration in up to five humanoids who watched. Each target must succeed on a Wisdom saving throw (DC = 8 + your proficiency bonus + your Charisma modifier) or be charmed by you for 1 hour. While charmed this way, the target idolizes you and hinders anyone who opposes you. This effect ends if you or your companions do anything harmful to the target.",
        },
        {
          level: 7,
          name: "Mantle of Majesty",
          description:
            "As a bonus action, you cast command without expending a spell slot, and you take on an unearthly appearance of regal authority for 1 minute. For the duration, you can cast command as a bonus action on each of your turns without expending a spell slot. Any creature charmed by you automatically fails its saving throw against this command. You can use this feature once per long rest.",
        },
        {
          level: 13,
          name: "Unbreakable Majesty",
          description:
            "As a bonus action, you assume a magically majestic presence for 1 minute. For the duration, whenever any creature tries to attack you for the first time on a turn, it must succeed on a Charisma saving throw (DC = 8 + your proficiency bonus + your Charisma modifier) or be forced to choose a different target; if it can't, the attack misses. You can use this feature once per short or long rest.",
        },
        {
          level: 17,
          name: "Crown of Stars",
          description:
            "Your Mantle of Inspiration now also causes each affected creature to emit dim light in a 5-foot radius for the duration, and any creature that hits them with a melee attack takes radiant damage equal to your Bardic Inspiration die.",
        },
      ],
    },
    {
      slug: "college-of-whispers",
      name: "College of Whispers",
      description:
        "Whispers bards lurk at the edges of society, collecting secrets and trading in fear. They use their performance as cover, slipping poison-laced words into private conversations and turning allies against enemies without ever drawing a weapon.",
      features: [
        {
          level: 3,
          name: "Psychic Blades",
          description:
            "When you hit a creature with a weapon attack, you can expend one Bardic Inspiration die to deal extra psychic damage equal to the die roll + your Charisma modifier to the target. The target must succeed on a Wisdom saving throw (DC = 8 + your proficiency bonus + your Charisma modifier) or become frightened of you until the end of its next turn.",
        },
        {
          level: 3,
          name: "Words of Terror",
          description:
            "After spending 1 minute conversing with a humanoid, you can attempt to seed paranoia in their mind. The target must succeed on a Wisdom saving throw (DC = 8 + your proficiency bonus + your Charisma modifier) or become frightened of a creature of your choice (other than yourself) for 1 hour or until the target succeeds on a new save at the end of each of its turns.",
        },
        {
          level: 7,
          name: "Mantle of Whispers",
          description:
            "When a humanoid dies within 30 feet of you, you can use your reaction to magically capture their shadow. As an action, you can adopt the creature's appearance and mimic its speech patterns; you also gain access to its surface-level memories. This disguise lasts until you end it as a bonus action or until you use this feature again.",
        },
        {
          level: 13,
          name: "Shadow Lore",
          description:
            "As an action, you whisper a string of words only one creature within 30 feet can hear. The target must succeed on a Wisdom saving throw (DC = 8 + your proficiency bonus + your Charisma modifier) or be charmed by you for 8 hours. The charmed target believes you know its most mortifying secret, and will not reveal it acted under compulsion after the effect ends. You can use this feature once per long rest.",
        },
        {
          level: 17,
          name: "Dark Revelation",
          description:
            "Your Psychic Blades now deal damage equal to two Bardic Inspiration dice instead of one, and the frightened condition from Psychic Blades lasts until the end of the target's next turn without a saving throw.",
        },
      ],
    },
  ],
  expertise: {
    exploration: [
      "when gathering information about a location, organization, or historical event",
    ],
    social: [
      "when performing, persuading, or deceiving in social situations",
      "when dealing with nobility, courts, or formal institutions",
    ],
  },
  spellcasting: "full",
};
