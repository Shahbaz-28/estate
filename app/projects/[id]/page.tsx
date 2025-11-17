'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PROJECTS_DETAILS: Record<number, any> = {
  1: {
    name: 'Serenity Heights',
    tagline: 'Where Peace Meets Luxury',
    images: [
      '/completed-project-1.jpg',
      '/interior-luxury-1.jpg',
      '/interior-luxury-2.jpg'
    ],
    status: 'Completed',
    units: '245',
    occupancy: '100%',
    price: '₹2.5 - 3.5 Cr',
    area: '2500-3500 sqft',
    floors: '25',
    location: 'Central Delhi',
    highlights: [
      'Landscaped gardens with water features',
      'Olympic-size swimming pool',
      'State-of-the-art gymnasium',
      'Meditation and yoga center',
      'Pet-friendly community parks'
    ],
    amenities: [
      'Clubhouse', 'Library', 'Cinema', 'Spa', 'Tennis court',
      'Basketball court', 'Jogging track', 'Landscaped gardens'
    ]
  },
  2: {
    name: 'Grand Esplanade',
    tagline: 'Elegance Redefined',
    images: [
      '/completed-project-2.jpg',
      '/interior-luxury-2.jpg',
      '/interior-luxury-3.jpg'
    ],
    status: 'Completed',
    units: '180',
    occupancy: '100%',
    price: '₹3 - 4.5 Cr',
    area: '3000-4000 sqft',
    floors: '32',
    location: 'South Delhi',
    highlights: [
      'Private courtyard gardens',
      'Rooftop infinity pool',
      'Fine dining restaurant',
      'Concierge service',
      'Smart home automation'
    ],
    amenities: [
      'Clubhouse', 'Restaurant', 'Spa', 'Gym', 'Pool',
      'Theater', 'Game zone', 'Co-working space'
    ]
  },
  5: {
    name: 'Nature\'s Crown',
    tagline: 'Luxury in Harmony with Nature',
    images: [
      '/ongoing-project-1.jpg',
      '/interior-luxury-1.jpg',
      '/interior-luxury-3.jpg'
    ],
    status: 'Under Construction',
    units: '280',
    completion: '65%',
    price: '₹2 - 3 Cr',
    area: '2400-3200 sqft',
    floors: '28',
    location: 'North Delhi',
    highlights: [
      '60% Green spaces',
      'Natural water bodies',
      'Organic community garden',
      'Nature trails and walkways',
      'Bird sanctuary areas'
    ],
    amenities: [
      'Nature center', 'Outdoor amphitheater', 'Cycling track', 'Organic farm',
      'Wellness center', 'Meditation zone', 'Bird watching tower'
    ]
  }
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id)
  const project = PROJECTS_DETAILS[projectId]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <section className="py-20 text-center">
          <h1 className="mb-4 font-sans text-4xl font-bold">Project Not Found</h1>
          <p className="mb-8 font-serif text-lg text-foreground/70">
            The project you're looking for doesn't exist.
          </p>
          <Link href="/projects" className="inline-block bg-secondary px-8 py-3 font-sans font-bold text-primary hover:opacity-90">
            Back to Projects
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="relative h-[60vh] overflow-hidden">
        {project.images.map((image: string, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${project.name} ${index + 1}`}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        ))}

        {/* Image controls */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {project.images.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? 'w-8 bg-secondary'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)}
          className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
        >
          ←
        </button>
        <button
          onClick={() => setCurrentImageIndex((prev) => (prev + 1) % project.images.length)}
          className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
        >
          →
        </button>
      </section>

      {/* Content */}
      <section className="relative bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
          {/* Header */}
          <div className="mb-16 border-b border-border pb-8">
            <h1 className="mb-2 font-sans text-5xl font-bold text-foreground">
              {project.name}
            </h1>
            <p className="mb-8 font-serif text-xl text-secondary">
              {project.tagline}
            </p>

            {/* Quick Stats */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Status', value: project.status },
                { label: 'Units', value: project.units },
                { label: 'Price Range', value: project.price },
                { label: 'Area', value: project.area }
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-sm text-foreground/60">{stat.label}</p>
                  <p className="font-sans text-xl font-bold text-foreground">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left Column - Highlights & Amenities */}
            <div className="lg:col-span-2">
              {/* Highlights */}
              <div className="mb-12">
                <h2 className="mb-6 font-sans text-3xl font-bold">
                  Premium Highlights
                </h2>
                <ul className="space-y-3">
                  {project.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                      <span className="font-serif text-foreground/80">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amenities Grid */}
              <div>
                <h2 className="mb-6 font-sans text-3xl font-bold">
                  World-Class Amenities
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.amenities.map((amenity: string, index: number) => (
                    <div
                      key={index}
                      className="rounded-sm border border-border bg-muted p-4 text-center font-serif text-foreground"
                    >
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Details & CTA */}
            <div>
              {/* Details Card */}
              <div className="sticky top-24 rounded-sm border border-border bg-muted p-8">
                <h3 className="mb-6 font-sans text-2xl font-bold">
                  Project Details
                </h3>

                <div className="space-y-4 border-b border-border pb-6 font-serif text-foreground/80">
                  <div className="flex justify-between">
                    <span>Total Floors</span>
                    <span className="font-bold text-foreground">{project.floors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location</span>
                    <span className="font-bold text-foreground">{project.location}</span>
                  </div>
                  {project.completion && (
                    <div>
                      <div className="mb-2 flex justify-between">
                        <span>Completion</span>
                        <span className="font-bold text-foreground">{project.completion}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-border">
                        <div
                          className="h-full bg-secondary"
                          style={{ width: project.completion }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 space-y-3">
                  <Link
                    href="/contact"
                    className="block rounded-sm bg-secondary px-6 py-3 text-center font-sans font-bold text-primary transition-transform hover:scale-105"
                  >
                    Enquire Now
                  </Link>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-sm border-2 border-secondary px-6 py-3 text-center font-sans font-bold text-secondary transition-colors hover:bg-secondary hover:text-primary"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-16 border-t border-border pt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-serif text-secondary hover:text-secondary/80"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
