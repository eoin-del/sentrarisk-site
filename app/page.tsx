"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  CircleCheckBig,
  Code2,
  Cloud,
  Gauge,
  Landmark,
  LockKeyhole,
  Mail,
  Rocket,
  Shield,
  Siren,
  Store,
  ClipboardCheck,
  Users,
} from "lucide-react";

const APP_URL = "https://app.sentrarisksystems.com";
const CONTACT_EMAIL = "support@sentrarisksystems.com";
const LINKEDIN_URL = "https://www.linkedin.com/company/sentrarisk-systems/";
const REGISTER_URL = `${APP_URL}/register`;
const TRIAL_ENQUIRY_URL = REGISTER_URL;

const capabilities = [
  {
    icon: Gauge,
    title: "Pre-payment risk visibility",
    text: "Give finance teams a clearer view of payment risk before approval decisions are made.",
  },
  {
    icon: Siren,
    title: "Human-led review",
    text: "Support responsible review without replacing the professional judgement of the people running the business.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear management outputs",
    text: "Produce practical reporting that helps teams explain what was reviewed and what action was taken.",
  },
  {
    icon: Cloud,
    title: "Finance-team friendly",
    text: "Designed to work alongside the finance systems and review routines teams already use.",
  },
  {
    icon: Users,
    title: "Built for lean teams",
    text: "Helps small and growing finance teams improve oversight without enterprise complexity.",
  },
  {
    icon: Code2,
    title: "Scalable adoption",
    text: "Start simply, then tailor the setup as the organisation grows and the review needs become more complex.",
  },
];

const metrics = [
  ["Irish fintech/regtech", "Built for SMEs and finance professionals"],
  ["Evidence-led", "Notes, reports, and review trails"],
  ["Human-led", "Final judgement stays with the user"],
];

const premiumStats = [
  ["Prevent", "Catch risk before payment release"],
  ["Monitor", "Ongoing finance activity"],
  ["Evidence", "Clear review outputs"],
  ["Decide", "Human judgement stays in control"],
];

const comparisonRows = [
  {
    without: "Important finance reviews are spread across too many places.",
    with: "Payment-risk review is brought into one clear, structured environment.",
  },
  {
    without: "Warning signs can be missed until money has already left the business.",
    with: "Finance teams get earlier visibility before approving or releasing payments.",
  },
  {
    without: "Review decisions can be difficult to explain after the fact.",
    with: "Review history and management outputs stay easier to explain.",
  },
  {
    without: "Management, clients, or advisors may not have a clear view of payment-control work.",
    with: "Reports support clearer conversations around risk, control, and next actions.",
  },
];

const enterpriseProof = [
  ["Built around payment prevention", "Designed to help teams act before weak approval evidence becomes a financial loss."],
  ["Clear from the start", "Outputs are designed to support professional management conversations."],
  ["Designed for finance teams", "Clear visibility for SMEs, CFOs, operations, compliance users, and advisors without enterprise complexity."],
];

const operatingPrinciples = [
  "Clear prevention before opaque automation",
  "Human judgement at the centre",
  "Client and organisation-level separation",
  "Professional outputs designed for review meetings",
];

const audienceSegments = [
  {
    icon: Store,
    title: "SME finance teams",
    text: "For businesses that handle recurring payments and need stronger oversight before money leaves.",
  },
  {
    icon: Users,
    title: "CFOs and finance managers",
    text: "For leaders who need better visibility and more confidence around payment-risk oversight.",
  },
  {
    icon: Code2,
    title: "Compliance and operations",
    text: "For teams that need a practical way to support accountable control follow-up.",
  },
  {
    icon: Landmark,
    title: "Accountants and advisors",
    text: "For firms that want to support clients with clearer payment-risk review and reporting.",
  },
];

