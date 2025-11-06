import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import {
  getComunicados,
  createComunicado,
  updateComunicado,
  deleteComunicado,
} from "../../service/comunicadosService";
import { useNavigate } from "react-router-dom";

export default function Comunicados() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: "",
    titulo: "",
    conteudo: "",
    destaque: 0,
  });

  const [comunicados, setComunicados] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [openMenu, setOpenMenu] = useState({});

  useEffect(() => {
    loadComunicados();
  }, []);

  const loadComunicados = async () => {
    try {
      const data = await getComunicados();
      setComunicados(data);
    } catch (err) {
      console.error("Erro ao carregar comunicados:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        await updateComunicado(form);
      } else {
        const { id, ...payload } = form;
        await createComunicado(payload);
      }

      await loadComunicados();
      resetForm();
    } catch (err) {
      console.error("Erro ao salvar comunicado:", err);
    }
    console.log("FORM:", form);
  };

  const resetForm = () => {
    setForm({
      id: "",
      titulo: "",
      conteudo: "",
      destaque: 0,
    });
    setIsEditing(false);
  };

  const handleEdit = (item) => {
    setForm(item);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este comunicado?")) {
      await deleteComunicado(id);
      await loadComunicados();
    }
  };

  return (
    <>
      <NavBar />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Gerenciar Comunicados</h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded-xl shadow mb-6 grid gap-3">
          <p className="font-bold">Título:</p>
          <input
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Título"
            className="border p-2 rounded"
            required
          />

          <p className="font-bold">Conteúdo do comunicado:</p>
          <textarea
            name="conteudo"
            value={form.conteudo}
            onChange={handleChange}
            placeholder="Conteúdo"
            className="border p-2 rounded"
            required
          />

          <label className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="destaque"
                checked={form.destaque === 1}
                onChange={handleChange}
              />
              Destaque
            </div>
            <span className="text-sm text-gray-500">
              Quando marcado, será exibido na página inicial.
            </span>
          </label>

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded">
              {isEditing ? "Salvar alterações" : "Criar comunicado"}
            </button>

            {isEditing && (
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-400 text-white px-4 py-2 rounded">
                Cancelar
              </button>
            )}
          </div>
        </form>

        {/* LISTAGEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {comunicados.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow relative">
              <h2 className="text-lg font-bold mt-2">{item.titulo}</h2>

              <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                {item.conteudo}
              </p>

              <p className="text-sm text-gray-400 mt-2">
                Publicado em: {new Date(item.data_publicacao).toLocaleString()}
              </p>

              {item.destaque == 1 && (
                <span className="bg-yellow-400 text-black px-2 py-1 text-xs rounded mt-2 inline-block">
                  Destaque
                </span>
              )}

              <div className="absolute top-2 right-2">
                <button
                  className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                  onClick={() =>
                    setOpenMenu((prev) => ({
                      ...prev,
                      [item.id]: !prev[item.id],
                    }))
                  }>
                  ⋮
                </button>

                {openMenu[item.id] && (
                  <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow z-10">
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleEdit(item)}>
                      Editar
                    </button>

                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                      onClick={() => handleDelete(item.id)}>
                      Excluir
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
