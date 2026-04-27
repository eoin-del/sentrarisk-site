"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, Lock, Brain, ArrowRight, CheckCircle2 } from "lucide-react";

export default function SentraRiskLandingPage() {
  const features = [
    "Real-time fraud detection and transaction monitoring",
    "Fraud probability scoring for every transaction",
    "Explainable insights for audit-ready decisions",
    "Secure local deployment with no external data transfer",
    "Automation designed to support human judgement",
  ];

  const values = [
    {
      icon: Brain,
      title: "Human-led intelligence",
      text: "We use automation to reduce complexity while keeping human judgement central to every decision.",
    },
    {
      icon: Lock,
      title: "Data stays in control",
      text: "SentraRisk is designed to operate inside the client environment, helping protect sensitive financial data.",
    },
    {
      icon: Activity,
      title: "Real-time clarity",
      text: "Our platform highlights risky activity as it happens, giving teams the confidence to act quickly and consistently.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#05070A] text-white overflow-hidden">
      <section className="relative px-6 py-8 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.22),transparent_35%),radial-gradient(circle_at_top_left,rgba(20,184,166,0.14),transparent_30%)]" />

        <nav className="relative z-10 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shadow-lg">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-wide">SentraRisk Systems</span>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            Request Access
          </a>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto pt-24 pb-28 md:pt-32 md:pb-36 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 mb-8">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Real-time fraud detection infrastructure
            </div>

            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] max-w-3xl">
              Financial risk, understood in real time.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-white/65 leading-relaxed max-w-2xl">
              SentraRisk Systems is a fraud detection and financial monitoring platform designed to help organisations identify, assess, and manage transaction risk with clarity and control.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.sentrarisksystems.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-7 py-4 font-medium hover:bg-white/90 transition shadow-2xl"
              >
                Request Access <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-medium text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                View Platform
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl p-5 backdrop-blur">
              <div className="rounded-[1.5rem] bg-[#090D13] border border-white/10 p-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-sm text-white/45">Risk Overview</p>
                    <h3 className="text-2xl font-semibold mt-1">Live Transaction Analysis</h3>
                  </div>
                  <div className="rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 px-3 py-1 text-sm">
                    Active
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                    <p className="text-white/45 text-xs">Scanned</p>
                    <p className="text-2xl font-semibold mt-2">18,492</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                    <p className="text-white/45 text-xs">Flagged</p>
                    <p className="text-2xl font-semibold mt-2">247</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                    <p className="text-white/45 text-xs">Risk Score</p>
                    <p className="text-2xl font-semibold mt-2">92%</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {["Unusual transaction frequency", "High-value transfer anomaly", "New beneficiary behaviour"].map((item, index) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center">
                          <Activity className="h-4 w-4" />
                        </div>
                        <span className="text-sm text-white/80">{item}</span>
                      </div>
                      <span className="text-sm text-white/45">#{index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="product" className="px-6 md:px-12 lg:px-20 py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/40 mb-5">What we offer</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">A clearer way to manage transaction risk.</h2>
          </div>
          <div className="space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <CheckCircle2 className="h-5 w-5 text-emerald-300 mt-0.5 shrink-0" />
                <p className="text-white/70 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.25em] text-white/40 mb-5">Our values</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Automation where it adds value. Human judgement where it matters most.</h2>
            <p className="mt-6 text-white/60 text-lg leading-relaxed">
              We believe in streamlining complex processes through intelligent automation, while keeping people at the centre of decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 shadow-xl">
                  <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-7">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed">{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-8 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.16),transparent_45%)]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">Build trust into every transaction.</h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              SentraRisk Systems helps organisations detect fraud, monitor financial risk, and support accountable decision-making in real time.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@sentrarisksystems.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-7 py-4 font-medium hover:bg-white/90 transition"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://app.sentrarisksystems.com"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-medium text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 lg:px-20 py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-white/40">
          <p>© 2026 SentraRisk Systems. All rights reserved.</p>
          <p>Real-time fraud detection and financial risk intelligence.</p>
        </div>
      </footer>
    </main>
  );
}
