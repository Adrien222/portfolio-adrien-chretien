import React, { useMemo, useState, useEffect, useRef } from 'react';

/**
 * ApproachSection - Section "Mon approche" avec texte formaté et animations
 * - Parse le texte avec **bold** et le convertit en JSX avec <strong>
 * - Animation d'entrée stable avec Intersection Observer
 * - Z-index correct pour éviter les conflits avec l'overlay de fond
 */
const ApproachSection = React.memo(({ approachData, isActive }) => {
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Intersection Observer pour animation d'entrée stable
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Garde l'animation une fois déclenchée
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Se déclenche tôt
        rootMargin: '0px 0px -5% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  // Parser le texte avec **bold** en JSX avec <strong>
  const parseTextWithBold = useMemo(() => (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2);
        return (
          <strong key={index} className="text-approach-bold">
            {boldText}
          </strong>
        );
      }
      return part;
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="approche"
      className={`
        min-h-screen flex items-center
        transform transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      {/* Container principal avec largeur max cohérente */}
      <div className="container-portfolio">
          
          {/* Titre de la section */}
          <h2 className={`
            text-4xl md:text-4xl lg:text-5xl font-jost font-bold 
            mb-6 md:mb-8 lg:mb-12 text-left
            transition-colors duration-300
            ${isActive ? 'text-portfolio-purple' : 'text-portfolio-text-primary'}
          `}>
            {approachData.title}
          </h2>
          
          {/* Container de contenu avec background et clip-path */}
          <div className="section-approach p-4 md:p-8 lg:p-12">
            
            {/* Contenu principal */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              {approachData.content.map((paragraph, index) => (
                <p 
                  key={index}
                  className={`
                    text-sm md:text-base lg:text-lg leading-relaxed 
                    text-portfolio-text-secondary text-left
                    transform transition-all duration-500 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                  `}
                  style={{
                    transitionDelay: isVisible ? `${index * 400}ms` : '0ms'
                  }}
                >
                  {parseTextWithBold(paragraph.text)}
                </p>
              ))}
            </div>
            
          </div>
      </div>
    </section>
  );
});

ApproachSection.displayName = 'ApproachSection';

export default ApproachSection;