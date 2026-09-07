import type { MDXComponents } from "mdx/types";

/**
 * Global MDX component overrides.
 * Every MDX file in the app uses these mappings when rendering
 * standard markdown elements. Add custom components here to apply
 * consistent styling or behaviour across all content pages.
 */
const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return components;
}
