import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import {
  getNoticias,
  createNoticia,
  updateNoticia,
  deleteNoticia,
} from "../../service/noticiaService";
import { useNavigate } from "react-router-dom";

export default function Noticias() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: "",
    titulo: "",
    slug: "",
    categoria: "",
    descricao: "",
    conteudo: "",
    imagem: "",
    autor: "FACE",
    destaque: 0,
  });

  const [noticias, setNoticias] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [openMenu, setOpenMenu] = useState({});

  useEffect(() => {
    loadNoticias();
  }, []);

  const loadNoticias = async () => {
    try {
      const data = await getNoticias();
      setNoticias(data);
    } catch (err) {
      console.error("Erro ao carregar notícias:", err);
    }
  };

  // ✅ Gera slug automaticamente
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "titulo") {
      setForm({
        ...form,
        titulo: value,
        slug: generateSlug(value),
      });
      return;
    }

    setForm({
      ...form,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        await updateNoticia(form);
      } else {
        // ✅ Remove ID ao criar
        const { id, ...payload } = form;
        await createNoticia(payload);
      }

      await loadNoticias();
      resetForm();
    } catch (err) {
      console.error("Erro ao salvar notícia:", err);
    }

    console.log("FORM:", form);
  };

  const resetForm = () => {
    setForm({
      id: "",
      titulo: "",
      slug: "",
      categoria: "",
      descricao: "",
      conteudo: "",
      imagem: "",
      autor: "FACE",
      destaque: 0,
    });
    setIsEditing(false);
  };

  const handleEdit = (noticia) => {
    setForm(noticia);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta notícia?")) {
      await deleteNoticia(id);
      await loadNoticias();
    }
  };

  return (
    <>
      <NavBar />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Gerenciar Notícias</h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded-xl shadow mb-6 grid gap-3">
          <p className="font-bold">Titulo:</p>
          <input
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Título"
            className="border p-2 rounded"
            required
          />
          <p className="font-bold">Categoria:</p>
          <input
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
            placeholder="Categoria"
            className="border p-2 rounded"
          />
          <p className="font-bold">Descrição do card:</p>
          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            placeholder="Descrição"
            className="border p-2 rounded"
          />
          <p className="font-bold">Conteudo da noticia:</p>
          <textarea
            name="conteudo"
            value={form.conteudo}
            onChange={handleChange}
            placeholder="Conteúdo"
            className="border p-2 rounded"
          />
          <p className="font-bold">Url da capa:</p>
          <input
            name="imagem"
            value={form.imagem}
            onChange={handleChange}
            placeholder="URL da Imagem"
            className="border p-2 rounded"
          />
          <p className="font-bold">Autor:</p>
          <input
            name="autor"
            value={form.autor}
            onChange={handleChange}
            placeholder="Autor"
            className="border p-2 rounded"
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
              Quando marcado, esta notícia será exibida em destaque na página
              inicial, alternando automaticamente a cada 3 notícias.
            </span>
          </label>

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded">
              {isEditing ? "Salvar alterações" : "Criar notícia"}
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
          {noticias.map((noticia) => (
            <div
              key={noticia.id}
              className="border p-4 rounded shadow relative">
              <img
                src={noticia.imagem}
                alt={noticia.titulo}
                className="w-full h-48 object-cover rounded"
              />

              <h2 className="text-lg font-bold mt-2">{noticia.titulo}</h2>
              <p>Categoria: {noticia.categoria}</p>

              <div className="absolute top-2 right-2">
                <button
                  className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                  onClick={() =>
                    setOpenMenu((prev) => ({
                      ...prev,
                      [noticia.id]: !prev[noticia.id],
                    }))
                  }>
                  ⋮
                </button>

                {openMenu[noticia.id] && (
                  <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow z-10">
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleEdit(noticia)}>
                      Editar
                    </button>

                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                      onClick={() => handleDelete(noticia.id)}>
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
