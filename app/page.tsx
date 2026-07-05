"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
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
const REGISTER_URL = `${APP_URL}/register`;
const TRIAL_ENQUIRY_URL = REGISTER_URL;

const capabilities = [
  {
    icon: Gauge,
    title: "Stronger payment-risk scoring",
    text: "Flag duplicate-looking payments, new suppliers, repeated large payments, same-day exposure, and threshold patterns with clear reasons.",
  },
  {
    icon: Siren,
    title: "Review workflow for real teams",
    text: "Route flagged transactions into a structured workflow with status, ownership, reviewer notes, and an audit-ready decision trail.",
  },
  {
    icon: ClipboardCheck,
    title: "Client Control Pack",
    text: "Turn monthly review work into a clear client pack with findings, recommended actions, review coverage, and PDF export.",
  },
  {
    icon: Cloud,
    title: "Xero-supported client imports",
    text: "Connect Xero accounts by client, import supplier bills, refresh existing records, and reduce duplicated import noise.",
  },
  {
    icon: Users,
    title: "Payroll payment review",
    text: "Review payroll payment outputs for duplicate-looking payments, unusual beneficiaries, abnormal amounts, and evidence-ready decision notes without replacing payroll software.",
  },
  {
    icon: Code2,
    title: "Spreadsheet, API, and future integrations",
    text: "Start with Xero, payroll exports, or uploaded files, then connect SentraRisk to internal workflows with API keys and batch scoring when needed.",
  },
];

const metrics = [
  ["Control Packs", "Evidence-ready monthly outputs"],
  ["Xero and payroll", "Supplier bills and payroll payment review"],
  ["Human-led", "Automation supports the final decision"],
];

const premiumStats = [
  ["Monitor", "Client-level payment activity"],
  ["Explain", "Risk reasons and evidence"],
  ["Decide", "Reviewer notes and ownership"],
  ["Report", "Board-ready control packs"],
];

const enterpriseProof = [
  ["Payment-risk intelligence", "Supplier bills, payroll outputs, uploaded records, and API-scored transactions reviewed in one operating layer."],
  ["Governance-first workflow", "Alert ownership, decision notes, archive history, review status, and control-pack exports built into the process."],
  ["Designed for lean finance teams", "Enterprise-style visibility without requiring an enterprise compliance department."],
];

const operatingPrinciples = [
  "Explainable scoring before opaque automation",
  "Human approval at the centre of every decision",
  "Client and organisation-level separation",
  "Evidence outputs designed for review meetings",
];

const integrationProof = [
  "Client-level Xero supplier bills",
  "Payroll payment output review",
  "Excel transaction files",
  "Duplicate and threshold-pattern checks",
  "Client Control Pack PDF exports",
  "Reviewer notes and decision trail",
];

const workflow = [
  "Create a client account and connect the right Xero organisation, upload payroll or transaction exports, or add data through the API.",
  "SentraRisk scores payment activity and explains the strongest indicators behind each alert.",
  "Review the findings, record decisions, and export a Client Control Pack for the client or internal management team.",
];

const howItWorks = [
  {
    title: "Connect Xero or upload transactions",
    text: "Start with client-level Xero supplier bills, payroll payment exports, spreadsheet files, or transaction data from an internal workflow.",
  },
  {
    title: "Review the strongest risk signals",
    text: "SentraRisk flags duplicate-looking payments, unusual supplier changes, repeated large payments, and threshold-style patterns.",
  },
  {
    title: "Export a Client Control Pack",
    text: "Keep the final judgement human, record the decision, and produce a clear monthly output for the client or management team.",
  },
];

const audienceSegments = [
  {
    icon: Landmark,
    title: "Accountants and bookkeepers",
    text: "For practices that want to offer monthly payment-risk reviews and client-ready control packs without heavy manual work.",
  },
  {
    icon: Store,
    title: "SME finance teams",
    text: "For growing businesses that need practical checks on suppliers, bills, duplicates, and unusual payment activity.",
  },
  {
    icon: Code2,
    title: "Advisory and finance operations",
    text: "For virtual CFOs, outsourced finance teams, and operators who need clear evidence for review meetings.",
  },
];

