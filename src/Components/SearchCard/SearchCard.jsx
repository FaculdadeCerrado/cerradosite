import { useState, useEffect, useRef } from "react";
import {
  Search,
  GraduationCap,
  BookOpen,
  Layers,
  Briefcase,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TypeWriter } from "../TypeWriter/TypeWriter";
import { getCursos } from "../../service/cursoService";

const courseCategories = [
  { value: "graduacao", label: "Graduação" },
  { value: "pos-graduacao", label: "Pós-graduação" },
  {
    value: "curso-horas-complementares",
    label: "Curso de Horas Complementares",
  },
  {
    value: "cursos-tecnicos",
    label: "Cursos Técnicos e Profissionalizantes",
  },
];

const categoryIcons = {
  bacharelado: GraduationCap,
  licenciatura: BookOpen,
  tecnológico: Layers,
  todos: Briefcase,
};

const texts = [
  "Digite o nome do curso...",
  "Graduação em Psicologia",
  "Graduação em Direito",
  "Graduação em Pedagogia ",
];

export default function CourseSearch() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [cursos, setCursos] = useState([]);

  const navigate = useNavigate();

  // REF DO CARROSSEL AUTOMÁTICO
  const carouselRef = useRef(null);

  // ===========================
  // CARROSSEL AUTOMÁTICO INFINITO
  // ===========================
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      scrollAmount += 1; // VELOCIDADE

      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
      }

      carousel.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // ===========================
  // Carrega cursos reais
  // ===========================
  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const data = await getCursos();
        setCursos(data || []);
      } catch (error) {
        console.error("Erro ao carregar cursos:", error);
      }
    };
    fetchCursos();
  }, []);

  // ===========================
  // Sistema de sugestões REAL
  // ===========================
  useEffect(() => {
    if (searchTerm.length > 0) {
      const termo = searchTerm.toLowerCase();

      const filtrados = cursos.filter((curso) => {
        const nome = curso.nome?.toLowerCase() || "";
        const tipo = curso.tipo?.toLowerCase() || "";

        const matchNome = nome.includes(termo);
        const matchCategoria =
          selectedCategory === "todos" || tipo === selectedCategory;

        return matchNome && matchCategoria;
      });

      setSuggestions(filtrados);
      setShowSuggestions(true);
      setNoResults(filtrados.length === 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      setNoResults(false);
    }
  }, [searchTerm, selectedCategory, cursos]);

  // ===========================
  // Clique em sugestão
  // ===========================
  const handleSuggestionClick = (curso) => {
    navigate(`/info-curso/${curso.id}`);
  };

  // ===========================
  // Buscar (Enter ou Botão)
  // ===========================
  const handleSearch = () => {
    navigate(
      `/cursos?search=${encodeURIComponent(
        searchTerm
      )}&categoria=${selectedCategory}`
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const getCategoryLabel = (value) => {
    const category = courseCategories.find((cat) => cat.value === value);
    return category ? category.label : "Selecione uma categoria";
  };

  // ===========================
  // LINKS POR CATEGORIA
  // ===========================
  const handleCategoryCardClick = (category) => {
    let url = "";

    if (category === "graduacao") {
      url = "https://faculdadecerrado.edu.br/cursos";
    } else {
      url =
        "https://www.faccerrado.eadmax.net/local/cursodetalhes/catalogo.php";
    }

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Venha estudar com a gente!
            </h1>

            {/* ==============================
        SEARCH RESPONSIVA
       ============================== */}
            <div className="max-w-5xl mx-auto w-full">
              <div className="bg-gradient-to-br from-purple-70 to-orange-70 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-purple-300 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
                  {/* Seleção de Categoria */}
                  <div className="w-full">
                    <label className="block text-purple-800 text-sm font-semibold mb-2 sm:mb-3">
                      Tipos de curso
                    </label>

                    <div className="relative">
                      <button
                        onClick={() => setIsSelectOpen(!isSelectOpen)}
                        className="w-full bg-white border border-purple-300 text-purple-800 h-12 rounded-xl px-4 flex items-center justify-between shadow-sm text-left text-sm sm:text-base">
                        <span>{getCategoryLabel(selectedCategory)}</span>

                        <svg
                          className={`w-5 h-5 transition-transform ${
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

                      {/* Dropdown */}
                      {isSelectOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-purple-200 rounded-xl shadow-lg z-50">
                          {courseCategories.map((category) => (
                            <button
                              key={category.value}
                              onClick={() => {
                                setSelectedCategory(category.value);
                                setIsSelectOpen(false);
                              }}
                              className={`w-full text-left px-4 py-3 text-sm hover:bg-purple-50 transition ${
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

                  {/* SearchBar */}
                  <div className="md:col-span-2 w-full relative">
                    <label className="block text-purple-800 text-sm font-semibold mb-2 sm:mb-3">
                      O que você procura?
                    </label>

                    <div className="relative">
                      <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="w-full bg-white border border-purple-300 text-gray-800 h-12 rounded-xl text-base sm:text-lg px-4 pr-14 shadow-sm"
                      />

                      {!searchTerm && (
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-sm sm:text-base">
                          <TypeWriter
                            textos={texts}
                            speed={80}
                            delayEntreTextos={1500}
                          />
                        </div>
                      )}

                      {/* Botão busca */}
                      <button
                        onClick={handleSearch}
                        className="absolute right-2 top-2 bg-gradient-to-r from-purple-500 to-orange-500 h-8 w-8 sm:h-9 sm:w-9 rounded-lg flex items-center justify-center shadow-md">
                        <Search className="h-4 w-4 text-white" />
                      </button>
                    </div>

                    {/* Dropdown Sugestões */}
                    {showSuggestions && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-purple-200 z-40 max-h-60 overflow-y-auto">
                        {suggestions.map((curso) => (
                          <button
                            key={curso.id}
                            onClick={() => handleSuggestionClick(curso)}
                            className="w-full text-left px-6 py-3 hover:bg-purple-50 border-b last:border-b-0">
                            {curso.nome}
                          </button>
                        ))}
                      </div>
                    )}

                    {noResults && (
                      <div className="bg-red-50 border border-red-300 rounded-lg p-3 text-red-700 mt-3 text-sm">
                        Nenhum curso encontrado. Tente outro termo.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================
            CARDS DE CATEGORIAS
           ============================== */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Veja nossas opções
          </h2>

          {/* MOBILE: CARROSSEL AUTOMÁTICO */}
          <div
            ref={carouselRef}
            className="md:hidden flex gap-6 overflow-x-auto px-2 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}>
            {[...courseCategories, ...courseCategories].map(
              (category, index) => {
                const gradients = [
                  "from-purple-500 to-purple-700",
                  "from-orange-500 to-orange-700",
                  "from-green-500 to-green-700",
                  "from-purple-600 to-orange-600",
                ];

                const Icon = categoryIcons[category.value];

                return (
                  <div
                    key={index}
                    className="min-w-[260px] snap-center flex-shrink-0 cursor-pointer transition-all duration-500 hover:scale-105 bg-white border-2 border-gray-200 overflow-hidden rounded-xl"
                    onClick={() => handleCategoryCardClick(category.value)}>
                    <div className="p-8 h-56 flex flex-col justify-center items-center text-center relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          gradients[index % 4]
                        } opacity-90 rounded-xl`}
                      />
                      <div className="relative z-10 flex flex-col items-center">
                        {Icon && <Icon className="w-12 h-12 mb-3 text-white" />}
                        <h3 className="text-xl font-bold mb-4 text-white">
                          {category.label}
                        </h3>
                        <div className="w-16 h-1 bg-white/80 rounded-full" />
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          {/* DESKTOP: GRID */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            {courseCategories.map((category, index) => {
              const gradients = [
                "from-purple-500 to-purple-700",
                "from-orange-500 to-orange-700",
                "from-green-500 to-green-700",
                "from-purple-600 to-orange-600",
              ];

              const Icon = categoryIcons[category.value];

              return (
                <div
                  key={category.value}
                  className="group cursor-pointer transition-all duration-500 hover:scale-105 bg-white border-2 border-gray-200 rounded-xl overflow-hidden"
                  onClick={() => handleCategoryCardClick(category.value)}>
                  <div className="p-8 h-56 flex flex-col justify-center items-center text-center relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-90 group-hover:opacity-100 transition-all rounded-xl`}
                    />
                    <div className="relative z-10 flex flex-col items-center">
                      {Icon && <Icon className="w-12 h-12 mb-3 text-white" />}
                      <h3 className="text-xl font-bold mb-4 text-white">
                        {category.label}
                      </h3>
                      <div className="w-16 h-1 bg-white/80 rounded-full" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
- https://www.linkedin.com/in/gabrielsouto01
- https://github.com/soutozk
- https://www.instagram.com/soutozk/
*/
