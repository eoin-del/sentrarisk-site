import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { IndustryLandingPage } from "../../industry-page";

export const metadata: Metadata = {
  title: "Payment Oversight for Multi-Location Businesses | SentraRisk",
  description:
    "Centralise payment-risk review where finance records, approvals, suppliers, and operational teams span several locations.",
};

export default function MultiLocationBusinessesPage() {
  return (
    <IndustryLandingPage
      eyebrow="For multi-location businesses"
      title="Bring distributed payment review into one accountable process."
      description="SentraRisk supports central finance teams where invoices, suppliers, supporting records, and operational approvals originate across several sites or business units."
      icon={MapPin}
      challenges={[
        {
          title: "Distributed approvals",
          text: "Local teams may provide context while central finance remains responsible for payment and oversight.",
        },
        {
          title: "Inconsistent records",
          text: "Sites can follow different naming, documentation, and escalation habits for similar transactions.",
        },
        {
          title: "Limited central visibility",
          text: "Management needs to know which items are unresolved, who owns them, and why a decision was made.",
        },
      ]}
      workflow={[
        "Bring suitable records from locations or entities into a controlled central review.",
        "Assign items to the people who hold the relevant operational context.",
        "Escalate unresolved concerns while preserving notes and ownership.",
        "Review activity across the organisation and export a dependable record.",
      ]}
      outcomes={[
        "Clearer central visibility without removing necessary local input.",
        "More consistent review and escalation across locations.",
        "Defined ownership for missing documents and unresolved questions.",
        "A stronger record for management and internal assurance.",
      ]}
      boundary="SentraRisk supports coordination and review. Each organisation remains responsible for access design, segregation of duties, internal policy, and final decisions."
    />
  );
}
