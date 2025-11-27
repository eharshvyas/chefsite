import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Linkedin } from "lucide-react"
import Image from "next/image"

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
  </svg>
)

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/surendrasinghrawat91?igsh...", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@ChefSurendraRawat", label: "YouTube" },
    { icon: Facebook, href: "https://www.facebook.com/share/1AHqjGcMYF", label: "Facebook" },
    { icon: WhatsAppIcon, href: "https://whatsapp.com/channel/0029Va9UQQ44IBh9kJJLwB32", label: "WhatsApp" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/surendra-rawat-834455129", label: "LinkedIn" },
    { icon: MediumIcon, href: "https://medium.com/@chefsurendrarawat", label: "Medium" },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-ice-blue to-slate-100 border-t border-himalayan-blue/10">
      <div className="container mx-auto px-4 py-16">

        {/* ===== GRID SECTIONS ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 mb-14">

          {/* ==== BRAND & ABOUT  ==== */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-5">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-himalayan-blue/30 shadow-md">
                <Image src="/images/design-mode/IMG_3169.jpg" alt="Chef Surendra Rawat" fill className="object-cover"/>
              </div>

              <div>
                <Link href="#hero" className="group">
                  <h3 className="font-serif text-3xl font-bold text-himalayan-blue group-hover:text-royal-blue transition">
                    Chef Surendra Rawat
                  </h3>
                </Link>
                <p className="text-sm text-slate-600">Executive Chef</p>
              </div>
            </div>

            {/* ACF Box */}
            <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-himalayan-blue/10 w-fit shadow-sm">
              <div className="relative w-12 h-12">
                <Image src="/images/acf-logo.png" alt="ACF Logo" fill className="object-contain"/>
              </div>
              <div>
                <p className="text-xs text-slate-500">Proud Member</p>
                <p className="text-sm font-semibold text-himalayan-blue">American Culinary Federation</p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed max-w-md">
              Award-winning Executive Chef and Oberoi Group’s Best Bakery & Pastry Chef.  
              Bringing authentic Himalayan flavors, Indian cuisine, and refined pastries to every creation.
            </p>

            {/* Social Icons */}
            <div className="space-y-3">
              <h4 className="font-semibold text-himalayan-blue text-sm uppercase tracking-wider">Connect With Me</h4>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 w-11 rounded-full bg-white hover:bg-himalayan-blue border border-himalayan-blue/30 hover:border-himalayan-blue flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md group"
                  >
                    <social.icon className="h-5 w-5 text-himalayan-blue group-hover:text-white transition"/>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ==== EXPLORE LINKS ==== */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold text-himalayan-blue">Explore</h4>
            <ul className="space-y-3">
              {[
                ["My Journey", "#journey"],
                ["Philosophy", "#philosophy"],
                ["Recipes", "#signature-creations"],
                ["Awards", "#awards"],
                ["Press", "#press"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-slate-700 hover:text-himalayan-blue flex items-center gap-2 group font-medium transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-himalayan-blue/60 group-hover:w-2 group-hover:h-2 transition"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ==== CONTACT INFO ==== */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold text-himalayan-blue">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-himalayan-blue mt-0.5"/>
                <a href="mailto:chefsurendrar@gmail.com" className="text-slate-700 hover:text-himalayan-blue font-medium break-all">
                  chefsurendrar@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-himalayan-blue mt-0.5"/>
                <div>
                  <span className="text-sm text-slate-600">Restaurant:</span>{" "}
                  <a href="tel:+16306818002" className="text-slate-700 hover:text-himalayan-blue font-medium">
                    +1 (630) 681 8002
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-himalayan-blue mt-0.5"/>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=242+E+Geneva+Rd+Wheaton+IL+60187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-himalayan-blue hover:underline font-medium"
                >
                  <p>242 E Geneva Rd</p>
                  <p>Wheaton, IL 60187</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-himalayan-blue/30 to-transparent mb-8"/>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>© {currentYear} Chef Surendra Rawat. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Envisioned and Crafted by{" "}
            <a
              href="https://withHarsh.com"
              target="_blank"
              className="text-himalayan-blue font-semibold hover:text-royal-blue transition"
            >
              withHarsh.com
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}
