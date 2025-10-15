import React from "react";
import {
  Newspaper,
  Database,
  Archive,
  BookOpen,
  FileText,
  ExternalLink,
} from "lucide-react";

const RecursosPrincipais = () => {
  const recursos = [
    {
      icon: <Newspaper className="w-10 h-10 text-orange-500" />,
      title: "Periódicos Eletrônicos",
      description:
        "Acesse revistas científicas e publicações acadêmicas atualizadas",
      button: "Acessar Periódicos",
      link: "/periodicos-eletronicos",

      highlight: false,
    },
    {
      icon: <Database className="w-10 h-10 text-orange-500" />,
      title: "Base de Dados",
      description:
        "Consulte bases de dados especializadas por área do conhecimento",
      button: "Explorar Bases",
      link: "/base-de-dados",
      highlight: false,
    },
    {
      icon: <Archive className="w-10 h-10 text-orange-500" />,
      title: "Repositório Institucional",
      description:
        "Acesse trabalhos acadêmicos, teses e dissertações da instituição",
      button: "Acessar Repositório",
      link: "#",
      highlight: true,
    },
    {
      icon: <FileText className="w-10 h-10 text-orange-500" />,
      title: "Jornais Eletrônicos",
      description:
        "Consulte jornais nacionais e internacionais em formato digital",
      button: "Explorar Jornais",
      link: "/jornais-eletronicos",
      highlight: false,
    },
    {
      icon: <BookOpen className="w-10 h-10 text-orange-500" />,
      title: "Hemeroteca Virtual",
      description: "Acervo histórico de jornais e revistas digitalizados",
      button: "Explorar Acervo",
      link: "https://bndigital.bn.gov.br/hemeroteca-digital",
      highlight: false,
    },
    {
      icon: <BookOpen className="w-10 h-10 text-orange-500" />,
      title: "Bibliotecas Virtuais",
      description: "Links para bibliotecas digitais parceiras e conveniadas",
      button: "Acessar Bibliotecas",
      link: "#",
      highlight: false,
    },
  ];

  return (
    <section className="py-12 px-6 md:px-20 bg-white">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">
        Recursos Principais
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recursos.map((item, index) => (
          <div
            key={index}
            className={`relative border rounded-2xl p-6 shadow-sm transition-all hover:shadow-md ${
              item.highlight ? "bg-gray-100" : "bg-white"
            }`}>
            {/* Ícone superior direito */}
            <ExternalLink className="absolute top-4 right-4 w-4 h-4 text-gray-500" />

            {/* Ícone principal */}
            {item.icon}

            {/* Título e descrição */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{item.description}</p>

            {/* Botão */}
            <a
              href={item.link}
              className={`mt-6 inline-block w-full text-center font-medium py-2 px-4 rounded-lg border transition-colors ${
                item.highlight
                  ? "bg-black text-white hover:bg-gray-800"
                  : "border-gray-300 text-gray-800 hover:bg-gray-100"
              }`}>
              {item.button}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecursosPrincipais;
