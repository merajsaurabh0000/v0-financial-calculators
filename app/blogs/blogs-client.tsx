"use client"

import Link from "next/link"
import { ChevronLeft, Calendar, User, ArrowRight } from "lucide-react"

export default function BlogsClient() {
  const blogs = [
    {
      id: 1,
      title: "Understanding GST: A Comprehensive Guide",
      excerpt:
        "Learn how Goods and Services Tax works, its impact on your business, and how to calculate it correctly.",
      author: "Financial Expert",
      date: "Jan 5, 2024",
      category: "Tax Planning",
      readTime: "5 min read",
      image: "/gst-tax.jpg",
    },
    {
      id: 2,
      title: "EMI Calculation: How to Choose the Right Loan",
      excerpt:
        "Understand how EMI works, factors affecting your monthly installments, and tips to minimize your loan burden.",
      author: "Loan Advisor",
      date: "Jan 3, 2024",
      category: "Loans",
      readTime: "6 min read",
      image: "/loan-emi.jpg",
    },
    {
      id: 3,
      title: "SIP vs Lump Sum: Which Investment Strategy is Better?",
      excerpt:
        "Compare Systematic Investment Plan with lump sum investments and learn which approach suits your financial goals.",
      author: "Investment Manager",
      date: "Dec 28, 2023",
      category: "Investments",
      readTime: "7 min read",
      image: "/sip-investment.jpg",
    },
    {
      id: 4,
      title: "8th Pay Commission Changes Explained",
      excerpt:
        "A detailed breakdown of the 8th Pay Commission updates, salary structure changes, and what it means for government employees.",
      author: "HR Consultant",
      date: "Dec 20, 2023",
      category: "Government Benefits",
      readTime: "8 min read",
      image: "/pay-commission.jpg",
    },
    {
      id: 5,
      title: "Health Insurance: What Coverage Do You Really Need?",
      excerpt:
        "Explore different health insurance plans, understand coverage options, and choose the best policy for your family.",
      author: "Insurance Specialist",
      date: "Dec 15, 2023",
      category: "Insurance",
      readTime: "6 min read",
      image: "/health-insurance.jpg",
    },
    {
      id: 6,
      title: "5 Money-Saving Tips Every Indian Household Should Know",
      excerpt:
        "Practical strategies to improve your financial health, save more money, and build wealth for the future.",
      author: "Financial Planner",
      date: "Dec 10, 2023",
      category: "Personal Finance",
      readTime: "5 min read",
      image: "/money-saving.jpg",
    },
    {
      id: 7,
      title: "Building Your Emergency Fund: A Step-by-Step Guide",
      excerpt:
        "Learn how to create an emergency fund that protects you from financial crises. Understand how much you need to save and where to keep your money.",
      author: "Financial Advisor",
      date: "Jan 8, 2024",
      category: "Savings",
      readTime: "7 min read",
      image: "/emergency-fund.jpg",
    },
    {
      id: 8,
      title: "Retirement Planning for Government Employees: Maximize Your Benefits",
      excerpt:
        "Comprehensive guide to retirement planning under 8th Pay Commission. Learn about pension schemes, investment options, and strategies to build a secure retirement.",
      author: "Pension Expert",
      date: "Jan 6, 2024",
      category: "Retirement",
      readTime: "8 min read",
      image: "/retirement-planning.jpg",
    },
    {
      id: 9,
      title: "Investment for Beginners: 10 Mistakes to Avoid",
      excerpt:
        "Common investment mistakes and how to avoid them. Learn about diversification, asset allocation, and smart investing practices for wealth creation.",
      author: "Investment Coach",
      date: "Jan 4, 2024",
      category: "Investments",
      readTime: "6 min read",
      image: "/investment-mistakes.jpg",
    },
    {
      id: 10,
      title: "Tax Deductions and Exemptions Every Indian Should Know",
      excerpt:
        "Explore tax saving opportunities under different sections of the Income Tax Act. Understand how to reduce your tax liability legally and save more money.",
      author: "Tax Consultant",
      date: "Jan 1, 2024",
      category: "Tax Planning",
      readTime: "8 min read",
      image: "/tax-deductions.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Financial Tips & Insights</h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-16 text-center max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-foreground mb-4 leading-tight">Read Our Latest Articles</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Expert insights and practical tips to help you make better financial decisions. Explore topics from GST
          calculations to investment strategies.
        </p>
      </section>

      {/* Featured Article */}
      <section className="px-6 pb-12 max-w-5xl mx-auto">
        <Link href="/blogs/1" className="group">
          <article className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/40 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
              <div className="relative h-64 md:h-full overflow-hidden">
                <img
                  src="/featured-gst-calculator.jpg"
                  alt="Featured"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-xs font-semibold px-3 py-1 bg-primary/20 text-primary rounded-full w-fit mb-4">
                  Featured
                </span>
                <h3 className="text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  Understanding GST: A Comprehensive Guide
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Learn how Goods and Services Tax works, its impact on your business, and how to calculate it correctly
                  with our detailed guide.
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Financial Expert</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Jan 5, 2024</span>
                  </div>
                  <span>5 min read</span>
                </div>
                <button className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>
        </Link>
      </section>

      {/* Articles Grid */}
      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-foreground mb-8">All Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.slice(1).map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`} className="group">
              <article className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition-all">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-primary/15 text-primary rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">{blog.excerpt}</p>

                  {/* Meta */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="w-3.5 h-3.5" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{blog.date}</span>
                      </div>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <button className="mt-4 inline-flex items-center text-primary font-semibold text-sm group-hover:gap-1 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
