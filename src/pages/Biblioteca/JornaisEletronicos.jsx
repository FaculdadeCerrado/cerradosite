import React from "react";
import { Globe } from "lucide-react";
import Banner from "../../Components/BannerHome/BannerHome";
import { JornaisBanners } from "../../Data/BannerData";

export default function JornaisEletronicos() {
  const jornais = [
    ["A Notícia", "Clarín", "Correio Braziliense", "Correio do Povo", "CNN"],
    [
      "Diário Oficial da União",
      "El Pais",
      "Folha de São Paulo",
      "Jornal do Brasil",
      "Le Figaro",
    ],
    [
      "O Estado do Paraná",
      "O Globo",
      "O País",
      "The New York Times",
      "Valor Econômico",
    ],
  ];

  return (
    <>
      <Banner images={JornaisBanners} />
      <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 flex flex-col items-center">
        <div className="max-w-5xl w-full text-center">
          <div className="flex justify-center mb-6"></div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-tight">
            JORNAIS ELETRÔNICOS
          </h1>
          <p className="text-gray-600 text-lg mb-10">
            Estão listados alguns jornais eletrônicos mais conceituados em
            âmbito nacional e internacional. As notícias do dia são de livre
            acesso.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {jornais.map((coluna, index) => (
              <ul key={index} className="space-y-3">
                {coluna.map((jornal) => (
                  <li key={jornal}>
                    <a
                      href="#"
                      className="text-green-500 hover:text-green-800 transition-colors duration-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      {jornal}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
{
  /* DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
     -https://www.linkedin.com/in/gabrielsouto01
     -https://github.com/soutozk
     -https://www.instagram.com/soutozk/ */
}
