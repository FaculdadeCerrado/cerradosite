import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar.jsx";

import {
  getEventos,
  createEvento,
  updateEvento,
  deleteEvento,
  getStatusEventos,
} from "../../service/eventosService";

export default function Eventos() {
  const [openMenu, setOpenMenu] = useState({});
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: "",
    status_id: "",
    titulo: "",
    descricao: "",
    publico_alvo: "",
    local_evento: "",
    data_inicio: "",
    data_fim: "",
    horario: "",
    programacao: [],
    palestrantes: [],
    link_inscricao: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [eventos, setEventos] = useState([]);
  const [statusList, setStatusList] = useState([]);

  useEffect(() => {
    loadEventos();
    loadStatus();
  }, []);

  const loadStatus = async () => {
    const data = await getStatusEventos();
    setStatusList(data);
  };

  useEffect(() => {
    loadEventos();
  }, []);

  const loadEventos = async () => {
    try {
      const data = await getEventos();
      setEventos(data);
    } catch (error) {
      console.error("Erro ao carregar eventos:", error);
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
      if (isEditing) {
        await updateEvento(form);
      } else {
        await createEvento(form);
      }
      await loadEventos();
      resetForm();
    } catch (error) {
      console.error("Erro ao salvar evento:", error);
    }
  };

  const resetForm = () => {
    setForm({
      id: "",
      status_id: "",
      titulo: "",
      descricao: "",
      publico_alvo: "",
      local_evento: "",
      data_inicio: "",
      data_fim: "",
      horario: "",
      programacao: [],
      palestrantes: [],
      link_inscricao: "",
    });

    setIsEditing(false);
  };

  const handleEdit = (evento) => {
    setForm(evento);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este evento?")) {
      await deleteEvento(id);
      await loadEventos();
    }
  };

  const [palestranteTemp, setPalestranteTemp] = useState({
    nome: "",
    titulacao: "",
  });

  const addPalestrante = () => {
    if (!palestranteTemp.nome.trim()) return;

    setForm({
      ...form,
      palestrantes: [...form.palestrantes, palestranteTemp],
    });

    setPalestranteTemp({ nome: "", titulacao: "" });
  };

  const removePalestrante = (index) => {
    const novos = [...form.palestrantes];
    novos.splice(index, 1);
    setForm({ ...form, palestrantes: novos });
  };
  const [programacaoTemp, setProgramacaoTemp] = useState({
    horario: "",
    atividade: "",
    local: "",
    data: "",
  });

  const addProgramacao = () => {
    if (
      !programacaoTemp.horario.trim() ||
      !programacaoTemp.atividade.trim() ||
      !programacaoTemp.local.trim() ||
      !programacaoTemp.data.trim()
    )
      return;

    setForm({
      ...form,
      programacao: [...form.programacao, programacaoTemp],
    });

    setProgramacaoTemp({ horario: "", atividade: "", local: "", data: "" });
  };
  const removeProgramacao = (index) => {
    const novaLista = [...form.programacao];
    novaLista.splice(index, 1);
    setForm({ ...form, programacao: novaLista });
  };

  return (
    <>
      <NavBar />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Gerenciamento de Eventos</h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded-xl shadow mb-6 grid gap-3">
          <input
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Título do evento"
            className="border p-2 rounded"
            required
          />

          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            placeholder="Descrição"
            className="border p-2 rounded"
          />

          <input
            name="publico_alvo"
            value={form.publico_alvo}
            onChange={handleChange}
            placeholder="Público-alvo"
            className="border p-2 rounded"
          />

          <input
            name="local_evento"
            value={form.local_evento}
            onChange={handleChange}
            placeholder="Local do evento"
            className="border p-2 rounded"
          />

          <label>Status do Evento</label>
          <select
            name="status_id"
            value={form.status_id}
            onChange={handleChange}
            className="border p-2 rounded"
            required>
            <option value="">Selecione...</option>
            {statusList.map((s) => (
              <option key={s.id} value={s.id}>
                {s.nome.replace("_", " ")}
              </option>
            ))}
          </select>

          <label>Data de início</label>
          <input
            type="date"
            name="data_inicio"
            value={form.data_inicio}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <label>Data de fim</label>
          <input
            type="date"
            name="data_fim"
            value={form.data_fim}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            name="horario"
            value={form.horario}
            onChange={handleChange}
            placeholder="Horário"
            className="border p-2 rounded"
          />

          <div className="border p-3 rounded">
            <h3 className="font-bold mb-2">Programação</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
              <input
                type="text"
                placeholder="Horário (ex: 08h)"
                value={programacaoTemp.horario}
                onChange={(e) =>
                  setProgramacaoTemp({
                    ...programacaoTemp,
                    horario: e.target.value,
                  })
                }
                className="border p-2 rounded w-full"
              />

              <input
                type="text"
                placeholder="Atividade"
                value={programacaoTemp.atividade}
                onChange={(e) =>
                  setProgramacaoTemp({
                    ...programacaoTemp,
                    atividade: e.target.value,
                  })
                }
                className="border p-2 rounded w-full"
              />

              <input
                type="text"
                placeholder="Local"
                value={programacaoTemp.local}
                onChange={(e) =>
                  setProgramacaoTemp({
                    ...programacaoTemp,
                    local: e.target.value,
                  })
                }
                className="border p-2 rounded w-full"
              />

              <input
                type="date"
                value={programacaoTemp.data}
                onChange={(e) =>
                  setProgramacaoTemp({
                    ...programacaoTemp,
                    data: e.target.value,
                  })
                }
                className="border p-2 rounded w-full"
              />
            </div>

            <button
              type="button"
              onClick={addProgramacao}
              className="bg-green-600 text-white px-4 py-2 rounded mb-3">
              + Adicionar item
            </button>

            {/* Lista da Programação */}
            {form.programacao.length > 0 && (
              <ul className="space-y-2">
                {form.programacao.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between p-2 bg-gray-100 rounded">
                    <span>
                      <b>{item.horario}</b> — {item.atividade}
                      <br />
                      <b>Local:</b> {item.local}
                      <br />
                      <b>Data:</b> {item.data}
                    </span>

                    <button
                      type="button"
                      onClick={() => removeProgramacao(index)}
                      className="text-red-600 font-bold">
                      X
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border p-3 rounded">
            <h3 className="font-bold mb-2">Palestrantes</h3>

            <div className="flex gap-2 mb-3">
              <input
                type="text"
                placeholder="Nome"
                value={palestranteTemp.nome}
                onChange={(e) =>
                  setPalestranteTemp({
                    ...palestranteTemp,
                    nome: e.target.value,
                  })
                }
                className="border p-2 rounded w-full"
              />

              <input
                type="text"
                placeholder="Titulação"
                value={palestranteTemp.titulacao}
                onChange={(e) =>
                  setPalestranteTemp({
                    ...palestranteTemp,
                    titulacao: e.target.value,
                  })
                }
                className="border p-2 rounded w-full"
              />

              <button
                type="button"
                onClick={addPalestrante}
                className="bg-green-600 text-white px-4 py-2 rounded">
                +
              </button>
            </div>

            {/* LISTA DE PALESTRANTES */}
            {form.palestrantes.length > 0 && (
              <ul className="space-y-2">
                {form.palestrantes.map((p, index) => (
                  <li
                    key={index}
                    className="flex justify-between p-2 bg-gray-100 rounded">
                    <span>
                      <b>{p.nome}</b> — {p.titulacao}
                    </span>

                    <button
                      type="button"
                      onClick={() => removePalestrante(index)}
                      className="text-red-600 font-bold">
                      X
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <input
            name="link_inscricao"
            value={form.link_inscricao}
            onChange={handleChange}
            placeholder="Link para inscrição"
            className="border p-2 rounded"
          />

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded">
              {isEditing ? "Salvar alterações" : "Criar evento"}
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
          {eventos.map((evento) => (
            <div key={evento.id} className="border p-4 rounded shadow relative">
              <h2 className="text-xl font-bold">{evento.titulo}</h2>
              <p>{evento.descricao}</p>
              <p>
                <b>Local:</b> {evento.local_evento}
              </p>
              <p>
                <b>Data:</b> {evento.data_inicio} até {evento.data_fim}
              </p>
              <p>
                <b>Horário:</b> {evento.horario}
              </p>

              <div className="absolute top-2 right-2">
                <button
                  className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                  onClick={() =>
                    setOpenMenu((prev) => ({
                      ...prev,
                      [evento.id]: !prev[evento.id],
                    }))
                  }>
                  ⋮
                </button>

                {openMenu[evento.id] && (
                  <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow z-10">
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleEdit(evento)}>
                      Editar
                    </button>

                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                      onClick={() => handleDelete(evento.id)}>
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
