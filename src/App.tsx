import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StarBackground from './components/StarBackground'

import Hero from './sections/Hero'
import About from './sections/About'
import Stacks from './sections/Stacks'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App(){
  return (
    <div className="relative min-h-screen font-sans bg-black text-white">
      {/* ⭐ Estrelas globais */}
      <StarBackground />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Stacks />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
