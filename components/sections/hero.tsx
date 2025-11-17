'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HERO_IMAGES = [
  '/hero-luxury-building-1.jpg',
  '/hero-luxury-building-2.jpg',
  '/hero-luxury-building-3.jpg',
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Adiyogi Blossom Project ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              unoptimized
            />
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <h1 className="animate-fade-in-up mb-4 font-serif text-6xl font-bold text-white sm:text-7xl lg:text-8xl tracking-tight">
            Adiyogi <span className="text-[#D4A05F]">Blossom</span>
          </h1>

          <p className="animate-fade-in-up mb-8 font-serif text-2xl text-[#D4A05F] sm:text-3xl font-light tracking-wide">
            Where Nature Meets Modern Luxury
          </p>

          <div className="animate-fade-in-up flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-[#D4A05F] px-10 py-4 font-sans font-bold text-white transition-all hover:scale-105 hover:shadow-xl hover:bg-[#C2904F]"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#D4A05F] px-10 py-4 font-sans font-bold text-[#D4A05F] transition-all hover:bg-[#D4A05F] hover:text-white"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentImageIndex
                ? 'w-8 bg-[#D4A05F]'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 text-center text-sm text-white/70">
        <p className="animate-parallax-slow">Scroll to explore</p>
      </div>
    </section>
  )
}
