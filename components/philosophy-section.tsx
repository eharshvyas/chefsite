"use client";

import { Heart, Flame, Star } from "lucide-react";
import { motion } from "framer-motion";

export function PhilosophySection() {
  const principles = [
    {
      icon: Flame,
      title: "Cooking with Love",
      description:
        "My mother taught me: 'Good food is made with love, not just with a bunch of spices.' Every dish carries that lesson.",
    },
    {
      icon: Star,
      title: "Personalized for You",
      description:
        "I believe in customization and personalization through my Himalayan artistry. I make what people like — each dish tailored to create your perfect experience.",
    },
    {
      icon: Heart,
      title: "Artisan Pastries & Desserts",
      description:
        "Trained in French patisserie techniques, I create desserts that balance precision with creativity—from molten lava cakes to delicate no-bake cheesecakes, each one a work of edible art.",
    },
  ];

  const listContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="philosophy"
      className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ice-blue/30 to-white"
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* HEADER */}
        <motion.div
          className="text-center mb-16 space-y-4 md:space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="h-7 w-7 text-mountain-teal" />
            <span className="text-xs md:text-sm font-bold text-mountain-teal uppercase tracking-wider">
              Culinary Beliefs
            </span>
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-himalayan-blue">
            Philosophy of Flavors
          </h2>

          <p className="text-lg md:text-xl text-mountain-teal max-w-3xl mx-auto leading-relaxed">
            "When someone eats my food, I want them to feel something special — curiosity, excitement, or like they're home."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
          
          {/* TEXT BLOCK */}
          <motion.div
            className="space-y-6 px-4 lg:px-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              When someone eats my food, I hope they feel something special. If it's someone trying Indian food for the
              first time, I want them to feel curious and excited. If it's someone missing their mom's cooking, I want
              them to feel like they're home.
            </p>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              I know people don't always give you a second chance, so I try to make every meal count. I'm not just
              cooking food — I'm taking care of people. I'm giving them a piece of myself, a taste of my culture and my
              heart.
            </p>

            {/* Principles List */}
            <motion.div
              className="pt-6 space-y-6"
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {principles.map((p, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 group"
                  variants={listItem}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="h-12 w-12 md:h-14 md:w-14 rounded-xl 
                    bg-gradient-to-br from-himalayan-blue/10 to-gold-accent/10 
                    flex items-center justify-center border-2 border-himalayan-blue/20"
                    whileHover={{ scale: 1.1, rotate: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p.icon className="h-6 w-6 text-himalayan-blue group-hover:text-gold-accent transition-colors duration-300" />
                  </motion.div>

                  <div>
                    <h3 className="font-serif text-xl font-semibold text-himalayan-blue group-hover:text-gold-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-700">{p.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* IMAGE GRID */}
          <motion.div
            className="grid grid-cols-2 gap-4 md:gap-5 px-4 lg:px-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* LEFT COLUMN */}
            <div className="space-y-4">
              <motion.div
                className="aspect-square rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src="/images/design-mode/Photoroom_20251011_234529.jpg"
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              <motion.div
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src="/beautifully-plated-indian-cuisine.jpg"
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-4 pt-6">
              <motion.div
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src="/traditional-spices-and-ingredients.jpg"
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              <motion.div
                className="aspect-square rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src="/himalayan-mountain-landscape.jpg"
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
