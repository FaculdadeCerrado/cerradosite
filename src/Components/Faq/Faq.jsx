import React from "react";
import { ChevronDown } from "lucide-react";
import faqData from "../../Data/FaqData.js";

const COLORS = [
  {
    bg: "from-purple-500/90 to-purple-600/90",
    border: "border-purple-300/40",
    icon: "text-purple-200",
  },
  {
    bg: "from-green-500/90 to-green-600/90",
    border: "border-green-300/40",
    icon: "text-green-200",
  },
  {
    bg: "from-orange-500/90 to-orange-600/90",
    border: "border-orange-300/40",
    icon: "text-orange-200",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full mx-auto px-4 py-24 bg-gradient-to-b from-white to-[#F4FFF8]">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-gray-900">
          Perguntas Frequentes
        </h2>

        <div className="space-y-6">
          {faqData.map((item, index) => {
            const style = COLORS[index % COLORS.length];

            return (
              <details
                key={index}
                className={`group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 
                  backdrop-blur-xl bg-gradient-to-br ${style.bg} ${style.border} border`}>
                <summary className="cursor-pointer flex items-center justify-between px-6 py-5 text-lg font-semibold text-white select-none">
                  <span>{item.title}</span>

                  <ChevronDown
                    size={24}
                    className={`${style.icon} transition-transform duration-300 group-open:rotate-180`}
                  />
                </summary>

                <div className="px-8 pb-6 text-white/95 text-[17px] leading-relaxed animate-fadeIn">
                  <ul className="list-disc pl-5 space-y-2">
                    {item.content.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              </details>
            );
          })}
        </div>

        <style>{`
  .animate-fadeIn {
    animation: fadeInSoft 0.45s cubic-bezier(0.25, 0.1, 0.25, 1) both;
  }

  @keyframes fadeInSoft {
    0% {
      opacity: 0;
      transform: translateY(10px) scale(0.98);
    }
    60% {
      opacity: 0.8;
      transform: translateY(4px) scale(0.995);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`}</style>
      </div>
    </section>
  );
}

/* DESENVOLVIDO POR JOÃO GABRIEL SOUTO
   -https://www.linkedin.com/in/gabrielsouto01
   -https://github.com/soutozk
   -https://www.instagram.com/soutozk/
*/
