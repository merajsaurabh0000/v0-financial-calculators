import type { Metadata } from "next"
import HealthInsuranceCalculatorClient from "./health-insurance-calculator-client"
import { ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Health Insurance Premium Calculator | Calculate Insurance Cost | FynanceCalc",
  description:
    "Calculate health insurance premium for your family instantly. Use our free online health insurance calculator to estimate annual and monthly premium based on age and coverage.",
  keywords:
    "health insurance calculator, health insurance premium calculator, insurance calculator, family health insurance calculator, medical insurance calculator",
  openGraph: {
    title: "Health Insurance Premium Calculator - Calculate Insurance Cost",
    description: "Free online health insurance calculator to calculate monthly and annual insurance premium.",
  },
}

export default function HealthInsuranceCalculatorPage() {
  const faqs = [
    {
      question: "What is health insurance premium?",
      answer:
        "Health insurance premium is the amount you pay regularly (monthly or annually) to maintain your health insurance coverage. It varies based on age, health, coverage amount, and other factors.",
    },
    {
      question: "What factors affect health insurance premiums?",
      answer:
        "Premiums are affected by age, health condition, coverage amount (sum insured), family size, location, lifestyle habits (smoking, drinking), and pre-existing conditions.",
    },
    {
      question: "What is sum insured?",
      answer:
        "Sum insured is the maximum amount the insurance company will pay for medical expenses during a claim. Higher sum insured provides better coverage but costs more premium.",
    },
    {
      question: "What's included in health insurance?",
      answer:
        "Health insurance typically covers hospitalization, doctor consultations, medications, diagnostic tests, surgery, maternity benefits, and sometimes preventive health check-ups.",
    },
    {
      question: "What are pre-existing conditions?",
      answer:
        "Pre-existing conditions are health issues you had before taking the policy. Most policies have a waiting period (2-4 years) before covering pre-existing conditions.",
    },
    {
      question: "How does family health insurance work?",
      answer:
        "Family health insurance covers all family members (spouse, children, parents) under a single policy with a shared or individual sum insured. Premium is based on the oldest member's age.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <HealthInsuranceCalculatorClient />

      {/* FAQ Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions About Health Insurance</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition cursor-pointer"
            >
              <summary className="flex items-center justify-between font-semibold text-card-foreground hover:text-primary transition">
                <span>{faq.question}</span>
                <ChevronDown className="w-5 h-5 group-open:rotate-180 transition" />
              </summary>
              <p className="text-muted-foreground mt-4">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="px-6 py-16 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Health Insurance Essentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Types of Coverage</h3>
              <p className="text-muted-foreground text-sm">
                Individual policies cover one person, family policies cover multiple members, and group policies are often provided by employers. Choose based on your family structure.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Cost Considerations</h3>
              <p className="text-muted-foreground text-sm">
                Premium costs vary significantly by age, health status, coverage amount, and plan features. Getting adequate coverage without overpaying is key to smart health insurance planning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
