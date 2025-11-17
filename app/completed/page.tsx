'use client';

import { useState, Suspense } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Zap, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function ProjectsContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'completed');

  const completedProjects = [
    {
      id: 1,
      name: 'Serenity Heights',
      location: 'South Delhi',
      image: '/luxury-apartment-building-with-green-spaces.jpg',
      description: 'Luxurious residential complex with modern amenities',
      status: 'Completed',
      units: 250,
      year: '2023',
    },
    {
      id: 2,
      name: 'Blossom Gardens',
      location: 'Greater Noida',
      image: '/residential-complex-with-landscaped-gardens.jpg',
      description: 'Nature-inspired community with world-class facilities',
      status: 'Completed',
      units: 180,
      year: '2022',
    },
    {
      id: 3,
      name: 'Harmony Estates',
      location: 'Gurgaon',
      image: '/modern-residential-towers-with-nature-theme.jpg',
      description: 'Premium residential towers with panoramic views',
      status: 'Completed',
      units: 320,
      year: '2023',
    },
    {
      id: 4,
      name: 'Tranquil Ridge',
      location: 'Bangalore',
      image: '/hillside-luxury-residential-project.jpg',
      description: 'Hill-view luxury residences with nature integration',
      status: 'Completed',
      units: 150,
      year: '2022',
    },
  ];

  const ongoingProjects = [
    {
      id: 5,
      name: 'Green Vista',
      location: 'Pune',
      image: '/under-construction-luxury-residential-project.jpg',
      description: 'Upcoming eco-friendly residential community',
      status: 'Under Construction',
      progress: 75,
      expectedCompletion: '2025',
      units: 290,
    },
    {
      id: 6,
      name: 'Lotus Park',
      location: 'Hyderabad',
      image: '/construction-site-luxury-apartments.jpg',
      description: 'Premium apartments with integrated wellness center',
      status: 'Under Construction',
      progress: 45,
      expectedCompletion: '2026',
      units: 210,
    },
    {
      id: 7,
      name: 'Azure Heights',
      location: 'Mumbai',
      image: '/modern-construction-site-residential-tower.jpg',
      description: 'Waterfront luxury residences',
      status: 'Foundation Stage',
      progress: 20,
      expectedCompletion: '2027',
      units: 400,
    },
  ];

  const projects = activeTab === 'completed' ? completedProjects : ongoingProjects;

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance mb-4">Our Projects</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Explore our portfolio of premium real estate projects spanning across major Indian cities.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('completed')}
              className={`py-4 px-2 font-medium relative transition-colors ${
                activeTab === 'completed'
                  ? 'text-primary'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              Completed Projects
              {activeTab === 'completed' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('ongoing')}
              className={`py-4 px-2 font-medium relative transition-colors ${
                activeTab === 'ongoing'
                  ? 'text-primary'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              Ongoing Projects
              {activeTab === 'ongoing' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/details/${project.id}`}>
                <Card className="overflow-hidden luxury-card group cursor-pointer h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg">{project.name}</h3>
                      {activeTab === 'ongoing' && 'progress' in project && (
                        <div className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium flex items-center gap-1 ml-2 shrink-0">
                          <Zap className="w-3 h-3" /> {project.progress}%
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-foreground/60 text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <p className="text-foreground/70 text-sm mb-4 flex-1">{project.description}</p>

                    {activeTab === 'completed' && 'year' in project && (
                      <div className="flex gap-4 mb-4 text-xs text-foreground/60">
                        <div>
                          <span className="font-medium text-foreground">{project.units}</span> Units
                        </div>
                        <div>Completed {project.year}</div>
                      </div>
                    )}

                    {activeTab === 'ongoing' && 'progress' in project && 'expectedCompletion' in project && (
                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-foreground/70 mb-2">
                          <span>Completion: {project.expectedCompletion}</span>
                          <span>{project.units} Units</span>
                        </div>
                        <div className="w-full bg-border rounded-full h-2">
                          <div
                            className="bg-accent h-2 rounded-full transition-all"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

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

    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-foreground/70">Loading...</p>
        </div>
      </div>
    }>
      <ProjectsContent />
    </Suspense>
  );
}