const useCases = [
  {
    title: "Supplier and invoice fraud review",
    text: "Import supplier bills from Xero or file upload, then flag unusual amounts, new beneficiaries, duplicate-looking bills, timing anomalies, and payment patterns before review.",
    href: "/supplier-fraud-detection",
  },
  {
    title: "Client Control Packs",
    text: "Give each client a simple monthly review output covering risk grade, key findings, recommended actions, and evidence from the review.",
    href: "/accountants",
  },
  {
    title: "Payment pattern monitoring",
    text: "Escalate repeated large transactions, same-day threshold patterns, sudden supplier changes, and unusual account activity.",
    href: "#demo",
  },
  {
    title: "Payroll payment risk review",
    text: "Review payroll payment outputs for duplicate-looking payments, unusual beneficiaries, abnormal amount changes, and timing issues while keeping payroll processing inside the payroll system.",
    href: "#platform",
  },
  {
    title: "Board and audit reporting",
    text: "Turn operational reviews into decision memos, control packs, and concise evidence for leadership or client meetings.",
    href: "/accountants",
  },
];

const seoLandingPages = [
  {
    title: "Xero fraud detection",
    text: "For teams that want to import Xero supplier bills and review fraud-risk indicators before payment.",
    href: "/xero-fraud-detection",
  },
  {
    title: "Supplier fraud detection",
    text: "For finance teams reviewing invoices, new suppliers, unusual payment patterns, and transaction anomalies.",
    href: "/supplier-fraud-detection",
  },
  {
    title: "Accountants and virtual CFOs",
    text: "For advisors who want client-ready payment-risk reviews, board summaries, and control pack exports.",
    href: "/accountants",
  },
];

const accountantOutcomes = [
  {
    title: "Add a monthly review service",
    text: "Use SentraRisk to give SME clients a clearer payment-risk review without manually rebuilding checks in spreadsheets every month.",
  },
  {
    title: "Show value beyond bookkeeping",
    text: "Turn Xero bills, payroll payment outputs, and transaction data into findings, control scores, recommended actions, and client-ready PDFs.",
  },
  {
    title: "Keep the judgement human",
    text: "SentraRisk highlights risk indicators and evidence, while the accountant, bookkeeper, or finance lead keeps control of the final decision.",
  },
];

const trustSignals = [
  "Irish software company focused on SMEs, accountants, bookkeepers, and finance teams.",
  "Human review stays central: SentraRisk supports decisions with clearer signals and evidence.",
  "Payroll functionality is a review layer for payroll payment outputs, not a replacement for payroll platforms.",
  "Built around organisation-level access, reviewer notes, audit-ready exports, and controlled onboarding.",
  "Designed for lean teams that need practical payment-risk visibility without enterprise complexity.",
];

const riskReasons = {
  amount: "Transaction amount is above normal SME supplier review thresholds.",
  supplier: "Supplier is new or has limited payment history.",
  beneficiary: "Beneficiary details changed or are newly introduced.",
  crypto: "Source-of-funds or external exposure adds additional review pressure.",
  invoice: "Invoice timing or pattern is unusual for the supplier relationship.",
};

const pilotSteps = [
  "Set up one practice, company, or client workflow using Xero, payroll exports, spreadsheet data, or sample transactions.",
  "Run a focused review period covering alerts, risk reasons, duplicate checks, and Client Control Pack quality.",
  "Leave with a clear view of fit, pricing, and the first controls worth activating.",
];

