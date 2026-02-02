'use client'

import Link from "next/link"
import { ChevronLeft, CheckCircle, AlertCircle } from "lucide-react"

export default function HealthInsuranceGuide() {
  const steps = [
    {
      number: 1,
      title: "Enter Your Age",
      description: "Input your current age. Age is the primary factor in determining health insurance premiums.",
    },
    {
      number: 2,
      title: "Select Coverage Amount",
      description:
        "Choose your desired sum insured (coverage limit). Higher coverage provides more protection but costs more in premiums.",
    },
    {
      number: 3,
      title: "Choose Coverage Type",
      description: "Select individual or family coverage. Family plans cover spouse, children, and sometimes parents.",
    },
    {
      number: 4,
      title: "Review Your Premium",
      description: "The calculator shows your monthly and annual premium based on your selections.",
    },
  ]

  const tips = [
    "Buy health insurance while you're young and healthy to get better rates",
    "Higher sum insured provides better financial protection during medical emergencies",
    "Family plans are usually more economical than individual policies for each member",
    "Review your coverage annually and increase it to match inflation",
    "Don't compromise on coverage amount just to save on premiums",
  ]

  const coverageTypes = [
    {
      title: "Basic Coverage (₹2-3 Lakhs)",
      description: "Suitable for young, healthy individuals with no major health concerns.",
    },
    {
      title: "Standard Coverage (₹5-10 Lakhs)",
      description: "Recommended for most middle-class families and individuals.",
    },
    {
      title: "Premium Coverage (₹15-25 Lakhs)",
      description: "Ideal for senior citizens and those with pre-existing conditions.",
    },
    {
      title: "Super Premium (₹25+ Lakhs)",
      description: "Comprehensive coverage for those seeking maximum protection.",
    },
  ]

  const factors = [
    {
      title: "Age",
      description: "Primary factor - premiums increase with age. Young age ensures lower premiums.",
    },
    {
      title: "Health Status",
      description: "Pre-existing conditions can increase premiums or add waiting periods.",
    },
    {
      title: "Lifestyle",
      description: "Smoking, heavy drinking, and poor fitness can increase premium rates.",
    },
    {
      title: "Occupation",
      description: "High-risk occupations may attract higher premiums.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            href="/health-insurance"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Health Insurance Calculator
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">Health Insurance Premium Guide</h1>
          <p className="text-lg text-muted-foreground">
            Learn how to calculate health insurance premiums and choose the right coverage for your family.
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

        {/* Coverage Types */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Coverage Amount Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coverageTypes.map((coverage, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-card-foreground mb-2">{coverage.title}</h3>
                <p className="text-muted-foreground text-sm">{coverage.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Factors Affecting Premium */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Factors Affecting Premium</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {factors.map((factor, idx) => (
              <div key={idx} className="bg-secondary border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">{factor.title}</h3>
                <p className="text-muted-foreground text-sm">{factor.description}</p>
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

        {/* Understanding Policy Terms */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Key Insurance Terms Explained</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground mb-3">Premium</h3>
              <p className="text-muted-foreground mb-4">
                The amount you pay regularly to maintain your insurance coverage. Can be paid monthly, quarterly, half-yearly, or annually.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3">Sum Insured</h3>
              <p className="text-muted-foreground mb-4">
                The maximum amount the insurance company will pay for medical claims. Choose based on average healthcare costs in your area.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3">Deductible/Co-insurance</h3>
              <p className="text-muted-foreground mb-4">
                The amount you pay from your pocket before insurance coverage kicks in. Lower deductibles mean higher premiums.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3">Waiting Period</h3>
              <p className="text-muted-foreground mb-4">
                A period after policy purchase during which certain conditions aren't covered. Pre-existing conditions typically have 2-4 year waiting periods.
              </p>
            </div>
          </div>
        </section>

        {/* Example Premium */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Sample Premium Calculation</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="space-y-4">
              <h3 className="font-bold text-card-foreground mb-4">Family Health Insurance Policy</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Family Members: 4 (Ages: 32, 30, 5, 3)</span>
                  <span></span>
                </div>
                <div className="flex justify-between">
                  <span>Coverage Type: Family Floater</span>
                  <span></span>
                </div>
                <div className="flex justify-between">
                  <span>Sum Insured: ₹10,00,000</span>
                  <span></span>
                </div>
                <div className="border-t border-border pt-3 mt-3">
                  <div className="flex justify-between font-bold text-card-foreground">
                    <span>Monthly Premium</span>
                    <span>₹2,500</span>
                  </div>
                  <div className="flex justify-between font-bold text-card-foreground">
                    <span>Annual Premium</span>
                    <span>₹30,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Calculate Your Health Insurance Premium</h2>
          <p className="text-muted-foreground mb-6">
            Estimate your family's health insurance cost and find the right coverage for your needs.
          </p>
          <Link
            href="/health-insurance"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
          >
            Go to Health Insurance Calculator
          </Link>
        </section>
      </div>
    </main>
  )
}
