import type { Metadata } from "next"
import PayCommissionCalculatorClient from "./pay-commission-client"

export const metadata: Metadata = {
  title: "8th Pay Commission Calculator | Calculate Government Salary | FynanceCalc",
  description:
    "Calculate your salary under 8th Pay Commission with our free online calculator. Get gross salary, deductions, and net monthly salary for government employees.",
  keywords:
    "8th pay commission calculator, pay commission calculator, government salary calculator, 8th pay commission salary, government employee salary calculator",
  openGraph: {
    title: "8th Pay Commission Calculator - Government Salary Calculator",
    description: "Free online calculator to calculate salary under 8th Pay Commission for government employees.",
  },
}

export default function PayCommissionCalculatorPage() {
  return <PayCommissionCalculatorClient />
}
