// src/utils/skillsHelper.js
/**
 * Système centralisé pour les compétences
 * - Configuration des catégories
 * - Gestion des images
 * - Fonctions utilitaires
 */

// Configuration des catégories avec couleurs et badges français
export const skillCategories = {
  frontend: {
    name: 'Frontend',
    color: '#61DAFB',
    badge: 'front'
  },
  backend: {
    name: 'Backend', 
    color: '#ED8B00',
    badge: 'back'
  },
  database: {
    name: 'Base de données',
    color: '#336791',
    badge: 'bdd'
  },
  tools: {
    name: 'Outils',
    color: '#F05032',
    badge: 'outil'
  },
  methodology: {
    name: 'Méthodes',
    color: '#FF6B6B',
    badge: 'méthode'
  }
};

/**
 * Fonction utilitaire pour obtenir l'image d'une compétence
 * Cherche automatiquement dans assets/ selon l'ID
 */
export const getSkillImage = (skillId) => {
  try {
    return `/src/assets/${skillId}.png`;
  } catch (error) {
    console.warn(`Image non trouvée pour ${skillId}.png dans assets/`);
    return null;
  }
};

/**
 * Fonction pour obtenir l'icône par défaut selon le nom
 */
export const getDefaultIcon = (skillName) => {
  return (
    <div className="w-16 h-16 bg-portfolio-purple rounded-lg 
                    flex items-center justify-center text-white font-bold text-2xl shadow-lg">
      {skillName.charAt(0)}
    </div>
  );
};

/**
 * Fonction pour valider une nouvelle compétence
 */
export const validateSkill = (skill) => {
  const required = ['id', 'name', 'description', 'category'];
  const missing = required.filter(field => !skill[field]);
  
  if (missing.length > 0) {
    console.error(`Champs manquants pour la compétence: ${missing.join(', ')}`);
    return false;
  }
  
  if (!skillCategories[skill.category]) {
    console.error(`Catégorie invalide: ${skill.category}. Catégories disponibles: ${Object.keys(skillCategories).join(', ')}`);
    return false;
  }
  
  return true;
};

/**
 * Template pour ajouter facilement une nouvelle compétence
 */
export const createSkillTemplate = (id, name, description, category, version = null) => {
  const skill = {
    id,
    name,
    description,
    category,
    ...(version && { version })
  };
  
  if (validateSkill(skill)) {
    return skill;
  }
  
  return null;
};