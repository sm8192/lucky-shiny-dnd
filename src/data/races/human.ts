import type { Race } from "@/types/race";

export const human: Race = {
  slug: "human",
  name: "Human",
  description:
    "Ambitious, adaptable, and endlessly varied, humans spread into every corner of the world and bend it to their will. What they lack in long lifespans or innate magic they make up for in drive and versatility, mastering any craft, calling, or art they set their minds to.",
  abilityScoreIncreases: [
    { ability: "STR", bonus: 1 },
    { ability: "DEX", bonus: 1 },
    { ability: "CON", bonus: 1 },
    { ability: "INT", bonus: 1 },
    { ability: "WIS", bonus: 1 },
    { ability: "CHA", bonus: 1 },
  ],
  size: "medium",
  speed: 30,
  languages: ["Common", "One extra language of your choice"],
  traits: [
    {
      name: "Versatile",
      description:
        "Humans adapt to any situation. You gain proficiency in one skill of your choice, representing the broad training and self-reliance common to your kind.",
    },
    {
      name: "Ambitious",
      description:
        "Once per long rest, when you fail an ability check, attack roll, or saving throw, you can choose to reroll it and must use the new result.",
    },
  ],
  subraces: [],
};
