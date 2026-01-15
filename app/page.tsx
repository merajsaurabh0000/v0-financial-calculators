import Link from "next/link"
import type { Metadata } from "next"
import { Calculator } from "lucide-react"

export const metadata: Metadata = {
  title: "FynanceCalc - Free Online Financial Calculators | GST, EMI, SIP & More",
  description:
    "Use FynanceCalc for free online financial calculators. Calculate GST, EMI, SIP returns, 8th pay commission salary, and health insurance premiums instantly.",
  keywords:
    "financial calculator, GST calculator online, EMI calculator, SIP calculator, pay commission calculator, health insurance calculator, free calculator",
  openGraph: {
    title: "FynanceCalc - Free Financial Calculators",
    description: "Calculate GST, EMI, SIP, salary, and insurance premiums with our free online tools.",
    type: "website",
  },
}

export default function Home() {
  const calculators = [
    {
      title: "GST Calculator",
      description: "Calculate GST and final price easily",
      href: "/gst",
      icon: "💰",
    },
    {
      title: "EMI Calculator",
      description: "Calculate your monthly loan installments",
      href: "/emi",
      icon: "🏦",
    },
    {
      title: "SIP Calculator",
      description: "Plan your systematic investment program",
      href: "/sip",
      icon: "📈",
    },
    {
      title: "8th Pay Commission",
      description: "Calculate salary under 8th Pay Commission",
      href: "/pay-commission",
      icon: "👨‍💼",
    },
    {
      title: "Health Insurance Premium",
      description: "Estimate your health insurance premium",
      href: "/health-insurance",
      icon: "🏥",
    },
    {
      title: "Blogs",
      description: "Read financial tips and insights",
      href: "/blogs",
      icon: "📚",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Calculator className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">FynanceCalc</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Financial Calculators</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Simple, accurate tools to help you make smarter financial decisions
        </p>
      </section>

      {/* Calculator Cards */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {calculators.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="group relative overflow-hidden rounded-lg bg-card border border-border p-8 transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="flex flex-col h-full">
                <div className="text-5xl mb-4">{calc.icon}</div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">{calc.title}</h3>
                <p className="text-muted-foreground flex-grow mb-4">{calc.description}</p>
                <div className="inline-flex items-center text-primary font-semibold">Get Started →</div>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
