import React from "react";
import { Gavel, Users2, LaptopMinimalCheck, NotebookPen } from "lucide-react";
import RoutesNavBar from "../RoutesNavBar/RoutesNavBar";
import logo from "../../images/Logo/LogBar.png";

const Navbar = () => {
  return (
    <header className="w-full">
      {/* <header className="w-full fixed top-0 left-0 z-50"> */}
      {/* Topbar */}
      <div className="bg-gray-200  h-8 flex items-center justify-center px-6 space-x-6 text-sm font-medium">
        <a
          href="https://faccerrado.npjdigital.com.br"
          className=" flex items-center gap-1 hover:text-gray-600">
          <Gavel size={20} /> NPJ Digital
        </a>
        <a
          href="https://www.unicollege.net/cerrado"
          className=" flex items-center gap-1 hover:text-gray-600">
          <Users2 size={20} /> Portal do Aluno
        </a>
        <a
          href="https://www.cerrado.eadmax.net/login/index.php"
          className=" flex items-center gap-1 hover:text-gray-600">
          <LaptopMinimalCheck size={20} /> Moodle
        </a>
        <a
          href="https://www.unicollege.net/cerrado"
          className=" flex items-center gap-1 hover:text-gray-600">
          <NotebookPen size={20} /> Portal do Professor
        </a>
      </div>

      {/* Navbar principal */}
      <div
        className="bg-white relative flex items-center justify-around px-8 py-2 mb-4" // <-- margem inferior
        style={{
          boxShadow: `
            0px 6px 0px #6B3E98,
            0px 12px 0px #1AB04B,
            0px 18px 0px #F58220
          `,
        }}>
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Faculdade Cerrado"
            className="h-16 w-auto object-contain" // <-- logo maior
          />
        </div>

        {/* Links de navegação */}
        <RoutesNavBar />
      </div>
    </header>
  );
};

export default Navbar;
