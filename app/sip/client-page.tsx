"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function SIPCalculatorClient() {
  const [monthlyAmount, setMonthlyAmount] = useState("")
  const [rate, setRate] = useState("12")
  const [years, setYears] = useState("10")

  const monthly = Number.parseFloat(monthlyAmount) || 0
  const annualRate = Number.parseFloat(rate) || 0
  const months = Number.parseFloat(years) * 12

  // SIP Formula: M * (((1 + r)^n - 1) / r) * (1 + r)
  const monthlyRate = annualRate / 100 / 12
  const futureValue =
    monthlyRate > 0
      ? monthly * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))
      : monthly * months

  const totalInvested = monthly * months
  const gainAmount = futureValue - totalInvested

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-foreground">SIP Calculator</h1>
        </div>
      </div>

      {/* Calculator */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
          {/* Monthly Amount */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-card-foreground mb-3">Monthly Investment (₹)</label>
            <input
              type="number"
              value={monthlyAmount}
              onChange={(e) => setMonthlyAmount(e.target.value)}
              placeholder="Enter monthly amount"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="range"
              min="0"
              max="100000"
              step="1000"
              value={monthlyAmount}
              onChange={(e) => setMonthlyAmount(e.target.value)}
              className="w-full mt-3"
            />
          </div>

          {/* Expected Return Rate */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-card-foreground mb-3">
              Expected Annual Return (%) - {rate}%
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

          {/* Time Period */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-card-foreground mb-3">
              Investment Period (Years) - {years} years
            </label>
            <input
              type="range"
              min="1"
              max="40"
              step="1"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Results */}
          {monthlyAmount && (
            <div className="space-y-4 pt-8 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Monthly Investment:</span>
                <span className="font-semibold text-foreground">
                  ₹ {monthly.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Period:</span>
                <span className="font-semibold text-foreground">
                  {years} years ({months.toFixed(0)} months)
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Expected Return:</span>
                <span className="font-semibold text-foreground">{rate}% p.a.</span>
              </div>

              <div className="bg-primary/10 rounded-lg p-4 mt-6">
                <div className="text-center mb-4">
                  <p className="text-sm text-muted-foreground mb-1">Projected Value</p>
                  <p className="text-3xl font-bold text-primary">
                    ₹ {futureValue.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">Total Invested</p>
                  <p className="text-lg font-bold text-foreground">
                    ₹ {totalInvested.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                  </p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">Gain/Returns</p>
                  <p className="text-lg font-bold text-primary">
                    ₹ {gainAmount.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
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
