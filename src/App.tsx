import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HeroVisual } from './components/HeroVisual'
import { HowItWorks } from './components/HowItWorks'
import { ProxyEngine } from './components/ProxyEngine'
import { WhyItMatters } from './components/WhyItMatters'
import { ComingSoon } from './components/ComingSoon'
import { Footer } from './components/Footer'
import { WaitlistModal } from './components/WaitlistModal'

export default function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#040711] text-gray-100 relative selection:bg-cyan-500/30 selection:text-cyan-200 bg-grid-glow">
      {/* Ambient background light gradients */}
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none" />

      {/* Navigation */}
      <Navbar onOpenWaitlist={() => setWaitlistOpen(true)} />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero onOpenWaitlist={() => setWaitlistOpen(true)} />
        <HeroVisual />
        <HowItWorks />
        <ProxyEngine />
        <WhyItMatters />
        <ComingSoon onOpenWaitlist={() => setWaitlistOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Waitlist Modal */}
      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </div>
  )
}
