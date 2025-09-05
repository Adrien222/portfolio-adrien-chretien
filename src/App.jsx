import React, { useState, useCallback, useMemo } from 'react';
import { personalInfo, approachData, skillsData, projectsData } from './data/portfolioData';
import { useScrollReveal } from './hooks/useScrollReveal';

// Import des composants
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ApproachSection from './components/ApproachSection';
import SkillsSection from './components/SkillsSection';
import RealizationsSection from './components/RealizationsSection';
import ContactSection from './components/ContactSection';
import SEOHead from './components/SEOHead';

/**
 * App - Composant racine avec hook useScrollReveal et vraies données
 * - État global de l'application géré ici
 * - Hook personnalisé pour l'effet de dévoilement INVERSÉ (plus sombre en descendant)
 * - Props immutables descendues aux enfants
 * - Handlers optimisés avec useCallback
 */
function App() {
  
  // État global de l'application - section active
  const [appState, setAppState] = useState(() => ({
    activeSection: 'home'
  }));

  // Hook personnalisé pour l'effet de dévoilement
  // Paramètres ajustés pour effet marqué :
  // - 55% : le fond devient noir total à 55% de la page (juste avant les réalisations)
  // - true : easing doux pour transition fluide
  const overlayOpacity = useScrollReveal(55, true);

  // Handler principal pour le changement de section
  const handleSectionChange = useCallback((newSection) => {
    setAppState(prevState => ({
      ...prevState,
      activeSection: newSection
    }));
  }, []);

  // Handler pour le contact - CORRIGÉ
  const handleContactClick = useCallback(() => {
    setAppState(prevState => ({
      ...prevState,
      activeSection: 'contact'
    }));
    
    // Scroll vers section contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  // Handler pour "En savoir plus" - scroll vers Mon approche
  const handleLearnMoreClick = useCallback(() => {
    setAppState(prevState => ({
      ...prevState,
      activeSection: 'approche'
    }));
    
    // Scroll smooth vers la section approche
    document.getElementById('approche')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }, []);

  // Mémoisation des props du Header pour éviter les re-renders
  const headerProps = useMemo(() => ({
    activeSection: appState.activeSection,
    onSectionChange: handleSectionChange,
    onContactClick: handleContactClick
  }), [appState.activeSection, handleSectionChange, handleContactClick]);

  // Mémorisation des props de la section Hero
  const heroProps = useMemo(() => ({
    personalInfo,
    onLearnMoreClick: handleLearnMoreClick
  }), [handleLearnMoreClick]);

  // Mémorisation des props de la section Approche
  const approachProps = useMemo(() => ({
    approachData,
    isActive: appState.activeSection === 'approche'
  }), [appState.activeSection]);

  // Mémorisation des props de la section Skills
  const skillsProps = useMemo(() => ({
    skillsData,
    isActive: appState.activeSection === 'savoir-faire'
  }), [appState.activeSection]);

  // Mémorisation des props de la section Réalisations
  const realizationsProps = useMemo(() => ({
    realizationsData: projectsData,
    isActive: appState.activeSection === 'realisations'
  }), [appState.activeSection]);

  return (
      <div className="min-h-screen">
        
        {/* SEO DYNAMIQUE - Titre et meta-données changent selon la section */}
        <SEOHead activeSection={appState.activeSection} />
        
        {/* Overlay dynamique qui devient de plus en plus sombre au scroll */}
        <div 
          className="background-overlay"
          style={{ opacity: overlayOpacity }}
        />
        
        {/* Contenu principal au-dessus de l'overlay */}
        <div className="main-content">
          
          {/* Header - Navigation flottante */}
          <Header {...headerProps} />
          
          <main className="pt-8">
            
            {/* Section Hero avec photo et présentation */}
            <HeroSection {...heroProps} />
            
            {/* Section Mon approche avec contenu réel */}
            <ApproachSection {...approachProps} />
            
            {/* Section Mon savoir-faire avec cartes compétences */}
            <SkillsSection {...skillsProps} />
            
            {/* Section Mes réalisations avec cartes projets et animations */}
            <RealizationsSection {...realizationsProps} />

            {/* Section Contact avec formulaire fonctionnel */}
            <ContactSection />
            
          </main>
          
        </div>
      </div>
  );
}

export default App;