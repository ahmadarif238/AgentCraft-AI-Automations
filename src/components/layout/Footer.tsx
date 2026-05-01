import Link from "next/link";
import { BrainCircuit, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-8 h-8 rounded bg-background/10 border border-border group-hover:border-primary transition-colors">
                <BrainCircuit className="w-4 h-4 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-base leading-none tracking-tight">
                  AgentCraft
                </span>
                <span className="text-[9px] uppercase tracking-widest text-primary font-semibold">
                  AI Automations
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              We build custom AI agents, workflow automations, and intelligent business systems that save time, reduce costs, and help companies operate smarter.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="https://linkedin.com/company/agentcraft-ai-automations" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:hello@agentcraftai.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-lg">Services</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/services#workflow-automation" className="hover:text-primary transition-colors">Workflow Automation</Link></li>
              <li><Link href="/services#ai-agents" className="hover:text-primary transition-colors">AI Agents Development</Link></li>
              <li><Link href="/services#rag-systems" className="hover:text-primary transition-colors">RAG & Knowledge Systems</Link></li>
              <li><Link href="/services#crm-automation" className="hover:text-primary transition-colors">CRM & Lead Automation</Link></li>
              <li><Link href="/services#data-integration" className="hover:text-primary transition-colors">Data Integration & APIs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-lg">Company</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/use-cases" className="hover:text-primary transition-colors">Use Cases</Link></li>
              <li><Link href="/process" className="hover:text-primary transition-colors">Our Process</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing & Packages</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-lg">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>hello@agentcraftai.com</li>
              <li>www.agentcraftai.com</li>
              <li>Remote-first / Worldwide Services</li>
            </ul>
            <div className="mt-4 flex flex-col gap-2 text-xs text-muted-foreground/60">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} AgentCraft AI Automations. All rights reserved.</p>
          <p>Automate. Intelligently. Scale Limitlessly.</p>
        </div>
      </div>
    </footer>
  );
}
