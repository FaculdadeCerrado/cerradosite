import React from "react";
import { motion } from "framer-motion";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/footer.jsx";
import WhatsAppWidget from "../Components/WppWidget/WppWidget";
import { BookOpen, Users, Layers, Calendar } from "lucide-react";

export default function NupePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      <NavBar />

      {/* Banner */}
      <section className="w-full h-56 sm:h-72 bg-gradient-to-r from-purple-700 to-purple-500 flex items-center justify-center text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl font-bold drop-shadow-lg">
          NUPE – Núcleo de Pesquisa e Extensão
        </motion.h1>
      </section>

      {/* GRID INICIAL */}
      <section className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
        {/* Apresentação */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-l-4 border-purple-600">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Apresentação
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
            O Núcleo de Pesquisa e Extensão – NUPE é responsável por promover e
            estimular atividades científicas, acadêmicas e sociais dentro e fora
            da instituição.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Ele oferece suporte para grupos de estudo, pesquisas, produções
            acadêmicas e iniciativas que contribuam para o desenvolvimento
            científico e social.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: BookOpen,
              label: "Pesquisa",
              desc: "Grupos e estudos contínuos.",
            },
            {
              icon: Users,
              label: "Extensão",
              desc: "Integração social e acadêmica.",
            },
            {
              icon: Layers,
              label: "Produção",
              desc: "Artigos, estudos e eventos.",
            },
            {
              icon: Calendar,
              label: "Atividades",
              desc: "Ações permanentes e programadas.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-purple-50 border border-purple-200 rounded-xl shadow text-center">
              <item.icon className="mx-auto mb-2 text-purple-700" size={40} />
              <h3 className="font-semibold text-gray-800 mb-1">{item.label}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Seção Unificada */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* Composição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-l-4 border-orange-600">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Composição
            </h2>

            <p className="text-gray-700 mb-2">
              – Coordenador do Núcleo – Professor(a)
            </p>
            <p className="text-gray-700 mb-2">– Professores da casa</p>
            <p className="text-gray-700 mb-2">
              – Professores convidados e voluntários
            </p>
            <p className="text-gray-700 mb-6">– Alunos interessados</p>

            <h3 className="font-semibold text-gray-800 mt-4 mb-1">
              Quadro atual de gestão:
            </h3>
            <p className="text-gray-700">
              Coordenadora: <strong>Maria de Fátima Cavalcante de Melo</strong>
            </p>
            <p className="text-gray-700">
              Gestora de Pesquisa: <strong>Profa. Dra. Mariana Reis</strong>
            </p>
          </motion.div>

          {/* Grid 2 colunas NUPE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Periodicidade */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-600">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Periodicidade
              </h2>
              <p className="text-gray-700 leading-relaxed">
                As atividades do NUPE ocorrem continuamente, conforme os
                projetos desenvolvidos, sempre respeitando o calendário
                acadêmico.
              </p>
            </div>

            {/* Desdobramentos Acadêmicos */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-600">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Desdobramentos Acadêmicos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                O NUPE estimula a produção científica e a publicação acadêmica,
                incentivando a escrita e divulgação em canais institucionais
                como o Repositório Institucional e a Revista Científica Acadmic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atividades */}
      <section className="max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10 text-center sm:text-left">
          Atividades
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            "Grupos de estudo",
            "Projetos de pesquisa",
            "Grupos focais",
            "Intervenções emergenciais",
            "Cursos complementares",
            "Projetos sociais e institucionais",
            "Apoio ao egresso",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg p-6 rounded-xl  border-2 border-green-600 text-center sm:text-left">
              <p className="text-gray-700 text-sm sm:text-base">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Conclusão */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Conclusão
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-l-4 border-purple-600 text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
            O NUPE desempenha um papel essencial na formação acadêmica,
            científica e social da comunidade estudantil.
          </motion.p>

          <p className="text-gray-800 font-semibold text-base sm:text-lg">
            Maria de Fátima Cavalcante de Melo – CRP 5856-0
            <br />
            Coordenadora do Curso
          </p>
        </div>
      </section>

      <WhatsAppWidget />
      <Footer />
    </main>
  );
}
