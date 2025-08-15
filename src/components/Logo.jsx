import React, { memo, useCallback } from 'react';

/**
 * Logo - Composant atomique pur pour le logo/nom
 * Props immutables, comportement prévisible
 */
const Logo = memo(({ 
  name, 
  onClick, 
  isActive = false,
  size = 'large'
}) => {
  
  const handleClick = useCallback((e) => {
    e.preventDefault();
    if (onClick) {
      onClick(e, 'home');
    }
  }, [onClick]);

  // Classes selon la taille
  const sizeClasses = {
    small: 'text-lg',   
    medium: 'text-xl',
    large: 'text-2xl',
    xlarge: 'text-3xl'
  };

  return (
    <div className="flex-shrink-0">
      <button
        onClick={handleClick}
        className={`
          font-jost font-bold transition-colors duration-300 cursor-pointer
          ${isActive ? 'text-portfolio-purple' : 'text-portfolio-text-primary hover:text-portfolio-purple'}
          ${sizeClasses[size] || sizeClasses.large}
        `.trim()}
        aria-label="Retour à l'accueil"
      >
        {name}
      </button>
    </div>
  );
});

Logo.displayName = 'Logo';

export default Logo;