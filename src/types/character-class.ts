export type Dice = "d4" | "d6" | "d8" | "d10" | "d12";

export type AbilityScore =
  | "STR"
  | "DEX"
  | "CON"
  | "INT"
  | "WIS"
  | "CHA";

export type SavingThrow = "Fortitude" | "Reflex" | "Will";

/**Multiply a character's proficiency bonus by this number to calculate that character's proficiency score.*/
export type PerceptionProficiency = ".5" | "1" | "1.5" | "2";

export type ArmorProficiency =
  | "light armor"
  | "medium armor"
  | "heavy armor"
  | "shields";

export type WeaponProficiency =
  | "simple"
  | "martial";

export interface ClassLevel {
  level: number;
  features: string[];
  spellSlots?: Partial<Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9, number>>;
  extras?: Record<string, number | string>;
}

/** A subclass option (archetype, tradition, etc.) */
export interface Subclass {
  slug: string;
  name: string;
  /** Level at which the subclass is chosen */
  description: string;
  features: {
    level: number;
    name: string;
    description: string;
  }[];
}

export interface Expertise {
  exploration: string[];
  social: string[];
}

export interface CharacterClass {
  slug: string;
  name: string;
  description: string;
  hitDie: Dice;
  savingThrows: SavingThrow[];
  armorProficiencies: ArmorProficiency[];
  weaponProficiencies: WeaponProficiency[];
  perception: PerceptionProficiency;
  levels: ClassLevel[];
  choiceLevel: number;
  subclasses: Subclass[];
  expertise: Expertise;
}
