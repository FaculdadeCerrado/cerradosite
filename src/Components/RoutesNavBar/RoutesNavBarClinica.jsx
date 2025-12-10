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
        {/* INSTITUCIONAL (dropdown) */}
        <div className="flex flex-col">
          <div className=" flex flex-col space-y-2">
            <a
              href="https://faculdadecerrado.online/agendamentos"
              className="relative text-black font-medium text-xl 
        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
        after:bg-purple-400 after:transition-all after:duration-500 hover:after:w-full">
              Agendamentos
            </a>
            <a
              href="#projetos"
              className="relative text-black font-medium text-xl 
        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
        after:bg-purple-400 after:transition-all after:duration-500 hover:after:w-full">
              Projetos
            </a>
          </div>
          <button
            onClick={() => setOpenInstitucional(!openInstitucional)}
            className="relative font-bold text-[#F5843D] text-xl w-full flex justify-between items-center 
          after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-400 
          after:transition-all after:duration-500 hover:after:w-full">
            Laboratorios
            <span>{openInstitucional ? "▲" : "▼"}</span>
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden ${
              openInstitucional
                ? "max-h-40 opacity-100 mt-2"
                : "max-h-0 opacity-0"
            }`}>
            <div className="ml-3 flex flex-col space-y-2">
              <a
                href="https://bibliogratuita.curatoriaeditora.com.br/"
                className="block px-2 py-1 rounded hover:bg-purple-100">
                NeuroCuratoria
              </a>
              <a
                href="https://www.unicollege.net/bibliotecacerrado/loginform.asp"
                className="block px-2 py-1 rounded hover:bg-purple-100">
                Unibook
              </a>
            </div>
          </div>
        </div>
        <div className=" flex flex-col space-y-2">
          <a
            href="#sobre"
            className="relative text-black font-medium text-xl 
        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
        after:bg-purple-400 after:transition-all after:duration-500 hover:after:w-full">
            Sobre
          </a>
        </div>
      </nav>
    );
  }
  return (
    <div className="hidden md:flex items-center space-x-8">
      <a
        href="https://faculdadecerrado.online/agendamentos"
        className="relative text-black font-medium text-xl transition-colors after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.25,0.8,0.25,1)]  hover:after:w-full hover:after:left-0">
        Agendamentos
      </a>
      <a
        href="#projetos"
        className="relative text-black font-medium text-xl transition-colors after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.25,0.8,0.25,1)]  hover:after:w-full hover:after:left-0">
        Projetos
      </a>
      <div className="relative group ">
        <a
          href="/sobre"
          className="relative text-black font-medium text-xl transition-colors 
after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 
after:h-[2px] after:bg-purple-400 after:transition-all after:duration-500 
after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0 group">
          Laboratorios
        </a>
        {/* Dropdown */}
        <div
          className="absolute left-0 top-full mt-1 w-96 bg-white shadow-lg rounded-md
opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10 grid grid-cols-2 gap-4 p-4">
          {/* Coluna Laboratorios */}
          <div>
            <p className="text-purple-500 font-semibold border-b border-purple-200 mb-2 pb-1">
              Laboratorios
            </p>
            <a
              href="https://bibliogratuita.curatoriaeditora.com.br/"
              className="block px-2 py-1 rounded hover:bg-purple-100">
              NeuroCuratoria
            </a>
            <a
              href="https://www.unicollege.net/bibliotecacerrado/loginform.asp"
              className="block px-2 py-1 rounded hover:bg-purple-100">
              Unibook
            </a>
          </div>
        </div>
      </div>
      <a
        href="#sobre"
        className="relative text-black font-medium text-xl transition-colors after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.25,0.8,0.25,1)]  hover:after:w-full hover:after:left-0">
        Sobre
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
