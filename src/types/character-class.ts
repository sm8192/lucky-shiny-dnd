export type Dice = "d6" | "d8" | "d10" | "d12";

export type AbilityScore =
  "STR"
  | "DEX"
  | "CON"
  | "INT"
  | "WIS"
  | "CHA";

export type SavingThrow = "Fortitude" | "Reflex" | "Will";

/**Multiply a character's proficiency bonus by this number to calculate that character's proficiency score.*/
export type PerceptionProficiency = ".5" | "1" | "1.5" | "2";

export type ArmorProficiency =
  "none"
  | "light"
  | "medium"
  | "heavy";

export type WeaponProficiency = "simple" | "martial";

export type spellcastingProgression = "none" | "half" | "full" | "pact";

export interface ClassLevel {
  level: number;
  features: string[];
  extras?: Record<string, number | string>;
}

/** A subclass option (archetype, tradition, etc.) */
export interface Subclass {
  slug: string;
  name: string;
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
  savingThrow: SavingThrow;
  armorProficiency: ArmorProficiency;
  weaponProficiency: WeaponProficiency;
  shieldProficiency: boolean;
  perception: PerceptionProficiency;
  levels: ClassLevel[];
  /**Level at which subclass is chosen */
  choiceLevel: number;
  subclasses: Subclass[];
  expertise: Expertise;
  spellcasting: spellcastingProgression;
}
