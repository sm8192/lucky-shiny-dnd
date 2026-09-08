// Barrel export — re-exports all class data so consumers only need one import.
// Add each new class file here as you create it.

import { barbarian } from "./barbarian";
import {bard} from "./bard";
import { cleric } from "./cleric";
import { druid } from "./druid";
import { fighter } from "./fighter";
import { monk } from "./monk";
import { paladin } from "./paladin";
import { ranger } from "./ranger";
import { wizard } from "./wizard";

import type { CharacterClass } from "@/types/character-class";

export { fighter } from "./fighter";
export { wizard } from "./wizard";

export const allClasses: CharacterClass[] = [fighter, wizard];
