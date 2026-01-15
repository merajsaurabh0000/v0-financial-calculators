import SIPCalculatorClient from "./client-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SIP Calculator | Calculate Systematic Investment Plan Returns | FynanceCalc",
  description:
    "Calculate SIP (Systematic Investment Plan) returns and investment growth with our free online calculator. Plan your mutual fund investments and see projected future value.",
  keywords:
    "SIP calculator, SIP calculator online, systematic investment plan calculator, mutual fund calculator, investment calculator, mutual fund SIP calculator",
  openGraph: {
    title: "SIP Calculator - Calculate Investment Returns",
    description: "Free online SIP calculator to calculate systematic investment plan returns and growth.",
  },
}

export default function SIPCalculatorPage() {
  return <SIPCalculatorClient />
}
