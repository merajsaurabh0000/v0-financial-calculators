"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function PayCommissionCalculatorClient() {
  const [basicPay, setBasicPay] = useState("")
  const [payLevel, setPayLevel] = useState("5")

  const basic = Number.parseFloat(basicPay) || 0

  // 8th Pay Commission multipliers (approximate)
  const multipliers: Record<string, number> = {
    "1": 1.0,
    "2": 1.15,
    "3": 1.35,
    "4": 1.6,
    "5": 1.9,
    "6": 2.3,
    "7": 2.8,
    "8": 3.5,
    "9": 4.2,
    "10": 5.0,
  }

  const multiplier = multipliers[payLevel] || 1.9
  const grossSalary = basic * multiplier

  // Deductions (approximate)
  const professionalTax = basic * 0.02
  const gpf = basic * 0.1
  const liis = basic * 0.01
  const totalDeductions = professionalTax + gpf + liis
  const netSalary = grossSalary - totalDeductions

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-foreground">8th Pay Commission Calculator</h1>
        </div>
      </div>

      {/* Calculator */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
          {/* Basic Pay Input */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-card-foreground mb-3">Basic Pay (₹)</label>
            <input
              type="number"
              value={basicPay}
              onChange={(e) => setBasicPay(e.target.value)}
              placeholder="Enter basic pay"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Pay Level Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-card-foreground mb-3">Pay Level</label>
            <select
              value={payLevel}
              onChange={(e) => setPayLevel(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {Object.keys(multipliers).map((level) => (
                <option key={level} value={level}>
                  Level {level}
                </option>
              ))}
            </select>
          </div>

          {/* Results */}
          {basicPay && (
            <div className="space-y-4 pt-8 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Basic Pay:</span>
                <span className="font-semibold text-foreground">
                  ₹ {basic.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Multiplier (Level {payLevel}):</span>
                <span className="font-semibold text-foreground">{multiplier}x</span>
              </div>
              <div className="flex justify-between items-center bg-primary/10 rounded-lg p-4">
                <span className="font-semibold text-foreground">Gross Salary:</span>
                <span className="text-xl font-bold text-primary">
                  ₹ {grossSalary.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                </span>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Professional Tax (2%):</span>
                  <span>₹ {professionalTax.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GPF (10%):</span>
                  <span>₹ {gpf.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">LIIS (1%):</span>
                  <span>₹ {liis.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between border-t border-border pt-3 font-semibold">
                  <span>Total Deductions:</span>
                  <span>₹ {totalDeductions.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</span>
                </div>
              </div>

              <div className="flex justify-between items-center bg-accent/10 rounded-lg p-4 mt-4">
                <span className="font-semibold text-foreground">Net Salary (Monthly):</span>
                <span className="text-2xl font-bold text-accent">
                  ₹ {netSalary.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