const faqs = [
  {
    question: "Who is SentraRisk built for?",
    answer:
      "SentraRisk is built for accountants, bookkeepers, SME finance teams, virtual CFOs, and operators who need a practical way to review payment risk and create evidence around fraud controls.",
  },
  {
    question: "Do we need engineers to get started?",
    answer:
      "No. Teams can begin with dashboard access, client accounts, Xero-supported imports, payroll export review, and file upload. API access is available when you want to connect scoring directly to internal systems.",
  },
  {
    question: "Does SentraRisk support Xero?",
    answer:
      "Yes. SentraRisk supports Xero supplier bill imports and can separate imports by client account, so one client's Xero connection does not mix into another client's review workflow.",
  },
  {
    question: "Does SentraRisk replace payroll software?",
    answer:
      "No. SentraRisk does not run payroll, calculate payslips, manage employee payroll records, or replace payroll providers. It reviews payroll payment outputs for risk indicators such as duplicate-looking payments, unusual beneficiaries, abnormal amounts, and review evidence.",
  },
  {
    question: "What is a Client Control Pack?",
    answer:
      "It is a client-ready review output that summarises the control score, key payment-risk findings, recommended actions, review coverage, and supporting evidence from the period reviewed.",
  },
  {
    question: "Will every transaction become an alert?",
    answer:
      "No. The risk engine is designed to prioritise stronger indicators such as duplicate-looking payments, repeated large payments, new supplier details, threshold patterns, and unusual timing.",
  },
  {
    question: "Is the output suitable for audits or internal review?",
    answer:
      "Yes. The platform is designed around decision notes, alert ownership, risk reports, and exportable evidence for accountable review.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "€199",
    cadence: "/month",
    description: "For small companies that want Xero-backed supplier risk checks and basic reporting.",
    features: [
      "1 organisation",
      "3 users",
      "Xero-supported imports",
      "Payroll export review",
      "Excel upload",
      "Transaction risk scoring",
      "Basic alerts and control packs",
      "Up to 10,000 transactions/month",
    ],
    cta: "Request 14-day trial",
    href: TRIAL_ENQUIRY_URL,
    highlighted: false,
  },
  {
    name: "Compliance",
    price: "€499",
    cadence: "/month",
    description: "For accountants, bookkeepers, virtual CFOs, and operators who need client-ready control packs.",
    features: [
      "5 users",
      "Xero supplier bill imports",
      "Payroll payment review",
      "Client Control Pack exports",
      "Board summary PDF",
      "Risk notes and ownership",
      "Email alerts",
      "Up to 20,000 transactions/month",
    ],
    cta: "Request 14-day trial",
    href: TRIAL_ENQUIRY_URL,
    highlighted: true,
  },
  {
    name: "Practice",
    price: "€999",
    cadence: "/month",
    description: "For accounting practices, bookkeeping firms, and advisory teams managing multiple client workflows.",
    features: [
      "10 users",
      "API keys",
      "Xero supplier bill imports",
      "Payroll payment output review",
      "Client workflow management",
      "Bulk upload",
      "Custom review workflows",
      "Email alerts",
      "Audit trail export",
      "Up to 30,000 transactions/month",
    ],
    cta: "Request 14-day trial",
    href: TRIAL_ENQUIRY_URL,
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    cadence: "",
    description: "For tailored business needs, larger teams, regulated workflows, or custom deployment requirements.",
    features: [
      "25+ users",
      "Custom transaction limits",
      "Custom risk rules",
      "Payroll and payment-control review workflows",
      "Tailored reporting and review workflows",
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
  "Xero client imports",
  "Payroll payment review",
  "Payment-risk review",
  "Accountant practice workflow",
  "Xero integration",
  "API or custom setup",
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white/95 shadow-[0_16px_45px_rgba(0,0,0,0.18)] ring-1 ring-white/20">
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
        <span className="block text-sm font-semibold text-white">SentraRisk</span>
        <span className="block text-[11px] font-medium uppercase text-cyan-100/90">Systems</span>
      </div>
    </div>
  );
}

function ProductVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#07131f]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.28] saturate-[0.85]"
      >
        <source src="/sentrarisk-intelligence-demo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 premium-grid opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(3,10,18,0.96)_0%,rgba(7,19,31,0.86)_42%,rgba(7,19,31,0.34)_72%,rgba(141,224,215,0.08)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(0deg,#07131f_0%,transparent_100%)]" />
    </div>
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
      className="rounded-md border border-slate-200 bg-white p-6 shadow-sm"
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
            className="h-11 rounded-md border border-slate-300 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Work email
          <input
            required
            type="email"
            name="email"
            className="h-11 rounded-md border border-slate-300 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
            placeholder="name@company.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Company
          <input
            required
            name="company"
            className="h-11 rounded-md border border-slate-300 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
            placeholder="Company name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Role
          <input
            name="role"
            className="h-11 rounded-md border border-slate-300 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
            placeholder="Founder, compliance, finance..."
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Organisation size
          <select
            name="organisation_size"
            defaultValue=""
            className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
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
            className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
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
          className="min-h-28 rounded-md border border-slate-300 px-3 py-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
          placeholder="Tell us about your payment-risk review, Xero, payroll output review, client control, or reporting requirements."
        />
      </label>

      <button
        type="submit"
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Send Enquiry Email <Mail className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}

