// src/components/ProjectsSection.jsx
import { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import { useDragScroll } from '../hooks/useDragScroll';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref, canPrev, canNext, scrollByCard, reset } = useDragScroll();

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Kembali ke card pertama setiap filter berganti
  useEffect(() => {
    reset();
  }, [activeFilter, reset]);

  const arrowClass = (enabled) =>
    `w-10 h-10 flex items-center justify-center border transition-colors duration-300 ${
      enabled
        ? 'border-border-subtle text-text-primary hover:border-primary hover:text-primary'
        : 'border-border-subtle text-text-muted/30 cursor-default'
    }`;

  return (
    <section id="projects" className="py-stack-xl">
      <div className="flex justify-between items-center mb-stack-lg">
        <ProjectFilter active={activeFilter} onChange={setActiveFilter} />

        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Previous project"
            className={arrowClass(canPrev)}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Next project"
            className={arrowClass(canNext)}
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="drag-scroll no-scrollbar flex gap-stack-lg overflow-x-auto snap-x snap-mandatory py-2"
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="snap-start shrink-0 w-[85%] sm:w-[400px] flex"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}