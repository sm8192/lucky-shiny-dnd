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
| `hitDie` | Use the typed union values. More durable classes use a larger die. |
| `savingThrow` | Use the typed union values. Choose the one that best matches the class's fantasy. |
| `perception` | Use the typed union values. Higher values are for classes that are better at scouting and using their senses.|
| `armorProficiency` | Use the typed union values. More martially inclined classes should generally have heavier armor proficiency. Each category includes armor of lighter categories as well.|
| `weaponProficiency` | Same rule. More weapon-oriented classes should use martial.|
| `shieldProficiency` | True or false. Shields are reserved for certain martial classes.|
| `levels` | Exactly 20 entries, one per level. See Progression Rules below. |
| `choiceLevel` | Determines at which level characters of that class choose their subclass, which impacts the number and levels of subclass features.|
| `subclasses` | At least 4. See Subclass Rules below. |
| `expertise` | Each class has two categories of expertise: exploration and social. These represent situations in which characters of that class are expected to excel, and take the form of a "when" condition that describes the situation.|
| `spellcasting` | This field is "none" for non-casting classes,  "half" for classes that mix martial weaponry and spellcasting, and either "full" or "pact" for classes that rely primarily on spellcasting. Spellcasters with "pact" are unusual casters with a different approach to magic.|


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

### Feats

Characters select two eligible feats at level 1, and then choose additional feats at levels 4, 8, 12, and 16. At level 20, characters may choose either a normal feat or a special 'Capstone' feat.

### Feature Density

- Level 1 must have at least 2 features (the class identity should be playable immediately).
- Levels 1 - 3 contain the key identifying features of the class.
- Levels 1, 5, 11, and 17 should give characters a significant benefit that is useful in combat.
- Level 19 should give each class a powerful feature that represents the full might of that class.
- Avoid giving more than 3 significant features at any single level.
- Classes should generally include some feature on each level unless the class gets a subclass feature at that level, according to the rules below.

### Subclass Integration

- Each class has a choiceLevel of 1, 2, or 3.
- Classes with a choiceLevel 1 have subclass features at levels 1, 5, 9, 11, 15, and 19.
- Classes with a choiceLevel 2 have subclass features at levels 2, 6, 10, 14, and 18.
- Classes with a choiceLevel 3 have subclass features at levels 3, 7, 13, and 17.
- Reference the subclass feature in the `levels` array as `"<SubclassName> Feature"` or the generic `"<ArchetypeName> Feature"` if the subclass isn't chosen yet.

### Other Features

- Use the `extras` field for resources that aren't spell slots (ki points, rage uses, sorcery points, etc.).
- Martial Characters should get access to the Extra Attack feature at least once.

## Subclass Rules

- Each subclass must have a `slug` (kebab-case), `name` (title-case),  `description` (2–3 sentences), and at least 4 `features`.
- Feature descriptions must be self-contained mechanical text — no cross-references like "see page X."
- Avoid repeating the same mechanical effect across multiple subclasses of the same class.
- A subclass's first feature must be strong enough to define the subclass identity.
- Provide at least 4 subclasses per class when possible.

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
