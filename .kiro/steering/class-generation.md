---
inclusion: manual
name: class-generation
description: Rules and standards for generating Character Class data files for the D&D rulebook app.
---

# Character Class Generation Rules

Use these rules whenever you are asked to create or modify a Character Class data file in `src/data/classes/`.

## File Conventions

- One class per file. File name must match the class `slug` exactly: `src/data/classes/<slug>.ts`.
- After creating the file, add a named export and an entry to `src/data/classes/index.ts` — both the individual export and the `allClasses` array.
- The exported constant name must be camelCase matching the slug: `fighter`, `wizard`, `bloodWarden`, etc.

## TypeScript Interface

All classes must satisfy the `CharacterClass` interface from `@/types/character-class`. Do not widen or bypass the types. Refer to that file for the full shape.

Key fields:

| Field | Notes |
|---|---|
| `slug` | Kebab-case, URL-safe. Must match the file name. |
| `name` | Title-case display name. |
| `description` | 2–4 sentences. Conveys the class fantasy and role at the table. No mechanical details here. |
| `hitDie` | One of: `"d6"`, `"d8"`, `"d10"`, `"d12"`. |
| `primaryAbility` | 1–2 ability scores. Use the full-caster standard (INT/WIS/CHA) for casters; STR or DEX for martials. |
| `perception` | One of: `"half"`, `"full"`, `"oneHalf"`, `"double"`. Use `"half"` for cloistered/bookish classes, `"full"` for most martials, `"oneHalf"` for scouts/rangers, `"double"` for dedicated sentinels or tracker archetypes. |
| `armorProficiencies` | Use the typed union values; add custom strings only when necessary. |
| `weaponProficiencies` | Same rule. Avoid listing individual weapons unless the class is genuinely restricted. |
| `skillChoices.count` | Typically 2–4. |
| `skillChoices.options` | 6–10 thematically appropriate skills. |
| `startingEquipment` | 3–4 option strings, written as "X or Y" choices. |
| `levels` | Exactly 20 entries, one per level. See Progression Rules below. |
| `subclasses` | At least 1. See Subclass Rules below. |

## Progression Rules

### Proficiency Bonus

The proficiency bonus follows this fixed schedule — never deviate from it:

| Levels | Bonus |
|---|---|
| 1–4 | +2 |
| 5–8 | +3 |
| 9–12 | +4 |
| 13–16 | +5 |
| 17–20 | +6 |

### Ability Score Improvements (ASI)

Non-caster martials receive ASIs at levels 4, 6, 8, 12, 14, 16, 19 (7 total).
Full casters receive ASIs at levels 4, 8, 12, 16, 19 (5 total).
Half-casters (paladin-style) receive ASIs at levels 4, 8, 12, 16, 19 (5 total).

### Feature Density

- Level 1 must have at least 2 features (the class identity should be playable immediately).
- Avoid giving more than 3 significant features at any single level.
- Even-numbered levels without an ASI can have minor features or improvements to existing ones.
- Capstone (level 20) must include a named, impactful feature — not just an ASI.

### Subclass Integration

- Pick a level for subclass choice (typically 1, 2, or 3).
- Subclass features arrive at consistent intervals — usually 4 levels apart after the choice level (e.g. 3, 7, 10, 15, 18 or 1, 6, 11, 17).
- Reference the subclass feature in the `levels` array as `"<SubclassName> Feature"` or the generic `"<ArchetypeName> Feature"` if the subclass isn't chosen yet.

### Spell Slots (casters only)

- Full casters use the standard Wizard/Cleric slot progression.
- Half-casters use the standard Paladin/Ranger slot progression (first slots at level 2, 9th-level slots never reached).
- Populate `spellSlots` only on the `ClassLevel` entries where the class actually casts; leave it undefined for non-casting classes.
- Use the `extras` field for resources that aren't spell slots (ki points, rage uses, sorcery points, etc.).

## Subclass Rules

- Each subclass must have a `slug` (kebab-case), `name` (title-case), `choiceLevel`, `description` (2–3 sentences), and at least 4 `features`.
- Feature descriptions must be self-contained mechanical text — no cross-references like "see page X."
- Avoid repeating the same mechanical effect across multiple subclasses of the same class.
- A subclass's level 3 (or choice-level) feature must be strong enough to define the subclass identity.
- Provide at least 2 subclasses per class when possible.

## Balance Guidelines

These are not hard rules, but use them as a sanity check:

- **Martials** (fighter, barbarian, rogue-adjacent): higher HP, broader weapon access, limited or no spell slots. Their power comes from action economy and consistency.
- **Full casters** (wizard, cleric, druid-adjacent): d6–d8 hit die, limited armor, offset by high spell slot count and versatile spell lists.
- **Half-casters** (paladin, ranger-adjacent): medium HP, medium armor, limited spell slots supplemented by strong class features.
- A class should have a clear answer to: *"Why would a player choose this over an existing class?"* — whether that's a unique resource, a distinct combat role, or a thematic niche.
- Avoid features that grant automatic success (no saving throw, no roll required) except at very high levels.
- Healing features on non-healer classes should be minor and self-targeted only.

## Writing Style

- Feature names: title-case, evocative, 1–4 words. Avoid generic names like "Class Ability."
- Feature descriptions: concise and mechanical. One paragraph. Define all terms used. No flavor text in the description field — that belongs in the class `description` or MDX content.
- `description` field: 2–4 sentences of flavor. Present tense. Avoid starting with the class name.

## Checklist Before Submitting a Class

- [ ] Exactly 20 level entries with correct proficiency bonuses
- [ ] ASIs at correct levels for the class archetype
- [ ] At least 1 subclass with at least 4 features
- [ ] Subclass choice level referenced in the `levels` array
- [ ] File name matches `slug`
- [ ] Export added to `src/data/classes/index.ts`
- [ ] TypeScript compiles without errors (`npm run build`)
