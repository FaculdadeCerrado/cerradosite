import { useState } from "react";

export default function ProjectsSection() {
  const [search, setSearch] = useState("");

  const projects = [
    {
      id: 1,
      title: "Projeto de Inclusão Escolar – Autismo",
      cover: "/projetos/capa-autismo.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Grupo de Estudos – Transtornos de Humor",
      cover: "/projetos/capa-humor.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "NAPp – Apoio Psicopedagógico",
      cover: "/projetos/capa-napp.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Clínica Social – Atendimentos",
      cover: "/projetos/capa-clinica.jpg",
      link: "#",
    },
  ];

  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-24 bg-white" id="projetos">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#bfa22a]">
            Projetos
          </h2>
          <p className="text-lg text-gray-700">
            Explore nossos projetos, grupos e iniciativas acadêmicas.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12 relative">
          <input
            type="text"
            placeholder="Buscar projetos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#d9b848] bg-white shadow-md focus:ring-2 focus:ring-[#d9b848] focus:outline-none"
          />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.length === 0 && (
            <p className="text-center text-red-700  col-span-full">
              Nenhum projeto encontrado...
            </p>
          )}

          {filtered.map((project) => (
            <div key={project.id} className="group">
              {/* WRAPPER COM BORDA GRADIENTE */}
              <div
                className="
                  bg-gradient-to-br 
                  from-[#FFD700]
                  via-[#f0d46a]
                  to-[#c7a235]
                  p-[3px]
                  rounded-3xl
                  transition-all
                  group-hover:from-[#ffeaa6]
                  group-hover:via-[#ffdd55]
                  group-hover:to-[#d4b14a]
                ">
                {/* CARD INTERNO */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                  {/* Cover */}
                  <div className="w-full h-52 overflow-hidden">
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between h-40">
                    <h3 className="text-lg font-bold text-[#bfa22a]">
                      {project.title}
                    </h3>

                    <a
                      href={project.link}
                      className="mt-4 inline-block text-center bg-gradient-to-r from-[#FFD700] to-[#cfae2e] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition">
                      Visualizar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
