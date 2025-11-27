"use client"

import {
  FileText,
  ExternalLink,
  Calendar,
  Building2,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

import { useState, useMemo } from "react"

export function PressSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const pressFeatures = [
    {
      title:
        "Chef Surendra Rawat Showcases Uttarakhand Cuisine at Veggie Fest Chicago 2025",
      publication: "Hospitality News India",
      date: "August 14, 2025",
      description:
        "Veggie Fest Chicago welcomed over 40,000 attendees for a weekend of flavors and cultural exchange. Chef Surendra showcased authentic mountain cuisine from Uttarakhand.",
      link: "https://hospitalitynews.in/news/chef-surendra-rawat-showcases-uttarakhand-cuisine-at-veggie-fest-chicago-2025",
    },
    {
      title: "Why Millennials and Gen Z Are Driving the Demand for Green Salads",
      publication: "The Hans India",
      date: "September 19, 2025",
      description:
        "An exploration of how younger generations are reshaping demand for sustainable, fresh, and nutritious culinary choices.",
      link: "https://www.thehansindia.com/life-style/food/why-millennials-and-gen-z-are-driving-the-demand-for-green-salads-1007903",
    },
    {
      title: "How Veganism Is Reshaping the Global Hospitality Industry",
      publication: "Hotelier India",
      date: "July 13, 2025",
      description:
        "A deep dive into how plant-based choices, eco-conscious travelers, and modern wellness trends are transforming hotels and restaurants worldwide.",
      link: "https://www.hotelierindia.com/operations/the-green-revolution-how-veganism-is-reshaping-the-global-hospitality-industry",
    },
    {
      title: "Featured in Food Industry News",
      publication: "Food Industry News Magazine — October 2024",
      date: "September 10, 2024",
      description:
        "Highlighting culinary innovation, Himalayan cooking techniques, and Chef Surendra’s contributions to authentic cuisine.",
      link: "https://issuu.com/foodindustrynews/docs/food_industry_news-october_2024/14",
    },
    {
      title: "India Tribune Community Feature",
      publication: "India Tribune",
      date: "September 13, 2024",
      description:
        "Community spotlight celebrating culinary achievements and cultural contributions (see article on page 10).",
      link: "https://www.indiatribune.com/indianews/September-13-2024?type=0",
    },
    {
      title: "Diaspora Connect USA Magazine — Himalayan Cuisine Highlight",
      publication: "Diaspora Connect USA",
      date: "February 2025",
      description:
        "'Barnyard Millet ki Kheer' featured in culinary corner, showcasing Himalayan authenticity and nutrition.",
      link: "https://online.fliphtml5.com/fpusm/wxjv/#p=38",
    },
    {
      title: "The Impact of Social Media Reviews on Restaurant Business",
      publication: "College of DuPage Research Symposium",
      date: "May 9, 2022",
      description:
        "Research analyzing how online reviews influence restaurant performance and customer behavior.",
      link: "https://dc.cod.edu/srs/2022/schedule/4/",
    },
  ]

  /** SORT LATEST → OLDEST */
  const sortedPress = useMemo(() => {
    return [...pressFeatures].sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateB.getTime() - dateA.getTime()
    })
  }, [])

  return (
    <section id="press" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-5xl">

        {/* SECTION HEADER */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-3 text-mountain-teal">
            <FileText className="h-6 w-6" />
            <span className="text-sm font-bold uppercase tracking-wider">Media & Features</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-himalayan-blue">
            Published Articles
          </h2>
        </div>

        {/* SORTED ARTICLES — ALL SHOWN */}
        <div className="space-y-6">
          {sortedPress.map((feature, index) => {
            const isOpen = openIndex === index

            return (
              <div key={index} className="border-b border-himalayan-blue/20 pb-4">
                {/* TITLE ROW */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-start text-left group"
                >
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-himalayan-blue group-hover:text-gold-accent transition">
                      {feature.title}
                    </h3>

                    <div className="flex gap-4 mt-2 text-sm">
                      <div className="flex items-center gap-2 text-himalayan-blue font-semibold">
                        <Building2 className="h-4 w-4" />
                        {feature.publication}
                      </div>
                      <span className="text-himalayan-blue/40">•</span>
                      <div className="flex items-center gap-2 text-mountain-teal">
                        <Calendar className="h-4 w-4" />
                        {feature.date}
                      </div>
                    </div>
                  </div>

                  {isOpen ? (
                    <ChevronUp className="h-6 w-6 text-himalayan-blue" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-himalayan-blue" />
                  )}
                </button>

                {/* DROPDOWN */}
                <div className={`transition-all overflow-hidden duration-500 ${isOpen ? "max-h-[400px] mt-4" : "max-h-0"}`}>
                  <p className="text-mountain-teal mb-3">{feature.description}</p>
                  <a
                    href={feature.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-himalayan-blue font-semibold hover:text-gold-accent transition"
                  >
                    Read Full Article
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
