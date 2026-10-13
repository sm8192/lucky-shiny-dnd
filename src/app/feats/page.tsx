import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StatBadge from "@/components/StatBadge";
import { allFeats } from "@/data/feats";
import type { FeatCategory } from "@/types/feat";

export const metadata: Metadata = {
  title: "Feats",
  description: "Browse all feats in the rulebook.",
};

function categoryLabel(category: FeatCategory) {
  switch (category) {
    case "general":
      return "General";
    case "fighting-style":
      return "Fighting Style";
    case "metamagic":
      return "Metamagic";
    case "epic":
      return "Epic";
  }
}

export default function FeatsIndexPage() {
  const sorted = [...allFeats].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <PageHeader
        title="Feats"
        description={`${sorted.length} feats — sorted alphabetically.`}
      />
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {sorted.map((feat) => (
          <li key={feat.slug}>
            <Link
              href={`/feats/${feat.slug}`}
              className="flex flex-col gap-2 rounded-lg border border-stone-200 bg-white p-4 transition-colors hover:border-amber-300 hover:bg-amber-50 dark:border-stone-700 dark:bg-stone-900 dark:hover:border-amber-600 dark:hover:bg-stone-800"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-semibold text-stone-900 dark:text-stone-100">
                  {feat.name}
                </span>
                {feat.repeatable && (
                  <span className="shrink-0 rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                    Repeatable
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                <StatBadge label="Category" value={categoryLabel(feat.category)} />
                {feat.prerequisite && (
                  <StatBadge label="Prereq" value={feat.prerequisite} />
                )}
              </div>
              <p className="line-clamp-2 text-xs text-stone-500 dark:text-stone-400">
                {feat.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
