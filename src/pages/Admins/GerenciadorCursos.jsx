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
    turnos: [],
    metodologia: "",
    estagio_supervisionado: 0,
    carga_horaria_estagio: 0,

    // ✅ novos campos
    nota_mec: 0,
    sobre: "",
    mercado: "",
    diferenciais: "",
    cpc: 0,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    loadCursos();
  }, []);

  const loadCursos = async () => {
    try {
      const data = await getCursos();
      setCursos(data);
    } catch (error) {
      console.error("Erro ao carregar cursos:", error);
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
      turnos: [],
      metodologia: "",
      estagio_supervisionado: 0,
      carga_horaria_estagio: 0,

      nota_mec: 0,
      sobre: "",
      mercado: "",
      diferenciais: "",
      cpc: 0,
    });

    setIsEditing(false);
  };

  const handleEdit = (curso) => {
    setForm({
      ...curso,
      pre_requisitos: Array.isArray(curso.pre_requisitos)
        ? curso.pre_requisitos
        : JSON.parse(curso.pre_requisitos || "[]"),
      turnos: Array.isArray(curso.turnos)
        ? curso.turnos
        : JSON.parse(curso.turnos || "[]"),
    });
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este curso?")) {
      await deleteCurso(id);
      await loadCursos();
    }
  };

  // pré-requisitos
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
  const removePreRequisito = (index) => {
    setForm({
      ...form,
      pre_requisitos: form.pre_requisitos.filter((_, i) => i !== index),
    });
  };

  // turnos
  const [TurnosInput, setTurnosInput] = useState("");
  const addTurnos = () => {
    if (TurnosInput.trim() !== "") {
      setForm({
        ...form,
        turnos: [...form.turnos, TurnosInput.trim()],
      });
      setTurnosInput("");
    }
  };
  const removeTurnos = (index) => {
    setForm({
      ...form,
      turnos: form.turnos.filter((_, i) => i !== index),
    });
  };

  return (
    <>
      <NavBar />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Gerenciamento de Cursos</h1>

        {/* FORM */}
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
            placeholder="Tipo"
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
            placeholder="URL Foto"
            className="border p-2 rounded"
          />

          <textarea
            name="objetivo"
            value={form.objetivo}
            onChange={handleChange}
            placeholder="Objetivo"
            className="border p-2 rounded"
          />

          <p>nota mec</p>
          <input
            type="number"
            name="nota_mec"
            value={form.nota_mec}
            onChange={handleChange}
            placeholder="Nota MEC"
            className="border p-2 rounded"
          />
          <p>cpc</p>
          <input
            type="number"
            name="cpc"
            value={form.cpc}
            onChange={handleChange}
            placeholder="CPC"
            className="border p-2 rounded"
          />

          <textarea
            name="sobre"
            value={form.sobre}
            onChange={handleChange}
            placeholder="Sobre o curso"
            className="border p-2 rounded"
          />

          <textarea
            name="mercado"
            value={form.mercado}
            onChange={handleChange}
            placeholder="Mercado de trabalho"
            className="border p-2 rounded"
          />

          <textarea
            name="diferenciais"
            value={form.diferenciais}
            onChange={handleChange}
            placeholder="Diferenciais"
            className="border p-2 rounded"
          />

          {/* PRÉ-REQUISITOS */}
          <div>
            <label className="font-bold">Pré-requisitos:</label>
            <div className="flex gap-2 mb-2">
              <input
                value={preRequisitosInput}
                onChange={(e) => setPreRequisitosInput(e.target.value)}
                placeholder="Digite"
                className="border p-2 rounded flex-1"
              />
              <button
                type="button"
                onClick={addPreRequisito}
                className="bg-green-600 text-white px-4 py-2 rounded">
                Adicionar
              </button>
            </div>

            <ul>
              {form.pre_requisitos.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between border p-2 rounded mb-1">
                  {item}
                  <button
                    type="button"
                    onClick={() => removePreRequisito(index)}
                    className="bg-red-500 text-white px-2 rounded">
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* TURNOS */}
          <div>
            <label className="font-bold">Turnos:</label>
            <div className="flex gap-2 mb-2">
              <input
                value={TurnosInput}
                onChange={(e) => setTurnosInput(e.target.value)}
                placeholder="Digite um turno"
                className="border p-2 rounded flex-1"
              />
              <button
                type="button"
                onClick={addTurnos}
                className="bg-green-600 text-white px-4 py-2 rounded">
                Adicionar
              </button>
            </div>

            <ul>
              {form.turnos.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between border p-2 rounded mb-1">
                  {item}
                  <button
                    type="button"
                    onClick={() => removeTurnos(index)}
                    className="bg-red-500 text-white px-2 rounded">
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
            type="number"
            name="carga_horaria_estagio"
            value={form.carga_horaria_estagio}
            onChange={handleChange}
            placeholder="Carga horária do estágio"
            className="border p-2 rounded"
          />

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded">
              {isEditing ? "Salvar alterações" : "Criar curso"}
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

              <div className="absolute top-2 right-2">
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
          ))}
        </div>
      </div>
    </>
  );
}
{
  /* DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
     -https://www.linkedin.com/in/gabrielsouto01
     -https://github.com/soutozk
     -https://www.instagram.com/soutozk/ */
}
