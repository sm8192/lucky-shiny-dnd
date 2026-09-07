"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rules", label: "Rules" },
  { href: "/classes", label: "Classes" },
  { href: "/spells", label: "Spells" },
  { href: "/monsters", label: "Monsters" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-900 text-stone-100 dark:border-stone-700">
      <nav
        className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="mr-4 text-lg font-bold tracking-tight text-amber-400 hover:text-amber-300"
        >
          📖 Rulebook
        </Link>

        <ul className="flex gap-1" role="list">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(href + "/");

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-amber-500 text-stone-900"
                      : "text-stone-300 hover:bg-stone-700 hover:text-stone-100",
                  ].join(" ")}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
