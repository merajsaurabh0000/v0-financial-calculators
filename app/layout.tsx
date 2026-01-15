import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FynanceCalc - Free Online Financial Calculators | GST, EMI, SIP & More",
  description:
    "FynanceCalc offers free online financial calculators for GST calculation, EMI calculator, SIP planner, 8th pay commission calculator, health insurance premium estimator, and financial blogs.",
  keywords:
    "GST calculator, EMI calculator, SIP calculator, 8th pay commission calculator, health insurance premium, financial calculators, loan EMI calculator, investment calculator",
  authors: [{ name: "FynanceCalc" }],
  openGraph: {
    title: "FynanceCalc - Free Financial Calculators & Tools",
    description:
      "Calculate GST, EMI, SIP, 8th Pay Commission, and health insurance premiums with our free online calculators.",
    type: "website",
    url: "https://fynancecalc.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "FynanceCalc - Free Financial Calculators",
    description: "Free online financial calculators and tools for Indian users",
  },
  robots: "index, follow",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
