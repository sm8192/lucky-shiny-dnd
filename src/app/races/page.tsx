import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StatBadge from "@/components/StatBadge";
import { allRaces } from "@/data/races";

export const metadata: Metadata = {
  title: "Races",
  description: "Browse all character races.",
};

export default function RacesIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <PageHeader
        title="Races"
        description={`${allRaces.length} races available.`}
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {allRaces.map((race) => (
          <li key={race.slug}>
            <Link
              href={`/races/${race.slug}`}
              className="flex flex-col gap-3 rounded-lg border border-stone-200 bg-white p-5 transition-colors hover:border-amber-300 hover:bg-amber-50 dark:border-stone-700 dark:bg-stone-900 dark:hover:border-amber-600 dark:hover:bg-stone-800"
            >
              <span className="text-lg font-bold text-stone-900 dark:text-stone-100">
                {race.name}
              </span>
              <div className="flex flex-wrap gap-1.5">
                <StatBadge label="Size" value={capitalize(race.size)} />
                <StatBadge label="Speed" value={`${race.speed} ft.`} />
              </div>
              <p className="line-clamp-3 text-sm text-stone-500 dark:text-stone-400">
                {race.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
