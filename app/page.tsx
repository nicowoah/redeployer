import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg overflow-x-hidden">
      <Nav />
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
