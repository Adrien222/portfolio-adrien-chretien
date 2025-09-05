import React, { useState } from 'react';
import OptimizedImage from './OptimizedImage';

const ProjectModal = React.memo(({ project, isOpen, onClose }) => {
  // État pour gérer l'image agrandie
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null); // Ferme d'abord le lightbox
        } else {
          onClose(); // Puis le modal
        }
      }
    };
    
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.body.style.overflow = originalOverflow || '';
        document.body.style.paddingRight = originalPaddingRight || '';
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose, selectedImage]);

  // Fonction pour ouvrir une image en grand
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setImageIndex(index);
  };

  // Navigation entre images
  const nextImage = () => {
    if (project.images && imageIndex < project.images.length - 1) {
      const newIndex = imageIndex + 1;
      setImageIndex(newIndex);
      setSelectedImage(project.images[newIndex]);
    }
  };

  const prevImage = () => {
    if (project.images && imageIndex > 0) {
      const newIndex = imageIndex - 1;
      setImageIndex(newIndex);
      setSelectedImage(project.images[newIndex]);
    }
  };

  if (!isOpen || !project) return null;

  return (
    <>
      {/* Modal principal */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
        onClick={selectedImage ? undefined : onClose}
      >
        <div 
          className="bg-black border border-purple-500 max-w-5xl w-full max-h-[95vh] overflow-y-auto relative"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute z-10 flex items-center justify-center w-8 h-8 text-xl text-white bg-black bg-opacity-50 rounded-full hover:text-purple-400 top-2 right-4 md:top-4 md:right-8 md:text-2xl md:w-auto md:h-auto md:bg-transparent"
          >
            ✕
          </button>
          
          <div className="p-4 pr-12 md:p-8 md:pr-16">
            {/* En-tête du projet */}
            <div className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl font-jost">
                {project.title}
              </h2>
              
              <p className="mb-4 text-base text-purple-400 md:text-lg">
                {project.subtitle} • {project.duration}
              </p>
              
              <p className="text-base leading-relaxed text-gray-300 md:text-lg">
                {project.detailedDescription}
              </p>
            </div>

            {/* Section Images avec clic pour agrandir */}
            {project.images && project.images.length > 0 && (
              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-white md:text-xl">
                  Aperçu du projet <span className="text-sm text-gray-400">(cliquez pour agrandir)</span>
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {project.images.slice(0, 3).map((image, index) => (
                    <div 
                      key={index} 
                      className="relative p-4 overflow-hidden transition-all duration-300 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 hover:scale-105"
                      onClick={() => openLightbox(image, index)}
                    >
                      <OptimizedImage 
                        src={image} 
                        alt={`${project.title} - Image ${index + 1}`}
                        className="object-contain w-full h-32 transition-transform duration-300 rounded"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      {/* Icône pour indiquer qu'on peut cliquer */}
                      <div className="absolute p-1 bg-black bg-opacity-50 rounded-full top-2 right-2">
                        <span className="text-xs text-white">🔍</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Reste du contenu... */}
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold text-white md:text-xl">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm text-white bg-purple-600 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.details?.achievements && (
              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-white md:text-xl">Réalisations techniques</h3>
                <ul className="space-y-2 text-gray-300">
                  {project.details.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-purple-400">•</span>
                      <span className="text-sm leading-relaxed md:text-base">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.details?.impact && (
              <div className="mb-6">
                <h3 className="mb-4 text-lg font-semibold text-white md:text-xl">Impact</h3>
                <p className="p-4 text-sm leading-relaxed text-gray-300 bg-gray-900 border-l-4 border-purple-500 rounded-lg md:text-base">
                  {project.details.impact}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox pour les images agrandies */}
        {selectedImage && (
        <div 
            className="fixed inset-0 z-[60] bg-black bg-opacity-95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
        >
            {/* Bouton fermer lightbox */}
            <button 
            onClick={() => setSelectedImage(null)}
            className="absolute z-10 flex items-center justify-center w-12 h-12 text-3xl text-white transition-all duration-300 bg-black border-2 border-white rounded-full top-4 right-4 hover:text-purple-400 bg-opacity-70 hover:bg-purple-600"
            >
            ✕
            </button>

            {/* Navigation précédent/suivant */}
            {project.images && project.images.length > 1 && (
            <>
                {imageIndex > 0 && (
                <button 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute z-10 flex items-center justify-center w-16 h-16 text-3xl font-bold text-white transition-all duration-300 transform -translate-y-1/2 bg-purple-600 border-2 border-white rounded-full shadow-lg left-4 top-1/2 bg-opacity-80 hover:bg-purple-500 hover:scale-110"
                >
                    ←
                </button>
                )}
                
                {imageIndex < project.images.length - 1 && (
                <button 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute z-10 flex items-center justify-center w-16 h-16 text-3xl font-bold text-white transition-all duration-300 transform -translate-y-1/2 bg-purple-600 border-2 border-white rounded-full shadow-lg right-4 top-1/2 bg-opacity-80 hover:bg-purple-500 hover:scale-110"
                >
                    →
                </button>
                )}
            </>
            )}

            {/* Image agrandie */}
            <div 
            className="flex items-center justify-center w-full h-full p-16"
            onClick={(e) => e.stopPropagation()}
            >
            <OptimizedImage 
                src={selectedImage}
                alt="Image agrandie"
                className="object-contain w-auto h-auto max-w-full max-h-full transition-all duration-300 rounded-lg shadow-2xl animate-in zoom-in"
                style={{
                maxWidth: 'calc(100vw - 8rem)', // Laisse de la place pour les flèches
                maxHeight: 'calc(100vh - 8rem)' // Laisse de la place pour les boutons
                }}
            />
            </div>

            {/* Indicateur de position */}
            {project.images && project.images.length > 1 && (
            <div className="absolute px-4 py-1 text-sm font-semibold text-white transform -translate-x-1/2 bg-purple-600 border border-white rounded-full bottom-6 left-1/2 bg-opacity-90">
                {imageIndex + 1} / {project.images.length}
            </div>
            )}
        </div>
        )}
    </>
  );
});

ProjectModal.displayName = 'ProjectModal';

export default ProjectModal;