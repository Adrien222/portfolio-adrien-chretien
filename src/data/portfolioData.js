// src/data/portfolioData.js
/**
 * Configuration centralisée de toutes les données du portfolio
 * Structure immuable pour garantir la prévisibilité des composants
 */

// Navigation principale
export const navigationItems = Object.freeze([
  { id: 'approche', label: 'Mon approche', href: '#approche' },
  { id: 'savoir-faire', label: 'Mon savoir-faire', href: '#savoir-faire' },
  { id: 'realisations', label: 'Mes réalisations', href: '#realisations' }
]);

// Informations personnelles
export const personalInfo = Object.freeze({
  name: 'Adrien Chretien',
  title: 'Développeur Full-Stack Java & React',
  description: 'Spécialisé dans les applications web métier,',
  fullDescription: 'j’accompagne entreprises et startups avec 3 ans d’expérience pour concevoir des solutions performantes, évolutives et maintenables.',
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
    description: 'Java : 3 ans de Java au service du solide, du scalable et du zéro compromis qualité.',
    category: 'backend'
  },
  {
    id: 'react',
    name: 'React',
    description: 'React : Des UI claires, rapides et élégantes.',
    category: 'frontend'
  },
  {
    id: 'laravel',
    name: 'Laravel',
    version: '10+',
    description: 'Laravel : APIs robustes, livrées vite et bien.',
    category: 'backend'
  },
  {
    id: 'vaadin',
    name: 'Vaadin',
    version: '8+',
    description: 'Vaadin : la puissance Java pour des UIs métier fiables et complexes.',
    category: 'frontend'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    description: 'PostgreSQL : données sécurisées, performances garanties à grande échelle',
    category: 'database'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    description: 'Tailwind : design system précis, responsive et scalable.',
    category: 'frontend'
  },
  {
    id: 'git',
    name: 'Git',
    description: 'Git : contrôle, traçabilité, collaboration efficace',
    category: 'tools'
  },
  {
    id: 'agile',
    name: 'Méthodes agiles',
    description: 'Agile : livraisons rapides, feedback continu, valeur constante.',
    category: 'methodology'
  },
  {
  id: 'figma',
  name: 'Figma',
  description: 'Figma : idées concrètes en protos clairs, avant la première ligne de code.',
  category: 'tools'
  }
]);

