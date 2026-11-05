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
                        I'm drawn to the moment raw numbers become something actionable — a pattern in messy data, a model that predicts something useful, a chart that makes a decision obvious. My projects follow that thread: an ETL pipeline and star schema built from World Bank data to compare health indicators with GDP, a crop recommender trained on soil data, and crop yield prediction across 101 countries with a genetic-algorithm-tuned XGBoost.
                    </p>
                    <p>
                        What I enjoy most is the groundwork: getting messy source files into a clean, well-structured shape that analysts and models can rely on. Building that star schema showed me how much an analysis depends on how data is cleaned and modeled — and how much a single choice, like dropping rows with missing values, can change who is represented in the results.
                    </p>
                    <p>
                        I also care about the other half: someone has to use what the data produces. Building multi-screen Flutter apps with a team — wiring up state, navigation, and forms — showed me why a dataset or model only matters once it reaches the person who needs it.
                    </p>
                    <p>
                        Right now my focus is data engineering — pipelines, data warehousing, and SQL — with machine learning and Flutter as complementary skills. I'm still a student, and I don't just want to write code; I want to build pipelines, models, and apps that keep working when the data gets messy.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About