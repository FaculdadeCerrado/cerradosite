import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar.jsx";
import { CalendarDays, Clock, Info, ArrowRight, Search } from "lucide-react";
import { getCursos } from "../service/cursoService";
import { TypeWriter } from "../Components/TypeWriter/TypeWriter";
import WhatsAppWidget from "../Components/WppWidget/WppWidget";
import { motion, AnimatePresence } from "framer-motion";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);
  const [filteredCursos, setFilteredCursos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const navigate = useNavigate();
  const texts = [
    "Digite o nome do curso...",
    "Graduação em Psicologia",
    "Graduação em Direito",
    "Graduação em Pedagogia ",
  ];

  const courseCategories = [
    { value: "todos", label: "Todos" },
    { value: "bacharelado", label: "Bacharelado" },
    { value: "licenciatura", label: "Licenciatura" },
    { value: "tecnológico", label: "Tecnológico" },
  ];

  // Helper: capitaliza a primeira letra
  const capitalize = (s) =>
    typeof s === "string" && s.length > 0
      ? s.charAt(0).toUpperCase() + s.slice(1)
      : s;

  // Formata turno de várias formas possíveis
  const formatTurnos = (rawTurnos) => {
    if (!rawTurnos) return "Não informado";

    // Se já for array
    if (Array.isArray(rawTurnos)) {
      // Pode ser array de strings ou array de objetos { nome: 'matutino' }
      const items = rawTurnos
        .map((t) => {
          if (!t && t !== 0) return null;
          if (typeof t === "string") return t.trim();
          if (typeof t === "object" && (t.nome || t.name)) {
            return (t.nome || t.name).toString().trim();
          }
          return String(t).trim();
        })
        .filter(Boolean);
      return items.length ? items.map(capitalize).join(", ") : "Não informado";
    }

    // Se for string: "matutino, noturno"
    if (typeof rawTurnos === "string") {
      const items = rawTurnos
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      return items.length ? items.map(capitalize).join(", ") : "Não informado";
    }

    // Caso inesperado: converte para string
    try {
      const parsed = JSON.parse(rawTurnos);
      return formatTurnos(parsed);
    } catch {
      const s = String(rawTurnos).trim();
      return s ? capitalize(s) : "Não informado";
    }
  };

  // === BUSCA CURSOS ===
  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const data = await getCursos();

        // Normaliza turnos: se backend retornar JSON-string, tenta parsear, e garante array/string
        const cursosFormatados = (Array.isArray(data) ? data : []).map(
          (curso) => {
            // tenta transformar campos problemáticos
            let turnos = curso.turnos;

            // se veio como string JSON (ex: '["matutino"]'), tentar parse
            if (
              typeof turnos === "string" &&
              turnos.trim().startsWith("[") &&
              turnos.trim().endsWith("]")
            ) {
              try {
                turnos = JSON.parse(turnos);
              } catch {
                // manter como string e tratar depois
              }
            }

            return {
              ...curso,
              turnos, // mantemos a forma bruta; renderizamos com formatTurnos()
            };
          }
        );

        setCursos(cursosFormatados);
        setFilteredCursos(cursosFormatados);
      } catch (error) {
        console.error("Erro ao carregar cursos:", error);
      }
    };
    fetchCursos();
  }, []);

  const getCategoryLabel = (value) => {
    const category = courseCategories.find((c) => c.value === value);
    return category ? category.label : "Todos";
  };

  // === FILTRAGEM ===
  const filterCursos = (term = "", category = "todos") => {
    const termo = term.toLowerCase().trim();

    const results = cursos.filter((curso) => {
      const nome = curso.nome?.toLowerCase?.() || "";
      const tipo = curso.tipo?.toLowerCase?.() || "";

      const nomeMatch = nome.includes(termo);
      const categoriaMatch = category === "todos" || tipo === category;

      return nomeMatch && categoriaMatch;
    });

    setFilteredCursos(results);
    setNoResults(results.length === 0 && !!termo);
  };

  useEffect(() => {
    filterCursos(searchTerm, selectedCategory);
  }, [searchTerm, selectedCategory, cursos]);

  // === Animação Framer Motion ===
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // efeito em cascata
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <>
      <NavBar />
      <div className="p-6">
        {/* --- Search + Filter Container --- */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* === Category Filter === */}
            <div className="lg:col-span-1">
              <label className="block text-purple-800 text-sm font-semibold mb-3 text-left">
                Tipos de curso
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsSelectOpen(!isSelectOpen)}
                  className="w-full bg-white border border-purple-300 text-purple-800 h-12 rounded-xl hover:bg-purple-50 transition-all duration-200 shadow-sm px-4 text-left flex items-center justify-between">
                  <span>{getCategoryLabel(selectedCategory)}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      isSelectOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isSelectOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-purple-200 rounded-xl shadow-lg z-50">
                    {courseCategories.map((category) => (
                      <button
                        key={category.value}
                        onClick={() => {
                          setSelectedCategory(category.value);
                          setIsSelectOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-purple-50 transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl ${
                          selectedCategory === category.value
                            ? "bg-purple-50 text-purple-700"
                            : "text-gray-800"
                        }`}>
                        {category.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* === SearchBar === */}
            <div className="lg:col-span-2 relative">
              <label className="block text-purple-800 text-sm font-semibold mb-3 text-left">
                O que você procura?
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border border-purple-300 text-gray-800 pr-14 h-12 rounded-xl text-lg hover:bg-purple-50 focus:bg-white focus:border-purple-500 focus:outline-none transition-all duration-200 shadow-sm px-4"
                />

                {/* Placeholder animado */}
                {!searchTerm && (
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <TypeWriter
                      textos={texts}
                      speed={80}
                      delayEntreTextos={1500}
                    />
                  </div>
                )}

                {/* Ícone apenas ilustrativo */}
                <div className="absolute right-3 top-2.5 text-purple-500">
                  <Search className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>

          {/* === No Results Message === */}
          {noResults && searchTerm && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-800 text-sm">
              <span className="font-medium">
                O curso pesquisado não foi encontrado.
              </span>
              <p className="text-red-600 mt-1">
                Tente usar palavras-chave diferentes ou selecione outra
                categoria.
              </p>
            </div>
          )}
        </div>

        {/* --- Grid de Cursos com animação --- */}
        <AnimatePresence>
          {filteredCursos.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {filteredCursos.map((curso, i) => (
                <motion.div
                  key={curso.id}
                  custom={i}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={cardVariants}
                  className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition relative">
                  <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {curso.tipo}
                  </span>

                  <img
                    src={curso.foto}
                    alt={curso.nome}
                    className="w-full h-48 object-cover"
                  />

                  <h2 className="text-xl font-semibold px-4 py-2">
                    {curso.nome}
                  </h2>

                  <div className="bg-gray-50 border-t px-4 py-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="flex gap-2 items-center font-semibold text-orange-500">
                          <CalendarDays size={18} /> Duração
                        </span>
                        <span>{curso.duracao || "—"}</span>
                      </div>

                      <div className="flex flex-col">
                        <span className="flex gap-2 items-center font-semibold text-orange-500">
                          <Clock size={18} /> Turnos
                        </span>
                        <span>{formatTurnos(curso.turnos)}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <button
                        className="flex-1 border border-purple-500 text-purple-600 font-medium py-2 rounded-full hover:bg-purple-100 transition flex items-center justify-center gap-2"
                        onClick={() => navigate(`/info-curso/${curso.id}`)}>
                        <Info size={18} />
                        Sobre o Curso
                      </button>

                      <button className="flex-1 bg-green-600 text-white font-medium py-2 rounded-full hover:bg-green-700 transition flex items-center justify-center gap-2">
                        Tenho Interesse
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            !noResults && (
              <p className="text-center text-gray-500 mt-10">
                Carregando cursos...
              </p>
            )
          )}
        </AnimatePresence>
      </div>
      <WhatsAppWidget />
    </>
  );
}
{
  /* DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
     -https://www.linkedin.com/in/gabrielsouto01
     -https://github.com/soutozk
     -https://www.instagram.com/soutozk/ */
}
