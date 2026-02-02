import type { Metadata } from "next"
import GSTCalculatorClient from "./gst_client"
import { ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Free GST Calculator Online | Calculate Tax & Final Price | FynanceCalc",
  description:
    "Calculate GST (Goods and Services Tax) instantly with our free online GST calculator. Get tax amount and final price with multiple GST rates (5%, 12%, 18%, 28%).",
  keywords:
    "GST calculator, GST calculator online, calculate GST, goods and services tax calculator, GST tax calculator, tax calculator India",
  openGraph: {
    title: "GST Calculator - Calculate Tax & Final Price Online",
    description: "Free online GST calculator to calculate Goods and Services Tax with multiple rates.",
  },
}

export default function GSTCalculatorPage() {
  const faqs = [
    {
      question: "What is GST?",
      answer: "GST (Goods and Services Tax) is a comprehensive indirect tax on manufacturing, sale, and consumption of goods and services in India. It replaced multiple taxes like VAT, excise duty, and service tax.",
    },
    {
      question: "What are the different GST rates in India?",
      answer: "GST in India has four main slabs: 5% (essential items), 12% (common items), 18% (most goods and services), and 28% (luxury items). There's also 0% GST for specific goods.",
    },
    {
      question: "How do I calculate GST?",
      answer: "GST calculation formula: GST Amount = (Price × GST Rate) / 100. For example, if the price is ₹1000 and GST rate is 18%, then GST = (1000 × 18) / 100 = ₹180.",
    },
    {
      question: "What's the difference between GST-inclusive and GST-exclusive prices?",
      answer: "GST-exclusive price is the base price without tax, while GST-inclusive price includes the tax in the total. Our calculator can compute both values easily.",
    },
    {
      question: "Can I claim GST credits?",
      answer: "Registered businesses under GST can claim Input Tax Credit (ITC) on GST paid for business purchases. This helps reduce the tax liability on sales.",
    },
    {
      question: "Is this GST calculator accurate?",
      answer: "Yes, our calculator uses the official GST rates and formulas. However, it's for informational purposes only. Always verify with official sources for critical decisions.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <GSTCalculatorClient />

      {/* FAQ Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions About GST</h2>
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
          <h2 className="text-2xl font-bold text-foreground mb-6">Understanding GST Calculations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">GST-Exclusive to Inclusive</h3>
              <p className="text-muted-foreground text-sm mb-3">
                When you have a price without GST, adding GST gives the final price consumers pay.
              </p>
              <p className="font-mono text-sm bg-card p-3 rounded border border-border">
                Final Price = Base Price + (Base Price × GST Rate / 100)
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">GST-Inclusive to Exclusive</h3>
              <p className="text-muted-foreground text-sm mb-3">
                To find the base price from the final price, you need to reverse the calculation.
              </p>
              <p className="font-mono text-sm bg-card p-3 rounded border border-border">
                Base Price = Final Price / (1 + GST Rate / 100)
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
