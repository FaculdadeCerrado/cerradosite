import React, { useState } from "react";
import FullScreenBannerVideo from "../../Components/FullScreenBannerVideo/FullScreenBannerVideo";
import heroDesktop from "../../videos/Biblioteca.mp4";
import { X, Phone } from "lucide-react";
import Navbar from "../../Components/NavBarBiblioteca/NavBarBiblioteca";
import NormasRegulamentos from "../../Components/NormasRegulamentos/NormasRegulamentos";
import RecursosPrincipais from "../../Components/RecursosPrincipais/RecursosPrincipais";
import Unibook from "../../images/Portais/Unibook.png";
import Curatoria from "../../images/Portais/curatoria.png";
import Pearson from "../../images/Portais/pearson.png";
import CarouselWithText from "../../Components/CarouselWithText/CarouselWithText";
import { carouselDataBiblioteca } from "../../Data/CarouselData";

export default function HomeBiblioteca() {
  const [modalInfo, setModalInfo] = useState({
    open: false,
    title: "",
    content: "",
  });

  // Função para abrir modal
  const abrirModal = (title, content) => {
    setModalInfo({ open: true, title, content });
  };
  const fecharModal = () => setModalInfo({ ...modalInfo, open: false });
  return (
    <main>
      <Navbar />
      <FullScreenBannerVideo
        desktopSrc={heroDesktop}
        overlay={
          <div className="text-white  px-4 max-w-6xl w-full">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-3">
              Seja bem-vindo à
            </h1>
            <p className="text-lg md:text-4xl  font-medium">
              Biblioteca da Faculdade Cerrado
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <a
                RoutesNavBar
                copy
                onClick={() =>
                  abrirModal(
                    "Plataformas",
                    <>
                      <div className="flex gap-4">
                        <a
                          href="https://plataforma.bvirtual.com.br/Account/Login?redirectUrl=%2F"
                          className="bg-white rounded-xl flex flex-col items-center justify-center p-6 text-center border-2 border-green-600 hover:shadow-lg transition-shadow duration-300"
                          style={{
                            boxShadow:
                              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                          }}>
                          <img
                            src={Pearson}
                            className="w-24 h-24 object-contain mb-4"
                          />
                          <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Biblioteca Virtual Pearson
                          </h2>
                        </a>
                        <a
                          href="https://bibliogratuita.curatoriaeditora.com.br/"
                          className="bg-white rounded-xl p-6 flex flex-col items-center justify-center  text-center border-2 border-orange-600 hover:shadow-lg transition-shadow duration-300"
                          style={{
                            boxShadow:
                              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                          }}>
                          <img
                            src={Curatoria}
                            className="w-24 h-24 object-contain mb-4"
                          />
                          <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Biblioteca Virtual Curatoria
                          </h2>
                        </a>
                        <a
                          href="https://www.unicollege.net/bibliotecacerrado/loginform.asp"
                          className="bg-white rounded-xl p-6 flex flex-col items-center justify-center  text-center border-2 border-purple-600 hover:shadow-lg transition-shadow duration-300"
                          style={{
                            boxShadow:
                              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                          }}>
                          <img
                            src={Unibook}
                            className="w-24 h-24 object-contain mb-4"
                          />
                          <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Biblioteca Virtual Unibook
                          </h2>
                        </a>
                      </div>
                    </>
                  )
                }
                className="inline-block border-2 border-green-600 cursor-pointer text-white font-bold px-5 py-2 rounded  hover:border-green-400 transition-colors">
                Plataformas
              </a>
              <a
                href="https://www.unicollege.net/bibliotecacerrado/buscarapida.asp"
                className="inline-block border-2 border-orange-600 text-white font-bold px-5 py-2 rounded  hover:border-orange-400 transition-colors">
                Consultar
              </a>
              <a
                href="https://www.unicollege.net/cerrado/Login.aspx?ReturnUrl=%2fcerrado"
                className="inline-block border-2 border-purple-600 text-white font-bold px-5 py-2 rounded  hover:border-purple-400 transition-colors">
                Renovar
              </a>
            </div>
          </div>
        }
      />
      <CarouselWithText slides={carouselDataBiblioteca} />
      <RecursosPrincipais />

      <NormasRegulamentos />
      {/* Modal */}
      {modalInfo.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-lg relative">
            <button
              onClick={fecharModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {modalInfo.title}
            </h2>
            <div className="text-gray-700 space-y-1">{modalInfo.content}</div>
          </div>
        </div>
      )}
    </main>
  );
}

{
  /* DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
     -https://www.linkedin.com/in/gabrielsouto01
     -https://github.com/soutozk
     -https://www.instagram.com/soutozk/ */
}
