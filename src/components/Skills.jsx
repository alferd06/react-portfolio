// src/components/Skills.jsx
import React from 'react'
import { useReveal } from '../hooks/useReveal'

const skillsData = {
    embedded: {
        title: 'Embedded & Hardware',
        items: ['Arduino', 'C++', 'Sensor Integration', 'Relay & Servo'],
        dashed: false,
    },
    exploring: {
        title: 'Currently Exploring',
        items: ['React', 'Flutter', 'Python'],
        dashed: true,
    },
    tools: {
        title: 'Tools',
        items: ['Git', 'GitHub', 'VS Code', 'Linux'],
        dashed: false,
    },
}

function Skills() {
    const ref = useReveal()
    const categories = Object.values(skillsData)

    return (
        <section ref={ref} className="mb-section-v-padding reveal">
            <h2 className="font-headline-section text-headline-section text-text-primary mb-12">
                Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category) => (
                    <div key={category.title}>
                        <h3 className="font-label-mono text-label-mono text-text-primary mb-4 uppercase tracking-wider">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.items.map((item) => (
                                <span
                                    key={item}
                                    className={`px-3 py-1 border rounded-sm text-label-mono font-label-mono text-text-muted ${
                                        category.dashed
                                            ? 'border-dashed border-border-subtle italic text-text-muted/50'
                                            : 'border-border-subtle'
                                    }`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills