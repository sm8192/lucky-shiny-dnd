"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SidebarEntry {
  slug: string;
  title: string;
  order: number;
}

interface RulesSidebarProps {
  entries: SidebarEntry[];
}

export default function RulesSidebar({ entries }: RulesSidebarProps) {
  const pathname = usePathname();
  const sorted = [...entries].sort((a, b) => a.order - b.order);

  return (
    <nav
      aria-label="Rules chapters"
      className="w-56 shrink-0 py-6 pr-4"
    >
      <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-widest text-stone-400">
        Chapters
      </p>
      <ul role="list" className="flex flex-col gap-0.5">
        {sorted.map(({ slug, title }) => {
          const href = `/rules/${slug}`;
          const isActive = pathname === href;

          return (
            <li key={slug}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "block rounded px-2 py-1.5 text-sm transition-colors",
                  isActive
                    ? "bg-amber-100 font-medium text-amber-900 dark:bg-amber-900/30 dark:text-amber-300"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100",
                ].join(" ")}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
