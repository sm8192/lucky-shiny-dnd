import type { Race } from "@/types/race";

export const elf: Race = {
  slug: "elf",
  name: "Elf",
  description:
    "Graceful, long-lived, and attuned to the subtle currents of magic, elves move through the world with the patience of those who measure their lives in centuries. They prize beauty, mastery, and freedom, and their keen senses miss little of what passes around them.",
  abilityScoreIncreases: [{ ability: "DEX", bonus: 2 }],
  size: "medium",
  speed: 30,
  languages: ["Common", "Elvish"],
  traits: [
    {
      name: "Darkvision",
      description:
        "Accustomed to twilit forests and the night sky, you can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    },
    {
      name: "Keen Senses",
      description: "You have proficiency in the Perception skill.",
    },
    {
      name: "Fey Ancestry",
      description:
        "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
    },
    {
      name: "Trance",
      description:
        "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.",
    },
  ],
  subraces: [
    {
      slug: "high-elf",
      name: "High Elf",
      description:
        "High elves cultivate keen minds and a mastery of at least the basics of magic, carrying the refined traditions of ancient elven realms.",
      abilityScoreIncreases: [{ ability: "INT", bonus: 1 }],
      traits: [
        {
          name: "Cantrip",
          description:
            "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.",
        },
        {
          name: "Elf Weapon Training",
          description:
            "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
        },
      ],
    },
    {
      slug: "wood-elf",
      name: "Wood Elf",
      description:
        "Wood elves are swift, reclusive hunters at home in deep forests, blending into the wild and striking before their quarry knows they are there.",
      abilityScoreIncreases: [{ ability: "WIS", bonus: 1 }],
      traits: [
        {
          name: "Fleet of Foot",
          description: "Your base walking speed increases to 35 feet.",
        },
        {
          name: "Mask of the Wild",
          description:
            "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, or other natural phenomena.",
        },
      ],
    },
  ],
};
