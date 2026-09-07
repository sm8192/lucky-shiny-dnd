// Barrel export — re-exports all monster data so consumers only need one import.
// Add each new monster file here as you create it.
export { goblin } from "./goblin";

import { goblin } from "./goblin";
import type { Monster } from "@/types/monster";

export const allMonsters: Monster[] = [goblin];
