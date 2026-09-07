import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StatBadge from "@/components/StatBadge";
import { allMonsters } from "@/data/monsters";

export const metadata: Metadata = {
  title: "Monsters",
  description: "Browse all monsters in the bestiary.",
};

export default function MonstersIndexPage() {
  const sorted = [...allMonsters].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <PageHeader
        title="Monsters"
        description={`${sorted.length} monsters in the bestiary.`}
      />
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {sorted.map((monster) => (
          <li key={monster.slug}>
            <Link
              href={`/monsters/${monster.slug}`}
              className="flex flex-col gap-2 rounded-lg border border-stone-200 bg-white p-4 transition-colors hover:border-amber-300 hover:bg-amber-50 dark:border-stone-700 dark:bg-stone-900 dark:hover:border-amber-600 dark:hover:bg-stone-800"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-semibold text-stone-900 dark:text-stone-100">
                  {monster.name}
                </span>
                <span className="shrink-0 text-xs text-stone-400 dark:text-stone-500">
                  CR {monster.challengeRating}
                </span>
              </div>
              <p className="text-xs capitalize text-stone-500 dark:text-stone-400">
                {monster.size} {monster.type}
                {monster.subtype ? ` (${monster.subtype})` : ""},{" "}
                {monster.alignment}
              </p>
              <div className="flex flex-wrap gap-1.5">
                <StatBadge label="AC" value={monster.armorClass} />
                <StatBadge label="HP" value={monster.hitPoints} />
                <StatBadge
                  label="Speed"
                  value={`${monster.speed.walk ?? 0} ft.`}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
