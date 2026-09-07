export type Dice = "d4" | "d6" | "d8" | "d10" | "d12";

export type AbilityScore =
  | "STR"
  | "DEX"
  | "CON"
  | "INT"
  | "WIS"
  | "CHA";

export type ArmorProficiency =
  | "light armor"
  | "medium armor"
  | "heavy armor"
  | "shields";

export type WeaponProficiency =
  | "simple weapons"
  | "martial weapons"
  | string; // allows custom weapon categories

/** A single row in the class progression table */
export interface ClassLevel {
  level: number;
  proficiencyBonus: number;
  features: string[];
  /** Spell slots per spell level, keyed 1–9. Omit for non-casters. */
  spellSlots?: Partial<Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9, number>>;
  /** Any other numeric columns specific to the class (e.g. Rage uses, Ki points) */
  extras?: Record<string, number | string>;
}

/** A subclass option (archetype, tradition, etc.) */
export interface Subclass {
  slug: string;
  name: string;
  /** Level at which the subclass is chosen */
  choiceLevel: number;
  description: string;
  features: {
    level: number;
    name: string;
    description: string;
  }[];
}

export interface CharacterClass {
  /** Unique URL-safe identifier, e.g. "fighter" */
  slug: string;
  name: string;
  description: string;
  hitDie: Dice;
  primaryAbility: AbilityScore[];
  savingThrows: AbilityScore[];
  armorProficiencies: ArmorProficiency[];
  weaponProficiencies: WeaponProficiency[];
  skillChoices: {
    count: number;
    options: string[];
  };
  startingEquipment: string[];
  /** Full 1–20 progression table */
  levels: ClassLevel[];
  subclasses: Subclass[];
}
