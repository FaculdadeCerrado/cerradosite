import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import NavBar from "../Components/NavBar/NavBar";
import Banner from "../Components/BannerStatusEvento/BannerStatusEvento";
import Footer from "../Components/Footer/footer.jsx";
import { getEventoCompleto } from "../service/eventosService";

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

  if (!evento)
    return (
      <p className="p-6 text-gray-700 text-center text-lg animate-pulse">
        Carregando evento...
      </p>
    );

  return (
    <>
      <NavBar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}>
        <Banner status={evento.status_nome} />

        <div className="max-w-4xl mx-auto p-6">
          {/* IMAGEM DO EVENTO */}
          {evento.imagem && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={evento.imagem}
                alt={evento.titulo}
                className="w-full max-h-96 object-cover hover:scale-105 transition-all duration-[1500ms]"
              />
            </motion.div>
          )}

          {/* TÍTULO */}
          <motion.h1
            className="text-4xl font-bold mt-8 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}>
            {evento.titulo}
          </motion.h1>

          {/* DATAS */}
          <motion.p
            className="text-gray-600 mt-1 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
            {evento.data_inicio}
            {evento.data_fim ? ` até ${evento.data_fim}` : ""}
          </motion.p>

          {/* DESCRIÇÃO */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="mt-6 text-gray-800 leading-relaxed text-lg">
            {evento.descricao}
          </motion.p>

          {/* LOCAL */}
          {evento.local_evento && (
            <motion.p
              className="mt-4 text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}>
              <strong>Local:</strong> {evento.local_evento}
            </motion.p>
          )}

          {/* HORÁRIO */}
          {evento.horario && (
            <motion.p
              className="mt-2 text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.45 }}>
              <strong>Horário:</strong> {evento.horario}
            </motion.p>
          )}

          {/* PROGRAMAÇÃO (OBJETOS) */}
          {evento.programacao?.length > 0 && (
            <motion.div
              className="mt-10 bg-white rounded-2xl shadow p-6 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}>
              <h2 className="text-2xl font-semibold mb-4">Programação</h2>

              <div className="space-y-4">
                {evento.programacao.map((p, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: 0.55 + index * 0.15,
                    }}
                    className="p-4 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition">
                    <p>
                      <strong>Atividade:</strong> {p.atividade}
                    </p>
                    <p>
                      <strong>Horário:</strong> {p.horario}
                    </p>
                    <p>
                      <strong>Local:</strong> {p.local}
                    </p>
                    <p>
                      <strong>Data:</strong> {p.data}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* PALESTRANTES */}
          {evento.palestrantes?.length > 0 && (
            <motion.div
              className="mt-10 bg-white rounded-2xl shadow p-6 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}>
              <h2 className="text-2xl font-semibold mb-4">Palestrantes</h2>
              <ul className="space-y-3 text-gray-800">
                {evento.palestrantes.map((p, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: 0.75 + index * 0.15,
                    }}>
                    <strong>{p.nome}</strong>
                    {p.titulacao ? ` — ${p.titulacao}` : ""}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* LINK DE INSCRIÇÃO */}
          {evento.link_inscricao && (
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
              href={evento.link_inscricao}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 px-8 py-3 rounded-xl text-white text-lg font-semibold shadow-lg hover:shadow-xl transition bg-purple-600 hover:bg-purple-700">
              Inscrever-se
            </motion.a>
          )}
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
