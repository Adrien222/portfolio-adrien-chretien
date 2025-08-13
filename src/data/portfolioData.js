// src/data/portfolioData.js
/**
 * Configuration centralisée de toutes les données du portfolio
 * Structure immuable pour garantir la prévisibilité des composants
 */

// Navigation principale
export const navigationItems = Object.freeze([
  { id: 'approche', label: 'Mon approche', href: '#approche' },
  { id: 'savoir-faire', label: 'Mon savoir-faire', href: '#savoir-faire' },
  { id: 'realisations', label: 'Mes Réalisations', href: '#realisations' }
]);

// Informations personnelles
export const personalInfo = Object.freeze({
  name: 'Adrien Chretien',
  title: 'Développeur Full-Stack Java EE & React',
  description: '3 ans d\'expérience en applications métier.',
  fullDescription: 'Je développe des solutions robustes, de l\'analyse des besoins à la mise en production.',
  location: 'Beauvais, France',
  email: 'adrienchretien2002@gmail.com',
  linkedin: 'https://linkedin.com/in/adrien-chretien-b0408a223',
  malt: 'https://malt.fr/profile/adrienchretiendeveloppementlogiciel',
  github: 'https://github.com/Adrien222'
});

// Compétences techniques avec descriptions pour les cartes flip
export const skillsData = Object.freeze([
  {
    id: 'java',
    name: 'Java',
    version: '8+',
    description: 'Développement backend robuste avec 3 ans d\'expérience',
    category: 'backend'
  },
  {
    id: 'react',
    name: 'React',
    description: 'Interfaces modernes et performantes',
    category: 'frontend'
  },
  {
    id: 'laravel',
    name: 'Laravel',
    version: '10+',
    description: 'Framework PHP pour développement rapide',
    category: 'backend'
  },
  {
    id: 'vaadin',
    name: 'Vaadin',
    version: '8+',
    description: 'Applications web d\'entreprise avec Java',
    category: 'frontend'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    description: 'Base de données relationnelle pour applications critiques',
    category: 'database'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    description: 'Design system moderne pour interfaces responsive',
    category: 'frontend'
  },
  {
    id: 'git',
    name: 'Git',
    description: 'Code tracé et sauvegardé pour une maintenance simplifiée',
    category: 'tools'
  },
  {
    id: 'agile',
    name: 'Méthodes agiles',
    description: 'Livraisons itératives avec feedback client continu',
    category: 'methodology'
  }
]);

// Projets du portfolio
export const projectsData = Object.freeze([
  {
    id: 'teleconsultation',
    title: 'Plateforme Téléconsultation',
    subtitle: 'Secteur Santé • Java/Vaadin',
    description: 'Refonte complète d\'une application multi-support de téléconsultation',
    technologies: ['Java EE', 'Vaadin 23', 'PostgreSQL', 'JPA', 'Maven', 'Hibernate'],
    duration: '3 ans',
    details: {
      context: 'Mission stratégique au sein du premier GIP français dédié à la santé',
      achievements: [
        'Migration Vaadin V13 → V23 et Java 8 → Java 11',
        'Développement interface patient optimisée mobile/tablette',
        'Intégration technique avancée Jitsi pour assistance vidéo',
        'Refonte processus de paiement avec API Mangopay'
      ],
      impact: 'Application critique utilisée par des professionnels de santé en production'
    }
  },
  {
    id: 'club-nautique',
    title: 'Back-Office Club Nautique',
    subtitle: 'Secteur Sports • Laravel/Vue.js',
    description: 'Digitalisation des processus métier d\'une association de sport nautique',
    technologies: ['Laravel 11', 'Vue.js', 'MySQL', 'Figma'],
    duration: '6 mois',
    details: {
      context: 'Création complète d\'une plateforme de gestion pour Glisse Sensation',
      achievements: [
        'Analyse métier approfondie et rédaction cahier des charges',
        'Conception UX/UI complète via Figma',
        'Architecture MVC robuste et évolutive',
        'Interface responsive native tablette/PC'
      ],
      impact: 'Digitalisation complète des processus manuels du club'
    }
  },
  {
    id: 'portfolio',
    title: 'Mon Portfolio',
    subtitle: 'Personnel • React/Tailwind',
    description: 'Ce projet m\'a pris (beaucoup) plus de temps que prévu !',
    technologies: ['React 18', 'Tailwind CSS', 'Vite', 'EmailJS'],
    duration: 'En cours',
    details: {
      context: 'Portfolio personnel développé during transition vers React',
      achievements: [
        'Configuration Tailwind personnalisée basée sur design Figma',
        'Composants React avec animations fluides',
        'Architecture modulaire et maintenable',
        'Optimisation performance et accessibilité'
      ],
      impact: 'Vitrine technique démontrant ma polyvalence frontend/backend'
    }
  }
]);

// Configuration du formulaire de contact
export const contactConfig = Object.freeze({
  emailjs: {
    serviceId: 'your_service_id',
    templateId: 'your_template_id',
    publicKey: 'your_public_key'
  },
  fields: [
    { id: 'name', label: 'Nom', type: 'text', required: true },
    { id: 'email', label: 'Email', type: 'email', required: true },
    { id: 'message', label: 'Message', type: 'textarea', required: true }
  ]
});

// Section "Mon approche" 
export const approachData = Object.freeze({
  title: 'Mon approche',
  content: [
    {
      type: 'paragraph',
      text: 'Je commence par une **analyse métier** approfondie pour produire un **cahier des charges** détaillé. Ma **double expertise** me permet d\'intervenir sur vos **applications d\'entreprise existantes** (**Java EE**, **Vaadin**, **PostgreSQL**) ou de créer des **solutions modernes** avec **React** et **Tailwind CSS**.'
    },
    {
      type: 'paragraph', 
      text: 'J\'applique les **méthodes agiles** avec des **livraisons itératives** pour garantir votre satisfaction. Que ce soit pour une **migration technologique** ou un **développement from scratch**, je produis un **code maintenable** respectant les **design patterns**.'
    },
    {
      type: 'paragraph',
      text: 'Spécialisé dans les **applications métier robustes** et la **modernisation** de systèmes existants.'
    }
  ],
  figmaNote: 'Je maîtrise également Figma, ça peut être utile pour designer vos nouvelles interfaces (je l\'ai mis là : plus de place pour respecter mon design !)'
});

// Configuration des animations et interactions
export const animationConfig = Object.freeze({
  transitions: {
    fast: 'transition-all duration-200',
    normal: 'transition-all duration-300', 
    slow: 'transition-all duration-500',
    flip: 'transition-all duration-600'
  },
  hover: {
    scale: 'hover:scale-105',
    glow: 'hover:shadow-lg hover:shadow-portfolio-purple/20'
  }
});