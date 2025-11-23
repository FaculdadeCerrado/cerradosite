import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Newspaper,
  Bell,
  Calendar,
  Paintbrush,
  Layers,
} from "lucide-react";

// NAVBAR COMPONENT
function Navbar() {
  return (
    <nav className="w-full  p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-white">
        <h1 className="text-xl text-black font-semibold tracking-wide">
          Painel Administrativo
        </h1>
        <div className="flex gap-4 text-black font-bold text-sm">
          <button className="px-3 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition">
            <Link to="/" className="hover:opacity-80 transition">
              Sair
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

// FOOTER COMPONENT
function Footer() {
  return (
    <footer className="w-full mt-10 bg-gray-900 text-gray-300 py-6 text-center text-sm">
      <a href="https://www.linkedin.com/in/gabrielsouto01">
        <p>
          © {new Date().getFullYear()} — Painel Administrativo • Gabriel Souto
        </p>
      </a>
    </footer>
  );
}

export default function PainelAdmin() {
  const cards = [
    {
      title: "Gerenciar Cursos",
      icon: <BookOpen size={20} />,
      to: "/gerenciador-cursos",
    },
    {
      title: "Notícias",
      icon: <Newspaper size={20} />,
      to: "/gerenciador-noticias",
    },
    {
      title: "Comunicados",
      icon: <Bell size={20} />,
      to: "/gerenciador-comunicados",
    },
    {
      title: "Eventos",
      icon: <Calendar size={20} />,
      to: "/gerenciador-eventos",
    },
    {
      title: "Theme / Aparência",
      icon: <Paintbrush size={20} />,
      to: "/gerenciador-temas",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      {/* NAVBAR */}
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl  text-black font-bold bg-clip-text s">
              Painel Admin
            </h1>
            <p className="text-sm text-gray-600">
              Acesse rapidamente as áreas administrativas
            </p>
          </div>
        </motion.header>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}>
              <Link
                to={c.to}
                className="group block bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-200 transition duration-200"
                aria-label={c.title}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gray-100 rounded-xl text-purple-600">
                        {c.icon}
                      </div>
                      <h2 className="text-lg font-medium text-gray-800">
                        {c.title}
                      </h2>
                    </div>
                    <p className="mt-3 text-sm text-gray-500">
                      Clique para gerenciar {c.title.toLowerCase()}.
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-purple-600">
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ATALHOS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 bg-white rounded-xl p-5 shadow-md border border-gray-200">
          <h3 className="font-medium text-gray-800">Atalhos rápidos</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {cards.slice(0, 3).map((c) => (
              <Link
                key={c.title}
                to={c.to}
                className="px-3 py-2 bg-gradient-to-r from-purple-400 to-purple-800 text-white rounded-md text-sm hover:opacity-90 transition">
                {c.title}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
