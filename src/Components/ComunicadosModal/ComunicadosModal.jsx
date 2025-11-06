import { useEffect, useState } from "react";
import { getComunicados } from "../../service/comunicadosService";

export default function ComunicadosModal() {
  const [open, setOpen] = useState(false);
  const [comunicados, setComunicados] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getComunicados();

      // filtra apenas os destacados
      const destacados = data.filter((c) => Number(c.destaque) === 1);

      setComunicados(destacados);

      if (destacados.length > 0) {
        setOpen(true);
      }
    }

    load();
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div
        className="bg-white w-full max-w-sm sm:max-w-lg rounded-lg shadow-lg p-6"
        style={{
          boxShadow: `
            0px 6px 0px #6B3E98,
            0px 12px 0px #1AB04B,
            0px 18px 0px #F58220
          `,
        }}>
        <h2 className="text-xl font-bold mb-4 text-[#6B3E98]">
          Comunicados importantes
        </h2>
        <div className="space-y-4 max-h-[60vh] overflow-y-auto ">
          {comunicados.map((c) => (
            <div
              key={c.id}
              className="border rounded-lg p-3 shadow-xl bg-gray-50">
              <h3 className="font-semibold">{c.titulo}</h3>
              <p className="text-gray-500 text-sm">{c.data_publicacao}</p>
              <p className="mt-2 text-gray-700">{c.conteudo}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            onClick={() => setOpen(false)}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
