import type { Metadata } from "next";
import { Store } from "lucide-react";
import { IndustryLandingPage } from "../../industry-page";

export const metadata: Metadata = {
  title: "Deposit and Payment Review for Motor Dealerships | SentraRisk",
  description:
    "Structured dealership workflows for customer deposits, payer details, refunds, applications, escalation, and review records.",
};

export default function MotorDealershipsPage() {
  return (
    <IndustryLandingPage
      eyebrow="For motor dealerships"
      title="Keep customer deposits, payer details, and refund decisions easier to review."
      description="SentraRisk provides a focused dealership workflow for recording deposits, checking supporting customer information, escalating concerns, and retaining a clear decision history."
      icon={Store}
      challenges={[
        {
          title: "Payer and customer differences",
          text: "The person funding a deposit may not always be the customer named on the vehicle application or order.",
        },
        {
          title: "Refund decisions",
          text: "Refund destination, supporting context, and authorisation need to remain clear and traceable.",
        },
        {
          title: "Manual hand-offs",
          text: "Sales, finance, accounts, and management may each hold part of the information needed for review.",
        },
      ]}
      workflow={[
        "Record the deposit type, payer details, customer, vehicle, and supporting reference.",
        "Review differences, unusual values, repeat activity, and missing information.",
        "Escalate an item to an authorised person and retain the response.",
        "Record the final decision and export supporting review information where needed.",
      ]}
      outcomes={[
        "A dedicated deposit review process rather than a general transaction list.",
        "Clearer treatment of refundable and non-refundable deposits.",
        "Better separation between the customer, payer, vehicle, and payment record.",
        "A documented internal review trail for authorised staff.",
      ]}
      boundary="SentraRisk supports internal review and recordkeeping. It does not determine whether activity is criminal, submit regulatory reports automatically, or replace legal and AML advice."
    />
  );
}
