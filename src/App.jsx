import React, { useState, useCallback, useMemo } from 'react';
import { personalInfo } from './data/portfolioData';

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

  // Handler principal pour le changement de section
  // Immutable state update pattern
  const handleSectionChange = useCallback((newSection) => {
    setAppState(prevState => ({
      ...prevState, // Copie l'état précédent
      activeSection: newSection // Met à jour seulement ce qui change
    }));
  }, []);

  // Handler pour le contact
  const handleContactClick = useCallback(() => {
    setAppState(prevState => ({
      ...prevState,
      activeSection: 'contact'
    }));
    
    // Logique future : scroll vers section contact
    console.log('Contact clicked - Future: scroll to contact section');
  }, []);

  // Mémoisation des props du Header pour éviter les re-renders
  const headerProps = useMemo(() => ({
    activeSection: appState.activeSection,
    onSectionChange: handleSectionChange,
    onContactClick: handleContactClick
  }), [appState.activeSection, handleSectionChange, handleContactClick]);

  // Mémoisation du contenu hero pour correspondre à la maquette
  const heroContent = useMemo(() => ({
    title: personalInfo.name,
    subtitle: personalInfo.title,
    description: personalInfo.description
  }), []);

  return (
    <div className="min-h-screen bg-main-bg">
      
      {/* Header - Composant composé avec props immutables */}
      <Header {...headerProps} />
      
      <main className="pt-20">
        
        {/* Section Hero - Tailles ajustées pour correspondre à la maquette */}
        <section className="flex items-center justify-center min-h-screen container-portfolio">
          <div className="text-center">
            
            {/* Titre principal - Réduit pour correspondre à la maquette */}
            <h1 className="mb-6 text-6xl font-bold lg:text-7xl font-jost text-portfolio-text-primary">
              {heroContent.title}
            </h1>
            
            {/* Sous-titre - Taille réduite */}
            <p className="mb-4 text-3xl lg:text-4xl font-inter text-portfolio-text-secondary">
              {heroContent.subtitle}
            </p>
            
            {/* Description - Taille ajustée */}
            <p className="text-xl lg:text-2xl font-inter text-portfolio-text-secondary">
              {heroContent.description}
            </p>
            
          </div>
        </section>
        
        {/* Sections placeholder - Tailles ajustées */}
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