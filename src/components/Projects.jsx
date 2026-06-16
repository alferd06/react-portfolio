// src/components/Projects.jsx
import React from 'react'
import { useReveal } from '../hooks/useReveal'
import ProjectCard from './ProjectCard'

const projects = [
    {
        id: 1,
        title: 'Automatic Irrigation System',
        icon: 'water_drop',
        problem: "Plants die when no one's around to water them on schedule.",
        solution: 'Built a soil-moisture-triggered watering system using a microcontroller — no manual input needed once set up.',
        impact: 'Maintained consistent watering across 30+ days without manual intervention.',
        stack: ['Arduino', 'C++', 'Sensors'],
        githubUrl: '#',
    },
    {
        id: 2,
        title: 'Automatic Fish Feeder',
        icon: 'set_meal',
        problem: 'Feeding fish at the right time every day requires physical presence.',
        solution: 'Built a scheduled feeding device with configurable timing, so the routine runs without anyone being there.',
        impact: 'Feeding schedule held consistently across weeks of testing with zero missed sessions.',
        stack: ['C++', 'RTC Module', 'Servo'],
        githubUrl: '#',
    },
]

function Projects() {
    const ref = useReveal()

    return (
        <section ref={ref} className="mb-section-v-padding scroll-mt-24 reveal" id="projects">
            <div className="flex justify-between items-end mb-12">
                <h2 className="font-headline-section text-headline-section text-text-primary">
                    Projects
                </h2>
                <span className="font-label-mono text-label-mono text-text-muted">
                    /Selected Work
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects