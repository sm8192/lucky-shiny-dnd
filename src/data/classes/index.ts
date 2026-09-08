// Barrel export — re-exports all class data so consumers only need one import.
// Add each new class file here as you create it.

import { barbarian } from "./barbarian";
import { bard } from "./bard";
import { cleric } from "./cleric";
import { druid } from "./druid";
import { fighter } from "./fighter";
import { monk } from "./monk";
import { paladin } from "./paladin";
import { ranger } from "./ranger";
import { rogue } from "./rogue";
import { sorcerer } from "./sorcerer";
import { warlock } from "./warlock";
import { wizard } from "./wizard";

import type { CharacterClass } from "@/types/character-class";

export { barbarian } from "./barbarian";
export { bard } from "./bard";
export { cleric } from "./cleric";
export { druid } from "./druid";
export { fighter } from "./fighter";
export { monk } from "./monk";
export { paladin } from "./paladin";
export { ranger } from "./ranger";
export { rogue } from "./rogue";
export { sorcerer } from "./sorcerer";
export { warlock } from "./warlock";
export { wizard } from "./wizard";

export const allClasses: CharacterClass[] = [
  barbarian,
  bard,
  cleric,
  druid,
  fighter,
  monk,
  paladin,
  ranger,
  rogue,
  sorcerer,
  warlock,
  wizard,
];
