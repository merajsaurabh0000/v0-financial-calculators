import SIPCalculatorClient from "./client-page"
import type { Metadata } from "next"
import { ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "SIP Calculator | Calculate Systematic Investment Plan Returns | FynanceCalc",
  description:
    "Calculate SIP (Systematic Investment Plan) returns and investment growth with our free online calculator. Plan your mutual fund investments and see projected future value.",
  keywords:
    "SIP calculator, SIP calculator online, systematic investment plan calculator, mutual fund calculator, investment calculator, mutual fund SIP calculator",
  openGraph: {
    title: "SIP Calculator - Calculate Investment Returns",
    description: "Free online SIP calculator to calculate systematic investment plan returns and growth.",
  },
}

export default function SIPCalculatorPage() {
  const faqs = [
    {
      question: "What is SIP?",
      answer:
        "SIP (Systematic Investment Plan) is a disciplined investment approach where you invest a fixed amount regularly at fixed intervals, typically monthly, into mutual funds or other securities.",
    },
    {
      question: "What are the benefits of SIP?",
      answer:
        "SIP benefits include rupee cost averaging, disciplined savings habit, lower risk through diversification, flexibility, and the power of compounding over time.",
    },
    {
      question: "What is the minimum SIP amount?",
      answer: "Most mutual funds allow SIP starting from ₹500 to ₹1000 per month. Some funds may have different minimum amounts, so check with your fund provider.",
    },
    {
      question: "How are SIP returns calculated?",
      answer:
        "SIP returns are calculated based on the XIRR (Extended Internal Rate of Return) method, which accounts for the timing of cash flows and the varying amounts invested.",
    },
    {
      question: "Should I invest through lump sum or SIP?",
      answer:
        "SIP is ideal for beginners and risk-averse investors as it reduces market timing risk. Lump sum works if you have a large amount and believe in the market.",
    },
    {
      question: "Can I stop my SIP anytime?",
      answer: "Yes, SIPs are flexible. You can stop, pause, or modify your SIP at any time. You can also increase or decrease the investment amount as per your needs.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <SIPCalculatorClient />

      {/* FAQ Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions About SIP</h2>
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
          <h2 className="text-2xl font-bold text-foreground mb-6">SIP Investment Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Rupee Cost Averaging</h3>
              <p className="text-muted-foreground text-sm">
                Regular investments at fixed intervals average out the cost of investment, reducing the impact of market volatility.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Power of Compounding</h3>
              <p className="text-muted-foreground text-sm">
                Long-term SIP investments benefit from compound growth, where returns generate their own returns over time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
