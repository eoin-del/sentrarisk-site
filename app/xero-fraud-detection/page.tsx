import type { Metadata } from "next";
import { Cloud } from "lucide-react";
import { SeoLandingPage } from "../seo-pages";

export const metadata: Metadata = {
  title: "Xero Fraud Detection Software | SentraRisk Systems",
  description:
    "Xero-supported fraud detection for SMEs and finance teams. Import supplier bills, score transaction risk, review alerts, and export board-ready reports.",
};

export default function XeroFraudDetectionPage() {
  return (
    <SeoLandingPage
      eyebrow="Xero fraud detection"
      title="Review risky Xero supplier bills before they become payment problems."
      description="SentraRisk helps SMEs, accountants, and finance teams import Xero supplier bills, score fraud indicators, review alerts, and export decision-ready reports from one workflow."
      primaryCta="Request Xero trial access"
      icon={Cloud}
      points={[
        "Import supplier bills from Xero into a structured fraud-risk review workflow.",
        "Flag unusual amounts, new supplier patterns, invoice timing issues, and transaction risk indicators.",
        "Export board summaries and compliance-ready evidence after review.",
      ]}
      proof={[
        { value: "Xero", label: "Supplier bill imports supported for review workflows." },
        { value: "PDF", label: "Board summaries and compliance pack exports." },
        { value: "14 days", label: "Trial access available through enquiry." },
      ]}
      sections={[
        {
          title: "For Xero-connected finance teams",
          text: "SentraRisk gives teams a practical way to review Xero supplier bills for fraud-risk indicators without relying only on spreadsheets or manual judgement.",
        },
        {
          title: "For accountants and advisors",
          text: "Use SentraRisk to support client conversations around supplier risk, payment controls, fraud exposure, and audit-ready reporting.",
        },
        {
          title: "For SME operators",
          text: "Give lean teams a clear view of which transactions need attention, why they were flagged, and who reviewed them.",
        },
      ]}
      useCases={[
        "Review new or unusual suppliers before payment.",
        "Identify invoice patterns that need a second look.",
        "Create evidence for finance, board, or compliance review.",
        "Monitor transaction risk without building a full internal risk team.",
      ]}
    />
  );
}
