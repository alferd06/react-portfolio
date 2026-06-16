// src/components/ProjectCard.jsx
import React from 'react'

function ProjectCard({ project }) {
    return (
        <div className="group bg-surface border border-border-subtle p-stack-lg hover:border-[#3F3F46] hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                    {project.icon}
                </span>
                <a className="text-text-muted hover:text-primary transition-colors" href={project.githubUrl}>
                    <span className="material-symbols-outlined">north_east</span>
                </a>
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-4">{project.title}</h3>
            <div className="space-y-4 mb-8">
                <div>
                    <p className="text-[11px] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                        Problem
                    </p>
                    <p className="text-body-main text-text-muted leading-relaxed">{project.problem}</p>
                </div>
                <div>
                    <p className="text-[11px] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                        Solution
                    </p>
                    <p className="text-body-main text-text-muted leading-relaxed">{project.solution}</p>
                </div>
                <div className="p-3 bg-background border border-border-subtle">
                    <p className="text-primary font-label-mono text-label-mono">
                        Impact: {project.impact}
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border-subtle">
                {project.stack.map((tech) => (
                    <span
                        key={tech}
                        className="text-label-mono font-label-mono text-text-muted px-2 py-1 border border-border-subtle"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard