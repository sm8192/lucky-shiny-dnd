// Barrel export — re-exports all race data so consumers only need one import.
// Add each new race file here as you create it.

import { human } from "./human";
import { elf } from "./elf";

import type { Race } from "@/types/race";

export { human } from "./human";
export { elf } from "./elf";

export const allRaces: Race[] = [human, elf];
