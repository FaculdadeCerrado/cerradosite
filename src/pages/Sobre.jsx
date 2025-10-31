import React, { useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Cerradodf from "../images/Institucional/Cerradodf.png";

export default function FaculdadeCERRADO() {
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
            <div className="mt-6 space-y-4 text-gray-700 text-lg text-justify">
              <p>
                A Faculdade CERRADO iniciou suas atividades em 2010, com o nome
                empresarial – Instituto de Desenvolvimento e Capacitação
                Profissional – IDECAP oferecendo cursos livres, preparatórios
                para concursos, treinamento e formação continuada para empresas
                da área de gestão, comercio e educação. Através de seus cursos,
                o IDECAP formou profissionais éticos e aptos a assumirem os
                desafios de uma sociedade em constante mudança, com políticas e
                programas de ensino, pesquisa e extensão e em consonância com as
                necessidades locais e as tendências socioeconômicas da sociedade
                brasileira.
              </p>

              <p>
                A Faculdade CERRADO surge como proposta de um novo olhar para o
                ensino superior em Brasília, considerada como capital do
                cerrado. A opção pelo nome CERRADO valoriza uma política de
                conservação e valorização do meio ambiente. Os cursos de
                tecnologia tem duração de 2 anos. Os cursos têm víeis de além de
                preparar para a carreira de funcionário público, proporciona ao
                egresso um portfólio para atuar em empresas privadas e terceiro
                setor.
              </p>

              <p>
                A proposta da faculdade inova e acredita no trabalho em conjunto
                para a formação de bons profissionais e de seu reconhecimento
                como uma instituição moderna, inovadora e de referência no
                mercado, pela experiência, pelo projeto pedagógico, por suas
                práticas administrativas de qualidade, sua organização e o
                resultado de todos os serviços prestados.
              </p>
              <p>
                A Faculdade entende que essas ações de avaliação, em suas várias
                formas, visam sempre à melhoria da qualidade da formação, da
                extensão e da produção do conhecimento, além de demonstrarem seu
                desempenho significativo no tocante a responsabilidade social.
              </p>
              <p>
                O que se quer o que pode ser realizado e como serão organizadas
                as ações administrativas e educacionais. Espera-se que com a
                integração das propostas de avaliação seja possível à
                implantação, o acompanhamento e o desempenho da IES de forma
                sistêmica, onde as informações sejam complementares, coerentes,
                e sirvam para o crescimento da instituição como um todo, bem
                como para sua consolidação como um diferencial no ensino
                superior na região.
              </p>
            </div>

            {/* <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
              Cursos tecnológicos — 2 anos
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Foco: Empregabilidade & Serviço Público
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
              Responsabilidade Social
            </span>
          </div> */}
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
            {/*  <div className="flex flex-col items-center gap-4">
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
            </div>*/}
          </aside>
        </section>

        {/* Seção: Quem Somos */}
        <section id="sobre" className="mt-12  gap-6 ">
          <div
            className="md:col-span-2 bg-white p-6 rounded-lg "
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}>
            <h3 className="text-3xl sm:text-4xl font-bold">Quem Somos</h3>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              A Faculdade CERRADO constitui-se como uma instituição privada de
              educação superior, mantida pela FACULDADE CERRADO EIRELI, pessoa
              jurídica de direito privado, com fins lucrativos, com sede foro em
              Brasília – DF, tendo seu Contrato Social registrado na Junta
              Comercial do Distrito Federal, sob o n° 53600141393.
            </p>

            <p className="mt-4 text-gray-700  text-lg ">
              A Mantenedora foi calcada nos aprofundados estudos de viabilidade
              econômico-financeira e, principalmente, em função da carência de
              instituições de ensino superior na região em análise. Ressalta-se
              a preocupação em fornecer ensino de alta qualidade para os futuros
              alunos como o fator preponderante para a implantação da IES.
            </p>
            <p className="mt-4 text-gray-700  text-lg ">
              Assim, os dirigentes escolhidos possuem as qualificações técnicas
              desejáveis e, principalmente, aliam a teoria com a prática.
              Atuando como gestores e também como professores proporcionarão um
              excelente desempenho no âmbito educacional de uma Instituição de
              Ensino Superior inovadora.
            </p>
          </div>
        </section>

        {/* Seção: Missão, Visão e Valores */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div
            id="missao"
            className="bg-white p-6 rounded-lg "
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}>
            <h4 className="text-2xl sm:text-3xl font-semibold">Nossa Missão</h4>
            <p className="text-gray-700 mt-2 text-lg text-justify">
              Produzir, sistematizar e difundir conhecimentos que contribuam
              para a formação de profissionais éticos, empreendedores, dotados
              de senso crítico, sensibilidade cultural e inteligência criativa,
              conscientes do seu papel social, profissional e do seu compromisso
              com a cidadania.
            </p>
          </div>

          <div
            id="visao"
            className="bg-white p-6 rounded-lg "
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}>
            <h4 className="text-2xl sm:text-3xl font-semibold">Nossa Visão</h4>
            <p className="text-gray-700 mt-2 text-lg text-justify">
              Como visão sociológica e filosófica, trabalha na construção de
              conhecimentos e desenvolver no aluno todo o processo
              ensino-aprendizagem, a partir da associação da teoria e prática,
              porque ambas demonstram ser sinônimos de um vasto conceito, ou
              seja, da formação integral do ser humano. Tem como filosofia
              básica a liberdade, criatividade, formação ética e profissional de
              seus alunos. Sempre acreditando que a educação é a base do
              crescimento pessoal que é norteado pelas escolhas feitas por cada
              indivíduo. A visão crítica e a competência partem de um
              amadurecimento onde o importante não são os conteúdos
              pré-estabelecidos, mas sim o processo de construção de
              conhecimentos.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg "
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}>
            <h4 className="text-2xl sm:text-3xl font-semibold">
              Nossos Valores
            </h4>
            <p className="text-gray-700 mt-2 text-lg text-justify">
              A Faculdade CERRADO valoriza e constitui os fundamentos de
              referências culturais e éticas, que devem ser como um marco
              integrante no processo de construção de conhecimentos. Todos devem
              ter responsabilidade no agir como semeadores de ética e valores
              morais. Tais referencias, devem potencializar as realizações de
              cada um dos componentes, que têm estilo próprio, marca pessoal e
              que devem ser conservados e respeitados.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
