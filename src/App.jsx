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
    <div
      className="min-h-screen"
      style={{
        backgroundColor: '#eadbc5',
        backgroundImage: `url(${images.presentation.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
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
