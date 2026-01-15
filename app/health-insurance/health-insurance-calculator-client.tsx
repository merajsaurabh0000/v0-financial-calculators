"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function HealthInsuranceCalculatorClient() {
  const [age, setAge] = useState("")
  const [members, setMembers] = useState("1")
  const [coverage, setCoverage] = useState("500000")
  const [preExisting, setPreExisting] = useState(false)

  const ageNum = Number.parseInt(age) || 0
  const membersNum = Number.parseInt(members) || 1
  const coverageNum = Number.parseFloat(coverage) || 500000

  // Base premium per year (₹)
  let basePremium = 0
  if (ageNum <= 30) basePremium = 200
  else if (ageNum <= 40) basePremium = 300
  else if (ageNum <= 50) basePremium = 450
  else if (ageNum <= 60) basePremium = 650
  else basePremium = 900

  // Coverage multiplier
  const coverageMultiplier = (coverageNum / 500000) * 1.2

  // Pre-existing condition surcharge (25%)
  const preExistingSurcharge = preExisting ? 0.25 : 0

  const premiumPerMember = basePremium * coverageMultiplier * (1 + preExistingSurcharge)
  const totalAnnualPremium = premiumPerMember * membersNum
  const monthlyPremium = totalAnnualPremium / 12

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Health Insurance Premium Calculator</h1>
        </div>
      </div>

      {/* Calculator */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
          {/* Age Input */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-card-foreground mb-3">Primary Member Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
              min="0"
              max="100"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Number of Members */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-card-foreground mb-3">Family Members</label>
            <select
              value={members}
              onChange={(e) => setMembers(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} Member{num > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Coverage Amount */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-card-foreground mb-3">Coverage Amount (₹)</label>
            <select
              value={coverage}
              onChange={(e) => setCoverage(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="300000">3,00,000</option>
              <option value="500000">5,00,000</option>
              <option value="750000">7,50,000</option>
              <option value="1000000">10,00,000</option>
              <option value="1500000">15,00,000</option>
            </select>
          </div>

          {/* Pre-existing Condition */}
          <div className="mb-8">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={preExisting}
                onChange={(e) => setPreExisting(e.target.checked)}
                className="w-4 h-4 rounded border-border"
              />
              <span className="text-sm font-semibold text-card-foreground">Pre-existing Medical Condition</span>
            </label>
          </div>

          {/* Results */}
          {age && (
            <div className="space-y-4 pt-8 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Age Group:</span>
                <span className="font-semibold text-foreground">{ageNum} years</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Coverage:</span>
                <span className="font-semibold text-foreground">
                  ₹ {coverageNum.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Family Members:</span>
                <span className="font-semibold text-foreground">{membersNum}</span>
              </div>
              {preExisting && (
                <div className="flex justify-between items-center text-destructive">
                  <span className="text-muted-foreground">Pre-existing Surcharge:</span>
                  <span className="font-semibold">+25%</span>
                </div>
              )}

              <div className="flex justify-between items-center bg-primary/10 rounded-lg p-4 mt-6">
                <span className="font-semibold text-foreground">Monthly Premium:</span>
                <span className="text-xl font-bold text-primary">
                  ₹ {monthlyPremium.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between items-center bg-accent/10 rounded-lg p-4">
                <span className="font-semibold text-foreground">Annual Premium:</span>
                <span className="text-2xl font-bold text-accent">
                  ₹ {totalAnnualPremium.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          )}

          <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-lg">
            Disclaimer: This is an approximate calculator. Actual premiums may vary based on your health profile,
            medical history, and the insurance provider's specific terms and conditions.
          </p>
        </div>
      </section>
    </main>
  )
}
