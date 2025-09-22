import { useEffect, useState } from "react";
import { motion } from "@motionone/react";

export function TypeWriter({
  textos = [],
  speed = 80, // tempo entre letras (ms)
  delayEntreTextos = 2000, // tempo que o texto fica parado antes de apagar
  cursor = true,
  className = "",
}) {
  const [displayText, setDisplayText] = useState("");
  const [textoIndex, setTextoIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [apagando, setApagando] = useState(false);

  useEffect(() => {
    if (textos.length === 0) return;

    const textoAtual = textos[textoIndex];
    let timer;

    if (!apagando && charIndex < textoAtual.length) {
      // Digitando
      timer = setTimeout(() => {
        setDisplayText(textoAtual.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (!apagando && charIndex === textoAtual.length) {
      // Pausa antes de apagar
      timer = setTimeout(() => setApagando(true), delayEntreTextos);
    } else if (apagando && charIndex > 0) {
      // Apagando
      timer = setTimeout(() => {
        setDisplayText(textoAtual.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);
    } else if (apagando && charIndex === 0) {
      // Passa pro próximo texto
      setApagando(false);
      setTextoIndex((prev) => (prev + 1) % textos.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, apagando, textoIndex, textos, speed, delayEntreTextos]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      {cursor && (
        <motion.span
          key="cursor"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-1">
          |
        </motion.span>
      )}
    </div>
  );
}
