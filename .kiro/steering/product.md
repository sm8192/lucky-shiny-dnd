---
inclusion: always
---

# Lucky Shiny DnD — Rulebook App

A custom D&D-style rulebook built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **MDX**. It is a statically generated reference site with four content sections: Rules, Classes, Spells, and Monsters.

## Tech Stack

- **Next.js 16** with App Router and `dynamicParams = false` on all dynamic routes
- **TypeScript** — strict typing; never use `any` or widen interface types
- **Tailwind CSS v4** — utility-first; `@tailwindcss/typography` used for MDX prose
- **MDX** via `@next/mdx` with `remark-gfm`; `.mdx` files can export a `metadata` object
- **Geist Sans / Geist Mono** fonts via `next/font/google`
- Path alias `@/` maps to `src/`

## Project Structure

```
src/
├── app/                  # Next.js App Router pages and layouts
│   ├── layout.tsx        # Root layout: NavBar, fonts, global metadata
│   ├── page.tsx          # Home page
│   ├── rules/            # MDX-driven rules section (sidebar layout)
│   ├── classes/          # Character class listing + [slug] detail
│   ├── spells/           # Spell listing + [slug] detail
│   └── monsters/         # Monster listing + [slug] detail
├── components/           # Shared UI components
├── content/rules/        # MDX chapter files (one per rule topic)
├── data/                 # Static TypeScript data files
│   ├── classes/          # One file per class + index barrel
│   ├── spells/           # One file per spell + index barrel
│   ├── monsters/         # One file per monster + index barrel
│   └── spell progression/# Spell slot tables (full/half/pact casters)
├── lib/
│   └── rules.ts          # Static rule registry + sidebar helpers
├── types/                # TypeScript interfaces (spell, monster, character-class, spell-progression)
└── mdx-components.tsx    # Global MDX component overrides
```

## Content Architecture

### Data Files (classes, spells, monsters)

- One entity per file. File name must be the kebab-case `slug`, e.g. `fireball.ts`.
- Each file exports a single named camelCase constant typed to the relevant interface: `Spell`, `Monster`, `CharacterClass`.
- After creating a file, add a named re-export and an entry to the `all*` array in `index.ts`. The barrel is the single import point for consumers.
- Do not add logic to data files — pure data only.

### Rules (MDX)

- Rule chapters live in `src/content/rules/<slug>.mdx`.
- Each file must export a `metadata` object: `{ title: string; description: string; order: number }`.
- After adding an MDX file, add a matching entry to `RULE_REGISTRY` in `src/lib/rules.ts` — this registry drives static params, sidebar ordering, and `<head>` metadata. The file system is not scanned at runtime.

## TypeScript Conventions

- All data must satisfy the types in `src/types/`. Do not widen or bypass them.
- Key unions to know:
  - `Dice`: `"d6" | "d8" | "d10" | "d12"`
  - `SavingThrow`: `"Fortitude" | "Reflex" | "Will"`
  - `ArmorProficiency`: `"none" | "light" | "medium" | "heavy"`
  - `WeaponProficiency`: `"simple" | "martial"`
  - `PerceptionProficiency`: `".5" | "1" | "1.5" | "2"`
  - `spellcastingProgression`: `"none" | "half" | "full" | "pact"`
  - `SpellSchool`: the eight standard schools
  - `CastingTime`: the typed union of valid casting time strings
- Verify with `npm run build` — TypeScript errors are build errors.

## UI & Styling Conventions

- **Color palette**: `stone-*` as the base neutral; `amber-*` as the primary accent.
- **Dark mode**: all components must include `dark:` variants. The root sets `bg-stone-50 / dark:bg-stone-950`.
- Shared components:
  - `PageHeader` — page-level `<h1>` with optional description and badge. Use on all listing and detail pages.
  - `StatBadge` — small labeled pill for inline stats (hit die, CR, spell level, etc.).
  - `NavBar` — sticky top bar; uses `"use client"` for active-link detection.
- Sub-components scoped to a single page should be defined in that page file, not promoted to `src/components/` unless reused across pages.
- Listing pages use CSS grid (`grid gap-4 sm:grid-cols-2 lg:grid-cols-3`). Detail pages use `max-w-4xl`.
- MDX prose pages use `prose prose-stone dark:prose-invert` from `@tailwindcss/typography`.

## Routing & Static Generation

- All dynamic routes use `generateStaticParams` + `dynamicParams = false` (unknown slugs → 404).
- Dynamic route pages receive `params` as `Promise<{ slug: string }>` — always `await params`.
- `generateMetadata` is async and derives title/description from the data or registry.
- The `title` in root `layout.tsx` uses the `{ template, default }` pattern: `"%s | Rulebook"`.

## Adding Content Checklist

**New Rule Chapter**
1. Create `src/content/rules/<slug>.mdx` with exported `metadata`.
2. Add entry to `RULE_REGISTRY` in `src/lib/rules.ts`.

**New Spell / Monster**
1. Create `src/data/<section>/<slug>.ts` typed to the correct interface.
2. Add named re-export and push to `all*` array in `src/data/<section>/index.ts`.

**New Class**
- Follow the dedicated `class-generation` steering file (activate manually when needed).

## Commands

```bash
npm run dev      # Start development server (run manually in terminal)
npm run build    # Type-check + build — run after changes to verify
npm run lint     # ESLint
```
