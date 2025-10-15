import React from "react";
import Banner from "../../Components/BannerHome/BannerHome";
import { HomeBanners } from "../../Data/BannerData";
export default function BasesDeDados() {
  const bases = [
    {
      nome: "BDTD",
      logo: "https://bdtd.ibict.br/template/images/logo-bdtd.png",
      descricao:
        "A Biblioteca Digital Brasileira de Teses e Dissertações (BDTD) tem por objetivo reunir, em um só portal de busca, as teses e dissertações defendidas em todo o País e por brasileiros no exterior.",
    },
    {
      nome: "CAPES",
      logo: "https://www.gov.br/capes/pt-br/@@images/image",
      descricao:
        "A Biblioteca Digital Brasileira de Teses e Dissertações (BDTD) tem por objetivo reunir, em um só portal de busca, as teses e dissertações defendidas em todo o País e por brasileiros no exterior.",
    },
    {
      nome: "COMUT",
      logo: "https://www.gov.br/ibict/pt-br/servicos/comut/comut.png",
      descricao:
        "A Comutação Bibliográfica (COMUT) é um programa que permite a qualquer pessoa solicitar e receber, por intermédio de uma biblioteca, cópias de artigos publicados em periódicos técnico-científicos.",
    },
    {
      nome: "IBICT",
      logo: "https://www.gov.br/ibict/pt-br/@@images/image",
      descricao:
        "O Instituto Brasileiro de Informação em Ciência e Tecnologia (IBICT), órgão nacional de informação do Ministério da Ciência, Tecnologia e Inovação, realiza estudos no campo da ciência da informação.",
    },
    {
      nome: "RCAAP",
      logo: "https://www.rcaap.pt/wp-content/uploads/2023/05/logo-rcaap.png",
      descricao:
        "O portal RCAAP tem como objetivo a recolha, agregação e indexação dos conteúdos científicos em acesso aberto (ou livre) existentes nos repositórios institucionais das entidades nacionais de ensino superior.",
    },
    {
      nome: "SciELO",
      logo: "https://wp.scielo.org/wp-content/themes/scielo-org/assets/img/logo-scielo.svg",
      descricao:
        "A Scientific Electronic Library Online – SciELO é uma biblioteca eletrônica que abrange uma coleção selecionada de periódicos científicos brasileiros.",
    },
  ];

  return (
    <>
      <Banner images={HomeBanners} />
      <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 flex flex-col items-center">
        <div className="max-w-6xl w-full text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            BASE DE DADOS
          </h1>

          {/* Grade dos cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bases.map((base) => (
              <div
                key={base.nome}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center">
                <img
                  src={base.logo}
                  alt={base.nome}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {base.nome}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {base.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
