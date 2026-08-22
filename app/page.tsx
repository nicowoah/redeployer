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
    <div className="min-h-screen bg-bg overflow-x-hidden">
      <Nav />

      <main id="main">
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <About />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}
