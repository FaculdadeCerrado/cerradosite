import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RoutesNavBar = ({ mobile }) => {
  const navigate = useNavigate();

  const goToComunicacao = (categoria) => {
    navigate("/comunicacao", { state: { categoria } });
  };

  // Estados para dropdowns do MOBILE
  const [openInstitucional, setOpenInstitucional] = useState(false);
  const [openComunicacao, setOpenComunicacao] = useState(false);
  const [openBiblioteca, setOpenBiblioteca] = useState(false);

  // ------------------------------
  // MOBILE MODE
  // ------------------------------
  if (mobile) {
    return (
      <nav className="flex flex-col space-y-4 text-lg text-gray-800">
        {/* INSTITUCIONAL */}
        <button
          onClick={() => setOpenInstitucional(!openInstitucional)}
          className="flex justify-between items-center font-bold text-[#F5843D] w-full">
          Institucional
          <span>{openInstitucional ? "▲" : "▼"}</span>
        </button>

        {openInstitucional && (
          <div className="ml-4 space-y-2 animate-fadeIn">
            <a href="#sobre-nos" className="block">
              Sobre nós
            </a>
            <a href="#missao" className="block">
              Missão
            </a>
            <a href="#valores" className="block">
              Valores
            </a>
          </div>
        )}

        {/* COMUNICAÇÃO */}
        <button
          onClick={() => setOpenComunicacao(!openComunicacao)}
          className="flex justify-between items-center font-bold text-[#F5843D] w-full">
          Comunicação
          <span>{openComunicacao ? "▲" : "▼"}</span>
        </button>

        {openComunicacao && (
          <div className="ml-4 flex flex-col space-y-2 animate-fadeIn">
            <button
              onClick={() => goToComunicacao("eventos")}
              className="text-left">
              Eventos
            </button>
            <button
              onClick={() => goToComunicacao("noticias")}
              className="text-left">
              Notícias
            </button>
            <button
              onClick={() => goToComunicacao("videos")}
              className="text-left">
              Vídeos
            </button>
            <button
              onClick={() => goToComunicacao("fotos")}
              className="text-left">
              Fotos
            </button>
            <button
              onClick={() => goToComunicacao("comunicados")}
              className="text-left">
              Comunicados
            </button>
          </div>
        )}

        {/* NUPES */}
        <a href="/nupe" className="font-medium ">
          NUPE – Psicologia
        </a>
        <a href="/cpa">CPA</a>

        {/* CLÍNICA / CURSOS */}
        <a href="/clinica" className="font-medium text-[#F5843D]">
          Clínica Escola
        </a>
        <a href="/cursos">Cursos</a>

        {/* BIBLIOTECA */}
        <button
          onClick={() => setOpenBiblioteca(!openBiblioteca)}
          className="flex justify-between items-center font-bold text-[#F5843D]  w-full">
          Biblioteca
          <span>{openBiblioteca ? "▲" : "▼"}</span>
        </button>

        {openBiblioteca && (
          <div className="ml-4 flex flex-col space-y-2 animate-fadeIn">
            <a href="/repositorio-academico">Repositório Acadêmico</a>
          </div>
        )}

        {/* OUTRAS ROTAS */}
        <a
          href="https://unicollege.net/cerrado/ps/cadastroinc.aspx"
          className="font-medium">
          Vestibular
        </a>
        <a href="/ouvidoria">Ouvidoria</a>
        <a href="https://www.unicollege.net/cerrado/io03/Validador.aspx">
          Diplomas
        </a>

        {/* BOTÃO INSCRIÇÃO */}
        <a
          href="https://unicollege.net/cerrado/ps/cadastroinc.aspx"
          className="mt-4">
          <button className="w-full h-11 bg-[#F5843D] text-white rounded-xl">
            Inscreva-se
          </button>
        </a>
      </nav>
    );
  }

  return (
    <div className="hidden md:flex items-center space-x-8">
      <div className="relative group ">
        <a
          href="/sobre"
          className="relative text-black font-medium text-xl transition-colors 
after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 
after:h-[2px] after:bg-orange-400 after:transition-all after:duration-500 
after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0 group">
          Institucional
        </a>

        {/* Dropdown */}
        <div
          className="absolute left-0 top-full mt-1 w-96 bg-white shadow-lg rounded-md
opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10 grid grid-cols-2 gap-4 p-4">
          {/* Coluna Institucional */}
          <div>
            <p className="text-orange-500 font-semibold border-b border-orange-200 mb-2 pb-1">
              Institucional
            </p>
            <a
              href="#sobre-nos"
              className="block px-2 py-1 rounded hover:bg-orange-100">
              Sobre nós
            </a>
            <a
              href="#missao"
              className="block px-2 py-1 rounded hover:bg-orange-100">
              Missão
            </a>
            <a
              href="#valores"
              className="block px-2 py-1 rounded hover:bg-orange-100">
              Valores
            </a>
          </div>

          {/* Coluna Comunicação */}
          <div>
            <p className="text-orange-500 font-semibold border-b border-orange-200 mb-2 pb-1">
              Comunicação
            </p>
            <button
              onClick={() => goToComunicacao("eventos")}
              className="block text-left w-full px-2 py-1 rounded hover:bg-orange-100">
              Eventos
            </button>
            <button
              onClick={() => goToComunicacao("noticias")}
              className="block text-left w-full px-2 py-1 rounded hover:bg-orange-100">
              Notícias
            </button>
            <button
              onClick={() => goToComunicacao("videos")}
              className="block text-left w-full px-2 py-1 rounded hover:bg-orange-100">
              Vídeos
            </button>
            <button
              onClick={() => goToComunicacao("fotos")}
              className="block text-left w-full px-2 py-1 rounded hover:bg-orange-100">
              Fotos
            </button>
            <button
              onClick={() => goToComunicacao("comunicados")}
              className="block text-left w-full px-2 py-1 rounded hover:bg-orange-100">
              Comunicados
            </button>
          </div>
          {/* Coluna NUPE + CPA */}
          <div>
            <p className="text-orange-500 font-semibold border-b border-orange-200 mb-2 pb-1 w-40">
              Núcleos e Comissões
            </p>
            <p className="text-gray-600 text-sm font-medium mt-1 mb-1">
              NUPE – Psicologia
            </p>
            <a
              href="/nupe"
              className="block px-2 py-1 rounded hover:bg-orange-100 w-80">
              NUPE – Núcleo de Pesquisa e Extensão do Curso de Psicologia da
              Faculdade Cerrado
            </a>

            {/* CPA */}
            <p className="text-gray-600 text-sm font-medium mt-3 mb-1">CPA</p>
            <a
              href="/cpa"
              className="block px-2 py-1 rounded hover:bg-orange-100">
              Sobre a CPA
            </a>
          </div>
        </div>
      </div>

      <a
        href="#produtos"
        className="relative text-black font-medium text-xl transition-colors after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.25,0.8,0.25,1)]  hover:after:w-full hover:after:left-0">
        Clínica Escola
      </a>
      <a
        href="/cursos"
        className="relative text-black font-medium text-xl transition-colors after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.25,0.8,0.25,1)]  hover:after:w-full hover:after:left-0">
        Cursos
      </a>
      <div className="relative group ">
        <a
          href="/biblioteca"
          className="relative text-black font-medium text-xl transition-colors 
    after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 
    after:h-[2px] after:bg-orange-400 after:transition-all after:duration-500 
    after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0">
          Biblioteca
        </a>
        {/* Dropdown */}
        <div
          className="absolute left-0 top-full mt-1 w-[250px] bg-white shadow-lg rounded-md
    opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10">
          <a
            href="/repositorio-academico"
            className="block px-4 py-2 hover:bg-orange-100">
            Repositório Acadêmico
          </a>
        </div>
      </div>
      <a
        href="#produtos"
        className="relative text-black font-medium text-xl transition-colors after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.25,0.8,0.25,1)]  hover:after:w-full hover:after:left-0">
        Vestibular
      </a>

      <a
        href="/ouvidoria"
        className="relative text-black font-medium text-xl transition-colors after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.25,0.8,0.25,1)]  hover:after:w-full hover:after:left-0">
        Ouvidoria
      </a>
      <a
        href="https://www.unicollege.net/cerrado/io03/Validador.aspx"
        className="relative text-black font-medium text-xl transition-colors after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.25,0.8,0.25,1)]  hover:after:w-full hover:after:left-0">
        Diplomas
      </a>
      <a href="https://unicollege.net/cerrado/ps/cadastroinc.aspx">
        <button className="relative flex items-center h-11 px-5 pr-14 bg-[#F5843D] text-white font-medium text-[17px] rounded-xl shadow-inner shadow-[#F5843D]/70 overflow-hidden cursor-pointer group">
          Inscreva-se
          <div className="absolute right-1 flex items-center justify-center h-9 w-9 rounded-lg bg-white  transition-all duration-300 group-hover:w-[calc(100%-0.6em)] group-active:scale-95">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-[#F5843D] transition-transform duration-300 group-hover:translate-x-[2px]"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
            </svg>
          </div>
        </button>
      </a>
    </div>
  );
};

export default RoutesNavBar;
{
  /* DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
     -https://www.linkedin.com/in/gabrielsouto01
     -https://github.com/soutozk
     -https://www.instagram.com/soutozk/ */
}
