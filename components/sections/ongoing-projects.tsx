import Image from 'next/image'
import Link from 'next/link'

const ONGOING_PROJECTS = [
  {
    id: 5,
    name: 'Nature\'s Crown',
    image: '/ongoing-project-1.jpg',
    completion: '65%',
    status: 'Under Construction'
  },
  {
    id: 6,
    name: 'Urban Sanctuary',
    image: '/ongoing-project-2.jpg',
    completion: '45%',
    status: 'Foundation Phase'
  },
  {
    id: 7,
    name: 'Emerald Paradise',
    image: '/ongoing-project-3.jpg',
    completion: '85%',
    status: 'Final Phase'
  },
  {
    id: 8,
    name: 'Horizon Towers',
    image: '/ongoing-project-4.jpg',
    completion: '30%',
    status: 'Structural Work'
  }
]

export default function OngoingProjects() {
  return (
    <section className="relative overflow-hidden bg-muted py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-sans text-4xl font-bold text-foreground sm:text-5xl">
            Ongoing Projects
          </h2>
          <div className="mx-auto h-1 w-16 bg-secondary" />
          <p className="mt-4 font-serif text-lg text-foreground/70">
            Premium developments currently in progress
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ONGOING_PROJECTS.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="group relative overflow-hidden rounded-sm bg-background shadow-lg transition-all hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute left-0 top-0 bg-accent px-4 py-1 font-sans text-sm font-bold text-accent-foreground">
                    {project.completion}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 font-sans text-xl font-bold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mb-4 font-serif text-sm text-foreground/70">
                    {project.status}
                  </p>

                  <div className="mb-4 h-2 overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full bg-secondary transition-all duration-300"
                      style={{ width: `${project.completion}` }}
                    />
                  </div>

                  <button className="w-full bg-foreground/10 py-2 font-sans font-bold text-foreground transition-colors hover:bg-secondary hover:text-primary">
                    Learn More
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
