import React, { memo, useCallback, useState, useMemo } from 'react';
import { navigationItems, personalInfo } from '../data/portfolioData';
import Logo from './Logo';
import Navigation from './Navigation';
import Button from './Button';
import HamburgerButton from './HamburgerButton';
import MobileMenu from './MobileMenu';

/**
 * Header -
 * - Navigation fluide avec scroll animations
 * - URLs qui changent pour le SEO
 * - Préserve l'expérience utilisateur originale
 */
const Header = memo(({ activeSection, onSectionChange, onContactClick }) => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handlers optimisés avec useCallback - CONSERVE le scroll fluide
  const handleNavigate = useCallback((e, sectionId) => {
    e.preventDefault();
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  }, [onSectionChange]);

  const handleContactClick = useCallback((e) => {
    e.preventDefault();
    onContactClick();
    setIsMobileMenuOpen(false);
  }, [onContactClick]);

  const handleLogoClick = useCallback((e) => {
    e.preventDefault();
    onSectionChange('home');
    setIsMobileMenuOpen(false);
  }, [onSectionChange]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Props mémorisées pour éviter les re-renders
  const logoProps = useMemo(() => ({
    name: personalInfo.name,
    onClick: handleLogoClick,
    isActive: activeSection === 'home',
    size: 'small'
  }), [handleLogoClick, activeSection]);

  const contactButtonProps = useMemo(() => ({
    variant: 'primary',
    size: 'small',
    onClick: handleContactClick,
  }), [handleContactClick]);

  return (
    <header className="header-floating">
      <div className="header-container">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Logo {...logoProps} />

          {/* Navigation Desktop - HORIZONTALE */}
          <Navigation
            items={navigationItems}
            activeSection={activeSection}
            onNavigate={handleNavigate}
            variant="desktop"
          />

          {/* Bouton Contact Desktop */}
          <div className="flex-shrink-0 hidden md:block">
            <Button {...contactButtonProps}>
              Me contacter
            </Button>
          </div>

          {/* Hamburger Mobile */}
          <HamburgerButton
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
          
        </div>
      </div>

      {/* Menu Mobile - VERTICAL */}
      {isMobileMenuOpen && (
        <div className="header-mobile-menu">
          <MobileMenu
            isOpen={isMobileMenuOpen}
            navigationItems={navigationItems}
            activeSection={activeSection}
            onNavigate={handleNavigate}
            onContactClick={handleContactClick}
          />
        </div>
      )}
    </header>
  );
});

Header.displayName = 'Header';

export default Header;