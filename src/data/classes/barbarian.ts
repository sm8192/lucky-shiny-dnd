import type { CharacterClass } from "@/types/character-class";

export const barbarian: CharacterClass = {
  slug: "barbarian",
  name: "Barbarian",
  description:
    "Fury made flesh, barbarians draw on a primal wellspring of rage that makes them almost impossible to stop in open combat. Born of harsh lands and harder lives, they are at their most dangerous when wounded — and they are never more alive than when standing in the eye of a storm.",
  hitDie: "d12",
  savingThrow: "Fortitude",
  armorProficiency: "medium",
  weaponProficiency: "martial",
  shieldProficiency: true,
  perception: "1",
  levels: [
    { level: 1, features: ["Rage", "Unarmored Defense"], extras: { rageUses: 2, rageDamage: 2 } },
    { level: 2, features: ["Reckless Attack", "Danger Sense"], extras: { rageUses: 2, rageDamage: 2 } },
    { level: 3, features: ["Primal Path"], extras: { rageUses: 3, rageDamage: 2 } },
    { level: 4, features: ["Feat"], extras: { rageUses: 3, rageDamage: 2 } },
    { level: 5, features: ["Extra Attack", "Fast Movement"], extras: { rageUses: 3, rageDamage: 2 } },
    { level: 6, features: ["Primal Path Feature"], extras: { rageUses: 4, rageDamage: 2 } },
    { level: 7, features: ["Feral Instinct"], extras: { rageUses: 4, rageDamage: 2 } },
    { level: 8, features: ["Feat"], extras: { rageUses: 4, rageDamage: 2 } },
    { level: 9, features: ["Brutal Critical (x1)"], extras: { rageUses: 4, rageDamage: 3 } },
    { level: 10, features: ["Primal Path Feature"], extras: { rageUses: 4, rageDamage: 3 } },
    { level: 11, features: ["Relentless Rage"], extras: { rageUses: 4, rageDamage: 3 } },
    { level: 12, features: ["Feat"], extras: { rageUses: 5, rageDamage: 3 } },
    { level: 13, features: ["Brutal Critical (x2)"], extras: { rageUses: 5, rageDamage: 3 } },
    { level: 14, features: ["Primal Path Feature"], extras: { rageUses: 5, rageDamage: 3 } },
    { level: 15, features: ["Persistent Rage"], extras: { rageUses: 5, rageDamage: 3 } },
    { level: 16, features: ["Feat"], extras: { rageUses: 5, rageDamage: 4 } },
    { level: 17, features: ["Brutal Critical (x3)"], extras: { rageUses: 6, rageDamage: 4 } },
    { level: 18, features: ["Indomitable Might"], extras: { rageUses: 6, rageDamage: 4 } },
    { level: 19, features: ["Unstoppable"], extras: { rageUses: 6, rageDamage: 4 } },
    { level: 20, features: ["Primal Champion", "Feat"], extras: { rageUses: 0, rageDamage: 4 } },
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
        },
      ],
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
        },
      ],
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
        },
      ],
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
        },
      ],
    },
  ],
  expertise: {
    exploration: [
      "when navigating or surviving in wilderness environments",
      "when tracking quarry across natural terrain",
    ],
    social: [
      "when intimidating or breaking through fear-based resistance",
    ],
  },
  spellcasting: "none",
};
