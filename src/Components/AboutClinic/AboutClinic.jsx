import { motion } from "framer-motion";

const clinicaItems = [
  {
    title: "Estágio Específico Supervisionado",
    subtitle: "Sala de Testes",
    description:
      "Realizado pelos alunos da disciplina e supervisionados pela professora. Não tem custo. Os pacientes são oriundos de convênios e parcerias firmadas para essa finalidade.",
  },
  {
    title: "Clínica Social",
    description:
      "Aberta ao público externo. Esse serviço é feito pelos professores, numa parceria com a faculdade. Tem um custo simbólico por sessão.",
  },
  {
    title: "NAPp – Núcleo de Apoio Psicopedagógico e Psicológico",
    description:
      "Direcionado aos alunos da IES. Gratuito. Realizado por professores mediante encaminhamento.",
  },
  {
    title: "Grupos de Estudos",
    description:
      "Transtornos de Humor e Ansiedade. Mediado por professor da casa e produto acadêmico publicável em Academic – revista científica da IES.",
  },
  {
    title: "Projeto de Extensão e Pesquisa – Curso",
    description:
      "Os Desafios da Criança com Autismo no Processo de Inclusão Escolar. Parceria com Aprender Clínica Psicopedagógica.",
  },
];

function ClinicaCard({ title, subtitle, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white p-8 rounded-3xl shadow-md border border-border hover:shadow-xl transition-all">
      <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>

      {subtitle && (
        <p className="text-primary font-semibold mb-3">{subtitle}</p>
      )}

      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function ClinicaEscolaSection() {
  return (
    <section className="py-24 bg-muted/30" id="clinica-escola">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Clínica Escola de Psicologia
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A Clínica Escola está ativa em várias vertentes de atuação:
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {clinicaItems.map((item, index) => (
            <ClinicaCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
