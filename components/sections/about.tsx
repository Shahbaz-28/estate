import Image from 'next/image'

export default function About() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 font-sans text-4xl font-bold text-foreground sm:text-5xl">
              About Adiyogi Blossom
            </h2>
            
            <div className="space-y-4 font-serif text-lg leading-relaxed text-foreground/80">
              <p>
                Adiyogi Blossom represents a paradigm shift in luxury residential living. 
                Conceived with meticulous attention to detail and environmental consciousness, 
                our projects marry contemporary architecture with natural beauty.
              </p>
              
              <p>
                Each residence is crafted to offer not just a home, but a sanctuary of elegance 
                and tranquility. From sustainable building practices to bespoke interior designs, 
                every element reflects our commitment to excellence.
              </p>
            </div>

            {/* Highlights badges */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {[
                { label: '500+', value: 'Happy Residents' },
                { label: '15', value: 'Active Projects' },
                { label: '2023', value: 'Est. Year' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-sans text-2xl font-bold text-secondary sm:text-3xl">
                    {stat.label}
                  </p>
                  <p className="mt-2 font-serif text-sm text-foreground/60">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 overflow-hidden rounded-sm shadow-2xl lg:h-auto">
            <Image
              src="/about-luxury-interior.jpg"
              alt="Adiyogi Blossom Interior"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}
