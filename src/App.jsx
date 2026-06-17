import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProductsSection from './components/ProductsSection.jsx'
import PricingSection from './components/PricingSection.jsx'
import EcosystemSection from './components/EcosystemSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import { images } from './lib/images.js'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[#FEF5E2] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.presentation.background})` }}
      />
      <Navbar />
      <main className="min-h-screen bg-transparent">
        <Hero />
        <ProductsSection />
        <PricingSection />
        <EcosystemSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}
