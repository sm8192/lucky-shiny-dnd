export type FeatCategory = "general" | "fighting-style" | "metamagic" | "epic";

export interface Feat {
  /** Unique URL-safe identifier, e.g. "great-weapon-master" */
  slug: string;
  name: string;
  category: FeatCategory;
  /** Prerequisite text, if any (e.g. "Strength 13 or higher"). */
  prerequisite?: string;
  /** Whether the feat can be taken more than once. */
  repeatable: boolean;
  /** Short summary used on the listing cards. */
  description: string;
  /** The individual benefits granted by the feat. */
  benefits: string[];
}
