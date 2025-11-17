'use client'

import { useState, useMemo, Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const ALL_PROJECTS = [
  {
    id: 1,
    name: 'Serenity Heights',
    image: '/completed-project-1.jpg',
    units: '245',
    occupancy: '100%',
    status: 'Completed',
    category: 'completed',
    price: '₹2.5 Cr',
    area: '2500-3500 sqft'
  },
  {
    id: 2,
    name: 'Grand Esplanade',
    image: '/completed-project-2.jpg',
    units: '180',
    occupancy: '100%',
    status: 'Completed',
    category: 'completed',
    price: '₹3.2 Cr',
    area: '3000-4000 sqft'
  },
  {
    id: 3,
    name: 'Botanical Residences',
    image: '/completed-project-3.jpg',
    units: '320',
    occupancy: '98%',
    status: 'Completed',
    category: 'completed',
    price: '₹2.8 Cr',
    area: '2800-3800 sqft'
  },
  {
    id: 4,
    name: 'Pinnacle Tower',
    image: '/completed-project-4.jpg',
    units: '156',
    occupancy: '100%',
    status: 'Completed',
    category: 'completed',
    price: '₹4.5 Cr',
    area: '3500-5000 sqft'
  },
  {
    id: 5,
    name: 'Nature\'s Crown',
    image: '/ongoing-project-1.jpg',
    units: '280',
    completion: '65%',
    status: 'Under Construction',
    category: 'ongoing',
    price: '₹2.3 Cr',
    area: '2400-3200 sqft'
  },
  {
    id: 6,
    name: 'Urban Sanctuary',
    image: '/ongoing-project-2.jpg',
    units: '210',
    completion: '45%',
    status: 'Foundation Phase',
    category: 'ongoing',
    price: '₹2.9 Cr',
    area: '2900-3900 sqft'
  },
  {
    id: 7,
    name: 'Emerald Paradise',
    image: '/ongoing-project-3.jpg',
    units: '195',
    completion: '85%',
    status: 'Final Phase',
    category: 'ongoing',
    price: '₹3.1 Cr',
    area: '3100-4100 sqft'
  },
  {
    id: 8,
    name: 'Horizon Towers',
    image: '/ongoing-project-4.jpg',
    units: '340',
    completion: '30%',
    status: 'Structural Work',
    category: 'ongoing',
    price: '₹2.6 Cr',
    area: '2500-3500 sqft'
  }
]

function ProjectsContent() {
  const searchParams = useSearchParams()
  const filterParam = searchParams.get('filter') || 'all'
  const [activeFilter, setActiveFilter] = useState(filterParam)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return ALL_PROJECTS
    return ALL_PROJECTS.filter(p => p.category === activeFilter)
  }, [activeFilter])

  return (
    <main className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-b from-primary to-primary/90 py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <h1 className="mb-4 font-sans text-5xl font-bold sm:text-6xl">
            Our Projects
          </h1>
          <p className="max-w-2xl font-serif text-lg text-primary-foreground/90">
            Explore our portfolio of premium residential developments, each 
            meticulously crafted to offer luxury, comfort, and excellence.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8">
          <div className="flex flex-wrap gap-4">
            {[
              { value: 'all', label: 'All Projects' },
              { value: 'completed', label: 'Completed' },
              { value: 'ongoing', label: 'Ongoing' }
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`relative px-6 py-2 font-sans font-bold transition-colors ${
                  activeFilter === filter.value
                    ? 'text-secondary'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {filter.label}
                {activeFilter === filter.value && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <div className="group relative overflow-hidden rounded-sm bg-card shadow-lg transition-all duration-300 hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    
                    {/* Status badge */}
                    <div className={`absolute right-0 top-0 px-4 py-2 font-sans text-sm font-bold ${
                      project.category === 'completed'
                        ? 'bg-secondary text-primary'
                        : 'bg-accent text-accent-foreground'
                    }`}>
                      {project.status}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-4 font-sans text-xl font-bold text-foreground">
                      {project.name}
                    </h3>

                    <div className="mb-6 space-y-2 border-t border-border pt-4 font-serif text-sm text-foreground/70">
                      <div className="flex justify-between">
                        <span>Units</span>
                        <span className="font-bold text-foreground">{project.units}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price Range</span>
                        <span className="font-bold text-foreground">{project.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Area</span>
                        <span className="font-bold text-foreground">{project.area}</span>
                      </div>
                      
                      {project.category === 'ongoing' && (
                        <>
                          <div className="pt-2">
                            <div className="mb-2 flex justify-between">
                              <span>Progress</span>
                              <span className="font-bold text-foreground">{project.completion}</span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-border">
                              <div
                                className="h-full bg-secondary"
                                style={{ width: project.completion }}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <button className="w-full bg-foreground/10 py-2 font-sans font-bold text-foreground transition-colors hover:bg-secondary hover:text-primary">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-serif text-lg text-foreground/60">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-foreground/70">Loading...</p>
        </div>
      </main>
    }>
      <ProjectsContent />
    </Suspense>
  )
}
