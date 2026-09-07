import Link from "next/link";
import type { Metadata } from "next";
import { getRuleSidebarEntries } from "@/lib/rules";
import { allClasses } from "@/data/classes";
import { allSpells } from "@/data/spells";
import { allMonsters } from "@/data/monsters";

export const metadata: Metadata = {
  title: "Home",
  description: "A complete online reference for the rules, classes, spells, and monsters.",
};

const sections = [
  {
    href: "/rules",
    label: "Rules",
    emoji: "📜",
    description: "Core rules, combat, exploration, and more.",
    getCount: () => getRuleSidebarEntries().length,
  },
  {
    href: "/classes",
    label: "Classes",
    emoji: "⚔️",
    description: "Class features, progression tables, and subclasses.",
    getCount: () => allClasses.length,
  },
  {
    href: "/spells",
    label: "Spells",
    emoji: "✨",
    description: "Full spell listings with stat blocks and descriptions.",
    getCount: () => allSpells.length,
  },
  {
    href: "/monsters",
    label: "Monsters",
    emoji: "🐉",
    description: "Bestiary entries with full stat blocks.",
    getCount: () => allMonsters.length,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="border-b border-stone-200 bg-stone-900 py-20 text-center dark:border-stone-800">
        <p className="mb-3 text-4xl">📖</p>
        <h1 className="text-4xl font-extrabold tracking-tight text-stone-100 sm:text-5xl">
          The Rulebook
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-stone-400">
          A complete online reference for rules, classes, spells, and monsters.
          Built for the table, readable anywhere.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/rules"
            className="rounded-lg bg-amber-500 px-5 py-2.5 font-semibold text-stone-900 transition-colors hover:bg-amber-400"
          >
            Start Reading
          </Link>
          <Link
            href="/classes"
            className="rounded-lg border border-stone-600 px-5 py-2.5 font-semibold text-stone-300 transition-colors hover:border-stone-400 hover:text-stone-100"
          >
            Browse Classes
          </Link>
        </div>
      </section>

      {/* Section cards */}
      <section className="mx-auto w-full max-w-5xl px-4 py-12">
        <h2 className="mb-6 text-xl font-bold text-stone-700 dark:text-stone-300">
          What&apos;s inside
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {sections.map(({ href, label, emoji, description, getCount }) => {
            const count = getCount();
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="flex h-full flex-col gap-3 rounded-xl border border-stone-200 bg-white p-5 transition-colors hover:border-amber-300 hover:bg-amber-50 dark:border-stone-700 dark:bg-stone-900 dark:hover:border-amber-700 dark:hover:bg-stone-800"
                >
                  <span className="text-3xl" aria-hidden="true">
                    {emoji}
                  </span>
                  <div>
                    <p className="font-bold text-stone-900 dark:text-stone-100">
                      {label}
                      <span className="ml-2 text-sm font-normal text-stone-400">
                        ({count})
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                      {description}
                    </p>
                  </div>
                  <span className="mt-auto text-xs font-medium text-amber-600 dark:text-amber-400">
                    Browse →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Quick-start tip */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-12">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/50 dark:bg-amber-950/30">
          <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">
            💡 Adding content
          </p>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
            New rule chapters go in{" "}
            <code className="rounded bg-amber-100 px-1 dark:bg-amber-900/50">
              src/content/rules/
            </code>{" "}
            as <code className="rounded bg-amber-100 px-1 dark:bg-amber-900/50">.mdx</code> files.
            New spells, classes, and monsters go in the matching{" "}
            <code className="rounded bg-amber-100 px-1 dark:bg-amber-900/50">src/data/</code>{" "}
            subfolder — add the export to the index barrel and it appears automatically.
          </p>
        </div>
      </section>
    </div>
  );
}
