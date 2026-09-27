import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Flame, 
  CheckCircle2, 
  Terminal, 
  FileCode2, 
  MessageSquare, 
  AlertCircle, 
  Zap, 
  Cpu, 
  Database,
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react'

export const HeroVisual: React.FC = () => {

  return (
    <section className="relative py-12 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Stage Container */}
        <div className="relative rounded-3xl bg-[#070b19]/90 border border-white/10 p-4 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
          {/* Subtle glowing ambient behind center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* ========================================================= */}
            {/* STAGE 1: LEFT — TOO MUCH CONTEXT (Chaotic & Overloaded) */}
            {/* ========================================================= */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-red-500/20 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  <span className="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                    Too Much Context
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-red-500/10 border border-red-500/30 text-red-300">
                  OVERWHELMED AGENT
                </span>
              </div>

              {/* Token Stat Box */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-red-950/30 to-slate-900/60 border border-red-500/20 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-red-400/80">Raw Context Payload</div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-red-200 tracking-tight flex items-baseline gap-2">
                    78,762
                    <span className="text-xs font-normal text-red-400 font-sans">input tokens</span>
                  </div>
                </div>
                <Flame className="w-6 h-6 text-red-400/70 animate-pulse" />
              </div>

              {/* Floating Overload Cards */}
              <div className="space-y-2.5 relative">
                {/* Chaotic stream items */}
                <motion.div 
                  animate={{ y: [0, -3, 0], x: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="p-3 rounded-lg bg-slate-900/80 border border-red-500/30 text-xs font-mono text-gray-300 flex items-start gap-2.5 shadow-md"
                >
                  <Terminal className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between text-[11px] text-gray-400">
                      <span className="font-semibold text-red-300">Terminal Logs</span>
                      <span className="text-red-400/80">24,180 tokens</span>
                    </div>
                    <p className="text-[11px] text-gray-500 truncate mt-0.5">
                      npm ERR! 14,000 lines of build traces &amp; debug memory dumps...
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 3, 0], x: [0, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                  className="p-3 rounded-lg bg-slate-900/80 border border-amber-500/30 text-xs font-mono text-gray-300 flex items-start gap-2.5 shadow-md"
                >
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between text-[11px] text-gray-400">
                      <span className="font-semibold text-amber-300">Stack Traces &amp; Old Code</span>
                      <span className="text-amber-400/80">19,420 tokens</span>
                    </div>
                    <p className="text-[11px] text-gray-500 truncate mt-0.5">
                      OutOfMemoryError in deprecated auth_v1_obsolete.py line 408...
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -2, 0], x: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                  className="p-3 rounded-lg bg-slate-900/80 border border-white/10 text-xs font-mono text-gray-300 flex items-start gap-2.5"
                >
                  <MessageSquare className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between text-[11px] text-gray-400">
                      <span className="font-semibold text-gray-300">Previous Conversations</span>
                      <span className="text-gray-400">18,200 tokens</span>
                    </div>
                    <p className="text-[11px] text-gray-500 truncate mt-0.5">
                      43 previous chat turns, discarded prototypes &amp; tangents...
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.5 }}
                  className="p-3 rounded-lg bg-slate-900/60 border border-white/5 text-xs font-mono text-gray-400 flex items-start gap-2.5 opacity-80"
                >
                  <FileCode2 className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-medium text-gray-400">Irrelevant &amp; Temp Files</span>
                      <span className="text-gray-500">16,962 tokens</span>
                    </div>
                    <p className="text-[11px] text-gray-600 truncate mt-0.5">
                      .env.backup, docker-compose.ci.yml, node_modules.lock
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Status footer */}
              <div className="pt-2 text-[11px] font-mono text-red-400/90 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                Attention dilution risk: Critical (High Noise)
              </div>
            </div>

            {/* ========================================================= */}
            {/* STAGE 2: CENTER — CONTEXT FIREWALL GATEWAY */}
            {/* ========================================================= */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-6">
              
              {/* Animated stream particle lines */}
              <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none">
                <div className="w-full h-0.5 bg-gradient-to-r from-red-500/40 via-blue-500 to-cyan-400 opacity-60" />
              </div>

              {/* Glowing Shield Portal */}
              <div className="relative group">
                {/* Rotating subtle outer ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  className="absolute -inset-6 rounded-full border border-dashed border-cyan-500/25 pointer-events-none"
                />

                {/* Glowing Aura */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-400 rounded-3xl blur-2xl opacity-40 animate-pulse-subtle" />

                {/* Shield Core Box */}
                <div className="relative w-64 sm:w-72 rounded-2xl bg-[#090f24] border-2 border-cyan-400/60 p-5 shadow-glow-firewall text-center">
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 mb-3 border border-white/20">
                    <Shield className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-base font-extrabold tracking-wider text-white font-mono uppercase">
                    Context<span className="text-cyan-400">Firewall</span>
                  </h3>
                  <p className="text-[11px] text-cyan-300/80 font-mono mt-0.5">
                    INTELLIGENT FILTERING ENGINE
                  </p>

                  {/* 4 Small Capabilities */}
                  <div className="grid grid-cols-2 gap-2 mt-4 text-left">
                    <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/20">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 font-semibold">
                        <Zap className="w-3 h-3 text-cyan-400" />
                        Semantic Analysis
                      </div>
                      <div className="text-[9px] text-gray-400 mt-0.5">AST &amp; intent mapping</div>
                    </div>

                    <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/20">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 font-semibold">
                        <Cpu className="w-3 h-3 text-blue-400" />
                        Relevance Detect
                      </div>
                      <div className="text-[9px] text-gray-400 mt-0.5">Discards noise chunks</div>
                    </div>

                    <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/20">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 font-semibold">
                        <Layers className="w-3 h-3 text-violet-400" />
                        Intelligent Filter
                      </div>
                      <div className="text-[9px] text-gray-400 mt-0.5">Prunes dead branches</div>
                    </div>

                    <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/20">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 font-semibold">
                        <Database className="w-3 h-3 text-emerald-400" />
                        Token Compress
                      </div>
                      <div className="text-[9px] text-gray-400 mt-0.5">Dense semantic repr</div>
                    </div>
                  </div>

                  {/* Dynamic Stream Indicator */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400">
                    <span className="flex items-center gap-1 text-red-400/90 line-through">
                      72,104 noise pruned
                    </span>
                    <span className="flex items-center gap-1 text-cyan-400 font-semibold">
                      <Sparkles className="w-3 h-3" />
                      Passing 6,658 tokens
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Arrow */}
              <div className="flex lg:hidden items-center justify-center my-4">
                <ArrowRight className="w-6 h-6 text-cyan-400 rotate-90" />
              </div>
            </div>

            {/* ========================================================= */}
            {/* STAGE 3: RIGHT — FOCUSED AI AGENT (Calm & Precise) */}
            {/* ========================================================= */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-glow-cyan" />
                  <span className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase">
                    Focused AI Agent
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  OPTIMAL ACCURACY
                </span>
              </div>

              {/* Token Reduction Stats Box */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-slate-900/60 border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-cyan-400">Distilled Context Payload</div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-200 tracking-tight flex items-baseline gap-2">
                    6,658
                    <span className="text-xs font-normal text-cyan-400 font-sans">relevant tokens</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-bold">Context &amp; Cost Cut</div>
                  <span className="text-xl sm:text-2xl font-extrabold font-mono text-emerald-300">
                    91.5%
                  </span>
                </div>
              </div>

              {/* Clean Code Response Panel */}
              <div className="rounded-xl bg-[#030611] border border-cyan-500/30 p-4 shadow-xl font-mono text-xs text-gray-300 space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[11px] text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                    <span className="text-gray-400 ml-1">agent_output.ts</span>
                  </div>
                  <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Zero Context Drift
                  </span>
                </div>

                <div className="text-gray-500 text-[11px]">// Pure extracted dependency slice:</div>
                <div className="text-blue-300">
                  <span className="text-violet-400">import</span> &#123; verifySession &#125; <span className="text-violet-400">from</span> <span className="text-cyan-300">'@auth/core'</span>;
                </div>
                <div className="text-gray-300 pt-1">
                  <span className="text-violet-400">export async function</span> <span className="text-yellow-300">validateRouteContext</span>(req) &#123;
                </div>
                <div className="pl-4 text-emerald-300/90 text-[11px]">
                  <span className="text-gray-500">// Direct single-step resolution:</span><br />
                  <span className="text-violet-400">const</span> session = <span className="text-violet-400">await</span> verifySession(req.headers);<br />
                  <span className="text-violet-400">return</span> session.isValid ? session.user : <span className="text-red-400">null</span>;
                </div>
                <div className="text-gray-300">&#125;</div>
                
                <div className="pt-2 text-[10px] text-cyan-400/80 border-t border-white/5 flex items-center justify-between">
                  <span>Latency: 142ms</span>
                  <span>Accuracy: High</span>
                </div>
              </div>

              {/* Status footer */}
              <div className="pt-2 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Attention focused on essential tokens only
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* CONCEPT FLOW TICKER BAR */}
          {/* ========================================================= */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center sm:text-left">
              <span className="px-2.5 py-1 rounded bg-red-500/10 text-red-300 border border-red-500/20 font-bold">
                78,762 INPUT TOKENS
              </span>
              <span className="text-gray-600">→</span>
              <span className="px-2.5 py-1 rounded bg-blue-500/10 text-cyan-300 border border-blue-500/20 font-bold">
                CONTEXT FIREWALL
              </span>
              <span className="text-gray-600">→</span>
              <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-200 border border-cyan-500/20 font-bold">
                6,658 RELEVANT TOKENS
              </span>
              <span className="text-gray-600">→</span>
              <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold">
                91.5% CONTEXT &amp; API COST REDUCTION
              </span>
            </div>

            <div className="text-[11px] text-gray-500 italic text-center md:text-right">
              * Concept &amp; demo visualization for upcoming developer infrastructure.
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
