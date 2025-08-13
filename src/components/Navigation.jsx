import React, { memo } from 'react';
import NavigationLink from './NavigationLink';

/**
 * Navigation - Composant unifié pour desktop et mobile
 * Desktop = horizontal (flex-row)
 * Mobile = vertical (flex-col) 
 */
const Navigation = memo(({ 
  items = [], 
  activeSection, 
  onNavigate,
  variant = 'desktop', // 'desktop' | 'mobile'
  className = ''
}) => {
  
  // Classes selon la variante - ORIENTATION du conteneur
  const variantClasses = {
    desktop: 'hidden md:flex items-center space-x-6', // HORIZONTAL
    mobile: 'flex flex-col space-y-4'                 // VERTICAL
  };

  const handleNavigate = (e, sectionId) => {
    e.preventDefault();
    onNavigate(e, sectionId);
  };

  return (
    <nav className={`${variantClasses[variant]} ${className}`.trim()}>
      {items.map((item) => (
        <NavigationLink
          key={item.id}
          href={item.href}
          isActive={activeSection === item.id}
          onClick={(e) => handleNavigate(e, item.id)}
          variant={variant}
        >
          {item.label}
        </NavigationLink>
      ))}
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;