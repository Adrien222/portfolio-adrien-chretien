import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
 * App - 
 * - Single Page Application avec animations fluides
 * - Scroll animations
 * - Expérience utilisateur
 */
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // État global de l'application - section active
  const [appState, setAppState] = useState(() => ({
    activeSection: 'home'
  }));

  // Hook personnalisé pour l'effet de dévoilement
  const overlayOpacity = useScrollReveal(55, true);

  // Déterminer la section active selon l'URL
  const getActiveSection = (pathname) => {
    switch(pathname) {
      case '/': return 'home';
      case '/approche': return 'approche';
      case '/savoir-faire': return 'savoir-faire';
      case '/realisations': return 'realisations';
      case '/contact': return 'contact';
      default: return 'home';
    }
  };

  // Synchroniser l'état avec l'URL
  useEffect(() => {
    const sectionFromUrl = getActiveSection(location.pathname);
    setAppState(prev => ({ ...prev, activeSection: sectionFromUrl }));
    
    // Scroll vers la section si l'URL change (navigation directe)
    if (sectionFromUrl !== 'home') {
      setTimeout(() => {
        const element = document.getElementById(sectionFromUrl);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.pathname]);

  // Handler principal pour le changement de section avec navigation fluide
  const handleSectionChange = useCallback((newSection) => {
    // Mettre à jour l'URL sans recharger
    navigate(`/${newSection === 'home' ? '' : newSection}`, { replace: false });
    
    // Mettre à jour l'état local
    setAppState(prevState => ({
      ...prevState,
      activeSection: newSection
    }));

    // Scroll fluide vers la section
    if (newSection === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(newSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [navigate]);

  // Handler pour le contact
  const handleContactClick = useCallback(() => {
    handleSectionChange('contact');
  }, [handleSectionChange]);

  // Handler pour "En savoir plus" - scroll vers Mon approche
  const handleLearnMoreClick = useCallback(() => {
    handleSectionChange('approche');
  }, [handleSectionChange]);

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
      
      {/* SEO DYNAMIQUE selon l'URL */}
      <SEOHead activeSection={appState.activeSection} />
      
      {/* Overlay dynamique qui devient de plus en plus sombre au scroll */}
      <div 
        className="background-overlay"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Contenu principal au-dessus de l'overlay */}
      <div className="main-content">
        
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