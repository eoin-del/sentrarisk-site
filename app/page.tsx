"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Activity,
  ArrowRight,
  Bitcoin,
  CheckCircle2,
  Code2,
  FileText,
  Gauge,
  LockKeyhole,
  Mail,
  Shield,
  Siren,
  Users,
} from "lucide-react";

const APP_URL = "https://app.sentrarisksystems.com";
const CONTACT_EMAIL = "hello@sentrarisksystems.com";
const REGISTER_URL = `${APP_URL}/register`;

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
    icon: Code2,
    title: "API-first deployment",
    text: "Connect SentraRisk to internal tools with revocable API keys, transaction scoring endpoints, and bulk assessment support.",
  },
];

const metrics = [
  ["Live scoring", "Dashboard and API workflows"],
  ["Audit-ready", "Decision notes and exports"],
  ["SME-focused", "Built for lean finance teams"],
];

const workflow = [
  "Import transactions, stream via API, or review activity manually.",
  "SentraRisk assigns a risk score and explains the strongest indicators.",
  "Teams investigate, export reports, and keep a clear decision trail.",
];

const pricingPlans = [
  {
    name: "Starter",
    price: "€225",
    cadence: "/month",
    description: "For small teams that need a professional transaction risk workflow.",
    features: [
      "1 organisation",
      "3 users",
      "Excel upload",
      "Transaction risk scoring",
      "Basic alerts and reports",
      "Up to 1,000 transactions/month",
    ],
    cta: "Start 14-day trial",
    href: REGISTER_URL,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "€599",
    cadence: "/month",
    description: "For growing teams that need API access, crypto monitoring, and stronger controls.",
    features: [
      "10 users",
      "API keys",
      "Bulk upload",
      "Crypto monitoring",
      "Email alerts",
      "Audit trail export",
      "Up to 10,000 transactions/month",
    ],
    cta: "Start 14-day trial",
    href: REGISTER_URL,
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    cadence: "",
    description: "For larger, regulated, or custom deployment requirements.",
    features: [
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
  "Crypto monitoring",
  "API integration",
  "Transaction reports",
  "Enterprise setup",
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/sentrarisk-logo.svg"
        alt="SentraRisk Systems logo"
        width={40}
        height={40}
        className="h-10 w-10 rounded-md shadow-sm"
      />
      <div className="leading-tight">
        <span className="block text-sm font-semibold tracking-wide text-slate-950">SentraRisk</span>
        <span className="block text-xs font-medium text-slate-500">Systems</span>
      </div>
    </div>
  );
}

function ProductVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#eef3f7]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute left-1/2 top-16 w-[980px] -translate-x-1/2 border border-slate-300 bg-white shadow-2xl md:top-20">
        <div className="flex h-12 items-center justify-between border-b border-slate-200 px-5">
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
              <p className="text-sm font-semibold text-slate-950">Live risk operations</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="h-2 w-2 bg-emerald-500" />
            Monitoring active
          </div>
        </div>
        <div className="grid grid-cols-[220px_1fr]">
          <aside className="min-h-[520px] border-r border-slate-200 bg-slate-950 p-4 text-white">
            {["Overview", "Transactions", "Crypto", "Reports", "API"].map((item, index) => (
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
          <div className="p-5">
            <div className="grid grid-cols-3 gap-3">
              {[
                ["Transactions", "24,891", "+8.4%"],
                ["Flagged", "316", "1.27%"],
                ["Avg. Risk", "42", "-3.1%"],
              ].map(([label, value, change]) => (
                <div key={label} className="rounded-md border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-medium text-slate-500">{label}</p>
                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-2xl font-semibold text-slate-950">{value}</p>
                    <p className="text-xs font-medium text-cyan-700">{change}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-[1fr_240px] gap-4">
              <div className="rounded-md border border-slate-200 bg-white p-4">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-950">Flagged activity</p>
                  <p className="text-xs text-slate-500">Last 24 hours</p>
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
                      <p className="rounded-md bg-slate-100 px-2 py-1 text-center text-xs font-medium text-slate-600">
                        {row.status}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-md border border-slate-200 bg-slate-950 p-4 text-white">
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
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
    teamSize: "",
    interest: interestOptions[0],
    message: "",
  });

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submitDemoRequest(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`SentraRisk demo request from ${form.company || form.name}`);
    const body = encodeURIComponent(
      [
        "New SentraRisk demo request",
        "",
        `Name: ${form.name}`,
        `Company: ${form.company}`,
        `Email: ${form.email}`,
        `Role: ${form.role || "Not provided"}`,
        `Team size: ${form.teamSize || "Not provided"}`,
        `Interested in: ${form.interest}`,
        "",
        "Message:",
        form.message || "Not provided",
      ].join("\n"),
    );

    setSubmitted(true);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={submitDemoRequest} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <Users className="mt-0.5 h-6 w-6 text-cyan-700" aria-hidden="true" />
        <div>
          <p className="text-lg font-semibold text-slate-950">Book a product demo</p>
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
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="h-11 rounded-md border border-slate-300 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Work email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="h-11 rounded-md border border-slate-300 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
            placeholder="name@company.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Company
          <input
            required
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="h-11 rounded-md border border-slate-300 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
            placeholder="Company name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Role
          <input
            value={form.role}
            onChange={(event) => updateField("role", event.target.value)}
            className="h-11 rounded-md border border-slate-300 px-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
            placeholder="Founder, compliance, finance..."
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Organisation size
          <select
            value={form.teamSize}
            onChange={(event) => updateField("teamSize", event.target.value)}
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
            value={form.interest}
            onChange={(event) => updateField("interest", event.target.value)}
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
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-28 rounded-md border border-slate-300 px-3 py-3 text-sm text-slate-950 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10"
          placeholder="Tell us about your fraud detection, transaction monitoring, or crypto risk requirements."
        />
      </label>

      <button
        type="submit"
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Send Demo Request <Mail className="h-4 w-4" aria-hidden="true" />
      </button>

      {submitted && (
        <p className="mt-3 rounded-md bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800">
          Your email app should now open with the completed request.
        </p>
      )}
    </form>
  );
}

export default function SentraRiskLandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative min-h-[92vh] overflow-hidden">
        <ProductVisual />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_34%,rgba(255,255,255,0.56)_62%,rgba(255,255,255,0.22)_100%)]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <a href="#" className="flex items-center gap-3">
            <LogoMark />
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#platform" className="hover:text-slate-950">Platform</a>
            <a href="#api" className="hover:text-slate-950">API</a>
            <a href="#pricing" className="hover:text-slate-950">Pricing</a>
            <a href="#security" className="hover:text-slate-950">Security</a>
            <a href="#demo" className="hover:text-slate-950">Contact</a>
          </div>
          <a
            href={APP_URL}
            className="inline-flex h-10 items-center justify-center rounded-md bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Login
          </a>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(92vh-80px)] max-w-7xl items-center px-5 pb-20 pt-16 md:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <span className="h-2 w-2 bg-cyan-500" />
              Transaction risk intelligence for modern finance teams
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-normal text-slate-950 md:text-7xl">
              Real-time fraud prevention for growing businesses.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              SentraRisk Intelligence helps SMEs score transactions, review alerts, monitor crypto exposure, and export decision-ready risk reports from one secure dashboard.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={REGISTER_URL}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800"
              >
                Start Trial <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#demo"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Book a Demo <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
              {metrics.map(([value, label]) => (
                <div key={value} className="border-l-2 border-cyan-500 bg-white/70 py-2 pl-4">
                  <p className="text-sm font-semibold text-slate-950">{value}</p>
                  <p className="mt-1 text-sm text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="border-y border-slate-200 bg-slate-50 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">Platform</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                Built for accountable risk review, not noisy dashboards.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                SentraRisk brings transaction scoring, alert handling, reporting, API keys, and business account controls into a single operating layer for small to medium enterprises.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => {
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

      <section id="api" className="bg-slate-950 px-5 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">API access</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal md:text-5xl">
              Connect fraud scoring directly to your operations.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Use secure API keys to score individual transactions or upload batches, then review the same risk outcomes inside the dashboard.
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
          <div className="rounded-md border border-white/10 bg-black p-5 font-mono text-sm shadow-2xl">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <pre className="overflow-x-auto text-slate-300">
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

      <section id="pricing" className="border-b border-slate-200 bg-slate-50 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">Pricing</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
                Premium risk software priced for serious operations.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Start with a focused fraud-risk workflow, then scale into API access, crypto monitoring, email alerts, and custom deployment support as your controls mature.
              </p>
            </div>
            <div className="grid gap-3 rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-3">
              {[
                ["14 days", "Trial access"],
                ["No lock-in", "Monthly plans"],
                ["Contact us", "Enterprise setup"],
              ].map(([value, label]) => (
                <div key={value} className="border-l-2 border-cyan-500 pl-4">
                  <p className="text-lg font-semibold text-slate-950">{value}</p>
                  <p className="mt-1 text-sm text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-md border p-6 shadow-sm ${
                  plan.highlighted
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-200 bg-white text-slate-950"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="rounded-md bg-cyan-300 px-2 py-1 text-xs font-semibold text-slate-950">
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

      <section id="security" className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [Shield, "Business account structure", "Admin and user dashboards designed around organisational access."],
              [LockKeyhole, "Data control", "Designed for controlled environments and accountable review processes."],
              [FileText, "Report exports", "Generate analyst and executive risk reports for internal records."],
            ].map(([Icon, title, text]) => {
              const TypedIcon = Icon as typeof Shield;
              return (
                <div key={title as string} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                  <TypedIcon className="h-6 w-6 text-cyan-700" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{title as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text as string}</p>
                </div>
              );
            })}
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
              Speak with SentraRisk Systems about fraud detection, crypto monitoring, API scoring, and implementation for your organisation.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <CheckLine text="Receive a focused product walkthrough" />
                <CheckLine text="Discuss your transaction monitoring workflow" />
                <CheckLine text="Review API and dashboard setup options" />
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
            <Link href="/privacy-policy" className="hover:text-slate-950">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-slate-950">Terms</Link>
            <Link href="/security-statement" className="hover:text-slate-950">Security</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
