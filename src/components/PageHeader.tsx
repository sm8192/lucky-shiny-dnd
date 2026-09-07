interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
}

/**
 * Reusable page-level heading used across listing pages (Spells, Classes, etc.)
 * and individual detail pages.
 */
export default function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <div className="mb-8 border-b border-stone-200 pb-6 dark:border-stone-700">
      {badge && (
        <span className="mb-2 inline-block rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
          {badge}
        </span>
      )}
      <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
        {title}
      </h1>
      {description && (
        <p className="mt-2 text-base text-stone-500 dark:text-stone-400">
          {description}
        </p>
      )}
    </div>
  );
}
