import type { Metadata } from "next";
import { Landmark } from "lucide-react";
import { SeoLandingPage } from "../seo-pages";

export const metadata: Metadata = {
  title: "Fraud-Risk Software for Accountants & Virtual CFOs | SentraRisk Systems",
  description:
    "Payment-risk prevention software for accountants, bookkeepers, virtual CFOs, and finance advisors supporting SME clients.",
};

export default function AccountantsPage() {
  return (
    <SeoLandingPage
      eyebrow="For accountants and virtual CFOs"
      title="Give SME clients a clearer view of payment risk before money leaves."
      description="SentraRisk helps accountants, bookkeepers, virtual CFOs, and finance advisors support clients with payment-risk oversight, bogus-payment prevention, and professional management outputs."
      primaryCta="Request advisor trial access"
      icon={Landmark}
      points={[
        "Support client conversations with clearer management outputs.",
        "Add a payment-risk prevention layer to client advisory work.",
        "Help clients improve oversight without building an enterprise compliance function.",
      ]}
      proof={[
        { value: "Prevent", label: "Focused on stopping avoidable payment losses." },
        { value: "Output", label: "Client-ready reporting for management conversations." },
        { value: "SME", label: "Designed for lean finance teams." },
      ]}
      sections={[
        {
          title: "For client advisory",
          text: "Use SentraRisk to help clients understand where payment-risk oversight may need strengthening.",
        },
        {
          title: "For virtual CFO services",
          text: "Add a practical payment-risk review layer to monthly finance and management support.",
        },
        {
          title: "For compliance-focused reporting",
          text: "Create clearer outputs around review activity, controls, and recommended next actions.",
        },
      ]}
      useCases={[
        "Monthly payment-risk review for SME clients.",
        "Bogus-payment prevention support.",
        "Finance-control reporting for management meetings.",
        "Client-ready summaries for advisory conversations.",
        "Internal-control support without enterprise complexity.",
      ]}
    />
  );
}
