/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      
      colors: {
        'portfolio-purple': '#BD5EDA',
        'portfolio-purple-dark': '#603770',
        'portfolio-section-bg': '#2C1438',
        'portfolio-text-primary': '#FFFFFF',
        'portfolio-text-secondary': '#D2D2D2',
        'portfolio-card-bg': '#000000',
        'portfolio-border': '#000000',
      },
      
      spacing: {
        'card-gap': '80px',
        'card-padding': '44px', 
        'section-gap': '60px',
      },
      
      width: {
        'skill-card': '301px',
        'form-field': '618px',
      },
      
      height: {
        'skill-card': '193px',
        'form-field': '116px',
      },
      
      animation: {
        'card-flip': 'cardFlip 0.6s ease-in-out',
        'card-hover': 'cardHover 0.3s ease-out',
      },
      
      keyframes: {
        cardFlip: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(-90deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        cardHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}