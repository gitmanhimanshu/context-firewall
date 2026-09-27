import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Sparkles, ArrowRight, Lock } from 'lucide-react'

interface ComingSoonProps {
  onOpenWaitlist: () => void
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden text-center" id="coming-soon">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Futuristic Glowing Shield Animation */}
        <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 mb-10 flex items-center justify-center">
          {/* Outer rotating dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-dashed border-cyan-400/30"
          />

          {/* Inner counter-rotating ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
            className="absolute inset-3 rounded-full border border-blue-500/40"
          />

          {/* Glow Pulse */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-blue-600/50 via-cyan-500/40 to-violet-600/40 blur-xl animate-pulse" />

          {/* Shield Core */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-[#0b132b] to-[#1c2541] border border-cyan-400/50 flex items-center justify-center shadow-glow-firewall"
          >
            <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
          </motion.div>
        </div>

        {/* Large Centered Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight"
        >
          Context Firewall is{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            coming soon.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg sm:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
        >
          “We're building a smarter context layer for the next generation of AI coding agents.”
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <button
            onClick={onOpenWaitlist}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-cyan-400/40 group"
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>Join the Waitlist</span>
            <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Early Access Notice */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-gray-500">
          <Lock className="w-3.5 h-3.5 text-gray-400" />
          <span>Private Alpha access planned for developer teams in late 2026</span>
        </div>

      </div>
    </section>
  )
}
