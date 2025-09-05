import React, { memo } from 'react';
import Button from './Button';
import OptimizedImage from './OptimizedImage';

/**
 * HeroSection - Section hero principale avec photo et présentation
 * Utilise les vraies données du portfolioData
 */
const HeroSection = memo(({ 
  personalInfo,
  onLearnMoreClick,
  className = ''
}) => {

  const handleLearnMore = () => {
    // Scroll vers la section "Mon approche"
    const target = document.getElementById('approche');
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Notifier le parent du changement de section
    if (onLearnMoreClick) {
      onLearnMoreClick();
    }
  };

  // Combinaison de description + fullDescription pour le texte complet
  const fullText = `${personalInfo.description} ${personalInfo.fullDescription}`;

  return (
    <section 
      id="home"
      className={`hero-section container-portfolio ${className}`}
    >
      <div className="hero-container">
        
        {/* Photo de profil avec bordure dégradée */}
        <div>
          <OptimizedImage 
            src="/images/pp.jpg"
            alt={`Photo de profil de ${personalInfo.name}`}
            className="hero-profile-image"
            loading="eager"
          />
        </div>
        
        {/* Contenu textuel */}
        <div className="hero-content">
          
          {/* Nom principal */}
          <h1 className="hero-title">
            {personalInfo.name}
          </h1>
          
          {/* Titre/Spécialité en violet */}
          <h1 className="hero-subtitle">
            {personalInfo.title}
          </h1>
          
          {/* Description complète */}
          <p className="hero-description">
            {fullText}
          </p>
          
          {/* Bouton d'action */}
          <div className="hero-cta">
            <Button
              variant="outline"
              size="medium"
              onClick={handleLearnMore}
            >
              En savoir plus
            </Button>
          </div>
          
        </div>
        
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;