import React from 'react';

/**
 * SkillCard - Carte de compétence avec effet flip fluide et design moderne
 * - Utilise les images depuis assets/ (fonction getSkillImage temporairement désactivée)
 * - Dégradé transparent sur face avant
 * - Animations ultra-fluides
 * - Code facile d'incrémentation
 */
const SkillCard = React.memo(({ skill, index, isVisible }) => {
  
  // Fonction temporaire pour les images (en attendant le système helper)
  const getSkillImage = (skillId) => {
    try {
      return `/src/assets/${skillId}.png`;
    } catch (error) {
      console.warn(`Image non trouvée pour ${skillId}`);
      return null;
    }
  };

  // Icône par défaut temporaire
  const getDefaultIcon = () => (
    <div className="w-16 h-16">
      {skill.name.charAt(0)}
    </div>
  );

  // Catégories temporaires
  const getCategoryInfo = (category) => {
    const categories = {
      frontend: { color: '#61DAFB', badge: 'front' },
      backend: { color: '#ED8B00', badge: 'back' },
      database: { color: '#336791', badge: 'bdd' },
      tools: { color: '#F05032', badge: 'outil' },
      methodology: { color: '#FF6B6B', badge: 'méthode' }
    };
    return categories[category] || categories.tools;
  };

  const skillImage = getSkillImage(skill.id);
  const categoryInfo = getCategoryInfo(skill.category);

  return (
    <div className={`
      group relative w-skill-card h-skill-card perspective-1000
      transform transition-all duration-700 ease-out
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
    `}
    style={{
      transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
    }}>
      
      {/* Container 3D pour l'effet flip */}
      <div className="relative w-full h-full preserve-3d transition-transform duration-700 ease-out group-hover:rotateY-180">
        
        {/* Face avant de la carte */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div 
            className="skill-card-front w-full h-full flex flex-col items-center justify-center text-center p-6 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, 
                rgba(189, 94, 218, 0.8) 0%, 
                rgba(189, 94, 218, 0.4) 50%, 
                rgba(44, 20, 56, 0.9) 100%)`,
              clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)'
            }}
          >
            
            {/* Effet de brillance qui traverse la carte */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                          translate-x-[-100%] group-hover:translate-x-[100%] 
                          transition-transform duration-1000 ease-out" />
            
            {/* Icône/Image */}
            <div className="mb-4 transform transition-all duration-500 ease-out group-hover:scale-110">
              {skillImage ? (
                <img 
                  src={skillImage} 
                  alt={skill.name}
                  className="w-16 h-16 object-contain filter drop-shadow-lg"
                  onError={(e) => {
                    // Fallback si l'image ne charge pas
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              
              {/* Fallback icon si pas d'image */}
              <div className={skillImage ? 'hidden' : 'flex'}>
                {getDefaultIcon()}
              </div>
            </div>
            
            {/* Nom de la technologie */}
            <h3 className="text-white font-jost font-semibold text-lg mb-1 
                         transform transition-all duration-300 ease-out
                         group-hover:scale-105">
              {skill.name}
            </h3>
            
            {/* Version si disponible */}
            {skill.version && (
              <span className="text-portfolio-text-secondary text-sm font-medium
                             transform transition-all duration-300 ease-out
                             group-hover:text-white/80">
                {skill.version}
              </span>
            )}
            
            {/* Particules flottantes pour l'effet */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full
                          animate-pulse group-hover:animate-bounce" />
            <div className="absolute bottom-6 left-4 w-1 h-1 bg-white/30 rounded-full
                          animate-pulse delay-300 group-hover:animate-ping" />
            
          </div>
        </div>
        
        {/* Face arrière de la carte */}
        <div className="absolute inset-0 backface-hidden rotateY-180">
          <div 
            className="skill-card-back w-full h-full relative overflow-hidden "
            style={{
              background: `linear-gradient(135deg, 
                rgba(44, 20, 56, 0.95) 0%, 
                rgba(96, 55, 112, 0.9) 50%, 
                rgba(44, 20, 56, 0.95) 100%)`,
            }}
          >
            
            {/* Bordure lumineuse */}
            <div className="absolute inset-0 border-2 border-portfolio-purple/40 rounded-sm"/>
            
            {/* Contenu de la description */}
            <p className="text-portfolio-text-secondary text-sm leading-relaxed
                         transform transition-all duration-500 ease-out
                         opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
               style={{ transitionDelay: '200ms' }}>
              {skill.description}
            </p>
            
            {/* Badge catégorie */}
            <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium
                          transform transition-all duration-500 ease-out"
                 style={{ 
                   backgroundColor: `${categoryInfo.color}20`,
                   color: categoryInfo.color,
                   transitionDelay: '300ms' 
                 }}>
              {categoryInfo.badge}
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
});

SkillCard.displayName = 'SkillCard';

export default SkillCard;