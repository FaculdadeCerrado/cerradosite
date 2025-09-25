import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  const [isHovered, setIsHovered] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "556195838206";
    const message = "Olá! Gostaria de realizar minha inscrição.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleWhatsAppClick}>
        {/* Botão expandido */}
        <div
          className={`absolute top-0 right-0 transition-all duration-500 ease-out transform ${
            isHovered || showNotification
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-95 translate-x-8 pointer-events-none"
          }`}
          style={{ transform: "translateX(-80px)" }}>
          <div className="bg-white border border-gray-200 text-gray-800 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 whitespace-nowrap transition-all duration-300 hover:shadow-3xl">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <FaWhatsapp className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-gray-800">
                WhatsApp
              </span>
              <span className="text-xs text-gray-600">
                Realize sua inscrição!
              </span>
            </div>
          </div>
        </div>

        {/* Ícone circular */}
        <div className="relative">
          <div
            className={`w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              isHovered ? "scale-110 shadow-xl" : "scale-100"
            } ${showNotification}`}>
            <FaWhatsapp className="w-8 h-8 text-white" />
          </div>

          <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></div>

          {showNotification && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white text-xs font-bold">1</span>
            </div>
          )}
        </div>

        {/* Mensagem de notificação */}
        {showNotification && !isHovered && (
          <div className="absolute bottom-20 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-90 animate-fade-in-up">
            Nova mensagem!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        )}

        {/* Tooltip no hover */}
        {isHovered && (
          <div className="absolute bottom-20 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-90 transition-all duration-300">
            Clique para conversar no WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        )}
      </div>
    </div>
  );
}
{
  /* DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
     -https://www.linkedin.com/in/gabrielsouto01
     -https://github.com/soutozk
     -https://www.instagram.com/soutozk/ */
}
