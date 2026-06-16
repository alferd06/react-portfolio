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
            <div className="flex items-center gap-2 mb-stack-lg">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-primary font-label-mono text-label-mono uppercase tracking-widest">
                    Available for work
                </span>
            </div>
            <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-text-primary mb-stack-lg max-w-[800px]">
                I automate the tedious, so people can focus on what matters.
            </h1>
            <p className="text-text-muted text-body-main max-w-[600px] mb-10">
                I'm Alwi — a software engineering student who builds tools that remove friction. Starting from my own problems, then working outward.
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