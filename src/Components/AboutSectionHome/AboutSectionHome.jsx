import React from "react";
import BackGroundAboutHome from "../../images/BackGroundAboutHome.jpg";
import AboutSectionHomePop from "../../images/AboutSectionHomePop.png";

const AboutSectionHome = () => {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${BackGroundAboutHome})`,
      }}>
      {/* Overlay opcional para deixar o texto mais legível */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Texto à esquerda */}
        <div className="text-white z-10">
          <h1 className="text-lg md:text-4xl font-bold mb-4">
            Por que escolher a Faculdade Cerrado?
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Estudar na Faculdade Cerrado é optar por qualidade, inovação e
            proximidade com o mercado de trabalho. Com professores experientes,
            infraestrutura moderna e um ambiente acolhedor, você desenvolve
            habilidades práticas e teóricas para se destacar na sua carreira.
          </p>
          <a
            href="/noticias"
            className="inline-flex items-center px-4 py-2 border-2 border-green-600 font-bold  rounded-md hover:bg-green-600 hover:text-white transition-colors duration-200 bg-transparent">
            SAIBA MAIS
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Imagem à direita */}
        <div className="flex justify-center md:justify-end z-10">
          <img
            src={AboutSectionHomePop}
            alt="Foto destaque"
            className="w-200 h-200 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSectionHome;
