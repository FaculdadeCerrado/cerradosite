import React, { useEffect, useState } from "react";

import { getProjects } from "../../service/projectsService";

const COLORS = ["border-purple-500", "border-green-500", "border-orange-500"];

export default function ProjectsSection() {
  const [search, setSearch] = useState("");

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-24 bg-white" id="projetos">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projetos</h2>
          <p className="text-xl text-gray-700">
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
            className="w-full px-4 py-3 rounded-xl border-[2px] border-[#3EC6AD] bg-white shadow-md focus:ring-2 focus:outline-none"
          />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.length === 0 && (
            <p className="text-center text-red-700 col-span-full">
              Nenhum projeto encontrado...
            </p>
          )}

          {filtered.map((project, index) => {
            const borderColor = COLORS[index % COLORS.length];

            return (
              <div key={project.id} className="group">
                {/* Card */}
                <div
                  className={`bg-white rounded-3xl shadow-lg overflow-hidden border-2 ${borderColor} transition-all hover:shadow-xl`}>
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
                    <h3 className="text-lg font-bold text-gray-800">
                      {project.title}
                    </h3>
                    <a
                      href={project.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block bg-purple-600 text-white font-semibold py-2 rounded-lg text-center hover:opacity-90 transition">
                      Visualizar
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
