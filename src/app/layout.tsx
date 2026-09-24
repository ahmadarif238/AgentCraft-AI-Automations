import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { siteConfig } from "@/config/site";
import { faqs } from "@/data/faqs";
import "./globals.css";

// Inter Tight for display type, Inter for reading, Geist Mono for the small
// technical labels and buttons.
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Search Console shows the verification token wrapped in a full `<meta>` tag,
 * so it is easy to paste the whole fragment into the environment variable.
 * Next wants the bare token, and a wrapped value silently produces a tag that
 * never verifies. Accept either form rather than making that a support issue.
 */
function googleVerificationToken(): string | undefined {
  const raw = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  if (!raw) return undefined;
  const wrapped = raw.match(/content=["']([^"']+)["']/i);
  return (wrapped ? wrapped[1] : raw).replace(/["'/>\s]+$/g, "").trim() || undefined;
}

const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name}: Software Development and AI Agents`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Software Development and AI Agents`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.founderName }],
  creator: siteConfig.founderName,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | Software Development and AI Agents`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Software Development and AI Agents`,
    description: siteConfig.description,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  // Icons come from the app/icon.png, app/apple-icon.png and app/favicon.ico
  // file conventions, which are the square "A" mark rather than the wide lockup.

  // Google Search Console ownership; omitted when unset so no empty meta tag
  // is emitted. See googleVerificationToken() for why the value is sanitised.
  ...(googleVerificationToken() && {
    verification: { google: googleVerificationToken() },
  }),
};

export const viewport: Viewport = {
  themeColor: "#050A1A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/logo/logo.png`,
        description: siteConfig.description,
        founder: { "@type": "Person", name: siteConfig.founderName, jobTitle: siteConfig.founderTitle },
        sameAs: [
          siteConfig.links.linkedinCompany,
          siteConfig.links.linkedin,
          siteConfig.links.github,
          siteConfig.links.twitter,
        ].filter(Boolean),
        ...(siteConfig.email && { email: siteConfig.email }),
        ...(siteConfig.phone && { telephone: siteConfig.phone }),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: siteConfig.name,
        image: `${siteConfig.url}/og-image.png`,
        url: siteConfig.url,
        parentOrganization: { "@id": `${siteConfig.url}/#organization` },
        priceRange: "$$",
        serviceType: [
          "Website development",
          "Web application development",
          "Mobile app development",
          "SaaS product development",
          "UI and UX design",
          "AI agent development",
          "Workflow automation",
          "RAG and knowledge systems",
          "CRM and lead automation",
          "API and data integration",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressCountry: siteConfig.location.countryCode,
        },
        // Delivery is remote, so the served area is global rather than a local radius.
        areaServed: { "@type": "Place", name: "Worldwide" },
        ...(siteConfig.phone && { telephone: siteConfig.phone }),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "en",
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${geistMono.variable} h-full antialiased bg-background text-foreground`}
    >
      <body id="top" className="min-h-full flex flex-col relative">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <WhatsAppFab />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