const useCases = [
  {
    title: "Supplier payment risk",
    text: "Help teams review payment activity before funds are released.",
    href: "/supplier-fraud-detection",
  },
  {
    title: "Client Control Packs",
    text: "Create a professional monthly output that supports client or management conversations.",
    href: "/accountants",
  },
  {
    title: "Payment monitoring",
    text: "Give finance teams a clearer view of activity that may need attention.",
    href: "#demo",
  },
  {
    title: "Once-off pre-payment review",
    text: "A separate paid review when a payment needs a second layer of confidence.",
    href: "#once-off-kyc",
  },
  {
    title: "Standalone payment review service",
    text: "For businesses that want independent risk insight without starting a full monthly subscription.",
    href: "#once-off-kyc",
  },
  {
    title: "Finance activity review",
    text: "Support finance-team oversight while keeping payment processing outside SentraRisk.",
    href: "#platform",
  },
  {
    title: "Board and audit reporting",
    text: "Turn review activity into concise outputs for leadership, client, or internal review meetings.",
    href: "/accountants",
  },
];

const seoLandingPages = [
  {
    title: "Accounting-data supported review",
    text: "For teams that want payment-risk review closer to their finance workflow.",
    href: "/xero-fraud-detection",
  },
  {
    title: "Supplier payment risk",
    text: "For finance teams that want stronger prevention around supplier payment risk.",
    href: "/supplier-fraud-detection",
  },
  {
    title: "Finance teams and advisors",
    text: "For finance teams, CFOs, advisors, and practices that want payment-risk review and professional reporting.",
    href: "/accountants",
  },
];

const professionalOutcomes = [
  {
    title: "For finance teams",
    text: "Turn recurring finance activity into clearer review priorities and management outputs.",
  },
  {
    title: "For CFOs and operators",
    text: "Support better visibility over payment risk, ownership, and review outcomes.",
  },
  {
    title: "For compliance and advisors",
    text: "Keep clearer records around control activity without adding unnecessary complexity.",
  },
];

const onceOffServiceChecks = [
  "Independent pre-payment review when a payment needs extra confidence.",
  "Practical review using appropriate business information.",
  "Clear recommendation to support the next step.",
];

const trustSignals = [
  "Irish software company focused on SMEs, finance teams, CFOs, compliance users, operations teams, accountants, and advisors.",
  "Human review stays central: SentraRisk helps teams catch risk before money leaves and supports better oversight.",
  "Works alongside existing finance operations without replacing core accounting or payment systems.",
  "Built around organisation-level access, management outputs, and controlled onboarding.",
  "Designed for lean teams that need practical payment-risk visibility without enterprise complexity.",
];

const pilotSteps = [
  "Set up a focused trial around one finance team, company, or client group.",
  "Review whether SentraRisk improves visibility, confidence, and management reporting.",
  "Leave with a clear view of fit, pricing, and next steps.",
];

