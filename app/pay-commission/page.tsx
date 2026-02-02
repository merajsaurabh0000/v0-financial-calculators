import type { Metadata } from "next"
import PayCommissionCalculatorClient from "./pay-commission-client"
import { ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "8th Pay Commission Calculator | Calculate Government Salary | FynanceCalc",
  description:
    "Calculate your salary under 8th Pay Commission with our free online calculator. Get gross salary, deductions, and net monthly salary for government employees.",
  keywords:
    "8th pay commission calculator, pay commission calculator, government salary calculator, 8th pay commission salary, government employee salary calculator",
  openGraph: {
    title: "8th Pay Commission Calculator - Government Salary Calculator",
    description: "Free online calculator to calculate salary under 8th Pay Commission for government employees.",
  },
}

export default function PayCommissionCalculatorPage() {
  const faqs = [
    {
      question: "What is the 8th Pay Commission?",
      answer:
        "The 8th Pay Commission recommends salary and pension revisions for Indian government employees. It restructured the pay scale and introduced a new matrix for calculating government salaries.",
    },
    {
      question: "What is the basic pay under 8th Pay Commission?",
      answer:
        "The 8th Pay Commission introduced a new pay matrix with minimum basic pay of ₹18,000 and higher ranges for different levels. Pay scales are now consolidated into a unified matrix.",
    },
    {
      question: "What deductions are applicable?",
      answer:
        "Common deductions include Professional Tax (PT), General Provident Fund (GPF), Life Insurance (LIIS), and other statutory deductions as per government rules.",
    },
    {
      question: "How is gross salary calculated?",
      answer:
        "Gross Salary = Basic Pay + Dearness Allowance (DA) + House Rent Allowance (HRA) + Other Allowances. DA is typically a percentage of basic pay revised periodically.",
    },
    {
      question: "What is DA under 8th Pay Commission?",
      answer:
        "Dearness Allowance (DA) is a percentage of basic pay that increases periodically to compensate for inflation. Current DA rates are revised by the government.",
    },
    {
      question: "How is net salary calculated?",
      answer: "Net Salary = Gross Salary - All Deductions. Deductions include taxes, provident fund contributions, and other statutory or voluntary deductions.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <PayCommissionCalculatorClient />

      {/* FAQ Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          Frequently Asked Questions About 8th Pay Commission
        </h2>
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
          <h2 className="text-2xl font-bold text-foreground mb-6">Understanding Your Salary Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Allowances</h3>
              <p className="text-muted-foreground text-sm">
                HRA (House Rent Allowance) varies by city, DA (Dearness Allowance) is revised periodically, and various other allowances are provided based on position and location.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Deductions</h3>
              <p className="text-muted-foreground text-sm">
                Professional Tax, Income Tax, GPF contributions, and insurance premiums are deducted from gross salary to calculate net take-home pay.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
