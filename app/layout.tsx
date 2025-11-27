import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { FloatingSocial } from "@/components/floating-social"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0066FF",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chefsurendrarawat.com"),
  title: {
    default: "Chef Surendra Rawat | ACF Chef Chicago | Himalayan Cuisine Expert",
    template: "%s | Chef Surendra Rawat",
  },
  description:
    "Award-winning Executive Chef and ACF member specializing in Himalayan cuisine, bakery, and pastry arts. Based in Chicago and Executive Chef at India Palace Restaurant.",
  keywords: [
    "acf chef chicago",
    "chef surendra rawat",
    "himalayan cuisine",
    "uttarakhand food",
    "pastry chef",
    "bakery chef",
    "indian chef chicago",
    "oberai group chef",
    "executive chef wheaton",
  ],
  authors: [{ name: "Chef Surendra Rawat" }],
  creator: "Chef Surendra Rawat",
  publisher: "Chef Surendra Rawat",
  alternates: {
    canonical: "https://www.chefsurendrarawat.com",
  },
  openGraph: {
    type: "website",
    siteName: "Chef Surendra Rawat",
    url: "https://www.chefsurendrarawat.com",
    title: "Chef Surendra Rawat – ACF Chef Chicago | Himalayan Culinary Artist",
    description:
      "Executive Chef specializing in Himalayan cuisine, pastry arts, and fine Indian culinary experiences.",
    images: [
      {
        url: "https://www.chefsurendrarawat.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Chef Surendra Rawat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chef Surendra Rawat – ACF Himalayan Chef",
    description: "Authentic Himalayan cuisine & French pastry artistry.",
    images: ["https://www.chefsurendrarawat.com/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google-site-verification-code-here",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnections */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />

        {/* Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preload Hero Image */}
        <link
          rel="preload"
          as="image"
          href="/images/design-mode/IMG_8120.JPG.jpeg"
          type="image/jpeg"
          fetchPriority="high"
        />

        {/* JSON-LD: Chef */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Chef Surendra Rawat",
              jobTitle: "Executive Chef",
              url: "https://www.chefsurendrarawat.com",
              image: "https://www.chefsurendrarawat.com/images/chef-surendra.jpg",
              worksFor: {
                "@type": "Restaurant",
                name: "India Palace Restaurant",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "242 E Geneva Rd",
                  addressLocality: "Wheaton",
                  addressRegion: "IL",
                  postalCode: "60187",
                },
              },
              sameAs: [
                "https://www.instagram.com/surendrasinghrawat91",
                "https://www.facebook.com/share/1AHqjGcMYF",
                "https://www.youtube.com/@ChefSurendraRawat",
              ],
            }),
          }}
        />

        {/* JSON-LD: Restaurant */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "India Palace Restaurant",
              address: {
                "@type": "PostalAddress",
                streetAddress: "242 E Geneva Rd",
                addressLocality: "Wheaton",
                addressRegion: "IL",
                postalCode: "60187",
                addressCountry: "US",
              },
              servesCuisine: ["Indian", "North Indian", "Himalayan"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.2",
                reviewCount: 500,
              },
            }),
          }}
        />
      </head>

      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans bg-background`}>
        {children}
        <FloatingSocial />
      </body>
    </html>
  )
}
