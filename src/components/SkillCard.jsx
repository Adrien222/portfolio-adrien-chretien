import React from 'react';
import { skillCategories, getSkillImage, getDefaultIcon } from '../utils/SkillHelper';
import OptimizedImage from './OptimizedImage';

/**
 * SkillCard - Carte de compétence avec effet flip fluide et design moderne
 * Refactorisé pour utiliser le système SkillHelper centralisé
 */
const SkillCard = React.memo(({ skill, index, isVisible }) => {
  
  const skillImage = getSkillImage(skill.id);
  const categoryInfo = skillCategories[skill.category] || skillCategories.tools;

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
      <div className="relative w-full h-full transition-transform duration-700 ease-out preserve-3d group-hover:rotateY-180">
        
        {/* Face avant de la carte */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div 
            className="relative flex flex-col items-center justify-center w-full h-full p-6 overflow-hidden text-center skill-card-front"
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
            <div className="mb-4 transition-all duration-500 ease-out transform group-hover:scale-110">
              {skillImage ? (
                <OptimizedImage 
                  src={skillImage} 
                  alt={skill.name}
                  className="object-contain w-16 h-16 filter drop-shadow-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              
              {/* Fallback icon utilisant SkillHelper */}
              <div className={skillImage ? 'hidden' : 'flex'}>
                {getDefaultIcon(skill.name)}
              </div>
            </div>
            
            {/* Nom de la technologie */}
            <h3 className="mb-1 text-lg font-semibold text-white transition-all duration-300 ease-out transform font-jost group-hover:scale-105">
              {skill.name}
            </h3>
            
            {/* Version si disponible */}
            {skill.version && (
              <span className="text-sm font-medium transition-all duration-300 ease-out transform text-portfolio-text-secondary group-hover:text-white/80">
                {skill.version}
              </span>
            )}
            
            {/* Particules flottantes pour l'effet */}
            <div className="absolute w-2 h-2 rounded-full top-4 right-4 bg-white/20 animate-pulse group-hover:animate-bounce" />
            <div className="absolute w-1 h-1 delay-300 rounded-full bottom-6 left-4 bg-white/30 animate-pulse group-hover:animate-ping" />
            
          </div>
        </div>
        
        {/* Face arrière de la carte */}
        <div className="absolute inset-0 backface-hidden rotateY-180">
          <div 
            className="relative flex flex-col justify-center w-full h-full p-6 overflow-hidden skill-card-back"
            style={{
              background: `linear-gradient(135deg, 
                rgba(44, 20, 56, 0.95) 0%, 
                rgba(96, 55, 112, 0.9) 50%, 
                rgba(44, 20, 56, 0.95) 100%)`,
            }}
          >
            
            {/* Bordure lumineuse */}
            <div className="absolute inset-0 border-2 rounded-sm border-portfolio-purple/40"/>
            
            {/* Contenu de la description */}
            <p className="text-sm leading-relaxed text-center transition-all duration-500 ease-out transform translate-y-4 opacity-0 text-portfolio-text-secondary group-hover:opacity-100 group-hover:translate-y-0"
               style={{ transitionDelay: '200ms' }}>
              {skill.description}
            </p>
            
            {/* Badge catégorie utilisant SkillHelper */}
            <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium
                          transform transition-all duration-500 ease-out
                          opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0"
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