import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { getTheme, updateTheme } from "../../service/themeService";

export default function ThemeManager() {
  const [theme, setTheme] = useState("null");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    const t = await getTheme();
    setTheme(t ?? "null");
  };

  const handleSave = async () => {
    setLoading(true);

    const formattedTheme = theme === "null" ? null : theme;

    const res = await updateTheme(formattedTheme);

    if (res.success) {
      alert("Tema atualizado com sucesso!");
    } else {
      alert("Erro ao atualizar tema");
    }

    setLoading(false);
  };

  return (
    <>
      <NavBar />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Gerenciar Tema do Site</h1>

        <div className="bg-white p-4 rounded-xl shadow w-full max-w-lg grid gap-3">
          <label className="font-bold">Tema do site:</label>

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="border p-2 rounded">
            <option value="null">Sem tema</option>
            <option value="christmas">Natal</option>
          </select>

          <button
            onClick={handleSave}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded mt-2">
            {loading ? "Salvando..." : "Salvar tema"}
          </button>
        </div>
      </div>
    </>
  );
}