const faqs = [
  {
    question: "Who is SentraRisk built for?",
    answer:
      "SentraRisk is built for finance professionals, including SME finance teams, CFOs, finance managers, compliance users, operations teams, virtual CFOs, accountants, bookkeepers, and advisors who need practical payment-risk oversight.",
  },
  {
    question: "Do we need engineers to get started?",
    answer:
      "No. Teams can begin with guided setup and practical review. More tailored setup routes are available for larger or more complex organisations.",
  },
  {
    question: "Can SentraRisk work alongside finance systems?",
    answer:
      "Yes. SentraRisk is designed to work alongside existing finance operations and can be tailored where a more connected setup is needed.",
  },
  {
    question: "Does SentraRisk replace payroll or accounting software?",
    answer:
      "No. SentraRisk does not replace payroll, accounting, or payment platforms. It adds a review and oversight layer around finance activity.",
  },
  {
    question: "Can SentraRisk support a once-off payment review?",
    answer:
      "Yes. SentraRisk offers a separate paid once-off pre-payment review service for businesses that want a second layer of confidence before releasing funds.",
  },
  {
    question: "What is a Client Control Pack?",
    answer:
      "It is a client-ready review output that summarises the key findings, review coverage, and recommended next actions from the period reviewed.",
  },
  {
    question: "Will SentraRisk create unnecessary noise?",
    answer:
      "No. SentraRisk is designed to help teams focus attention on the items most likely to need review, rather than creating unnecessary noise.",
  },
  {
    question: "Is the output suitable for audits or internal review?",
    answer:
      "Yes. The platform is designed to support accountable review, management reporting, and clear follow-up.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "€199",
    cadence: "/month",
    description: "For small companies that want practical payment-risk visibility and basic reporting.",
    features: [
      "1 organisation",
      "3 users",
      "Guided payment-risk review",
      "Finance activity review",
      "Basic setup support",
      "Payment-risk review",
      "Basic reporting outputs",
      "Up to 10,000 records/month",
    ],
    cta: "Start 14-day trial",
    href: TRIAL_ENQUIRY_URL,
    highlighted: false,
  },
  {
    name: "Compliance",
    price: "€499",
    cadence: "/month",
    description: "For SMEs and finance-led businesses that want to reduce manual review work and improve payment-control evidence.",
    features: [
      "5 users",
      "Guided payment-risk review",
      "Finance activity review",
      "Separate once-off review service available",
      "Standalone payment review",
      "Client Control Pack exports",
      "Board summary PDF",
      "Review notes and ownership",
      "Email alerts",
      "Up to 20,000 records/month",
    ],
    cta: "Start 14-day trial",
    href: TRIAL_ENQUIRY_URL,
    highlighted: true,
  },
  {
    name: "Practice",
    price: "€999",
    cadence: "/month",
    description: "For accounting practices, advisory teams, outsourced finance providers, and firms managing multiple client relationships.",
    features: [
      "10 users",
      "Advanced setup options",
      "Guided payment-risk review",
      "Finance activity review",
      "Client management",
      "Bulk review support",
      "Tailored review configuration",
      "Email alerts",
      "Audit trail export",
      "Up to 30,000 records/month",
    ],
    cta: "Start 14-day trial",
    href: TRIAL_ENQUIRY_URL,
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    cadence: "",
    description: "For tailored business needs, larger teams, regulated environments, or custom deployment requirements.",
    features: [
      "25+ users",
      "Custom usage limits",
      "Tailored review configuration",
      "Payment-control review support",
      "Tailored reporting",
      "Local/customer environment deployment",
      "Dedicated onboarding",
      "Priority support",
      "Security review support",
    ],
    cta: "Contact us",
    href: "#demo",
    highlighted: false,
  },
];

const interestOptions = [
  "Client Control Packs",
  "Payment-risk review",
  "Finance activity review",
  "Accountant practice support",
  "Integration discussion",
  "Custom setup",
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-slate-200">
        <Image
          src="/sentrarisk-logo.svg"
          alt="SentraRisk Systems"
          width={36}
          height={36}
          className="h-9 w-9 rounded-md"
          priority
        />
      </span>
      <div className="leading-tight">
        <span className="block text-sm font-semibold text-slate-950">SentraRisk</span>
        <span className="block text-[11px] font-medium uppercase text-cyan-800">Systems</span>
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.08em] text-cyan-800">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-normal text-slate-950 md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-7 text-slate-600">{text}</p> : null}
    </div>
  );
}

