import React from "react";
import Navbar from "../../Components/NavBarBiblioteca/NavBarBiblioteca";
import { FileText } from "lucide-react";

export default function ManuaisInformativos() {
  const manuais = [
    {
      titulo: "Plano de Contingência - Biblioteca Virtual PEARSON",
      link: "https://gerenciador.faculdadecerrado.edu.br/uploads/Biblioteca/Manuais/Plano-de-contingencia-Biblioteca-Virtual-Pearson_BV4157.pdf",
    },
    {
      titulo: "Manual de Uso",
      link: "https://gerenciador.faculdadecerrado.edu.br/uploads/Biblioteca/Manuais/Manual-de-uso_BVU_Pearson.pdf",
    },
    {
      titulo: "Manual UNIBOOK",
      link: "https://gerenciador.faculdadecerrado.edu.br/uploads/Biblioteca/Manuais/MANUAL-UNIBOOK.pdf",
    },
    {
      titulo: "Plano de Contingência Biblioteca Faculdade Cerrado",
      link: "https://gerenciador.faculdadecerrado.edu.br/uploads/Biblioteca/Manuais/Plano-de-Contingencia-Biblioteca-Faculdade-Cerrado-2025.pdf",
    },
    {
      titulo: "Plano de Atualização, Manutenção do Acervo Biblioteca Cerrado",
      link: "https://gerenciador.faculdadecerrado.edu.br/uploads/Biblioteca/Manuais/Plano-de-Atualizacao-Manutencao-do-Acervo-Biblioteca-Cerrado_2025.pdf",
    },
    {
      titulo: "Orientações - Repositório Institucional",
      link: "https://gerenciador.faculdadecerrado.edu.br/uploads/Biblioteca/Manuais/Orientações-Repositório-Institucional-da-FACE.pdf",
    },
    {
      titulo: "Laboratórios virtuais Curatoria - Manual de uso",
      link: "https://gerenciador.faculdadecerrado.edu.br/uploads/Biblioteca/Manuais/Laboratorios-virtuais-Curatoria-Manual-de-uso.pdf",
    },
    {
      titulo: "Manual de uso - Biblioteca Virtual Curatoria",
      link: "https://gerenciador.faculdadecerrado.edu.br/uploads/Biblioteca/Manuais/Manual-de-uso-Biblioteca-Virtual-Curatoria.pdf",
    },
    {
      titulo: "Plano de Contingência - Biblioteca Curatoria",
      link: "https://gerenciador.faculdadecerrado.edu.br/uploads/Biblioteca/Manuais/Plano-de-Contigencia-Biblioteca-Curatoria.pdf",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-white px-6 md:px-20 py-12 mt-[20%] md:mt-[5%]">
        <h1 className="text-3xl font-bold text-gray-900 mb-10">
          Manuais Informativos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {manuais.map((manual, index) => (
            <a
              key={index}
              href={manual.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
              <FileText className="w-10 h-10 text-red-500" />
              <span className="text-gray-800 text-base font-medium">
                {manual.titulo}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
