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

      {curso.foto && (
        <img src={curso.foto} className="w-full rounded-xl my-4" />
      )}

      {curso.objetivo && (
        <>
          <h2 className="font-semibold text-xl mt-4">Objetivo</h2>
          <p>{curso.objetivo}</p>
        </>
      )}

      <h2 className="font-semibold text-xl mt-4">Pré-requisitos</h2>
      <ul className="list-disc ml-4">
        {curso.pre_requisitos?.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 className="font-semibold text-xl mt-4">Turnos</h2>
      <p>{curso.turnos?.length > 0 ? curso.turnos.join(", ") : "Sem turnos"}</p>

      <h2 className="font-semibold text-xl mt-4">Módulos</h2>

      {curso.modulos?.length > 0 ? (
        curso.modulos.map((modulo) => (
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
            ) : (
              <p>Nenhuma disciplina cadastrada.</p>
            )}
          </div>
        ))
      ) : (
        <p>Nenhum módulo cadastrado.</p>
      )}
    </div>
  );
}
