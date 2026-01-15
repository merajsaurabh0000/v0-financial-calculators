import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "EMI Calculator Online | Calculate Loan EMI & Repayment | FynanceCalc",
  description:
    "Calculate your loan EMI (Equated Monthly Installment) instantly. Use our free online EMI calculator to determine monthly payments, total interest, and total loan amount.",
  keywords:
    "EMI calculator, EMI calculator online, loan calculator, loan EMI calculator, monthly installment calculator, home loan calculator, personal loan calculator",
  openGraph: {
    title: "EMI Calculator - Calculate Monthly Loan Installment",
    description: "Free online EMI calculator to calculate monthly loan payments and total interest.",
  },
}

export default function EMICalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
