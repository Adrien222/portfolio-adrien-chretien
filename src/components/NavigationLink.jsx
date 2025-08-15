import React, { memo } from 'react';

/**
 * NavigationLink - Lien de navigation individuel
 * Variant = différences de style entre desktop/mobile
 */
const NavigationLink = memo(({ 
  href, 
  isActive, 
  onClick, 
  children,
  variant = 'desktop'
}) => {
  
  // Classes de base communes
  const baseClasses = 'font-inter text-base font-medium transition-colors duration-300';
  
  // Différences de style selon desktop/mobile
  const variantClasses = {
    desktop: `${baseClasses} relative`, // Position relative pour l'indicateur
    mobile: `${baseClasses} py-2`       // Padding vertical pour mobile
  };
  
  // Classes de couleur selon l'état actif
  const colorClasses = isActive 
    ? 'text-portfolio-purple' 
    : 'text-white hover:text-portfolio-purple';

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${variantClasses[variant]} ${colorClasses}`}
    >
      {children}
      {/* Indicateur visuel uniquement pour desktop */}
      {variant === 'desktop' && isActive && (
        <span className="nav-indicator" />
      )}
    </a>
  );
});

NavigationLink.displayName = 'NavigationLink';

export default NavigationLink;