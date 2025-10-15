import React from "react";
import RoutesNavBar from "../RoutesNavBarBiblioteca/RoutesNavBarBiblioteca";
import logo from "../../images/Logo/LogBar.png";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-transparent">
      {/* Topbar */}
      <div className=" bg-black/20 backdrop-blur-sm h-8 flex items-center justify-start pl-[22%] px-6 space-x-6 text-sm ">
        <a
          href="https://faccerrado.npjdigital.com.br"
          className=" flex items-center text-white font-semibold gap-1 hover:text-gray-600">
          Site Cerrado
        </a>
        <a
          href="https://www.unicollege.net/cerrado"
          className=" flex items-center text-white font-semibold gap-1 hover:text-gray-600">
          aaaaaaaaaaaa
        </a>
        <a
          href="https://www.cerrado.eadmax.net/login/index.php"
          className=" flex items-center text-white font-semibold gap-1 hover:text-gray-600">
          aaaaaaaaaaaa
        </a>
        <a
          href="https://www.unicollege.net/cerrado"
          className=" flex items-center text-white font-semibold gap-1 hover:text-gray-600">
          aaaaaaaaaaaa
        </a>
      </div>
      <div className="relative flex items-center justify-center gap-12 px-8 py-2 mb-4 backdrop-blur-sm bg-black/20">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Faculdade Cerrado"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Links de navegação */}
        <RoutesNavBar />
      </div>
    </header>
  );
};

export default Navbar;

{
  /* DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
     -https://www.linkedin.com/in/gabrielsouto01
     -https://github.com/soutozk
     -https://www.instagram.com/soutozk/ */
}
