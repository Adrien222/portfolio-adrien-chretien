import React, { useState, useEffect, useRef } from 'react';
import SkillCard from './SkillCard';

/**
 * SkillsSection - Section "Mon savoir-faire" avec 8 cartes flip
 * - Utilise les classes CSS existantes (.skill-card, .skills-grid)
 * - Animation d'entrée avec Intersection Observer
 * - Layout responsive : 1 colonne mobile, 2 tablet, 4 desktop
 * - Cartes flip avec animations au hover
 * - Section "Base de données" supprimée, PostgreSQL intégré dans Backend
 */
const SkillsSection = React.memo(({ skillsData, isActive }) => {
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Intersection Observer pour animation d'entrée
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -5% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="savoir-faire"
      className={`
        relative z-10 min-h-screen flex items-center
        pt-8 md:pt-16 lg:pt-24 pb-8 md:pb-16 lg:pb-20
        transform transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <div className="container-portfolio">
        <div className="max-w-6xl mx-auto">
          
          {/* Titre principal */}
          <h2 className={`
            text-3xl md:text-4xl lg:text-5xl font-jost font-bold 
            mb-8 md:mb-12 lg:mb-16 text-center
            transition-colors duration-300
            ${isActive ? 'text-portfolio-purple' : 'text-portfolio-text-primary'}
          `}>
            Mon savoir-faire
          </h2>
          
          <div className="w-full px-4 mx-auto max-w-7xl lg:px-6">
            
            {/* Frontend */}
            <div className="mb-16">
              <h3 className="skills-category-title">Frontend</h3>
              <div className="skills-cards-container">
                {skillsData
                  .filter(skill => skill.category === 'frontend')
                  .map((skill, index) => (
                    <SkillCard 
                      key={skill.id}
                      skill={skill}
                      index={index}
                      isVisible={isVisible}
                    />
                  ))}
              </div>
            </div>
            
            {/* Backend (inclut PostgreSQL) */}
            <div className="mb-16">
              <h3 className="skills-category-title">Backend</h3>
              <div className="skills-cards-container">
                {skillsData
                  .filter(skill => skill.category === 'backend' || skill.category === 'database')
                  .map((skill, index) => (
                    <SkillCard 
                      key={skill.id}
                      skill={skill}
                      index={index + 3}
                      isVisible={isVisible}
                    />
                  ))}
              </div>
            </div>
            
            {/* Outils & Méthodes */}
            <div className="mb-8">
              <h3 className="skills-category-title">Outils & Méthodes</h3>
              <div className="skills-cards-container">
                {skillsData
                  .filter(skill => skill.category === 'tools' || skill.category === 'methodology')
                  .map((skill, index) => (
                    <SkillCard 
                      key={skill.id}
                      skill={skill}
                      index={index + 6}
                      isVisible={isVisible}
                    />
                  ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;