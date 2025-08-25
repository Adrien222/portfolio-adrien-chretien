import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const RealizationsSection = React.memo(({ realizationsData, isActive }) => {
  // États pour les animations
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer pour déclencher l'animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Une fois visible, on garde l'animation
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px' // Se déclenche un peu avant
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openModal = (project) => {
    console.log('Projet cliqué:', project.title);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section 
      ref={sectionRef}
      id="realisations" 
      className="pt-24 section-spacing md:pt-32"
    >
      <div className="container-portfolio">
        {/* Titre avec animation ET couleur active */}
        <h2 className={`
          mb-16 text-4xl font-bold text-center lg:text-5xl font-jost
          transform transition-all duration-700 ease-out
          transition-colors duration-300
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          ${isActive ? 'text-portfolio-purple' : 'text-portfolio-text-primary'}
        `}>
          Mes réalisations
        </h2>
        
        {/* Container des cartes avec animation en cascade */}
        <div className="grid max-w-6xl grid-cols-1 gap-6 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:px-0">
          {realizationsData.map((project, index) => (
            <div
              key={project.id}
              className={`
                transform transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
              `}
              style={{
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <ProjectCard 
                project={project}
                onClick={() => openModal(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={closeModal}
      />
    </section>
  );
});

RealizationsSection.displayName = 'RealizationsSection';

export default RealizationsSection;