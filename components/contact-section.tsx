"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Send } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] =
    useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      response.ok ? setStatus("success") : setStatus("error")

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" })
      }

      setTimeout(() => setStatus("idle"), 5000)
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ice-blue/20 via-white to-ice-blue/10 relative overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gold-accent/40 rounded-full blur-3xl" />
        <div className="absolute bottom-16 right-10 w-96 h-96 bg-himalayan-blue/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-5"
        >
          <div className="flex items-center justify-center gap-3">
            <MessageCircle className="h-6 w-6 text-mountain-teal" />
            <span className="text-sm font-bold text-mountain-teal uppercase tracking-wider">
              Let's Connect
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-himalayan-blue">
            Get in Touch
          </h2>

          <p className="text-lg text-mountain-teal max-w-2xl mx-auto leading-relaxed">
            Interested in culinary collaborations, private dining experiences,
            custom pastry creations, or personalized menus?
          </p>

          {/* Premium Golden Line */}
          <div className="w-28 h-[3px] mx-auto bg-gradient-to-r from-transparent via-gold-accent to-transparent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* LEFT CONTACT CARDS */}
          <div className="lg:col-span-2 space-y-6">
            {/* EMAIL */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-himalayan-blue/10 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <h3 className="font-serif text-xl font-bold text-himalayan-blue group-hover:text-gold-accent transition-colors">
                Email Address
              </h3>
              <a
                href="mailto:chefsurendrar@gmail.com"
                className="text-mountain-teal mt-2 block text-lg font-medium hover:text-gold-accent hover:underline transition-colors break-all"
              >
                chefsurendrar@gmail.com
              </a>
            </motion.div>

            {/* PHONE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-himalayan-blue/10 hover:shadow-2xl transition-all duration-300 group"
            >
              <h3 className="font-serif text-xl font-bold text-himalayan-blue group-hover:text-gold-accent transition-colors mb-2">
                Phone Number
              </h3>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-sm font-semibold text-himalayan-blue/70 uppercase tracking-wide">
                    Restaurant:
                  </span>
                  <a
                    href="tel:+16306818002"
                    className="text-mountain-teal text-base hover:text-gold-accent hover:underline transition-colors"
                  >
                    +1 (630) 681 8002
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ADDRESS */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/85 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-himalayan-blue/10 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <h3 className="font-serif text-2xl font-bold text-himalayan-blue group-hover:text-gold-accent transition-colors mb-3">
                Visit Us
              </h3>

              <p className="text-himalayan-blue font-bold text-lg">
                India Palace Restaurant
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=242+E+Geneva+Rd+Wheaton+IL+60187"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mountain-teal mt-1 block text-base hover:text-gold-accent hover:underline transition-colors"
              >
                242 E Geneva Rd <br />
                Wheaton, IL 60187
              </a>
            </motion.div>
          </div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 md:p-10 shadow-2xl border border-himalayan-blue/10">
              <div className="mb-8">
                <h3 className="font-serif text-3xl font-bold text-himalayan-blue mb-2">
                  Send a Message
                </h3>
                <p className="text-mountain-teal text-base">
                  Fill out the form below and I'll get back to you soon.
                </p>
              </div>

              {/* FORM INPUTS */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* NAME */}
                  <div>
                    <label className="block text-sm font-semibold text-himalayan-blue mb-2">
                      Your Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      disabled={status === "sending"}
                      className="bg-white border-2 border-himalayan-blue/20 focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/30 transition-all h-12 text-base"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm font-semibold text-himalayan-blue mb-2">
                      Your Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      disabled={status === "sending"}
                      className="bg-white border-2 border-himalayan-blue/20 focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/30 transition-all h-12 text-base"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-semibold text-himalayan-blue mb-2">
                    Your Message
                  </label>
                  <Textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    disabled={status === "sending"}
                    className="bg-white border-2 border-himalayan-blue/20 resize-none focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/30 transition-all text-base"
                  />
                </div>

                {/* STATUS MESSAGES */}
                {status === "success" && (
                  <div className="bg-green-50 border border-green-500 text-green-700 rounded-lg p-4 text-center font-semibold">
                    Message sent successfully!
                  </div>
                )}
                {status === "error" && (
                  <div className="bg-red-50 border border-red-500 text-red-700 rounded-lg p-4 text-center font-semibold">
                    Failed to send message. Please email directly.
                  </div>
                )}

                {/* SUBMIT BUTTON */}
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-himalayan-blue to-mountain-teal hover:from-gold-accent hover:to-gold-accent text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-[2px] group disabled:opacity-50"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
