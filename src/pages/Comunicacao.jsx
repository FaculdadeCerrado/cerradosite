import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/footer.jsx";

import { motion } from "framer-motion";

import { videos } from "../../src/Data/VideoData";
import { getNoticias } from "../service/noticiaService";
import { getComunicados } from "../service/comunicadosService";
import { getEventos } from "../service/eventosService";

export default function Comunicacao() {
  const [active, setActive] = useState("noticias");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const [newsData, setNewsData] = useState([]);
  const [comunicadosData, setComunicadosData] = useState([]);
  const [eventosData, setEventosData] = useState([]);

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedComunicado, setSelectedComunicado] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Fotos estáticas
  const photos = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
    "/images/photo6.jpg",
  ];

  useEffect(() => {
    if (location.state?.categoria) {
      setActive(location.state.categoria);
    }
  }, [location.state]);

  useEffect(() => {
    async function loadNoticias() {
      const data = await getNoticias();
      setNewsData(data);
    }
    loadNoticias();
  }, []);

  useEffect(() => {
    async function loadComunicados() {
      const data = await getComunicados();
      setComunicadosData(data);
    }
    loadComunicados();
  }, []);

  useEffect(() => {
    async function loadEventos() {
      const data = await getEventos();
      setEventosData(data);
    }
    loadEventos();
  }, []);

  // FILTROS
  const filteredVideos = videos.filter((v) =>
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredComunicados = comunicadosData.filter((c) =>
    c.titulo.toLowerCase().includes(search.toLowerCase())
  );

  const filteredEventos = eventosData.filter((e) =>
    e.titulo.toLowerCase().includes(search.toLowerCase())
  );

  // COR DO STATUS
  function getStatusColor(status) {
    switch (status) {
      case "Evento em andamento":
        return {
          border: "border-purple-500",
          badge: "bg-purple-600",
        };
      case "Evento em breve":
        return {
          border: "border-green-500",
          badge: "bg-green-600",
        };
      case "Evento encerrado":
        return {
          border: "border-gray-500",
          badge: "bg-gray-500",
        };
      case "Evento cancelado":
        return {
          border: "border-red-600",
          badge: "bg-red-600",
        };
      default:
        return {
          border: "border-gray-300",
          badge: "bg-gray-400",
        };
    }
  }

  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-gray-100 text-gray-800 flex">
        {/* SIDEBAR */}
        <aside className="hidden md:block w-52 bg-white border-r p-4 sticky top-0 h-screen">
          <nav className="flex flex-col gap-2">
            {["noticias", "videos", "fotos", "eventos", "comunicados"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`p-2 rounded-md text-left ${
                    active === item
                      ? "bg-gray-200 font-semibold"
                      : "hover:bg-gray-100"
                  }`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              )
            )}
          </nav>
        </aside>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden w-full border-b p-3 flex justify-between items-center bg-white">
          <span className="font-semibold">Comunicação</span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="border px-3 py-2 rounded-md">
            Menu
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden absolute top-14 left-0 bg-white w-64 shadow p-4 z-40">
            <nav className="flex flex-col gap-2">
              {["noticias", "videos", "fotos", "eventos", "comunicados"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActive(item);
                      setMobileOpen(false);
                    }}
                    className="text-left p-2 rounded-md hover:bg-gray-100">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
            </nav>
          </div>
        )}

        {/* MAIN AREA */}
        <main className="flex-1 p-6">
          <h1 className="text-xl font-semibold capitalize mb-4">{active}</h1>

          {active !== "fotos" && active !== "noticias" && (
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full max-w-md p-2 border rounded-md mb-6"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          )}

          {/* NOTÍCIAS */}
          {active === "noticias" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData.map((news) => (
                <div
                  key={news.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md cursor-pointer transition-shadow"
                  onClick={() => navigate(`/noticia/${news.id}`)}>
                  <img
                    src={news.imagem}
                    alt={news.titulo}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4">
                    <p className="text-xs text-gray-500">
                      {news.data_publicacao}
                    </p>
                    <h3 className="font-semibold">{news.titulo}</h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                      {news.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* VÍDEOS */}
          {active === "videos" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((v) => (
                <motion.div
                  key={v.id}
                  onClick={() => setSelectedVideo(v)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg cursor-pointer">
                  <div className="overflow-hidden">
                    <img
                      src={v.thumbnail}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4 text-gray-700">{v.title}</div>
                </motion.div>
              ))}
            </div>
          )}

          {/* FOTOS */}
          {active === "fotos" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {photos.map((src, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setSelectedPhoto(src)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden rounded-lg shadow">
                  <img
                    src={src}
                    className="w-full h-40 object-cover hover:scale-110 transition-transform"
                  />
                </motion.button>
              ))}
            </div>
          )}

          {/* EVENTOS — com cores por status_nome */}
          {active === "eventos" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredEventos.map((e) => {
                const color = getStatusColor(e.status_nome);
                return (
                  <motion.div
                    key={e.id}
                    onClick={() => navigate(`/evento/${e.id}`)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`bg-white p-5 rounded-xl shadow hover:shadow-lg cursor-pointer border-l-4 ${color.border}`}>
                    <h3 className="font-semibold text-lg">{e.titulo}</h3>

                    <p className="text-gray-500 text-sm mt-1">
                      {e.data_inicio}
                      {e.data_fim ? ` até ${e.data_fim}` : ""}
                    </p>

                    <span
                      className={`inline-block mt-2 text-xs text-white font-semibold px-2 py-1 rounded-md ${color.badge}`}>
                      {e.status_nome}
                    </span>

                    <p className="mt-3 text-gray-700 line-clamp-3">
                      {e.descricao}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* COMUNICADOS */}
          {active === "comunicados" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredComunicados.map((c) => (
                <motion.div
                  key={c.id}
                  onClick={() => setSelectedComunicado(c)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl p-5 shadow hover:shadow-lg border border-gray-200 cursor-pointer">
                  <h3 className="font-semibold text-lg">{c.titulo}</h3>
                  <p className="text-gray-500 text-sm">{c.data}</p>

                  <p className="mt-3 text-gray-700 line-clamp-3">
                    {c.conteudo}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // impedir que clique no card abra tbm
                      setSelectedComunicado(c);
                    }}
                    className="text-blue-600 text-sm mt-3 hover:underline">
                    Ler mais
                  </button>
                </motion.div>
              ))}
            </div>
          )}

          {/* MODAL DE VÍDEO */}
          {selectedVideo && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div className="bg-black w-full max-w-4xl h-[75vh] relative rounded-md overflow-hidden">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-3 right-3 bg-white text-black px-3 py-1 rounded-full">
                  Fechar
                </button>
                <iframe
                  src={selectedVideo.embed}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* MODAL DE FOTO */}
          {selectedPhoto && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div className="max-w-4xl w-full">
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="mb-3 bg-white px-3 py-1 rounded">
                  Fechar
                </button>
                <img
                  src={selectedPhoto}
                  className="w-full h-[80vh] object-contain bg-white rounded-md"
                />
              </div>
            </div>
          )}

          {/* MODAL DE COMUNICADO */}
          {selectedComunicado && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl w-full max-w-2xl p-6 relative">
                <button
                  onClick={() => setSelectedComunicado(null)}
                  className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full">
                  Fechar
                </button>

                <h2 className="text-xl font-bold mb-2">
                  {selectedComunicado.titulo}
                </h2>
                <p className="text-gray-500 mb-4">{selectedComunicado.data}</p>

                <div className="text-gray-800 whitespace-pre-line leading-relaxed">
                  {selectedComunicado.conteudo}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
