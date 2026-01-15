"use client"

import Link from "next/link"
import { ChevronLeft, Calendar, User, Clock, Share2 } from "lucide-react"
import { useState } from "react"

const blogPosts = {
  1: {
    title: "Understanding GST: A Comprehensive Guide",
    author: "Financial Expert",
    date: "January 5, 2024",
    readTime: "5 min read",
    category: "Tax Planning",
    image: "/gst-tax-calculator.jpg",
    content: `
      <h2>What is GST?</h2>
      <p>The Goods and Services Tax (GST) is an indirect tax levied on the supply of goods and services. It replaced multiple taxes including VAT, service tax, and excise duty, creating a unified tax system across India.</p>
      
      <h2>How GST Works</h2>
      <p>GST is a destination-based tax, meaning it's collected at the point where goods or services are consumed. The tax is calculated on the value added at each stage of production or distribution.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>Input Tax Credit (ITC) - Businesses can claim credit for GST paid on inputs</li>
        <li>Uniform tax across states - Eliminates state-level tax variations</li>
        <li>Multi-stage tax collection - Tax is collected at each stage of supply chain</li>
        <li>Transparent pricing - Final consumer knows the exact tax component</li>
      </ul>
      
      <h2>GST Rates in India</h2>
      <p>GST is levied at four main rates: 5%, 12%, 18%, and 28%. The rate depends on the type of good or service.</p>
      
      <h3>Rate Classification:</h3>
      <ul>
        <li><strong>5% Rate:</strong> Basic necessities, food items, medicines</li>
        <li><strong>12% Rate:</strong> Mid-range items like processed foods, cosmetics</li>
        <li><strong>18% Rate:</strong> Standard goods and services like electronics, clothing</li>
        <li><strong>28% Rate:</strong> Luxury items like branded goods, imported items</li>
      </ul>
      
      <h2>How to Calculate GST</h2>
      <p>GST calculation is straightforward. Use our GST calculator tool to instantly compute the tax on any amount.</p>
      
      <h2>Benefits of GST</h2>
      <ol>
        <li>Simplified tax structure - Single tax replaces multiple taxes</li>
        <li>Reduced cascading effect - Input credits prevent tax-on-tax</li>
        <li>Better compliance - Digital tracking of all transactions</li>
        <li>Lower prices - For consumers, especially on manufactured goods</li>
        <li>Boost to exports - Zero-rated supplies promote international trade</li>
      </ol>
      
      <h2>GST Compliance for Businesses</h2>
      <p>Businesses with annual turnover above ₹40 lakhs must register for GST. Registration involves filing FORM REG-01 with the tax authority.</p>
    `,
  },
  2: {
    title: "EMI Calculation: How to Choose the Right Loan",
    author: "Loan Advisor",
    date: "January 3, 2024",
    readTime: "6 min read",
    category: "Loans",
    image: "/emi-loan-calculator.jpg",
    content: `
      <h2>What is EMI?</h2>
      <p>EMI stands for Equated Monthly Installment. It's the fixed amount you pay monthly to repay a loan. The EMI includes both principal and interest components.</p>
      
      <h2>Understanding EMI Components</h2>
      <p>Your EMI is divided into two parts: principal repayment and interest. Initially, most of your EMI goes towards interest, but as you pay down the loan, more goes towards principal.</p>
      
      <h3>Key EMI Factors:</h3>
      <ul>
        <li>Loan Amount - Higher loan means higher EMI</li>
        <li>Interest Rate - Higher rate increases your EMI</li>
        <li>Loan Tenure - Longer period reduces EMI but increases total interest</li>
        <li>Type of Interest - Simple vs compound interest affects calculation</li>
      </ul>
      
      <h2>EMI Formula</h2>
      <p>The standard EMI formula is: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)</p>
      <p>Where P = Principal, r = Monthly interest rate, n = Number of months</p>
      
      <h2>Types of Loans and Their EMIs</h2>
      <p>Different loan types have different interest rates, affecting your EMI amount.</p>
      
      <h3>Common Loan Types:</h3>
      <ul>
        <li><strong>Home Loan:</strong> 6-8% interest, 15-20 year tenure</li>
        <li><strong>Car Loan:</strong> 8-10% interest, 5-7 year tenure</li>
        <li><strong>Personal Loan:</strong> 10-18% interest, 3-5 year tenure</li>
        <li><strong>Education Loan:</strong> 7-10% interest, variable tenure</li>
      </ul>
      
      <h2>How to Minimize Your EMI Burden</h2>
      <ol>
        <li>Increase down payment - Reduces loan amount and EMI</li>
        <li>Compare interest rates - Get best rates from multiple lenders</li>
        <li>Choose appropriate tenure - Balance between EMI and total interest</li>
        <li>Improve credit score - Better credit gets lower interest rates</li>
        <li>Pay extra when possible - Reduces tenure and overall interest</li>
      </ol>
      
      <h2>EMI Impact on Your Budget</h2>
      <p>A good rule of thumb is that your total EMI should not exceed 40-50% of your monthly income. This ensures you have enough for other expenses and savings.</p>
    `,
  },
  3: {
    title: "SIP vs Lump Sum: Which Investment Strategy is Better?",
    author: "Investment Manager",
    date: "December 28, 2023",
    readTime: "7 min read",
    category: "Investments",
    image: "/sip-investment-plan.jpg",
    content: `
      <h2>What is SIP?</h2>
      <p>SIP stands for Systematic Investment Plan. It's a method of investing a fixed amount at regular intervals (monthly, quarterly) in mutual funds or securities.</p>
      
      <h2>What is Lump Sum Investment?</h2>
      <p>Lump sum investing involves investing a large amount of money at once, rather than in installments.</p>
      
      <h2>SIP: Advantages and Disadvantages</h2>
      
      <h3>Advantages:</h3>
      <ul>
        <li>Rupee Cost Averaging - Reduces impact of market volatility</li>
        <li>Disciplined Investing - Forces regular investment habit</li>
        <li>Lower Entry Barrier - Start with small amounts</li>
        <li>Power of Compounding - Regular investments grow exponentially over time</li>
        <li>Emotional Discipline - Avoids timing the market</li>
      </ul>
      
      <h3>Disadvantages:</h3>
      <ul>
        <li>Misses bulk investments - May miss lump sum gains in rising markets</li>
        <li>Higher overall cost - Multiple transaction charges</li>
        <li>Lower immediate returns - Smaller initial investment grows slower</li>
      </ul>
      
      <h2>Lump Sum: Advantages and Disadvantages</h2>
      
      <h3>Advantages:</h3>
      <ul>
        <li>Immediate market participation - Full amount invested at once</li>
        <li>Lower transaction costs - Single transaction fee</li>
        <li>Higher potential returns - In bull markets with larger amount</li>
        <li>Complete capital deployment - Immediate income generation potential</li>
      </ul>
      
      <h3>Disadvantages:</h3>
      <ul>
        <li>Market timing risk - May invest at market peak</li>
        <li>Emotional stress - Watching entire investment drop at once</li>
        <li>Requires large capital - Need significant money upfront</li>
        <li>No averaging benefit - No protection from market volatility</li>
      </ul>
      
      <h2>Which Strategy Should You Choose?</h2>
      <p>The choice depends on your financial situation, investment goals, and risk tolerance:</p>
      
      <h3>Choose SIP if:</h3>
      <ul>
        <li>You have limited capital</li>
        <li>You want to reduce market timing risk</li>
        <li>You're a beginner investor</li>
        <li>You want to build investment discipline</li>
      </ul>
      
      <h3>Choose Lump Sum if:</h3>
      <ul>
        <li>You have significant capital available</li>
        <li>You're comfortable with market volatility</li>
        <li>You have a long investment horizon</li>
        <li>You want to immediately generate returns</li>
      </ul>
      
      <h2>The Hybrid Approach</h2>
      <p>Many financial experts recommend a combination: invest a lump sum in fundamentally strong assets and use SIP for diversification and risk management.</p>
    `,
  },
  4: {
    title: "8th Pay Commission Changes Explained",
    author: "HR Consultant",
    date: "December 20, 2023",
    readTime: "8 min read",
    category: "Government Benefits",
    image: "/pay-commission-salary.jpg",
    content: `
      <h2>What is the Pay Commission?</h2>
      <p>The Pay Commission is a periodic committee established by the Government of India to recommend changes in salary structure and allowances for government employees.</p>
      
      <h2>Understanding the 8th Pay Commission</h2>
      <p>The 8th Pay Commission made significant changes to the salary structure of government and quasi-government employees. These changes affected pay bands, grades, and allowances.</p>
      
      <h2>Key Changes in 8th Pay Commission</h2>
      
      <h3>Salary Structure Changes:</h3>
      <ul>
        <li>Introduction of new pay bands replacing previous grade system</li>
        <li>Increased basic pay across all levels</li>
        <li>Revised allowances including DA, HRA, and special allowances</li>
        <li>Removal of old grade pay system</li>
      </ul>
      
      <h2>New Pay Bands Introduced</h2>
      <p>The 8th Pay Commission introduced pay bands for different categories of employees:</p>
      
      <h3>Pay Band Structure:</h3>
      <ul>
        <li><strong>Group A:</strong> ₹90,000 - ₹2,25,000</li>
        <li><strong>Group B:</strong> ₹55,000 - ₹1,80,000</li>
        <li><strong>Group C:</strong> ₹25,500 - ₹81,100</li>
        <li><strong>Group D:</strong> ₹18,300 - ₹58,800</li>
      </ul>
      
      <h2>Impact on Salary</h2>
      <p>The 8th Pay Commission resulted in significant salary increases for most government employees. The exact increase depended on the employee's pay band and grade.</p>
      
      <h3>Average Salary Impact:</h3>
      <ul>
        <li>Group A: 23-27% increase</li>
        <li>Group B: 25-29% increase</li>
        <li>Group C: 26-31% increase</li>
        <li>Group D: 28-35% increase</li>
      </ul>
      
      <h2>Allowances Under 8th Pay Commission</h2>
      <p>Various allowances were revised or introduced to supplement basic pay:</p>
      
      <ul>
        <li>Dearness Allowance (DA) - Adjusted quarterly</li>
        <li>House Rent Allowance (HRA) - Based on city classification</li>
        <li>Transport Allowance - Fixed amount</li>
        <li>Meal Allowance - For eligible employees</li>
        <li>Special Allowances - Category-specific benefits</li>
      </ul>
      
      <h2>Retirement Benefits</h2>
      <p>The 8th Pay Commission also improved retirement benefits, including enhanced pension calculations and gratuity provisions.</p>
      
      <h2>Deductions and Taxes</h2>
      <p>While salaries increased, employees also saw higher deductions in some cases due to revised tax slabs and higher contributions to retirement schemes.</p>
    `,
  },
  5: {
    title: "Health Insurance: What Coverage Do You Really Need?",
    author: "Insurance Specialist",
    date: "December 15, 2023",
    readTime: "6 min read",
    category: "Insurance",
    image: "/health-insurance-coverage.jpg",
    content: `
      <h2>Why Health Insurance Matters</h2>
      <p>Health insurance is crucial for financial security. A single major health event can devastate your finances. The right health insurance plan protects you and your family from unexpected medical expenses.</p>
      
      <h2>Types of Health Insurance Plans</h2>
      
      <h3>Individual Health Insurance:</h3>
      <p>Covers a single person. Usually chosen by unmarried individuals or those with employer coverage for dependents.</p>
      
      <h3>Family Health Insurance:</h3>
      <p>Covers the entire family under one policy. More cost-effective than individual policies for families.</p>
      
      <h3>Group Health Insurance:</h3>
      <p>Provided by employers. Usually has better coverage and lower premiums than individual policies.</p>
      
      <h2>Key Coverage Areas to Consider</h2>
      
      <ul>
        <li><strong>Hospitalization:</strong> Room rent, doctor fees, medicines</li>
        <li><strong>Pre-hospitalization:</strong> Diagnostic tests before admission</li>
        <li><strong>Post-hospitalization:</strong> Follow-up treatment after discharge</li>
        <li><strong>Maternity:</strong> Pregnancy and childbirth coverage</li>
        <li><strong>Critical Illness:</strong> Major disease diagnosis coverage</li>
        <li><strong>Dental and Vision:</strong> Optional coverage for dental and eye care</li>
      </ul>
      
      <h2>How Much Coverage Do You Need?</h2>
      <p>The coverage amount depends on several factors:</p>
      
      <h3>Coverage Considerations:</h3>
      <ul>
        <li>Family size and age composition</li>
        <li>Current health conditions</li>
        <li>Healthcare costs in your region</li>
        <li>Planned major treatments</li>
        <li>Financial situation and ability to co-pay</li>
      </ul>
      
      <h2>Recommended Coverage Amounts</h2>
      
      <h3>For a Family of 4:</h3>
      <ul>
        <li><strong>Basic Coverage:</strong> ₹5-10 lakhs</li>
        <li><strong>Standard Coverage:</strong> ₹10-15 lakhs</li>
        <li><strong>Premium Coverage:</strong> ₹15-20+ lakhs</li>
      </ul>
      
      <h2>Important Policy Features to Check</h2>
      
      <ul>
        <li>No claim bonus - Reduces premium on renewal</li>
        <li>Cashless treatment - Pay through insurance at network hospitals</li>
        <li>Waiting period - Usually 30 days for normal illnesses</li>
        <li>Exclusions - Conditions not covered by the policy</li>
        <li>Co-payment - Percentage you pay from treatment cost</li>
      </ul>
      
      <h2>Tips to Choose the Right Plan</h2>
      
      <ol>
        <li>Compare multiple insurers - Different plans have different benefits</li>
        <li>Read the fine print - Understand exclusions and waiting periods</li>
        <li>Check network hospitals - Ensure good hospitals in your area</li>
        <li>Review coverage limits - Ensure adequate for your needs</li>
        <li>Look for add-ons - Additional coverages available at extra cost</li>
      </ol>
    `,
  },
  6: {
    title: "5 Money-Saving Tips Every Indian Household Should Know",
    author: "Financial Planner",
    date: "December 10, 2023",
    readTime: "5 min read",
    category: "Personal Finance",
    image: "/money-saving-tips.jpg",
    content: `
      <h2>Building Financial Stability Through Smart Saving</h2>
      <p>Financial security doesn't require earning a huge income. It requires smart planning and disciplined saving. Here are five practical tips to help you save more money.</p>
      
      <h2>Tip 1: Create a Monthly Budget</h2>
      <p>A budget is your financial roadmap. Track every rupee you earn and spend. Categorize expenses into essentials, discretionary, and savings.</p>
      
      <h3>Budget Categories:</h3>
      <ul>
        <li>Housing (30% of income)</li>
        <li>Food and Groceries (15%)</li>
        <li>Transportation (10%)</li>
        <li>Utilities (10%)</li>
        <li>Insurance and Healthcare (5%)</li>
        <li>Savings (20%)</li>
        <li>Discretionary (10%)</li>
      </ul>
      
      <h2>Tip 2: Automate Your Savings</h2>
      <p>Don't rely on willpower. Set up automatic transfers to a separate savings account on payday. This "pay yourself first" approach ensures you save before spending.</p>
      
      <h3>Automation Benefits:</h3>
      <ul>
        <li>Consistent savings without conscious effort</li>
        <li>Reduces temptation to spend</li>
        <li>Builds emergency fund faster</li>
        <li>Compounds into significant wealth over time</li>
      </ul>
      
      <h2>Tip 3: Reduce Discretionary Spending</h2>
      <p>Identify and cut unnecessary expenses. Review subscriptions, dining out, and impulse purchases.</p>
      
      <h3>Areas to Cut:</h3>
      <ul>
        <li>Unused subscriptions (apps, streaming services)</li>
        <li>Dining out - Cook at home instead</li>
        <li>Impulse shopping - Use a 30-day rule before purchases</li>
        <li>Premium brands - Switch to generic equivalents</li>
        <li>Entertainment expenses - Seek free alternatives</li>
      </ul>
      
      <h2>Tip 4: Use the 50/30/20 Rule</h2>
      <p>Allocate 50% of income to needs, 30% to wants, and 20% to savings and debt repayment. This simple rule keeps your finances balanced.</p>
      
      <h3>Implementation:</h3>
      <ul>
        <li><strong>50% - Needs:</strong> Housing, food, utilities, transportation</li>
        <li><strong>30% - Wants:</strong> Entertainment, dining, hobbies</li>
        <li><strong>20% - Savings:</strong> Emergency fund, investments, debt repayment</li>
      </ul>
      
      <h2>Tip 5: Build an Emergency Fund</h2>
      <p>Life is unpredictable. Medical emergencies, job loss, or urgent repairs can happen anytime. An emergency fund protects you from financial disaster.</p>
      
      <h3>Emergency Fund Guidelines:</h3>
      <ul>
        <li><strong>Target:</strong> 3-6 months of living expenses</li>
        <li><strong>Keep in:</strong> High-interest savings account</li>
        <li><strong>For a family:</strong> ₹1-3 lakhs is a good starting point</li>
        <li><strong>Build gradually:</strong> Even ₹5,000 per month helps</li>
      </ul>
      
      <h2>Bonus Tips</h2>
      
      <ul>
        <li>Negotiate bills - Call providers and ask for discounts</li>
        <li>Use coupons and cashback - Every rupee saved adds up</li>
        <li>Buy in bulk - Reduces per-unit cost for regular items</li>
        <li>Invest in tax-saving instruments - Get returns while saving taxes</li>
        <li>Teach family - Make everyone aware of saving goals</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Financial freedom is achievable with discipline and smart choices. Start implementing these tips today, and watch your savings grow. Remember, the best time to start saving was yesterday. The second-best time is today.</p>
    `,
  },
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [copied, setCopied] = useState(false)
  const post = blogPosts[params.id as keyof typeof blogPosts]

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link href="/blogs" className="text-primary hover:underline">
            Back to blogs
          </Link>
        </div>
      </main>
    )
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/30">
      {/* Header Navigation */}
      <div className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/blogs"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Blogs
          </Link>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            {copied ? "Copied!" : "Share"}
          </button>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="relative h-96 overflow-hidden">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </section>

      {/* Main Content */}
      <article className="max-w-3xl mx-auto px-6 -mt-32 relative z-10">
        {/* Title & Meta */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 bg-primary/15 text-primary rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{post.title}</h1>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{post.author}</p>
                <p className="text-xs">Author</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">{post.date}</p>
                <p className="text-xs">Published</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">{post.readTime}</p>
                <p className="text-xs">Read Time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-sm max-w-none mb-12">
          <style>{`
            .prose {
              --prose-body: rgb(var(--color-foreground) / 1);
              --prose-headings: rgb(var(--color-foreground) / 1);
              --prose-links: rgb(var(--color-primary) / 1);
              --prose-bold: rgb(var(--color-foreground) / 1);
            }
            
            .prose h2 {
              @apply text-2xl font-bold mt-8 mb-4 text-foreground;
            }
            
            .prose h3 {
              @apply text-xl font-semibold mt-6 mb-3 text-foreground;
            }
            
            .prose p {
              @apply text-base leading-relaxed text-muted-foreground mb-4;
            }
            
            .prose ul {
              @apply list-disc list-inside space-y-2 mb-4 text-muted-foreground;
            }
            
            .prose ol {
              @apply list-decimal list-inside space-y-2 mb-4 text-muted-foreground;
            }
            
            .prose li {
              @apply text-base;
            }
            
            .prose strong {
              @apply font-bold text-foreground;
            }
          `}</style>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 mb-12 border border-primary/20">
          <h3 className="text-xl font-bold text-foreground mb-3">Ready to calculate?</h3>
          <p className="text-muted-foreground mb-4">
            Use our calculator tools to put these concepts into practice and make better financial decisions.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Go to Calculators
          </Link>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-secondary/30 py-12 mt-12">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-foreground mb-8">More Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <Link
                key={id}
                href={`/blogs/${id === Number.parseInt(params.id) ? 4 : id}`}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all"
              >
                <div className="h-40 bg-muted overflow-hidden">
                  <img
                    src={`/financial-article-.jpg?height=160&width=400&query=financial-article-${id}`}
                    alt="Article"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                    Financial Article
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">5 min read</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
