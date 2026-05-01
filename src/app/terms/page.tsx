export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl font-heading font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Please read these terms of service carefully before using the AgentCraft AI Automations website or services.
          </p>
          <h2 className="text-2xl font-bold text-foreground mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
          </p>
          <h2 className="text-2xl font-bold text-foreground mt-8">2. Services</h2>
          <p>
            AgentCraft AI Automations provides custom AI agents, workflow automations, and consulting services. The specific deliverables, timelines, and costs for our services will be outlined in separate Statements of Work (SOW) or consulting agreements.
          </p>
          <h2 className="text-2xl font-bold text-foreground mt-8">3. Intellectual Property</h2>
          <p>
            The website and its original content, features, and functionality are owned by AgentCraft AI Automations and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            Ownership of custom code and systems developed for clients will be governed by the specific agreements signed with those clients.
          </p>
          <h2 className="text-2xl font-bold text-foreground mt-8">4. Limitation of Liability</h2>
          <p>
            In no event shall AgentCraft AI Automations, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
          <h2 className="text-2xl font-bold text-foreground mt-8">5. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at hello@agentcraftai.com.
          </p>
        </div>
      </div>
    </section>
  );
}
