import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCursoCompleto } from "../service/cursoService";
import NavBar from "../Components/NavBar/NavBar.jsx";

export default function InfoCurso() {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("sobre");
  const [openModulos, setOpenModulos] = useState({});
  const [openMais, setOpenMais] = useState({});

  useEffect(() => {
    const load = async () => {
      const data = await getCursoCompleto(id);
      setCurso(data);
      setLoading(false);
    };
    load();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!curso) return <p>Curso não encontrado.</p>;

  return (
    <>
      <NavBar />
      <div className="w-full">
        {/* BANNER */}
        <div className="relative w-full h-64 md:h-80 lg:h-96">
          <img
            src={curso.foto}
            alt="banner curso"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-6">
            <h1 className="text-4xl font-bold">{curso.nome}</h1>
            <p className="text-lg mt-1">{curso.tipo}</p>
          </div>
        </div>

        <div className="flex gap-6 p-6">
          {/* CONTEÚDO PRINCIPAL */}
          <div className="flex-1">
            {/* TABS */}
            <div className="flex gap-3 border-b pb-2">
              <button
                className={`pb-2 ${
                  tab === "sobre"
                    ? "border-b-2 border-purple-600 font-semibold"
                    : ""
                }`}
                onClick={() => setTab("sobre")}>
                Sobre
              </button>
              <button
                className={`pb-2 ${
                  tab === "matriz"
                    ? "border-b-2 border-purple-600 font-semibold"
                    : ""
                }`}
                onClick={() => setTab("matriz")}>
                Matriz Curricular
              </button>
            </div>

            {/* CONTEÚDO: SOBRE */}
            {tab === "sobre" && (
              <div className="mt-4">
                {curso.objetivo && (
                  <>
                    <h2 className="font-bold text-xl">Objetivo</h2>
                    <p className="mt-2">{curso.objetivo}</p>
                  </>
                )}

                {curso.sobre && (
                  <>
                    <h2 className="font-bold text-xl mt-6">Sobre o Curso</h2>
                    <p className="mt-2">{curso.sobre}</p>
                  </>
                )}

                {/* -------- MAIS INFORMAÇÕES -------- */}
                <h2 className="font-bold text-2xl mt-10">
                  Mais informações sobre o curso:
                </h2>

                {/* DIFERENCIAIS */}
                {curso.diferenciais && (
                  <div
                    className="border p-4 rounded-lg mt-4 cursor-pointer"
                    onClick={() =>
                      setOpenMais({ ...openMais, dif: !openMais.dif })
                    }>
                    <p className="font-semibold">DIFERENCIAIS:</p>
                    {openMais.dif && (
                      <p className="mt-2">{curso.diferenciais}</p>
                    )}
                  </div>
                )}

                {/* MERCADO */}
                {curso.mercado && (
                  <div
                    className="border p-4 rounded-lg mt-4 cursor-pointer"
                    onClick={() =>
                      setOpenMais({ ...openMais, mercado: !openMais.mercado })
                    }>
                    <p className="font-semibold">MERCADO:</p>
                    {openMais.mercado && (
                      <p className="mt-2">{curso.mercado}</p>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* CONTEÚDO: MATRIZ CURRICULAR */}
            {tab === "matriz" && (
              <div className="mt-4">
                <h2 className="font-bold text-xl">Módulos</h2>

                {curso.modulos?.map((modulo, idx) => (
                  <div key={idx} className="border rounded-lg p-4 mt-3">
                    <div
                      className="flex justify-between cursor-pointer"
                      onClick={() =>
                        setOpenModulos({
                          ...openModulos,
                          [idx]: !openModulos[idx],
                        })
                      }>
                      <p className="font-semibold text-lg">{modulo.nome}</p>
                      <span>{openModulos[idx] ? "▲" : "▼"}</span>
                    </div>

                    {openModulos[idx] && (
                      <ul className="ml-4 mt-3 list-disc">
                        {modulo.disciplinas?.map((d) => (
                          <li key={d.id}>
                            {d.nome}
                            {d.carga_horaria && ` — ${d.carga_horaria}h`}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ASIDE */}
          <aside className="w-64 border-l pl-4 hidden md:block">
            <h2 className="font-bold text-lg mb-3">Informações</h2>

            {curso.nota_mec > 0 && (
              <p>
                <strong>Nota MEC:</strong> {curso.nota_mec}
              </p>
            )}
            {curso.cpc > 0 && (
              <p>
                <strong>CPC:</strong> {curso.cpc}
              </p>
            )}
            {curso.pre_requisitos?.length > 0 && (
              <>
                <p className="font-semibold mt-4">Pré-requisitos:</p>
                <ul className="list-disc ml-4">
                  {curso.pre_requisitos.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            {curso.turnos?.length > 0 && (
              <p className="mt-4">
                <strong>Turnos:</strong> {curso.turnos.join(", ")}
              </p>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
