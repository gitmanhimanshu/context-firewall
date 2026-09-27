/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#040711',
        foreground: '#f3f4f6',
        panel: {
          DEFAULT: '#0a0f1d',
          card: '#0f172a',
          hover: '#131d35',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        brand: {
          blue: '#3b82f6',
          electric: '#2563eb',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          purple: '#a855f7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'stream': 'stream 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        stream: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '30%': { opacity: '0.8' },
          '70%': { opacity: '0.8' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        }
      },
      boxShadow: {
        'glow-blue': '0 0 40px -10px rgba(59, 130, 246, 0.4)',
        'glow-cyan': '0 0 40px -10px rgba(6, 182, 212, 0.35)',
        'glow-violet': '0 0 50px -10px rgba(139, 92, 246, 0.35)',
        'glow-firewall': '0 0 80px -15px rgba(59, 130, 246, 0.5), 0 0 120px -20px rgba(139, 92, 246, 0.35)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)",
      }
    },
  },
  plugins: [],
}
