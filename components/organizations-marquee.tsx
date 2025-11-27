"use client"

import Image from "next/image"
import { useState } from "react"

const organizations = [
  { name: "American Culinary Federation", logo: "/images/acf-logo.png" },
  { name: "Chefs Guild of India", logo: "/images/logos/chefs-guild-india.png" },
  { name: "Indian Culinary Forum", logo: "/images/logos/indian-culinary-forum.png" },
  { name: "World Association of Chefs Societies", logo: "/images/logos/world-chefs.jpg" },
  { name: "Veggie Fest", logo: "/images/logos/veggie-fest.png" },
  { name: "Carol Stream Public Library", logo: "/images/logos/carol-stream-library.png" },
  { name: "Faith Lutheran Church", logo: "/images/logos/faith-lutheran-church.png" },
  { name: "People's Resource Center", logo: "/images/logos/peoples-resource-center.png" },
  { name: "Oberoi Hotels & Resorts", logo: "/images/logos/oberoi-hotels.png" },
]

export function OrganizationsMarquee() {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate for infinite scroll
  const marqueeList = [...organizations, ...organizations]

  return (
    <section
      className="py-16 md:py-24 overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <div className="text-center mb-14 relative z-10">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#C79A21] font-semibold mb-2">
          Affiliations & Collaborations
        </p>

        <h2
          className="
            text-3xl md:text-5xl 
            font-serif font-bold 
            bg-gradient-to-r 
            from-[#E3B34C] via-[#D9A441] to-[#B88728] 
            bg-clip-text text-transparent
          "
        >
          Proud Member & Partner
        </h2>

        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C79A21] to-transparent mx-auto mt-4" />
      </div>

      {/* Marquee */}
      <div className="relative z-10">
        {/* Side fade */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        <div className={`flex gap-16 md:gap-24 whitespace-nowrap ${isPaused ? "" : "animate-marquee-fast"}`}>
          {marqueeList.map((org, i) => (
            <div
              key={`${org.name}-${i}`}
              className="
                relative flex-shrink-0
                h-16 md:h-20 
                w-28 md:w-36
                flex items-center justify-center
                transition-all duration-300
              "
            >
              {/* Constant golden glow (no background box) */}
              <div
                className="
                  absolute inset-0
                  pointer-events-none
                  blur-xl 
                  opacity-70
                  bg-[#f4d26a]/40
                  rounded-full
                "
              />

              {/* Logo */}
              <Image
                src={org.logo || "/placeholder.svg"}
                alt={org.name}
                fill
                className="object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrganizationsMarquee
