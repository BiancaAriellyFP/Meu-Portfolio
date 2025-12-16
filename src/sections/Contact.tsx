// src/sections/Contact.tsx
import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-3xl font-bold">Vamos trabalhar juntos?</h3>
          <p className="mt-4 text-gray-300">Tenho interesse em oportunidades, estágios e projetos freelance. Envie um e-mail ou me encontre no LinkedIn.</p>

          <div className="mt-6 flex gap-4 items-center">
            <a href="mailto:bianca@example.com" className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">Email</a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">LinkedIn</a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">GitHub</a>
          </div>
        </div>

        <form className="bg-white/5 rounded-xl p-6">
          <label className="block text-sm text-gray-300">Nome</label>
          <input className="w-full mt-2 p-3 rounded-md bg-black/50 border border-white/5" placeholder="Seu nome" />
          <label className="block text-sm text-gray-300 mt-4">Email</label>
          <input className="w-full mt-2 p-3 rounded-md bg-black/50 border border-white/5" placeholder="seu@email.com" />
          <label className="block text-sm text-gray-300 mt-4">Mensagem</label>
          <textarea className="w-full mt-2 p-3 rounded-md bg-black/50 border border-white/5" rows={4} placeholder="Oi! Gostaria de..." />
          <button className="mt-4 px-4 py-2 bg-purple-600 rounded-md text-white">Enviar</button>
        </form>
      </div>
    </section>
  )
}
