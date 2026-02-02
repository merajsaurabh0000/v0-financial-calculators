'use client'

import Link from "next/link"
import { ChevronLeft, CheckCircle, AlertCircle } from "lucide-react"

export default function EMIGuide() {
  const steps = [
    {
      number: 1,
      title: "Enter Loan Amount",
      description: "Input the total amount you want to borrow. This is the principal amount before interest.",
    },
    {
      number: 2,
      title: "Input Interest Rate",
      description: "Enter the annual interest rate (%) offered by your lender. This is typically provided by your bank or financial institution.",
    },
    {
      number: 3,
      title: "Set Loan Tenure",
      description: "Specify the number of months or years for which you want to repay the loan.",
    },
    {
      number: 4,
      title: "View Your EMI",
      description: "The calculator shows your monthly EMI, total interest, and total amount payable.",
    },
  ]

  const tips = [
    "Compare EMI across different lenders to get the best interest rate",
    "Higher down payment reduces loan amount and thus reduces EMI",
    "Shorter tenure means higher EMI but lower total interest",
    "Consider your monthly income when deciding EMI amount",
    "Making extra payments can reduce tenure and total interest significantly",
  ]

  const examples = [
    {
      title: "Home Loan Example",
      items: [
        "Loan Amount: ₹20,00,000",
        "Interest Rate: 7% per annum",
        "Tenure: 240 months (20 years)",
        "Monthly EMI: ₹14,665",
        "Total Interest: ₹31,96,000",
      ],
    },
    {
      title: "Car Loan Example",
      items: [
        "Loan Amount: ₹10,00,000",
        "Interest Rate: 8% per annum",
        "Tenure: 60 months (5 years)",
        "Monthly EMI: ₹20,276",
        "Total Interest: ₹2,16,560",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            href="/emi"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to EMI Calculator
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">How to Use the EMI Calculator</h1>
          <p className="text-lg text-muted-foreground">
            Master EMI calculations and make informed decisions about your loans and financial obligations.
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

        {/* EMI Components */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Understanding EMI Components</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground mb-3">Principal Component</h3>
              <p className="text-muted-foreground mb-4">
                The portion of your EMI that goes towards repaying the borrowed amount. This increases over time as you pay more interest in early installments.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3">Interest Component</h3>
              <p className="text-muted-foreground mb-4">
                The cost of borrowing money. In early EMI payments, a larger portion goes towards interest. This decreases as your loan balance reduces.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3">Total Cost</h3>
              <p className="text-muted-foreground mb-4">
                The sum of principal and all interest paid throughout the loan tenure. This is important for understanding the true cost of borrowing.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Calculate Your EMI Today</h2>
          <p className="text-muted-foreground mb-6">
            Use our EMI calculator to understand your loan obligations and plan your finances better.
          </p>
          <Link
            href="/emi"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
          >
            Go to EMI Calculator
          </Link>
        </section>
      </div>
    </main>
  )
}
