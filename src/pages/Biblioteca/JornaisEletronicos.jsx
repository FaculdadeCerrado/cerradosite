import React from "react";
import { Globe } from "lucide-react";
import Banner from "../../Components/BannerHome/BannerHome";
import { JornaisBanners } from "../../Data/BannerData";

export default function JornaisEletronicos() {
  const jornais = [
    [
      { nome: "A Notícia", link: "http://www.an.com.br/" },
      {
        nome: "Clarín",
        link: "http://www.clarin.com/diario/hoy/index_diario.html",
      },
      {
        nome: "Correio Braziliense",
        link: "https://www.correiobraziliense.com.br/",
      },
      { nome: "Correio do Povo", link: "http://www.correiodopovo.com.br/" },
      { nome: "CNN", link: "http://www.correiodopovo.com.br/" },
      {
        nome: "Diário Catarinense",
        link: "http://www.diariocatarinense.com.br/",
      },
    ],

    [
      {
        nome: "Diário Oficial da União",
        link: "http://www.in.gov.br/",
      },
      { nome: "El Pais", link: "http://www.diarioelpais.com/02/12/05/" },
      { nome: "Folha de São Paulo", link: "http://www.uol.com.br/fsp/" },
      { nome: "Jornal do Brasil", link: "http://jbonline.terra.com.br/" },
      { nome: "Le Figaro", link: "https://www.lefigaro.fr/" },
      { nome: "O Estado", link: "http://www.estadao.com.br/home/index.shtm" },
      { nome: "O Estado de São Paulo", link: "http://www.estado.com.br/" },
    ],
    [
      {
        nome: "O Estado do Paraná",
        link: "http://www.parana-online.com.br/",
      },
      { nome: "O Globo", link: "http://oglobo.globo.com/" },
      { nome: "O País", link: "https://opais.co.ao/" },
      { nome: "The New York Times", link: "https://www.nytimes.com/" },
      { nome: "Valor Econômico", link: "http://www.valoronline.com.br/" },
      {
        nome: "Zero Hora",
        link: "http://www.clicrbs.com.br/jornais/zerohora/jsp/default.jsp",
      },
    ],
  ];

  return (
    <>
      <Banner images={JornaisBanners} />
      <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 flex flex-col items-center">
        <div className="max-w-6xl w-full">
          <div className="text-center md:text-left mb-6">
            <div className="flex   justify-center md:justify-start mb-6">
              <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 ">
                JORNAIS ELETRÔNICOS
              </h1>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Estão listados alguns jornais eletrônicos mais conceituados em
              âmbito nacional e internacional, para servir como fonte de
              pesquisa e informação atualizada. Estes jornais oferecem notícias,
              análises e reportagens sobre diversos temas de interesse geral,
              política, economia, cultura e ciência. Em muitos casos, o acesso
              às notícias é livre e gratuito, permitindo que estudantes,
              pesquisadores e o público em geral acompanhem as informações do
              dia a dia de forma confiável. Alguns sites podem exigir um simples
              cadastro, mas o conteúdo principal é disponibilizado sem custo.
              Esta lista visa facilitar a consulta e o acompanhamento das
              principais publicações jornalísticas, contribuindo para a formação
              de um leitor crítico e bem informado.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg  grid md:grid-cols-3 gap-8 text-left">
            {jornais.map((coluna, index) => (
              <ul key={index} className="space-y-3">
                {coluna.map((jornal) => (
                  <li key={jornal.nome}>
                    <a
                      href={jornal.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-800 transition-colors duration-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      {jornal.nome}
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

/* DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
   - https://www.linkedin.com/in/gabrielsouto01
   - https://github.com/soutozk
   - https://www.instagram.com/soutozk/ */
