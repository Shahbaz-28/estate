import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Highlights from '@/components/sections/highlights'
import CompletedProjects from '@/components/sections/completed-projects'
import OngoingProjects from '@/components/sections/ongoing-projects'
import Testimonials from '@/components/sections/testimonials'

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Highlights />
      <CompletedProjects />
      <OngoingProjects />
      <Testimonials />
    </main>
  )
}
