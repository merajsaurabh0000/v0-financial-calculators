import type { Metadata } from "next"
import GSTCalculatorClient from "./gst_client"

export const metadata: Metadata = {
  title: "Free GST Calculator Online | Calculate Tax & Final Price | FynanceCalc",
  description:
    "Calculate GST (Goods and Services Tax) instantly with our free online GST calculator. Get tax amount and final price with multiple GST rates (5%, 12%, 18%, 28%).",
  keywords:
    "GST calculator, GST calculator online, calculate GST, goods and services tax calculator, GST tax calculator, tax calculator India",
  openGraph: {
    title: "GST Calculator - Calculate Tax & Final Price Online",
    description: "Free online GST calculator to calculate Goods and Services Tax with multiple rates.",
  },
}

export default function GSTCalculatorPage() {
  return <GSTCalculatorClient />
}
