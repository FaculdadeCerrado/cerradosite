import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";

export default function Comunicacao() {
  const [active, setActive] = useState("noticias"); // 'noticias' | 'videos' | 'fotos' | 'eventos' | 'comunicados'
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.categoria) {
      setActive(location.state.categoria);
    }
  }, [location.state]);

  // Dados de notícias
  const newsData = [
    {
      id: 1,
      title: "Novo semestre inicia com atividades especiais",
      date: "10 de Outubro de 2025",
      category: "Acadêmico",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: "/images/news1.jpg",
    },
    {
      id: 2,
      title: "Palestra sobre inovação tecnológica",
      date: "05 de Outubro de 2025",
      category: "Eventos",
      description:
        "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...",
      image: "/images/news2.jpg",
    },
    {
      id: 3,
      title: "Galeria de fotos do dia da ciência",
      date: "02 de Outubro de 2025",
      category: "Fotos",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices...",
      image: "/images/news3.jpg",
    },
  ];

  // Dados de vídeos
  const videos = [
    {
      id: 1,
      title: "Aula Magna: Início do Semestre",
      thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
      embed: "https://www.youtube.com/embed/ysz5S6PUM-U",
    },
    {
      id: 2,
      title: "Palestra: Inovação no Ensino",
      thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
      embed: "https://www.youtube.com/embed/ScMzIvxBSi4",
    },
    {
      id: 3,
      title: "Entrevista com o Reitor",
      thumbnail: "https://img.youtube.com/vi/3fumBcKC6RE/hqdefault.jpg",
      embed: "https://www.youtube.com/embed/3fumBcKC6RE",
    },
  ];

  // Dados de fotos
  const photos = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
    "/images/photo6.jpg",
  ];

  // Dados de eventos
  const eventos = [
    {
      id: 1,
      title: "Feira de Ciências",
      date: "20 de Outubro de 2025",
      description: "Apresentação de projetos inovadores da universidade.",
    },
    {
      id: 2,
      title: "Semana Cultural",
      date: "25 de Outubro de 2025",
      description: "Diversas atividades culturais e artísticas.",
    },
  ];

  // Dados de comunicados
  const comunicados = [
    {
      id: 1,
      title: "Atenção: Mudança no horário das aulas",
      date: "15 de Outubro de 2025",
      description: "As aulas de terça-feira passarão a começar às 8h30.",
    },
    {
      id: 2,
      title: "Aviso sobre manutenção do site",
      date: "12 de Outubro de 2025",
      description: "O site ficará fora do ar entre 22h e 23h do dia 20/10.",
    },
  ];

  // Estado para modais
  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <>
      {" "}
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

        {/* Mobile sidebar toggle */}
        <div className="md:hidden w-full border-b border-gray-200 bg-transparent p-3 flex items-center justify-between">
          <div className="text-sm font-semibold">Comunicação</div>
          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="px-3 py-2 rounded-md border">
            Menu
          </button>
        </div>

        {/* Mobile Sidebar Drawer */}
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

        {/* Main content */}
        <main className="flex-1 p-6">
          <h1 className="text-xl font-semibold capitalize mb-6">{active}</h1>

          {/* Notícias */}
          {active === "noticias" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData.map((news) => (
                <div
                  key={news.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md cursor-pointer transition-shadow"
                  onClick={() => setSelectedNews(news)}>
                  <img
                    src={news.image}
                    alt={news.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4">
                    <p className="text-xs text-gray-500">{news.date}</p>
                    <h3 className="font-semibold text-gray-800 mt-1">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                      {news.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Vídeos */}
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

          {/* Fotos */}
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
                    className="w-full h-36 object-cover transform hover:scale-105 transition-transform"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Eventos */}
          {active === "eventos" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {eventos.map((e) => (
                <div
                  key={e.id}
                  className="bg-white rounded-md p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold">{e.title}</h3>
                  <p className="text-gray-500 text-sm">{e.date}</p>
                  <p className="mt-2 text-gray-700">{e.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Comunicados */}
          {active === "comunicados" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {comunicados.map((c) => (
                <div
                  key={c.id}
                  className="bg-white rounded-md p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-gray-500 text-sm">{c.date}</p>
                  <p className="mt-2 text-gray-700">{c.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Modais */}
          {selectedNews && (
            <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
              <div className="bg-white rounded-lg max-w-3xl w-full p-6 overflow-y-auto max-h-[90vh]">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="mb-4 px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300">
                  Fechar
                </button>
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-64 object-cover rounded"
                />
                <h2 className="text-xl font-semibold mt-4">
                  {selectedNews.title}
                </h2>
                <p className="text-gray-500 text-sm">{selectedNews.date}</p>
                <p className="mt-4 text-gray-700">{selectedNews.description}</p>
              </div>
            </div>
          )}

          {selectedVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
              <div className="w-full max-w-4xl h-[80vh] bg-black relative">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute right-3 top-3 z-50 bg-white/90 rounded-full px-3 py-1 text-sm">
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
