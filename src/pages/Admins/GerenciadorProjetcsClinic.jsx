import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../../service/projectsService";

export default function ProjectsManager() {
  const [form, setForm] = useState({
    id: "",
    title: "",
    cover: "",
    file: "",
  });

  const [projects, setProjects] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const data = await getProjects();
    setProjects(data || []);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        await updateProject(form);
        alert("Projeto atualizado!");
      } else {
        await createProject(form);
        alert("Projeto criado com sucesso!");
      }

      setForm({ id: "", title: "", cover: "", file: "" });
      setIsEditing(false);
      loadProjects();
    } catch (error) {
      console.error("Erro ao salvar projeto:", error);
      alert("Erro ao salvar projeto.");
    }
  };

  const handleEdit = (project) => {
    setForm(project);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir este projeto?")) return;

    await deleteProject(id);
    alert("Projeto removido!");
    loadProjects();
  };

  return (
    <>
      <NavBar />

      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Gerenciar Projetos</h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow grid gap-4 mb-12">
          <label className="font-semibold">Título do Projeto:</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <label className="font-semibold">Link da Imagem (cover):</label>
          <input
            type="text"
            name="cover"
            value={form.cover}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <label className="font-semibold">Arquivo (PDF, img, etc):</label>
          <input
            type="text"
            name="file"
            value={form.file}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <div className="flex gap-3 mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              {isEditing ? "Salvar Alterações" : "Criar Projeto"}
            </button>

            {isEditing && (
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setForm({ id: "", title: "", cover: "", file: "" });
                  setIsEditing(false);
                }}>
                Cancelar
              </button>
            )}
          </div>
        </form>

        {/* LISTAGEM */}
        <div className="grid gap-4">
          {projects.length === 0 && (
            <p className="text-center text-gray-600">
              Nenhum projeto cadastrado ainda.
            </p>
          )}

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">{project.title}</h3>

                <p className="text-sm text-gray-600 break-all">
                  Cover: {project.cover}
                </p>

                {project.file && (
                  <p className="text-sm text-gray-600 break-all">
                    Arquivo: {project.file}
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  className="bg-yellow-500 px-3 py-2 text-white rounded"
                  onClick={() => handleEdit(project)}>
                  Editar
                </button>

                <button
                  className="bg-red-600 px-3 py-2 text-white rounded"
                  onClick={() => handleDelete(project.id)}>
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
