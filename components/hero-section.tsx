"use client"

import { Button } from "@/components/ui/button"
import { Mountain } from "lucide-react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scroll"use client"

import { Button } from "@/components/ui/button"
import { Mountain } from "lucide-react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.9, 0.6])

  return (
    <motion.section
      ref={ref}
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-center pt-24 sm:pt-28 md:pt-32 px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Background gradients */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50/70 to-white overflow-hidden"
        style={{ y, opacity }}
      >
        {/* MAIN LUXURY ORBS */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-16 right-10 w-[480px] h-[480px] bg-gradient-to-br from-himalayan-blue/20 to-transparent rounded-full blur-[90px]"
            animate={{
              scale: [1, 1.1, 1],
              y: [0, -25, 0],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-gradient-to-tr from-gold-accent/30 to-transparent rounded-full blur-[100px]"
            animate={{
              scale: [1, 1.15, 1],
              y: [0, 30, 0],
            }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-white/60 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.25, 1],
              rotate: [0, 70, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* TEXT COLUMN */}
          <motion.div
            className="space-y-7 md:space-y-9 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline */}
            <motion.div
              className="inline-flex items-center gap-2 md:gap-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Mountain className="h-6 w-6 text-mountain-teal drop-shadow" />
              <span className="text-xs sm:text-sm md:text-base font-bold text-mountain-teal uppercase tracking-wider">
                From the Himalayas to Chicago
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-himalayan-blue drop-shadow"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Chef Surendra Rawat
            </motion.h1>

            {/* Quote */}
            <motion.p
              className="font-serif text-xl sm:text-2xl md:text-3xl italic text-gold-accent leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              "Himalayan Freshness, Crafted in the Windy City."
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Executive Chef specializing in Himalayan cuisine and French pâtisserie.
              Each creation blends tradition, artistry, and Chicago’s modern spirit—
              offering personalized culinary experiences rooted in authenticity.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {/* Journey Button */}
              <Button
                size="lg"
                className="w-full sm:w-auto px-7 h-12 md:h-14 text-base font-semibold shadow-lg hover:shadow-2xl transition-all"
                asChild
              >
                <a href="#journey">
                  <Mountain className="mr-2 h-5 w-5" />
                  Discover My Journey
                </a>
              </Button>

              {/* Contact Button */}
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-7 h-12 md:h-14 text-base font-semibold border-2 border-himalayan-blue text-himalayan-blue hover:bg-himalayan-blue hover:text-white transition-all"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="font-serif text-xs sm:text-sm italic text-slate-600 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Executive Chef at India Palace Restaurant
            </motion.p>
          </motion.div>

          {/* IMAGE COLUMN */}
          <motion.div
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div
              className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-gold-accent/60"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35 }}
            >
              <Image
                src="/images/design-mode/IMG_8120.JPG.jpeg"
                alt="Chef Surendra Rawat presenting Himalayan-inspired dish"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-himalayan-blue/25 via-transparent to-gold-accent/10" />
            </motion.div>

            {/* Glow accents */}
            <motion.div
              className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold-accent/30 rounded-full blur-[90px] -z-10"
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-10 -left-10 w-56 h-56 bg-himalayan-blue/25 rounded-full blur-[90px] -z-10"
              animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.25, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default HeroSection
YProgress, [0, 0.5, 1], [1, 0.8, 0])

  return (
    <motion.section
      ref={ref}
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-center pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50/80 to-slate-100 overflow-hidden"
        style={{ y, opacity }}
      >
        {/* Animated soft gradient orbs */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/60 to-transparent rounded-full blur-3xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-gradient-to-tr from-sky-100/50 to-transparent rounded-full blur-3xl"
            animate={{
              y: [0, 20, 0],
              x: [0, -20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-white/80 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-amber-50/60 to-transparent rounded-full blur-3xl"
            animate={{
              y: [0, -30, 0],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </div>

        {/* Animated particles for breeze effect */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-blue-300/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            className="space-y-6 md:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 md:gap-3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Mountain className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-mountain-teal" />
              <span className="text-xs sm:text-sm md:text-base font-bold text-mountain-teal uppercase tracking-wider">
                From the Himalayas to Chicago
              </span>
            </motion.div>

            <motion.h1
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance drop-shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block text-himalayan-blue">Chef Surendra Rawat</span>
            </motion.h1>

            <motion.p
              className="font-serif text-xl sm:text-2xl md:text-3xl italic text-gold-accent leading-relaxed px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            >
              "Himalayan Freshness, Crafted in the Windy City."
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans text-slate-700 px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              An Indian-born, U.S.-based Executive Chef with dual mastery in traditional Himalayan cuisine and French
              patisserie. From rustic mountain dishes to intricate pastries and desserts, I craft personalized culinary
              experiences that honor both heritage and innovation. Every creation reflects my Himalayan artistry—making
              what people love, customized to their taste.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 md:pt-6 justify-center lg:justify-start px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button
                size="lg"
                variant="default"
                className="w-full sm:w-auto shadow-lg hover:shadow-2xl transition-all duration-300 font-semibold text-sm md:text-base px-6 md:px-8 h-12 md:h-14"
                asChild
              >
                <a href="#journey">
                  <Mountain className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Discover My Journey
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto shadow-lg hover:shadow-2xl transition-all duration-300 font-semibold text-sm md:text-base px-6 md:px-8 h-12 md:h-14 border-2 border-himalayan-blue text-himalayan-blue hover:bg-himalayan-blue hover:text-white bg-transparent"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>

            <motion.div
              className="pt-4 md:pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="font-serif text-xs sm:text-sm italic text-slate-600">
                Executive Chef at India Palace Restaurant
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "anticipate" }}
          >
            <motion.div
              className="relative aspect-square max-w-md mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-gold-accent/60"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/design-mode/IMG_8120.JPG.jpeg"
                alt="Chef Surendra Rawat presenting Himalayan-inspired Indian dish in Chicago"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-himalayan-blue/20 via-transparent to-gold-accent/5" />
            </motion.div>
            <motion.div
              className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-gold-accent/20 to-blue-100/30 rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -top-8 -left-8 w-56 h-56 bg-gradient-to-tr from-sky-200/40 to-gold-accent/20 rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
