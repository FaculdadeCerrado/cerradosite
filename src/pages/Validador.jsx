import { useRef } from "react";

export default function ValidadorIframe() {
  const iframeRef = useRef(null);

  return (
    <div style={{ position: "relative", width: "100%", height: "600px" }}>
      {/* Overlay superior */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "50px",
          background: "#000",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}>
        <p style={{ margin: 0, fontWeight: "bold" }}>
          🔒 Validador de Documentos - Unicollege
        </p>
      </div>

      {/* Iframe em si */}
      <iframe
        ref={iframeRef}
        src="https://www.unicollege.net/cerrado/io03/Validador.aspx"
        width="100%"
        height="100%"
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          zIndex: 1,
          position: "relative",
        }}
        title="Validador de Documentos"
      />

      {/* Overlay inferior (exemplo de rodapé) */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40px",
          background: "#222",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          zIndex: 2,
        }}>
        <span>Suporte: suporte@seudominio.com</span>
      </div>
    </div>
  );
}
