import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Banner from "../Components/BannerHome/BannerHome";
import Footer from "../Components/Footer/footer.jsx";
import WhatsAppWidget from "../Components/WppWidget/WppWidget";
import { ClipboardCheck, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function CPA() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      <NavBar />
      <Banner images={[]} />

      {/* Seção principal reorganizada */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 w-full">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* Apresentação */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 sm:p-10 rounded-xl shadow-lg border-l-4 border-purple-600">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <ClipboardCheck
                size={20}
                className="text-purple-600 sm:size-20"
              />
              Comissão Própria de Avaliação – CPA
            </h1>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              A Comissão Própria de Avaliação (CPA), instituída pela Lei 10.861
              de 14 de abril de 2004, tem como atribuição conduzir os processos
              de avaliação internos da instituição e prestar informações
              solicitadas pelo INEP. Ela coordena todas as atividades referentes
              ao processo de avaliação interna da Faculdade CERRADO, seguindo as
              orientações do SINAES.
            </p>
          </motion.div>

          {/* Objetivos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 sm:p-10 rounded-xl shadow-lg border-l-4 border-purple-600">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Objetivos da CPA
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              A CPA tem como objetivo coordenar o processo de autoavaliação,
              possibilitando o autoconhecimento da instituição, identificando
              suas potencialidades e fragilidades e propondo ações de melhoria.
              Os resultados contribuem para o Planejamento Estratégico e são
              enviados anualmente ao Sistema e-MEC.
            </p>
          </motion.div>

          {/* Contatos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-green-500">
              <Mail size={40} className="mx-auto mb-3 text-green-600" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                E-mail para contato
              </h3>
              <p className="text-green-600 font-medium text-sm sm:text-base break-all">
                contatofaculdadecerradotag@gmail.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-orange-500">
              <Phone size={40} className="mx-auto mb-3 text-orange-600" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                Telefone
              </h3>
              <p className="text-orange-600 font-medium text-sm sm:text-base">
                (61) 3541-8247
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <WhatsAppWidget />
      <Footer />
    </main>
  );
}
