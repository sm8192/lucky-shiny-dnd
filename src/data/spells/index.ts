// Barrel export — re-exports all spell data so consumers only need one import.
// Add each new spell file here as you create it.
export { fireball } from "./fireball";
export { magicMissile } from "./magic-missile";
export { cureWounds } from "./cure-wounds";

import { fireball } from "./fireball";
import { magicMissile } from "./magic-missile";
import { cureWounds } from "./cure-wounds";
import type { Spell } from "@/types/spell";

export const allSpells: Spell[] = [magicMissile, cureWounds, fireball];
