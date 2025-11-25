import React from "react";
import { Scale, FileText, Info, Eye } from "lucide-react";

const NormasRegulamentos = () => {
  const cards = [
    {
      icon: <Scale className="w-10 h-10 text-green-500" />,
      title: "Regulamento da Biblioteca",
      description: "Conheça as regras e diretrizes de uso da biblioteca",
      iconButton: <Eye className="w-4 h-4 text-green-500" />,
      buttonColor: "text-green-500",
      buttonText: "Visualizar",
      link: "https://gerenciador.faculdadecerrado.edu.br/uploads/Biblioteca/Regulamento/Regulamento-da-Biblioteca.pdf",
    },
    {
      icon: <FileText className="w-10 h-10 text-orange-500" />,
      title: "Normas de Trabalho",
      description: "Diretrizes ABNT para formatação de trabalhos acadêmicos",
      iconButton: <Eye className="w-4 h-4 text-orange-500" />,
      buttonColor: "text-orange-500",
      buttonText: "Visualizar",
      link: "https://gerenciador.faculdadecerrado.edu.br/uploads/Biblioteca/Normas-Abnt/Cat%C3%A1logo_ABNT-NBRs.pdf",
    },
    {
      icon: <Info className="w-10 h-10 text-purple-500" />,
      title: "Manuais Informativos",
      description: "Guias práticos para uso dos recursos da biblioteca",
      iconButton: <Eye className="w-4 h-4 text-purple-500" />,
      buttonColor: "text-purple-500",
      buttonText: "Consultar",
      link: "/manuais-informativos",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-20 bg-white">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">
        Normas e Regulamentos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            {card.icon}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {card.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm text-center">
              {card.description}
            </p>

            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 inline-flex items-center gap-2 text-sm font-medium transition-colors ${card.buttonColor} hover:opacity-80`}>
              {card.iconButton}
              {card.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NormasRegulamentos;

/* 
  DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
  - https://www.linkedin.com/in/gabrielsouto01
  - https://github.com/soutozk
  - https://www.instagram.com/soutozk/
*/
