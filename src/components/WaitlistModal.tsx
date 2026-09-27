import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, Sparkles, Clock, Mail } from 'lucide-react'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false)
      setEmail('')
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md rounded-2xl bg-[#090f24] border border-cyan-500/30 p-6 sm:p-8 shadow-glow-firewall z-10 text-left overflow-hidden"
          >
            {/* Top ambient glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                {/* Shield Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-5 shadow-glow-cyan">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-300 uppercase tracking-widest mb-3">
                  <Sparkles className="w-3 h-3" />
                  Early Access Waitlist
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Join the Context Firewall Waitlist
                </h3>

                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  Be the first to integrate high-signal context compression into your AI coding workflows when our private preview goes live.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-gray-400 mb-1.5">
                      Work or Developer Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-glow-cyan hover:scale-[1.01] active:scale-95 transition-all duration-200"
                  >
                    Request Early Access
                  </button>
                </form>

                <div className="mt-4 text-center">
                  <span className="text-[11px] font-mono text-gray-500">
                    No spam. Zero telemetry during development.
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mx-auto mb-4 shadow-glow-cyan">
                  <Clock className="w-7 h-7 text-cyan-400 animate-pulse" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider mb-2">
                  Coming Soon
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  We're Not Accepting Signups Yet.
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto mb-6">
                  “We're not accepting signups yet. Stay tuned.”
                </p>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-mono text-gray-400 mb-6">
                  Thank you for your interest! Follow our repository for updates on the developer preview release.
                </div>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-xs uppercase tracking-wider bg-white/10 hover:bg-white/15 text-white transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
