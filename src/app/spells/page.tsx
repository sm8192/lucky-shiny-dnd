import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StatBadge from "@/components/StatBadge";
import { allSpells } from "@/data/spells";

export const metadata: Metadata = {
  title: "Spells",
  description: "Browse all spells in the rulebook.",
};

function levelLabel(level: number) {
  return level === 0 ? "Cantrip" : `Level ${level}`;
}

export default function SpellsIndexPage() {
  const sorted = [...allSpells].sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <PageHeader
        title="Spells"
        description={`${sorted.length} spells — sorted by level.`}
      />
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {sorted.map((spell) => (
          <li key={spell.slug}>
            <Link
              href={`/spells/${spell.slug}`}
              className="flex flex-col gap-2 rounded-lg border border-stone-200 bg-white p-4 transition-colors hover:border-amber-300 hover:bg-amber-50 dark:border-stone-700 dark:bg-stone-900 dark:hover:border-amber-600 dark:hover:bg-stone-800"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-semibold text-stone-900 dark:text-stone-100">
                  {spell.name}
                </span>
                {spell.concentration && (
                  <span className="shrink-0 rounded bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                    Conc.
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                <StatBadge label="Level" value={levelLabel(spell.level)} />
                <StatBadge label="School" value={spell.school} />
                <StatBadge label="Cast" value={spell.castingTime} />
              </div>
              <p className="line-clamp-2 text-xs text-stone-500 dark:text-stone-400">
                {spell.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
