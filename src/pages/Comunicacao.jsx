import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import { videos } from "../../src/Data/VideoData";
import { getNoticias } from "../service/noticiaService";
import { getComunicados } from "../service/comunicadosService";
import { getEventos } from "../service/eventosService";
import { useNavigate } from "react-router-dom";

export default function Comunicacao() {
  const [active, setActive] = useState("noticias");
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [newsData, setNewsData] = useState([]);
  const [comunicadosData, setComunicadosData] = useState([]);
  const [eventosData, setEventosData] = useState([]);

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

  // Dados de fotos
  const photos = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
    "/images/photo6.jpg",
  ];

  useEffect(() => {
    async function loadEventos() {
      const data = await getEventos();
      setEventosData(data);
    }
    loadEventos();
  }, []);

  // Estado para modais
  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex bg-gray-100 text-gray-800">
        {/* Sidebar */}
        <aside className="hidden md:block w-48 bg-gray-50 border-r border-gray-200 sticky top-0 h-screen p-4 text-gray-700">
          <nav className="flex flex-col gap-3 text-sm">
            {["noticias", "videos", "fotos", "eventos", "comunicados"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`text-left py-2 px-3 rounded-md w-full ${
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

        {/* Mobile */}
        <div className="md:hidden w-full border-b border-gray-200 p-3 flex items-center justify-between">
          <div className="text-sm font-semibold">Comunicação</div>
          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="px-3 py-2 rounded-md border">
            Menu
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden absolute z-40 left-0 top-12 w-64 bg-white border-r border-gray-200 shadow-lg p-4">
            <nav className="flex flex-col gap-2 text-sm">
              {["noticias", "videos", "fotos", "eventos", "comunicados"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActive(item);
                      setMobileOpen(false);
                    }}
                    className={`text-left py-2 px-3 rounded-md w-full ${
                      active === item ? "bg-gray-100" : "hover:bg-gray-50"
                    }`}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
            </nav>
          </div>
        )}

        {/* Main */}
        <main className="flex-1 p-6">
          <h1 className="text-xl font-semibold capitalize mb-6">{active}</h1>

          {/* ✅ NOTÍCIAS */}
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
                    <h3 className="font-semibold text-gray-800 mt-1">
                      {news.titulo}
                    </h3>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos.map((v) => (
                <div
                  key={v.id}
                  className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md cursor-pointer"
                  onClick={() => setSelectedVideo(v)}>
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 text-sm text-gray-700">{v.title}</div>
                </div>
              ))}
            </div>
          )}

          {/* FOTOS */}
          {active === "fotos" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {photos.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPhoto(src)}
                  className="overflow-hidden rounded-md bg-white shadow-sm">
                  <img
                    src={src}
                    alt={`Foto ${idx + 1}`}
                    className="w-full h-36 object-cover hover:scale-105 transition-transform"
                  />
                </button>
              ))}
            </div>
          )}
          {active === "eventos" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {eventosData.map((e) => (
                <div
                  key={e.id}
                  className="bg-white rounded-md p-4 shadow-sm hover:shadow-md cursor-pointer"
                  onClick={() => navigate(`/evento/${e.id}`)}>
                  <h3 className="font-semibold">{e.titulo}</h3>

                  <p className="text-gray-500 text-sm">
                    {e.data_inicio} {e.data_fim ? `até ${e.data_fim}` : ""}
                  </p>

                  <p className="mt-2 text-gray-700 line-clamp-3">
                    {e.descricao}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* COMUNICADOS */}
          {active === "comunicados" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {comunicadosData.map((c) => (
                <div
                  key={c.id}
                  className="bg-white rounded-md p-4 shadow-sm hover:shadow-md">
                  <h3 className="font-semibold">{c.titulo}</h3>
                  <p className="text-gray-500 text-sm">{c.data}</p>
                  <p className="mt-2 text-gray-700">{c.conteudo}</p>
                </div>
              ))}
            </div>
          )}

          {/* VIDEO MODAL */}
          {selectedVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
              <div className="w-full max-w-4xl h-[80vh] bg-black relative">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute right-3 top-3 bg-white/90 rounded-full px-3 py-1">
                  Fechar
                </button>

                <iframe
                  src={selectedVideo.embed}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* FOTO MODAL */}
          {selectedPhoto && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
              <div className="max-w-4xl w-full">
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="mb-3 bg-white/90 px-3 py-1 rounded">
                  Fechar
                </button>

                <img
                  src={selectedPhoto}
                  alt="Selecionada"
                  className="w-full h-[80vh] object-contain bg-white rounded-md"
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
