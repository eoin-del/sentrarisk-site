export const sampleReports = [
  {
    title: "Board Summary",
    description: "A concise executive summary showing risk exposure, alert movement, review outcomes, and recommended next controls.",
    href: "/samples/sentrarisk-board-summary-sample.pdf",
    label: "Board-ready PDF",
    stats: ["37 alerts reviewed", "8 high-risk items", "4 recommended controls"],
  },
  {
    title: "Compliance Pack",
    description: "An evidence pack for internal review, including reviewer notes, alert status, risk reasons, and decision history.",
    href: "/samples/sentrarisk-compliance-pack-sample.pdf",
    label: "Audit-ready PDF",
    stats: ["Reviewer notes", "Decision trail", "Export evidence"],
  },
  {
    title: "Transaction Risk Report",
    description: "A transaction-level report explaining score drivers, supplier indicators, crypto exposure, and review recommendation.",
    href: "/samples/sentrarisk-transaction-risk-report-sample.pdf",
    label: "Risk detail PDF",
    stats: ["Risk score 87", "New beneficiary", "Review recommended"],
  },
];

export const pilotDeliverables = [
  "Xero supplier bill import or sample transaction file review",
  "Risk scoring walkthrough with reasons and escalation quality",
  "Alert review workflow using status, ownership, and decision notes",
  "Board summary and compliance pack export",
  "Pilot findings call with recommended production setup",
];

export const pilotTimeline = [
  {
    phase: "Setup",
    timing: "Day 1-2",
    text: "Agree the workflow, trial users, sample data route, and success criteria.",
  },
  {
    phase: "Review",
    timing: "Day 3-10",
    text: "Run real or representative supplier bills, transactions, alerts, reports, and feedback through SentraRisk.",
  },
  {
    phase: "Decision",
    timing: "Day 11-14",
    text: "Review findings, confirm pricing fit, and decide whether Starter, Compliance, Growth, or Enterprise is right.",
  },
];
