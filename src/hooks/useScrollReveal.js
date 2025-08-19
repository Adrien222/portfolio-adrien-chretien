// ========================================
// Hook pour personnaliser l'effet de dévoilement INVERSÉ DRAMATIQUE
// ========================================

import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour l'effet de dévoilement au scroll INVERSÉ
 * Plus on descend, plus le fond devient sombre
 * @param {number} maxDarknessAt - Pourcentage de la page où le fond est noir à 100% (default: 55)
 * @param {boolean} easeOut - Utiliser un easing plus doux (default: true)
 */
export const useScrollReveal = (maxDarknessAt = 55, easeOut = true) => {
  // ✅ Commence très clair pour effet dramatique
  const [overlayOpacity, setOverlayOpacity] = useState(0.15);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calcul jusqu'à quelle position on veut l'effet maximum
      const maxScroll = (documentHeight - windowHeight) * (maxDarknessAt / 100);
      let scrollProgress = Math.min(scrollY / maxScroll, 1);
      
      // Application d'un easing si demandé
      if (easeOut) {
        // Easing out quadratic pour un effet plus doux
        scrollProgress = 1 - Math.pow(1 - scrollProgress, 2);
      }
      
      // Contraste fort entre début et fin
      // 0.15 (très clair) → 1.0 (noir total)
      const newOpacity = Math.min(0.15 + (scrollProgress * 0.85), 1);
      
      setOverlayOpacity(newOpacity);
    };

    // Appel initial pour définir l'état de départ
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [maxDarknessAt, easeOut]);

  return overlayOpacity;
};