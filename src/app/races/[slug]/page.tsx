import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { allRaces } from "@/data/races";
import type { AbilityScoreIncrease, RacialTrait, Subrace } from "@/types/race";

export function generateStaticParams() {
  return allRaces.map((r) => ({ slug: r.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const race = allRaces.find((r) => r.slug === slug);
  if (!race) return {};
  return { title: race.name, description: race.description.slice(0, 160) };
}

export default async function RaceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const race = allRaces.find((r) => r.slug === slug);
  if (!race) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <PageHeader title={race.name} description={race.description} badge="Race" />

      {/* Quick stats */}
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <QuickStat label="Size" value={capitalize(race.size)} />
        <QuickStat label="Speed" value={`${race.speed} ft.`} />
        <QuickStat
          label="Ability Scores"
          value={formatIncreases(race.abilityScoreIncreases)}
        />
        <QuickStat label="Subraces" value={String(race.subraces.length)} />
      </div>

      {/* Traits */}
      <Section title="Racial Traits">
        <dl className="grid grid-cols-1 gap-y-3 text-sm">
          <div>
            <dt className="font-semibold text-stone-500 dark:text-stone-400">
              Ability Score Increase
            </dt>
            <dd className="mt-0.5 text-stone-800 dark:text-stone-200">
              {formatIncreases(race.abilityScoreIncreases)}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-stone-500 dark:text-stone-400">
              Languages
            </dt>
            <dd className="mt-0.5 text-stone-800 dark:text-stone-200">
              {race.languages.join(", ")}
            </dd>
          </div>
        </dl>
        <ul className="mt-4 flex flex-col gap-3">
          {race.traits.map((trait) => (
            <TraitItem key={trait.name} trait={trait} />
          ))}
        </ul>
      </Section>

      {/* Subraces */}
      {race.subraces.length > 0 && (
        <Section title="Subraces">
          <div className="flex flex-col gap-6">
            {race.subraces.map((sub) => (
              <SubraceCard key={sub.slug} subrace={sub} />
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

function TraitItem({ trait }: { trait: RacialTrait }) {
  return (
    <li>
      <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">
        {trait.name}
      </p>
      <p className="text-sm text-stone-600 dark:text-stone-400">
        {trait.description}
      </p>
    </li>
  );
}

function SubraceCard({ subrace }: { subrace: Subrace }) {
  return (
    <div className="rounded-lg border border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900">
      <h3 className="mb-1 text-base font-bold text-stone-900 dark:text-stone-100">
        {subrace.name}
      </h3>
      <p className="mb-3 text-sm text-stone-600 dark:text-stone-400">
        {subrace.description}
      </p>
      {subrace.abilityScoreIncreases.length > 0 && (
        <p className="mb-4 text-sm text-stone-600 dark:text-stone-400">
          <span className="font-semibold text-stone-500 dark:text-stone-400">
            Ability Score Increase:{" "}
          </span>
          {formatIncreases(subrace.abilityScoreIncreases)}
        </p>
      )}
      <ul className="flex flex-col gap-3">
        {subrace.traits.map((trait) => (
          <TraitItem key={trait.name} trait={trait} />
        ))}
      </ul>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatIncreases(increases: AbilityScoreIncrease[]): string {
  if (increases.length === 0) return "None";
  return increases
    .map((inc) => `${inc.ability} +${inc.bonus}`)
    .join(", ");
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
