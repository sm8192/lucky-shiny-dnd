interface StatBadgeProps {
  label: string;
  value: string | number;
}

/**
 * Small pill used to display key stats inline on listing cards
 * (e.g. spell level, CR, hit die).
 */
export default function StatBadge({ label, value }: StatBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded border border-stone-200 bg-stone-50 px-1.5 py-0.5 text-xs dark:border-stone-700 dark:bg-stone-800">
      <span className="font-medium text-stone-500 dark:text-stone-400">{label}</span>
      <span className="font-semibold text-stone-800 dark:text-stone-200">{value}</span>
    </span>
  );
}
