import React, { memo } from 'react';

/**
 * HamburgerButton - Composant atomique pur pour le menu mobile
 * État isOpen géré par le parent, rendu conditionnel pur
 */
const HamburgerButton = memo(({ 
  isOpen = false, 
  onClick,
  className = ''
}) => {
  
  return (
    <button
      onClick={onClick}
      className={`
        md:hidden text-portfolio-text-primary hover:text-portfolio-purple 
        transition-colors duration-300 p-2 cursor-pointer
        ${className}
      `.trim()}
      aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      aria-expanded={isOpen}
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {/* Rendu conditionnel pur basé sur isOpen */}
        {isOpen ? (
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M6 18L18 6M6 6l12 12" 
          />
        ) : (
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 6h16M4 12h16M4 18h16" 
          />
        )}
      </svg>
    </button>
  );
});

HamburgerButton.displayName = 'HamburgerButton';

export default HamburgerButton;