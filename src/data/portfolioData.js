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
  },
  {
  id: 'figma',
  name: 'Figma',
  description: 'Design d\'interfaces et prototypage pour des expériences utilisateur optimales',
  category: 'tools'
  }
]);

// Projets du portfolio
export const projectsData = Object.freeze([
  {
    id: 'teleconsultation',
    title: 'Plateforme Téléconsultation',
    subtitle: 'Secteur Santé • Java/Vaadin',
    description: 'Refonte complète d\'une application multi-support de téléconsultation',
    // Description détaillée pour le modal
    detailedDescription: 'Mission stratégique au sein du premier Groupement d\'Intérêt Public français dédié au secteur de la santé. Modernisation technique et fonctionnelle complète d\'une application critique utilisée par des professionnels de santé en production.',
    technologies: ['Java EE', 'Vaadin 23', 'PostgreSQL', 'JPA', 'Maven', 'Hibernate'],
    duration: '3 ans',
    // Images pour le modal
    images: ['/src/assets/medicam1.png'],
    details: {
      context: 'Mission stratégique au sein du premier GIP français dédié à la santé',
      achievements: [
        'Migration technologique complète : Vaadin V13 → V23, Java 8 → Java 11',
        'Développement interface patient complète avec optimisation mobile/tablette',
        'Intégration technique avancée Jitsi : solution d\'assistance vidéo custom, gestion de présence intelligente',
        'Refonte du processus de paiement avec intégration API Mangopay',
        'Architecture DevOps complète : automatisation Maven, configuration Nginx/WildFly'
      ],
      impact: 'Amélioration significative des performances et de l\'ergonomie utilisateur. Fidélité parfaite aux maquettes design pour une expérience utilisateur cohérente.'
    }
  },
  {
    id: 'club-nautique',
    title: 'Back-Office Club Nautique',
    subtitle: 'Secteur Sports • Laravel/Vue.js',
    description: 'Digitalisation des processus métier d\'une association de sport nautique',
    detailedDescription: 'Création complète d\'une plateforme de gestion digitale pour Glisse Sensation, club de sports nautiques innovant. Projet mené en équipe de 4 personnes selon la méthode en V, avec relation client privilégiée en tant que référent technique principal.',
    technologies: ['Laravel 11', 'Vue.js', 'MySQL', 'Figma'],
    duration: '6 mois',
    images: ['/src/assets/glisse-sensation1.png', '/src/assets/glisse-sensation2.png'],
    details: {
      context: 'Création complète d\'une plateforme de gestion pour Glisse Sensation',
      achievements: [
        'Analyse métier approfondie : rédaction d\'un cahier des charges complet après étude des processus existants',
        'Conception UX/UI complète via Figma : maquettes fonctionnelles validées avec le client',
        'Développement full-stack avec Laravel 11 et Vue.js, architecture MVC robuste et évolutive',
        'Base de données MySQL optimisée avec gestion via PhpMyAdmin',
        'Interface responsive native : adaptation parfaite tablette et PC pour usage terrain/bureau'
      ],
      impact: 'Digitalisation complète des processus manuels du club. Interface intuitive permettant une adoption rapide par l\'équipe pédagogique.'
    }
  },
  {
    id: 'portfolio',
    title: 'Mon Portfolio',
    subtitle: 'Personnel • React/Tailwind',
    description: 'Ce projet m\'a pris (beaucoup) plus de temps que prévu !',
    detailedDescription: 'Portfolio personnel développé pendant ma transition vers React. Projet from scratch avec design Figma personnalisé, mettant l\'accent sur les performances et l\'expérience utilisateur moderne.',
    technologies: ['React 18', 'Tailwind CSS', 'Vite', 'EmailJS'],
    duration: 'En cours',
    images: ['/src/assets/maquette-portfolio.png', '/src/assets/responsive-portfolio.png'],
    details: {
      context: 'Portfolio personnel développé pendant transition vers React',
      achievements: [
        'Configuration Tailwind personnalisée basée sur design Figma complet',
        'Composants React modulaires avec animations fluides et effects hover',
        'Architecture clean et maintenable respectant les bonnes pratiques',
        'Optimisation performance et accessibilité (lighthouse score > 90%)',
        'Système de routage et navigation smooth entre sections'
      ],
      impact: 'Vitrine technique démontrant ma polyvalence frontend/backend et ma capacité à créer des interfaces modernes et engageantes.'
    }
  }
]);

// Section Contact
export const contactData = Object.freeze({
  title: 'Parlons de votre projet',
  subtitle: 'Un projet en tête ? Parlons-en !',
  placeholders: {
    name: "Votre nom ou celui de votre entreprise",
    email: "votre.email@entreprise.com", 
    message: "Décrivez-moi votre projet : objectifs, délais, technologies souhaitées... Plus vous serez précis, mieux je pourrai vous aider !"
  },
  footer: {
    copyright: '© 2025 {name}. All Rights Reserved.',
    socialText: 'Retrouvez moi également sur :',
    socialLinks: [
      { name: 'LinkedIn', key: 'linkedin' },
      { name: 'Malt', key: 'malt' },
      { name: 'Github', key: 'github' }
    ]
  }
});

// Configuration du formulaire de contact
// Configuration du formulaire de contact avec EmailJS
export const contactConfig = Object.freeze({
  emailjs: {
    serviceId: 'service_2bnlcvq',     // À remplacer par ton Service ID
    templateId: 'template_6tuepv3',   // À remplacer par ton Template ID  
    publicKey: 'l1Gg0HmaR-G4BSTCx'     // À remplacer par ta Public Key
  },
  fields: [
    { id: 'name', label: 'Nom', type: 'text', required: true },
    { id: 'email', label: 'Email', type: 'email', required: true },
    { id: 'message', label: 'Message', type: 'textarea', required: true }
  ],
  validation: {
    email: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Veuillez entrer un email valide'
    },
    message: {
      minLength: 10,
      message: 'Le message doit contenir au moins 10 caractères'
    }
  },
  messages: {
    sending: 'Envoi en cours...',
    success: 'Message envoyé avec succès ! Je vous répondrai rapidement.',
    error: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.',
    networkError: 'Problème de connexion. Vérifiez votre connexion internet.',
    validationError: 'Veuillez corriger les erreurs avant d\'envoyer.'
  }
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