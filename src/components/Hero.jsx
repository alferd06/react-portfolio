// src/components/Hero.jsx
import React from 'react'
import { useReveal } from '../hooks/useReveal'

function Hero() {
    const ref = useReveal()

    return (
        <section
            ref={ref}
            className="min-h-[60vh] flex flex-col justify-center mb-section-v-padding reveal"
        >
        {/* ===================== HERO ===================== */}
        <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-text-primary mb-stack-lg max-w-[800px]">
            Building web and mobile apps, and the data pipelines behind them
        </h1>
        <p className="text-text-muted text-body-main max-w-[600px] mb-10">
            I’m Alwi, a computer science student building web and Flutter apps, with a focus on data engineering. Open to internships.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
            <a
                className="inline-flex items-center justify-center px-8 py-3 bg-surface border border-border-subtle text-primary font-medium hover:border-primary/50 transition-all duration-300"
                href="#projects"
            >
                See My Work <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
            </a>
            <a
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-border-subtle text-text-muted hover:text-text-primary hover:border-text-muted transition-all duration-300"
                href="#contact"
            >
                Get in Touch
            </a>
        </div>
        </section>
    )
}

export default Hero