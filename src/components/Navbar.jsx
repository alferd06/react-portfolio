// src/components/Navbar.jsx
import React from 'react'

function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle">
            <div className="max-w-[900px] mx-auto w-full flex justify-between items-center h-16 px-gutter md:px-0">
                <div className="font-label-mono text-label-mono font-bold tracking-tighter text-text-primary">
                    ALWI.P
                </div>
                <div className="hidden md:flex gap-8">
                    <a
                        className="text-text-muted hover:text-primary transition-colors duration-200 font-label-mono text-label-mono"
                        href="#projects"
                    >
                        Projects
                    </a>
                    <a
                        className="text-text-muted hover:text-primary transition-colors duration-200 font-label-mono text-label-mono"
                        href="#about"
                    >
                        About
                    </a>
                    <a
                        className="text-text-muted hover:text-primary transition-colors duration-200 font-label-mono text-label-mono"
                        href="#contact"
                    >
                        Contact
                    </a>
                </div>
                <a
                    className="px-4 py-1.5 bg-surface border border-border-subtle rounded hover:border-text-muted transition-all duration-200 text-text-primary font-label-mono text-label-mono"
                    href="#"
                >
                    Resume
                </a>
            </div>
        </nav>
    )
}

export default Navbar