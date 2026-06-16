// src/components/Contact.jsx
import React from 'react'
import { useReveal } from '../hooks/useReveal'

function Contact() {
    const ref = useReveal()

    return (
        <section
            ref={ref}
            className="mb-section-v-padding reveal border-t border-border-subtle pt-section-v-padding"
            id="contact"
        >
            <div className="max-w-[600px]">
                <h2 className="font-headline-section text-headline-section text-text-primary mb-stack-md">
                    Got a problem worth automating? Let's talk.
                </h2>
                <p className="text-text-muted text-body-main mb-stack-lg">
                    I'm open to internship opportunities and projects that solve real problems. Email is the fastest way to reach me.
                </p>
                <div className="flex gap-6 mt-8">
                    <a
                        className="flex items-center justify-center w-12 h-12 border border-border-subtle text-text-muted hover:text-primary hover:border-primary transition-all duration-300"
                        href="mailto:contact@alwi.p"
                    >
                        <span className="material-symbols-outlined">mail</span>
                    </a>
                    <a
                        className="flex items-center justify-center w-12 h-12 border border-border-subtle text-text-muted hover:text-primary hover:border-primary transition-all duration-300"
                        href="https://linkedin.com"
                    >
                        <span className="material-symbols-outlined">work</span>
                    </a>
                    <a
                        className="flex items-center justify-center w-12 h-12 border border-border-subtle text-text-muted hover:text-primary hover:border-primary transition-all duration-300"
                        href="https://github.com"
                    >
                        <span className="material-symbols-outlined">terminal</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact