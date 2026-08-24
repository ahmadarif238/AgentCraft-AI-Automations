import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/**
 * Next merges `metadata` shallowly, so a page that declares its own
 * `openGraph` replaces the layout's entirely — including the image. Building
 * page metadata through this helper keeps the OG card attached to every route.
 */
export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — AI Agents & Workflow Automation`,
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
      // Point assistants and AI crawlers at the clean markdown mirror of this
      // page rather than making them parse the rendered markup.
      types: { "text/markdown": path === "/" ? "/index.md" : `${path}.md` },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.shortName}`,
      description,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.shortName}`,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
