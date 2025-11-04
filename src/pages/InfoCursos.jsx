import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCursoCompleto } from "../service/cursoService";

export default function InfoCurso() {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <div className="p-6">
      <h1 className="text-3xl font-bold">{curso.nome}</h1>
      <p className="text-gray-600">{curso.tipo}</p>

      {/* FOTO */}
      {curso.foto && (
        <img
          src={curso.foto}
          className="w-full rounded-xl my-4"
          alt="imagem do curso"
        />
      )}

      {/* OBJETIVO */}
      {curso.objetivo && (
        <>
          <h2 className="font-semibold text-xl mt-4">Objetivo</h2>
          <p>{curso.objetivo}</p>
        </>
      )}

      {/* NOTA MEC */}
      {curso.nota_mec > 0 && (
        <>
          <h2 className="font-semibold text-xl mt-4">Nota MEC</h2>
          <p>{curso.nota_mec}</p>
        </>
      )}

      {/* CPC */}
      {curso.cpc > 0 && (
        <>
          <h2 className="font-semibold text-xl mt-4">CPC</h2>
          <p>{curso.cpc}</p>
        </>
      )}

      {/* SOBRE */}
      {curso.sobre && (
        <>
          <h2 className="font-semibold text-xl mt-4">Sobre o Curso</h2>
          <p>{curso.sobre}</p>
        </>
      )}

      {/* MERCADO */}
      {curso.mercado && (
        <>
          <h2 className="font-semibold text-xl mt-4">Mercado</h2>
          <p>{curso.mercado}</p>
        </>
      )}

      {/* DIFERENCIAIS */}
      {curso.diferenciais && (
        <>
          <h2 className="font-semibold text-xl mt-4">Diferenciais</h2>
          <p>{curso.diferenciais}</p>
        </>
      )}

      {/* PRÉ REQUISITOS */}
      {Array.isArray(curso.pre_requisitos) &&
        curso.pre_requisitos.length > 0 && (
          <>
            <h2 className="font-semibold text-xl mt-4">Pré-requisitos</h2>
            <ul className="list-disc ml-4">
              {curso.pre_requisitos.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        )}

      {/* TURNOS */}
      {Array.isArray(curso.turnos) && curso.turnos.length > 0 && (
        <>
          <h2 className="font-semibold text-xl mt-4">Turnos</h2>
          <p>{curso.turnos.join(", ")}</p>
        </>
      )}

      {/* MÓDULOS */}
      {Array.isArray(curso.modulos) && curso.modulos.length > 0 && (
        <>
          <h2 className="font-semibold text-xl mt-4">Módulos</h2>

          {curso.modulos.map((modulo) => (
            <div key={modulo.id} className="border p-4 rounded-lg mt-3">
              <h3 className="font-semibold text-lg">{modulo.nome}</h3>

              {modulo.disciplinas?.length > 0 ? (
                <ul className="ml-4 mt-2 list-disc">
                  {modulo.disciplinas.map((disc) => (
                    <li key={disc.id}>
                      {disc.nome}
                      {disc.carga_horaria && ` — ${disc.carga_horaria}h`}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
