// src/components/Footer.jsx
import React from 'react'

function Footer() {
    return (
        <footer className="bg-background border-t border-border-subtle">
            <div className="max-w-[900px] mx-auto w-full flex flex-col md:flex-row justify-between items-center py-stack-lg px-gutter md:px-0 gap-stack-md">
                <div className="font-label-mono text-label-mono text-text-primary">ALWI.P</div>
                <p className="font-label-mono text-label-mono text-text-muted text-center md:text-left">
                    © 2026 M Alwi Perdiansyah. Built for speed.
                </p>
                <div className="flex gap-6">
                    <a
                        className="font-label-mono text-label-mono text-text-muted hover:text-primary transition-colors duration-200"
                        href="#"
                    >
                        GitHub
                    </a>
                    <a
                        className="font-label-mono text-label-mono text-text-muted hover:text-primary transition-colors duration-200"
                        href="#"
                    >
                        LinkedIn
                    </a>
                    <a
                        className="font-label-mono text-label-mono text-text-muted hover:text-primary transition-colors duration-200"
                        href="#"
                    >
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer