import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { allClasses } from "@/data/classes";
import type { ClassLevel, PerceptionProficiency } from "@/types/character-class";

export function generateStaticParams() {
  return allClasses.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cls = allClasses.find((c) => c.slug === slug);
  if (!cls) return {};
  return { title: cls.name, description: cls.description.slice(0, 160) };
}

export default async function ClassDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cls = allClasses.find((c) => c.slug === slug);
  if (!cls) notFound();

  const hasSpellSlots = cls.levels.some((l) => l.spellSlots);
  // Collect all spell slot levels actually used by this class
  const slotLevels = hasSpellSlots
    ? ([1, 2, 3, 4, 5, 6, 7, 8, 9] as const).filter((sl) =>
      cls.levels.some((l) => l.spellSlots?.[sl] !== undefined)
    )
    : [];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <PageHeader title={cls.name} description={cls.description} badge="Class" />

      {/* Quick stats */}
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
        <QuickStat label="Hit Die" value={cls.hitDie} />
        <QuickStat label="Saving Throws" value={cls.savingThrows.join(", ")} />
        <QuickStat label="Perception" value={perceptionLabel(cls.perception)} />
        <QuickStat label="Subclasses" value={String(cls.subclasses.length)} />
      </div>

      {/* Proficiencies */}
      <Section title="Proficiencies">
        <dl className="grid grid-cols-1 gap-y-3 text-sm sm:grid-cols-2">
          <ProfRow label="Armor" values={cls.armorProficiencies} />
          <ProfRow label="Weapons" values={cls.weaponProficiencies} />
          <div>
            <dt className="font-semibold text-stone-500 dark:text-stone-400">Perception</dt>
            <dd className="mt-0.5 text-stone-800 dark:text-stone-200">
              {perceptionLabel(cls.perception)}
            </dd>
          </div>
        </dl>
      </Section>

      {/* Level progression table */}
      <Section title="Level Progression">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200 dark:border-stone-700">
                <Th>Level</Th>
                <Th>Prof. Bonus</Th>
                <Th>Features</Th>
                {slotLevels.map((sl) => (
                  <Th key={sl}>{ordinal(sl)} Slots</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cls.levels.map((row) => (
                <LevelRow key={row.level} row={row} slotLevels={slotLevels} />
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Subclasses */}
      {cls.subclasses.length > 0 && (
        <Section title="Subclasses">
          <div className="flex flex-col gap-6">
            {cls.subclasses.map((sub) => (
              <div
                key={sub.slug}
                className="rounded-lg border border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900"
              >
                <div className="mb-1 flex items-baseline gap-3">
                  <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                    {sub.name}
                  </h3>
                  <span className="text-xs text-stone-400">
                    Chosen at level {cls.choiceLevel}
                  </span>
                </div>
                <p className="mb-4 text-sm text-stone-600 dark:text-stone-400">
                  {sub.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {sub.features.map((f) => (
                    <li key={f.name}>
                      <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">
                        Level {f.level}: {f.name}
                      </p>
                      <p className="text-sm text-stone-600 dark:text-stone-400">
                        {f.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-xl font-bold text-stone-900 dark:text-stone-100">
        {title}
      </h2>
      {children}
    </section>
  );
}

function QuickStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-stone-200 bg-white p-3 dark:border-stone-700 dark:bg-stone-900">
      <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
        {label}
      </p>
      <p className="mt-0.5 font-semibold text-stone-900 dark:text-stone-100">{value}</p>
    </div>
  );
}

function ProfRow({ label, values }: { label: string; values: string[] }) {
  return (
    <div>
      <dt className="font-semibold text-stone-500 dark:text-stone-400">{label}</dt>
      <dd className="mt-0.5 text-stone-800 dark:text-stone-200">
        {values.length > 0 ? values.join(", ") : "None"}
      </dd>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-2 py-2 text-left text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
      {children}
    </th>
  );
}

function LevelRow({
  row,
  slotLevels,
}: {
  row: ClassLevel;
  slotLevels: readonly (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9)[];
}) {
  return (
    <tr className="border-b border-stone-100 text-sm even:bg-stone-50 dark:border-stone-800 dark:even:bg-stone-900/50">
      <td className="px-2 py-1.5 font-medium text-stone-700 dark:text-stone-300">
        {row.level}
      </td>
      <td className="px-2 py-1.5 text-stone-600 dark:text-stone-400">
        +{Math.ceil(row.level / 4) + 1}
      </td>
      <td className="px-2 py-1.5 text-stone-600 dark:text-stone-400">
        {row.features.length > 0 ? row.features.join(", ") : "—"}
      </td>
      {slotLevels.map((sl) => (
        <td
          key={sl}
          className="px-2 py-1.5 text-center text-stone-600 dark:text-stone-400"
        >
          {row.spellSlots?.[sl] ?? "—"}
        </td>
      ))}
    </tr>
  );
}

function ordinal(n: number) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] ?? suffixes[v] ?? suffixes[0]);
}

function perceptionLabel(p: PerceptionProficiency): string {
  switch (p) {
    case ".5": return "½ proficiency";
    case "1": return "Full proficiency";
    case "1.5": return "1½× proficiency";
    case "2": return "Double proficiency";
  }
}
