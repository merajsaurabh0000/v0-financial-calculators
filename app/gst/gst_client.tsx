"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function GSTCalculatorClient() {
  const [amount, setAmount] = useState("")
  const [gstRate, setGstRate] = useState("18")

  const baseAmount = Number.parseFloat(amount) || 0
  const gstAmount = (baseAmount * Number.parseFloat(gstRate)) / 100
  const totalAmount = baseAmount + gstAmount

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-foreground">GST Calculator</h1>
        </div>
      </div>

      {/* Calculator */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
          {/* Amount Input */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-card-foreground mb-3">Base Amount (₹)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* GST Rate Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-card-foreground mb-3">GST Rate (%)</label>
            <div className="grid grid-cols-4 gap-3">
              {["5", "12", "18", "28"].map((rate) => (
                <button
                  key={rate}
                  onClick={() => setGstRate(rate)}
                  className={`py-2 px-4 rounded-lg border-2 font-semibold transition-all ${
                    gstRate === rate
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:border-primary"
                  }`}
                >
                  {rate}%
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          {amount && (
            <div className="space-y-4 pt-8 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Base Amount:</span>
                <span className="font-semibold text-foreground">
                  ₹ {baseAmount.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">GST ({gstRate}%):</span>
                <span className="font-semibold text-foreground">
                  ₹ {gstAmount.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between items-center bg-primary/10 rounded-lg p-4 mt-6">
                <span className="font-semibold text-foreground">Total Amount:</span>
                <span className="text-2xl font-bold text-primary">
                  ₹ {totalAmount.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
