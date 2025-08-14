import React, { memo } from 'react';

/**
 * HamburgerButton - Bouton menu mobile avec animation
 */
const HamburgerButton = memo(({ 
  isOpen, 
  onClick,
  className = ''
}) => {

  return (
    <button
      onClick={onClick}
      className={`
        md:hidden flex flex-col justify-center items-center
        w-8 h-8 bg-transparent border-none cursor-pointer
        transition-all duration-300
        ${className}
      `.trim()}
      aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      aria-expanded={isOpen}
    >
      {/* Ligne du haut */}
      <span 
        className={`
          block w-6 h-0.5 bg-white transition-all duration-300
          ${isOpen ? 'rotate-45 translate-y-1.5' : 'rotate-0 translate-y-0'}
        `}
      />
      
      {/* Ligne du milieu */}
      <span 
        className={`
          block w-6 h-0.5 bg-white transition-all duration-300 my-1
          ${isOpen ? 'opacity-0' : 'opacity-100'}
        `}
      />
      
      {/* Ligne du bas */}
      <span 
        className={`
          block w-6 h-0.5 bg-white transition-all duration-300
          ${isOpen ? '-rotate-45 -translate-y-1.5' : 'rotate-0 translate-y-0'}
        `}
      />
    </button>
  );
});

HamburgerButton.displayName = 'HamburgerButton';

export default HamburgerButton;