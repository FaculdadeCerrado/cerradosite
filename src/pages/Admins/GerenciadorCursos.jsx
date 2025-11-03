import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar.jsx";

import {
  getCursos,
  createCurso,
  updateCurso,
  deleteCurso,
} from "../../service/cursoService";

export default function Cursos() {
  const [openMenu, setOpenMenu] = useState({});
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: "",
    nome: "",
    tipo: "",
    duracao: "",
    foto: "",
    objetivo: "",
    pre_requisitos: [],
    metodologia: "",
    estagio_supervisionado: 0,
    carga_horaria_estagio: 0,
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    console.log("useEffect chamado");
    loadCursos();
  }, []);

  const loadCursos = async () => {
    try {
      const data = await getCursos(); // axios já devolve array
      console.log("Cursos recebidos:", data);
      setCursos(data);
    } catch (error) {
      console.error("Erro ao carregar cursos:", error);
    }
  };

  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      const data = await getCursos();
      setCursos(data);
    };
    fetchCursos();
  }, []);

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
        await updateCurso(form);
      } else {
        await createCurso(form);
      }
      await loadCursos();
      resetForm();
    } catch (error) {
      console.error("Erro ao salvar curso:", error);
    }
  };

  const resetForm = () => {
    setForm({
      id: "",
      nome: "",
      tipo: "",
      duracao: "",
      foto: "",
      objetivo: "",
      pre_requisitos: [],
      metodologia: "",
      estagio_supervisionado: 0,
      carga_horaria_estagio: 0,
    });
    setIsEditing(false);
  };

  const handleEdit = (curso) => {
    setForm({
      ...curso,
      pre_requisitos: Array.isArray(curso.pre_requisitos)
        ? curso.pre_requisitos
        : JSON.parse(curso.pre_requisitos || "[]"),
    });
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este curso?")) {
      await deleteCurso(id);
      await loadCursos();
    }
  };

  // função para adicionar pré-requisito
  const [preRequisitosInput, setPreRequisitosInput] = useState("");

  const addPreRequisito = () => {
    if (preRequisitosInput.trim() !== "") {
      setForm({
        ...form,
        pre_requisitos: [...form.pre_requisitos, preRequisitosInput.trim()],
      });
      setPreRequisitosInput("");
    }
  };

  // função para remover
  const removePreRequisito = (index) => {
    const newList = form.pre_requisitos.filter((_, i) => i !== index);
    setForm({ ...form, pre_requisitos: newList });
  };

  return (
    <>
      <NavBar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4"> Gerenciamento de Cursos</h1>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded-xl shadow mb-6 grid gap-3">
          <input
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Nome do curso"
            className="border p-2 rounded"
            required
          />
          <input
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
            placeholder="Tipo (ex: Técnico, Livre...)"
            className="border p-2 rounded"
          />
          <input
            name="duracao"
            value={form.duracao}
            onChange={handleChange}
            placeholder="Duração"
            className="border p-2 rounded"
          />
          <input
            name="foto"
            value={form.foto}
            onChange={handleChange}
            placeholder="URL da foto"
            className="border p-2 rounded"
          />
          <textarea
            name="objetivo"
            value={form.objetivo}
            onChange={handleChange}
            placeholder="Objetivo"
            className="border p-2 rounded"
          />
          <div>
            <label className="font-bold">Pré-requisitos:</label>
            <div className="flex gap-2 mb-2">
              <input
                value={preRequisitosInput}
                onChange={(e) => setPreRequisitosInput(e.target.value)}
                placeholder="Digite um pré-requisito"
                className="border p-2 rounded flex-1"
              />
              <button
                type="button"
                onClick={addPreRequisito}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Adicionar
              </button>
            </div>
            <ul className="mb-2">
              {form.pre_requisitos.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center gap-2 border p-2 rounded mb-1">
                  {item}
                  <button
                    type="button"
                    onClick={() => removePreRequisito(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <textarea
            name="metodologia"
            value={form.metodologia}
            onChange={handleChange}
            placeholder="Metodologia"
            className="border p-2 rounded"
          />
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="estagio_supervisionado"
              checked={form.estagio_supervisionado === 1}
              onChange={handleChange}
            />
            Possui estágio supervisionado
          </label>
          <input
            name="carga_horaria_estagio"
            type="number"
            value={form.carga_horaria_estagio}
            onChange={handleChange}
            placeholder="Carga horária do estágio"
            className="border p-2 rounded"
          />

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              {isEditing ? "Salvar alterações" : "Criar curso"}
            </button>
            {isEditing && (
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
                Cancelar
              </button>
            )}
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {cursos.map((curso) => (
            <div key={curso.id} className="border p-4 rounded shadow relative">
              <img
                src={curso.foto}
                alt={curso.nome}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-lg font-bold mt-2">{curso.nome}</h2>
              <p>Tipo: {curso.tipo}</p>
              <p>Duração: {curso.duracao}</p>

              {/* Botão de ações */}
              <div className="absolute top-2 right-2">
                <div className="relative inline-block text-left">
                  <button
                    className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                    onClick={() =>
                      setOpenMenu((prev) => ({
                        ...prev,
                        [curso.id]: !prev[curso.id],
                      }))
                    }>
                    ⋮
                  </button>

                  {openMenu[curso.id] && (
                    <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow z-10">
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() =>
                          navigate(`/gerenciador-modulos/${curso.id}`)
                        }>
                        Módulos
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => handleEdit(curso)}>
                        Editar
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                        onClick={() => handleDelete(curso.id)}>
                        Excluir
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
