import Link from 'next/link'

export default function LocationMap() {
  return (
    <section className="relative overflow-hidden bg-muted py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 font-sans text-4xl font-bold text-foreground">
              Prime Location
            </h2>
            <p className="mb-6 font-serif text-lg leading-relaxed text-foreground/80">
              Located in the heart of the city's most desirable neighborhood, Adiyogi Blossom offers 
              unparalleled connectivity while maintaining serene surroundings.
            </p>

            {/* Location Highlights */}
            <div className="space-y-4 font-serif text-foreground/80">
              {[
                '10 min to Business District',
                '15 min to International Airport',
                '5 min to Shopping & Entertainment',
                '20 min to Premium Schools',
                'Direct Highway Access'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-sm bg-secondary px-8 py-3 font-sans font-bold text-primary transition-transform hover:scale-105"
            >
              Get Directions
            </Link>
          </div>

          {/* Map Placeholder */}
          <div className="relative h-96 overflow-hidden rounded-sm border-4 border-secondary shadow-xl lg:h-auto">
            <div className="flex h-full items-center justify-center bg-foreground/5">
              <div className="text-center">
                <p className="text-4xl mb-2">📍</p>
                <p className="font-serif text-foreground/60">Interactive Map Coming Soon</p>
                <p className="font-serif text-sm text-foreground/40">Latitude: 28.6139 | Longitude: 77.2090</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