function RiskScoreDemo() {
  const [amount, setAmount] = useState(12850);
  const [supplierAge, setSupplierAge] = useState(14);
  const [newBeneficiary, setNewBeneficiary] = useState(true);
  const [cryptoExposure, setCryptoExposure] = useState(false);
  const [invoiceAnomaly, setInvoiceAnomaly] = useState(true);

  const result = useMemo(() => {
    const amountScore = amount > 20000 ? 28 : amount > 10000 ? 20 : amount > 5000 ? 12 : 4;
    const supplierScore = supplierAge < 7 ? 24 : supplierAge < 30 ? 16 : supplierAge < 90 ? 8 : 2;
    const score = Math.min(
      98,
      14 +
        amountScore +
        supplierScore +
        (newBeneficiary ? 18 : 0) +
        (cryptoExposure ? 16 : 0) +
        (invoiceAnomaly ? 14 : 0),
    );

    const reasons = [
      amount > 10000 ? riskReasons.amount : null,
      supplierAge < 30 ? riskReasons.supplier : null,
      newBeneficiary ? riskReasons.beneficiary : null,
      cryptoExposure ? riskReasons.crypto : null,
      invoiceAnomaly ? riskReasons.invoice : null,
    ].filter(Boolean) as string[];

    return {
      score,
      level: score >= 75 ? "High" : score >= 50 ? "Review" : "Monitor",
      action: score >= 75 ? "Escalate before approval" : score >= 50 ? "Review supporting evidence" : "Keep in monitoring queue",
      reasons: reasons.length ? reasons : ["No major risk driver selected. Keep normal monitoring active."],
    };
  }, [amount, supplierAge, newBeneficiary, cryptoExposure, invoiceAnomaly]);

  return (
    <div className="grid gap-6 rounded-lg border border-slate-200 bg-white p-5 shadow-[0_28px_90px_rgba(15,23,42,0.08)] lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-md bg-slate-50 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-950 text-cyan-300">
            <Gauge className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">Try the risk scorer</p>
            <p className="text-xs text-slate-500">Example scoring preview</p>
          </div>
        </div>

        <div className="mt-6 space-y-5">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Transaction amount: €{amount.toLocaleString("en-IE")}
            <input
              type="range"
              min="500"
              max="50000"
              step="250"
              value={amount}
              onChange={(event) => setAmount(Number(event.target.value))}
              className="accent-cyan-700"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Supplier age: {supplierAge} days
            <input
              type="range"
              min="1"
              max="180"
              step="1"
              value={supplierAge}
              onChange={(event) => setSupplierAge(Number(event.target.value))}
              className="accent-cyan-700"
            />
          </label>

          {[
            ["New beneficiary", newBeneficiary, setNewBeneficiary],
            ["External exposure", cryptoExposure, setCryptoExposure],
            ["Invoice anomaly", invoiceAnomaly, setInvoiceAnomaly],
          ].map(([label, checked, setter]) => (
            <label key={label as string} className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
              {label as string}
              <input
                type="checkbox"
                checked={checked as boolean}
                onChange={(event) => (setter as React.Dispatch<React.SetStateAction<boolean>>)(event.target.checked)}
                className="h-5 w-5 accent-cyan-700"
              />
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-md bg-slate-950 p-6 text-white">
        <p className="text-sm font-semibold uppercase text-cyan-300">Risk result</p>
        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-6xl font-semibold tracking-normal">{result.score}</p>
            <p className="mt-2 text-sm text-slate-300">Risk score out of 100</p>
          </div>
          <span className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950">{result.level}</span>
        </div>
        <div className="mt-6 rounded-md border border-white/10 bg-white/5 p-4">
          <p className="text-sm font-semibold text-white">Recommended action</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">{result.action}</p>
        </div>
        <div className="mt-5 space-y-3">
          {result.reasons.map((reason) => (
            <div key={reason} className="flex gap-3 text-sm leading-6 text-slate-300">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
              {reason}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SentraRiskLandingPage() {
  return (
    <main className="premium-shell min-h-screen text-slate-950">
      <section className="relative min-h-[94vh] overflow-hidden">
        <ProductVisual />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,18,0.98)_0%,rgba(7,19,31,0.94)_42%,rgba(7,19,31,0.58)_68%,rgba(255,255,255,0.03)_100%)]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-5 md:px-8">
          <a href="#" className="shrink-0">
            <LogoMark />
          </a>
          <div className="hidden items-center gap-7 border-b border-white/10 pb-2 text-sm font-medium text-slate-300 md:flex">
            <a href="#platform" className="hover:text-white">Platform</a>
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <a href="#who" className="hover:text-white">Who it&apos;s for</a>
            <a href="#use-cases" className="hover:text-white">Use cases</a>
            <a href={REGISTER_URL} className="hover:text-white">Demo</a>
            <a href="#pilot" className="hover:text-white">Pilot</a>
            <a href="#demo" className="hover:text-white">Contact</a>
          </div>
          <a
            href={APP_URL}
            className="inline-flex h-10 items-center justify-center rounded-md bg-white px-5 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition hover:bg-cyan-100"
          >
            Login
          </a>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(94vh-80px)] max-w-7xl items-center px-5 pb-16 pt-10 md:px-8">
          <div className="max-w-[700px]">
            <div className="mb-6 inline-flex items-center gap-3 text-sm font-semibold text-cyan-100">
              <span className="h-px w-10 bg-[#8de0d7]" />
              Payment-risk intelligence for accountable finance teams
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-normal text-white md:text-6xl">
              Control payment risk before it becomes financial loss.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              SentraRisk gives accountants, bookkeepers, and SME finance teams an enterprise-grade review layer for supplier bills, payroll payment outputs, duplicate-looking activity, unusual payment patterns, and client-ready evidence packs.
            </p>
            <div className="mt-5 grid max-w-2xl gap-2 sm:grid-cols-2">
              {operatingPrinciples.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-[#8de0d7]" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={TRIAL_ENQUIRY_URL}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-cyan-300 px-7 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(141,224,215,0.22)] transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Start 14-Day Trial <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#demo"
                className="smooth-glass inline-flex h-12 items-center justify-center gap-2 rounded-lg px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Speak to SentraRisk <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-8 flex max-w-3xl flex-col gap-3 border-t border-white/10 pt-5 text-sm text-slate-300 sm:flex-row sm:items-center sm:gap-6">
              {metrics.map(([value, label]) => (
                <div key={value} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8de0d7]" />
                  <p>
                    <span className="font-semibold text-white">{value}</span>
                    <span className="text-slate-400"> · {label}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="proof-rail border-y border-slate-200/70 px-5 py-8 backdrop-blur md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {premiumStats.map(([value, label]) => (
            <div key={value} className="border-l border-cyan-700/25 pl-5">
              <span className="text-xl font-semibold text-slate-950">{value}</span>
              <p className="mt-1 max-w-48 text-sm font-medium leading-5 text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#07131f] px-5 py-16 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {enterpriseProof.map(([title, text]) => (
            <div key={title} className="border-l border-[#8de0d7]/35 pl-6">
              <p className="text-sm font-semibold uppercase text-[#8de0d7]">{title}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="institutional-section px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">How it works</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                From client data to a useful review output.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                SentraRisk is designed around a simple review flow that accountants, bookkeepers, and SME finance teams can run without building a full compliance operation.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {howItWorks.map((item, index) => (
                <article key={item.title} className="institutional-card rounded-md p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="relative overflow-hidden border-y border-slate-200 bg-slate-50 px-5 py-24 md:px-8">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">Platform</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                Built for accountable risk review, not noisy dashboards.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                SentraRisk brings client-level Xero imports, payroll payment review, transaction scoring, alert handling, reporting, API keys, and account controls into one operating layer for accountants, bookkeepers, and SME finance teams.
              </p>
              <div className="mt-8 grid gap-2">
                {integrationProof.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-cyan-700" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="institutional-card group rounded-md p-6 transition hover:-translate-y-1 hover:border-cyan-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-cyan-50 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
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

      <section className="border-y border-slate-200 bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Built with control in mind</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Automation for the review work, human judgement for the decision.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              SentraRisk was created to make payment-risk review more accessible for SMEs that do not have enterprise compliance teams. The platform helps teams spot risk indicators, but keeps the final decision with the people responsible for the business.
            </p>
            <div className="mt-8">
              <Link
                href="/accountants"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                See Accountant Workflows <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="grid gap-3">
            {trustSignals.map((item) => (
              <div key={item} className="flex gap-3 rounded-md border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" aria-hidden="true" />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="who" className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">Who it&apos;s for</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                Built for teams that need risk control without enterprise drag.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                SentraRisk gives lean teams a serious review layer for supplier payments, payroll payment outputs, duplicate-looking transactions, unusual patterns, and evidence-ready reporting.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {audienceSegments.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
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

      <section id="product-demo" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">Product demo</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                A serious operating layer for payment-risk review.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Watch how SentraRisk brings dashboard oversight, Xero import, payroll payment review, transaction scoring, alert handling, reporting, and enterprise readiness into one controlled workflow.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={TRIAL_ENQUIRY_URL}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Request Trial Access <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={REGISTER_URL}
                  className="inline-flex h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Book a Walkthrough
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-3 shadow-[0_40px_120px_rgba(15,23,42,0.28)]">
              <div className="mb-3 flex items-center justify-between px-2 pt-1">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-semibold text-slate-400">SentraRisk live demo</span>
              </div>
              <video
                controls
                preload="metadata"
                playsInline
                className="aspect-video w-full rounded-md bg-black"
              >
                <source src="/sentrarisk-intelligence-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">For accountants</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              A practical way to turn client data into a control review.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              SentraRisk is designed to help practices and finance teams spot payment-risk issues, explain what was reviewed, and give clients a useful output they can act on.
            </p>
            <Link
              href="/accountants"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              See how it supports client reviews <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {accountantOutcomes.map((item) => (
              <article key={item.title} className="rounded-md border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
                  <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="risk-scorer" className="border-y border-slate-200 bg-slate-50 px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Interactive demo</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Score a sample transaction before booking a call.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Adjust a sample transaction and see how SentraRisk turns risk indicators into a score, reasons, and a recommended review action.
            </p>
            <a
              href={TRIAL_ENQUIRY_URL}
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Request Trial Access <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <RiskScoreDemo />
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Workflow</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              From transaction data to a defensible decision.
            </h2>
          </div>
          <div className="space-y-4">
            {workflow.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-base leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="border-y border-slate-200 bg-slate-50 px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cyan-700">Use cases</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              High-value workflows for finance teams that need control.
            </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Use SentraRisk as a client review desk, Xero-backed payment-risk monitor, payroll payment review layer, reporting engine, or scoring layer depending on where your workflow starts.
              </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {useCases.map((item) => (
              <div key={item.title} className="institutional-card rounded-md p-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 bg-cyan-500" />
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
                className="group rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300"
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

      <section id="api" className="premium-dark px-5 py-24 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">API access</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal md:text-5xl">
              Connect risk scoring directly to operational workflows.
            </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Use Xero-supported imports, payroll exports, secure API keys, or batch uploads to score transactions, then review the same risk outcomes inside the dashboard.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={APP_URL}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Developer Dashboard <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={REGISTER_URL}
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Discuss Integration
              </a>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/55 p-5 font-mono text-sm shadow-2xl backdrop-blur">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <pre className="overflow-x-auto rounded-md bg-slate-950/80 p-4 text-slate-300">
{`POST /score-transaction
Authorization: Bearer YOUR_API_KEY

{
  "amount": 12850,
  "origin": "Customer A",
  "account": "Beneficiary B"
}

{
  "risk_score": 87,
  "risk_level": "High",
  "recommended_action": "Review"
}`}
            </pre>
          </div>
        </div>
      </section>

      <section id="pilot" className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Pilot programme</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Start with a focused 14-day payment-risk review.
            </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
              The SentraRisk pilot gives teams a practical way to test the workflow using sample data, anonymised transaction exports, payroll payment outputs, or Xero supplier bills before moving into a live monthly review process.
            </p>
            <div className="mt-6 rounded-md border border-cyan-200 bg-cyan-50 p-4 text-sm leading-6 text-slate-700">
              <strong className="text-slate-950">Pilot offer:</strong> review a small transaction set, assess the quality of alerts, and produce an example Client Control Pack your team can evaluate.
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/pilot-programme"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View Pilot Programme <Rocket className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#demo"
                className="inline-flex h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Send Enquiry
              </a>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-[0_28px_90px_rgba(15,23,42,0.08)]">
            <div className="grid gap-4">
              {pilotSteps.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-md border border-slate-200 bg-white p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-700 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-md bg-slate-950 p-5 text-white">
              <p className="text-sm font-semibold text-cyan-300">Typical pilot outcome</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                A clear view of where SentraRisk fits, which controls to activate first, and whether Xero import, payroll export review, dashboard, file upload, API, or hybrid deployment is the right path.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-b border-slate-200 bg-slate-50 px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">Pricing</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                Pricing by risk-control need.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Start with Xero-backed supplier risk review and payroll payment review, add Client Control Packs and board reporting, then scale into API access or a custom enterprise deployment.
              </p>
            </div>
            <div className="grid gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-3">
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
                className={`rounded-lg border p-6 shadow-sm transition hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-slate-950 bg-slate-950 text-white shadow-[0_30px_90px_rgba(15,23,42,0.24)]"
                    : "border-slate-200 bg-white text-slate-950"
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
                  className={`mt-7 inline-flex h-12 w-full items-center justify-center rounded-md px-6 text-sm font-semibold transition ${
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
              [Cloud, "Xero and payroll-ready workflow", "Import supplier bills from Xero and review payroll exports alongside uploaded and API-scored transactions."],
              [LockKeyhole, "Data control", "Designed for controlled environments and accountable review processes."],
            ].map(([Icon, title, text]) => {
              const TypedIcon = Icon as typeof Shield;
              return (
                <div key={title as string} className="institutional-card rounded-md p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50">
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

      <section id="faq" className="border-t border-slate-200 bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">FAQ</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Questions teams ask before starting.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              A short guide to setup, pilot scope, integrations, and review outputs.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.question} className="group rounded-md border border-slate-200 bg-slate-50 p-5 shadow-sm">
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

      <section id="demo" className="border-t border-slate-200 bg-slate-50 px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Contact</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Bring real-time risk review into your business.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Speak with SentraRisk Systems about Xero-supported imports, payroll payment review, payment-risk controls, Client Control Packs, API scoring, and implementation for your organisation.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <CheckLine text="Receive a focused product walkthrough" />
                <CheckLine text="Review Xero import, supplier bill scoring, and payroll payment outputs" />
                <CheckLine text="Discuss your transaction monitoring workflow" />
              </div>
              <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">Prefer email?</p>
                <a className="mt-2 block text-sm font-medium text-cyan-700" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  We usually respond with the next step and any setup questions needed for your organisation.
                </p>
              </div>
            </div>
          </div>
          <DemoForm />
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            <p>© 2026 SentraRisk Systems. All rights reserved.</p>
            <p className="mt-1">Fraud detection, payment-risk review, and client control reporting.</p>
          </div>
          <div className="flex flex-wrap gap-4 font-medium">
            <Link href="/xero-fraud-detection" className="hover:text-slate-950">Xero Fraud Detection</Link>
            <Link href="/supplier-fraud-detection" className="hover:text-slate-950">Supplier Fraud Detection</Link>
            <Link href="/accountants" className="hover:text-slate-950">Accountants</Link>
            <Link href="/pilot-programme" className="hover:text-slate-950">Pilot Programme</Link>
            <Link href="/privacy-policy" className="hover:text-slate-950">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-slate-950">Terms</Link>
            <Link href="/data-processing" className="hover:text-slate-950">Data Processing</Link>
            <Link href="/refund-policy" className="hover:text-slate-950">Refunds</Link>
            <Link href="/security-statement" className="hover:text-slate-950">Security</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
