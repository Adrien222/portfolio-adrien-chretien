import React, { useState, useCallback, useMemo } from 'react';
import { personalInfo } from './data/portfolioData';
import { useScrollReveal } from './hooks/useScrollReveal'; // Import du hook

// Import du composant Header recomposé
import Header from './components/Header';

/**
 * App - Composant racine avec architecture React experte
 * - État global de l'application géré ici
 * - Props immutables descendues aux enfants
 * - Handlers optimisés avec useCallback
 * - Structure UI comme arbre de composants
 * - Rendu pur et prévisible
 */
function App() {
  
  // État global de l'application - section active
  const [appState, setAppState] = useState(() => ({
    activeSection: 'home'
  }));

  // Hook personnalisé pour l'effet de dévoilement
  // Paramètres : (pourcentage de dévoilement, easing doux)
  const overlayOpacity = useScrollReveal(100, true);

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
    
    console.log('Contact clicked - Future: scroll to contact section');
  }, []);

  // Mémoisation des props du Header
  const headerProps = useMemo(() => ({
    activeSection: appState.activeSection,
    onSectionChange: handleSectionChange,
    onContactClick: handleContactClick
  }), [appState.activeSection, handleSectionChange, handleContactClick]);

  // Mémoisation du contenu hero
  const heroContent = useMemo(() => ({
    title: personalInfo.name,
    subtitle: personalInfo.title,
    description: personalInfo.description
  }), []);

  return (
    <div className="min-h-screen">
      
      {/* Overlay dynamique - opacité gérée par le hook */}
      <div 
        className="background-overlay"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Contenu principal */}
      <div className="main-content">
        
        <Header {...headerProps} />
        
        <main className="pt-20">
          
          <section className="flex items-center justify-center min-h-screen container-portfolio">
            <div className="text-center">
              
            {/* Titre principal*/}
              <h1 className="mb-6 text-6xl font-bold lg:text-7xl font-jost text-portfolio-text-primary">
                {heroContent.title}
              </h1>
              
            {/* Sous-titre*/}
              <p className="mb-4 text-3xl lg:text-4xl font-inter text-portfolio-text-secondary">
                {heroContent.subtitle}
              </p>
              
            {/* Description */}
              <p className="text-xl lg:text-2xl font-inter text-portfolio-text-secondary">
                {heroContent.description}
              </p>
              
            </div>
          </section>
          
        {/* Sections placeholder */}
          <SectionPlaceholder 
            id="approche" 
            title="Mon approche"
            isActive={appState.activeSection === 'approche'}
          />
          
          <SectionPlaceholder 
            id="savoir-faire" 
            title="Mon savoir-faire"
            isActive={appState.activeSection === 'savoir-faire'}
          />
          
          <SectionPlaceholder 
            id="realisations" 
            title="Mes Réalisations"
            isActive={appState.activeSection === 'realisations'}
          />
          
        </main>
        
      </div>
    </div>
  );
}

/**
 * SectionPlaceholder - Composant pur pour les sections
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