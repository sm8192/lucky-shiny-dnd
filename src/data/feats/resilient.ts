import type { Feat } from "@/types/feat";

export const resilient: Feat = {
  slug: "resilient",
  name: "Resilient",
  category: "general",
  repeatable: true,
  description:
    "Thorough training shores up one of your weaker defenses, hardening you against a category of threats.",
  benefits: [
    "Increase one ability score of your choice by 1, to a maximum of 20.",
    "You gain proficiency in saving throws using the chosen ability.",
  ],
};
