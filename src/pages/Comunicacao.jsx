import React, { useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import { OuvidoriaBanners } from "../Data/BannerData.js";
import Banner from "../Components/BannerHome/BannerHome";
import WhatsAppWidget from "../Components/WppWidget/WppWidget";
import { Mail, Phone, MapPin, X } from "lucide-react";

export default function Comunicacao() {
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
      <section className="bg-gray-50 py-16 px-6 md:px-16 w-full"></section>

      <WhatsAppWidget />
    </main>
  );
}

/* DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
 - https://www.linkedin.com/in/gabrielsouto01
 - https://github.com/soutozk
 - https://www.instagram.com/soutozk/
*/
