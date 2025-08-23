import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B10',
        foreground: '#E5E7EB',
        accent: {
          purple: '#7C3AED',
          blue: '#3B82F6',
        },
        card: '#1F1F23',
        border: '#2A2A30',
      },
      fontFamily: {
        serif: ['Noto Serif JP', 'Yu Mincho', '游明朝', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
      animation: {
        'drawer-open': 'drawer-open 0.18s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'drawer-close': 'drawer-close 0.18s cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      keyframes: {
        'drawer-open': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'drawer-close': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config