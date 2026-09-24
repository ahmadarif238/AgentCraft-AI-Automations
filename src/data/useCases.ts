import {
  Smile,
  Scale,
  Stethoscope,
  UtensilsCrossed,
  Truck,
  GraduationCap,
  UserSearch,
  Wrench,
  Megaphone,
  Briefcase,
  Calculator,
  Building2,
  Code2,
  ShoppingCart,
  type LucideIcon
} from "lucide-react";

export interface IndustryUseCase {
  /** Anchor target, so the home page can link straight to this industry's card. */
  id: string;
  industry: string;
  /** Carried here rather than in the components, so both pages show the same mark. */
  icon: LucideIcon;
  /** One line, for the compact home page row where the full description is too long. */
  summary: string;
  description: string;
  /** The software side: the websites, apps and portals we would build. */
  builds: string[];
  /** The AI and automation side: the workflows that run inside them. */
  workflows: string[];
  before: string;
  after: string;
  tools: string[];
  /** Concept visual under /images/use-cases/, 1600x1000. */
  image: string;
  /** What the visual shows, used as its caption. */
  visual: string;
}

type Entry = Omit<IndustryUseCase, "image">;

const entries: Entry[] = [
  {
    id: "dental-clinics",
    industry: "Dental Clinics",
    icon: Smile,
    summary: "A booking website and an AI receptionist that never misses a call.",
    description: "Fill the chair, cut no shows and stop losing new patients to voicemail, with a modern clinic website and an AI receptionist working behind it.",
    builds: [
      "Clinic website with live online booking",
      "Patient portal for forms, treatment plans and payments",
      "Staff dashboard for the day's schedule and recalls"
    ],
    workflows: [
      "AI receptionist that answers calls and chats and books appointments",
      "Automated reminders and recall messages over WhatsApp and SMS",
      "Digital intake forms synced to your practice software",
      "Review requests sent after every visit"
    ],
    before: "Front desk juggling phones, missed calls after hours, empty slots from no shows and recall lists nobody has time to work through.",
    after: "Every enquiry answered and booked around the clock, reminders sent automatically, and recalls filling the quiet days.",
    tools: ["Next.js", "Twilio", "WhatsApp API", "Google Calendar"],
    visual: "Website and AI receptionist"
  },
  {
    id: "law-firms",
    industry: "Law Firms",
    icon: Scale,
    summary: "Client intake, document review and deadlines, handled with care.",
    description: "Give clients a proper portal and give your team an assistant that reads documents, pulls out dates and keeps every matter on schedule.",
    builds: [
      "Client intake portal with secure document upload",
      "Matter dashboard for status, tasks and billing",
      "Firm website built to turn searches into consultations"
    ],
    workflows: [
      "AI review of contracts and case files against your playbook",
      "Key date and deadline extraction into the firm calendar",
      "Conflict checks run on every new enquiry",
      "Drafted client updates for a lawyer to approve"
    ],
    before: "Intake by email and phone, associates reading hundreds of pages to find a clause, and deadlines tracked in personal calendars.",
    after: "Structured intake, first pass document review in minutes, and every deadline captured and visible to the whole team.",
    tools: ["Next.js", "Clio", "LangChain", "Microsoft 365"],
    visual: "Client portal and AI document review"
  },
  {
    id: "healthcare-clinics",
    industry: "Healthcare Clinics",
    icon: Stethoscope,
    summary: "A patient app and an inbox that sorts itself by urgency.",
    description: "Give patients an app for appointments, results and messages, and give staff an AI assistant that triages the inbox so urgent cases are seen first.",
    builds: [
      "Patient mobile app for iOS and Android",
      "Clinic admin web app for appointments and messages",
      "Online booking wired into your existing system"
    ],
    workflows: [
      "AI triage of patient messages by urgency",
      "Drafted replies that staff review and send",
      "Automated appointment reminders and follow up care",
      "Prescription renewal requests routed to the right clinician"
    ],
    before: "Phone lines jammed every morning, a shared inbox where urgent messages sit next to routine ones, and staff retyping the same answers.",
    after: "Patients book and message from their phone, the inbox arrives sorted by urgency, and routine replies are drafted before anyone opens them.",
    tools: ["React Native", "Next.js", "Supabase", "OpenAI"],
    visual: "Patient app and AI triage"
  },
  {
    id: "restaurants-hospitality",
    industry: "Restaurants and Hospitality",
    icon: UtensilsCrossed,
    summary: "Online orders and reservations, with an AI host on WhatsApp.",
    description: "Take orders and bookings on your own website instead of paying marketplace commission, with an AI host answering on WhatsApp and the phone.",
    builds: [
      "Ordering and reservations website on your own domain",
      "Kitchen display and order management app",
      "Loyalty and repeat order flows for regulars"
    ],
    workflows: [
      "AI host taking reservations and orders over WhatsApp",
      "Order totals always priced from your live menu",
      "Demand insights for prep and staffing",
      "Automated feedback requests after each visit"
    ],
    before: "Orders lost in chat threads, double booked tables, marketplace fees on every order and no record of who your regulars are.",
    after: "Direct orders on your own site, bookings confirmed instantly, and a clear view of what sells and when.",
    tools: ["Next.js", "Stripe", "WhatsApp API", "Supabase"],
    visual: "Ordering app and AI host"
  },
  {
    id: "logistics-transport",
    industry: "Logistics and Transport",
    icon: Truck,
    summary: "Dispatch, driver apps and delay alerts that go out on their own.",
    description: "Run dispatch from one dashboard, give drivers an app that fits their day, and let AI spot delays early and keep customers informed.",
    builds: [
      "Dispatch dashboard with live routes and job status",
      "Driver mobile app with stops, proof of delivery and chat",
      "Customer tracking page for every shipment"
    ],
    workflows: [
      "AI delay prediction from traffic, weather and history",
      "Automatic customer updates when an ETA changes",
      "Route planning suggestions for the next day",
      "Proof of delivery synced to invoicing"
    ],
    before: "Dispatchers phoning drivers for updates, customers calling to ask where their delivery is, and paperwork chased at month end.",
    after: "Every job visible live, customers told about delays before they ask, and delivery proof flowing straight to billing.",
    tools: ["React Native", "Google Maps API", "FastAPI", "PostgreSQL"],
    visual: "Dispatch app and delay prediction"
  },
  {
    id: "education-training",
    industry: "Education and Training",
    icon: GraduationCap,
    summary: "A learning platform with an AI tutor that knows your course.",
    description: "Launch courses on your own platform and give every learner a tutor that answers from your material, day or night.",
    builds: [
      "Learning platform with courses, quizzes and certificates",
      "Student and parent mobile app",
      "Admin dashboard for cohorts, payments and progress"
    ],
    workflows: [
      "AI tutor answering from your own course material",
      "Assisted grading with feedback for teachers to approve",
      "Early warnings for students falling behind",
      "Automated enrolment, reminders and certificates"
    ],
    before: "Courses scattered across tools, the same questions answered by instructors every evening, and grading that eats the weekend.",
    after: "One branded platform, learners unblocked instantly by the AI tutor, and grading drafts ready for review.",
    tools: ["Next.js", "Stripe", "Pinecone", "OpenAI"],
    visual: "Learning platform and AI tutor"
  },
  {
    id: "recruitment-hr",
    industry: "Recruitment and HR",
    icon: UserSearch,
    summary: "An applicant tracker that screens and schedules for you.",
    description: "Replace inbox recruiting with a proper applicant tracking system, where AI screens every CV against the role and books the interviews.",
    builds: [
      "Applicant tracking web app with pipelines per role",
      "Branded careers site with job listings",
      "Employee onboarding portal"
    ],
    workflows: [
      "AI CV screening scored against each role's requirements",
      "Interview scheduling synced to every panel calendar",
      "Candidate updates sent automatically at each stage",
      "Internal HR assistant for policy questions"
    ],
    before: "Hundreds of CVs read by hand, interviews arranged over long email threads, and candidates left waiting for news.",
    after: "A ranked shortlist in minutes, interviews booked in a click, and candidates kept informed at every step.",
    tools: ["Next.js", "LangGraph", "Google Workspace", "PostgreSQL"],
    visual: "Applicant tracker and AI screening"
  },
  {
    id: "home-services",
    industry: "Home Services",
    icon: Wrench,
    summary: "Instant quotes, booked jobs and a technician app for the day.",
    description: "For plumbers, electricians and HVAC teams: a website that quotes and books, and an app that runs the day for every technician.",
    builds: [
      "Booking website with instant online quotes",
      "Job scheduling board for the office",
      "Technician mobile app with jobs, routes and invoices"
    ],
    workflows: [
      "AI quotes from a customer's description and photos",
      "Jobs assigned by location, skill and availability",
      "On my way messages and arrival windows sent automatically",
      "Invoices and review requests after every job"
    ],
    before: "Quotes that take days, calls missed while on a job, and paperwork filled in at the kitchen table every night.",
    after: "Customers get a price and a slot in minutes, technicians see their day on their phone, and invoices go out on completion.",
    tools: ["React Native", "Next.js", "Stripe", "Twilio"],
    visual: "Booking website and technician app"
  },
  {
    id: "agencies",
    industry: "Agencies",
    icon: Megaphone,
    summary: "Client portals and reporting, without the admin overhead.",
    description: "Scale client delivery with a portal your clients will actually use, while automation takes care of reporting and admin.",
    builds: [
      "Client portal for reports, approvals and files",
      "Internal dashboard for projects and capacity",
      "Marketing websites for your clients, built fast"
    ],
    workflows: [
      "Weekly reports generated across every channel",
      "AI written performance summaries for each client",
      "Lead intake and qualification routed to Slack",
      "Project setup automated when a deal is signed"
    ],
    before: "Manual follow ups, delayed client onboarding, and hours spent formatting weekly reports for each client.",
    after: "Instant lead routing, projects set up on signature, and reports that write themselves.",
    tools: ["HubSpot", "Slack", "Monday.com", "Make"],
    visual: "Client portal and automated reporting"
  },
  {
    id: "consulting-firms",
    industry: "Consulting Firms",
    icon: Briefcase,
    summary: "Years of past work your team can simply ask.",
    description: "Turn years of proposals and deliverables into an assistant your team can ask, with every answer linked to its source.",
    builds: [
      "Internal knowledge platform over your documents",
      "Client facing assistant embedded on your website",
      "Engagement dashboard for partners"
    ],
    workflows: [
      "Answers with citations from past proposals and reports",
      "Meeting transcription and action item summaries",
      "Research and market analysis assistant",
      "Follow up sequences after every client meeting"
    ],
    before: "Associates spend hours reading past deliverables and taking meeting notes by hand.",
    after: "Past work searchable in seconds, with meeting recaps and next steps written automatically.",
    tools: ["Pinecone", "Notion", "OpenAI", "Zoom"],
    visual: "Knowledge assistant with citations"
  },
  {
    id: "accounting-finance",
    industry: "Accounting and Finance",
    icon: Calculator,
    summary: "A client portal where documents arrive and data enters itself.",
    description: "Give clients one place to upload everything, then let automation chase what is missing and extract the numbers for you.",
    builds: [
      "Client document portal with checklists per engagement",
      "Practice dashboard for deadlines and workload",
      "Secure client login on your firm website"
    ],
    workflows: [
      "Automated document chasing by email and SMS",
      "Invoice and receipt extraction with OCR",
      "Sync to Xero and QuickBooks",
      "Internal policy and compliance assistant"
    ],
    before: "Chasing clients for paperwork, matching invoices by hand and slow data entry into accounting software.",
    after: "Documents collected automatically, fields extracted on upload and ledgers kept in sync.",
    tools: ["QuickBooks", "Xero", "DocuSign", "n8n"],
    visual: "Document portal and data extraction"
  },
  {
    id: "real-estate",
    industry: "Real Estate",
    icon: Building2,
    summary: "Listings websites and an assistant that books viewings 24/7.",
    description: "Show every property on a fast listings website and let an AI assistant answer buyers and book viewings at any hour.",
    builds: [
      "Property listings website with search and maps",
      "Agent dashboard for leads, viewings and offers",
      "Landlord and tenant portal"
    ],
    workflows: [
      "AI assistant answering property questions 24/7",
      "Viewings booked straight into agent calendars",
      "Lead qualification by budget, timeline and finance",
      "Listing updates synced across portals and CRM"
    ],
    before: "Leads lost to slow replies after hours and listings updated by hand in three different places.",
    after: "Every buyer answered instantly, viewings booked while the agent sleeps and listings always in sync.",
    tools: ["Next.js", "Follow Up Boss", "Calendly", "Twilio"],
    visual: "Listings website and AI assistant"
  },
  {
    id: "saas-tech",
    industry: "SaaS and Tech",
    icon: Code2,
    summary: "Product features, support triage and pipeline work, shipped.",
    description: "Extra engineering capacity for your product, plus AI that takes support and internal questions off your team's desks.",
    builds: [
      "New product features, dashboards and admin tools",
      "AI features built into your existing app",
      "Help centre and customer portal"
    ],
    workflows: [
      "Support ticket triage and tier one resolution",
      "Escalations handed over with a written summary",
      "Product feedback grouped into themes",
      "Internal engineering knowledge assistant"
    ],
    before: "Support answers the same questions daily and engineers get pulled away for basic policy and product questions.",
    after: "Routine tickets resolved from your docs, escalations arrive summarised, and the roadmap is informed by real feedback.",
    tools: ["Zendesk", "Jira", "GitHub", "LangGraph"],
    visual: "Support dashboard and AI triage"
  },
  {
    id: "ecommerce-retail",
    industry: "Ecommerce and Retail",
    icon: ShoppingCart,
    summary: "Storefront, shopping app, stock and support in one system.",
    description: "A fast storefront and shopping app on the front, with forecasting, returns and support automated behind it.",
    builds: [
      "Custom storefront or Shopify build",
      "Mobile shopping app for iOS and Android",
      "Store admin with unified orders and stock"
    ],
    workflows: [
      "Inventory forecasting and stockout alerts",
      "AI customer support and returns handling",
      "Order issues routed to suppliers",
      "Review sentiment analysis and daily sales reports"
    ],
    before: "Surprise stockouts, manual refunds and customer data split across Shopify, Amazon and spreadsheets.",
    after: "Stock reordered before it runs out, returns handled in chat, and one dashboard for every channel.",
    tools: ["Shopify", "React Native", "Klaviyo", "Gorgias"],
    visual: "Store admin and shopping app"
  }
];

/**
 * Single source for the industries. Consumed by the use cases page, the home
 * page index and the markdown mirror, so the three always agree.
 */
export const useCases: IndustryUseCase[] = entries.map((entry) => ({
  ...entry,
  image: `/images/use-cases/${entry.id}.webp`
}));
