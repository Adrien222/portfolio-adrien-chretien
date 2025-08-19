import React from 'react';

const ProjectModal = React.memo(({ project, isOpen, onClose }) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={onClose}
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
            
            {/* Description détaillée au lieu de la courte */}
            <p className="text-base leading-relaxed text-gray-300 md:text-lg">
              {project.detailedDescription}
            </p>
          </div>

          {/* Section Images */}
          {project.images && project.images.length > 0 && (
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold text-white md:text-xl">Aperçu du projet</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {project.images.slice(0, 3).map((image, index) => (
                  <div key={index} className="relative p-4 overflow-hidden bg-gray-800 rounded-lg">
                    <img 
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`}
                      className="object-contain w-full h-32 rounded"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Technologies */}
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

          {/* Réalisations détaillées */}
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

          {/* Impact */}
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
  );
});

ProjectModal.displayName = 'ProjectModal';

export default ProjectModal;