import React, { useState } from 'react';
import { Section, SectionTitle, Card, Badge } from '../ui';
import { PROJECTS } from '../../constants';
import type { Project } from '../../types';

type FilterType = 'all' | 'frontend' | 'backend' | 'fullstack';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <Section id="projects" bgColor="darker">
      <SectionTitle
        title="Mis Proyectos"
        subtitle="Algunos de los proyectos en los que he trabajado recientemente. Cada uno representa un desafío único y una oportunidad para aprender y crecer."
      />

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        {(['all', 'frontend', 'backend', 'fullstack'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all transform ${
              filter === cat
                ? 'bg-indigo-600 text-white border border-indigo-600 scale-105'
                : 'bg-indigo-900/30 text-indigo-200 border border-indigo-800 hover:bg-indigo-900/60'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card className="group flex flex-col h-full overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div>
            <h4 className="text-xl font-bold text-white">{project.title}</h4>
            <p className="text-indigo-300 text-sm mt-1">
              {project.technologies.join(' · ')}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3 gap-4">
          <h3 className="font-bold text-lg text-white line-clamp-2">{project.title}</h3>
          <div className="flex space-x-2 flex-shrink-0">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                className="text-indigo-300 hover:text-white transition-colors p-1.5 rounded-full hover:bg-indigo-900/50"
                aria-label="Ver demo"
              >
                <i className="fas fa-external-link-alt text-sm" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="text-indigo-300 hover:text-white transition-colors p-1.5 rounded-full hover:bg-indigo-900/50"
                aria-label="Ver código"
              >
                <i className="fab fa-github text-sm" />
              </a>
            )}
          </div>
        </div>

        <p className="text-indigo-300/80 mb-4 flex-grow text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="primary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
