"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function EMICalculatorClient() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("8")
  const [tenure, setTenure] = useState("12")

  const p = Number.parseFloat(principal) || 0
  const r = Number.parseFloat(rate) || 0
  const n = Number.parseFloat(tenure) || 0

  // EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = r / 100 / 12
  const emi =
    monthlyRate > 0 ? (p * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1) : p / n

  const totalAmount = emi * n
  const totalInterest = totalAmount - p

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-foreground">EMI Calculator</h1>
        </div>
      </div>

      {/* Calculator */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
          {/* Principal Input */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-card-foreground mb-3">Loan Amount (₹)</label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="Enter loan amount"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="range"
              min="0"
              max="10000000"
              step="100000"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full mt-3"
            />
          </div>

          {/* Interest Rate */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-card-foreground mb-3">
              Annual Interest Rate (%) - {rate}%
            </label>
            <input
              type="range"
              min="0"
              max="30"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Tenure */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-card-foreground mb-3">
              Loan Tenure (Months) - {tenure} months
            </label>
            <input
              type="range"
              min="1"
              max="360"
              step="1"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Results */}
          {principal && (
            <div className="space-y-4 pt-8 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Loan Amount:</span>
                <span className="font-semibold text-foreground">
                  ₹ {p.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Interest Rate:</span>
                <span className="font-semibold text-foreground">{rate}% p.a.</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Tenure:</span>
                <span className="font-semibold text-foreground">{tenure} months</span>
              </div>

              <div className="bg-primary/10 rounded-lg p-4 mt-6">
                <div className="text-center mb-4">
                  <p className="text-sm text-muted-foreground mb-1">Monthly EMI</p>
                  <p className="text-3xl font-bold text-primary">
                    ₹ {emi.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">Total Interest</p>
                  <p className="text-lg font-bold text-foreground">
                    ₹ {totalInterest.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                  </p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">Total Amount</p>
                  <p className="text-lg font-bold text-foreground">
                    ₹ {totalAmount.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
