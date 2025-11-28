import { useState, useEffect } from "react";
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

// Categorias
const courseCategories = [
  { value: "graduacao", label: "Graduação" },
  { value: "pos-graduacao", label: "Pós-graduação" },
  {
    value: "curso-horas-complementares",
    label: "Curso de Horas Complementares",
  },
  { value: "cursos-tecnicos", label: "Cursos Técnicos e Profissionalizantes" },
];

// Ícones por categoria
const categoryIcons = {
  graduacao: GraduationCap,
  "pos-graduacao": BookOpen,
  "curso-horas-complementares": Layers,
  "cursos-tecnicos": Briefcase,
};

// Placeholders do TypeWriter
const texts = [
  "Digite o nome do curso...",
  "Graduação em Psicologia",
  "Graduação em Direito",
  "Graduação em Pedagogia",
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

  // Carrega cursos
  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const data = await getCursos();
        setCursos(data || []);
      } catch (err) {
        console.error("Erro ao carregar cursos:", err);
      }
    };
    fetchCursos();
  }, []);

  // Busca dinâmica
  useEffect(() => {
    if (!searchTerm) {
      setSuggestions([]);
      setShowSuggestions(false);
      setNoResults(false);
      return;
    }

    const termo = searchTerm.toLowerCase();

    const filtrados = cursos.filter((curso) => {
      const nome = curso.nome?.toLowerCase() || "";
      const tipo = curso.tipo?.toLowerCase() || "";

      return (
        nome.includes(termo) &&
        (selectedCategory === "todos" || tipo === selectedCategory)
      );
    });

    setSuggestions(filtrados);
    setShowSuggestions(true);
    setNoResults(filtrados.length === 0);
  }, [searchTerm, selectedCategory, cursos]);

  const handleSuggestionClick = (curso) => navigate(`/info-curso/${curso.id}`);

  const handleSearch = () => {
    navigate(
      `/cursos?search=${encodeURIComponent(
        searchTerm
      )}&categoria=${selectedCategory}`
    );
  };

  const handleKeyPress = (e) => e.key === "Enter" && handleSearch();

  const getCategoryLabel = (value) =>
    courseCategories.find((c) => c.value === value)?.label || "Selecione";

  // Links dos cards
  const getCategoryLink = (value) =>
    value === "graduacao"
      ? "https://faculdadecerrado.edu.br/cursos"
      : "https://www.faccerrado.eadmax.net/local/cursodetalhes/catalogo.php";

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* TÍTULO */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Venha estudar com a gente!
          </h1>

          {/* SEARCH BOX */}
          <div className="max-w-5xl mx-auto w-full">
            <div className="bg-gradient-to-br from-purple-70 to-orange-70 rounded-2xl p-6 md:p-8 border-2 border-purple-300 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* SELECT */}
                <div>
                  <label className="block text-purple-800 text-sm font-semibold mb-2">
                    Tipos de curso
                  </label>

                  <div className="relative w-full">
                    <button
                      onClick={() => setIsSelectOpen(!isSelectOpen)}
                      className="w-full bg-white border border-purple-300 text-purple-800 h-12 rounded-xl px-4 flex items-center justify-between shadow-sm">
                      <span className="truncate">
                        {getCategoryLabel(selectedCategory)}
                      </span>

                      <svg
                        className={`w-5 h-5 transition-transform ${
                          isSelectOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isSelectOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-purple-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                        {courseCategories.map((cat) => (
                          <button
                            key={cat.value}
                            onClick={() => {
                              setSelectedCategory(cat.value);
                              setIsSelectOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 text-sm hover:bg-purple-50 transition 
                              ${
                                selectedCategory === cat.value
                                  ? "bg-purple-50 text-purple-700"
                                  : ""
                              }`}>
                            {cat.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* SEARCH INPUT */}
                <div className="md:col-span-2 relative">
                  <label className="block text-purple-800 text-sm font-semibold mb-2">
                    O que você procura?
                  </label>

                  <div className="relative w-full">
                    <input
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="w-full bg-white border border-purple-300 text-gray-800 h-12 rounded-xl
                        text-base pl-4 pr-12 shadow-sm"
                    />

                    {!searchTerm && (
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none truncate max-w-[65vw]">
                        <TypeWriter
                          textos={texts}
                          speed={80}
                          delayEntreTextos={1500}
                        />
                      </div>
                    )}

                    <button
                      onClick={handleSearch}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r 
                        from-purple-500 to-orange-500 h-8 w-8 rounded-lg 
                        flex items-center justify-center shadow-md">
                      <Search className="h-4 w-4 text-white" />
                    </button>
                  </div>

                  {/* SUGESTÕES */}
                  {showSuggestions && (
                    <div
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl 
                      border border-purple-200 z-40 max-h-60 overflow-y-auto">
                      {suggestions.map((curso) => (
                        <button
                          key={curso.id}
                          onClick={() => handleSuggestionClick(curso)}
                          className="w-full text-left px-4 py-3 hover:bg-purple-50 border-b last:border-b-0">
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

        {/* CATEGORIAS - COLUNA MOBILE + GRID DESKTOP */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Veja nossas opções
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {courseCategories.map((category, index) => {
              const Icon = categoryIcons[category.value];

              const gradients = [
                "from-purple-500 to-purple-700",
                "from-orange-500 to-orange-700",
                "from-green-500 to-green-700",
                "from-purple-600 to-orange-600",
              ];

              return (
                <a
                  key={category.value}
                  href={getCategoryLink(category.value)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer block bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:scale-105 transition">
                  <div
                    className={`p-8 h-56 flex flex-col justify-center items-center text-center bg-gradient-to-br ${gradients[index]} rounded-xl`}>
                    {Icon && <Icon className="w-12 h-12 mb-3 text-white" />}
                    <h3 className="text-xl font-bold text-white">
                      {category.label}
                    </h3>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
