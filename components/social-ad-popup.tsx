"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { X, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

function PopupContent({ onClose }: { onClose: () => void }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after mount
    requestAnimationFrame(() => {
      setIsVisible(true)
    })
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 200)
  }

  return (
    <div
      id="social-ad-popup-portal"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
      className={`bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative max-w-md w-full bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Content */}
        <div className="p-8 text-center space-y-6">
          <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-himalayan-blue shadow-xl">
            <Image
              src="/images/design-mode/IMG_8120.JPG.jpeg"
              alt="Chef Surendra Rawat"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-himalayan-blue">
              Follow My Culinary Journey
            </h3>
            <p className="text-gray-700 text-base">
              Get exclusive recipes, cooking tips, and behind-the-scenes content from my kitchen
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://www.instagram.com/surendrasinghrawat91"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
            <a
              href="https://www.youtube.com/@ChefSurendraRawat?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              <Youtube className="w-5 h-5" />
              Subscribe on YouTube
            </a>
          </div>

          <p className="text-sm text-gray-500">Join thousands of food lovers already following!</p>
        </div>
      </div>
    </div>
  )
}

export function SocialAdPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 15000)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted || !isOpen || typeof document === "undefined") return null

  return createPortal(<PopupContent onClose={() => setIsOpen(false)} />, document.body)
}
