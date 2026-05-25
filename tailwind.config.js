/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        night: '#070812',
        card: 'rgba(255,255,255,0.07)',
        line: 'rgba(255,255,255,0.14)',
        pinkGlow: '#ff61d8',
        violetGlow: '#7c3cff',
        blueGlow: '#5bd7ff'
      },
      boxShadow: {
        glow: '0 0 55px rgba(255,97,216,0.25)',
        soft: '0 24px 70px rgba(0,0,0,0.32)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        orbit: 'orbit 18s linear infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' }
        },
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(255,97,216,0.2)' },
          '50%': { boxShadow: '0 0 70px rgba(91,215,255,0.35)' }
        }
      }
    }
  },
  plugins: []
};
