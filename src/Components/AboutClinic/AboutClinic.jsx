import { motion } from "framer-motion";
import {
  GraduationCap,
  Users2,
  HelpingHand,
  BookOpenCheck,
  FlaskConical,
  Microscope,
} from "lucide-react";

const COLORS = [
  "from-green-500 to-green-600",
  "from-purple-500 to-purple-600",
  "from-orange-500 to-orange-600",
];

const clinicaItems = [
  {
    icon: <GraduationCap className="w-10 h-10 text-white mb-4" />,
    title: "Estágio Específico Supervisionado",
    subtitle: "Sala de Testes",
    description:
      "Realizado pelos alunos da disciplina e supervisionados pela professora. Não tem custo. Pacientes de convênios e parcerias firmadas.",
  },
  {
    icon: <Users2 className="w-10 h-10 text-white mb-4" />,
    title: "Clínica Social",
    description:
      "Aberta ao público externo. Serviço prestado pelos professores em parceria com a faculdade. Possui custo simbólico.",
  },
  {
    icon: <HelpingHand className="w-10 h-10 text-white mb-4" />,
    title: "NAPp – Núcleo de Apoio Psicopedagógico e Psicológico",
    description:
      "Voltado para alunos da IES. Gratuito. Realizado por professores mediante encaminhamento.",
  },
  {
    icon: <BookOpenCheck className="w-10 h-10 text-white mb-4" />,
    title: "Grupos de Estudos",
    description:
      "Transtornos de Humor e Ansiedade. Mediado por professor e resultando em produção científica publicada.",
  },
  {
    icon: <Microscope className="w-10 h-10 text-white mb-4" />,
    title: "Projeto de Extensão e Pesquisa – Curso",
    description:
      "Os Desafios da Criança com Autismo no Processo de Inclusão Escolar. Parceria com Aprender Clínica Psicopedagógica.",
  },
  {
    icon: <FlaskConical className="w-10 h-10 text-white mb-4" />,
    title: "Laboratórios Virtuais",
    description:
      "Experiências imersivas e práticas digitais para ampliar a aprendizagem de forma interativa.",
  },
];

function ClinicaCard({ icon, title, subtitle, description, colorIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`p-8 rounded-3xl shadow-lg border border-white/20 bg-gradient-to-br ${COLORS[colorIndex]} text-white hover:scale-[1.02] hover:shadow-2xl transition-all`}>
      {icon}

      <h3 className="text-2xl font-bold mb-2">{title}</h3>

      {subtitle && (
        <p className="text-white/90 text-sm font-semibold mb-3">{subtitle}</p>
      )}

      <p className="text-white/90 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function ClinicaEscolaSection() {
  return (
    <section className="py-24 bg-muted/30" id="clinica-escola">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Clínica Escola de Psicologia
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A Clínica Escola está ativa em diversas frentes de atuação:
          </p>
        </div>

        {/* GRID 3x3 */}
        <div className="grid md:grid-cols-3 gap-10">
          {clinicaItems.map((item, index) => (
            <ClinicaCard
              key={index}
              {...item}
              colorIndex={index % COLORS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
