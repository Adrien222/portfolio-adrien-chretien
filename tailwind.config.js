/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Configuration de vos polices personnalisées
      fontFamily: {
        'jost': ['Jost', 'sans-serif'], // Pour les titres
        'inter': ['Inter', 'sans-serif'], // Pour le contenu
      },
      
      // Votre palette de couleurs extraite de Figma
      colors: {
        // Couleurs principales de votre identité
        'portfolio-purple': '#BD5EDA',
        'portfolio-purple-dark': '#603770',
        'portfolio-section-bg': '#2C1438',
        
        // Couleurs de texte
        'portfolio-text-primary': '#FFFFFF',
        'portfolio-text-secondary': '#D2D2D2',
        
        // Couleurs de fond
        'portfolio-card-bg': '#000000',
        'portfolio-border': '#000000',
        'portfolio-button-light': '#F5F5ED',
      },
      
      // Configuration des tailles de texte basées sur vos spécifications Figma
      fontSize: {
        'hero-title': ['64px', { lineHeight: '1.1', fontWeight: '700' }], // Votre nom
        'hero-subtitle': ['40px', { lineHeight: '1.2', fontWeight: '400', fontStyle: 'italic' }], // Sous-titre
        'section-title': ['64px', { lineHeight: '1.1', fontWeight: '700' }], // Titres de sections
        'body-large': ['24px', { lineHeight: '1.5', fontWeight: '400' }], // Paragraphes normaux
        'card-title': ['24px', { lineHeight: '1.3', fontWeight: '600' }], // Titres de cartes projets
        'card-content': ['16px', { lineHeight: '1.4', fontWeight: '400' }], // Contenu des cartes
      },
      
      // Espacements personnalisés basés sur votre grille Figma
      spacing: {
        'card-gap': '106px', // Espacement entre les cartes
        'card-padding': '44px', // Padding interne des cartes (moyenne de votre estimation)
        'section-gap': '80px', // Espacement entre sections (ajusté pour le web)
      },
      
      // Dimensions personnalisées pour vos cartes
      width: {
        'skill-card': '301px',
        'form-field': '618px',
        'content-max': '1754px',
      },
      
      height: {
        'skill-card': '193px',
        'form-field': '116px',
        'form-textarea': '198px',
      },
      
      // Dégradés personnalisés basés sur vos spécifications Figma
      backgroundImage: {
        // Dégradé du bouton "Me contacter" (gauche vers droite)
        'btn-primary': 'linear-gradient(to right, #603770, #BD5EDA)',
        
        // Dégradé des cartes de compétences (haut vers bas)
        'skill-card': 'linear-gradient(to bottom, #BD5EDA 50%, #2C1438 100%)',
        
        // Dégradé des bordures de cartes (haut vers bas)
        'card-border': 'linear-gradient(to bottom, #BD5EDA 50%, #000000 50%)',
        
        // Dégradé du bouton "En savoir plus" (bordure seulement)
        'btn-outline': 'linear-gradient(to bottom, #BD5EDA, #F5F5ED)',
        
        // Dégradé du fond principal (basé sur votre capture d'écran)
        'main-bg': 'linear-gradient(135deg, #000000 0%, #2C1438 82%, #000000 100%)',
        
        // Dégradé pour les bordures des champs de formulaire
        'form-border': 'linear-gradient(to bottom, #BD5EDA 74%, #000000 100%)',
      },
      
      // Animations personnalisées pour vos effets interactifs
      animation: {
        'card-flip': 'cardFlip 0.6s ease-in-out',
        'card-hover': 'cardHover 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      
      // Définition des keyframes pour vos animations
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
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      
      // Configuration pour le coin coupé de vos cartes
      clipPath: {
        'card-corner': 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)',
      },
    },
  },
  plugins: [],
}