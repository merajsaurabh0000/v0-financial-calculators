import type { Metadata } from "next"
import HealthInsuranceCalculatorClient from "./health-insurance-calculator-client"

export const metadata: Metadata = {
  title: "Health Insurance Premium Calculator | Calculate Insurance Cost | FynanceCalc",
  description:
    "Calculate health insurance premium for your family instantly. Use our free online health insurance calculator to estimate annual and monthly premium based on age and coverage.",
  keywords:
    "health insurance calculator, health insurance premium calculator, insurance calculator, family health insurance calculator, medical insurance calculator",
  openGraph: {
    title: "Health Insurance Premium Calculator - Calculate Insurance Cost",
    description: "Free online health insurance calculator to calculate monthly and annual insurance premium.",
  },
}

export default function HealthInsuranceCalculatorPage() {
  return <HealthInsuranceCalculatorClient />
}
