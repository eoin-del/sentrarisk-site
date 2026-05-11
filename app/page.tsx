"use client";

import React from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bitcoin,
  Code2,
  FileText,
  Gauge,
  LockKeyhole,
  Mail,
  Shield,
  ShieldCheck,
  Siren,
  Users,
} from "lucide-react";

const APP_URL = "https://app.sentrarisksystems.com";
const CONTACT_EMAIL = "hello@sentrarisksystems.com";

const riskRows = [
  { label: "Velocity spike", score: "91", status: "Investigate" },
  { label: "New beneficiary", score: "78", status: "Review" },
  { label: "Crypto wallet exposure", score: "84", status: "Watch" },
  { label: "Invoice pattern anomaly", score: "67", status: "Monitor" },
];

const capabilities = [
  {
    icon: Gauge,
    title: "Real-time risk scoring",
    text: "Score transaction activity as it enters your workflow, with clear risk reasons for analysts and decision makers.",
  },
  {
    icon: Siren,
    title: "Alert operations",
    text: "Route flagged transactions into a review workflow with status, ownership, notes, and audit history.",
  },
  {
    icon: Bitcoin,
    title: "Crypto monitoring",
    text: "Track wallet activity and highlight common laundering indicators such as rapid movement, exposure, and unusual flow.",
  },
  {
    icon: Code2,
    title: "Developer API",
    text: "Connect SentraRisk to internal tools with API keys, transaction scoring endpoints, and bulk assessment support.",
  },
];

const metrics = [
  ["Live scoring", "API and dashboard"],
  ["Audit-ready", "Notes and review history"],
  ["SME-focused", "Built for lean teams"],
];

const workflow = [
  "Import transactions, stream via API, or review activity manually.",
  "SentraRisk assigns a risk score and explains the strongest indicators.",
  "Teams investigate, export reports, and keep a clear decision trail.",
];

function LogoMark() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-950 shadow-sm">
      <ShieldCheck className="h-5 w-5" aria-hidden="true" />
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
            <LogoMark />
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

export default function SentraRiskLandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative min-h-[92vh] overflow-hidden">
        <ProductVisual />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_34%,rgba(255,255,255,0.56)_62%,rgba(255,255,255,0.22)_100%)]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <a href="#" className="flex items-center gap-3">
            <LogoMark />
            <span className="text-sm font-semibold tracking-wide">SentraRisk Systems</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#platform" className="hover:text-slate-950">Platform</a>
            <a href="#api" className="hover:text-slate-950">API</a>
            <a href="#security" className="hover:text-slate-950">Security</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-slate-950">Contact</a>
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
              Fraud detection infrastructure for growing businesses
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-normal text-slate-950 md:text-7xl">
              Real-time fraud risk intelligence for SMEs.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              SentraRisk helps teams score transactions, review alerts, monitor crypto exposure, and export clear risk reports from one professional dashboard.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={APP_URL}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800"
              >
                Open Platform <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
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
                Built for teams that need clarity, not noise.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                SentraRisk brings transaction scoring, alert handling, reporting, and business account controls into a single workflow for small to medium enterprises.
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
                href={`mailto:${CONTACT_EMAIL}`}
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

      <section id="contact" className="border-t border-slate-200 bg-slate-50 px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Contact</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Bring real-time risk review into your business.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Speak with SentraRisk Systems about fraud detection, crypto monitoring, API scoring, and implementation for your organisation.
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-cyan-700" aria-hidden="true" />
              <p className="text-lg font-semibold text-slate-950">Ready for a demo?</p>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Contact the team or open the platform to continue setup.
            </p>
            <div className="mt-6 grid gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Contact Us <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={APP_URL}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-300 px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Open Platform <BarChart3 className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SentraRisk Systems. All rights reserved.</p>
          <p>Fraud detection, transaction monitoring, and risk intelligence.</p>
        </div>
      </footer>
    </main>
  );
}
