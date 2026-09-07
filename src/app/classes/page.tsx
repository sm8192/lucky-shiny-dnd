import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StatBadge from "@/components/StatBadge";
import { allClasses } from "@/data/classes";

export const metadata: Metadata = {
  title: "Classes",
  description: "Browse all character classes.",
};

export default function ClassesIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <PageHeader
        title="Classes"
        description={`${allClasses.length} classes available.`}
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {allClasses.map((cls) => (
          <li key={cls.slug}>
            <Link
              href={`/classes/${cls.slug}`}
              className="flex flex-col gap-3 rounded-lg border border-stone-200 bg-white p-5 transition-colors hover:border-amber-300 hover:bg-amber-50 dark:border-stone-700 dark:bg-stone-900 dark:hover:border-amber-600 dark:hover:bg-stone-800"
            >
              <span className="text-lg font-bold text-stone-900 dark:text-stone-100">
                {cls.name}
              </span>
              <div className="flex flex-wrap gap-1.5">
                <StatBadge label="Hit Die" value={cls.hitDie} />
                <StatBadge
                  label="Primary"
                  value={cls.primaryAbility.join(" / ")}
                />
                <StatBadge
                  label="Saves"
                  value={cls.savingThrows.join(", ")}
                />
              </div>
              <p className="line-clamp-3 text-sm text-stone-500 dark:text-stone-400">
                {cls.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
