import React from 'react';

const ProjectCard = React.memo(({ project, onClick }) => {
  const getProjectIcon = (projectId) => {
    const icons = {
      'teleconsultation': '🩺',
      'club-nautique': '🌊', 
      'portfolio': '💻'
    };
    return icons[projectId] || '⚡';
  };

  return (
    <div 
      className="relative p-6 overflow-hidden transition-all duration-300 transform bg-black border border-gray-600 cursor-pointer hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105"
      style={{
        clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)',
        borderImage: 'linear-gradient(to bottom, #BD5EDA, #000000) 1'
      }}
      onClick={onClick}
    >
      
      <div className="mb-4">
        <div className="flex items-center justify-center w-12 h-12 text-xl text-white bg-purple-600 rounded-lg">
          {getProjectIcon(project.id)}
        </div>
      </div>
      
      <h3 className="mb-2 text-xl font-bold text-white font-jost">
        {project.title}
      </h3>
      
      <p className="mb-3 text-sm font-medium text-gray-400">
        {project.subtitle}
      </p>
      
      <p className="text-sm leading-relaxed text-gray-300">
        {project.description}
      </p>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;