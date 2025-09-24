const RoutesNavBar = () => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <a
        href="#home"
        className="text-black font-medium hover:text-yellow-400 transition-colors text-xl">
        Institucional
      </a>
      <a
        href="#produtos"
        className="text-black font-medium hover:text-yellow-400 transition-colors text-xl">
        Clínica Escola
      </a>
      <a
        href="#servicos"
        className="text-black font-medium hover:text-yellow-400 transition-colors text-xl">
        Cursos
      </a>
      <a
        href="#servicos"
        className="text-black font-medium hover:text-yellow-400 transition-colors text-xl">
        Biblioteca
      </a>
      <a
        href="#servicos"
        className="text-black font-medium hover:text-yellow-400 transition-colors text-xl">
        Vestibular
      </a>
      <a
        href="#contato"
        className="text-black font-medium hover:text-yellow-400 transition-colors text-xl">
        Portais
      </a>
      <a
        href="#contato"
        className="text-black font-medium hover:text-yellow-400 transition-colors text-xl">
        Ouvidoria
      </a>
      <a
        href="#contato"
        className="text-black font-medium hover:text-yellow-400 transition-colors text-xl">
        Diplomas
      </a>
      {/* <a
        href="#contato"
        className="text-black font-medium hover:text-yellow-400 transition-colors text-xl">
        Contato
      </a> */}
    </div>
  );
};

export default RoutesNavBar;
