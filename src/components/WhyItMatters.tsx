import React from 'react'
import { motion } from 'framer-motion'
import { VolumeX, Layers, Target, ArrowUpRight } from 'lucide-react'

export const WhyItMatters: React.FC = () => {
  const cards = [
    {
      title: 'Less Noise',
      icon: VolumeX,
      summary: 'Remove irrelevant context.',
      details: 'Eliminates discarded solutions, unrelated stack traces, and noise before they pollute the reasoning space of the LLM.',
      accent: 'border-blue-500/20 hover:border-blue-400/50 group-hover:text-blue-400',
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]',
    },
    {
      title: 'Lower Context Load & Cost',
      icon: Layers,
      summary: 'Send only useful information. Slash API bills.',
      details: 'Keeps total token volume compact so models process prompts faster, avoid context saturation, and slash LLM API token spend by up to ~90%.',
      accent: 'border-violet-500/20 hover:border-violet-400/50 group-hover:text-violet-400',
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]',
    },
    {
      title: 'Better Focus',
      icon: Target,
      summary: 'Give AI agents a clearer view of the current task.',
      details: 'Prevents the model from hallucinating edits in deprecated files by pinpointing the exact active AST dependencies.',
      accent: 'border-cyan-500/20 hover:border-cyan-400/50 group-hover:text-cyan-400',
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]',
    },
  ]

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" id="why-it-matters">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-400 mb-4">
            <span>THE CORE PROBLEM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            More Context <span className="text-red-400">≠</span> Better Answers
          </h2>

          <p className="mt-5 text-base sm:text-lg text-gray-400 leading-relaxed font-normal">
            “AI coding agents can become less focused when their context contains too much irrelevant information. Context Firewall is being designed to help agents work with smaller, cleaner and more task-relevant context.”
          </p>
        </div>

        {/* 3 Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`group relative rounded-2xl p-7 bg-[#080d1e]/80 border ${card.accent} ${card.glow} transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-mono flex items-center justify-between">
                    <span>{card.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-gray-300 transition-colors" />
                  </h3>

                  <p className="text-sm font-semibold text-cyan-300/90 mb-3">
                    {card.summary}
                  </p>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {card.details}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                  Developer Infrastructure Primitive
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
