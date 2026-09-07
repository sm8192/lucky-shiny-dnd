import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StatBadge from "@/components/StatBadge";
import { allSpells } from "@/data/spells";

export function generateStaticParams() {
  return allSpells.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const spell = allSpells.find((s) => s.slug === slug);
  if (!spell) return {};
  return { title: spell.name, description: spell.description.slice(0, 160) };
}

export default async function SpellDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const spell = allSpells.find((s) => s.slug === slug);
  if (!spell) notFound();

  const levelLabel = spell.level === 0 ? "Cantrip" : `${ordinal(spell.level)}-level`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <PageHeader
        title={spell.name}
        description={`${levelLabel} ${spell.school}`}
        badge="Spell"
      />

      {/* Stat block */}
      <dl className="mb-6 grid grid-cols-2 gap-x-8 gap-y-3 rounded-lg border border-stone-200 bg-white p-4 text-sm dark:border-stone-700 dark:bg-stone-900 sm:grid-cols-3">
        <Stat label="Casting Time" value={spell.castingTime} />
        <Stat label="Range" value={spell.range} />
        <Stat label="Duration" value={spell.duration} />
        <Stat label="Components" value={spell.components.join(", ")} />
        {spell.materials && <Stat label="Materials" value={spell.materials} />}
        <Stat label="Concentration" value={spell.concentration ? "Yes" : "No"} />
        <Stat label="Ritual" value={spell.ritual ? "Yes" : "No"} />
        <Stat
          label="Classes"
          value={spell.classes.map(capitalize).join(", ")}
        />
      </dl>

      {/* Description */}
      <div className="prose prose-stone max-w-none dark:prose-invert">
        <p>{spell.description}</p>
        {spell.atHigherLevels && (
          <>
            <h3>At Higher Levels</h3>
            <p>{spell.atHigherLevels}</p>
          </>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-stone-400">
        {label}
      </dt>
      <dd className="mt-0.5 font-medium text-stone-800 dark:text-stone-200">
        {value}
      </dd>
    </div>
  );
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function ordinal(n: number) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] ?? suffixes[v] ?? suffixes[0]);
}
