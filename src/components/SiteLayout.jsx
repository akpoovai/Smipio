import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import { images } from '../lib/images.js'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function SiteLayout() {
  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[#FEF5E2] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.presentation.background})` }}
      />
      <ScrollManager />
      <Navbar />
      <main className="min-h-screen bg-transparent">
        <Outlet />
        <Footer />
      </main>
    </div>
  )
}
