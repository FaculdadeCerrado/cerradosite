import React, { useState } from "react";
import {
  Gavel,
  Users2,
  LaptopMinimalCheck,
  NotebookPen,
  X,
} from "lucide-react";
import RoutesNavBar from "../RoutesNavBar/RoutesNavBar";
import logo from "../../images/Logo/LogBar.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* TOPBAR — SOMENTE DESKTOP */}
      <div className="bg-gray-200 h-8 items-center justify-center px-6 space-x-6 text-sm font-medium hidden md:flex">
        <a
          href="https://faccerrado.npjdigital.com.br"
          className="flex items-center gap-1 hover:text-gray-600">
          <Gavel size={20} /> NPJ Digital
        </a>
        <a
          href="https://www.unicollege.net/cerrado"
          className="flex items-center gap-1 hover:text-gray-600">
          <Users2 size={20} /> Portal do Aluno
        </a>
        <a
          href="https://www.cerrado.eadmax.net/login/index.php"
          className="flex items-center gap-1 hover:text-gray-600">
          <LaptopMinimalCheck size={20} /> Moodle
        </a>
        <a
          href="https://www.unicollege.net/cerrado"
          className="flex items-center gap-1 hover:text-gray-600">
          <NotebookPen size={20} /> Portal do Professor
        </a>
      </div>

      {/* NAVBAR */}
      <div
        className="bg-white relative flex items-center justify-between md:justify-around px-8 py-2 mb-4"
        style={{
          boxShadow: `
            0px 6px 0px #6B3E98,
            0px 12px 0px #1AB04B,
            0px 18px 0px #F58220
          `,
        }}>
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Faculdade Cerrado"
            className="h-16 w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex">
          <RoutesNavBar />
        </div>

        {/* BT MOBILE */}
        <button
          className="md:hidden flex flex-col gap-[3px] active:scale-95 transition"
          onClick={() => setMenuOpen(true)}>
          <span className="w-7 h-[3px] bg-[#1AB04B] rounded"></span>
          <span className="w-7 h-[3px] bg-[#F58220] rounded"></span>
          <span className="w-7 h-[3px] bg-[#6B3E98] rounded"></span>
        </button>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* SIDEBAR MOBILE */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 p-6 transform transition-transform duration-300 md:hidden
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* LOGO + CLOSE */}
        <div className="flex justify-between items-center mb-6">
          <img src={logo} alt="Logo" className="h-12" />
          <button onClick={() => setMenuOpen(false)} className="p-2">
            <X size={28} className="text-gray-600" />
          </button>
        </div>

        {/* TOPBAR MOBILE DENTRO DA SIDE */}
        <div className="flex flex-col gap-4 border-b pb-4 mb-4">
          <a
            href="https://faccerrado.npjdigital.com.br"
            className="flex items-center gap-2 text-gray-800">
            <Gavel size={20} /> NPJ Digital
          </a>
          <a
            href="https://www.unicollege.net/cerrado"
            className="flex items-center gap-2 text-gray-800">
            <Users2 size={20} /> Portal do Aluno
          </a>
          <a
            href="https://www.cerrado.eadmax.net/login/index.php"
            className="flex items-center gap-2 text-gray-800">
            <LaptopMinimalCheck size={20} /> Moodle
          </a>
          <a
            href="https://www.unicollege.net/cerrado"
            className="flex items-center gap-2 text-gray-800">
            <NotebookPen size={20} /> Portal do Professor
          </a>
        </div>

        {/* ROTAS MOBILE */}
        <RoutesNavBar mobile />
      </aside>
    </header>
  );
};

export default Navbar;
