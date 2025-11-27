"use client";

import {
  MapPin,
  GraduationCap,
  Briefcase,
  Globe,
  Award,
  Compass,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useRef } from "react";

export function JourneySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const timeline = [
    {
      icon: MapPin,
      year: "Early Life",
      location: "Uttarakhand, India",
      title: "Growing up in the Himalayas",
      description:
        "Born and raised in the calm and green mountains of Uttarakhand, life was shaped by peaceful nature and a farmer’s simplicity. The love for fresh ingredients, homegrown herbs, and my mother’s belief that food is love—not just spices—shaped my earliest culinary values.",
      color: "from-himalayan-blue to-mountain-teal",
    },
    {
      icon: GraduationCap,
      year: "2009-2012",
      location: "A-IHM NOIDA",
      title: "The Hardest Moments",
      description:
        "Life in the Himalayas taught resilience, but cleaning parking lots in 45°C Delhi heat tested my limits. Thinking about my family's struggles kept me going. Those hardships shaped my discipline and commitment to my craft.",
      color: "from-mountain-teal to-sky-blue",
    },
    {
      icon: Briefcase,
      year: "2011-2017",
      location: "North India",
      title: "Street Kitchens to Five-Stars",
      description:
        "From street kitchens to the prestigious Oberoi Group, I learned consistency, creativity, and the art of leadership. I mastered French patisserie—lamination, sugar work, tempering—while staying rooted in Indian traditions. This fusion became my signature identity.",
      color: "from-sky-blue to-himalayan-blue",
    },
    {
      icon: Globe,
      year: "2017",
      location: "Chicago, USA",
      title: "Journey to America",
      description:
        "A bold move that opened new doors. I brought Himalayan flavors to international audiences, sharing stories, culture, and authenticity through food.",
      color: "from-himalayan-blue to-gold-accent",
    },
    {
      icon: Award,
      year: "Present",
      location: "India Palace, Wheaton",
      title: "Executive Chef & Culinary Leader",
      description:
        "With 16+ years of experience, I create dishes that resonate with people—comfort, nostalgia, and warmth. Whether introducing someone to Indian flavors or reminding them of home, my purpose is to make them smile with every bite.",
      color: "from-gold-accent to-himalayan-blue",
    },
  ];

  const nextSlide = () =>
    setCurrentIndex((i) => (i + 1) % timeline.length);
  const prevSlide = () =>
    setCurrentIndex((i) => (i - 1 + timeline.length) % timeline.length);

  const visible = [
    (currentIndex - 1 + timeline.length) % timeline.length,
    currentIndex,
    (currentIndex + 1) % timeline.length,
  ];

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="py-20 md:py-28 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Compass className="h-8 w-8 text-mountain-teal" />
            <span className="text-sm font-bold tracking-wider text-mountain-teal uppercase">
              The Path
            </span>
          </div>

          <h2 className="font-serif text-5xl font-bold text-himalayan-blue">
            My Journey
          </h2>

          <p className="text-lg md:text-xl text-mountain-teal max-w-3xl mx-auto leading-relaxed">
            From the mountains to international stages, a story of resilience, hard work, and never giving up.
          </p>
        </div>

        {/* CARDS */}
        <div className="relative max-w-6xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-6">
            {visible.map((i, pos) => {
              const item = timeline[i];
              const Icon = item.icon;
              const isCenter = pos === 1;

              return (
                <div
                  key={i}
                  className={`rounded-3xl transition-all duration-500 border bg-white/80 backdrop-blur-xl 
                  ${isCenter
                    ? "w-full sm:w-[420px] md:w-[520px] scale-100 opacity-100 shadow-2xl border-himalayan-blue/20"
                    : "hidden md:block w-[260px] scale-90 opacity-60 shadow-md border-himalayan-blue/10"
                  }`}
                >
                  <div className="p-8 min-h-[420px] flex flex-col justify-start">

                    {/* ICON */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`rounded-full shadow-lg bg-gradient-to-r ${item.color}
                        ${isCenter ? "w-16 h-16" : "w-12 h-12"} flex items-center justify-center`}
                      >
                        <Icon className="text-white w-7 h-7" />
                      </div>

                      <div>
                        <p className="text-gold-accent uppercase text-sm font-semibold">
                          {item.year}
                        </p>
                        <p className="text-mountain-teal text-sm">{item.location}</p>
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3
                      className={`font-serif font-bold text-himalayan-blue mb-4 leading-tight
                      ${isCenter ? "text-3xl" : "text-xl"}`}
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className={`text-slate-700 leading-relaxed
                      ${isCenter ? "text-lg" : "text-sm"}`}
                    >
                      {item.description}
                    </p>

                    {/* SPECIAL QUOTE */}
                    {isCenter && i === 2 && (
                      <p className="mt-6 italic text-gold-accent font-serif text-lg">
                        "From mountain soil to Michelin dreams"
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* NAV BUTTONS */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white shadow-xl hover:bg-himalayan-blue hover:text-white transition"
          >
            <ChevronLeft className="w-6 h-6 mx-auto" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white shadow-xl hover:bg-himalayan-blue hover:text-white transition"
          >
            <ChevronRight className="w-6 h-6 mx-auto" />
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2">
          {timeline.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all
              ${i === currentIndex ? "bg-himalayan-blue w-10" : "bg-slate-300 w-2"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
