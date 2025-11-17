'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, MapPin, Home, Trees, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProjectDetailsPage() {
  const params = useParams();
  const projectId = params.id;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample project data - In production, this would come from a database
  const projectsData: Record<string, any> = {
    1: {
      name: 'Serenity Heights',
      location: 'South Delhi',
      status: 'Completed',
      year: '2023',
      units: 250,
      description: 'Luxurious residential complex with modern amenities and nature-inspired design.',
      fullDescription:
        'Serenity Heights is a premium residential project that seamlessly blends luxury living with nature. Featuring world-class amenities and thoughtful design, this project sets new standards for urban living.',
      images: [
        '/luxury-apartment-building-exterior-view.jpg',
        '/modern-apartment.png',
        '/residential-complex-courtyard-with-landscaping.jpg',
        '/swimming-pool-and-recreation-area.jpg',
      ],
      amenities: [
        { icon: Trees, name: 'Landscaped Gardens' },
        { icon: Users, name: 'Community Center' },
        { icon: Home, name: '250 Units' },
        { icon: Zap, name: 'Smart Homes' },
      ],
      floorPlans: [
        '/apartment-floor-plan-2bhk.jpg',
        '/apartment-floor-plan-3bhk.jpg',
      ],
      nearbyAmenities: [
        'Schools - 2.5 km',
        'Hospitals - 1.8 km',
        'Shopping Mall - 3 km',
        'Metro Station - 1.5 km',
      ],
      price: '₹1.2 Cr - ₹2.5 Cr',
    },
    2: {
      name: 'Blossom Gardens',
      location: 'Greater Noida',
      status: 'Completed',
      year: '2022',
      units: 180,
      description: 'Nature-inspired community with world-class facilities and sustainable design.',
      fullDescription:
        'Blossom Gardens represents the pinnacle of eco-conscious luxury living. With lush green spaces and sustainable practices, it offers a unique lifestyle experience.',
      images: [
        '/residential-complex-with-gardens-aerial-view.jpg',
        '/nature-inspired-apartment-buildings.jpg',
        '/green-spaces-and-walking-paths.jpg',
        '/community-facilities-complex.jpg',
      ],
      amenities: [
        { icon: Trees, name: 'Botanical Garden' },
        { icon: Users, name: 'Yoga Studio' },
        { icon: Home, name: '180 Units' },
        { icon: Zap, name: 'Solar Panels' },
      ],
      floorPlans: [
        '/floor-plan-2bhk-modern.jpg',
        '/floor-plan-3bhk-spacious.jpg',
      ],
      nearbyAmenities: [
        'International School - 2 km',
        'Multi-specialty Hospital - 1.2 km',
        'Shopping Complex - 2.5 km',
        'Golf Course - 4 km',
      ],
      price: '₹95 L - ₹2 Cr',
    },
    3: {
      name: 'Harmony Estates',
      location: 'Gurgaon',
      status: 'Completed',
      year: '2023',
      units: 320,
      description: 'Premium residential towers with panoramic views and luxury amenities.',
      fullDescription:
        'Harmony Estates is a landmark development featuring premium residential towers with spectacular views. Every detail has been carefully crafted for the discerning resident.',
      images: [
        '/premium-residential-towers-gurgaon.jpg',
        '/luxury-city-view-apartment.png',
        '/high-rise-residential-building.jpg',
        '/rooftop-amenities-area.jpg',
      ],
      amenities: [
        { icon: Trees, name: 'Rooftop Garden' },
        { icon: Users, name: 'Fitness Center' },
        { icon: Home, name: '320 Units' },
        { icon: Zap, name: 'Home Automation' },
      ],
      floorPlans: [
        '/luxury-apartment-floor-plan.jpg',
        '/placeholder.svg?height=400&width=600',
      ],
      nearbyAmenities: [
        'Schools - 1.5 km',
        'Hospitals - 1 km',
        'Shopping - 2 km',
        'Metro - 1.2 km',
      ],
      price: '₹1.5 Cr - ₹3.5 Cr',
    },
    4: {
      name: 'Tranquil Ridge',
      location: 'Bangalore',
      status: 'Completed',
      year: '2022',
      units: 150,
      description: 'Hill-view luxury residences with nature integration and serene ambiance.',
      fullDescription:
        'Tranquil Ridge offers stunning hill views combined with luxury modern living. Designed for those seeking peace and exclusivity.',
      images: [
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
      ],
      amenities: [
        { icon: Trees, name: 'Hill Views' },
        { icon: Users, name: 'Spa & Wellness' },
        { icon: Home, name: '150 Units' },
        { icon: Zap, name: 'Smart Living' },
      ],
      floorPlans: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
      ],
      nearbyAmenities: [
        'International School - 3 km',
        'Hospital - 2 km',
        'Shopping Mall - 4 km',
        'Golf Club - 2.5 km',
      ],
      price: '₹1.8 Cr - ₹4 Cr',
    },
    5: {
      name: 'Green Vista',
      location: 'Pune',
      status: 'Under Construction',
      progress: 75,
      expectedCompletion: '2025',
      units: 290,
      description: 'Upcoming eco-friendly residential community with modern amenities.',
      fullDescription:
        'Green Vista is an innovative eco-friendly project currently under development. It will feature sustainable living spaces with cutting-edge amenities.',
      images: [
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
      ],
      amenities: [
        { icon: Trees, name: 'Green Spaces' },
        { icon: Users, name: 'Community Hub' },
        { icon: Home, name: '290 Units' },
        { icon: Zap, name: 'Solar Energy' },
      ],
      floorPlans: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
      ],
      nearbyAmenities: [
        'Schools - 2 km',
        'Hospitals - 1.5 km',
        'Shopping - 2.5 km',
        'Airport - 5 km',
      ],
      price: '₹80 L - ₹1.8 Cr',
    },
    6: {
      name: 'Lotus Park',
      location: 'Hyderabad',
      status: 'Under Construction',
      progress: 45,
      expectedCompletion: '2026',
      units: 210,
      description: 'Premium apartments with integrated wellness center and modern design.',
      fullDescription:
        'Lotus Park is a premium residential project featuring integrated wellness facilities. Expected completion in 2026.',
      images: [
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
      ],
      amenities: [
        { icon: Trees, name: 'Wellness Center' },
        { icon: Users, name: 'Indoor Games' },
        { icon: Home, name: '210 Units' },
        { icon: Zap, name: 'Smart Technology' },
      ],
      floorPlans: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
      ],
      nearbyAmenities: [
        'International School - 2.5 km',
        'Hospital - 1 km',
        'Shopping Mall - 3 km',
        'Tech Park - 2 km',
      ],
      price: '₹75 L - ₹1.6 Cr',
    },
    7: {
      name: 'Azure Heights',
      location: 'Mumbai',
      status: 'Foundation Stage',
      progress: 20,
      expectedCompletion: '2027',
      units: 400,
      description: 'Waterfront luxury residences with spectacular views.',
      fullDescription:
        'Azure Heights is an iconic waterfront development offering luxury residences with panoramic sea views. Currently in foundation stage.',
      images: [
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
      ],
      amenities: [
        { icon: Trees, name: 'Beach Access' },
        { icon: Users, name: 'Club House' },
        { icon: Home, name: '400 Units' },
        { icon: Zap, name: 'Smart Homes' },
      ],
      floorPlans: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
      ],
      nearbyAmenities: [
        'School - 1.5 km',
        'Hospital - 2 km',
        'Shopping - 1.2 km',
        'Beach - 0.5 km',
      ],
      price: '₹2 Cr - ₹5 Cr',
    },
  };

  const project = projectsData[projectId as string];

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Image Slider */}
      <section className="pt-2 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl overflow-hidden h-96 md:h-[500px] group">
            <img
              src={project.images[currentImageIndex] || "/placeholder.svg"}
              alt={project.name}
              className="w-full h-full object-cover"
            />

            {/* Slider Controls */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {project.images.length}
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              {project.images.map((_: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="mb-2">{project.name}</h1>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <MapPin className="w-5 h-5" />
                    {project.location}
                  </div>
                </div>
                {project.status === 'Completed' && (
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium">
                    {project.status}
                  </div>
                )}
                {project.status?.includes('Under Construction') && (
                  <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium flex items-center gap-2">
                    <Zap className="w-4 h-4" /> {project.progress}%
                  </div>
                )}
                {project.status === 'Foundation Stage' && (
                  <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium">
                    {project.progress}% Complete
                  </div>
                )}
              </div>

              <p className="text-lg text-foreground/70 mb-8">{project.fullDescription}</p>

              {/* Amenities */}
              <div className="mb-12">
                <h2 className="mb-6">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.amenities.map((amenity: { icon: React.ComponentType<{ className?: string }>; name: string }, index: number) => {
                    const Icon = amenity.icon;
                    return (
                      <Card key={index} className="p-4 luxury-card text-center">
                        <Icon className="w-8 h-8 text-accent mx-auto mb-2" />
                        <p className="text-sm font-medium">{amenity.name}</p>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Floor Plans */}
              <div className="mb-12">
                <h2 className="mb-6">Floor Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.floorPlans.map((plan: string, index: number) => (
                    <Card key={index} className="overflow-hidden luxury-card">
                      <img src={plan || "/placeholder.svg"} alt={`Floor Plan ${index + 1}`} className="w-full h-auto" />
                    </Card>
                  ))}
                </div>
              </div>

              {/* Nearby Amenities */}
              <div>
                <h2 className="mb-6">Location Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.nearbyAmenities.map((amenity: string, index: number) => (
                    <Card key={index} className="p-4 luxury-card">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-accent" />
                        </div>
                        <span className="font-medium">{amenity}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="p-6 luxury-card sticky top-24">
                <div className="mb-6">
                  <p className="text-foreground/70 text-sm mb-2">Price Range</p>
                  <p className="text-2xl font-bold text-primary mb-4">{project.price}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Units</span>
                    <span className="font-semibold">{project.units}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Location</span>
                    <span className="font-semibold">{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Status</span>
                    <span className="font-semibold">{project.status}</span>
                  </div>
                  {project.year && (
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Year</span>
                      <span className="font-semibold">{project.year}</span>
                    </div>
                  )}
                  {project.expectedCompletion && (
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Expected</span>
                      <span className="font-semibold">{project.expectedCompletion}</span>
                    </div>
                  )}
                </div>

                {project.progress !== undefined && (
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span className="font-semibold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>
                )}

                <Link href="/contact" className="w-full">
                  <Button className="w-full mb-3 cursor-pointer">Enquire Now</Button>
                </Link>
                <Button variant="outline" className="w-full cursor-pointer">
                  Schedule Visit
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
