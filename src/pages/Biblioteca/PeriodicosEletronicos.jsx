import React, { useState } from "react";
import { Smartphone } from "lucide-react";
import Banner from "../../Components/BannerHome/BannerHome";
import { PeriodicosBanners } from "../../Data/BannerData";
export default function PeriodicosEletronicos() {
  const periodicos = {
    "Gestão em Recursos Humanos": [
      "CONTEXTUS (Fortaleza)",
      "CADERNOS DE PSICOLOGIA SOCIAL DO TRABALHO (USP)",
      "DOM (FUNDAÇÃO DOM CABRAL)",
      "FACES: REVISTA DE ADMINISTRAÇÃO (BELO HORIZONTE. ONLINE)",
      "GERAIS: REVISTA INTERINSTITUCIONAL DE PSICOLOGIA",
      "GESTÃO & PLANEJAMENTO (Salvador)",
      "GESTÃO.ORG",
      "INCLUSÃO SOCIAL",
      "PERSPECTIVAS EM GESTÃO & CONHECIMENTO",
      "RAC ELETRÔNICA",
      "REVISTA BRASILEIRA DE ANÁLISE DO COMPORTAMENTO (UFPA)",
      "REVISTA DE GESTÃO DA USP (REGE)",
      "REVISTA ELETRÔNICA DE GESTÃO ORGANIZACIONAL",
      "REVISTA GESTÃO CONTEMPORÂNEA",
      "REVISTA GESTÃO ORGANIZACIONAL",
      "REVISTA PERSPECTIVAS EM ANÁLISE DO COMPORTAMENTO",
      "REVISTA DE GESTÃO DOS PAÍSES DE LÍNGUA PORTUGUESA",
      "REVISTA PSICOLOGIA, ORGANIZAÇÕES E TRABALHO (UFSC)",
      "REVISTA PSICOLOGIA POLÍTICA",
      "REVISTA TEMAS EM PSICOLOGIA",
      "REVISTA TRABALHO, EDUCAÇÃO E SAÚDE",
    ],
    "Segurança do Trabalho": [
      "REVISTA PROTEÇÃO",
      "SAFETY SCIENCE",
      "JOURNAL OF OCCUPATIONAL HEALTH",
      "AÇÃO ERGONÔMICA",
      "BRAZILIAN JOURNAL OF PHYSICAL THERAPY (BJPT), THE",
      "CADERNOS DE PSICOLOGIA SOCIAL DO TRABALHO",
      "CADERNOS DE SAÚDE PÚBLICA",
      "CANADIAN OCCUPATIONAL SAFETY",
      "CIÊNCIA & SAÚDE COLETIVA",
      "ERG@NLINE",
      "ERGONOMICS",
      "ESTUDOS DO TRABALHO - RET",
      "GESTÃO E PRODUÇÃO",
      "GIORNALE ITALIANO DI MEDICINA DEL LAVORO ED ERGONOMIA",
      "INDIAN JOURNAL OF OCCUPATIONAL AND ENVIRONMENTAL MEDICINE-IJOEM",
      "OCCUPATIONAL HEALTH & SAFETY",
      "REVISTA BRASILEIRA DE MEDICINA DO TRABALHO",
      "REVISTA BRASILEIRA DE SAÚDE OCUPACIONAL (Fundacentro)",
      "REVISTA DE TERAPIA OCUPACIONAL",
      "REVISTA SEGURANÇA",
      "SAFETY AND HEALTH AT WORK",
    ],

    Pedagogia: [
      "REVISTA BRASILEIRA DE EDUCAÇÃO",
      "CIÊNCIA & EDUCAÇÃO (UNESP)",
      "EDUCAÇÃO E PESQUISA (USP)",
      "Cadernos de História da Educação",
      "Cadernos de Pedagogia – USP",
      "Centro de Referência Paulo Freire",
      "Educação em Revista",
      "EDUCERE – Revista da Educação da UNIPAR",
      "Revista Brasileira de Educação",
      "Revista Brasileira de História da Educação",
      "Revista de Educação – PUC Campinas",
      "Revista de Educação – PUCRS",
      "Revista Diálogo Educacional – PUCPR",
      "Revista Educação e Pesquisa – USP",
      "Revista Educação: Teoria e Prática",
      "Revista Ensaio, Avaliação e Políticas Públicas em Educação",
      "Revista Linguagem em Discurso",
      "Revista Lusófona de Educação",
      "Revista Perspectiva",
      "Revista Psicopedagogia",
    ],

    "Gestão Pública": [
      "REVISTA DE ADMINISTRAÇÃO PÚBLICA (FGV)",
      "CADERNOS GESTÃO PÚBLICA",
      "REVISTA DE POLÍTICAS PÚBLICAS",
      "CADERNOS EBAPE.BR",
      "CONJUNTURA ECONÔMICA",
      "FAROL – REVISTA DE ESTUDOS ORGANIZACIONAIS E SOCIEDADE",
      "RAC: REVISTA DE ADMINISTRAÇÃO CONTEMPORÂNEA",
      "RBFIN - BRAZILIAN REVIEW OF FINANCE",
      "READ: REVISTA ELETRÔNICA DE ADMINISTRAÇÃO",
      "REVISTA DE ADMINISTRAÇÃO DE EMPRESAS",
      "REVISTA DE ADMINISTRAÇÃO FACES JOURNAL",
      "REVISTA DE GESTÃO, FINANÇAS E CONTABILIDADE (RGFC)",
      "REVISTA REUNIR: REVISTA DE ADMINISTRAÇÃO, CIÊNCIAS CONTÁBEIS E SUSTENTABILIDADE",
      "REVISTA DE ADMINISTRAÇÃO: MANAGEMENT JOURNAL – RAUSP",
      "RACRE – UNIPINHAL",
      "REVISTA ELETRÔNICA DE ADMINISTRAÇÃO – UNIFACEF",
      "RAP – REVISTA DE ADMINISTRAÇÃO PÚBLICA – FGV/EBAPE",
      "REVISTA DE GESTÃO PÚBLICA, PRÁTICAS E DESAFIOS – UFPE",
      "ADMINISTRAÇÃO PÚBLICA E GESTÃO SOCIAL – UFV",
      "REVISTA DE ADMINISTRAÇÃO, ENSINO E PESQUISA – RAEP",
      "REVISTA CONTABILIDADE & FINANÇAS – USP",
      "REVISTA TERCEIRO SETOR & GESTÃO – UNG",
      "REVISTA DIREITO PÚBLICO – IDP",
      "REVISTA DE CIÊNCIAS DA ADMINISTRAÇÃO – RCA",
      "REVISTA ELETRÔNICA DE ESTRATÉGIAS E NEGÓCIOS – UNISUL",
      "REVISTA CONTABILIDADE, GESTÃO E GOVERNANÇA – UNB",
    ],
    Secretariado: [
      "ADMINISTRAÇÃO: ENSINO & PESQUISA (RAEP)",
      "BAR - BRAZILIAN ADMINISTRATION REVIEW",
      "BASE: REVISTA DE ADMINISTRAÇÃO E CONTABILIDADE DA UNISINOS",
      "BBR - BRAZILIAN BUSINESS REVIEW",
      "CONJUNTURA ECONÔMICA",
      "CONTABILIDADE VISTA & REVISTA",
      "GV EXECUTIVO",
      "JORNAL DE NEGÓCIOS (SEBRAE)",
      "ORGANIZAÇÕES & SOCIEDADE",
      "REVISTA BRASILEIRA DE GESTÃO DE NEGÓCIOS",
      "REVISTA BRASILEIRA DE MARKETING: REMARK",
      "REVISTA CONTEMPORÂNEA DE CONTABILIDADE",
      "REVISTA DE ADMINISTRAÇÃO DA UNIMEP",
      "REVISTA DE ADMINISTRAÇÃO DE EMPRESAS",
      "REVISTA DE CIÊNCIAS DA ADMINISTRAÇÃO (RCA)",
      "REVISTA DE CONTABILIDADE E ORGANIZAÇÕES (RCO)",
      "REVISTA DE GESTÃO (REGE)",
      "REVISTA DE GESTÃO E SECRETARIADO (GESEC)",
      "REVISTA ELETRÔNICA DE GESTÃO ORGANIZACIONAL",
      "REVISTA EXPECTATIVA",
      "REVISTA GESTÃO ORGANIZACIONAL",
      "REVISTA PENSAMENTO CONTEMPORÂNEO EM ADMINISTRAÇÃO",
      "REVISTA REUNIR: REVISTA DE ADMINISTRAÇÃO, CIÊNCIAS CONTÁBEIS E SUSTENTABILIDADE",
      "SECRETARIADO EXECUTIVO EM REVIST@",
    ],
    Psicologia: [
      "CADERNOS DE PSICOLOGIA SOCIAL DO TRABALHO - CPST",
      "ESTILOS DA CLÍNICA",
      "GERAIS: REVISTA INTERINSTITUCIONAL DE PSICOLOGIA",
      "INCLUSÃO SOCIAL",
      "ORGANIZAÇÕES & SOCIEDADE",
      "PAIDÉIA",
      "PERSPECTIVAS EM GESTÃO & CONHECIMENTO",
      "PSICOLOGIA & SOCIEDADE",
      "PSICOLOGIA ARGUMENTO",
      "PSICOLOGIA EM ESTUDO",
      "PSICOLOGIA, SAÚDE & DOENÇAS",
      "PSICOLOGIA: REFLEXÃO E CRÍTICA",
      "PSICOLOGIA: TEORIA E PESQUISA",
      "REVISTA BRASILEIRA DE ANÁLISE DO COMPORTAMENTO – REBAC",
      "JOURNAL OF HUMAN GROWTH AND DEVELOPMENT - JHGD",
      "REVISTA DE GESTÃO - REGE",
      "REVISTA DE GESTÃO DOS PAÍSES DE LÍNGUA PORTUGUESA – RGPLP",
      "REVISTA DE GESTÃO SOCIAL E AMBIENTAL – RGSA",
      "REVISTA DE PSICOLOGIA - UFC",
      "GESTÃO CONTEMPORÂNEA",
      "REVISTA GESTÃO ORGANIZACIONAL – RGO",
      "REVISTA PERSPECTIVAS EM ANÁLISE DO COMPORTAMENTO",
      "REVISTA PSICOLOGIA EM PESQUISA",
      "PSICOLOGIA POLÍTICA",
      "PSICOLOGIA USP",
      "REVISTA PSICOLOGIA: ORGANIZAÇÕES & TRABALHO - RPOT",
      "TEMAS EM PSICOLOGIA",
      "TRABALHO, EDUCAÇÃO E SAÚDE - TES",
      "TEMPO PSICANALÍTICO",
      "TERAPIA PSICOLÓGICA",
    ],
    Direito: [
      "CARTÓRIO HOJE: REVISTA ANOREG/SP",
      "CONTEXTO INTERNACIONAL",
      "DATAVENIA",
      "DE JURE: REVISTA JURÍDICA DO MINISTÉRIO PÚBLICO DO ESTADO DE MINAS GERAIS",
      "DIREITO & PAZ",
      "DIREITO ESTADO E SOCIEDADE",
      "JURIS: REVISTA DA FACULDADE DE DIREITO",
      "MERITUM: REVISTA DE DIREITO DA UNIVERSIDADE FUMEC",
      "PRISMA JURÍDICO – FILOSOFIA E TEORIA GERAL DO DIREITO DA FACULDADE DE DIREITO DA UNINOVE / SP",
      "REVISTA BRASILEIRA DE POLÍTICA INTERNACIONAL",
      "REVISTA BRASILEIRA DE SEGURANÇA PÚBLICA – RBSP",
      "REVISTA DA FACULDADE DE DIREITO DA UFPR",
      "REVISTA DA FACULDADE DE DIREITO DA UNIVERSIDADE DE UBERLÂNDIA",
      "REVISTA DA FACULDADE DE DIREITO DA UNIVERSIDADE FEDERAL DE MINAS GERAIS",
      "REVISTA DA FACULDADE DE DIREITO DE SÃO BERNARDO DO CAMPO",
      "REVISTA DA FACULDADE MINEIRA DE DIREITO",
      "REVISTA DA PROCURADORIA GERAL DO ESTADO DE SÃO PAULO",
      "REVISTA DE CIÊNCIAS JURÍDICAS E SOCIAIS DA UNIPAR",
      "REVISTA DE DIREITO INTERNACIONAL",
      "REVISTA DE DIREITO SANITÁRIO",
      "REVISTA DE ESTUDOS JURÍDICOS UNESP",
      "REVISTA DE INFORMAÇÃO LEGISLATIVA",
      "REVISTA DIGITAL DE DIREITO ADMINISTRATIVO",
      "REVISTA DIREITO GV",
      "REVISTA DIREITOS FUNDAMENTAIS E DEMOCRACIA",
      "REVISTA DO DIREITO – MESTRADO DA UNISC / RS",
      "REVISTA DO DIREITO: REVISTADO PROGRAMA DE PÓS-GRADUAÇÃO EM DIREITO",
      "REVISTA DO TRIBUNAL REGIONAL DO TRABALHO 15ª REGIÃO",
      "REVISTA ELETRÔNICA DO TRT 4ª REGIÃO",
      "REVISTA EM TEMPO",
      "REVISTA JURÍDICA",
      "REVISTA JURÍDICA (CURITIBA)",
      "REVISTA JURÍDICA CESUMAR: MESTRADO",
      "REVISTA JURÍDICA DA PRESIDÊNCIA",
      "SCIENTIA IURIS: REVISTA DO CURSO DE MESTRADO EM DIREITO NEGOCIAL DA UEL",
      "REVISTA DE DIREITO ECONÔMICO E SOCIOAMBIENTAL",
      "REVISTA DE SOCIOLOGIA, ANTROPOLOGIA E CULTURA JURÍDICA",
      "REVISTA DE DIREITO DE FAMÍLIA E SUCESSÃO",
      "REVISTA BRASILEIRA DE DIREITO CIVIL EM PERSPECTIVA",
      "REVISTA BRASILEIRA DE DIREITO CIVIL – RBDCIVIL",
      "REVISTA DE DIREITO CIVIL CONTEMPORÂNEO - RDCC (JOURNAL OF CONTEMPORARY PRIVATE LAW)",
      "REVISTA DE DIREITO CIVIL DA FADIPA",
      "REVISTA DE GÊNERO, SEXUALIDADE E DIREITO – RGSD",
    ],
  };

  const [filtro, setFiltro] = useState("Gestão em Recursos Humanos");

  return (
    <>
      <Banner images={PeriodicosBanners} />
      <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 flex flex-col items-center">
        <div className="max-w-6xl w-full">
          <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            PERIÓDICOS ELETRÔNICOS
          </h1>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Coluna esquerda - Descrição */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                <Smartphone className="w-10 h-10 text-green-500" />
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Estão listadas as revistas eletrônicas (periódicos) mais
                conceituadas nas áreas descritas e em áreas correlatas, para
                servir como fonte de pesquisa aos alunos que estão desenvolvendo
                trabalhos de Iniciação Científica, Trabalhos de Conclusão de
                Curso (TCC), entre outros trabalhos acadêmicos de pesquisa. Em
                alguns sites é preciso fazer um simples cadastro para ter
                acesso, mas os artigos são disponibilizados gratuitamente.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg max-h-[500px] overflow-y-auto">
              {/* Filtros */}
              <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start sticky top-0 bg-white pb-4 z-10">
                {Object.keys(periodicos).map((categoria) => (
                  <button
                    key={categoria}
                    onClick={() => setFiltro(categoria)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filtro === categoria
                        ? "bg-green-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-green-100"
                    }`}>
                    {categoria}
                  </button>
                ))}
              </div>

              {/* Lista de periódicos */}
              <ul className="list-decimal pl-6 space-y-3 text-blue-500 overflow-y-auto pr-3">
                {periodicos[filtro].map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-green-500 transition-colors duration-300">
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
{
  /* DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
     -https://www.linkedin.com/in/gabrielsouto01
     -https://github.com/soutozk
     -https://www.instagram.com/soutozk/ */
}
