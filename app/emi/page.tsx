import EMICalculatorClient from "./client"
import type { Metadata } from "next"
import { ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Free EMI Calculator Online | Calculate Monthly Loan Payment | FynanceCalc",
  description:
    "Calculate your EMI (Equated Monthly Installment) instantly with our free online calculator. Get monthly payment amount, total interest, and amortization schedule for any loan.",
  keywords:
    "EMI calculator, EMI calculator online, loan EMI calculator, monthly payment calculator, home loan EMI, car loan EMI, personal loan calculator",
  openGraph: {
    title: "EMI Calculator - Calculate Monthly Loan Payment",
    description: "Free online EMI calculator to calculate monthly loan payments and interest.",
  },
}

export default function EMICalculatorPage() {
  const faqs = [
    {
      question: "What is EMI?",
      answer:
        "EMI (Equated Monthly Installment) is the fixed amount you pay monthly towards loan repayment. It includes both principal and interest components.",
    },
    {
      question: "How is EMI calculated?",
      answer:
        "EMI is calculated using the formula: EMI = (P × r × (1 + r)^n) / ((1 + r)^n - 1), where P is principal, r is monthly interest rate, and n is number of months.",
    },
    {
      question: "What's included in EMI?",
      answer: "Each EMI payment includes two components: Principal (amount borrowed) and Interest (cost of borrowing). The ratio changes over time with more interest in early payments.",
    },
    {
      question: "Can I reduce my EMI tenure?",
      answer: "Yes, paying extra towards principal can reduce tenure. You can also make prepayments to reduce the remaining loan amount and interest burden.",
    },
    {
      question: "What factors affect EMI?",
      answer: "EMI is affected by loan amount, interest rate, and tenure. Higher loan amount or longer tenure increases EMI, while higher interest rates also increase the total payment.",
    },
    {
      question: "Is paying off EMI early beneficial?",
      answer: "Yes, early repayment reduces the total interest paid. However, check for prepayment penalties with your lender before making early payments.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <EMICalculatorClient />

      {/* FAQ Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions About EMI</h2>
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
          <h2 className="text-2xl font-bold text-foreground mb-6">Understanding Loan Payments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Principal vs Interest</h3>
              <p className="text-muted-foreground text-sm">
                In early EMI payments, more goes towards interest. As time progresses, the principal portion increases and interest decreases.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Total Interest Paid</h3>
              <p className="text-muted-foreground text-sm">
                Total Interest = (EMI × Number of Months) - Principal. Lower interest rates and shorter tenures result in less total interest.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
