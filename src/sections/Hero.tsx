// src/sections/Hero.tsx
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiDownload } from 'react-icons/fi'
import astronauta from "../assets/images/astronauta.svg";

export default function Hero(){
  return (
    <header id="home" className="min-h-screen flex items-center pt-28">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-block bg-purple-800/70 px-4 py-2 rounded-full text-sm">Olá! Como vai?</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight">Me chamo <span className="text-white">Bianca Arielly</span></h1>
          <p className="mt-4 text-gray-300">Front-end developer · UI designer</p>

          <div className="flex gap-3 mt-6 items-center">
            <a className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl" href="https://github.com/BiancaAriellyFP"><FaGithub /> GitHub</a>
            <a className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl" href="https://www.linkedin.com/in/bianca-arielly-fontes-pereira-a39b31260/"><FaLinkedin /> LinkedIn</a>
            <a className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl" href="mailto:ahri.fontes@gmail.com"><FiMail /> Email</a>
            <a className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-xl text-white" href="/cv.pdf" download><FiDownload /> Download CV</a>
          </div>
        </div>

<div className="flex justify-center md:justify-end">
  <img
    src={astronauta}
    alt="Ilustração astronauta"
    className="w-[520px] max-w-full"
  />

  </div>
</div>

    </header>
  )
}
