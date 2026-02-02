'use client'

import Link from "next/link"
import { ChevronLeft, CheckCircle, AlertCircle } from "lucide-react"

export default function GSTGuide() {
  const steps = [
    {
      number: 1,
      title: "Enter the Base Price",
      description: "Input the price of the item or service before GST. This should be the amount before tax is added.",
    },
    {
      number: 2,
      title: "Select the GST Rate",
      description: "Choose the applicable GST rate: 5%, 12%, 18%, or 28%. The rate depends on the type of good or service.",
    },
    {
      number: 3,
      title: "View the Results",
      description: "The calculator instantly shows the GST amount and the final price including tax.",
    },
  ]

  const tips = [
    "Always verify the correct GST rate for your specific product or service",
    "GST rates vary - essential items are often 5%, while luxury items may be 28%",
    "B2B transactions can involve GST credit, reducing the net tax liability",
    "Keep GST invoices for records and potential tax compliance",
    "Different states may have additional local taxes in some cases",
  ]

  const examples = [
    {
      title: "Example 1: 18% GST Calculation",
      items: [
        "Base Price: ₹1,000",
        "GST Rate: 18%",
        "GST Amount: (1,000 × 18) / 100 = ₹180",
        "Final Price: ₹1,000 + ₹180 = ₹1,180",
      ],
    },
    {
      title: "Example 2: Reverse GST (Finding Base Price)",
      items: [
        "Final Price (inclusive): ₹1,180",
        "GST Rate: 18%",
        "Base Price: 1,180 / 1.18 = ₹1,000",
        "GST Amount: ₹1,180 - ₹1,000 = ₹180",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            href="/gst"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to GST Calculator
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">How to Use the GST Calculator</h1>
          <p className="text-lg text-muted-foreground">
            Learn how to calculate GST easily and understand tax implications on your purchases and sales.
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
                      <p className="text-muted-foreground">{item}</p>
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

        {/* Common Use Cases */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Common Use Cases</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground mb-3">For Businesses</h3>
              <p className="text-muted-foreground mb-4">
                Calculate GST on products and services to determine final selling prices. Ensure accurate invoicing and GST compliance for your transactions.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3">For Consumers</h3>
              <p className="text-muted-foreground mb-4">
                Calculate the actual amount you need to pay after GST is added. Understand tax implications when purchasing items and services.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3">For Financial Planning</h3>
              <p className="text-muted-foreground mb-4">
                Budget accurately by accounting for GST in your expenses. Plan your purchases knowing the total cost including all applicable taxes.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Calculate GST?</h2>
          <p className="text-muted-foreground mb-6">
            Use our free GST calculator to instantly compute tax amounts and final prices.
          </p>
          <Link
            href="/gst"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
          >
            Go to GST Calculator
          </Link>
        </section>
      </div>
    </main>
  )
}
