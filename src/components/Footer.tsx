import React from 'react'
import { Shield } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#02050e] py-12 text-sm text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="font-mono font-bold tracking-wider text-white uppercase text-xs">
              Context<span className="text-cyan-400">Firewall</span>
            </span>
          </div>
          <p className="text-xs text-gray-500 font-normal">
            Better context for AI coding agents.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs font-mono text-gray-500">
          <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-cyan-400">
            Coming Soon
          </span>
          <span>© 2026 Context Firewall. All rights reserved.</span>
        </div>

      </div>
    </footer>
  )
}
