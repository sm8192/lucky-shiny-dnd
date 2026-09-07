export type CreatureSize =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "gargantuan";

export type CreatureType =
  | "aberration"
  | "beast"
  | "celestial"
  | "construct"
  | "dragon"
  | "elemental"
  | "fey"
  | "fiend"
  | "giant"
  | "humanoid"
  | "monstrosity"
  | "ooze"
  | "plant"
  | "undead";

export type Alignment =
  | "lawful good"
  | "neutral good"
  | "chaotic good"
  | "lawful neutral"
  | "true neutral"
  | "chaotic neutral"
  | "lawful evil"
  | "neutral evil"
  | "chaotic evil"
  | "unaligned";

export interface AbilityScores {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}

export interface MonsterAction {
  name: string;
  /** "action" | "bonus action" | "reaction" | "legendary" | "lair" */
  type: string;
  description: string;
  /** Attack roll bonus, if applicable */
  attackBonus?: number;
  /** Damage dice string, e.g. "2d6 + 3" */
  damage?: string;
  damageType?: string;
  reach?: string;
  range?: string;
}

export interface Monster {
  /** Unique URL-safe identifier, e.g. "goblin" */
  slug: string;
  name: string;
  size: CreatureSize;
  type: CreatureType;
  subtype?: string;
  alignment: Alignment;
  armorClass: number;
  armorType?: string;
  hitPoints: number;
  hitDice: string;
  speed: {
    walk?: number;
    swim?: number;
    fly?: number;
    climb?: number;
    burrow?: number;
  };
  abilityScores: AbilityScores;
  savingThrows?: Partial<Record<keyof AbilityScores, number>>;
  skills?: Record<string, number>;
  damageResistances?: string[];
  damageImmunities?: string[];
  conditionImmunities?: string[];
  senses: {
    darkvision?: number;
    blindsight?: number;
    tremorsense?: number;
    truesight?: number;
    passivePerception: number;
  };
  languages: string[];
  /** e.g. "1/4" or "5" */
  challengeRating: string;
  /** XP awarded for defeating this monster */
  experiencePoints: number;
  traits?: { name: string; description: string }[];
  actions: MonsterAction[];
  legendaryActions?: { description: string; actions: MonsterAction[] };
  description?: string;
}
