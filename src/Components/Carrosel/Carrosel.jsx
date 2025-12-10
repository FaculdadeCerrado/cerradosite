import { useState, useEffect } from "react";

export default function PhotoCarousel() {
  const [expandedId, setExpandedId] = useState(1);
  const [modalPhoto, setModalPhoto] = useState(null);

  const photos = [
    {
      id: 1,
      image:
        "https://gerenciador.faculdadecerrado.edu.br/uploads/Clinica Escola/recepcao.png",
      title: "Nossa Recepção",
      description: "Apoio coletivo e compartilhado com segurança",
    },
    {
      id: 2,
      image:
        "https://gerenciador.faculdadecerrado.edu.br/uploads/Clinica Escola/1º atendimento da Clínica.jpeg",
      title: "Nossa Equipe",
      description: "Alunos qualificados e dedicados ao seu bem-estar",
    },
    {
      id: 3,
      image:
        "https://gerenciador.faculdadecerrado.edu.br/uploads/Clinica Escola/ludoteca.png",
      title: "Ludoteca",
      description: "Acolhimento desde o primeiro momento que você chega",
    },
    {
      id: 4,
      image:
        "https://gerenciador.faculdadecerrado.edu.br/uploads/Clinica Escola/SalaAtendimento.jpg",
      title: "Sala de Atendimento",
      description: "Ambiente acolhedor e profissional para suas sessões",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setExpandedId((prev) => {
        const currentIndex = photos.findIndex((p) => p.id === prev);
        const nextIndex = (currentIndex + 1) % photos.length;
        return photos[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="galeria" className="py-16 bg-background w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-foreground">
            Conheça Nossa Clínica
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Ambientes modernos, acolhedores e preparados para oferecer o melhor
            atendimento psicológico
          </p>
        </div>

        {/* CARROSSEL */}
        <div className="w-full mx-auto flex gap-2 h-80 md:h-[450px] overflow-hidden rounded-xl shadow-xl">
          {photos.map((photo) => (
            <button
              key={photo.id}
              onClick={() => setExpandedId(photo.id)}
              onDoubleClick={() => setModalPhoto(photo)} // abrir modal com double click
              className={`relative group cursor-pointer transition-all duration-500 ease-out transform ${
                expandedId === photo.id
                  ? "flex-grow"
                  : "flex-grow-0 flex-shrink-0 w-20 md:w-24"
              }`}>
              <div
                className="absolute inset-0 overflow-hidden"
                onClick={() => setModalPhoto(photo)} // abrir modal ao clicar
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-all" />
              </div>

              {/* TEXTO EXPANDIDO */}
              {expandedId === photo.id && (
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 text-white z-10 animate-fade-in">
                  <h3 className="text-lg md:text-4xl font-bold mb-1 md:mb-3">
                    {photo.title}
                  </h3>
                  <p className="text-xs md:text-lg text-white/90 max-w-md leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              )}

              {/* TEXTO FECHADO */}
              {expandedId !== photo.id && (
                <div className="absolute inset-0 flex items-center justify-center z-10 opacity-80 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-semibold text-xs md:text-sm -rotate-90 whitespace-nowrap drop-shadow-lg tracking-wide">
                    {photo.title}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* INDICADORES */}
        <div className="flex gap-4 justify-center mt-8">
          {photos.map((photo) => (
            <button
              key={photo.id}
              onClick={() => setExpandedId(photo.id)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                expandedId === photo.id ? "bg-primary w-8" : "bg-border/50 w-3"
              }`}
            />
          ))}
        </div>
      </div>

      {/* MODAL DE IMAGEM */}
      {modalPhoto && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[999] animate-fade-in"
          onClick={() => setModalPhoto(null)}>
          <div
            className="relative max-w-4xl w-[90%] md:w-auto"
            onClick={(e) => e.stopPropagation()}>
            <img
              src={modalPhoto.image}
              alt={modalPhoto.title}
              className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl animate-zoom-in"
            />

            {/* BOTÃO FECHAR */}
            <button
              onClick={() => setModalPhoto(null)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ANIMAÇÕES */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes zoomIn {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-fade-in { animation: fadeIn 0.3s ease-out; }
          .animate-zoom-in { animation: zoomIn 0.35s ease-out; }
        `}
      </style>
    </section>
  );
}
