"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  Bitcoin,
  CheckCircle2,
  Code2,
  Cloud,
  Download,
  FileText,
  Gauge,
  Landmark,
  LockKeyhole,
  Mail,
  Rocket,
  Shield,
  Siren,
  Store,
  Users,
} from "lucide-react";
import { sampleReports } from "./marketing-content";

const APP_URL = "https://app.sentrarisksystems.com";
const CONTACT_EMAIL = "eoin@sentrarisksystems.com";
const TRIAL_ENQUIRY_URL = "#demo";
const appBillingUrl = (plan: string) => `${APP_URL}/billing?plan=${encodeURIComponent(plan)}`;

const riskRows = [
  { label: "Velocity spike", score: "91", status: "Investigate" },
  { label: "New beneficiary", score: "78", status: "Review" },
  { label: "Crypto wallet exposure", score: "84", status: "Watch" },
  { label: "Invoice pattern anomaly", score: "67", status: "Monitor" },
];

const capabilities = [
  {
    icon: Gauge,
    title: "Real-time transaction intelligence",
    text: "Score payment activity as it enters your workflow, with clear risk reasons analysts and business owners can act on.",
  },
  {
    icon: Siren,
    title: "Operational alert review",
    text: "Route flagged transactions into a structured workflow with status, ownership, reviewer notes, and audit history.",
  },
  {
    icon: Bitcoin,
    title: "Crypto risk monitoring",
    text: "Track wallet activity and highlight laundering indicators such as rapid movement, exposure, and unusual value flow.",
  },
  {
    icon: Cloud,
    title: "Xero-supported imports",
    text: "Connect Xero, import supplier bills, and score them inside the same alert and reporting workflow as uploaded files and API data.",
  },
  {
    icon: Code2,
    title: "API-first deployment",
    text: "Connect SentraRisk to internal tools with revocable API keys, transaction scoring endpoints, and bulk assessment support.",
  },
];

const metrics = [
  ["Xero support", "Supplier bill imports"],
  ["Audit-ready", "Decision notes and exports"],
  ["SME-focused", "Built for lean finance teams"],
];

const premiumStats = [
  ["90-day", "Xero bill import window"],
  ["Live", "Risk scoring workflow"],
  ["PDF", "Compliance-ready exports"],
  ["API", "Built for integration"],
];

const integrationProof = [
  "Xero supplier bills",
  "Excel transaction files",
  "Risk scoring API",
  "Crypto wallet checks",
  "Audit-ready reports",
];

const workflow = [
  "Import transactions from Xero, upload a file, stream via API, or review activity manually.",
  "SentraRisk assigns a risk score and explains the strongest indicators.",
  "Teams investigate, export reports, and keep a clear decision trail.",
];

const audienceSegments = [
  {
    icon: Store,
    title: "SMEs handling regular payment volume",
    text: "For operators who need professional fraud review without building a full internal risk team.",
  },
  {
    icon: Landmark,
    title: "Finance and compliance teams",
    text: "For teams that need clear scoring, reviewer ownership, and exportable evidence for internal controls.",
  },
  {
    icon: Code2,
    title: "Platforms and fintech workflows",
    text: "For products that want transaction scoring, API keys, and batch review built into existing operations.",
  },
];

const useCases = [
  {
    title: "Supplier and invoice fraud review",
    text: "Import supplier bills from Xero or file upload, then flag unusual amounts, new beneficiaries, timing anomalies, and payment patterns before review.",
    href: "/supplier-fraud-detection",
  },
  {
    title: "Customer transaction monitoring",
    text: "Score incoming activity, investigate high-risk records, and keep a consistent review trail across the team.",
    href: "#demo",
  },
  {
    title: "Crypto exposure checks",
    text: "Assess wallet behaviour, velocity, and laundering indicators alongside ordinary transaction risk workflows.",
    href: "#demo",
  },
  {
    title: "Board and audit reporting",
    text: "Turn operational reviews into decision memos, compliance packs, and concise evidence for leadership.",
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
    text: "For advisors who want client-ready fraud-risk reports, board summaries, and compliance pack exports.",
    href: "/accountants",
  },
];

