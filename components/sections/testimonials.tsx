'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Property Owner',
    image: '/testimonial-avatar-1.jpg',
    text: 'Adiyogi Blossom has exceeded all my expectations. The attention to detail and quality is exceptional.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Resident',
    image: '/testimonial-avatar-2.jpg',
    text: 'Living here is a dream come true. The architecture and amenities are world-class.',
    rating: 5
  },
  {
    id: 3,
    name: 'Vikram Patel',
    role: 'Investor',
    image: '/testimonial-avatar-3.jpg',
    text: 'The investment returns have been outstanding. Highly recommended for property investors.',
    rating: 5
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative bg-background py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-sans text-4xl font-bold text-foreground sm:text-5xl">
            What Our Residents Say
          </h2>
          <div className="mx-auto h-1 w-16 bg-secondary" />
        </div>

        <div className="relative min-h-64 rounded-sm bg-muted p-8 sm:p-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-1000 sm:p-12 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Star Rating */}
              <div className="mb-6 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-2xl text-secondary">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="mb-8 text-center font-serif text-xl italic text-foreground">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-sans font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-serif text-sm text-foreground/70">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-secondary'
                    : 'w-2 bg-foreground/30 hover:bg-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
            {/* Map Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Location Map</h2>
            <p className="text-foreground/70">Find us on the map</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-96 bg-border">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7346495467477!2d77.69!3d28.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAdiyogi!5e0!3m2!1sen!2sin!4v1234567890"
            />
          </div>
        </div>
      </section>
    </section>
  )
}
