import RulesSidebar from "@/components/RulesSidebar";
import { getRuleSidebarEntries } from "@/lib/rules";

export default function RulesLayout({ children }: LayoutProps<"/rules">) {
  const entries = getRuleSidebarEntries();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 gap-8 px-4 py-8">
      <RulesSidebar entries={entries} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
