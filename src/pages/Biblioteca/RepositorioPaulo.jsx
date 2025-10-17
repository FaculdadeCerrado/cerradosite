import React from "react";
import { BookOpen, FileText, Library, Eye } from "lucide-react";
import Libras from "../../images/Logo/Libras.png";

const PauloFreirePage = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-6">
      {/* Título */}
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Repositório Paulo Freire
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
        {/* Vídeo do YouTube */}
        <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-md flex justify-center items-center">
          <iframe
            className="w-full h-64 md:h-80"
            src="https://www.youtube.com/embed/VjjV8ROzMho?si=INgHB8A3uFMQ-vma"
            title="Vídeo de Paulo Freire"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        </div>

        {/* Paulo Freire em Libras */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <a href=""></a>
          <img
            src={Libras}
            alt="Paulo Freire em Libras"
            className="rounded-lg w-60  object-cover mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800">
            Paulo Freire em Libras
          </h2>
        </div>
      </div>

      <hr className="border-gray-300 w-full max-w-5xl mb-10" />

      {/* Cards inferiores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <FileText className="w-10 h-10 text-green-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-800">
            Conheça o Paulo Freire e sua história
          </h3>
          <button
            className={`mt-4 inline-flex text-green-600 items-center gap-2 text-sm font-medium transition-colors hover:opacity-80`}>
            <Eye className="w-4 h-4 text-green-500" />
            <a href="">Visualizar</a>
          </button>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <BookOpen className="w-10 h-10 text-orange-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-800">
            E-Books de <br /> Paulo Freire
          </h3>
          <button
            className={`mt-4 inline-flex items-center text-orange-600 gap-2 text-sm font-medium transition-colors hover:opacity-80`}>
            <Eye className="w-4 h-4 text-orange-500" />
            <a href="http://acervo.paulofreire.org:8080/xmlui/">Visualizar</a>
          </button>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <Library className="w-10 h-10 text-purple-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-800">
            Obras Ministério da Educação – Domínio Público
          </h3>
          <button
            className={`mt-4 inline-flex items-center text-purple-600 gap-2 text-sm font-medium transition-colors hover:opacity-80`}>
            <Eye className="w-4 h-4 text-purple-500" />
            <a href="http://www.dominiopublico.gov.br/pesquisa/ResultadoPesquisaObraForm.do">
              Visualizar
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PauloFreirePage;
