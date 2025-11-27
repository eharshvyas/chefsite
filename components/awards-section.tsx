"use client"

import { Award, Trophy, Star, Medal, ChevronDown, ChevronUp, X, FileText } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function AwardsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const awards = [
    {
      title: "Indian Culinary Forum - Professional Member",
      organization: "Indian Culinary Forum",
      description: "Professional Member Certificate - Membership Number: 0035P2025, July 2025, New Delhi",
      image: "/images/indian-culinary-forum-certificate.png",
      icon: Award,
    },
    {
      title: "Chefs Guild of India - Member",
      organization: "Chefs Guild of India (IFCA)",
      description: "Elected Member - Membership No: CGI-334, Valid until July 2028",
      image: "/images/chefs-guild-india-certificate.png",
      icon: Medal,
    },
    {
      title: "Marquis Who's Who Honored Listee",
      organization: "Marquis Who's Who Publications",
      description: "Honored Listee 2025 - Over 125 years of excellence in biographical recognition",
      image: "/images/who-27s-20who.png",
      icon: Trophy,
    },
    {
      title: "Who's Who in America",
      organization: "Marquis Who's Who Publications Board",
      description: "Approved biographical record for 2025-2026 edition",
      image: "/images/marquis-20who-27s-20who-20publication-20certificate.png",
      icon: Star,
    },
    {
      title: "South Asian Friendship Center Recommendation",
      organization: "South Asian Friendship Center",
      description: "Letter of Recommendation from Executive Director Shaun Singh for exceptional culinary services",
      image: "/images/south-asian-friendship-center-letter.jpg",
      icon: FileText,
    },
    {
      title: "Award of Excellence",
      organization: "Summer Festival 2024",
      description: "Outstanding Culinary Skills - Voted by over 10,000 guests and 60,000 online viewers",
      image: "/images/2b1ccdac-ec63-4444-a78f-c63b7cb63ea7.jpg",
      icon: Trophy,
    },
    {
      title: "CABI Appreciation Letter",
      organization: "Cricket Association for Blind in India",
      description: "Heartfelt appreciation for exceptional hospitality and culinary experience - December 2024",
      image: "/images/appreciation-20certificate-20indian-20cricket-20for-20blind-20.jpg",
      icon: Award,
    },
    {
      title: "ServSafe Certification",
      organization: "National Restaurant Association",
      description: "Food Protection Manager Certification - Valid through 2030",
      image: "/images/7fb22f06-c0fd-4678-9423-8f049ea4fc05.jpg",
      icon: Star,
    },
    {
      title: "Supervisory Development Programme",
      organization: "The Oberoi Group",
      description: "Successfully completed programme from August - October 2016",
      image: "/images/supervisor-20development-20program.jpg",
      icon: Star,
    },
    {
      title: "Wildflower Hall Recognition",
      organization: "Oberoi Wildflower Hall, Shimla",
      description:
        "Best Bakery & Pastry Chef at Oberoi Group - No. 1 hotel TripAdvisors Travellers' Choice Awards 2015",
      image: "/images/appreciation-20certificate-20wildflower-20hall.jpg",
      icon: Trophy,
    },
    {
      title: "Uttarakhand CM Certificate",
      organization: "Chief Minister, Uttarakhand",
      description: "Official certification from Harish Rawat, CM of Uttarakhand for culinary expertise",
      image: "/images/appreciation-20certificate-20uttarakhand-20cm-20office.jpg",
      icon: Medal,
    },
    {
      title: "TheosoFest Appreciation",
      organization: "The Theosophical Society in America",
      description: "Certificate of Appreciation for many years of participation at TheosoFest",
      image: "/images/appreciation-20certificate-20theosofical-20society.jpg",
      icon: Award,
    },
  ]

  const displayedAwards = isExpanded ? awards : awards.slice(0, 4)

  return (
    <section
      id="awards"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-mist-teal/20 to-white"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center justify-center gap-2 md:gap-3 text-mountain-teal mb-4">
            <Award className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
            <span className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider">Recognition</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance bg-gradient-to-r from-himalayan-blue via-royal-blue to-mountain-teal bg-clip-text text-transparent px-4 pb-2">
            Awards & Certifications
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed px-4">
            Recognized for culinary excellence, food safety standards, and commitment to authentic cuisine
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 md:mb-12">
          {displayedAwards.map((award, index) => {
            const Icon = award.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl md:rounded-2xl overflow-hidden border border-teal-100 hover:border-gold-accent transition-all duration-300 hover:shadow-xl cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(award.image)}
              >
                {/* Certificate Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-teal-50">
                  <Image
                    src={award.image || "/placeholder.svg"}
                    alt={award.title}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-gold-accent/50 transition-all duration-300" />
                  {/* Hover indicator */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">
                      Click to view
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-teal-700" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="font-serif text-sm sm:text-base font-bold text-slate-900 leading-tight line-clamp-2">
                        {award.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs font-semibold text-teal-700 line-clamp-1">
                        {award.organization}
                      </p>
                    </div>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {award.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {awards.length > 4 && (
          <div className="flex justify-center mb-12 md:mb-16">
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              size="lg"
              className="bg-himalayan-blue hover:bg-mountain-teal text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {isExpanded ? (
                <>
                  <span>View Less</span>
                  <ChevronUp className="ml-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  <span>View More Awards</span>
                  <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        )}

        {/* Image Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all"
            >
              <X className="w-8 h-8 text-white" />
            </button>
            <div className="relative w-full max-w-5xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Certificate"
                fill
                className="object-contain bg-white"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
