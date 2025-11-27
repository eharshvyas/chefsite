"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Youtube, MessageCircle, Linkedin } from 'lucide-react'

const MediumIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-8 h-8"} xmlns="http://www.w3.org/2000/svg">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
)

export function NewsletterBanner() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/surendrasinghrawat91?igsh=MXZpbmFvbGwyemphNg%3D%3D&utm_source=qr",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@ChefSurendraRawat",
      color: "from-red-500 to-red-600",
      hoverColor: "hover:from-red-600 hover:to-red-700"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/1AHqjGcMYF",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://whatsapp.com/channel/0029Va9UQQ44IBh9kJJLwB32",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/surendra-rawat-834455129",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800"
    },
    {
      name: "Medium",
      icon: MediumIcon,
      url: "https://medium.com/@chefsurendrarawat",
      color: "from-gray-700 to-gray-800",
      hoverColor: "hover:from-gray-800 hover:to-gray-900"
    }
  ]

  return (
    <section className="relative py-16 bg-gradient-to-br from-off-white via-cream-light to-off-white overflow-hidden">

      {/* Light background orbs */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-gold-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-himalayan-blue/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-himalayan-blue">
            Connect With Me
          </h2>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Follow my culinary journey across platforms — exclusive recipes, tips,  
            & stories from the Himalayas.
          </p>
        </motion.div>

        {/* Social Icons (Full Width, No Box, Premium Layout) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 max-w-5xl mx-auto">

          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`group flex flex-col items-center justify-center gap-3 
                            bg-gradient-to-br ${social.color} ${social.hoverColor}
                            text-white py-6 rounded-2xl shadow-lg hover:shadow-xl 
                            transition-all duration-300 hover:scale-105`}
              >
                <IconComponent className="w-8 h-8" />
                <span className="text-sm font-medium">{social.name}</span>
              </motion.a>
            )
          })}

        </div>

        <p className="mt-10 text-center text-xs text-slate-500">
          Join the community — stay inspired with authentic Himalayan cuisine.
        </p>
      </div>
    </section>
  )
}
