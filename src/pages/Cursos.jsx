import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar.jsx";
import { CalendarDays, Clock, Info, ArrowRight } from "lucide-react";
import { getCursos } from "../service/cursoService";

export default function Cursos() {
  const [openMenu, setOpenMenu] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect chamado");
    loadCursos();
  }, []);

  const loadCursos = async () => {
    try {
      const data = await getCursos();
      console.log("Cursos recebidos:", data);
      setCursos(data);
    } catch (error) {
      console.error("Erro ao carregar cursos:", error);
    }
  };

  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      const data = await getCursos();
      setCursos(data);
    };
    fetchCursos();
  }, []);

  return (
    <>
      <NavBar />
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {cursos.map((curso) => (
            <div
              key={curso.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition relative">
              {/* Badge Tipo */}
              <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {curso.tipo}
              </span>

              {/* Imagem */}
              <img
                src={curso.foto}
                alt={curso.nome}
                className="w-full h-48 object-cover"
              />

              <h2 className="text-xl font-semibold px-4 py-2">{curso.nome}</h2>

              <div className="bg-gray-50 border-t px-4 py-4">
                <div className="grid grid-cols-2 gap-2">
                  {/* Duração */}
                  <div className="flex flex-col">
                    <span className="flex gap-2 items-center font-semibold text-orange-500">
                      <CalendarDays size={18} /> Duração
                    </span>
                    <span>{curso.duracao}</span>
                  </div>

                  {/* Turnos */}
                  <div className="flex flex-col">
                    <span className="flex gap-2 items-center font-semibold text-orange-500">
                      <Clock size={18} /> Turnos
                    </span>
                    <span>{curso.turnos}</span>
                  </div>
                </div>

                {/* Botões */}
                <div className="flex gap-2 mt-4">
                  <button
                    className="flex-1 border border-purple-500 text-purple-600 font-medium py-2 rounded-full hover:bg-purple-100 transition flex items-center justify-center gap-2"
                    onClick={() => navigate(`/info-curso/${curso.id}`)}>
                    <Info size={18} />
                    Sobre o Curso
                  </button>

                  <button className="flex-1 bg-green-600 text-white font-medium py-2 rounded-full hover:bg-green-700 transition flex items-center justify-center gap-2">
                    Tenho Interesse
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
