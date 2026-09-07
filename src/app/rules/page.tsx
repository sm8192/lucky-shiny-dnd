import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { getRuleSidebarEntries } from "@/lib/rules";

export const metadata: Metadata = {
  title: "Rules",
  description: "Browse all rule chapters.",
};

export default function RulesIndexPage() {
  const chapters = getRuleSidebarEntries();

  return (
    <div>
      <PageHeader
        title="Rules"
        description="Select a chapter to read the full text."
      />
      <ul className="grid gap-3 sm:grid-cols-2" role="list">
        {chapters.map(({ slug, title, order }) => (
          <li key={slug}>
            <Link
              href={`/rules/${slug}`}
              className="flex items-start gap-4 rounded-lg border border-stone-200 bg-white p-4 transition-colors hover:border-amber-300 hover:bg-amber-50 dark:border-stone-700 dark:bg-stone-900 dark:hover:border-amber-600 dark:hover:bg-stone-800"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded bg-amber-100 text-sm font-bold text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                {order}
              </span>
              <span className="font-medium text-stone-800 dark:text-stone-200">
                {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
