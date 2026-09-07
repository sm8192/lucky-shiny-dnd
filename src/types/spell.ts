export type SpellSchool =
  | "abjuration"
  | "conjuration"
  | "divination"
  | "enchantment"
  | "evocation"
  | "illusion"
  | "necromancy"
  | "transmutation";

export type SpellComponent = "V" | "S" | "M";

export type CastingTime =
  | "1 action"
  | "1 bonus action"
  | "1 reaction"
  | "1 minute"
  | "10 minutes"
  | "1 hour"
  | "8 hours"
  | "24 hours";

export interface Spell {
  /** Unique URL-safe identifier, e.g. "magic-missile" */
  slug: string;
  name: string;
  /** 0 = cantrip */
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  school: SpellSchool;
  castingTime: CastingTime;
  range: string;
  components: SpellComponent[];
  /** Material component description, if components includes "M" */
  materials?: string;
  duration: string;
  concentration: boolean;
  ritual: boolean;
  /** Classes that have this spell on their spell list */
  classes: string[];
  description: string;
  /** Higher-level casting upgrade text, if applicable */
  atHigherLevels?: string;
}
