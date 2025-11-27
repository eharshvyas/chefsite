"use client"

import { MapPin, Star, ExternalLink, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function RestaurantSection() {
  const [currentReview, setCurrentReview] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const restaurantImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%286%29-czYyPDZz6oJijhXUopVhaff16NDq1Q.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-GiFRyXcAutYVqHgNi6oSLYdASA95HC.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%283%29-edTFfRaYvLmHoWNTYYS1w5njKEzJuh.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%285%29-AYl5xsCxMeXyIqqHz44YAlkEFSDIOC.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%281%29-dE2BD96CVeMogpbSGsigXEVq0Ks2v6.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%282%29-ktipudUf1APmByJkosOdqBQ1RAnRh7.jpg",
  ]

  const reviews = [
    {
      text: "The flavors here are absolutely incredible! Every bite takes you on a journey to India. Chef Surendra's attention to detail really shines through.",
      author: "Sarah M.",
      rating: 5,
    },
    {
      text: "Best Indian restaurant in the entire Chicago area. The spices are perfectly balanced, and you can tell everything is made fresh. We've been coming here for years and it never disappoints!",
      author: "James K.",
      rating: 5,
    },
    {
      text: "Wow! Just wow. The tandoori chicken was perfectly charred and juicy. My family loved everything we ordered.",
      author: "Priya S.",
      rating: 5,
    },
    {
      text: "This place has become our regular spot for celebrations. Chef Surendra's passion for authentic cooking comes through in every dish. The naan alone is worth the visit!",
      author: "Michael R.",
      rating: 5,
    },
    {
      text: "The biryani here is divine. Rich, aromatic, and cooked to perfection with tender meat that falls off the bone.",
      author: "Anita P.",
      rating: 5,
    },
    {
      text: "Such warmth and hospitality! The staff treats you like family. And the food? Absolutely authentic and delicious. You can taste the Himalayan heritage in every bite.",
      author: "David L.",
      rating: 5,
    },
    {
      text: "I've traveled to India multiple times and this is hands down the most authentic Indian food I've found in Illinois. The flavors transported me right back to Mumbai!",
      author: "Jennifer W.",
      rating: 5,
    },
    {
      text: "Everything was fresh and flavorful. The paneer tikka masala was creamy perfection!",
      author: "Rajesh K.",
      rating: 5,
    },
    {
      text: "Chef Surendra is a true artist. Each dish tells a story and you can feel the love and expertise that goes into the cooking. Highly recommended for anyone who appreciates real Indian cuisine.",
      author: "Emily T.",
      rating: 5,
    },
    {
      text: "From the fragrant curries to the crispy samosas, everything exceeded our expectations. This restaurant is a true gem!",
      author: "Mark S.",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [reviews.length])

  return (
    <section id="restaurant" className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MapPin className="h-6 w-6 md:h-8 md:w-8 text-mountain-teal" />
            <span className="text-sm md:text-base font-bold text-mountain-teal uppercase tracking-wider">
              OUR RESTAURANT
            </span>
          </motion.div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-himalayan-blue text-balance">
            India Palace Restaurant – Wheaton, IL
          </h2>
          <p className="text-lg md:text-xl text-mountain-teal max-w-3xl mx-auto leading-relaxed">
            Where Chef Surendra brings Himalayan warmth to authentic Indian dining.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Collage */}
          <motion.div
            className="grid grid-cols-4 grid-rows-3 gap-3 h-[600px]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Large image 1 - spans 2x2 */}
            <motion.button
              onClick={() => setSelectedImage(restaurantImages[0])}
              className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={restaurantImages[0] || "/placeholder.svg"}
                alt="India Palace Restaurant - Dining Area"
                fill
                className="object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.button>

            {/* Small image 1 */}
            <motion.button
              onClick={() => setSelectedImage(restaurantImages[1])}
              className="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image
                src={restaurantImages[1] || "/placeholder.svg"}
                alt="India Palace Restaurant - Interior"
                fill
                className="object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.button>

            {/* Small image 2 */}
            <motion.button
              onClick={() => setSelectedImage(restaurantImages[2])}
              className="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={restaurantImages[2] || "/placeholder.svg"}
                alt="India Palace Restaurant - Dining Experience"
                fill
                className="object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.button>

            {/* Small image 3 */}
            <motion.button
              onClick={() => setSelectedImage(restaurantImages[3])}
              className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src={restaurantImages[3] || "/placeholder.svg"}
                alt="India Palace Restaurant - Buffet"
                fill
                className="object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.button>

            {/* Large image 2 - spans 3x1 */}
            <motion.button
              onClick={() => setSelectedImage(restaurantImages[4])}
              className="col-span-3 row-span-1 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src={restaurantImages[4] || "/placeholder.svg"}
                alt="India Palace Restaurant - Happy Guests"
                fill
                className="object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.button>

            {/* Small image 4 */}
            <motion.button
              onClick={() => setSelectedImage(restaurantImages[5])}
              className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Image
                src={restaurantImages[5] || "/placeholder.svg"}
                alt="India Palace Restaurant - Guests Enjoying"
                fill
                className="object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.button>
          </motion.div>

          {/* Info & Reviews */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Ratings */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-himalayan-blue/10">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-gold-accent fill-gold-accent" />
                  <span className="text-3xl font-bold text-himalayan-blue">4.2</span>
                  <span className="text-slate-600">(Google Reviews)</span>
                </div>
                <div className="flex gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-himalayan-blue">Facebook:</span>
                    <span className="text-slate-700">4.7/5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-himalayan-blue">Uber Eats:</span>
                    <span className="text-slate-700">4.2/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Carousel */}
            <div className="bg-gradient-to-br from-off-white to-amber-50 rounded-2xl p-8 shadow-2xl border border-gold-accent/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-mountain-teal/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-accent fill-gold-accent" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-6 min-h-[120px] text-slate-700">
                  "{reviews[currentReview].text}"
                </p>
                <p className="font-semibold text-himalayan-blue">— {reviews[currentReview].author}</p>

                {/* Navigation Dots */}
                <div className="flex gap-2 mt-6">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentReview ? "bg-gold-accent w-8" : "bg-slate-300 w-2"
                      }`}
                      aria-label={`Go to review ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="w-full bg-gold-accent hover:bg-gold-accent/90 text-himalayan-blue font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a
                  href="https://www.google.com/search?q=India+Palace+Restaurant+Wheaton+IL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Visit Restaurant
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gold-accent transition-colors p-2 bg-white/10 rounded-full backdrop-blur-sm"
              aria-label="Close image"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="India Palace Restaurant - Full View"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
