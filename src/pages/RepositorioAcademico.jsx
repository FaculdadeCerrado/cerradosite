import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { RepositorioAcademicoBanners } from "../Data/BannerData.js";
import Banner from "../Components/BannerHome/BannerHome";
import WhatsAppWidget from "../Components/WppWidget/WppWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-white  flex flex-col items-center ">
      <NavBar />
      <Banner images={RepositorioAcademicoBanners} />
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2">
          {/* Sobre o RI */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Sobre o RI
            </h1>
            <p className="text-gray-700 leading-relaxed mb-4">
              O Repositório Institucional RI-FACE é um conjunto de serviços de
              informações para o gerenciamento, armazenamento e a disseminação
              de documentos em formato digital produzidos no universo das
              atividades administrativas, técnicas, pesquisa e ensino da
              instituição. O conteúdo do repositório é composto de materiais de
              caráter técnico científico provenientes das atividades da
              comunidade acadêmica da Faculdade Cerrado.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Os documentos encaminhados e validados, conforme as normas desta
              política, serão organizados, preservados digitalmente e
              disponibilizados pelo RI-FACE, sendo que os metadados são tratados
              pela equipe de Bibliotecários, assim como, o apoio tecnológico faz
              parte das competências da Diretoria de Inovação e Tecnologia da
              Faculdade Cerrado.
            </p>
          </div>

          {/* Missão */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Missão</h1>
            <p className="text-gray-700 leading-relaxed mb-4">
              O Repositório Institucional (RI) da Faculdade Cerrado – FACE, tem
              como missão: armazenar, preservar, divulgar e oferecer acesso à
              produção científica e institucional da Faculdade Cerrado. Esse
              será alimentado a partir da criação de material científico
              produzido pela IES.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Teremos como objetivos: contribuir para o aumento da visibilidade
              da produção científica da IES; preservar a memória intelectual da
              Faculdade; reunir em um único local virtual e de forma permanente
              a produção científica e institucional; disponibilizar o acesso
              livre e/ou parcial aos conteúdos digitais; ampliar e facilitar o
              acesso à produção científica de uma forma geral. O Repositório
              Institucional da Faculdade Cerrado será uma iniciativa de acesso
              aberto, parcial e gratuito.
            </p>
            <p className="text-gray-700 leading-relaxed underline text-blue-600 hover:text-blue-800 cursor-pointer">
              Acesse as Diretrizes de Envio de Trabalhos para verificar as
              regras e informações sobre o RI, e o Termo de Autorização.
            </p>
          </div>
        </div>
        <div></div>
      </section>
      <WhatsAppWidget />
      {/* <Footer /> */}
    </main>
  );
}
{
  /* DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
     -https://www.linkedin.com/in/gabrielsouto01
     -https://github.com/soutozk
     -https://www.instagram.com/soutozk/ */
}
