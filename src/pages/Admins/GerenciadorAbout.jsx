import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import {
  getAbout,
  createAbout,
  updateAbout,
  deleteAbout,
} from "../../service/aboutService";

export default function AboutManager() {
  const [form, setForm] = useState({
    id: "",
    historico_instituicao: "",
    quem_somos: "",
    nossa_missao: "",
    nossa_visao: "",
    nosso_valores: "",
  });

  const [hasRecord, setHasRecord] = useState(false);

  useEffect(() => {
    loadAbout();
  }, []);

  const loadAbout = async () => {
    const data = await getAbout();

    if (data && data.id) {
      setForm(data);
      setHasRecord(true);
    } else {
      setHasRecord(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (hasRecord) {
        await updateAbout(form);
        alert("Informações atualizadas com sucesso!");
      } else {
        await createAbout(form);
        alert("Informações cadastradas!");
      }
      loadAbout();
    } catch (error) {
      console.error("Erro ao salvar:", error);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Deseja excluir todo o conteúdo?")) return;

    await deleteAbout(form.id);
    alert("Conteúdo removido!");
    setForm({
      id: "",
      historico_instituicao: "",
      quem_somos: "",
      nossa_missao: "",
      nossa_visao: "",
      nosso_valores: "",
    });
    setHasRecord(false);
  };

  return (
    <>
      <NavBar />

      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Gerenciar Sobre a Instituição
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow grid gap-4">
          <label className="font-semibold">Histórico da Instituição:</label>
          <textarea
            name="historico_instituicao"
            value={form.historico_instituicao}
            onChange={handleChange}
            className="border p-2 rounded"
            rows="5"
            required
          />

          <label className="font-semibold">Quem Somos:</label>
          <textarea
            name="quem_somos"
            value={form.quem_somos}
            onChange={handleChange}
            className="border p-2 rounded"
            rows="4"
            required
          />

          <label className="font-semibold">Nossa Missão:</label>
          <textarea
            name="nossa_missao"
            value={form.nossa_missao}
            onChange={handleChange}
            className="border p-2 rounded"
            rows="4"
            required
          />

          <label className="font-semibold">Nossa Visão:</label>
          <textarea
            name="nossa_visao"
            value={form.nossa_visao}
            onChange={handleChange}
            className="border p-2 rounded"
            rows="4"
            required
          />

          <label className="font-semibold">Nossos Valores:</label>
          <textarea
            name="nosso_valores"
            value={form.nosso_valores}
            onChange={handleChange}
            className="border p-2 rounded"
            rows="4"
            required
          />

          <div className="flex gap-3 mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              {hasRecord ? "Salvar Alterações" : "Criar Informações"}
            </button>

            {hasRecord && (
              <button
                type="button"
                className="bg-red-600 text-white px-4 py-2 rounded"
                onClick={handleDelete}>
                Excluir Tudo
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
