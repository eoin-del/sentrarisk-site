import type { Metadata } from "next";
import { Siren } from "lucide-react";
import { SeoLandingPage } from "../seo-pages";

export const metadata: Metadata = {
  title: "Supplier Fraud Detection Software | SentraRisk Systems",
  description:
    "Supplier payment-risk prevention for SMEs and finance teams that want stronger oversight before money leaves the business.",
};

export default function SupplierFraudDetectionPage() {
  return (
    <SeoLandingPage
      eyebrow="Supplier payment risk"
      title="Help stop bogus supplier payments before money leaves the business."
      description="SentraRisk helps teams improve supplier payment oversight, reduce manual review pressure, and create clearer management outputs around payment-risk decisions."
      primaryCta="Request supplier-risk trial"
      icon={Siren}
      points={[
        "Support stronger supplier payment review before release.",
        "Give finance teams a clearer way to prioritise payment-risk work.",
        "Create professional outputs for management and internal review.",
      ]}
      proof={[
        { value: "Prevent", label: "Built around catching risk before payment release." },
        { value: "Human-led", label: "Designed to support judgement, not replace it." },
        { value: "Reports", label: "Outputs for management and review conversations." },
      ]}
      sections={[
        {
          title: "Reduce manual checking",
          text: "Move supplier payment-risk review away from scattered manual work and into a clearer review environment.",
        },
        {
          title: "Support payment controls",
          text: "Give finance teams a second layer of visibility before approving or releasing funds.",
        },
        {
          title: "Support review conversations",
          text: "Create clearer outputs so internal stakeholders can understand the risk position and next actions.",
        },
      ]}
      useCases={[
        "Supplier payment review before approval.",
        "Bogus-payment prevention for SMEs.",
        "Payment-risk reporting for management.",
        "Second-layer review before funds are released.",
      ]}
    />
  );
}
