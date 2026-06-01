import type { Metadata } from "next";
import { Landmark } from "lucide-react";
import { SeoLandingPage } from "../seo-pages";

export const metadata: Metadata = {
  title: "Fraud-Risk Software for Accountants & Virtual CFOs | SentraRisk Systems",
  description:
    "Fraud-risk and transaction monitoring software for accountants, bookkeepers, virtual CFOs, and finance advisors supporting SME clients.",
};

export default function AccountantsPage() {
  return (
    <SeoLandingPage
      eyebrow="For accountants and virtual CFOs"
      title="Give SME clients a clearer view of fraud-risk, supplier exposure, and transaction controls."
      description="SentraRisk helps accountants, bookkeepers, virtual CFOs, and finance advisors review client transaction risk, Xero supplier bills, fraud indicators, and compliance-ready reports."
      primaryCta="Request advisor trial access"
      icon={Landmark}
      points={[
        "Support client conversations with board summaries, compliance packs, and clear risk indicators.",
        "Review Xero supplier bills and uploaded transaction files from a single workflow.",
        "Offer a practical fraud-risk review layer without becoming an enterprise compliance team.",
      ]}
      proof={[
        { value: "Xero", label: "Built around finance workflows many SME clients already use." },
        { value: "PDF", label: "Client-ready exports for management and review meetings." },
        { value: "SME", label: "Pricing and workflow designed for lean finance teams." },
      ]}
      sections={[
        {
          title: "For client advisory",
          text: "Use SentraRisk to show clients where supplier, payment, and transaction risks may need attention.",
        },
        {
          title: "For virtual CFO services",
          text: "Add a fraud-risk review workflow to monthly finance operations, board packs, and control reviews.",
        },
        {
          title: "For compliance-focused reporting",
          text: "Create cleaner evidence around alerts, reviewer notes, risk decisions, and exported compliance packs.",
        },
      ]}
      useCases={[
        "Monthly fraud-risk review for SME clients.",
        "Supplier bill checks before management review.",
        "Board-ready risk summaries for finance meetings.",
        "Compliance pack exports for internal controls and audit preparation.",
      ]}
    />
  );
}
