import React, { useState } from "react";

const ValidadorDiploma = () => {
  const [codigo, setCodigo] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResultado(null);

    try {
      const response = await fetch(
        "https://www.unicollege.net/cerrado/io03/Validador.aspx",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            ctl00$ContentPlaceHolder1$DS_CODVALIDA: codigo,
            ctl00$ContentPlaceHolder1$BT_CONTINUAR: "Continuar",
          }),
        }
      );

      const text = await response.text();
      // Aqui você pode processar o conteúdo da resposta para extrair o resultado desejado
      setResultado(text);
    } catch (error) {
      console.error("Erro ao validar diploma:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Validador de Diploma</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder="Digite o código de validação"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Validando..." : "Validar"}
        </button>
      </form>
      {resultado && <div>{resultado}</div>}
    </div>
  );
};

export default ValidadorDiploma;
