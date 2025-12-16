import { useState } from "react";
import ProjectCarousel from "../components/ProjectCarousel";
import ProjectsCarousel from "../components/ProjectsCarousel";
import ProjectModal from "../components/ProjectModal";

const projects = [
  {
    title: "Portfólio Pessoal",
    description: "Landing page com React + Tailwind",
    images: ["/portfolio.png"],
    link: "https://seuportfolio.com",
  },
  {
    title: "Integra Jota",
    description: "Plataforma educacional para colaboradores.",
    images: [
      "/jotanunes1.png",
      "/jotanunes2.png",
      "/jotanunes3.png",
      "/jotanunes4.png",
    ],
    link: "https://www.figma.com/design/xG7nNgvjxhlB8C9EG3d1TC/Projeto-de-Resid%C3%AAncia?node-id=0-1&t=wRWXh7QqeSSldBZh-1",
  },
  {
    title: "Atos AI",
    description:
      "Inteligência Artificial, business intelligence, para gestão empresarial.",
    images: [
      "/atos1.png",
      "/atos2.png",
      "/atos3.png",
      "/atos4.png",
      "/atos5.png",
    ],
    link: "https://www.figma.com/design/uOLb9LI6wXx6yUDifteu7x/Prot%C3%B3tipo-Atos-Capital?node-id=64-91&t=NkiOPif06XSEJS3B-1",
  },
  {
    title: "SINALED - Agenda escolar Digital",
    description:
      "Software para gestão e comunicação escolar entre pais e educadores.",
    images: [
      "/sinaled1.png",
      "/sinaled2.png",
      "/sinaled3.png",
      "/sinaled4.png",
    ],
    link: "https://github.com/BiancaAriellyFP/Agenda-escolar-digital",
  },
  {
    title: "Infinite Hot.",
    description: "Jogo para dispositivos móveis.",
    images: ["/infinitehot1.png", "/infinitehot2.png"],
    link: "https://www.canva.com/design/DAG2QFl8FqI/MSCd43745Cnb71vAx5duMQ/edit?utm_content=DAG2QFl8FqI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    typeof projects[number] | null
  >(null);

  return (
    <section id="projects" className="py-20 bg-[#11091a]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white">
          💻 Meus Projetos
        </h2>

        <div className="mt-12 bg-[#24183a] p-8 rounded-2xl">
          <ProjectsCarousel
            items={projects.map((project, i) => (
              <article
                key={i}
                className="bg-gradient-to-b from-[#2b1d4a] to-[#24123a] rounded-xl p-6"
              >
                <ProjectCarousel
                  images={project.images}
                  onImageClick={() => setSelectedProject(project)}
                />

                <h3 className="text-xl font-semibold mt-4 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-300 mt-2">
                  {project.description}
                </p>

                <div className="mt-4 flex gap-3">
                
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition"
                  >
                    Ver projeto
                  </a>

           
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 bg-purple-700 rounded-lg text-white hover:bg-purple-600 transition"
                  >
                    Saiba mais
                  </button>
                </div>
              </article>
            ))}
          />
        </div>
      </div>


      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        description={selectedProject?.description || ""}
        images={selectedProject?.images || []}
      />
    </section>
  );
}