function LinkedinMark({ size = "normal" }: { size?: "small" | "normal" }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-sm bg-[#0a66c2] font-bold leading-none text-white ${
        size === "small" ? "h-4 w-4 text-[9px]" : "h-5 w-5 text-[11px]"
      }`}
    >
      in
    </span>
  );
}

function CheckLine({ text }: { text: string }) {
  return (
    <div className="mb-3 flex gap-3 last:mb-0">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" aria-hidden="true" />
      <p className="text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function DemoForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const field = (name: string) => String(form.get(name) || "").trim();
    const subject = encodeURIComponent("SentraRisk enquiry");
    const body = encodeURIComponent(
      [
        "New SentraRisk enquiry",
        "",
        `Full name: ${field("name")}`,
        `Work email: ${field("email")}`,
        `Company: ${field("company")}`,
        `Role: ${field("role") || "Not provided"}`,
        `Organisation size: ${field("organisation_size") || "Not provided"}`,
        `Main interest: ${field("main_interest") || "Not provided"}`,
        "",
        "Message:",
        field("message") || "Not provided",
      ].join("\n"),
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="fluid-card rounded-[1.5rem] p-6"
    >
      <div className="flex items-start gap-3">
        <Users className="mt-0.5 h-6 w-6 text-cyan-700" aria-hidden="true" />
        <div>
          <p className="text-lg font-semibold text-slate-950">Send an enquiry</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Tell us a little about your organisation and we will come back to you with the right next step.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Full name
          <input
            required
            name="name"
            className="h-11 rounded-xl border border-slate-300 bg-white/90 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Work email
          <input
            required
            type="email"
            name="email"
            className="h-11 rounded-xl border border-slate-300 bg-white/90 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
            placeholder="name@company.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Company
          <input
            required
            name="company"
            className="h-11 rounded-xl border border-slate-300 bg-white/90 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
            placeholder="Company name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Role
          <input
            name="role"
            className="h-11 rounded-xl border border-slate-300 bg-white/90 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
            placeholder="Founder, compliance, finance..."
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Organisation size
          <select
            name="organisation_size"
            defaultValue=""
            className="h-11 rounded-xl border border-slate-300 bg-white/90 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
          >
            <option value="">Select size</option>
            <option value="1-10">1-10 people</option>
            <option value="11-50">11-50 people</option>
            <option value="51-250">51-250 people</option>
            <option value="250+">250+ people</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Main interest
          <select
            name="main_interest"
            defaultValue={interestOptions[0]}
            className="h-11 rounded-xl border border-slate-300 bg-white/90 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
          >
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-medium text-slate-700">
        What would you like to discuss?
        <textarea
          name="message"
          className="min-h-28 rounded-xl border border-slate-300 bg-white/90 px-3 py-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
          placeholder="Tell us about your payment-risk review, client control, or reporting requirements."
        />
      </label>

      <button
        type="submit"
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-800"
      >
        Send Enquiry Email <Mail className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}

export default function SentraRiskLandingPage() {
  return (
    <main className="fluid-shell min-h-screen text-slate-950">
      <section className="hero-stage relative min-h-[92vh] overflow-hidden">
        {/* Hero intentionally has no mock dashboard or product preview. */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(0deg,#f7faf9_0%,rgba(247,250,249,0)_100%)]" />
        <nav className="relative z-10 mx-auto mt-4 flex max-w-7xl items-center justify-between gap-3 rounded-xl border border-white/70 bg-white/90 px-4 py-3 shadow-[0_18px_55px_rgba(15,23,42,0.07)] backdrop-blur-xl md:px-5">
          <a href="#" className="shrink-0">
            <LogoMark />
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#platform" className="hover:text-slate-950">Platform</a>
            <a href="#who" className="hover:text-slate-950">Who it&apos;s for</a>
            <a href="#use-cases" className="hover:text-slate-950">Use cases</a>
            <a href="#once-off-kyc" className="hover:text-slate-950">Once-off review</a>
            <a href="#pricing" className="hover:text-slate-950">Pricing</a>
            <a href={REGISTER_URL} className="hover:text-slate-950">Trial</a>
            <a href="#demo" className="hover:text-slate-950">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit SentraRisk Systems on LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-950 shadow-sm transition hover:border-cyan-700"
            >
              in
            </a>
            <a
              href="#pricing"
              className="hidden h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-950 shadow-sm transition hover:border-cyan-700 sm:inline-flex"
            >
              Pricing
            </a>
            <a
              href={APP_URL}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Login
            </a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(92vh-88px)] max-w-7xl items-center px-5 pb-16 pt-10 md:px-8">
          <div className="hero-copy-panel w-full rounded-2xl p-6 md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div className="mb-6 inline-flex items-center rounded-full border border-cyan-200 bg-white/90 px-4 py-2 text-sm font-semibold text-cyan-900 shadow-[0_10px_24px_rgba(14,124,134,0.07)] backdrop-blur">
                  Irish fintech/regtech SaaS for payment-risk prevention
                </div>
                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-normal text-slate-950 md:text-5xl">
                  Catch payment risk before money leaves the business.
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 md:text-lg">
                  SentraRisk helps finance teams, CFOs, operations teams, compliance users, and advisors prevent avoidable losses by monitoring payment risk before weak approval evidence turns into a financial loss.
                </p>
                <div className="mt-5 grid max-w-3xl gap-2 sm:grid-cols-2">
                  {["Pre-payment risk visibility", "Finance-team oversight", "Clear review outputs", "Human-led decisions"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-cyan-700" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={TRIAL_ENQUIRY_URL}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    Start 14-day trial <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#once-off-kyc"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white/90 px-7 text-sm font-semibold text-slate-950 shadow-[0_14px_30px_rgba(15,23,42,0.08)] backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-700"
                  >
                    Once-off review <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
                <a
                  href="#once-off-kyc"
                  className="mt-5 flex max-w-3xl flex-col gap-3 rounded-xl border border-cyan-200 bg-cyan-50/80 p-4 text-left shadow-[0_12px_28px_rgba(14,124,134,0.08)] transition hover:-translate-y-0.5 hover:border-cyan-400 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span>
                    <span className="block text-sm font-semibold text-slate-950">Once-off payment review</span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">
                      For a private or one-off payment-risk check before funds are released.
                    </span>
                  </span>
                  <span className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-cyan-800 shadow-sm">
                    From EUR49
                  </span>
                </a>
              </div>

              <div className="rounded-2xl border border-white/75 bg-white/72 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.08)] backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-cyan-800">Review layer</p>
                <div className="mt-5 grid gap-3">
                  {premiumStats.map(([value, label]) => (
                    <div key={value} className="flex items-center justify-between gap-4 rounded-xl border border-slate-200/80 bg-white/82 px-4 py-3">
                      <span className="text-sm font-semibold text-slate-950">{value}</span>
                      <span className="max-w-48 text-right text-xs font-medium leading-5 text-slate-500">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:gap-6">
              {metrics.map(([value, label]) => (
                <div key={value} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-700" />
                  <p>
                    <span className="font-semibold text-slate-950">{value}</span>
                    <span className="text-slate-500"> · {label}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="proof-rail border-y border-white/70 px-5 py-8 backdrop-blur md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {premiumStats.map(([value, label]) => (
            <div key={value} className="border-l border-cyan-700/25 pl-5">
              <span className="text-xl font-semibold text-slate-950">{value}</span>
              <p className="mt-1 max-w-48 text-sm font-medium leading-5 text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="fluid-section px-5 py-24 md:px-8">
        <div className="fluid-inner mx-auto max-w-7xl">
          <div className="editorial-panel grid gap-10 rounded-2xl p-6 md:p-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">Why it matters</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                Reduce manual review time without losing professional judgement.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                Finance teams already know payment risk matters. The harder part is improving oversight before money leaves, keeping reviews clear, and making the final judgement accountable.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200/70 bg-white/72 p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase text-slate-500">Without SentraRisk</p>
                <div className="mt-5 space-y-4">
                  {comparisonRows.map((row) => (
                    <div key={row.without} className="rounded-lg border border-slate-200/80 bg-white/82 p-4 text-sm leading-6 text-slate-600">
                      {row.without}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-cyan-200/80 bg-[#f3fbfb]/82 p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase text-cyan-700">With SentraRisk</p>
                <div className="mt-5 space-y-4">
                  {comparisonRows.map((row) => (
                    <div key={row.with} className="flex gap-3 rounded-lg border border-cyan-100 bg-white/88 p-4 text-sm leading-6 text-slate-700">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-700" aria-hidden="true" />
                      <span>{row.with}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-6 md:px-8">
        <div className="statement-band mx-auto grid max-w-7xl gap-8 rounded-2xl px-7 py-10 text-white lg:grid-cols-3 lg:px-10">
          {enterpriseProof.map(([title, text]) => (
            <div key={title} className="border-l border-[#8de0d7]/35 pl-6">
              <p className="text-sm font-semibold uppercase text-[#8de0d7]">{title}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="platform" className="fluid-section px-5 py-24 md:px-8">
        <div className="fluid-inner mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">Platform</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                Built to monitor and stop payment risk before money leaves.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                SentraRisk gives finance professionals a clear prevention layer for payment risk, helping teams review before money leaves.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="fluid-card group rounded-[1.5rem] p-6 transition hover:-translate-y-1 hover:border-cyan-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8">
        <div className="editorial-panel mx-auto grid max-w-7xl gap-10 rounded-2xl p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Built with control in mind</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Technology for the review work. Human judgement for the decision.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              SentraRisk was created to make payment-risk prevention more accessible for SMEs and finance teams. The platform helps teams act earlier, while keeping the final judgement with the people responsible for the business.
            </p>
            <div className="mt-8">
              <Link
                href="/accountants"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                See Finance Use Cases <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="grid gap-3">
            {trustSignals.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-white/70 bg-white/74 p-4 shadow-sm">
                <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" aria-hidden="true" />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-2xl bg-slate-950 px-6 py-10 text-white shadow-[0_28px_90px_rgba(7,19,31,0.18)] md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">About SentraRisk Systems</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal md:text-5xl">
              Human-led risk intelligence for finance teams.
            </h2>
          </div>
          <div>
            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                SentraRisk Systems is an Irish fintech/regtech SaaS platform helping finance teams, CFOs, operations teams, compliance users, accountants, and advisors catch payment risk before money leaves the business.
              </p>
              <p>
                SentraRisk helps finance professionals reduce manual review time, improve payment oversight, and prevent weak approval evidence from becoming a financial loss.
              </p>
              <p>
                We believe automation should support professional judgement, not replace it. SentraRisk gives finance teams a clearer way to review, decide, and act with confidence.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Clear", "Designed for practical finance review."],
                ["Human-led", "Final decisions stay with finance professionals."],
                ["Evidence-ready", "Professional review outputs."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-sm font-semibold text-cyan-300">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="who" className="fluid-section px-5 py-24 md:px-8">
        <div className="fluid-inner mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">Who it&apos;s for</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                Built for teams that need risk control without enterprise drag.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                SentraRisk gives finance teams, CFOs, compliance users, operations teams, accountants, and advisors a serious prevention layer for payment-risk oversight and professional reporting.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {audienceSegments.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="fluid-card rounded-[1.5rem] p-6">
                    <Icon className="h-6 w-6 text-cyan-700" aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">For finance professionals</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              A practical way to turn finance activity into risk insight.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              SentraRisk is designed to help CFOs, finance managers, compliance users, operations teams, accountants, and advisory teams improve payment-risk oversight before money leaves and produce useful outputs for management, clients, or internal teams.
            </p>
            <Link
              href="/accountants"
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              See finance use cases <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {professionalOutcomes.map((item) => (
              <article key={item.title} className="fluid-card rounded-[1.5rem] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="once-off-kyc" className="px-5 py-24 md:px-8">
        <div className="statement-band mx-auto grid max-w-7xl gap-10 rounded-[2rem] px-7 py-14 text-white lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">Once-off paid service</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal md:text-5xl">
              Once-off pre-payment review before money leaves.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              SentraRisk can provide a standalone pre-payment review for businesses that want a second layer of confidence before releasing money, without starting a full monthly subscription.
            </p>
            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white">
              Once-off reviews from EUR49
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/8 p-4 text-sm leading-6 text-slate-300">
              <strong className="text-white">Output:</strong> a concise review note with a clear recommendation and supporting context.
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#demo"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Request once-off review <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Once-off%20pre-payment%20review`}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Email SentraRisk
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/35 p-5 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold text-cyan-300">What the service provides</p>
            <div className="mt-5 grid gap-3">
              {onceOffServiceChecks.map((check) => (
                <div key={check} className="flex gap-3 rounded-xl border border-white/10 bg-white/6 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                  <p className="text-sm leading-6 text-slate-300">{check}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-slate-400">
              The scope of each review is agreed before work begins so the output remains clear, appropriate, and commercially useful.
            </p>
          </div>
        </div>
      </section>

      <section id="use-cases" className="fluid-section px-5 py-24 md:px-8">
        <div className="fluid-inner mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cyan-700">Use cases</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              High-value use cases for finance teams that need control.
            </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Use SentraRisk as monthly software or as a separate paid once-off review service when a payment needs an extra layer of confidence.
              </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {useCases.map((item) => (
              <div key={item.title} className="fluid-card rounded-[1.5rem] p-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-500" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                    <Link href={item.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900">
                      Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cyan-700">Solutions</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Find SentraRisk by the problem you need to solve.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {seoLandingPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="fluid-card group rounded-[1.5rem] p-6 transition hover:-translate-y-1 hover:border-cyan-300"
              >
                <h3 className="text-lg font-semibold text-slate-950">{page.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{page.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 group-hover:text-cyan-900">
                  Open page <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="pilot" className="fluid-section px-5 py-24 md:px-8">
        <div className="fluid-inner mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Pilot programme</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Start with a focused 14-day payment-risk review.
            </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
              The SentraRisk pilot gives finance professionals a practical way to test whether the platform improves payment-risk visibility before moving into a live monthly review.
            </p>
            <div className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50/90 p-4 text-sm leading-6 text-slate-700 shadow-[0_12px_32px_rgba(14,124,134,0.08)]">
              <strong className="text-slate-950">Pilot offer:</strong> review a focused sample, assess commercial fit, and produce an example management output your team can evaluate.
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/pilot-programme"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                View Pilot Programme <Rocket className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#demo"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-white/90 px-6 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Send Enquiry
              </a>
            </div>
          </div>
            <div className="editorial-panel rounded-[1.75rem] p-6">
            <div className="grid gap-4">
              {pilotSteps.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-700 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-sm font-semibold text-cyan-300">Typical pilot outcome</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                A clear view of where SentraRisk fits, what value it can bring, and which setup route is most appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="fluid-section px-5 py-24 md:px-8">
        <div className="fluid-inner mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">Pricing</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                Pricing by payment-control need.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Start with payment-risk review, add management reporting, or request a separate once-off pre-payment review when a specific payment needs independent attention.
              </p>
            </div>
            <div className="editorial-panel grid gap-3 rounded-[1.5rem] p-5 sm:grid-cols-3">
              {[
                ["14 days", "Trial access"],
                ["No lock-in", "Monthly plans"],
                ["Custom", "Enterprise setup"],
              ].map(([value, label]) => (
                <div key={value} className="border-l-2 border-cyan-500 pl-4">
                  <p className="text-lg font-semibold text-slate-950">{value}</p>
                  <p className="mt-1 text-sm text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[1.5rem] border p-6 shadow-sm transition hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-slate-950 bg-slate-950 text-white shadow-[0_30px_90px_rgba(15,23,42,0.24)]"
                    : "border-slate-200/80 bg-white/92 text-slate-950 backdrop-blur"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-semibold text-slate-950">
                      Recommended
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-end gap-1">
                  <p className="text-4xl font-semibold">{plan.price}</p>
                  <p className={`pb-1 text-sm ${plan.highlighted ? "text-slate-300" : "text-slate-500"}`}>
                    {plan.cadence}
                  </p>
                </div>
                <p className={`mt-4 min-h-14 text-sm leading-6 ${plan.highlighted ? "text-slate-300" : "text-slate-600"}`}>
                  {plan.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlighted ? "text-cyan-300" : "text-cyan-700"}`} aria-hidden="true" />
                      <span className={plan.highlighted ? "text-slate-200" : "text-slate-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  className={`mt-7 inline-flex h-12 w-full items-center justify-center rounded-xl px-6 text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-white text-slate-950 hover:bg-slate-100"
                      : "bg-slate-950 text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Prices shown exclude any applicable taxes. New trial workspaces include 14 days of access for feedback and evaluation before moving to a monthly plan.
          </p>
        </div>
      </section>

      <section id="security" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [Shield, "Business account structure", "Admin and user dashboards designed around organisational access."],
              [Cloud, "Finance-team friendly", "Designed to support controlled review alongside existing finance operations."],
              [LockKeyhole, "Data control", "Designed for controlled environments, separated client areas, and accountable review."],
            ].map(([Icon, title, text]) => {
              const TypedIcon = Icon as typeof Shield;
              return (
                <div key={title as string} className="fluid-card rounded-[1.5rem] p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50">
                    <TypedIcon className="h-6 w-6 text-cyan-700" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{title as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">FAQ</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Questions teams ask before starting.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              A short guide to setup, pilot scope, and review outputs.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.question} className="group rounded-[1.5rem] border border-slate-200/80 bg-white/88 p-5 shadow-sm backdrop-blur">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-950">
                  {item.question}
                  <span className="text-xl leading-none text-cyan-700 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="fluid-section px-5 py-24 md:px-8">
        <div className="fluid-inner mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Contact</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Bring human-led payment-risk monitoring into your organisation.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Speak with SentraRisk Systems about payment-risk monitoring, management reporting, and implementation for your organisation.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="fluid-card rounded-[1.5rem] p-5">
                <CheckLine text="Receive a focused product walkthrough" />
                <CheckLine text="Discuss your payment-risk priorities" />
                <CheckLine text="Agree the right setup route for your organisation" />
              </div>
              <div className="fluid-card rounded-[1.5rem] p-5">
                <p className="text-sm font-semibold text-slate-950">Prefer email?</p>
                <a className="mt-2 block text-sm font-medium text-cyan-700" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  We usually respond with the next step and any setup questions needed for your organisation.
                </p>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-950 transition hover:border-cyan-700 hover:text-cyan-800"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-[#0a66c2] text-[11px] font-bold leading-none text-white">
                    in
                  </span>
                  Follow on LinkedIn
                </a>
              </div>
            </div>
          </div>
          <DemoForm />
        </div>
      </section>

      <footer className="border-t border-slate-200/80 bg-white/70 px-5 py-8 backdrop-blur md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            <p>© 2026 SentraRisk Systems. All rights reserved.</p>
            <p className="mt-1">Payment-risk prevention and finance-control reporting.</p>
          </div>
          <div className="flex flex-wrap gap-4 font-medium">
            <Link href="/xero-fraud-detection" className="hover:text-slate-950">Accounting Data Review</Link>
            <Link href="/supplier-fraud-detection" className="hover:text-slate-950">Supplier Payment Risk</Link>
            <Link href="/accountants" className="hover:text-slate-950">Accountants</Link>
            <Link href="/pilot-programme" className="hover:text-slate-950">Pilot Programme</Link>
            <Link href="/privacy-policy" className="hover:text-slate-950">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-slate-950">Terms</Link>
            <Link href="/data-processing" className="hover:text-slate-950">Data Processing</Link>
            <Link href="/refund-policy" className="hover:text-slate-950">Refunds</Link>
            <Link href="/security-statement" className="hover:text-slate-950">Security</Link>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-950"
            >
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-[#0a66c2] text-[9px] font-bold leading-none text-white">
                in
              </span>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
