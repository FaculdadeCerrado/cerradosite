import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/footer.jsx";
import Cerradodf from "../images/Institucional/Cerradodf.png";

import { getAbout } from "../service/aboutService.js";

export default function FaculdadeCERRADO() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const loadAbout = async () => {
      const data = await getAbout();
      if (data && data.length > 0) {
        setAbout(data[0]); // pega o registro mais recente
      }
    };
    loadAbout();
  }, []);

  if (!about) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Carregando...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      <NavBar />

      <div className="min-h-screen bg-gray-50 text-gray-800 mx-auto px-6 py-10">
        {/* Seção: Histórico da Instituição */}
        <section className="grid gap-8 md:grid-cols-3 md:items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Histórico da Instituição
            </h2>

            <div
              className="mt-6 space-y-4 text-gray-700 text-lg text-justify"
              dangerouslySetInnerHTML={{
                __html: about.historico_instituicao,
              }}></div>
          </div>

          {/* Área da Foto */}
          <aside
            className="bg-white border rounded-lg p-4 items-atart "
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}>
            <div className="flex flex-col items-center gap-4">
              <div className="w-full rounded-md bg-gray-100 overflow-hidden flex items-center justify-center">
                <img
                  src={Cerradodf}
                  alt="Foto da instituição"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="w-full text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Fundação</span>
                  <strong>2017</strong>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-gray-500">Tipo</span>
                  <strong>Privada </strong>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-gray-500">Sede</span>
                  <strong>Brasília - DF</strong>
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* Seção: Quem Somos */}
        <section id="sobre" className="mt-12 gap-6">
          <div
            className="md:col-span-2 bg-white p-6 rounded-3xl"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}>
            <h3 className="text-3xl sm:text-4xl font-bold">Quem Somos</h3>

            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              {about.quem_somos}
            </p>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div
            id="missao"
            className="bg-white p-6 rounded-3xl"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}>
            <h4 className="text-2xl sm:text-3xl font-semibold">Nossa Missão</h4>
            <p className="text-gray-700 mt-2 text-lg text-justify">
              {about.nossa_missao}
            </p>
          </div>

          <div
            id="visao"
            className="bg-white p-6 rounded-3xl"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}>
            <h4 className="text-2xl sm:text-3xl font-semibold">Nossa Visão</h4>
            <p className="text-gray-700 mt-2 text-lg text-justify">
              {about.nossa_visao}
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-3xl"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}>
            <h4 className="text-2xl sm:text-3xl font-semibold">
              Nossos Valores
            </h4>
            <p className="text-gray-700 mt-2 text-lg text-justify">
              {about.nosso_valores}
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
