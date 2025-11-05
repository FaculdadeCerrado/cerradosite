import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Info, Layers, Star } from "lucide-react";
import { getCursoCompleto } from "../service/cursoService";
import NavBar from "../Components/NavBar/NavBar.jsx";
import { FaWhatsapp } from "react-icons/fa";

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

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen  text-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="border-t-4 border-purple-500 rounded-full w-12 h-12"
        />
        <p className="ml-4 text-lg">Carregando curso...</p>
      </div>
    );

  if (!curso) return <p>Curso não encontrado.</p>;

  return (
    <>
      <NavBar />
      <div className="w-full min-h-screen bg-[#f2f2f2]">
        {/* BANNER */}
        <div className="relative w-full h-72 md:h-96 overflow-hidden">
          <motion.img
            src={curso.foto}
            alt="banner curso"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 flex flex-col items-center justify-center text-white text-center p-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
              {curso.nome}
            </motion.h1>
            <span className="mt-4 bg-purple-600 text-white text-lg font-semibold px-3 py-1 rounded-full">
              {curso.tipo}
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 p-6 md:p-10">
          {/* CONTEÚDO PRINCIPAL */}
          <motion.div
            className="flex-1 bg-white  p-6 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            {/* TABS */}
            <div className="flex gap-4 border-b border-gray-300 dark:border-gray-700 pb-2">
              {[
                { key: "sobre", label: "Sobre", icon: Info },
                { key: "matriz", label: "Matriz Curricular", icon: Layers },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setTab(item.key)}
                  className={`flex items-center gap-2 pb-2 transition-all duration-300 ${
                    tab === item.key
                      ? "border-b-2 border-[#6B3E98] text-[#6B3E98] font-semibold"
                      : "text-gray-500 hover:text-purple-400"
                  }`}>
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
            </div>

            {/* CONTEÚDO: SOBRE */}
            <AnimatePresence mode="wait">
              {tab === "sobre" && (
                <motion.div
                  key="sobre"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 space-y-6">
                  {curso.objetivo && (
                    <section>
                      <h2 className="text-xl font-semibold mb-2 text-black">
                        Objetivo
                      </h2>
                      <p className=" text-gray-800   leading-relaxed">
                        {curso.objetivo}
                      </p>
                    </section>
                  )}

                  {curso.sobre && (
                    <section>
                      <h2 className="text-xl font-semibold mb-2 text-black">
                        Sobre o Curso
                      </h2>
                      <p className=" text-gray-800   leading-relaxed">
                        {curso.sobre}
                      </p>
                    </section>
                  )}

                  <h2 className="text-2xl font-bold mt-10">Mais informações</h2>

                  {[
                    {
                      key: "dif",
                      label: "Diferenciais",
                      text: curso.diferenciais,
                    },
                    {
                      key: "mercado",
                      label: "Mercado de Trabalho",
                      text: curso.mercado,
                    },
                  ].map(
                    (item) =>
                      item.text && (
                        <motion.div
                          key={item.key}
                          className="border border-[#6B3E98]  rounded-xl p-4 mt-4   cursor-pointer hover:shadow-md transition-all"
                          onClick={() =>
                            setOpenMais({
                              ...openMais,
                              [item.key]: !openMais[item.key],
                            })
                          }
                          whileHover={{ scale: 1.01 }}>
                          <div className="flex justify-between items-center font-semibold">
                            <p>{item.label}</p>
                            {openMais[item.key] ? (
                              <ChevronUp />
                            ) : (
                              <ChevronDown />
                            )}
                          </div>
                          <AnimatePresence>
                            {openMais[item.key] && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-2 ">
                                {item.text}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                  )}
                </motion.div>
              )}

              {/* CONTEÚDO: MATRIZ CURRICULAR */}
              {tab === "matriz" && (
                <motion.div
                  key="matriz"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6">
                  <h2 className="text-xl font-semibold text-[#6B3E98] mb-4">
                    Módulos do Curso
                  </h2>

                  {curso.modulos?.map((modulo, idx) => (
                    <motion.div
                      key={idx}
                      className="border border-[#6B3E98]  rounded-xl p-4 mt-4   cursor-pointer hover:shadow-md transition-all"
                      whileHover={{ scale: 1.01 }}
                      onClick={() =>
                        setOpenModulos({
                          ...openModulos,
                          [idx]: !openModulos[idx],
                        })
                      }>
                      <div className="flex justify-between items-center font-semibold text-lg">
                        <p>{modulo.nome}</p>
                        {openModulos[idx] ? <ChevronUp /> : <ChevronDown />}
                      </div>
                      <AnimatePresence>
                        {openModulos[idx] && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-4 mt-3 list-disc space-y-1 ">
                            {modulo.disciplinas?.map((d) => (
                              <li key={d.id}>
                                {d.nome}
                                {d.carga_horaria && (
                                  <span className="text-[#6B3E98] ml-1">
                                    ({d.carga_horaria}h)
                                  </span>
                                )}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ASIDE */}
          <motion.aside
            className="w-full md:w-72 bg-white border border-gray-200 rounded-2xl p-6 shadow-md h-fit"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-lg font-semibold mb-4 text-[#6B3E98]">
              <Star className="inline mr-2" /> Informações
            </h2>

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
                <ul className="list-disc ml-4 text-gray-800 ">
                  {curso.pre_requisitos.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            {curso.turnos?.length > 0 && (
              <p className="mt-4 mb-4">
                <strong>Turnos:</strong> {curso.turnos.join(", ")}
              </p>
            )}

            {/* === BOTÃO DO WHATSAPP === */}
            <p className="mt-4 text-lg font-bold">Tire sua dúvida!</p>
            <a
              href={`https://wa.me/556195838206?text=${encodeURIComponent(
                `Olá! Tenho interesse no curso "${curso.nome}" e gostaria de tirar algumas dúvidas.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-4 rounded-xl shadow-md transition-all duration-300">
              <FaWhatsapp className="w-8 h-8 text-white" />
              Falar no WhatsApp
            </a>
          </motion.aside>
        </div>
      </div>
    </>
  );
}
