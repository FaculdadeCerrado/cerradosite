import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselWithText({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!slides || slides.length === 0) {
    console.warn("⚠️ Nenhum slide recebido no CarouselWithText:", slides);
    return (
      <div className="text-center py-10 text-gray-500">
        Nenhum conteúdo disponível no momento.
      </div>
    );
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const { image, title, description } = slides[currentIndex];

  return (
    <div className="max-w-5xl mx-auto relative flex items-center bg-gray-50 p-6 rounded-lg shadow-lg">
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <div className="flex flex-col md:flex-row items-center gap-6 w-full">
        <img
          src={image}
          alt={title}
          className="w-full md:w-1/2 h-auto rounded-lg object-cover shadow"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
}
