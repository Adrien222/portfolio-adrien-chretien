// ========================================
// Hook pour personnaliser l'effet de dévoilement
// ========================================

import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour l'effet de dévoilement au scroll
 * @param {number} revealPercentage - Pourcentage de la page où l'effet se termine (default: 70)
 * @param {boolean} easeOut - Utiliser un easing plus doux (default: true)
 */
export const useScrollReveal = (revealPercentage = 70, easeOut = true) => {
  const [overlayOpacity, setOverlayOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calcul de la progression du scroll
      const maxScroll = (documentHeight - windowHeight) * (revealPercentage / 100);
      let scrollProgress = Math.min(scrollY / maxScroll, 1);
      
      // Application d'un easing si demandé
      if (easeOut) {
        // Easing out quadratic pour un effet plus doux
        scrollProgress = 1 - Math.pow(1 - scrollProgress, 2);
      }
      
      // Calcul de l'opacité
      const newOpacity = Math.max(1 - scrollProgress, 0);
      
      setOverlayOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [revealPercentage, easeOut]);

  return overlayOpacity;
};
