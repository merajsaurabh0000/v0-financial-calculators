import Link from "next/link"
import type { Metadata } from "next"
import { Calculator, CheckCircle, TrendingUp, Shield, Zap, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "FynanceCalc - Free Online Financial Calculators | GST, EMI, SIP & More",
  description:
    "Use FynanceCalc for free online financial calculators. Calculate GST, EMI, SIP returns, 8th pay commission salary, and health insurance premiums instantly with accurate formulas.",
  keywords:
    "financial calculator, GST calculator online, EMI calculator, SIP calculator, pay commission calculator, health insurance calculator, free calculator, financial planning",
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

  const features = [
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get accurate calculations in real-time with our advanced algorithms and formulas.",
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Your financial data is processed locally. We don't store or share any personal information.",
    },
    {
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Make informed decisions with detailed breakdowns and comprehensive financial insights.",
    },
    {
      icon: Users,
      title: "Used by Thousands",
      description: "Join thousands of users who trust FynanceCalc for their financial calculations.",
    },
  ]

  const benefits = [
    "Free to use with no hidden charges or subscriptions",
    "Accurate calculations based on current financial standards",
    "Simple and intuitive interface for all users",
    "Detailed breakdowns and comprehensive results",
    "Mobile-friendly design for calculations on the go",
    "Regular updates with latest financial regulations",
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
        <div className="flex items-center gap-2">
          <Calculator className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">FynanceCalc</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/blogs" className="text-muted-foreground hover:text-foreground transition">
            Blog
          </Link>
          <Link href="#calculators" className="text-muted-foreground hover:text-foreground transition">
            Tools
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <div className="mb-6 inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
          Free Financial Calculators
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Master Your Finances with Precision
        </h1>
        <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
          FynanceCalc provides powerful, easy-to-use calculators for GST, EMI, SIP, salary calculations, health insurance, and more. Make smarter financial decisions backed by accurate calculations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#calculators"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
          >
            Explore Calculators
          </Link>
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition"
          >
            Read Our Blog
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose FynanceCalc?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-card-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Calculators Section */}
      <section id="calculators" className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Our Financial Calculators</h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Choose from our comprehensive suite of financial calculators designed to help you with different aspects of financial planning and decision-making.
        </p>
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

      {/* Benefits Section */}
      <section className="px-6 py-16 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Benefits of Using FynanceCalc</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Financial Insights & Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Content Block 1 */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Understanding GST in India</h3>
            <p className="text-muted-foreground mb-4">
              Goods and Services Tax (GST) is a comprehensive indirect tax on manufacturing, sale, and consumption of goods and services. Our GST calculator helps you instantly calculate the tax amount and final price for any transaction.
            </p>
            <Link href="/gst" className="text-primary font-semibold hover:underline">
              Calculate GST →
            </Link>
          </div>

          {/* Content Block 2 */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-bold text-card-foreground mb-4">EMI Calculation Made Simple</h3>
            <p className="text-muted-foreground mb-4">
              Equated Monthly Installment (EMI) is the fixed amount you pay monthly towards your loan repayment. Use our EMI calculator to understand your monthly payment obligations and plan your finances better.
            </p>
            <Link href="/emi" className="text-primary font-semibold hover:underline">
              Calculate EMI →
            </Link>
          </div>

          {/* Content Block 3 */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Systematic Investment Plan (SIP)</h3>
            <p className="text-muted-foreground mb-4">
              SIP is a disciplined investment approach where you invest a fixed amount regularly. Our SIP calculator shows you the potential future value of your investments based on historical market returns.
            </p>
            <Link href="/sip" className="text-primary font-semibold hover:underline">
              Calculate SIP Returns →
            </Link>
          </div>

          {/* Content Block 4 */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Health Insurance Premium Guide</h3>
            <p className="text-muted-foreground mb-4">
              Health insurance is essential for protecting yourself and your family from medical expenses. Calculate your ideal health insurance premium based on age, family size, and coverage needs.
            </p>
            <Link href="/health-insurance" className="text-primary font-semibold hover:underline">
              Calculate Premium →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-primary/5 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Start Making Smarter Financial Decisions Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Use our free calculators to plan your finances better. No registration required, completely secure and private.
          </p>
          <Link
            href="#calculators"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
          >
            Access All Calculators
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                FynanceCalc
              </h3>
              <p className="text-muted-foreground text-sm">
                Your trusted companion for accurate financial calculations and planning.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/#calculators" className="text-muted-foreground hover:text-foreground transition">
                    Calculators
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-muted-foreground hover:text-foreground transition">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Popular Calculators</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/gst" className="text-muted-foreground hover:text-foreground transition">
                    GST Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/emi" className="text-muted-foreground hover:text-foreground transition">
                    EMI Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/sip" className="text-muted-foreground hover:text-foreground transition">
                    SIP Calculator
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>© 2026 FynanceCalc. All rights reserved. Disclaimer: Calculators are for informational purposes only.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
