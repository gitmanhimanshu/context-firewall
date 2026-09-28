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
          className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] sm:text-xs font-mono font-medium tracking-widest text-cyan-400 uppercase mb-8 shadow-inner"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-glow-cyan" />
          <span>COMING SOON · AI DEVELOPER INFRASTRUCTURE</span>
          <span className="text-gray-500">|</span>
          <a
            href="https://github.com/gitmanhimanshu/jev-context-firewall"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-300 underline underline-offset-2 flex items-center gap-1 transition-colors"
          >
            <span>Open Source Proxy: jev-context-firewall</span>
            <span aria-hidden="true">↗</span>
          </a>
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
            <span>Join Waitlist</span>
          </button>

          <a
            href="https://github.com/gitmanhimanshu/jev-context-firewall"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-medium text-sm text-white bg-white/[0.07] hover:bg-white/[0.12] border border-cyan-400/40 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10 group"
          >
            <svg className="w-4 h-4 fill-current text-cyan-400 group-hover:scale-110 transition-transform" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span>Star on GitHub</span>
            <span className="text-xs text-gray-400 group-hover:text-cyan-300">↗</span>
          </a>

          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-sm text-gray-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>See How It Works</span>
            <ArrowDown className="w-4 h-4 text-gray-400 animate-bounce" />
          </a>
        </motion.div>

        {/* Creator / Manager Credit & Tech Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 flex flex-col items-center gap-4 text-xs font-mono text-gray-500"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
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
              <span>Sub-millisecond Pipeline</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400/80 shadow-glow-cyan" />
              <span className="text-cyan-400/90 font-semibold">~90% LLM Token Cost Savings</span>
            </div>
          </div>

          <div className="pt-2 text-gray-400 flex items-center gap-2 text-[11px]">
            <span>Engineered & Managed by</span>
            <a
              href="https://github.com/gitmanhimanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-300 font-semibold underline underline-offset-2 transition-colors"
            >
              Himanshu Yadav
            </a>
            <span className="text-gray-600">·</span>
            <a
              href="https://www.linkedin.com/in/himanshu-yadav-5ba28921b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-300 transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
