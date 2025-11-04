import { useNavigate } from "react-router-dom";

const RoutesNavBar = () => {
  const navigate = useNavigate();

  const goToComunicacao = (categoria) => {
    navigate("/comunicacao", { state: { categoria } });
  };
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
          className="absolute left-0 top-full mt-1 w-80 bg-white shadow-lg rounded-md
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
