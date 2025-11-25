import { useState } from "react";

export default function PhotoCarousel() {
  const [expandedId, setExpandedId] = useState(1);

  const photos = [
    {
      id: 1,
      image: "/sala-de-atendimento-psicol-gico-acolhedora.jpg",
      title: "Sala de Atendimento",
      description: "Ambiente acolhedor e profissional para suas sessões",
    },
    {
      id: 2,
      image: "/cl-nica-moderna-com-equipe-de-psic-logos.jpg",
      title: "Nossa Equipe",
      description: "Profissionais qualificados e dedicados ao seu bem-estar",
    },
    {
      id: 3,
      image: "/recep--o-cl-nica-de-psicologia-confort-vel.jpg",
      title: "Recepção",
      description: "Acolhimento desde o primeiro momento que você chega",
    },
    {
      id: 4,
      image: "/grupo-de-terapia-din-mica-em-cl-nica.jpg",
      title: "Grupos de Terapia",
      description: "Apoio coletivo e compartilhado com segurança",
    },
  ];

  return (
    <section id="galeria" className="py-18 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-foreground">
            Conheça Nossa Clínica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ambientes modernos, acolhedores e preparados para oferecer o melhor
            atendimento psicológico
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex gap-2 h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          {photos.map((photo) => (
            <button
              key={photo.id}
              onClick={() => setExpandedId(photo.id)}
              className={`relative group cursor-pointer transition-all duration-500 ease-out transform hover:shadow-lg ${
                expandedId === photo.id
                  ? "flex-grow"
                  : "flex-grow-0 flex-shrink-0 w-20 md:w-24"
              }`}
              aria-label={`Expandir ${photo.title}`}>
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={photo.image || "/placeholder.svg"}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              </div>

              {expandedId === photo.id && (
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-10 animate-fade-in">
                  <h3 className="text-4xl font-bold mb-3">{photo.title}</h3>
                  <p className="text-lg text-white/90 max-w-md">
                    {photo.description}
                  </p>
                </div>
              )}

              {expandedId !== photo.id && (
                <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-bold text-sm -rotate-90 whitespace-nowrap">
                    {photo.title}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="flex gap-3 justify-center mt-10">
          {photos.map((photo) => (
            <button
              key={photo.id}
              onClick={() => setExpandedId(photo.id)}
              className={`h-3 rounded-full transition-all duration-300 ${
                expandedId === photo.id
                  ? "bg-primary w-10"
                  : "bg-border/50 w-3 hover:bg-border"
              }`}
              aria-label={`Ir para ${photo.title}`}
            />
          ))}
        </div>
      </div>

      <style>
        {`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}
      </style>
    </section>
  );
}
