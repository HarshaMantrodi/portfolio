/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
        display: ['var(--font-syne)', 'Syne', 'sans-serif'],
      },
      colors: {
        // Core palette — inspired by Linear/Vercel
        bg: {
          DEFAULT: '#080A0F',
          secondary: '#0D1117',
          tertiary: '#161B22',
          elevated: '#1C2128',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          strong: 'rgba(255,255,255,0.12)',
          accent: 'rgba(99,102,241,0.35)',
        },
        text: {
          primary: '#F0F6FC',
          secondary: '#8B949E',
          tertiary: '#484F58',
          accent: '#6366F1',
        },
        accent: {
          purple: '#6366F1',
          'purple-light': '#818CF8',
          'purple-dim': 'rgba(99,102,241,0.12)',
          blue: '#3B82F6',
          cyan: '#06B6D4',
          green: '#10B981',
          amber: '#F59E0B',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.15), transparent)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        scan: {
          '0%': { top: '-2px' },
          '100%': { top: '100vh' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'glow': '0 0 40px rgba(99,102,241,0.15)',
        'glow-strong': '0 0 60px rgba(99,102,241,0.25)',
        'card': '0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 1px 0 rgba(255,255,255,0.1), 0 8px 40px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}
