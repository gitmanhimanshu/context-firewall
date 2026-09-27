import React, { useState, useEffect } from 'react'
import { Shield, Sparkles, Menu, X } from 'lucide-react'

interface NavbarProps {
  onOpenWaitlist: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#040711]/85 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-blue-950/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 group-hover:border-blue-400/60 transition-all duration-300">
              <Shield className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <div className="absolute inset-0 rounded-lg bg-blue-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wider text-white font-mono uppercase">
                Context<span className="text-cyan-400">Firewall</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#product"
              className="text-xs uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
            >
              Product
            </a>
            <a
              href="#how-it-works"
              className="text-xs uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="#why-it-matters"
              className="text-xs uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
            >
              Why It Matters
            </a>
            <a
              href="#coming-soon"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Sparkles className="w-3 h-3" />
              Coming Soon
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenWaitlist}
              className="relative group px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-300 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 rounded-lg border border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors shadow-glow-cyan" />
              <span className="relative text-white z-10 flex items-center gap-1.5">
                Join Waitlist
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#060a17]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-3">
            <a
              href="#product"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-300 hover:text-white py-1"
            >
              Product
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-300 hover:text-white py-1"
            >
              How It Works
            </a>
            <a
              href="#why-it-matters"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-300 hover:text-white py-1"
            >
              Why It Matters
            </a>
            <a
              href="#coming-soon"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300 py-1"
            >
              Coming Soon
            </a>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              onOpenWaitlist()
            }}
            className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-cyan"
          >
            Join Waitlist
          </button>
        </div>
      )}
    </nav>
  )
}
