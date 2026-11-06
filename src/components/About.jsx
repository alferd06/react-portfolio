// src/components/About.jsx
import React from 'react'
import { useReveal } from '../hooks/useReveal'

function About() {
    const ref = useReveal()

    return (
        <section ref={ref} className="mb-section-v-padding scroll mt-24 reveal" id="about">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg">
                <div className="md:col-span-4">
                    <h2 className="font-headline-section text-headline-section text-text-primary sticky top-24">
                        About
                    </h2>
                </div>
                {/* ===================== ABOUT ===================== */}
                <div className="md:col-span-8 space-y-6 text-text-muted text-body-main">
                <p>
                    I like building things people can actually use, and making sure the data behind them is solid. My projects include team-built Flutter apps, a plant recognition web app, and an ETL pipeline with a star schema built from World Bank data.
                </p>
                <p>
                    I'm a student looking for an internship in web or mobile development, or data engineering — pipelines, data warehousing, and SQL.
                </p>
                </div>
            </div>
        </section>
    )
}

export default About