const riskReasons = {
  amount: "Transaction amount is above normal SME supplier review thresholds.",
  supplier: "Supplier is new or has limited payment history.",
  beneficiary: "Beneficiary details changed or are newly introduced.",
  crypto: "Crypto exposure adds additional source-of-funds review pressure.",
  invoice: "Invoice timing or pattern is unusual for the supplier relationship.",
};

const pilotSteps = [
  "Connect Xero, a sample transaction file, dashboard workflow, or scoring API path.",
  "Run a focused review period with real examples, risk reasons, and feedback from your team.",
  "Leave with a deployment recommendation, pricing path, and clear next controls to activate.",
];

const faqs = [
  {
    question: "Who is SentraRisk built for?",
    answer:
      "SentraRisk is built for SMEs, finance teams, compliance operators, and platforms that need a practical way to score transaction risk and manage fraud review.",
  },
  {
    question: "Do we need engineers to get started?",
    answer:
      "No. Teams can begin with dashboard access, Xero-supported imports, and file upload. API access is available when you want to connect scoring directly to internal systems.",
  },
  {
    question: "Does SentraRisk support Xero?",
    answer:
      "Yes. SentraRisk supports Xero supplier bill imports so teams can bring recent bills into the dashboard, score them for risk, and review alerts alongside other transaction data.",
  },
  {
    question: "What happens during the pilot programme?",
    answer:
      "We agree a focused workflow, run representative data through SentraRisk, review the results together, and decide the best production setup.",
  },
  {
    question: "Can SentraRisk support crypto monitoring?",
    answer:
      "Yes. SentraRisk includes crypto risk monitoring for wallet activity, unusual value flow, rapid movement, and exposure indicators.",
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
    price: "€149",
    cadence: "/month",
    description: "For small teams that want Xero-backed supplier risk checks and basic reporting.",
    features: [
      "1 organisation",
      "3 users",
      "Xero-supported imports",
      "Excel upload",
      "Transaction risk scoring",
      "Basic alerts and reports",
      "Up to 10,000 transactions/month",
    ],
    cta: "Start 14-day trial",
    href: appBillingUrl("starter"),
    highlighted: false,
  },
  {
    name: "Compliance",
    price: "€299",
    cadence: "/month",
    description: "For accountants, virtual CFOs, and operators who need audit-ready packs.",
    features: [
      "5 users",
      "Xero supplier bill imports",
      "Compliance pack exports",
      "Board summary PDF",
      "Risk notes and ownership",
      "Email alerts",
      "Up to 20,000 transactions/month",
    ],
    cta: "Start 14-day trial",
    href: appBillingUrl("compliance"),
    highlighted: true,
  },
  {
    name: "Growth",
    price: "€499",
    cadence: "/month",
    description: "For finance teams that need API access, crypto monitoring, and higher volume.",
    features: [
      "10 users",
      "API keys",
      "Xero supplier bill imports",
      "Bulk upload",
      "Crypto monitoring",
      "Email alerts",
      "Audit trail export",
      "Up to 30,000 transactions/month",
    ],
    cta: "Start 14-day trial",
    href: appBillingUrl("growth"),
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    cadence: "",
    description: "For larger, regulated, or custom deployment requirements.",
    features: [
      "25+ users",
      "Custom transaction limits",
      "Custom risk rules",
      "Local/customer environment deployment",
      "Dedicated onboarding",
      "Priority support",
      "Security review support",
    ],
    cta: "Contact Sales",
    href: `mailto:${CONTACT_EMAIL}?subject=Enterprise%20plan%20enquiry`,
    highlighted: false,
  },
];

