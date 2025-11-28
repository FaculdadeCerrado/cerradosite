import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import PreviewImage from "../../Components/PreviewImage/PreviewImage";
import {
  getBanners,
  createBanner,
  updateBanner,
  deleteBanner,
} from "../../service/bannerService";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function GerenciarBanners() {
  const [banners, setBanners] = useState([]);
  const [pagina, setPagina] = useState("home");

  const [form, setForm] = useState({
    id: "",
    pagina: "home",
    alt: "",
    link: "",
    desktop: "",
    mobile: "",
    ordem: 0,
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadBanners();
    setForm((prev) => ({ ...prev, pagina }));
  }, [pagina]);

  const loadBanners = async () => {
    const res = await getBanners(pagina);
    if (res.success) setBanners(res.banners);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      await updateBanner(form);
    } else {
      await createBanner(form);
    }

    await loadBanners();
    resetForm();
  };

  const resetForm = () => {
    setForm({
      id: "",
      pagina: pagina,
      alt: "",
      link: "",
      desktop: "",
      mobile: "",
      ordem: 0,
    });
    setIsEditing(false);
  };

  const handleEdit = (banner) => {
    setForm(banner);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir?")) {
      await deleteBanner(id);
      await loadBanners();
    }
  };

  // DRAG AND DROP ORDER
  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    const reordered = Array.from(banners);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);

    // Atualiza ordem visual
    reordered.forEach((b, index) => (b.ordem = index));

    setBanners(reordered);

    // Atualiza no banco
    for (const b of reordered) {
      await updateBanner(b);
    }
  };

  return (
    <>
      <NavBar />

      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Gerenciador de Banners</h1>

        {/* FILTRO DE PÁGINA */}
        <div className="mb-4 flex gap-4">
          <select
            value={pagina}
            onChange={(e) => setPagina(e.target.value)}
            className="border p-2 rounded">
            <option value="home">Home</option>
            <option value="ouvidoria">Ouvidoria</option>
            <option value="PeriodicosEletronicos">
              Periodicos Eletrônicos (Biblioteca)
            </option>
            <option value="BaseDeDados">Base de Dados(Biblioteca)</option>
            <option value="JornaisEletronicos">
              Jornais Eletrônicos (Biblioteca)
            </option>
            <option value="cpa">CPA</option>
            <option value="ClinicaEscola">Clinica Escola</option>
          </select>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded-lg shadow grid gap-3 mb-6">
          <input
            name="alt"
            value={form.alt}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Texto ALT"
            required
          />
          <input
            name="link"
            value={form.link}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Link (opcional)"
          />
          <input
            name="desktop"
            value={form.desktop}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="URL imagem desktop"
            required
          />
          <PreviewImage url={form.desktop} alt={form.alt} />

          <input
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="URL imagem mobile (opcional)"
          />
          <PreviewImage url={form.mobile} alt={form.alt} />

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            {isEditing ? "Salvar Alterações" : "Criar Banner"}
          </button>

          {isEditing && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-400 text-white px-4 py-2 rounded">
              Cancelar
            </button>
          )}
        </form>

        {/* LISTAGEM + DRAG DROP */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="lista-banners">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {banners.map((b, index) => (
                  <Draggable
                    key={b.id}
                    draggableId={String(b.id)}
                    index={index}>
                    {(provided) => (
                      <div
                        className="border rounded-lg p-4 mb-3 bg-white shadow flex gap-4 items-center"
                        ref={provided.innerRef}
                        {...provided.draggableProps}>
                        {/* HANDLE */}
                        <div
                          {...provided.dragHandleProps}
                          className="cursor-grab text-gray-400 text-2xl pr-2">
                          ☰
                        </div>

                        <img
                          src={b.desktop}
                          alt={b.alt}
                          className="w-32 h-20 rounded object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-semibold">{b.alt}</p>
                          <p className="text-sm text-gray-500">
                            Ordem: {b.ordem}
                          </p>
                        </div>

                        <button
                          className="bg-yellow-500 text-white px-3 py-1 rounded"
                          onClick={() => handleEdit(b)}>
                          Editar
                        </button>

                        <button
                          className="bg-red-600 text-white px-3 py-1 rounded"
                          onClick={() => handleDelete(b.id)}>
                          Excluir
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
}

/* Desenvolvido por João Gabriel Souto */
