import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { IndustryLandingPage } from "../../industry-page";

export const metadata: Metadata = {
  title: "Payment-Risk Monitoring for Invoice-Heavy SMEs | SentraRisk",
  description:
    "Review duplicate risk, supplier-detail changes, unusual activity, and missing payment support before funds are released.",
};

export default function InvoiceHeavySmesPage() {
  return (
    <IndustryLandingPage
      eyebrow="For invoice-heavy SMEs"
      title="Give a busy finance team a clearer second look before payment."
      description="SentraRisk helps growing businesses organise possible duplicate payments, supplier-detail changes, unusual activity, and missing support into a controlled review process."
      icon={Building2}
      challenges={[
        {
          title: "High invoice volume",
          text: "Routine processing pressure can make unusual details harder to notice before a payment run.",
        },
        {
          title: "Supplier changes",
          text: "New beneficiaries and changed payment instructions need consistent verification and documented review.",
        },
        {
          title: "Thin finance capacity",
          text: "Smaller teams may rely on manual checks while also managing invoices, collections, payroll, and reporting.",
        },
      ]}
      workflow={[
        "Import suitable invoice and transaction data from familiar finance tools.",
        "Review prioritised items with the reason each one needs attention.",
        "Confirm supporting documents, supplier context, and approval ownership.",
        "Record the decision and retain a clear review history.",
      ]}
      outcomes={[
        "Less dependence on memory and disconnected spreadsheets.",
        "Clearer handling of supplier and beneficiary changes.",
        "A review queue that gives the team an order of priority.",
        "Management-ready evidence of what was checked and decided.",
      ]}
      boundary="SentraRisk does not move funds or replace the organisation’s accounting system. Authorised people remain responsible for verification and final payment approval."
    />
  );
}
