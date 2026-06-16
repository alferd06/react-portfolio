// src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="font-body-main text-body-main selection:bg-primary-container selection:text-on-primary-container">
            <Navbar />
            <main className="max-w-[900px] mx-auto px-gutter md:px-0 pt-32">
                <Hero />
                <Projects />
                <About />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App