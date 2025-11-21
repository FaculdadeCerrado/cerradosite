import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import { getEventoCompleto, getEventos } from "../service/eventosService";

export default function EventoPage() {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getEventoCompleto(id);
      setEvento(data);
    }
    load();
  }, [id]);

  if (!evento) return <p className="p-6 text-gray-700">Carregando...</p>;

  return (
    <>
      <NavBar />

      <div className="max-w-4xl mx-auto p-6">
        {/* IMAGEM DO EVENTO */}
        {evento.imagem && (
          <img
            src={evento.imagem}
            alt={evento.titulo}
            className="w-full max-h-96 object-cover rounded"
          />
        )}

        {/* TÍTULO */}
        <h1 className="text-3xl font-bold mt-6">{evento.titulo}</h1>

        {/* DATAS */}
        <p className="text-gray-600 mt-1 text-sm">
          {evento.data_inicio}
          {evento.data_fim ? ` até ${evento.data_fim}` : ""}
        </p>

        {/* DESCRIÇÃO */}
        <p className="mt-6 text-gray-800 leading-relaxed">{evento.descricao}</p>

        {/* LOCAL */}
        {evento.local_evento && (
          <p className="mt-4 text-gray-700">
            <strong>Local:</strong> {evento.local_evento}
          </p>
        )}

        {/* HORÁRIO */}
        {evento.horario && (
          <p className="mt-2 text-gray-700">
            <strong>Horário:</strong> {evento.horario}
          </p>
        )}

        {/* PROGRAMAÇÃO */}
        {evento.programacao?.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Programação</h2>
            <ul className="list-disc pl-6 space-y-2">
              {evento.programacao.map((p, index) => (
                <li key={index}>{p}</li>
              ))}
            </ul>
          </div>
        )}

        {/* PALESTRANTES */}
        {evento.palestrantes?.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Palestrantes</h2>
            <ul className="list-disc pl-6 space-y-2">
              {evento.palestrantes.map((p, index) => (
                <li key={index}>
                  <strong>{p.nome}</strong>
                  {p.titulacao ? ` — ${p.titulacao}` : ""}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* LINK DE INSCRIÇÃO */}
        {evento.link_inscricao && (
          <a
            href={evento.link_inscricao}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Fazer inscrição
          </a>
        )}
      </div>
    </>
  );
}
