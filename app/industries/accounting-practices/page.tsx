import type { Metadata } from "next";
import { Users } from "lucide-react";
import { IndustryLandingPage } from "../../industry-page";

export const metadata: Metadata = {
  title: "Payment-Risk Monitoring for Accounting Practices | SentraRisk",
  description:
    "Structured payment-risk review across authorised client organisations for accountants, bookkeepers, virtual CFOs, and finance advisors.",
};

export default function AccountingPracticesPage() {
  return (
    <IndustryLandingPage
      eyebrow="For accounting practices"
      title="A consistent payment-risk review process across client organisations."
      description="SentraRisk helps accountants, bookkeepers, virtual CFOs, and finance advisors organise payment concerns, reviewer decisions, and client-ready records without replacing the client’s accounting software."
      icon={Users}
      challenges={[
        {
          title: "Different client processes",
          text: "Each client may use different approval habits, records, systems, and levels of internal finance support.",
        },
        {
          title: "Scattered review evidence",
          text: "Important decisions can be spread across email, spreadsheets, accounting notes, and informal conversations.",
        },
        {
          title: "Limited review time",
          text: "Advisors need to focus attention on items that deserve discussion without manually rechecking everything.",
        },
      ]}
      workflow={[
        "Keep authorised client organisations separated within the practice workflow.",
        "Bring suitable accounting exports or structured transaction data into review.",
        "Assign ownership and record the context behind each decision.",
        "Produce a clear review record for the client or internal practice file.",
      ]}
      outcomes={[
        "A more consistent review approach across suitable client engagements.",
        "Clearer ownership of items requiring client clarification.",
        "Better evidence for advisory and management conversations.",
        "A defined service that can be scoped and priced transparently.",
      ]}
      boundary="SentraRisk supports review and evidence. The practice and its client remain responsible for professional advice, investigation, approval, and final payment decisions."
    />
  );
}
