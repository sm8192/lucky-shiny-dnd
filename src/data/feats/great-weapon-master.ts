import type { Feat } from "@/types/feat";

export const greatWeaponMaster: Feat = {
  slug: "great-weapon-master",
  name: "Great Weapon Master",
  category: "general",
  prerequisite: "Proficiency with martial weapons",
  repeatable: false,
  description:
    "You have learned to put the weight of a heavy weapon to lethal use, trading accuracy for devastating force.",
  benefits: [
    "On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action.",
    "Before you make a melee attack with a heavy weapon you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.",
  ],
};
