"use client"

import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FloatingSocial } from "@/components/floating-social"
import { SocialAdPopup } from "@/components/social-ad-popup"

// Dynamic Imports
const OrganizationsMarquee = dynamic(
  () => import("@/components/organizations-marquee").then((m) => ({ default: m.OrganizationsMarquee })),
  { loading: () => <div className="h-24 w-full bg-background" /> }
)

const JourneySection = dynamic(
  () => import("@/components/journey-section").then((m) => ({ default: m.JourneySection })),
  { loading: () => <div className="h-screen w-full bg-background" /> }
)

const PhilosophySection = dynamic(
  () => import("@/components/philosophy-section").then((m) => ({ default: m.PhilosophySection })),
  { loading: () => <div className="min-h-screen w-full bg-background" /> }
)

const SignatureCreationsSection = dynamic(
  () => import("@/components/signature-creations-section"),
  { loading: () => <div className="min-h-screen w-full bg-background" /> }
)

const ACFSection = dynamic(
  () => import("@/components/acf-section").then((m) => ({ default: m.ACFSection })),
  { loading: () => <div className="min-h-screen w-full bg-background" /> }
)

const AwardsSection = dynamic(
  () => import("@/components/awards-section").then((m) => ({ default: m.AwardsSection })),
  { loading: () => <div className="min-h-screen w-full bg-background" /> }
)

const RestaurantSection = dynamic(
  () => import("@/components/restaurant-section").then((m) => ({ default: m.RestaurantSection })),
  { loading: () => <div className="min-h-screen w-full bg-background" /> }
)

const PressSection = dynamic(
  () => import("@/components/press-section").then((m) => ({ default: m.PressSection })),
  { loading: () => <div className="min-h-screen w-full bg-background" /> }
)

const YouTubeSection = dynamic(
  () => import("@/components/youtube-section").then((m) => ({ default: m.YouTubeSection })),
  { loading: () => <div className="min-h-screen w-full bg-background" /> }
)

const ContactSection = dynamic(
  () => import("@/components/contact-section").then((m) => ({ default: m.ContactSection })),
  { loading: () => <div className="min-h-screen w-full bg-background" /> }
)

const NewsletterBanner = dynamic(
  () => import("@/components/newsletter-banner").then((m) => ({ default: m.NewsletterBanner })),
  { loading: () => <div className="h-32 w-full bg-background" /> }
)

const Footer = dynamic(
  () => import("@/components/footer").then((m) => ({ default: m.Footer })),
  { loading: () => <div className="h-64 w-full bg-background" /> }
)

export default function Home() {
  return (
    <div>
      <Header />

      <main className="w-full overflow-hidden">

        {/* 1 — HERO */}
        <HeroSection />
        <DividerBlue />

        {/* 2 — LOGO MARQUEE */}
        <OrganizationsMarquee />
        <DividerGold />

        {/* 3 — JOURNEY */}
        <JourneySection />
        <DividerBlue />

        {/* 4 — PHILOSOPHY */}
        <PhilosophySection />
        <DividerGold />

        {/* 5 — SIGNATURE CREATIONS */}
        <SignatureCreationsSection />
        <DividerBlue />

        {/* 6 — ACF */}
        <ACFSection />
        <DividerGold />

        {/* 7 — AWARDS */}
        <AwardsSection />
        <DividerBlue />

        {/* 8 — RESTAURANT */}
        <RestaurantSection />
        <DividerGold />

        {/* 9 — PRESS */}
        <PressSection />
        <DividerBlue />

        {/* 10 — YOUTUBE */}
        <YouTubeSection />
        <DividerGold />

        {/* 11 — CONTACT */}
        <ContactSection />
        <DividerBlue />

        {/* 12 — NEWSLETTER */}
        <NewsletterBanner />
      </main>

      {/* 13 — FOOTER */}
      <Footer />

      <FloatingSocial />
      <SocialAdPopup />
    </div>
  )
}

/* -------------------------
   DIVIDER COMPONENTS
-------------------------- */
function DividerBlue() {
  return (
    <div className="h-px bg-gradient-to-r from-transparent via-himalayan-blue/20 to-transparent" />
  )
}

function DividerGold() {
  return (
    <div className="h-px bg-gradient-to-r from-transparent via-gold-accent/30 to-transparent" />
  )
}
