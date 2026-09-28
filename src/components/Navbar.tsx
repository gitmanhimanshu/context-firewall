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
          <div className="hidden md:flex items-center gap-7">
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
              href="#open-source"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-cyan-400 hover:text-cyan-300 font-mono transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Proxy Engine
            </a>
            <a
              href="#why-it-matters"
              className="text-xs uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
            >
              Why It Matters
            </a>
            <a
              href="#coming-soon"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gray-400 hover:text-cyan-300 transition-colors"
            >
              <Sparkles className="w-3 h-3 text-cyan-400" />
              Coming Soon
            </a>
          </div>

          {/* CTA Group */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/gitmanhimanshu/jev-context-firewall"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 rounded-lg transition-all duration-300 shadow-sm"
              title="View jev-context-firewall on GitHub"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span>GitHub</span>
            </a>

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
              href="#open-source"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300 py-1 font-mono"
            >
              ✦ Open Source Proxy Engine
            </a>
            <a
              href="#why-it-matters"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-300 hover:text-white py-1"
            >
              Why It Matters
            </a>
            <a
              href="https://github.com/gitmanhimanshu/jev-context-firewall"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-300 hover:text-white py-1 flex items-center gap-2"
            >
              GitHub (jev-context-firewall) ↗
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
