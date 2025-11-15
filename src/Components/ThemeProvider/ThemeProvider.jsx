import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TREE_IMAGE =
  "https://gerenciador.faculdadecerrado.edu.br/uploads/Temas-do-site/arvore-de-natal.png";

export default function ThemeProvider({
  children,
  initialTheme = "christmas",
}) {
  const [theme, setTheme] = useState(initialTheme);
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const raf = useRef(null);

  const rand = (min, max) => Math.random() * (max - min) + min;

  // -------------------------------
  // PARTÍCULAS DE NEVE
  // -------------------------------
  function initSnow(W, H, amount = 100) {
    const arr = [];
    for (let i = 0; i < amount; i++) {
      arr.push({
        type: "snow",
        x: rand(0, W),
        y: rand(0, H),
        r: rand(1, 4),
        vy: rand(0.5, 1),
        sway: rand(0, Math.PI * 2),
      });
    }
    return arr;
  }

  // -------------------------------
  // EMOJI DECORATIVO CAINDO
  // -------------------------------
  function initDecor(W, H, amount = 30) {
    const icons = ["❄"];
    const arr = [];
    for (let i = 0; i < amount; i++) {
      arr.push({
        type: "decor",
        icon: icons[Math.floor(Math.random() * icons.length)],
        x: rand(0, W),
        y: rand(-H, 0),
        size: rand(22, 32),
        vy: rand(0.5, 1),
        rot: rand(0, 360),
        rotSpd: rand(-1, 1.2),
      });
    }
    return arr;
  }

  // -------------------------------
  // LOOP DE DESENHO
  // -------------------------------
  function draw() {
    const cvs = canvasRef.current;
    if (!cvs) return;

    const ctx = cvs.getContext("2d");
    const W = cvs.width;
    const H = cvs.height;

    ctx.clearRect(0, 0, W, H);

    for (let p of particles.current) {
      if (p.type === "snow") {
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.y += p.vy;
        p.x += Math.sin(p.sway) * 0.5;
        p.sway += 0.01;

        if (p.y > H) p.y = -10;
        if (p.x > W) p.x = 0;
        if (p.x < 0) p.x = W;
      }

      if (p.type === "decor") {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.font = `${p.size}px serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.icon, 0, 0);
        ctx.restore();

        p.y += p.vy;
        p.rot += p.rotSpd;

        if (p.y > H + 40) {
          p.y = -20;
          p.x = rand(0, W);
        }
      }
    }

    raf.current = requestAnimationFrame(draw);
  }

  // -------------------------------
  // INICIAR TEMA
  // -------------------------------
  useEffect(() => {
    const cvs = canvasRef.current;

    function resize() {
      cvs.width = window.innerWidth;
      cvs.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    particles.current = [];

    if (theme === "snow" || theme === "christmas") {
      particles.current.push(...initSnow(cvs.width, cvs.height));
    }

    if (theme === "christmas") {
      particles.current.push(...initDecor(cvs.width, cvs.height));
    }
    console.log("desenhando…", particles.current.length);

    cancelAnimationFrame(raf.current);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf.current);
    };
  }, [theme]);
  //   const topLights = (
  //     <div
  //       style={{
  //         position: "fixed",
  //         top: 0,
  //         width: "100%",
  //         display: "flex",
  //         justifyContent: "center",
  //         pointerEvents: "none",
  //         zIndex: 120,
  //         paddingTop: 5,
  //       }}>
  //       <div
  //         style={{
  //           display: "flex",
  //           gap: 22,
  //           alignItems: "center",
  //           padding: "6px 14px",
  //           borderRadius: 50,
  //           background: "linear-gradient(90deg, #2e4a32, #e9f0e7, #2e4a32)",
  //           boxShadow: "0 0 18px rgba(0,0,0,0.4)",
  //           filter: "brightness(0.85)",
  //         }}>
  //         {Array.from({ length: 35 }).map((_, i) => {
  //           const colors = [
  //             "#ff4242", // vermelho
  //             "#2bff73", // verde claro
  //             "#3dc6ff", // azul
  //             "#ffa800", // âmbar
  //             "#ff7ff6", // rosa claro
  //           ];

  //           const glow = colors[i % colors.length];

  //           return (
  //             <motion.div
  //               key={i}
  //               animate={{
  //                 opacity: [0.5, 1, 0.5],
  //                 scale: [0.9, 1.25, 0.9],
  //               }}
  //               transition={{
  //                 repeat: Infinity,
  //                 duration: 1.5 + (i % 6) * 0.18,
  //                 delay: (i % 5) * 0.12,
  //                 ease: "easeInOut",
  //               }}
  //               style={{
  //                 width: 14,
  //                 height: 14,
  //                 borderRadius: "50%",
  //                 background: glow,
  //                 boxShadow: `0 0 12px ${glow}`,
  //               }}
  //             />
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );

  // -------------------------------
  // RENDER
  // -------------------------------
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 w-full h-full z-[999999] !bg-transparent"
      />

      {/* {(theme === "christmas" || theme === "lights") && topLights} */}
      {theme === "christmas" || theme === "lights"}

      {theme === "christmas" && (
        <img
          src={TREE_IMAGE}
          className="
    fixed left-2 bottom-0 z-[60] pointer-events-none 
    drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]
    w-[100px]      
    sm:w-[180px]     
    xs:w-[110px]    "
        />
      )}

      <div style={{ position: "relative", zIndex: 50 }}>{children}</div>
    </div>
  );
}
