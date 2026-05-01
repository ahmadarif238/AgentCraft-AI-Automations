import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgentCraft AI Automations | AI Agents & Workflow Automation",
  description: "AgentCraft AI Automations builds custom AI agents, workflow automations, RAG assistants, CRM automation, and intelligent business systems that help companies save time, reduce costs, and scale faster.",
  keywords: "AI automation agency, AI agents, workflow automation, business automation, RAG assistant, CRM automation, n8n automation, Zapier automation, Power Automate, LangGraph AI agents, custom AI assistants",
  openGraph: {
    title: "AgentCraft AI Automations",
    description: "Build Smarter Operations With Custom AI Agents.",
    url: "https://agentcraftai.com",
    siteName: "AgentCraft AI Automations",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased bg-background text-foreground`}
    >
      <body className="min-h-full flex flex-col pt-20">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
