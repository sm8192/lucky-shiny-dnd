/**
 * Server-side utility for reading rule chapter metadata.
 *
 * This registry is the single source of truth for rule chapter metadata
 * ({ title, description, order }). We keep it static here so Next.js can
 * include everything at build time without needing fs/glob.
 *
 * When you add a new chapter:
 *   1. Create src/content/rules/<slug>.mdx (content only — no metadata export).
 *   2. Add a matching entry to RULE_REGISTRY below.
 */

import type { SidebarEntry } from "@/components/RulesSidebar";

export interface RuleMetadata {
  title: string;
  description: string;
  order: number;
}

// ---------------------------------------------------------------------------
// Registry — one entry per MDX file
// ---------------------------------------------------------------------------
const RULE_REGISTRY: Record<string, RuleMetadata> = {
  basics: {
    title: "Basics",
    description: "The underlying assumptions needed to play the game.",
    order: 1,
  },
  "ability-scores": {
    title: "Ability Scores",
    description: "The six core attributes that define every character.",
    order: 2,
  },
  combat: {
    title: "Combat",
    description: "Rules for resolving fights, conflicts, and dangerous encounters.",
    order: 3,
  },
  exploration: {
    title: "Exploration",
    description: "Travel, navigation, and discovery in the wider world.",
    order: 4,
  },
  "special-mechanics": {
    title: "Special Mechanics",
    description: "Ideals, Flaws, Inspiration, and Bonds.",
    order: 5
  },
  "character-creation": {
    title: "Character Creation",
    description: "The steps for building a Player Character.",
    order: 6
  },
  actions: {
    title: "Actions",
    description: "The basic actions any character can use.",
    order: 7,
  }
};

// ---------------------------------------------------------------------------
// Public helpers
// ---------------------------------------------------------------------------

/** All known rule slugs — used by generateStaticParams. */
export const ruleSlugs: string[] = Object.keys(RULE_REGISTRY);

/** Sorted sidebar entries for the RulesSidebar component. */
export function getRuleSidebarEntries(): SidebarEntry[] {
  return Object.entries(RULE_REGISTRY)
    .map(([slug, meta]) => ({ slug, ...meta }))
    .sort((a, b) => a.order - b.order);
}

/** Full metadata for a single chapter. Returns null for unknown slugs. */
export function getRuleMetadata(slug: string): RuleMetadata | null {
  return RULE_REGISTRY[slug] ?? null;
}
