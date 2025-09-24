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

const courseData = {
  graduacao: ["Administração"],
  "pos-graduacao": ["MBA em Gestão"],
  "curso-horas-complementares": [],
  "cursos-tecnicos": ["Técnico em Informática"],
};

const courseCategories = [
  { value: "graduacao", label: "Graduação" },
  { value: "pos-graduacao", label: "Pós-graduação" },
  {
    value: "curso-horas-complementares",
    label: "Curso de Horas Complementares",
  },
  { value: "cursos-tecnicos", label: "Cursos Técnicos e Profissionalizantes" },
];

const categoryIcons = {
  graduacao: GraduationCap,
  "pos-graduacao": BookOpen,
  "curso-horas-complementares": Layers,
  "cursos-tecnicos": Briefcase,
};

const texts = [
  //   "Digite o nome do curso...",
  "Graduação em Psicologia",
  "Graduação em Direito",
  "Graduação em Pedagogia ",
];

export default function CourseSearch() {
  const [selectedCategory, setSelectedCategory] = useState("graduacao");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.length > 0) {
      const categoryData = courseData[selectedCategory] || [];
      const filtered = categoryData.filter((course) =>
        course.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
      setNoResults(filtered.length === 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      setNoResults(false);
    }
  }, [searchTerm, selectedCategory]);

  const handleSuggestionClick = (course) => {
    setSearchTerm(course);
    setShowSuggestions(false);
    navigate(
      `/curso/${encodeURIComponent(course.toLowerCase().replace(/\s+/g, "-"))}`
    );
  };

  const handleCategoryCardClick = (category) => {
    navigate(`/categoria/${category}`);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(
        `/busca?q=${encodeURIComponent(
          searchTerm
        )}&categoria=${selectedCategory}`
      );
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const getCategoryLabel = (value) => {
    const category = courseCategories.find((cat) => cat.value === value);
    return category ? category.label : "Selecione uma categoria";
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Header  */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-5xl font-bold mb-8 ">
            Venha estudar com a gente!
          </h1>

          {/* Search  */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-70 to-orange-70 rounded-2xl p-8 border-2 border-purple-300 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Category Filter */}
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

                {/* SearchBar */}
                <div className="lg:col-span-2 relative">
                  <label className="block text-purple-800 text-sm font-semibold mb-3 text-left">
                    O que você procura?
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyPress={handleKeyPress}
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
                    <button
                      onClick={handleSearch}
                      className="absolute right-2 top-2 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 h-8 w-8 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 flex items-center justify-center">
                      <Search className="h-4 w-4 text-white" />
                    </button>
                  </div>

                  {/* Suggestions Dropdown */}
                  {showSuggestions && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border-2 border-purple-200 z-50 max-h-60 overflow-y-auto">
                      {suggestions.map((course, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(course)}
                          className="w-full text-left px-6 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-orange-50 text-gray-800 border-b border-gray-100 last:border-b-0 transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl">
                          <span className="font-medium">{course}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* No Results Message */}
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
          </div>
        </div>

        {/* Course Categories Cards */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Veja nossas opções
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseCategories.map((category, index) => {
              const gradients = [
                "from-purple-500 to-purple-700",
                "from-orange-500 to-orange-700",
                "from-green-500 to-green-700",
                "from-purple-600 to-orange-600",
              ];

              const Icon = categoryIcons[category.value]; // pega ícone certo

              return (
                <div
                  key={category.value}
                  className="group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white border-2 border-gray-200 text-white overflow-hidden hover:border-purple-300 rounded-xl"
                  onClick={() => handleCategoryCardClick(category.value)}
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  }}>
                  <div className="p-8 h-56 flex flex-col justify-center items-center text-center relative">
                    {/* background gradiente */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-90 group-hover:opacity-100 transition-all duration-500 rounded-xl`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl" />

                    {/* conteúdo */}
                    <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                      {/* ícone */}
                      {Icon && <Icon className="w-12 h-12 mb-3 text-white" />}
                      {/* título */}
                      <h3 className="text-xl font-bold mb-4 leading-tight text-white">
                        {category.label}
                      </h3>
                      <div className="w-16 h-1 bg-white/80 rounded-full mx-auto group-hover:w-20 transition-all duration-300" />
                    </div>

                    {/* botão search */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Search className="w-4 h-4 text-white" />
                      </div>
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
