import type { Spell } from "@/types/spell";

export const cureWounds: Spell = {
  slug: "cure-wounds",
  name: "Cure Wounds",
  level: 1,
  school: "evocation",
  castingTime: "1 action",
  range: "Touch",
  components: ["V", "S"],
  duration: "Instantaneous",
  concentration: false,
  ritual: false,
  classes: ["cleric", "druid", "paladin", "ranger", "bard"],
  description:
    "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
  atHigherLevels:
    "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.",
};
