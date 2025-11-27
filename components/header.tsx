"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  const lastScrollY = useRef(0)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Scroll down → hide
      if (currentScrollY > lastScrollY.current && currentScrollY > 70) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      lastScrollY.current = currentScrollY

      // Show if user stops scrolling
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
      scrollTimeout.current = setTimeout(() => {
        setIsHidden(false)
      }, 150)

      setIsScrolled(currentScrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#journey", label: "Journey" },
    { href: "#philosophy", label: "Philosophy" },
    { href: "#signature-creations", label: "Recipes" },
    { href: "#acf", label: "ACF" },
    { href: "#awards", label: "Awards" },
    { href: "#press", label: "Press" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md shadow-himalayan-blue/5 border-b border-himalayan-blue/10"
            : "bg-white/70 backdrop-blur-sm"
        }
        ${isHidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <nav className="flex items-center justify-between">
          {/* Logo + Name */}
          <Link href="#hero" className="flex items-center gap-3 group transition-all">
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-himalayan-blue/40 group-hover:border-himalayan-blue transition-all duration-300 shadow-sm group-hover:shadow-md">
              <Image
                src="/images/design-mode/IMG_3169.jpg"
                alt="Chef Surendra Rawat Logo"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="font-serif text-lg md:text-xl font-bold text-himalayan-blue">Chef Surendra Rawat</span>
              <span className="text-xs text-slate-600 font-medium">Himalayan Culinary Artist</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-700 hover:text-himalayan-blue transition-all duration-300 font-semibold text-sm relative group"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-himalayan-blue rounded-full group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-himalayan-blue hover:bg-himalayan-blue/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 px-2 border-t border-himalayan-blue/20 bg-white/95 backdrop-blur-xl rounded-lg shadow-md animate-slide-down">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 px-4 rounded-lg text-slate-700 hover:text-white hover:bg-himalayan-blue font-semibold text-base transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
