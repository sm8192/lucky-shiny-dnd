import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ruleSlugs, getRuleMetadata } from "@/lib/rules";

// Tell Next.js which slugs to pre-render at build time.
export function generateStaticParams() {
  return ruleSlugs.map((slug) => ({ slug }));
}

// Opt out of dynamic fallback — any unknown slug is a 404.
export const dynamicParams = false;

// Generate per-page <title> and <meta description> from the registry.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getRuleMetadata(slug);
  if (!meta) return {};
  return { title: meta.title, description: meta.description };
}

export default async function RuleChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Validate the slug against the registry before attempting the dynamic import.
  const meta = getRuleMetadata(slug);
  if (!meta) notFound();

  // Dynamically import the MDX component for this chapter.
  const { default: Chapter } = (await import(
    `@/content/rules/${slug}.mdx`
  )) as { default: React.ComponentType };

  return (
    <article className="prose prose-stone max-w-none dark:prose-invert prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-table:text-sm">
      <Chapter />
    </article>
  );
}
