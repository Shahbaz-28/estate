import Image from 'next/image'
import Link from 'next/link'

const COMPLETED_PROJECTS = [
  {
    id: 1,
    name: 'Serenity Heights',
    image: '/completed-project-1.jpg',
    units: '245',
    occupancy: '100%'
  },
  {
    id: 2,
    name: 'Grand Esplanade',
    image: '/completed-project-2.jpg',
    units: '180',
    occupancy: '100%'
  },
  {
    id: 3,
    name: 'Botanical Residences',
    image: '/completed-project-3.jpg',
    units: '320',
    occupancy: '98%'
  },
  {
    id: 4,
    name: 'Pinnacle Tower',
    image: '/completed-project-4.jpg',
    units: '156',
    occupancy: '100%'
  }
]

export default function CompletedProjects() {
  return (
    <section className="relative overflow-hidden bg-background py-2">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-sans text-4xl font-bold text-foreground sm:text-5xl">
            Completed Projects
          </h2>
          <div className="mx-auto h-1 w-16 bg-secondary" />
          <p className="mt-4 font-serif text-lg text-foreground/70">
            Celebrating excellence in luxury residential development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COMPLETED_PROJECTS.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="group relative overflow-hidden rounded-sm bg-muted shadow-lg transition-all hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute right-0 top-0 bg-secondary px-4 py-1 font-sans text-sm font-bold text-primary">
                    Completed
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-4 font-sans text-xl font-bold text-foreground">
                    {project.name}
                  </h3>

                  <div className="space-y-2 border-t border-border pt-4 font-serif text-sm text-foreground/70">
                    <div className="flex justify-between">
                      <span>Units</span>
                      <span className="font-bold text-foreground">{project.units}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Occupancy</span>
                      <span className="font-bold text-foreground">{project.occupancy}</span>
                    </div>
                  </div>

                  <button className="mt-6 w-full bg-foreground/10 py-2 font-sans font-bold text-foreground transition-colors hover:bg-secondary hover:text-primary">
                    View Details
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
