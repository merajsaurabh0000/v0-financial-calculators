'use client';

import type React from "react"
import { useEffect } from "react"

interface AdUnitProps {
  slot: string
  format?: "auto" | "rectangle" | "vertical" | "horizontal"
  responsive?: boolean
}

export const AdUnit: React.FC<AdUnitProps> = ({
  slot,
  format = "auto",
  responsive = true,
}) => {
  useEffect(() => {
    // Only load adsbygoogle script when component mounts on content-heavy page
    if (typeof window !== "undefined" && !window.adsbygoogle) {
      const script = document.createElement("script")
      script.async = true
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6750572764171645"
      script.crossOrigin = "anonymous"
      document.head.appendChild(script)
    }

    // Push ad unit
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({})
      }
    } catch (error) {
      console.error("[v0] AdUnit push error:", error)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-6750572764171645"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    />
  )
}

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>
  }
}
