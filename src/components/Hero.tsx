import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, ShieldAlert, Cpu } from 'lucide-react'

interface HeroProps {
  onOpenWaitlist: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden" id="product">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-violet-600/15 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] sm:text-xs font-mono font-medium tracking-widest text-cyan-400 uppercase mb-8 shadow-inner"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-glow-cyan" />
          <span>COMING SOON · AI DEVELOPER INFRASTRUCTURE</span>
        </motion.div>

        {/* Large Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12]"
        >
          AI Coding Agents Don’t Need More Context.
          <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            They Need Better Context.
          </span>
        </motion.h1>

        {/* Small Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 sm:mt-8 text-base sm:text-xl text-gray-400 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          Context Firewall intelligently filters, retrieves and compresses coding context before it reaches your AI agent.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenWaitlist}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wider uppercase bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group border border-cyan-400/30"
          >
            <Sparkles className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform" />
            <span>Coming Soon</span>
          </button>

          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-medium text-sm text-gray-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>See How It Works</span>
            <ArrowDown className="w-4 h-4 text-gray-400 animate-bounce" />
          </a>
        </motion.div>

        {/* Subtle Tech Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-gray-500"
        >
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-500/80" />
            <span>Eliminates Hallucination Triggers</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-400/80" />
            <span>Reduces Attention Dilution</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
            <span>Sub-millisecond Pre-prompt Pipeline</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
