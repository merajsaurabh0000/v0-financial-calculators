'use client'

import Link from "next/link"
import { ChevronLeft, CheckCircle, AlertCircle } from "lucide-react"

export default function SIPGuide() {
  const steps = [
    {
      number: 1,
      title: "Enter Monthly Investment Amount",
      description: "Input the fixed amount you plan to invest every month. This can start from as low as ₹500.",
    },
    {
      number: 2,
      title: "Set Expected Annual Return",
      description: "Enter the expected annual return percentage based on your investment type. Historical equity returns are typically 12-15%.",
    },
    {
      number: 3,
      title: "Specify Investment Period",
      description: "Enter the number of years you plan to continue the SIP investment. Longer periods benefit more from compounding.",
    },
    {
      number: 4,
      title: "View Projected Results",
      description: "The calculator shows your total invested amount, expected returns, and projected future value.",
    },
  ]

  const tips = [
    "Start SIP early to maximize the power of compounding over time",
    "Choose an investment amount you can sustain consistently for the long term",
    "Diversify your SIP across different asset classes for better risk management",
    "Don't time the market - SIP benefits from rupee cost averaging",
    "Increase SIP amount periodically to account for inflation and growing income",
  ]

  const examples = [
    {
      title: "Conservative SIP",
      items: [
        "Monthly Investment: ₹5,000",
        "Expected Return: 8% per annum",
        "Duration: 15 years",
        "Total Invested: ₹9,00,000",
        "Projected Value: ₹18,45,000",
      ],
    },
    {
      title: "Aggressive SIP",
      items: [
        "Monthly Investment: ₹10,000",
        "Expected Return: 12% per annum",
        "Duration: 20 years",
        "Total Invested: ₹24,00,000",
        "Projected Value: ₹83,20,000",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            href="/sip"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to SIP Calculator
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">How to Use the SIP Calculator</h1>
          <p className="text-lg text-muted-foreground">
            Plan your systematic investments and understand the power of disciplined, long-term investing through SIP.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Step-by-Step Guide */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Step-by-Step Guide</h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Practical Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examples.map((example, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-lg font-bold text-card-foreground mb-4">{example.title}</h3>
                <div className="space-y-3">
                  {example.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips and Best Practices */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Tips and Best Practices</h2>
          <div className="bg-secondary rounded-lg p-8">
            <div className="space-y-4">
              {tips.map((tip, idx) => (
                <div key={idx} className="flex gap-4">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Investment Concepts */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Key SIP Concepts</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground mb-3">Rupee Cost Averaging</h3>
              <p className="text-muted-foreground mb-4">
                By investing a fixed amount regularly, you buy more units when prices are low and fewer when prices are high. This averages your purchase cost over time.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3">Power of Compounding</h3>
              <p className="text-muted-foreground mb-4">
                Your returns generate their own returns over time. This exponential growth is most powerful over long periods, making SIP ideal for retirement and wealth building.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3">Flexibility and Discipline</h3>
              <p className="text-muted-foreground mb-4">
                SIP enforces disciplined saving while remaining flexible. You can adjust amounts or pause as needed, making it suitable for people at different life stages.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Start Your SIP Journey</h2>
          <p className="text-muted-foreground mb-6">
            Calculate your SIP returns and plan your investment strategy with our free calculator.
          </p>
          <Link
            href="/sip"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
          >
            Go to SIP Calculator
          </Link>
        </section>
      </div>
    </main>
  )
}
