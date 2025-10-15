const RoutesNavBar = () => {
  return (
    <div className="hidden md:flex items-center justify-center space-x-8 bg-transparent">
      <div className="relative group ">
        <a
          href="#institucional"
          className="relative text-white font-semibold text-xl transition-colors 
after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 
after:h-[2px] after:bg-purple-400 after:transition-all after:duration-500 
after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0 group">
          Institucional
        </a>

        {/* Dropdown */}
        <div
          className="absolute left-0 top-full mt-1 w-80 bg-white shadow-lg rounded-md
opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10 grid grid-cols-2 gap-4 p-4">
          {/* Coluna Institucional */}
          <div>
            <p className="text-purple-500 font-semibold border-b border-purple-200 mb-2 pb-1">
              Institucional
            </p>
            <a
              href="#sobre-nos"
              className="block px-2 py-1 rounded hover:bg-purple-100">
              Sobre nós
            </a>
          </div>

          {/* Coluna Comunicação */}
          <div>
            <p className="text-purple-500 font-semibold border-b border-purple-200 mb-2 pb-1">
              Comunicação
            </p>
            <a
              href="#redes-sociais"
              className="block px-2 py-1 rounded hover:bg-purple-100">
              Eventos
            </a>
          </div>
        </div>
      </div>

      <a
        href="#produtos"
        className="relative text-white font-semibold text-xl transition-colors after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.25,0.8,0.25,1)]  hover:after:w-full hover:after:left-0">
        Clínica Escola
      </a>
      <a
        href="#produtos"
        className="relative text-white font-semibold text-xl transition-colors after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.25,0.8,0.25,1)]  hover:after:w-full hover:after:left-0">
        Vestibular
      </a>

      <a
        href="/ouvidoria"
        className="relative text-white font-semibold text-xl transition-colors after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.25,0.8,0.25,1)]  hover:after:w-full hover:after:left-0">
        Ouvidoria
      </a>
      <a
        href="#produtos"
        className="relative text-white font-semibold text-xl transition-colors after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.25,0.8,0.25,1)]  hover:after:w-full hover:after:left-0">
        Diplomas
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
