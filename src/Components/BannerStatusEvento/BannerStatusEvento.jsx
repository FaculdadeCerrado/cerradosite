import React, { useEffect, useState } from "react";
import { eventoBanners } from "../../Data/eventoBanners";

const Banner = ({ status }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [validImages, setValidImages] = useState([]);

  // Lista de imagens com base no status
  const images = eventoBanners[status] ?? [];

  // TENTAR CARREGAR AS IMAGENS — caso falhe, remove da lista
  useEffect(() => {
    async function validateImages() {
      const checks = await Promise.all(
        images.map((img) =>
          fetch(img.desktop, { method: "HEAD" })
            .then((res) => (res.ok ? img : null))
            .catch(() => null)
        )
      );
      setValidImages(checks.filter(Boolean));
    }

    validateImages();
  }, [status]);

  // Slider automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % validImages.length);
    }, 7500);
    return () => clearInterval(interval);
  }, [validImages.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % validImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + validImages.length) % validImages.length
    );

  // Se não existe nenhum banner → fallback
  if (validImages.length === 0) {
    return (
      <div className="w-full h-52 flex items-center justify-center bg-gray-200 rounded">
        <span className="text-xl font-bold text-gray-700">
          {status?.toUpperCase() || "SEM IMAGEM"}
        </span>
      </div>
    );
  }

  return (
    <div className="w-full relative overflow-hidden">
      <div
        className="flex h-full transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {validImages.map((image) => (
          <div key={image.id} className="w-full h-full flex-shrink-0 relative">
            {image.link ? (
              <a href={image.link}>
                <img
                  src={image.desktop}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </a>
            ) : (
              <img
                src={image.desktop}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Botões */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 backdrop-blur-xl bg-white/10 border border-white/45 text-white p-2 rounded-full z-10">
        &lt;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 backdrop-blur-xl bg-white/10 border border-white/45 text-white p-2 rounded-full z-10">
        &gt;
      </button>
    </div>
  );
};

export default Banner;
