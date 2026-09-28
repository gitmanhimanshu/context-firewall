import React from 'react'
import { Shield, ExternalLink, Mail } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#02050e] py-14 text-sm text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <Shield className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-mono font-bold tracking-wider text-white uppercase text-sm">
                Context<span className="text-cyan-400">Firewall</span>
              </span>
            </div>
            
            <p className="text-xs text-gray-400 font-normal leading-relaxed max-w-sm">
              The intelligent pre-prompt context firewall for AI coding agents. Intercepts, strips hallucinations, and cuts LLM API token costs by ~90%.
            </p>

            {/* Author / Manager & Developer Spotlight (Same as Setu) */}
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                Developer & Manager
              </p>
              <p className="text-sm font-semibold text-white mt-0.5">
                Himanshu Yadav
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Built and maintained by Himanshu Yadav. Part of the AI developer infrastructure alongside Setu.
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <a
                  href="https://github.com/gitmanhimanshu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-gray-300 hover:text-white hover:border-cyan-400/40 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/himanshu-yadav-5ba28921b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-gray-300 hover:text-white hover:border-cyan-400/40 transition-colors"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:himanshuyada70@gmail.com"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-gray-300 hover:text-white hover:border-cyan-400/40 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Open Source Engine
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://github.com/gitmanhimanshu/jev-context-firewall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-mono transition-colors"
                >
                  <span>jev-context-firewall (GitHub)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#open-source" className="text-gray-400 hover:text-white transition-colors">
                  Proxy Architecture
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  OpenJev 6D Scorer
                </a>
              </li>
              <li>
                <a
                  href="http://127.0.0.1:8192/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Local Telemetry (:8192/dashboard)
                </a>
              </li>
            </ul>
          </div>

          {/* Ecosystem Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Ecosystem & Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://setu.mimamsa.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Setu — Model Context Protocol (MCP)</span>
                  <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gitmanhimanshu/Email_automation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Email_automation (Setu Engine)</span>
                  <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              </li>
              <li>
                <a href="#product" className="text-gray-400 hover:text-white transition-colors">
                  Overview & Product
                </a>
              </li>
              <li>
                <a href="#why-it-matters" className="text-gray-400 hover:text-white transition-colors">
                  Cost & Performance Impact
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-cyan-400">
              COMING SOON
            </span>
            <span>© 2026 Context Firewall. Engineered by Himanshu Yadav.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/gitmanhimanshu/jev-context-firewall"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub Repo
            </a>
            <span>·</span>
            <a
              href="https://context-firewall.vercel.app/"
              className="hover:text-white transition-colors"
            >
              context-firewall.vercel.app
            </a>
          </div>
        </div>

      </div>
    </footer>
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
