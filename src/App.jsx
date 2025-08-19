import React, { useState, useCallback, useMemo } from 'react';
import { personalInfo, approachData, skillsData, projectsData } from './data/portfolioData';
import { useScrollReveal } from './hooks/useScrollReveal';

// Import des composants
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ApproachSection from './components/ApproachSection';
import SkillsSection from './components/SkillsSection';
import RealizationsSection from './components/RealizationsSection';

/**
 * App - Composant racine avec hook useScrollReveal et vraies données
 * - État global de l'application géré ici
 * - Hook personnalisé pour l'effet de dévoilement
 * - Props immutables descendues aux enfants
 * - Handlers optimisés avec useCallback
 */
function App() {
  
  // État global de l'application - section active
  const [appState, setAppState] = useState(() => ({
    activeSection: 'home'
  }));

  // Hook personnalisé pour l'effet de dévoilement (70% de scroll avec easing)
  const overlayOpacity = useScrollReveal(70, true);

  // Handler principal pour le changement de section
  const handleSectionChange = useCallback((newSection) => {
    setAppState(prevState => ({
      ...prevState,
      activeSection: newSection
    }));
  }, []);

  // Handler pour le contact
  const handleContactClick = useCallback(() => {
    setAppState(prevState => ({
      ...prevState,
      activeSection: 'contact'
    }));
    
    // Future : scroll vers section contact
    console.log('Contact clicked - Future: scroll to contact section');
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
      
      {/* Overlay dynamique qui se révèle au scroll */}
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
          
           {/* Section Mes réalisations avec cartes projets */}
          <RealizationsSection {...realizationsProps}/>
          
        </main>
        
      </div>
    </div>
  );
}

/**
 * SectionPlaceholder - Composant pur pour les sections à venir
 * Props immutables, rendu conditionnel
 */
const SectionPlaceholder = React.memo(({ id, title, isActive }) => {
  return (
    <section 
      id={id}
      className="flex items-center justify-center min-h-screen section-spacing"
    >
      <h2 className={`
        text-4xl lg:text-5xl font-jost font-bold transition-colors duration-300
        ${isActive ? 'text-portfolio-purple' : 'text-portfolio-text-primary'}
      `}>
        {title}
      </h2>
    </section>
  );
});

SectionPlaceholder.displayName = 'SectionPlaceholder';

export default App;