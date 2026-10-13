import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { allFeats } from "@/data/feats";
import type { FeatCategory } from "@/types/feat";

export function generateStaticParams() {
  return allFeats.map((f) => ({ slug: f.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feat = allFeats.find((f) => f.slug === slug);
  if (!feat) return {};
  return { title: feat.name, description: feat.description.slice(0, 160) };
}

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

export default async function FeatDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feat = allFeats.find((f) => f.slug === slug);
  if (!feat) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <PageHeader
        title={feat.name}
        description={categoryLabel(feat.category)}
        badge="Feat"
      />

      {/* Stat block */}
      <dl className="mb-6 grid grid-cols-2 gap-x-8 gap-y-3 rounded-lg border border-stone-200 bg-white p-4 text-sm dark:border-stone-700 dark:bg-stone-900 sm:grid-cols-3">
        <Stat label="Category" value={categoryLabel(feat.category)} />
        <Stat label="Prerequisite" value={feat.prerequisite ?? "None"} />
        <Stat label="Repeatable" value={feat.repeatable ? "Yes" : "No"} />
      </dl>

      {/* Description */}
      <div className="prose prose-stone max-w-none dark:prose-invert">
        <p>{feat.description}</p>
        <h3>Benefits</h3>
        <ul>
          {feat.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-stone-400">
        {label}
      </dt>
      <dd className="mt-0.5 font-medium text-stone-800 dark:text-stone-200">
        {value}
      </dd>
    </div>
  );
}
