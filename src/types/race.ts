import type { AbilityScore } from "./character-class";

export type CreatureSize = "small" | "medium" | "large";

/** A bonus applied to a single ability score at character creation. */
export interface AbilityScoreIncrease {
  ability: AbilityScore;
  bonus: number;
}

/** A named racial trait granted to every member of the race. */
export interface RacialTrait {
  name: string;
  description: string;
}

/** A playable sub-group of a race, each with its own extra traits. */
export interface Subrace {
  slug: string;
  name: string;
  description: string;
  abilityScoreIncreases: AbilityScoreIncrease[];
  traits: RacialTrait[];
}

export interface Race {
  slug: string;
  name: string;
  description: string;
  abilityScoreIncreases: AbilityScoreIncrease[];
  size: CreatureSize;
  /** Base walking speed in feet. */
  speed: number;
  /** Languages every member of the race knows. */
  languages: string[];
  traits: RacialTrait[];
  subraces: Subrace[];
}
