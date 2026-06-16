// src/components/About.jsx
import React from 'react'
import { useReveal } from '../hooks/useReveal'

function About() {
    const ref = useReveal()

    return (
        <section ref={ref} className="mb-section-v-padding scroll-mt-24 reveal" id="about">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg">
                <div className="md:col-span-4">
                    <h2 className="font-headline-section text-headline-section text-text-primary sticky top-24">
                        About
                    </h2>
                </div>
                <div className="md:col-span-8 space-y-6 text-text-muted text-body-main">
                    <p>
                        I've always believed that laziness, when directed correctly, is the greatest driver of innovation. If I find myself doing the same repetitive task twice, my first instinct isn't to get better at it—it's to build something that makes sure I never have to do it again.
                    </p>
                    <p>
                        My journey into engineering started with this exact philosophy. It began with an Automatic Irrigation System. I was tired of coming home to wilted plants because I'd forgotten to water them during a busy week. Instead of setting a reminder, I built a soil-moisture-triggered system that handled it for me.
                    </p>
                    <p>
                        That pattern repeated. I built an Automatic Fish Feeder because I wanted my pets to be fed with robotic precision, regardless of whether I was home or awake. These projects taught me the fundamentals of C++, microcontroller logic, and the satisfaction of seeing hardware solve a physical problem.
                    </p>
                    <p>
                        Now, I'm translating that "automation-first" mindset into software. I'm currently deep-diving into React and Flutter, exploring how to build digital interfaces that are as efficient and reliable as the hardware systems I started with. I don't just want to write code; I want to build tools that disappear into the background because they work so well.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About