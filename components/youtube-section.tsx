"use client"

import { useEffect, useState, useCallback, useRef, memo } from "react"
import { Youtube, Play, ChevronLeft, ChevronRight, Pause } from "lucide-react"
import Image from "next/image"

interface YouTubeVideo {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
  url: string
}

const AUTO_SLIDE_INTERVAL = 5000

/* ---------------------------------------
   Thumbnail Button (Gold Glow)
---------------------------------------- */
const ThumbButton = memo(function ThumbButton({
  index,
  current,
  thumbnail,
  onClick,
}: {
  index: number
  current: number
  thumbnail: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`relative w-28 h-16 rounded-xl overflow-hidden shadow-md transition-all duration-300 
        ${index === current ? "ring-2 ring-gold-accent scale-110" : "opacity-60 hover:opacity-100"}
      `}
    >
      <Image src={thumbnail || "/placeholder.svg"} alt="" fill className="object-cover" />
      {index === current && <div className="absolute inset-0 bg-himalayan-blue/20" />}
    </button>
  )
})

/* ---------------------------------------
   Dot Indicator (Blue → Gold)
---------------------------------------- */
const Dot = memo(function Dot({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`h-2 rounded-full transition-all duration-300 
        ${active ? "w-8 bg-himalayan-blue" : "w-2 bg-gold-accent/40 hover:bg-gold-accent"}
      `}
    />
  )
})

/* ---------------------------------------
   MAIN COMPONENT
---------------------------------------- */
export function YouTubeSection() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  /* Fetch Latest Videos */
  const fetchVideos = useCallback(async () => {
    try {
      const res = await fetch("/api/youtube/latest")
      const data = await res.json()
      if (Array.isArray(data)) setVideos(data)
    } catch (err) {
      console.error("YouTube fetch error:", err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchVideos()
  }, [fetchVideos])

  /* Slide Logic */
  const changeVideo = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex(index)
        setTimeout(() => setIsAnimating(false), 300)
      }, 150)
    },
    [isAnimating],
  )

  const nextVideo = useCallback(() => {
    if (videos.length > 1) changeVideo((currentIndex + 1) % videos.length)
  }, [changeVideo, currentIndex, videos.length])

  const prevVideo = useCallback(() => {
    if (videos.length > 1) changeVideo((currentIndex - 1 + videos.length) % videos.length)
  }, [changeVideo, currentIndex, videos.length])

  /* Autoplay */
  useEffect(() => {
    if (!isAutoPlaying || videos.length < 2) return
    intervalRef.current = setInterval(nextVideo, AUTO_SLIDE_INTERVAL)
    return () => intervalRef.current && clearInterval(intervalRef.current)
  }, [isAutoPlaying, nextVideo, videos.length])

  const pauseAuto = () => setIsAutoPlaying(false)
  const resumeAuto = () => setIsAutoPlaying(true)

  if (loading)
    return (
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Youtube className="w-8 h-8 text-red-600" />
            <h2 className="text-4xl font-serif font-bold text-gray-800">Latest from YouTube</h2>
          </div>
          <div className="max-w-4xl mx-auto aspect-video bg-gray-200 rounded-3xl animate-pulse" />
        </div>
      </section>
    )

  if (!videos.length) return null

  const currentVideo = videos[currentIndex]

  /* ---------------------------------------
     RENDER
  ---------------------------------------- */
  return (
    <section id="youtube" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <Youtube className="w-10 h-10 text-red-600" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-himalayan-blue">Latest from YouTube</h2>
          </div>
          <p className="text-lg text-mountain-teal max-w-xl mx-auto">
            Watch my newest culinary creations, techniques & Himalayan flavors.
          </p>
        </div>

        {/* MAIN VIDEO DISPLAY */}
        <div className="max-w-4xl mx-auto relative" onMouseEnter={pauseAuto} onMouseLeave={resumeAuto}>
          {/* Arrows */}
          {videos.length > 1 && (
            <>
              <button
                onClick={prevVideo}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-14 
                bg-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center 
                hover:scale-110 hover:shadow-2xl transition"
              >
                <ChevronLeft className="text-himalayan-blue w-7 h-7" />
              </button>

              <button
                onClick={nextVideo}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-14 
                bg-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center 
                hover:scale-110 hover:shadow-2xl transition"
              >
                <ChevronRight className="text-himalayan-blue w-7 h-7" />
              </button>
            </>
          )}

          {/* MAIN CARD */}
          <div
            className={`transition-all duration-300 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          >
            <a
              href={currentVideo.url}
              target="_blank"
              className="group block relative rounded-3xl overflow-hidden shadow-2xl"
              rel="noreferrer"
            >
              <div className="relative aspect-video">
                {/* Thumbnail */}
                <Image
                  src={currentVideo.thumbnail || "/placeholder.svg"}
                  alt={currentVideo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-red-600 ring-4 ring-gold-accent shadow-2xl flex items-center justify-center group-hover:scale-110 transition">
                    <Play className="text-white w-10 h-10 ml-1" />
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1 line-clamp-2">{currentVideo.title}</h3>
                  <p className="text-gray-200 text-sm">
                    {new Date(currentVideo.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                {/* Counter */}
                <div className="absolute top-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                  {currentIndex + 1} / {videos.length}
                </div>
              </div>
            </a>
          </div>

          {/* CONTROLS */}
          <div className="flex justify-center items-center gap-4 mt-6">
            {/* Play/Pause */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="w-10 h-10 rounded-full bg-white shadow hover:bg-gray-100 flex items-center justify-center"
            >
              {isAutoPlaying ? <Pause className="w-5 h-5 text-gray-700" /> : <Play className="w-5 h-5 text-gray-700" />}
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {videos.map((_, idx) => (
                <Dot key={idx} active={idx === currentIndex} onClick={() => changeVideo(idx)} />
              ))}
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="hidden md:flex justify-center gap-3 mt-8">
            {videos.map((v, idx) => (
              <ThumbButton
                key={v.id}
                index={idx}
                current={currentIndex}
                thumbnail={v.thumbnail}
                onClick={() => changeVideo(idx)}
              />
            ))}
          </div>

          {/* Subscribe CTA */}
          <div className="text-center mt-10">
            <a
              href="https://www.youtube.com/@ChefSurendraRawat?sub_confirmation=1"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition"
              rel="noreferrer"
            >
              <Youtube className="w-5 h-5" />
              Subscribe to My Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
