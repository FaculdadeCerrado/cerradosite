import React, { useEffect, useState } from "react";
import {
  getModulos,
  createModulo,
  updateModulo,
  deleteModulo,
} from "../../service/moduloService";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import { useParams } from "react-router-dom";

export default function GerenciadorModulos() {
  const { cursoId } = useParams();
  const [modulos, setModulos] = useState([]);
  const [form, setForm] = useState({
    id: null,
    nome_modulo: "",
    disciplinas: [],
  });
  const [disciplinaInput, setDisciplinaInput] = useState({
    id: null,
    nome: "",
    carga_horaria: 0,
  });
  const [editandoDisciplinaIndex, setEditandoDisciplinaIndex] = useState(null);

  useEffect(() => {
    if (cursoId) loadModulos();
  }, [cursoId]);

  const loadModulos = async () => {
    try {
      const data = await getModulos(cursoId);
      setModulos(data || []);
    } catch (error) {
      console.error("Erro ao carregar módulos:", error);
    }
  };

  // ---------------- FORMULÁRIO ----------------
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleDisciplinaChange = (e) => {
    const { name, value } = e.target;
    setDisciplinaInput({ ...disciplinaInput, [name]: value });
  };

  const addDisciplina = () => {
    if (!disciplinaInput.nome.trim()) return;

    if (editandoDisciplinaIndex !== null) {
      // Editando disciplina existente
      const updated = [...form.disciplinas];
      updated[editandoDisciplinaIndex] = {
        ...disciplinaInput,
        carga_horaria: Number(disciplinaInput.carga_horaria),
      };
      setForm({ ...form, disciplinas: updated });
      setEditandoDisciplinaIndex(null);
    } else {
      // Adicionando nova disciplina
      setForm({
        ...form,
        disciplinas: [
          ...form.disciplinas,
          {
            ...disciplinaInput,
            carga_horaria: Number(disciplinaInput.carga_horaria),
          },
        ],
      });
    }

    setDisciplinaInput({ id: null, nome: "", carga_horaria: 0 });
  };

  const editDisciplina = (index) => {
    setDisciplinaInput(form.disciplinas[index]);
    setEditandoDisciplinaIndex(index);
  };

  const removeDisciplina = (index) => {
    const newList = form.disciplinas.filter((_, i) => i !== index);
    setForm({ ...form, disciplinas: newList });
  };

  // ---------------- MÓDULOS ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nome_modulo) return alert("Digite o nome do módulo");

    try {
      let res;
      if (form.id) {
        // Atualizar módulo existente
        res = await updateModulo(form.id, form);
      } else {
        // Criar novo módulo
        res = await createModulo(cursoId, form);
      }

      if (res.success) {
        setForm({ id: null, nome_modulo: "", disciplinas: [] });
        setDisciplinaInput({ id: null, nome: "", carga_horaria: 0 });
        loadModulos();
      } else {
        alert("Erro ao salvar módulo");
      }
    } catch (error) {
      console.error("Erro ao salvar módulo:", error);
      alert("Erro ao salvar módulo");
    }
  };

  const editModulo = (modulo) => {
    setForm({
      id: modulo.id,
      nome_modulo: modulo.nome,
      disciplinas: modulo.disciplinas || [],
    });
  };

  const removeModulo = async (moduloId) => {
    if (!window.confirm("Deseja realmente deletar este módulo?")) return;
    try {
      const res = await deleteModulo(moduloId);
      if (res.success) loadModulos();
      else alert("Erro ao deletar módulo");
    } catch (error) {
      console.error("Erro ao deletar módulo:", error);
      alert("Erro ao deletar módulo");
    }
  };

  // ---------------- RENDER ----------------
  return (
    <>
      <NavBar />
      <div className="p-6 bg-white rounded shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Gerenciador de Módulos</h2>

        {/* FORMULÁRIO DE MÓDULO */}
        <form onSubmit={handleSubmit} className="grid gap-3 mb-6">
          <input
            name="nome_modulo"
            value={form.nome_modulo}
            onChange={handleFormChange}
            placeholder="Nome do módulo"
            className="border p-2 rounded"
            required
          />

          {/* DISCIPLINAS */}
          <div>
            <h3 className="font-bold mb-2">Disciplinas</h3>
            <div className="flex gap-2 mb-2">
              <input
                name="nome"
                value={disciplinaInput.nome}
                onChange={handleDisciplinaChange}
                placeholder="Nome da disciplina"
                className="border p-2 rounded flex-1"
              />
              <input
                name="carga_horaria"
                type="number"
                value={disciplinaInput.carga_horaria}
                onChange={handleDisciplinaChange}
                placeholder="Carga horária"
                className="border p-2 rounded w-32"
              />
              <button
                type="button"
                onClick={addDisciplina}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                {editandoDisciplinaIndex !== null ? "Salvar" : "Adicionar"}
              </button>
            </div>

            <ul>
              {form.disciplinas.map((d, i) => (
                <li
                  key={i}
                  className="flex justify-between gap-2 border p-2 rounded mb-1">
                  {d.nome} ({d.carga_horaria}h)
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => editDisciplina(i)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => removeDisciplina(i)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                      X
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            {form.id ? "Atualizar Módulo" : "Criar Módulo"}
          </button>
        </form>

        {/* LISTA DE MÓDULOS EXISTENTES */}
        <div>
          <h3 className="font-bold mb-2">Módulos existentes:</h3>
          <ul>
            {modulos.map((m) => (
              <li key={m.id} className="mb-4 border p-3 rounded">
                <div className="flex justify-between items-center mb-2">
                  <strong>{m.nome}</strong>
                  <div className="flex gap-2">
                    <button
                      onClick={() => editModulo(m)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                      Editar
                    </button>
                    <button
                      onClick={() => removeModulo(m.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                      X
                    </button>
                  </div>
                </div>
                <ul className="list-disc list-inside ml-4">
                  {(Array.isArray(m.disciplinas) ? m.disciplinas : []).map(
                    (d, i) => (
                      <li key={i}>
                        {d.nome} ({d.carga_horaria}h)
                      </li>
                    )
                  )}
                </ul>
              </li>
            ))}
          </ul>
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
