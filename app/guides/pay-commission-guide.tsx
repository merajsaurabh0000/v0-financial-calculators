'use client'

import Link from "next/link"
import { ChevronLeft, CheckCircle, AlertCircle } from "lucide-react"

export default function PayCommissionGuide() {
  const steps = [
    {
      number: 1,
      title: "Enter Your Basic Pay",
      description: "Input your basic pay as per the 8th Pay Commission pay matrix. This is the foundation of your salary calculation.",
    },
    {
      number: 2,
      title: "Select Your Pay Level",
      description: "Choose your pay level based on your designation and seniority. Different levels have different salary brackets.",
    },
    {
      number: 3,
      title: "View Salary Breakdown",
      description: "The calculator shows your gross salary including DA, HRA, and other allowances.",
    },
    {
      number: 4,
      title: "Check Deductions",
      description: "Review applicable deductions like Professional Tax, GPF, and LIIS to see your net monthly salary.",
    },
  ]

  const tips = [
    "DA (Dearness Allowance) is revised periodically - use current rates for accuracy",
    "HRA varies by city classification - ensure you select the correct city category",
    "Professional Tax differs by state - verify your state's PT slab",
    "GPF (General Provident Fund) contribution is usually 10% of basic pay",
    "Keep updated with government circulars for any policy changes",
  ]

  const salaryComponents = [
    {
      title: "Basic Pay",
      description: "Foundation of salary under 8th Pay Commission. Minimum is ₹18,000.",
    },
    {
      title: "Dearness Allowance (DA)",
      description: "Percentage of basic pay revised quarterly. Current rates vary by government notification.",
    },
    {
      title: "House Rent Allowance (HRA)",
      description: "Usually 27% of basic pay in metro cities, varies for other classifications.",
    },
    {
      title: "Other Allowances",
      description: "Transport, medical, special allowances based on designation and location.",
    },
  ]

  const deductions = [
    {
      title: "Professional Tax (PT)",
      description: "State-specific tax ranging from ₹0 to ₹2,500 depending on salary and state.",
    },
    {
      title: "General Provident Fund (GPF)",
      description: "Mandatory contribution, typically 10% of basic + DA.",
    },
    {
      title: "Life Insurance (LIIS)",
      description: "Contribution towards group insurance scheme for government employees.",
    },
    {
      title: "Income Tax",
      description: "Tax on your income as per applicable tax slabs and exemptions.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            href="/pay-commission"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to 8th Pay Commission Calculator
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">8th Pay Commission Salary Guide</h1>
          <p className="text-lg text-muted-foreground">
            Understand your salary structure under the 8th Pay Commission and calculate your take-home pay accurately.
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

        {/* Salary Components */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Understanding Salary Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {salaryComponents.map((component, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-card-foreground mb-2">{component.title}</h3>
                <p className="text-muted-foreground text-sm">{component.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Deductions */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Common Deductions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deductions.map((deduction, idx) => (
              <div key={idx} className="bg-secondary border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">{deduction.title}</h3>
                <p className="text-muted-foreground text-sm">{deduction.description}</p>
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

        {/* Example Calculation */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Sample Salary Calculation</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="space-y-4">
              <div className="border-b border-border pb-4">
                <h3 className="font-bold text-card-foreground mb-3">Earnings</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Basic Pay</span>
                    <span>₹40,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DA (12%)</span>
                    <span>₹4,800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>HRA (27%)</span>
                    <span>₹10,800</span>
                  </div>
                  <div className="flex justify-between font-bold text-card-foreground">
                    <span>Gross Salary</span>
                    <span>₹55,600</span>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-bold text-card-foreground mb-3">Deductions</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Professional Tax</span>
                    <span>₹500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GPF (10%)</span>
                    <span>₹4,480</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Insurance</span>
                    <span>₹100</span>
                  </div>
                  <div className="flex justify-between font-bold text-card-foreground">
                    <span>Net Salary</span>
                    <span>₹50,520</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Calculate Your 8th Pay Commission Salary</h2>
          <p className="text-muted-foreground mb-6">
            Use our calculator to determine your exact salary components and take-home pay.
          </p>
          <Link
            href="/pay-commission"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
          >
            Go to Pay Commission Calculator
          </Link>
        </section>
      </div>
    </main>
  )
}
