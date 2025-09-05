import { useEffect } from 'react';

/**
 * Composant SEOHead avec solution native pour React 19
 */
const SEOHead = ({ activeSection = 'home' }) => {
  
  // Configuration SEO par section
  const seoConfig = {
    home: {
      title: "Adrien Chrétien - Développeur Full-Stack Java EE & React",
      description: "Adrien Chrétien, développeur Full-Stack avec 3 ans d'expérience. Spécialisé Java EE, React, Vaadin et PostgreSQL. Applications métier robustes de l'analyse à la production.",
      keywords: "Adrien Chrétien, développeur full-stack, Java EE, React, Vaadin, PostgreSQL"
    },
    approche: {
      title: "Mon Approche - Adrien Chrétien",
      description: "Découvrez l'approche d'Adrien Chrétien : analyse métier, cahier des charges détaillé, méthodes agiles et livraisons itératives pour vos projets.",
      keywords: "approche développement, méthodes agiles, analyse métier, Adrien Chrétien"
    },
    'savoir-faire': {
      title: "Mon Savoir-Faire - Adrien Chrétien",
      description: "Compétences techniques d'Adrien Chrétien : Java EE, React, Vaadin, PostgreSQL, Laravel, Tailwind CSS. Applications métier et solutions modernes.",
      keywords: "compétences Java EE, React, Vaadin, PostgreSQL, développeur full-stack"
    },
    realisations: {
      title: "Mes Réalisations - Adrien Chrétien",
      description: "Portfolio des projets d'Adrien Chrétien : téléconsultation santé, back-office club nautique, applications métier Java EE et React.",
      keywords: "portfolio projets, téléconsultation, applications métier, Java EE React"
    },
    contact: {
      title: "Contact - Adrien Chrétien",
      description: "Contactez Adrien Chrétien, développeur Full-Stack basé à Beauvais. Disponible pour vos projets Java EE, React et applications métier.",
      keywords: "contact développeur, Adrien Chrétien Beauvais, développeur freelance"
    }
  };

  // Récupération config pour section active
  const currentSeo = seoConfig[activeSection] || seoConfig.home;

  // Mise à jour directe du DOM
  useEffect(() => {
    // Mise à jour du titre
    document.title = currentSeo.title;
    
    // Mise à jour meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentSeo.description);
    }
    
    // Mise à jour meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', currentSeo.keywords);
    }
    
    // Mise à jour Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', currentSeo.title);
    }
    
    // Mise à jour Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', currentSeo.description);
    }
    
    // Mise à jour Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', currentSeo.title);
    }
    
    // Mise à jour Twitter description
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', currentSeo.description.substring(0, 200));
    }
    
  }, [currentSeo, activeSection]);

  // Pour moi, ce composant ne rend rien, il modifie juste le DOM
  return null;
};

export default SEOHead;