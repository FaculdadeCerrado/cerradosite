import React, { useState } from "react";
import NavBar from "../Components/NavBar/NavBar";

export default function Quiz() {
  const questions = [
    {
      id: 1,
      text: "Prefiro atividades que envolvam ajudar pessoas.",
      areas: ["psicologia", "enfermagem", "pedagogia"],
    },
    {
      id: 2,
      text: "Gosto de resolver problemas complexos.",
      areas: ["direito", "psicologia"],
    },
    {
      id: 3,
      text: "Tenho interesse em tecnologias e inovação.",
      areas: ["gestao"],
    },
    {
      id: 4,
      text: "Prefiro trabalhar em equipe.",
      areas: ["enfermagem", "pedagogia", "secretariado"],
    },
    {
      id: 5,
      text: "Eu gosto de atividades práticas.",
      areas: ["estetica", "enfermagem"],
    },
    {
      id: 6,
      text: "Tenho facilidade em comunicação.",
      areas: ["secretariado", "direito", "pedagogia"],
    },
    {
      id: 7,
      text: "Gosto de analisar dados e informações.",
      areas: ["gestao", "direito"],
    },
    {
      id: 8,
      text: "Prefiro ambientes organizados e estruturados.",
      areas: ["gestao", "secretariado"],
    },
    {
      id: 9,
      text: "Me interesso por assuntos da área de saúde.",
      areas: ["enfermagem", "estetica"],
    },
    { id: 10, text: "Gosto de criar e projetar coisas.", areas: ["estetica"] },
    {
      id: 11,
      text: "Aprendo melhor fazendo do que lendo.",
      areas: ["estetica", "enfermagem"],
    },
    {
      id: 12,
      text: "Gosto de desafios intelectuais.",
      areas: ["direito", "psicologia"],
    },
    {
      id: 13,
      text: "Tenho interesse em áreas humanas.",
      areas: ["psicologia", "pedagogia"],
    },
    { id: 14, text: "Me sinto confortável com lógica.", areas: ["gestao"] },
    {
      id: 15,
      text: "Gosto de pensar em soluções para melhorar o mundo.",
      areas: ["gestao", "pedagogia", "direito"],
    },
  ];

  const courseNames = {
    estetica: "Estética",
    secretariado: "Secretariado",
    enfermagem: "Enfermagem",
    gestao: "Gestão Pública",
    pedagogia: "Pedagogia",
    psicologia: "Psicologia",
    direito: "Direito",
  };

  const courseLinks = {
    estetica: "https://faculdadecerrado.edu.br/info-curso/19",
    secretariado: "https://faculdadecerrado.edu.br/info-curso/18",
    enfermagem: "https://faculdadecerrado.edu.br/info-curso/17",
    gestao: "https://faculdadecerrado.edu.br/info-curso/13",
    pedagogia: "https://faculdadecerrado.edu.br/info-curso/12",
    psicologia: "https://faculdadecerrado.edu.br/info-curso/11",
    direito: "https://faculdadecerrado.edu.br/info-curso/1",
  };

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const [resultArea, setResultArea] = useState(null);

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [step]: value });
  };

  const scoreMap = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4 };

  const calculateResult = () => {
    let scores = {
      estetica: 0,
      secretariado: 0,
      enfermagem: 0,
      gestao: 0,
      pedagogia: 0,
      psicologia: 0,
      direito: 0,
    };

    questions.forEach((q, index) => {
      const userValue = answers[index];
      if (!userValue) return;
      const points = scoreMap[userValue];
      q.areas.forEach((area) => {
        scores[area] += points;
      });
    });

    const bestArea = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );
    setResultArea(bestArea);
  };

  const handleNext = () => {
    if (step === questions.length - 1) {
      calculateResult();
      setFinished(true);
      return;
    }
    setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const progress = Math.round((step / questions.length) * 100);

  const scaleOptions = [
    { value: 1, label: "Discordo\nTotalmente", color: "bg-red-500" },
    { value: 2, label: "", color: "bg-orange-500" },
    { value: 3, label: "", color: "bg-yellow-500" },
    { value: 4, label: "", color: "bg-blue-500" },
    { value: 5, label: "Concordo\nTotalmente", color: "bg-green-500" },
  ];

  return (
    <>
      <NavBar />

      <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4 md:p-6">
        <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-[850px]">
          {finished ? (
            <div className="text-center py-10 md:py-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-700">
                Seu curso ideal é:
              </h2>

              <div className="bg-purple-100 p-4 md:p-6 rounded-xl border border-purple-300 text-xl md:text-2xl font-semibold text-purple-800">
                {courseNames[resultArea]}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 mt-6">
                <a
                  href={courseLinks[resultArea]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 text-center bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                  Saiba mais sobre {courseNames[resultArea]}
                </a>

                <button
                  onClick={() => {
                    setAnswers({});
                    setFinished(false);
                    setStep(0);
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-purple-600 text-white rounded-xl">
                  Refazer Quiz
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Header - Progresso */}
              <div className="mb-6">
                <h2 className="text-lg md:text-xl font-semibold">
                  Questão {step + 1}/{questions.length}
                </h2>

                <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                  <div
                    className="h-2 bg-purple-500 rounded-full transition-all"
                    style={{ width: `${progress}%` }}></div>
                </div>

                <div className="flex justify-between mt-2 text-xs md:text-sm text-purple-600">
                  <span>{Object.keys(answers).length} respondidas</span>
                  <span>{progress}% Completo</span>
                </div>
              </div>

              {/* Pergunta */}
              <div className="bg-purple-600 text-white text-center p-3 md:p-4 rounded-t-xl font-semibold text-sm md:text-base">
                Avalie a afirmação
              </div>

              <div className="bg-purple-50 p-4 md:p-6 rounded-b-xl text-center text-base md:text-lg font-medium">
                {questions[step].text}
              </div>

              {/* Escala */}
              <div className="flex items-center justify-between mt-10 px-2 md:px-4 gap-3 md:gap-0">
                {scaleOptions.map((opt, idx) => (
                  <div key={idx} className="flex flex-col items-center w-full">
                    {/* Labels */}
                    {opt.label && (
                      <span
                        className={`text-[10px] md:text-sm mb-1 text-center ${
                          opt.value === 1
                            ? "text-red-600"
                            : opt.value === 5
                            ? "text-green-600"
                            : ""
                        }`}>
                        {opt.label.split("\n").map((line) => (
                          <div key={line}>{line}</div>
                        ))}
                      </span>
                    )}

                    {/* Botões da escala */}
                    <button
                      onClick={() => handleAnswer(opt.value)}
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full ${
                        opt.color
                      } transition border-4 ${
                        answers[step] === opt.value
                          ? "border-gray-800 scale-110"
                          : "border-transparent"
                      }`}></button>
                  </div>
                ))}
              </div>

              {/* Botões navegação */}
              <div className="flex flex-col sm:flex-row justify-between mt-10 gap-3">
                <button
                  onClick={handlePrev}
                  disabled={step === 0}
                  className="w-full sm:w-auto px-6 py-3 bg-gray-200 rounded-xl text-gray-700 disabled:opacity-40">
                  ◀ Anterior
                </button>

                <button
                  onClick={handleNext}
                  disabled={!answers[step]}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-300 text-white rounded-xl disabled:opacity-40">
                  {step === questions.length - 1 ? "Finalizar ✔" : "Próxima ▶"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
