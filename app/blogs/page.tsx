import type { Metadata } from "next"
import BlogsClient from "./blogs-client"

export const metadata: Metadata = {
  title: "Financial Tips & Insights | FynanceCalc Blog | Free Articles",
  description:
    "Read expert articles on GST, EMI, SIP, 8th Pay Commission, health insurance, and personal finance tips. FynanceCalc blog covers financial planning and money management.",
  keywords:
    "financial blog, finance tips, money management, investment blog, GST tips, EMI guide, SIP guide, financial planning, personal finance",
  openGraph: {
    title: "Financial Tips & Insights - FynanceCalc Blog",
    description:
      "Read expert articles and insights on financial calculators, investment planning, and money management.",
  },
}

export default function BlogsPage() {
  return <BlogsClient />
}
