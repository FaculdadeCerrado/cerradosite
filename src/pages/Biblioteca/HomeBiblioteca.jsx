import React, { useState } from "react";
import FullScreenBannerVideo from "../../Components/FullScreenBannerVideo/FullScreenBannerVideo";
import heroDesktop from "../../videos/testevd.mp4";
import { X, Phone } from "lucide-react";

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

  // Fechar modal
  const fecharModal = () => setModalInfo({ ...modalInfo, open: false });
  return (
    <main>
      <FullScreenBannerVideo
        desktopSrc={heroDesktop}
        overlay={
          <div className="text-white text-center px-4 ">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-3">
              Seja bem-vindo à
            </h1>
            <p className="text-lg md:text-4xl  font-medium">
              Biblioteca da Faculdade Cerrado
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <a
                onClick={() =>
                  abrirModal(
                    "Plataformas",
                    <>
                      <div className="flex gap-4">
                        <a
                          href="https://plataforma.bvirtual.com.br/Account/Login?redirectUrl=%2F"
                          className="bg-white rounded-xl p-6 text-center border-2 border-green-600 hover:shadow-lg transition-shadow duration-300"
                          style={{
                            boxShadow:
                              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                          }}>
                          <Phone
                            className="mx-auto mb-2 text-green-600"
                            size={40}
                          />
                          <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Biblioteca Virtual Pearson
                          </h2>
                        </a>
                        <a
                          href="https://bibliogratuita.curatoriaeditora.com.br/"
                          className="bg-white rounded-xl p-6 text-center border-2 border-orange-600 hover:shadow-lg transition-shadow duration-300"
                          style={{
                            boxShadow:
                              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                          }}>
                          <Phone
                            className="mx-auto mb-2 text-orange-600"
                            size={40}
                          />
                          <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Biblioteca Virtual Curatoria
                          </h2>
                        </a>
                        <a
                          href="https://www.unicollege.net/bibliotecacerrado/loginform.asp"
                          className="bg-white rounded-xl p-6 text-center border-2 border-purple-600 hover:shadow-lg transition-shadow duration-300"
                          style={{
                            boxShadow:
                              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                          }}>
                          <Phone
                            className="mx-auto mb-2 text-purple-600"
                            size={40}
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
                href="#cursos"
                className="inline-block border-2 border-orange-600 text-white font-bold px-5 py-2 rounded  hover:border-orange-400 transition-colors">
                Consultar
              </a>
              <a
                href="#cursos"
                className="inline-block border-2 border-purple-600 text-white font-bold px-5 py-2 rounded  hover:border-purple-400 transition-colors">
                Renovar
              </a>
            </div>
          </div>
        }
      />

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
