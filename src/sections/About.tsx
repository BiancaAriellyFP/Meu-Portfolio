import biancaImg from "../assets/images/bianca.png";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* FOTO */}
        <div className="flex justify-center md:justify-start">
          <div className="w-64 h-64 rounded-full border-8 border-gray-700 overflow-hidden">
            <img
              src={biancaImg}
              alt="Bianca Arielly"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXTO */}
        <div className="md:col-span-2">
          <div className="inline-block bg-purple-800/70 px-4 py-2 rounded-full text-sm">
            Sobre mim
          </div>

          <h2 className="text-4xl font-bold mt-4">
            Bianca Arielly Fontes Pereira
          </h2>

          <p className="mt-4 text-gray-300">
            👋 Olá! Me chamo Bianca Arielly, prazer! Atualmente estou em formação em
            Análise e Desenvolvimento de Sistemas pela Universidade Tiradentes. Sou
            apaixonada por desenvolvimento Front-end e design de interfaces. Busco
            criar experiências visuais intuitivas e agradáveis.
          </p>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>🎯 Objetivo: Evoluir diariamente como desenvolvedora e pessoa.</li>
            <li>💡 Foco: React, Next.js, Tailwind, UI/UX</li>
            <li>📚 Em formação e sempre estudando</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