// Projets du portfolio
export const projectsData = Object.freeze([
  {
    id: 'teleconsultation',
    title: 'Plateforme Téléconsultation',
    subtitle: 'Secteur Santé • Java/Vaadin',
    description: 'Mission : modernisation complète d\'une app santé en production',
    // Description détaillée pour le modal
    detailedDescription: 'Au cœur du premier GIP français dédié à la santé, j\'ai mené la transformation technique d\'une application critique utilisée quotidiennement par des professionnels de santé. Un défi technique et humain que j\'ai relevé avec brio.',
    technologies: ['Java EE', 'Vaadin 23', 'PostgreSQL', 'JPA', 'Maven', 'Hibernate'],
    duration: '3 ans',
    // Images pour le modal
    images: ['/images/medicam1.png'],
    details: {
      context: 'Mission stratégique au cœur du système de santé français',
      achievements: [
        '🚀 Migration technique réalisé : Vaadin V13 → V23, Java 8 → Java 11 sans casse',
        '📱 Interface patient from scratch : responsive agréable, adoption immédiate',
        '🎥 Intégration Jitsi sur-mesure : assistance vidéo fluide, gestion de présence intelligente',
        '💳 Refonte paiement complète : intégration Mangopay sécurisée et performante',
        '⚙️ Architecture DevOps robuste : pipeline Maven automatisé, config Nginx/WildFly optimale'
      ],
      impact: 'Une UX transformée et des performances accrues : la nouvelle version de l’app de téléconsultation a séduit les professionnels de santé et remplacé l’ancienne sans frein majeur.'
    }
  },
{
    id: 'club-nautique',
    title: 'Back-Office Club Nautique',
    subtitle: 'Secteur Sports • Laravel/Vue.js',
    description: 'Nouvelle solution sur mesure, taillée pour les besoins métier',
    detailedDescription: 'Glisse Sensation utilisait une solution développée par une agence, mais qui ne correspondait plus à leurs besoins. En tant que référent technique, j’ai mené une équipe de 4 pour concevoir une application sur mesure, parfaitement adaptée à leurs processus et à leur quotidien. Relation client fluide, qualité technique au rendez-vous.',
    technologies: ['Laravel 11', 'Vue.js', 'MySQL', 'Figma'],
    images: ['/images/glisse-sensation1.png', '/images/glisse-sensation2.png'],
    details: {
      context: 'Conception d’une solution métier sur mesure pour un club nautique innovant',
      achievements: [
        '🔍 Analyse métier détaillée : processus observés, besoins clarifiés',
        '🎨 Design UX/UI complet sur Figma : maquettes validées rapidement',
        '💻 Développement full-stack Laravel 11 + Vue.js : architecture robuste et évolutive',
        '🗄️ Base MySQL optimisée : gestion simple et performances accrues',
        '📱 Responsive by design : utilisation fluide sur tablette terrain et PC bureau'
      ],
      impact:'Un back-office sur mesure, parfaitement adapté aux processus internes et plus pertinent que la solution héritée de l’agence.'

  }

  },
  {
    id: 'portfolio',
    title: 'Ce Portfolio !',
    subtitle: 'Personnel • React/Tailwind',
    description: 'Un projet personnel pour explorer React en profondeur et soigner chaque détail UI/UX.',
    detailedDescription: 'Ce portfolio a été conçu comme un terrain d’apprentissage et de démonstration. J’y ai travaillé la réflexion maquettage sur Figma, la transposition en code avec Tailwind, les animations et l’optimisation responsive. L’objectif : produire une vitrine technique claire, performante et adaptée à tous les supports.',
    technologies: ['React 18', 'Tailwind CSS', 'Vite', 'EmailJS'],
    images: ['/images/maquette-portfolio.png', '/images/responsive-portfolio.png'],
    details: {
      context: 'Vitrine technique développée pour progresser en React et approfondir mes pratiques UI/UX',
      achievements: [
        '🎨 Conception et maquettage sur Figma, transposés fidèlement en Tailwind',
        '⚛️ Composants React modulaires : animations fluides et interactions soignées',
        '📱 Responsive design : expérience fluide sur mobile, tablette et desktop',
      ],
      impact: 'Un projet personnel formateur qui illustre ma maîtrise du cycle complet : de la maquette au code, en passant par le responsive et l’optimisation des performances.'
    }
  }
]);

// Section Contact
export const contactData = Object.freeze({
  title: 'Parlons de votre projet',
  subtitle: 'Un défi technique ? Échangeons !',
  placeholders: {
    name: "Votre nom ou celui de votre entreprise",
    email: "votre.email@entreprise.com", 
    message: "Décrivez-moi votre défi : objectifs, délais, contraintes techniques..."
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
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,    
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
    success: 'Message reçu ! Je reviens vers vous très vite avec du concret.',
    error: 'Oups, un bug ! Réessayez ou contactez-moi directement.',
    networkError: 'Problème de réseau. Vérifiez votre connexion et on repart !',
    validationError: 'Quelques détails manquent pour que je puisse vous aider au mieux.'
  }
});

// Section "Mon approche" 
export const approachData = Object.freeze({
  title: 'Mon approche',
  content: [
    {
      type: 'paragraph',
      text: 'Tout projet commence par une analyse métier précise, qui me permet de construire un cahier des charges clair et partagé. Grâce à mon expérience, j’interviens aussi bien sur des applications existantes (**Java EE**, **Vaadin**, **PostgreSQL**) que sur des projets modernes (**React**, **Tailwind CSS**).'
    },
    {
      type: 'paragraph', 
      text: 'J’applique les méthodes **agiles** avec des cycles courts et des livraisons régulières, pour garder un maximum de visibilité et d’adaptabilité. Que ce soit pour une migration sensible ou un développement from scratch, je privilégie un code maintenable, performant et aligné sur les bonnes pratiques.'
    },
    {
      type: 'paragraph',
      text: 'Mon terrain de jeu : les **applications métier critiques** et la **modernisation de systèmes existants**. Je conçois des solutions fiables, pensées pour durer.'
    }
  ],
  figmaNote: 'Je maîtrise également **Figma**, utile pour concevoir et prototyper des interfaces avant le développement.'
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