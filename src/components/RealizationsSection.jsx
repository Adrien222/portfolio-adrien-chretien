import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal'; // ✅ Ajoute cet import

const RealizationsSection = React.memo(({ realizationsData, isActive }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    console.log('Projet cliqué:', project.title); // Tu peux garder ça pour l'instant
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="realisations" className="section-spacing">
      <div className="container-portfolio">
        <h2 className="mb-16 text-4xl font-bold text-center text-white lg:text-5xl font-jost">
          Mes réalisations
        </h2>
        
        <div className="grid max-w-6xl grid-cols-1 gap-6 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:px-0">
        {realizationsData.map(project => (
            <ProjectCard 
            key={project.id} 
            project={project}
            onClick={() => openModal(project)}
            />
        ))}
        </div>
      </div>

      {/* ✅ Ajoute le modal ici */}
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