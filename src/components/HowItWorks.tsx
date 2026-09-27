import React from 'react'
import { motion } from 'framer-motion'
import { 
  Inbox, 
  Filter, 
  Minimize2, 
  ArrowRight, 
  FileText, 
  Terminal, 
  FolderTree, 
  Bug, 
  Bot, 
  ShieldCheck
} from 'lucide-react'

export const HowItWorks: React.FC = () => {

  const steps = [
    {
      num: '01',
      title: 'INGEST',
      icon: Inbox,
      color: 'from-blue-500/20 to-blue-600/10',
      borderColor: 'border-blue-500/30',
      tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      description: 'Your coding agent generates a large amount of raw context across every step of your development session.',
      items: [
        { name: 'Multi-turn Conversations', icon: FileText, note: 'Previous attempts & abandoned solutions' },
        { name: 'Repository Files', icon: FolderTree, note: 'Entire file trees & unrelated modules' },
        { name: 'Terminal Output', icon: Terminal, note: 'Lengthy build, lint and test stdout logs' },
        { name: 'Errors & Stack Traces', icon: Bug, note: 'Stale exceptions from hours ago' },
      ],
    },
    {
      num: '02',
      title: 'FILTER',
      icon: Filter,
      color: 'from-indigo-500/20 to-violet-600/10',
      borderColor: 'border-indigo-500/30',
      tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
      description: 'Context Firewall analyzes the incoming information in real-time and identifies what actually matters for the current task.',
      items: [
        { name: 'Semantic AST Pruning', icon: ShieldCheck, note: 'Extracts only actively called symbols' },
        { name: 'Relevance Scoring', icon: ShieldCheck, note: 'Eliminates conversation dead-ends' },
        { name: 'Noise Suppression', icon: ShieldCheck, note: 'Strips out bloated dependency logs' },
        { name: 'Scope Isolation', icon: ShieldCheck, note: 'Guards against irrelevant doc strings' },
      ],
    },
    {
      num: '03',
      title: 'COMPRESS',
      icon: Minimize2,
      color: 'from-cyan-500/20 to-teal-600/10',
      borderColor: 'border-cyan-500/30',
      tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      description: 'Only the most relevant, distilled context is structured and passed to the downstream AI coding agent.',
      items: [
        { name: 'High-Density Tokens', icon: Bot, note: 'Maximized signal-to-noise ratio' },
        { name: 'Preserved Call Hierarchy', icon: Bot, note: 'Clean interfaces without distraction' },
        { name: 'Instant Retrieval Speed', icon: Bot, note: 'Near zero latency context delivery' },
        { name: 'Hallucination Defense', icon: Bot, note: 'Zero outdated assumptions passed' },
      ],
    },
  ]

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" id="how-it-works">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-4">
            <span>PIPELINE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From Context Overload to{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Context Intelligence
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            A three-stage precision filtering pipeline designed to sit transparently between developer environments and agent inference.
          </p>
        </div>

        {/* Visual Flow Banner: Everything → Relevant Context → AI Agent */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-panel/70 border border-white/10 backdrop-blur-md">
          <div className="text-center text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">
            Data Stream Progression
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            {/* Everything */}
            <div className="w-full md:w-1/3 p-4 rounded-xl bg-slate-900/90 border border-red-500/30 text-center relative group">
              <span className="text-[10px] font-mono uppercase text-red-400 font-bold block mb-1">Raw Ingestion</span>
              <div className="text-base font-bold text-white font-mono">Everything</div>
              <div className="text-xs text-gray-400 mt-1">Logs, history, files, errors</div>
              <div className="mt-2 text-[11px] font-mono text-red-300 bg-red-950/50 py-0.5 rounded border border-red-500/20">
                ~80,000 Tokens (Unfiltered)
              </div>
            </div>

            {/* Arrow with moving particle */}
            <div className="flex items-center justify-center text-cyan-400">
              <div className="flex flex-col items-center">
                <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0 animate-pulse" />
                <span className="text-[9px] font-mono text-cyan-400 mt-1 uppercase tracking-wider hidden md:block">Filter &amp; Prune</span>
              </div>
            </div>

            {/* Relevant Context */}
            <div className="w-full md:w-1/3 p-4 rounded-xl bg-gradient-to-b from-blue-950/70 to-slate-900/90 border border-cyan-400/50 text-center shadow-glow-cyan">
              <span className="text-[10px] font-mono uppercase text-cyan-300 font-bold block mb-1">Firewall Synthesizer</span>
              <div className="text-base font-bold text-white font-mono">Relevant Context</div>
              <div className="text-xs text-cyan-200/80 mt-1">Semantic extraction only</div>
              <div className="mt-2 text-[11px] font-mono text-emerald-300 bg-emerald-950/50 py-0.5 rounded border border-emerald-500/30">
                -91.5% Token Reduction
              </div>
            </div>

            {/* Arrow with moving particle */}
            <div className="flex items-center justify-center text-cyan-400">
              <div className="flex flex-col items-center">
                <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0 animate-pulse" />
                <span className="text-[9px] font-mono text-cyan-400 mt-1 uppercase tracking-wider hidden md:block">Direct Ingest</span>
              </div>
            </div>

            {/* AI Agent */}
            <div className="w-full md:w-1/3 p-4 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-center">
              <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block mb-1">Target Engine</span>
              <div className="text-base font-bold text-white font-mono">AI Agent</div>
              <div className="text-xs text-gray-400 mt-1">High attention focus</div>
              <div className="mt-2 text-[11px] font-mono text-cyan-300 bg-cyan-950/50 py-0.5 rounded border border-cyan-500/20">
                Optimal Precision Response
              </div>
            </div>
          </div>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative rounded-2xl p-6 sm:p-7 bg-[#080d1e] border ${step.borderColor} transition-all duration-300 hover:border-cyan-400/50 hover:shadow-glow-cyan flex flex-col justify-between`}
              >
                <div>
                  {/* Step number badge & icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-gray-600/70">
                      {step.num}
                    </span>
                    <div className={`p-3 rounded-xl bg-white/[0.04] border border-white/10`}>
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${step.tagColor}`}>
                      Step {step.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-wide mt-2 mb-3 font-mono">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Sub items */}
                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  {step.items.map((item, i) => {
                    const ItemIcon = item.icon
                    return (
                      <div key={i} className="flex items-start gap-2.5 text-xs">
                        <ItemIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-gray-200">{item.name}</span>
                          <span className="block text-[11px] text-gray-500">{item.note}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
