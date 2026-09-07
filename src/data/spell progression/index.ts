import { SpellProgression } from "@/types/spell-progression";
import { fullCasterSlots } from "./full-caster-slots";
import { halfCasterSlots } from "./half-caster-slots";
import { pactCasterSlots } from "./pact-caster-slots";

export { fullCasterSlots } from "./full-caster-slots";
export { halfCasterSlots } from "./half-caster-slots";
export { pactCasterSlots } from "./pact-caster-slots";

export const allProgressions: SpellProgression[] = [
    fullCasterSlots,
    halfCasterSlots,
    pactCasterSlots
]