/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontSize: {
      sm: ['16px', '26px'],
      base: ['18px', '28px'],
      md: ['20px', '34px'],
      lg: ['32px', '40px'],
      xl: ['40px', '48px'],
      '2xl': ['48px', '48px'],
      '3xl': ['64px', '64px'],
      '4xl': ['88px', '88px'],
      btn: ['18px', '32px'],
      price: ['65px', '52px'],
    },
    fontFamily: {
      sans: ['IBM Plex Sans ', 'sans-serif'],
    },
    extend: {
      colors: {
        'clr-cyan': '#66E2DC',
        'clr-orange': '#FA7453',
        'clr-yellow': '#FFB964',
        'clr-white': '#FCFAF9',
        'clr-black': '#191826',
      },
      backgroundImage: {
        'main-mobile': "url('/bg-main-mobile.png')",
        'main-tablet': "url('/bg-main-tablet.png')",
        'main-desktop': "url('/bg-main-desktop.png')",
        'pattern-1': "url('/bg-pattern-1.svg')",
        'pattern-2': "url('/bg-pattern-2.svg')",
        illustration: "url('/illustration-app.png')",
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