const interestOptions = [
  "Fraud detection",
  "Xero integration",
  "Crypto monitoring",
  "API integration",
  "Transaction reports",
  "Enterprise setup",
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-3 py-2 shadow-sm backdrop-blur">
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#102033] ring-1 ring-white/20">
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
        <span className="block text-[11px] font-medium uppercase text-cyan-100">Systems</span>
      </div>
    </div>
  );
}

function ProductVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#edf4f7] premium-grid">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,124,134,0.22)_0%,transparent_38%),linear-gradient(250deg,rgba(141,224,215,0.18)_0%,transparent_42%)]" />
      <div className="absolute left-[54%] top-14 w-[1040px] -translate-x-1/2 overflow-hidden rounded-[28px] border border-white/70 bg-white/92 shadow-[0_40px_140px_rgba(15,23,42,0.22)] backdrop-blur md:top-16">
        <div className="flex h-14 items-center justify-between border-b border-slate-200/80 bg-white/80 px-5">
          <div className="flex items-center gap-3">
            <Image
              src="/sentrarisk-logo.svg"
              alt="SentraRisk Systems logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-md"
            />
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">SentraRisk Command</p>
              <p className="text-sm font-semibold text-slate-950">Xero risk operations</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Connected to Xero
          </div>
        </div>
        <div className="grid grid-cols-[220px_1fr]">
          <aside className="min-h-[520px] border-r border-slate-200 bg-slate-950 p-4 text-white">
            {["Overview", "Xero Import", "Transactions", "Crypto", "Reports", "API"].map((item, index) => (
              <div
                key={item}
                className={`mb-2 flex h-10 items-center gap-3 rounded-md px-3 text-sm ${
                  index === 0 ? "bg-white text-slate-950" : "text-slate-300"
                }`}
              >
                <span className="h-1.5 w-1.5 bg-cyan-400" />
                {item}
              </div>
            ))}
          </aside>
          <div className="bg-slate-50/60 p-5">
            <div className="grid grid-cols-3 gap-3">
              {[
                ["Bills imported", "1,248", "Xero"],
                ["Flagged", "37", "Review"],
                ["Avg. Risk", "42", "-3.1%"],
              ].map(([label, value, change]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-medium text-slate-500">{label}</p>
                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-2xl font-semibold text-slate-950">{value}</p>
                    <p className="text-xs font-medium text-cyan-700">{change}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-[1fr_240px] gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-950">Supplier risk queue</p>
                  <p className="text-xs text-slate-500">Imported from Xero</p>
                </div>
                <div className="space-y-3">
                  {riskRows.map((row) => (
                    <div key={row.label} className="grid grid-cols-[1fr_56px_90px] items-center gap-3 border-b border-slate-100 pb-3 last:border-b-0">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-rose-50 text-rose-700">
                          <Activity className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <p className="text-sm font-medium text-slate-800">{row.label}</p>
                      </div>
                      <p className="text-sm font-semibold text-slate-950">{row.score}</p>
                      <p className="rounded-full bg-slate-100 px-2 py-1 text-center text-xs font-medium text-slate-600">
                        {row.status}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-white shadow-xl">
                <p className="text-sm font-semibold">Risk distribution</p>
                <div className="mt-6 flex h-32 items-end gap-2">
                  {[34, 58, 46, 75, 62, 88, 54].map((height, index) => (
                    <span
                      key={height + index}
                      className="w-full rounded-t-sm bg-cyan-400"
                      style={{ height: `${height}%`, opacity: 0.45 + index * 0.06 }}
                    />
                  ))}
                </div>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-xs text-slate-400">Highest exposure</p>
                  <p className="mt-1 text-lg font-semibold">Wallet velocity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  return (
    <form
      action={`https://formsubmit.co/${CONTACT_EMAIL}`}
      method="POST"
      className="rounded-md border border-slate-200 bg-white p-6 shadow-sm"
    >
      <input type="hidden" name="_subject" value="New SentraRisk trial enquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://www.sentrarisksystems.com/thank-you" />
      <div className="flex items-start gap-3">
        <Users className="mt-0.5 h-6 w-6 text-cyan-700" aria-hidden="true" />
        <div>
          <p className="text-lg font-semibold text-slate-950">Request trial access</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Tell us a little about your organisation and we will come back to you with the right trial setup.
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
          placeholder="Tell us about your fraud detection, transaction monitoring, or crypto risk requirements."
        />
      </label>

      <button
        type="submit"
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Send Trial Enquiry <Mail className="h-4 w-4" aria-hidden="true" />
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
    <div className="grid gap-6 rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_28px_90px_rgba(15,23,42,0.08)] lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-2xl bg-slate-50 p-5">
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
            ["Crypto exposure", cryptoExposure, setCryptoExposure],
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

      <div className="rounded-2xl bg-slate-950 p-6 text-white">
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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,31,0.96)_0%,rgba(16,32,51,0.92)_38%,rgba(16,32,51,0.54)_64%,rgba(255,255,255,0.08)_100%)]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-5 md:px-8">
          <a href="#" className="shrink-0">
            <LogoMark />
          </a>
          <div className="hidden items-center gap-7 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-slate-200 shadow-sm backdrop-blur md:flex">
            <a href="#platform" className="hover:text-white">Platform</a>
            <a href="#who" className="hover:text-white">Who it&apos;s for</a>
            <a href="#use-cases" className="hover:text-white">Use cases</a>
            <a href="#product-demo" className="hover:text-white">Demo</a>
            <Link href="/sample-reports" className="hover:text-white">Reports</Link>
            <a href="#pilot" className="hover:text-white">Pilot</a>
            <a href="#demo" className="hover:text-white">Contact</a>
          </div>
          <a
            href={APP_URL}
            className="inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition hover:bg-cyan-100"
          >
            Login
          </a>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(94vh-80px)] max-w-7xl items-center px-5 pb-24 pt-16 md:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_16px_rgba(6,182,212,0.65)]" />
              Xero-supported fraud-risk intelligence
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-normal text-white md:text-7xl">
              Fraud-risk intelligence that looks boardroom-ready.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              SentraRisk Intelligence helps SMEs import Xero supplier bills, score transactions, review alerts, monitor crypto exposure, and export decision-ready risk reports from one secure dashboard.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={TRIAL_ENQUIRY_URL}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(141,224,215,0.22)] transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Start Trial <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#demo"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Book a Demo <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
              {metrics.map(([value, label]) => (
                <div key={value} className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-sm backdrop-blur">
                  <p className="text-sm font-semibold text-white">{value}</p>
                  <p className="mt-1 text-sm text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white/75 px-5 py-6 backdrop-blur md:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {premiumStats.map(([value, label]) => (
            <div key={value} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <span className="text-2xl font-semibold text-slate-950">{value}</span>
              <span className="max-w-32 text-right text-sm font-medium leading-5 text-slate-500">{label}</span>
            </div>
          ))}
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
                SentraRisk brings Xero-supported imports, transaction scoring, alert handling, reporting, API keys, and business account controls into a single operating layer for small to medium enterprises.
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
                  <div key={item.title} className="premium-card group rounded-[24px] border border-white bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(15,23,42,0.13)]">
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

      <section id="who" className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">Who it&apos;s for</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                Built for teams that need risk control without enterprise drag.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                SentraRisk gives lean teams a serious review layer for fraud, transaction monitoring, crypto exposure, and evidence-ready reporting.
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
                See SentraRisk Intelligence in action.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Watch a short walkthrough of the dashboard, Xero import flow, transaction scoring workflow, alert review, reporting, API controls, and enterprise readiness features.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={TRIAL_ENQUIRY_URL}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Start Trial <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#demo"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Book a Demo
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-slate-800 bg-slate-950 p-3 shadow-[0_40px_120px_rgba(15,23,42,0.28)]">
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
                className="aspect-video w-full rounded-2xl bg-black"
              >
                <source src="/sentrarisk-intelligence-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
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

      <section id="use-cases" className="border-y border-slate-200 bg-slate-50 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cyan-700">Use cases</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Practical fraud-risk workflows your team can run this week.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Use SentraRisk as a review desk, API scoring layer, crypto monitoring view, or reporting engine depending on where your risk process starts.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
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

      <section id="sample-reports" className="border-y border-slate-200 bg-white px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Sample reports</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                See the outputs your team can take into a review meeting.
            </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Sample board summaries, compliance packs, and transaction reports make SentraRisk feel tangible before a prospect logs in.
              </p>
            </div>
            <Link
              href="/sample-reports"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800 lg:justify-self-end"
            >
              View Sample Reports <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {sampleReports.map((report) => (
              <div key={report.title} className="rounded-md border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase text-cyan-700">{report.label}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">{report.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{report.description}</p>
                <a
                  href={report.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900"
                >
                  Download sample <Download className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="api" className="premium-dark px-5 py-24 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">API access</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal md:text-5xl">
              Connect fraud scoring directly to your operations.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Use Xero-supported imports, secure API keys, or batch uploads to score transactions, then review the same risk outcomes inside the dashboard.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={APP_URL}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Developer Dashboard <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#demo"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Discuss Integration
              </a>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-black/55 p-5 font-mono text-sm shadow-2xl backdrop-blur">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <pre className="overflow-x-auto rounded-2xl bg-slate-950/80 p-4 text-slate-300">
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
              Prove the workflow before you roll it out.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              The SentraRisk pilot is a focused evaluation for teams that want to test Xero imports, real transaction review, risk reasons, reporting outputs, and API fit before committing to production.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/pilot-programme"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View Pilot Programme <Rocket className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=SentraRisk%20pilot%20programme`}
                className="inline-flex h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Email the Team
              </a>
            </div>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-[0_28px_90px_rgba(15,23,42,0.08)]">
            <div className="grid gap-4">
              {pilotSteps.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
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
                A clear view of where SentraRisk fits, which controls to activate first, and whether Xero import, dashboard, file upload, API, or hybrid deployment is the right path.
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
                Start with Xero-backed supplier risk review, add compliance packs and board reporting, then scale into API access, crypto monitoring, or a custom enterprise deployment.
              </p>
            </div>
            <div className="grid gap-3 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-3">
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
                className={`rounded-[28px] border p-6 shadow-sm transition hover:-translate-y-1 ${
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
              [Cloud, "Xero-supported workflow", "Import supplier bills from Xero and review them alongside uploaded and API-scored transactions."],
              [LockKeyhole, "Data control", "Designed for controlled environments and accountable review processes."],
            ].map(([Icon, title, text]) => {
              const TypedIcon = Icon as typeof Shield;
              return (
                <div key={title as string} className="premium-card rounded-[24px] border border-white p-6">
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
              Speak with SentraRisk Systems about Xero-supported imports, fraud detection, crypto monitoring, API scoring, and implementation for your organisation.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <CheckLine text="Receive a focused product walkthrough" />
                <CheckLine text="Review Xero import and supplier bill scoring" />
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
            <p className="mt-1">Fraud detection, transaction monitoring, and risk intelligence.</p>
          </div>
          <div className="flex flex-wrap gap-4 font-medium">
            <Link href="/xero-fraud-detection" className="hover:text-slate-950">Xero Fraud Detection</Link>
            <Link href="/supplier-fraud-detection" className="hover:text-slate-950">Supplier Fraud Detection</Link>
            <Link href="/accountants" className="hover:text-slate-950">Accountants</Link>
            <Link href="/sample-reports" className="hover:text-slate-950">Sample Reports</Link>
            <Link href="/pilot-programme" className="hover:text-slate-950">Pilot Programme</Link>
            <Link href="/privacy-policy" className="hover:text-slate-950">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-slate-950">Terms</Link>
            <Link href="/security-statement" className="hover:text-slate-950">Security</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
