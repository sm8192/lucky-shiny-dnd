// Barrel export — re-exports all feat data so consumers only need one import.
// Add each new feat file here as you create it.
export { greatWeaponMaster } from "./great-weapon-master";
export { alert } from "./alert";
export { resilient } from "./resilient";

import { greatWeaponMaster } from "./great-weapon-master";
import { alert } from "./alert";
import { resilient } from "./resilient";
import type { Feat } from "@/types/feat";

export const allFeats: Feat[] = [alert, greatWeaponMaster, resilient];
