import { useEffect, useRef, useState } from 'react';

/**
 * Hook personnalisé pour gérer les animations d'apparition de la section contact
 * Utilise Intersection Observer pour déclencher les animations
 */
export const useContactAnimations = () => {
  const [elementsInView, setElementsInView] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    // Configuration de l'Intersection Observer
    const observerOptions = {
      threshold: 0.2, // Déclenche quand 20% de l'élément est visible
      rootMargin: '-50px 0px', // Déclenche un peu avant que l'élément soit complètement visible
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setElementsInView(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Fonction pour observer un élément
  const observeElement = (element) => {
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  };

  // Fonction helper pour obtenir les classes d'animation
  const getAnimationClasses = (elementId, baseClass) => {
    const isInView = elementsInView.has(elementId);
    return `${baseClass} ${isInView ? 'in-view' : ''}`;
  };

  return {
    observeElement,
    getAnimationClasses,
    isInView: (elementId) => elementsInView.has(elementId)
  };
};