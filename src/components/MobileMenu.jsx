import React, { memo } from 'react';
import Navigation from './Navigation';
import Button from './Button';

/**
 * MobileMenu - Menu mobile qui réutilise Navigation
 * Navigation avec variant="mobile" = disposition VERTICALE
 */
const MobileMenu = memo(({ 
  isOpen, 
  navigationItems, 
  activeSection, 
  onNavigate, 
  onContactClick 
}) => {
  
  // Rendu conditionnel
  if (!isOpen) {
    return null;
  }

  return (
    <div className="md:hidden">
      {/* Navigation VERTICALE pour mobile */}
      <Navigation
        items={navigationItems}
        activeSection={activeSection}
        onNavigate={onNavigate}
        variant="mobile"
        className="mb-4"
      />
      
      {/* Bouton contact mobile */}
      <div className="pt-4 mt-4 border-t border-white/20">
        <Button
          variant="primary"
          size="small"
          onClick={onContactClick}
          className="w-full"
        >
          Me contacter
        </Button>
      </div>
    </div>
  );
});

MobileMenu.displayName = 'MobileMenu';

export default MobileMenu;