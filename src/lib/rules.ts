/**
 * Server-side utility for reading rule chapter metadata.
 *
 * Each MDX file in src/content/rules/ exports a `metadata` object with
 * { title, description, order }. We maintain a static registry here so
 * Next.js can include everything at build time without needing fs/glob.
 *
 * When you add a new chapter:
 *   1. Create src/content/rules/<slug>.mdx with an exported `metadata` object.
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
  introduction: {
    title: "Introduction",
    description: "What is this game, and how does it work?",
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
