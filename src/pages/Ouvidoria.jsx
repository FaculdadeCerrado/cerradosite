import React, { useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import { OuvidoriaBanners } from "../Data/BannerData.js";
import Banner from "../Components/BannerHome/BannerHome";
import WhatsAppWidget from "../Components/WppWidget/WppWidget";
import { Mail, Phone, MapPin, X } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    setor: "",
    mensagem: "",
  });

  const [modalInfo, setModalInfo] = useState({
    open: false,
    title: "",
    content: "",
  });

  // Mapeamento dos e-mails de cada setor
  const setoresEmails = {
    // secretaria: "secretaria@faculdadecerrado.com.br",
    // financeiro: "financeiro@faculdadecerrado.com.br",
    // direcao: "direcao@faculdadecerrado.com.br",
    ouvidoria: "ouvidoria@faculdadecerrado.com.br",
  };

  // Função de envio simulada
  const handleSubmit = async (e) => {
    e.preventDefault();
    const destinatario = setoresEmails[formData.setor];
    if (!destinatario) {
      alert("Selecione um setor válido!");
      return;
    }

    alert(
      `Mensagem enviada para o setor "${formData.setor.toUpperCase()}" (${destinatario}) com sucesso!`
    );

    setFormData({ nome: "", email: "", setor: "", mensagem: "" });
  };

  // Função para abrir modal
  const abrirModal = (title, content) => {
    setModalInfo({ open: true, title, content });
  };

  // Fechar modal
  const fecharModal = () => setModalInfo({ ...modalInfo, open: false });

  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      <NavBar />
      <Banner images={OuvidoriaBanners} />

      {/* Seção principal */}
      <section className="bg-gray-50 py-16 px-6 md:px-16 w-full">
        <div className="max-w-7xl mx-auto gap-12">
          {/* Texto explicativo */}
          <div
            className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 mb-12"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Ouvidoria da Faculdade Cerrado
            </h1>
            <p className="text-gray-700 leading-relaxed">
              A Ouvidoria da Faculdade Cerrado é um canal de comunicação voltado
              para alunos, professores, colaboradores, egressos, familiares e
              toda a comunidade externa. Seu objetivo é oferecer um espaço
              confidencial para que o público possa se expressar, contribuir com
              sugestões, fazer elogios, registrar reclamações ou apresentar
              críticas construtivas. Buscando constantemente aprimorar seus
              serviços, a Faculdade Cerrado valoriza a participação de todos. A
              Ouvidoria atua encaminhando as manifestações recebidas aos setores
              responsáveis, garantindo que cada caso seja analisado com
              seriedade e respondido de forma adequada e no tempo devido. Este é
              mais um compromisso da Faculdade Cerrado com a transparência, a
              escuta ativa e a melhoria contínua.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div
              className="bg-white rounded-xl p-6 text-center border-2 border-green-600 hover:shadow-lg transition-shadow duration-300"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}>
              <MapPin className="mx-auto mb-2 text-green-600" size={40} />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Endereços
              </h2>
              <button
                onClick={() =>
                  abrirModal(
                    "Endereços",
                    <>
                      <p>CSE 06 Lote 32, Pistão Sul, Taguatinga Sul – DF.</p>
                      <p>Brasília - DF, CEP 70000-000</p>
                    </>
                  )
                }
                className="text-green-600 underline hover:text-green-700">
                ver endereços
              </button>
            </div>

            <div
              className="bg-white rounded-xl p-6 text-center border-2 border-orange-600 hover:shadow-lg transition-shadow duration-300"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}>
              <Phone className="mx-auto mb-2 text-orange-600" size={40} />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Telefones
              </h2>
              <button
                onClick={() =>
                  abrirModal(
                    "Telefones",
                    <>
                      <p>(61) 3541-8247</p>
                      <p>(61) 99124-8316 (WhatsApp)</p>
                    </>
                  )
                }
                className="text-orange-600 underline hover:text-orange-700">
                ver telefones
              </button>
            </div>

            <div
              className="bg-white rounded-xl p-6 text-center border-2 border-purple-600 hover:shadow-lg transition-shadow duration-300"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}>
              <Mail className="mx-auto mb-2 text-purple-600" size={40} />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                E-mail
              </h2>
              <button
                onClick={() =>
                  abrirModal(
                    "E-mail",
                    <>
                      <p>ouvidoria@faculdadecerrado.com</p>
                      {/* <p>atendimento@faculdadecerrado.com</p>
                      <p>financeiro@faculdadecerrado.com.br</p>
                      <p>secretaria@faculdadecerrado.com.br</p> */}
                    </>
                  )
                }
                className="text-purple-600 underline hover:text-purple-700">
                ver e-mail
              </button>
            </div>
          </div>

          {/* Formulário */}
          <div
            className="bg-white p-8 rounded-xl border-2 border-purple-600 hover:shadow-lg transition-shadow duration-300 mb-12"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Envie sua mensagem
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">E-mail</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* <div>
                <label className="block text-gray-700 mb-2">Setor</label>
                <select
                  required
                  value={formData.setor}
                  onChange={(e) =>
                    setFormData({ ...formData, setor: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option value="">Selecione o setor</option>
                  <option value="secretaria">Secretaria</option>
                  <option value="financeiro">Financeiro</option>
                  <option value="direcao">Direção</option>
                  <option value="ouvidoria">Ouvidoria</option>
                </select>
              </div> */}

              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Mensagem</label>
                <textarea
                  required
                  rows="5"
                  value={formData.mensagem}
                  onChange={(e) =>
                    setFormData({ ...formData, mensagem: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
              </div>

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="text-black px-6 py-3 rounded-lg border-2 border-green-600 hover:bg-green-600 hover:text-white transition-colors">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalInfo.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-11/12 md:w-1/3 shadow-lg relative">
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

      <WhatsAppWidget />
    </main>
  );
}

/* DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
 - https://www.linkedin.com/in/gabrielsouto01
 - https://github.com/soutozk
 - https://www.instagram.com/soutozk/
*/
