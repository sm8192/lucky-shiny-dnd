import type { Feat } from "@/types/feat";

export const alert: Feat = {
  slug: "alert",
  name: "Alert",
  category: "general",
  repeatable: false,
  description:
    "Always on the lookout for danger, you react to threats faster than those around you.",
  benefits: [
    "You gain a +5 bonus to initiative.",
    "You can't be surprised while you are conscious.",
    "Other creatures don't gain advantage on attack rolls against you as a result of being hidden from you.",
  ],
};
