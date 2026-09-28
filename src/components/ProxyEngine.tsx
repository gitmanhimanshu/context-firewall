import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Terminal,
  Activity,
  Zap,
  Check,
  Copy,
  ExternalLink,
  Lock,
  ArrowRight,
  TrendingDown
} from 'lucide-react'

export const ProxyEngine: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const quickstartCommand = `git clone https://github.com/gitmanhimanshu/jev-context-firewall.git\ncd jev-context-firewall\npip install -r requirements.txt\npython main.py`

  const handleCopy = () => {
    navigator.clipboard.writeText(quickstartCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative py-20 border-t border-white/10 bg-[#02050f]/80" id="open-source">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-violet-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4 shadow-sm"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Open Source Python Proxy Engine</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            Inspect, Filter & Compress Context
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              On Your Local Machine
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed"
          >
            Run the official Python FastAPI proxy locally on <code className="text-cyan-300 font-mono text-sm px-1.5 py-0.5 rounded bg-white/5 border border-white/10">http://127.0.0.1:8192</code>.
            It sits transparently between your IDE (Cursor, Trae, Cline, Antigravity) and upstream LLMs (Anthropic, OpenAI, Gemini), slashing 75% to 90% of token volume and API expenses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="https://github.com/gitmanhimanshu/jev-context-firewall"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-cyan-400/40 hover:border-cyan-400 text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 group"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Explore Repo: gitmanhimanshu/jev-context-firewall</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-cyan-300" />
            </a>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Proxy Port :8192 Ready</span>
            </div>
          </motion.div>
        </div>

        {/* Architecture & Flow Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left: Architecture Diagram Card */}
          <div className="lg:col-span-7 bg-[#060c1d]/90 rounded-2xl border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-gray-300">
                  Data Flow Architecture
                </span>
              </div>
              <span className="text-[11px] font-mono text-gray-500">
                localhost:8192
              </span>
            </div>

            {/* Visual Pipeline */}
            <div className="space-y-4 font-mono text-xs">
              
              {/* Step 1: IDE Client */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">1. AI Coding Assistant</span>
                    <span className="text-[10px] text-gray-400">Cursor · Trae · Cline · Antigravity</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5 truncate">
                    Sends full workspace prompt, active files, and conversation history
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-1 text-cyan-400">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              {/* Step 2: Context Firewall Engine */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-violet-950/40 border border-cyan-400/40 shadow-glow-cyan">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-white font-bold text-xs uppercase tracking-wider">
                      2. Context Firewall Local Proxy (FastAPI :8192)
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px]">
                    Open Source Core
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/10 text-[11px]">
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>OpenJev 6D Cognitive Scorer</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Causal Consensus Pruning</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Automated Secret Sanitizer</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Fail-Open Zero Downtime</span>
                  </div>
                </div>

                <div className="mt-3 pt-2 flex items-center justify-between text-[11px] text-cyan-300/90 font-mono">
                  <span>Dashboard Telemetry:</span>
                  <a
                    href="http://127.0.0.1:8192/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1 text-cyan-400"
                  >
                    http://127.0.0.1:8192/dashboard <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-1 text-cyan-400">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              {/* Step 3: Upstream LLM */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <TrendingDown className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">3. Upstream LLM API</span>
                    <span className="text-[10px] text-emerald-400 font-bold">~90% Lower Cost</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5 truncate">
                    Anthropic Claude 3.7 · OpenAI GPT-4o · Google Gemini 2.0
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Quickstart Terminal & Repository Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Terminal Snippet */}
            <div className="bg-[#050914] rounded-2xl border border-white/10 p-5 font-mono text-xs relative group shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-gray-400 text-[11px]">bash — quickstart</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] text-gray-300 hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="text-gray-300 text-xs leading-relaxed overflow-x-auto select-all">
                <code>
                  <span className="text-gray-500"># 1. Clone repository</span>{'\n'}
                  <span className="text-cyan-400">git clone</span> https://github.com/gitmanhimanshu/jev-context-firewall.git{'\n'}
                  <span className="text-cyan-400">cd</span> jev-context-firewall{'\n\n'}
                  <span className="text-gray-500"># 2. Install dependencies</span>{'\n'}
                  <span className="text-cyan-400">pip</span> install -r requirements.txt{'\n\n'}
                  <span className="text-gray-500"># 3. Launch the proxy on :8192</span>{'\n'}
                  <span className="text-cyan-400">python</span> main.py
                </code>
              </pre>
            </div>

            {/* Manager & Developer Spotlight Card */}
            <div className="bg-[#060d21]/80 rounded-2xl border border-cyan-500/20 p-5 backdrop-blur-md relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                    Lead Architect & Developer
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    Himanshu Yadav
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Managed and engineered the open-source Context Firewall proxy engine and the Setu MCP ecosystem.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs">
                <a
                  href="https://github.com/gitmanhimanshu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/himanshu-yadav-5ba28921b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:himanshuyada70@gmail.com"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors"
                >
                  <span>himanshuyada70@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Quick Engine Features */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-cyan-300 font-mono text-[11px] mb-1">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Live Dashboard</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-normal">
                  Real-time SSE metrics, token savings graphs, and latency traces.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-violet-300 font-mono text-[11px] mb-1">
                  <Lock className="w-3.5 h-3.5 text-violet-400" />
                  <span>Secret Redaction</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-normal">
                  Strips API keys, passwords, and tokens before requests leave your box.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function LinkedInIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.6 5.6H.9V15h2.7V5.6zM2.24 1A1.55 1.55 0 100 2.55 1.55 1.55 0 002.24 1zM15 9.75c0-2.6-1.4-3.8-3.26-3.8a2.8 2.8 0 00-2.55 1.4V5.6H6.5V15h2.7V9.9c0-1.24.24-2.44 1.77-2.44s1.35 1.41 1.35 2.52V15H15V9.75z" />
    </svg>
  )
}
