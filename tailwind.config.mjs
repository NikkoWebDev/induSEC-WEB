/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        accent: '#2997ff',
        'text-main': '#f5f5f7',
        'text-dim': '#86868b',
        glass: 'rgba(255, 255, 255, 0.03)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'wa-bg': '#25d366',
        status: '#10b981',
      },
      fontFamily: {
        body: ['Sora', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      borderRadius: {
        pill: '100px',
        '2xl': '20px',
        '3xl': '30px',
        '4xl': '40px',
      },
      keyframes: {
        heroFadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        floatPulse: {
          '0%, 100%': { boxShadow: '0 10px 25px rgba(37, 211, 102, 0.3)' },
          '50%': { boxShadow: '0 10px 35px rgba(37, 211, 102, 0.5)' },
        },
      },
      animation: {
        'hero-fade-up': 'heroFadeUp 0.8s ease forwards',
        'pulse-dot': 'pulseDot 2s infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'float-pulse': 'floatPulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
