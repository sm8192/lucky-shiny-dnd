import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { allMonsters } from "@/data/monsters";

export function generateStaticParams() {
  return allMonsters.map((m) => ({ slug: m.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const monster = allMonsters.find((m) => m.slug === slug);
  if (!monster) return {};
  return {
    title: monster.name,
    description:
      monster.description?.slice(0, 160) ??
      `${monster.size} ${monster.type}, CR ${monster.challengeRating}`,
  };
}

export default async function MonsterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = allMonsters.find((mon) => mon.slug === slug);
  if (!m) notFound();

  const abilityNames = ["STR", "DEX", "CON", "INT", "WIS", "CHA"] as const;
  const abilityKeys = ["str", "dex", "con", "int", "wis", "cha"] as const;

  function mod(score: number) {
    const n = Math.floor((score - 10) / 2);
    return n >= 0 ? `+${n}` : String(n);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <PageHeader
        title={m.name}
        description={`${capitalize(m.size)} ${m.type}${m.subtype ? ` (${m.subtype})` : ""}, ${m.alignment}`}
        badge="Monster"
      />

      {/* Core stats bar */}
      <div className="mb-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {abilityNames.map((name, i) => {
          const score = m.abilityScores[abilityKeys[i]];
          return (
            <div
              key={name}
              className="flex flex-col items-center rounded-lg border border-stone-200 bg-white py-2 dark:border-stone-700 dark:bg-stone-900"
            >
              <span className="text-xs font-bold uppercase text-stone-400">{name}</span>
              <span className="text-lg font-bold text-stone-900 dark:text-stone-100">{score}</span>
              <span className="text-xs text-stone-500 dark:text-stone-400">{mod(score)}</span>
            </div>
          );
        })}
      </div>

      {/* Stat block */}
      <div className="mb-6 rounded-lg border border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-stone-900">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:grid-cols-3">
          <StatRow label="Armor Class" value={`${m.armorClass}${m.armorType ? ` (${m.armorType})` : ""}`} />
          <StatRow label="Hit Points" value={`${m.hitPoints} (${m.hitDice})`} />
          <StatRow label="Speed" value={formatSpeed(m.speed)} />
          <StatRow label="Challenge" value={`${m.challengeRating} (${m.experiencePoints} XP)`} />
          {m.senses.darkvision && (
            <StatRow label="Darkvision" value={`${m.senses.darkvision} ft.`} />
          )}
          <StatRow label="Passive Perception" value={String(m.senses.passivePerception)} />
          <StatRow label="Languages" value={m.languages.join(", ") || "—"} />
        </dl>
        {m.skills && Object.keys(m.skills).length > 0 && (
          <div className="mt-3 border-t border-stone-100 pt-3 dark:border-stone-800">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Skills</p>
            <p className="mt-1 text-sm text-stone-700 dark:text-stone-300">
              {Object.entries(m.skills)
                .map(([skill, bonus]) => `${skill} ${bonus >= 0 ? "+" : ""}${bonus}`)
                .join(", ")}
            </p>
          </div>
        )}
        {m.conditionImmunities && m.conditionImmunities.length > 0 && (
          <div className="mt-3 border-t border-stone-100 pt-3 dark:border-stone-800">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Condition Immunities
            </p>
            <p className="mt-1 text-sm text-stone-700 dark:text-stone-300">
              {m.conditionImmunities.join(", ")}
            </p>
          </div>
        )}
      </div>

      {/* Traits */}
      {m.traits && m.traits.length > 0 && (
        <Section title="Traits">
          {m.traits.map((t) => (
            <FeatureBlock key={t.name} name={t.name} description={t.description} />
          ))}
        </Section>
      )}

      {/* Actions */}
      <Section title="Actions">
        {m.actions.map((a) => (
          <FeatureBlock key={a.name} name={a.name} description={a.description}>
            {(a.damage || a.reach || a.range) && (
              <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
                {[
                  a.damage && `Damage: ${a.damage} ${a.damageType ?? ""}`,
                  a.reach && `Reach: ${a.reach}`,
                  a.range && `Range: ${a.range}`,
                ]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            )}
          </FeatureBlock>
        ))}
      </Section>

      {/* Description */}
      {m.description && (
        <Section title="Description">
          <p className="text-sm text-stone-700 dark:text-stone-300">{m.description}</p>
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
    <section className="mb-6">
      <h2 className="mb-3 border-b border-amber-200 pb-1 text-lg font-bold text-amber-800 dark:border-amber-800 dark:text-amber-400">
        {title}
      </h2>
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-stone-400">{label}</dt>
      <dd className="mt-0.5 font-medium text-stone-800 dark:text-stone-200">{value}</dd>
    </div>
  );
}

function FeatureBlock({
  name,
  description,
  children,
}: {
  name: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-sm">
        <span className="font-semibold italic text-stone-800 dark:text-stone-200">
          {name}.{" "}
        </span>
        <span className="text-stone-700 dark:text-stone-300">{description}</span>
      </p>
      {children}
    </div>
  );
}

function formatSpeed(speed: { walk?: number; swim?: number; fly?: number; climb?: number; burrow?: number }) {
  return Object.entries(speed)
    .filter(([, v]) => v)
    .map(([k, v]) => (k === "walk" ? `${v} ft.` : `${k} ${v} ft.`))
    .join(", ");
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
