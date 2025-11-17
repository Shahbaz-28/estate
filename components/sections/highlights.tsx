'use client'
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight, MapPin, Users, Zap, Leaf, Star } from 'lucide-react';
import Link from 'next/link';

import { useState } from 'react'

const HIGHLIGHTS = [
  {
    icon: '🏛️',
    title: 'Architectural Excellence',
    description: 'Award-winning design by world-renowned architects'
  },
  {
    icon: '🌿',
    title: 'Sustainable Living',
    description: 'Eco-friendly materials and green spaces throughout'
  },
  {
    icon: '🎯',
    title: 'Premium Amenities',
    description: 'World-class facilities for your lifestyle'
  },
  {
    icon: '🔐',
    title: '24/7 Security',
    description: 'Advanced security systems and trained personnel'
  },
  {
    icon: '🚗',
    title: 'Smart Parking',
    description: 'Modern parking solutions with automation'
  },
  {
    icon: '🌍',
    title: 'Prime Location',
    description: 'Connected to major hubs and natural attractions'
  }
]

 const completedProjects = [
    {
      id: 1,
      name: 'Serenity Heights',
      image: '/luxury-apartment-building-with-green-spaces.jpg',
      status: 'Completed',
    },
    {
      id: 2,
      name: 'Blossom Gardens',
      image: '/residential-complex-with-landscaped-gardens.jpg',
      status: 'Completed',
    },
    {
      id: 3,
      name: 'Harmony Estates',
      image: '/modern-residential-towers-with-nature-theme.jpg',
      status: 'Completed',
    },
  ];
export default function Highlights() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-background py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-sans text-4xl font-bold text-foreground sm:text-5xl tracking-tight">
            Why Choose Adiyogi Blossom
          </h2>
          <div className="mx-auto h-1 w-20 bg-secondary rounded-full" />
        </div>

        {/* Highlights Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((highlight, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative rounded-lg border border-border bg-card p-8 transition-all duration-300 overflow-hidden ${
                hoveredIndex === index
                  ? 'translate-y-[-8px] shadow-xl border-secondary/50'
                  : 'shadow-md'
              }`}
            >
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-secondary/5 rounded-lg" />
              )}

              <div className="relative z-10">
                <div className="mb-4 text-5xl">{highlight.icon}</div>
                <h3 className="mb-3 font-sans text-lg font-bold text-foreground tracking-tight">
                  {highlight.title}
                </h3>
                <p className="font-serif text-sm leading-relaxed text-foreground/70">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
           {/* Completed Projects */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="mb-2">Completed Projects</h2>
              <p className="text-foreground/70">Showcasing our finished masterpieces</p>
            </div>
            <Link href="/completed?tab=completed" className="text-primary hover:text-primary/80 transition-colors">
              View All <ChevronRight className="w-4 h-4 inline" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {completedProjects.map((project) => (
              <Link key={project.id} href={`/details/${project.id}`}>
                <Card className="overflow-hidden luxury-card group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{project.name}</h3>
                    <div className="text-primary font-medium text-sm flex items-center gap-1">
                      View Details <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </section>
  )
}
