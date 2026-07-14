import type { Metadata } from "next";
import { Cloud } from "lucide-react";
import { SeoLandingPage } from "../seo-pages";

export const metadata: Metadata = {
  title: "Accounting Data Risk Review | SentraRisk Systems",
  description:
    "Payment-risk review for SMEs and finance teams that want stronger oversight before money leaves the business.",
};

export default function XeroFraudDetectionPage() {
  return (
    <SeoLandingPage
      eyebrow="Accounting data review"
      title="Bring payment-risk review closer to your finance data."
      description="SentraRisk helps SMEs, accountants, and finance teams improve payment-risk oversight before money leaves the business, without replacing existing finance systems."
      primaryCta="Request trial access"
      icon={Cloud}
      points={[
        "Support finance teams with clearer payment-risk visibility.",
        "Review activity before approval and release decisions are made.",
        "Create professional outputs for management and internal review.",
      ]}
      proof={[
        { value: "Finance", label: "Designed to work alongside existing finance routines." },
        { value: "Review", label: "Human judgement remains central." },
        { value: "14 days", label: "Trial access available through enquiry." },
      ]}
      sections={[
        {
          title: "For finance teams",
          text: "SentraRisk gives teams a practical way to improve payment-risk oversight without relying only on manual review.",
        },
        {
          title: "For accountants and advisors",
          text: "Use SentraRisk to support client conversations around payment control, risk prevention, and management reporting.",
        },
        {
          title: "For SME operators",
          text: "Give lean teams a clearer way to review payment risk before funds leave the business.",
        },
      ]}
      useCases={[
        "Review payment risk before release.",
        "Support management conversations around control.",
        "Create clear outputs for finance review.",
        "Improve oversight without building a full internal risk team.",
      ]}
    />
  );
}
