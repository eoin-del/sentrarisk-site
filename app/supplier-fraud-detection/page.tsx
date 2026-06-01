import type { Metadata } from "next";
import { Siren } from "lucide-react";
import { SeoLandingPage } from "../seo-pages";

export const metadata: Metadata = {
  title: "Supplier Fraud Detection Software | SentraRisk Systems",
  description:
    "Supplier fraud detection for SMEs and finance teams. Score supplier bills, flag risky transactions, review alerts, and export fraud-risk reports.",
};

export default function SupplierFraudDetectionPage() {
  return (
    <SeoLandingPage
      eyebrow="Supplier fraud detection"
      title="Spot supplier and invoice fraud indicators before money leaves the business."
      description="SentraRisk helps teams review supplier bills, transaction anomalies, unusual payment patterns, and fraud-risk indicators with a clear alert workflow and audit trail."
      primaryCta="Request supplier-risk trial"
      icon={Siren}
      points={[
        "Score supplier and invoice activity using clear fraud-risk indicators.",
        "Give reviewers a structured alert queue with status, ownership, and notes.",
        "Export board summaries, compliance packs, and evidence for internal review.",
      ]}
      proof={[
        { value: "10k+", label: "Starter transaction volume designed for active SMEs." },
        { value: "Alerts", label: "Structured review queue for risky supplier activity." },
        { value: "Reports", label: "PDF outputs for board and compliance conversations." },
      ]}
      sections={[
        {
          title: "Reduce manual checking",
          text: "Move supplier fraud review away from scattered spreadsheets and into a consistent workflow that shows what was flagged and why.",
        },
        {
          title: "Support payment controls",
          text: "Give finance teams a second layer of review for unusual suppliers, invoice values, timing patterns, or transaction behaviour.",
        },
        {
          title: "Keep review evidence",
          text: "Store decisions, notes, and exports so internal stakeholders can see how supplier risk was handled.",
        },
      ]}
      useCases={[
        "Supplier payment review before approval.",
        "Invoice anomaly detection for SMEs.",
        "High-risk transaction escalation.",
        "Fraud-risk reporting for management and boards.",
      ]}
    />
  );
}
