"use client"

import { Award, FileText, Video, BookOpen, ChefHat, ExternalLink, Calendar, X, Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function ACFSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const acfHighlights = {
    membership: {
      title: "ACF Professional Membership",
      description:
        "Active member of the American Culinary Federation - the premier professional organization for chefs and cooks in North America",
      image: "/images/acf-membership-certificate-official.jpg",
      validThrough: "June 30, 2026",
    },
    spotlightMember: {
      title: "ACF Chicago Spotlight Member",
      date: "June 2024",
      description:
        "Featured member recognition by ACF Chicago Chefs for outstanding contributions to the culinary community",
      link: "https://acfchicagochefs.org/Spotlight_Member",
    },
    certifications: [
      {
        title: "ACF Membership Certificate",
        date: "Valid through June 30, 2026",
        image: "/images/acf-membership-certificate-official.jpg",
      },
      {
        title: "ACF Chicago Certificate of Appreciation",
        date: "February 22, 2025",
        image: "/images/appreciation-20certificate-20acf-20chicago.jpg",
      },
      {
        title: "ACF Continuing Education - Exploring Northern India Cuisine",
        date: "2024",
        image: "/images/04aa1b85-9d74-4313-a82a-aedb5ca898aa.jpg",
      },
    ],
    newsletters: [
      {
        title: "ACF Chicago Newsletter - Featured Achievement",
        date: "September 2025",
        description:
          "Highlighted in the monthly ACF Chicago newsletter celebrating professional achievements and community contributions",
        link: "https://acfchicagochefs.org/news.php?=1&id=144",
      },
      {
        title: "Professional Recognition Spotlight",
        date: "August 2025",
        description:
          "Featured article showcasing culinary expertise and dedication to the American Culinary Federation mission",
        link: "https://acfchicagochefs.org/news.php?=1&id=143",
      },
      {
        title: "Community Service Excellence",
        date: "2025",
        description:
          "Recognition for outstanding community cooking demonstrations and educational contributions to the culinary arts",
        link: "https://acfchicagochefs.org/news.php?id=146",
      },
    ],
    recipes: [
      {
        title: "Chicken Tikka Masala Recipe",
        description:
          "Authentic recipe shared with ACF Chicago Chefs community featuring traditional Indian spices and techniques",
        link: "https://acfchicagochefs.org/downloads/General/chicken_tikka_recipe_by_chef_surendra_rawat.pdf",
        icon: ChefHat,
      },
      {
        title: "Saag Paneer Recipe",
        description: "Traditional North Indian spinach and cottage cheese curry showcasing Himalayan culinary heritage",
        link: "https://acfchicagochefs.org/downloads/General/saag_paneer_recipe_by_chef_surendra_rawat.pdf",
        icon: BookOpen,
      },
    ],
    communityDemonstrations: [
      {
        title: "No-Bake Cheesecake Demonstration",
        venue: "Carol Stream Public Library",
        date: "May 16, 2023",
        description: "Free cooking demonstration showcasing culinary expertise with a popular no-bake dessert recipe",
        link: "https://carolstream.librarycalendar.com/event/no-bake-cheesecake-person",
        youtubeLink: "https://youtu.be/mEEC0GgCA_g?feature=shared",
        logo: "/images/logos/carol-stream-library.png",
      },
      {
        title: "ESL Community Cooking Workshop",
        venue: "Faith Lutheran Church, Glen Ellyn",
        date: "April 18, 2023",
        description:
          "For ESL students from Wheaton People's Resource Center, promoting cultural exchange through food",
        link: "https://www.faithonline.org/esl-cooking_2023.html",
        youtubeLink: "https://youtube.com/shorts/o54eXk_bjHo?si=hHWfobaOIBme0EaI",
        logo: "/images/logos/faith-lutheran-church.png",
      },
      {
        title: "Veggie Fest Chicago Food Demo",
        venue: "Veggie Fest Chicago",
        date: "2024",
        description:
          "Millet Bread Stuffed with Lentils and Mushrooms - showcasing Himalayan cuisine to thousands of festival attendees",
        link: "https://veggiefestchicago.org/wp-content/uploads/2025/07/Veggi...-Rahat-Millet-Bread-Stuffed-with-Lentils-and-Mushrooms-NEW.pdf",
        youtubeLink: "https://youtu.be/SurqvoBi_JM?feature=shared",
        logo: "/images/logos/veggie-fest.png",
      },
      {
        title: "Professional Culinary Demonstration",
        venue: "Community Event",
        date: "2024",
        description:
          "Expert cooking demonstration showcasing professional techniques and traditional recipes to inspire home cooks",
        link: "#",
        youtubeLink: "https://youtu.be/t_IKJtSiUOY?feature=shared",
        logo: null, // Use star icon instead
      },
    ],
  }

  return (
    <section
      id="acf"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8E9C6]/20 via-white to-[#F8E9C6]/20"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center justify-center gap-2 md:gap-3 text-[#D4A017] mb-4">
            <Award className="h-6 w-6 sm:h-7 sm:w-7 md:h-10 md:w-10 animate-pulse" />
            <span className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider">
              Professional Excellence
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance bg-gradient-to-r from-[#D4A017] via-[#FFD700] to-[#D4A017] bg-clip-text text-transparent px-4">
            American Culinary Federation
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A]/80 max-w-4xl mx-auto leading-relaxed px-4">
            Active member and recognized contributor to the American Culinary Federation Chicago Chapter, dedicated to
            professional excellence, community service, and culinary education
          </p>
        </div>

        <div className="mb-12 md:mb-16">
          <div className="relative bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] rounded-3xl p-1 shadow-2xl overflow-hidden group">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4A017] via-[#FFD700] to-[#D4A017] opacity-75 blur-sm animate-pulse" />

            <div className="relative bg-gradient-to-br from-[#FFF8E7] via-[#F8E9C6] to-[#FFEAA7] rounded-3xl p-8 md:p-12 lg:p-16">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#D4A017] rounded-tl-3xl opacity-50" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#D4A017] rounded-br-3xl opacity-50" />

              {/* Star background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-8 h-8 text-[#D4A017]">
                  <Star className="w-full h-full fill-current" />
                </div>
                <div className="absolute top-20 right-20 w-6 h-6 text-[#D4A017]">
                  <Star className="w-full h-full fill-current" />
                </div>
                <div className="absolute bottom-20 left-20 w-10 h-10 text-[#D4A017]">
                  <Star className="w-full h-full fill-current" />
                </div>
                <div className="absolute bottom-10 right-10 w-7 h-7 text-[#D4A017]">
                  <Star className="w-full h-full fill-current" />
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8">
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4A017] to-[#FFD700] rounded-2xl blur-2xl opacity-50 animate-pulse" />
                  <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl bg-white flex items-center justify-center shadow-2xl ring-4 ring-[#D4A017]/30 p-3 overflow-hidden">
                    <Image src="/images/acf-logo.png" alt="ACF Logo" fill className="object-contain p-2" />
                  </div>
                  {/* Orbiting sparkles */}
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#FFD700] rounded-full shadow-lg animate-bounce" />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#D4A017] rounded-full shadow-lg animate-bounce delay-150" />
                </div>

                <div className="flex-1 space-y-4 max-w-3xl">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#D4A017] via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent drop-shadow-sm">
                      {acfHighlights.spotlightMember.title}
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Calendar className="h-4 w-4 md:h-5 md:w-5 text-[#D4A017]" />
                      <p className="text-lg md:text-xl font-bold text-[#D4A017] tracking-wide">
                        {acfHighlights.spotlightMember.date}
                      </p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4A017] to-transparent" />

                  <p className="text-sm md:text-base lg:text-lg text-[#1A1A1A] leading-relaxed font-medium">
                    {acfHighlights.spotlightMember.description}
                  </p>

                  <div className="flex justify-center">
                    <a
                      href={acfHighlights.spotlightMember.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4A017] via-[#FFD700] to-[#D4A017] text-white font-bold text-sm md:text-base px-6 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-[#FFD700] hover:via-[#D4A017] hover:to-[#FFD700] group border-2 border-white/30"
                    >
                      <span className="tracking-wide">View Spotlight Feature</span>
                      <ExternalLink className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="mt-8 h-2 w-full bg-gradient-to-r from-transparent via-[#D4A017] to-transparent rounded-full" />
            </div>
          </div>
        </div>

        <div className="mb-12 md:mb-16">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#D4A017] mb-6 md:mb-8 text-center">
            ACF Newsletter Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {acfHighlights.newsletters.map((newsletter, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#F8E9C6] hover:border-[#D4A017] transition-all duration-300 hover:shadow-2xl group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A017]/20 to-[#FFD700]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileText className="h-5 w-5 text-[#D4A017]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#D4A017] font-bold">{newsletter.date}</p>
                  </div>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1A1A1A] mb-3 leading-tight">{newsletter.title}</h4>
                <p className="text-sm text-[#1A1A1A]/70 mb-4 leading-relaxed">{newsletter.description}</p>
                <a
                  href={newsletter.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D4A017] font-semibold hover:text-[#FFD700] transition-colors"
                >
                  <span>Read Article</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 md:mb-16">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#D4A017] mb-6 md:mb-8 text-center">
            ACF Certifications & Awards
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {acfHighlights.certifications.map((cert, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(cert.image)}
                className="group relative bg-white rounded-xl overflow-hidden border-2 border-[#F8E9C6] hover:border-[#D4A017] transition-all duration-300 hover:shadow-2xl cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden bg-[#F8E9C6]/30">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="font-serif text-base font-bold text-[#1A1A1A] leading-tight">{cert.title}</h4>
                  <p className="text-sm text-[#D4A017] font-semibold">{cert.date}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-12 md:mb-16">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#D4A017] mb-6 md:mb-8 text-center">
            Recipe Contributions to ACF Community
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {acfHighlights.recipes.map((recipe, index) => {
              const Icon = recipe.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-[#F8E9C6]/30 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#F8E9C6] hover:border-[#D4A017] group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#D4A017] to-[#FFD700] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-lg font-bold text-[#1A1A1A] mb-2">{recipe.title}</h4>
                      <p className="text-sm text-[#1A1A1A]/70 mb-4 leading-relaxed">{recipe.description}</p>
                      <a
                        href={recipe.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#D4A017] font-semibold hover:text-[#FFD700] transition-colors text-sm"
                      >
                        <span>Download Recipe PDF</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#D4A017] mb-4 text-center">
            Community Cooking Demonstrations
          </h3>
          <p className="text-base md:text-lg text-center text-[#1A1A1A]/80 max-w-4xl mx-auto mb-8 leading-relaxed">
            Dedicated to giving back to the community through free cooking demonstrations at local organizations,
            sharing culinary expertise and the joy of cooking to inspire others and promote community service
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {acfHighlights.communityDemonstrations.map((demo, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#F8E9C6] hover:border-[#D4A017] transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-[#D4A017] flex items-center justify-center overflow-hidden">
                    {demo.logo ? (
                      <Image
                        src={demo.logo || "/placeholder.svg"}
                        alt={demo.venue}
                        width={40}
                        height={40}
                        className="object-contain p-1"
                      />
                    ) : (
                      <Star className="h-6 w-6 text-[#D4A017] fill-[#D4A017]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-bold text-[#1A1A1A] mb-1">{demo.title}</h4>
                    <p className="text-sm text-[#D4A017] font-semibold">{demo.venue}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#1A1A1A]/60 mb-3">
                  <Calendar className="h-4 w-4 text-[#D4A017]" />
                  <span>{demo.date}</span>
                </div>
                <p className="text-sm text-[#1A1A1A]/70 mb-4 leading-relaxed">{demo.description}</p>
                <div className="flex flex-wrap gap-3">
                  {demo.link !== "#" && (
                    <a
                      href={demo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#D4A017] font-semibold hover:text-[#FFD700] transition-colors text-sm"
                    >
                      <span>Event Details</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {demo.youtubeLink !== "#" && demo.link !== "#" && <span className="text-[#D4A017]/30">•</span>}
                  {demo.youtubeLink !== "#" && (
                    <a
                      href={demo.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#D4A017] font-semibold hover:text-[#FFD700] transition-colors text-sm"
                    >
                      <Video className="h-4 w-4" />
                      <span>Watch Video</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-[#1A1A1A]/95 via-[#D4A017]/20 to-[#1A1A1A]/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-20 bg-gradient-to-br from-[#D4A017] to-[#FFD700] hover:from-[#FFD700] hover:to-[#D4A017] rounded-full p-3 transition-all shadow-xl hover:scale-110"
          >
            <X className="w-8 h-8 text-white" />
          </button>
          <div className="relative w-full max-w-5xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#D4A017]">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Certificate"
              fill
              className="object-contain bg-white"
            />
          </div>
        </div>
      )}
    </section>
  )
}
