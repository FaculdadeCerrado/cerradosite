import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import {
  getCalendars,
  createCalendar,
  updateCalendar,
  deleteCalendar,
} from "../../service/calendarService";

export default function CalendarManager() {
  const [form, setForm] = useState({
    id: "",
    title: "",
    file: "",
  });

  const [calendarList, setCalendarList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadCalendars();
  }, []);

  const loadCalendars = async () => {
    const data = await getCalendars();
    setCalendarList(data || []);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        await updateCalendar(form);
        alert("Calendário atualizado!");
      } else {
        await createCalendar(form);
        alert("Calendário criado com sucesso!");
      }

      setForm({ id: "", title: "", file: "" });
      setIsEditing(false);
      loadCalendars();
    } catch (error) {
      console.error("Erro ao salvar calendário:", error);
      alert("Erro ao salvar calendário.");
    }
  };

  const handleEdit = (calendar) => {
    setForm(calendar);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir este calendário?"))
      return;

    await deleteCalendar(id);
    alert("Calendário removido!");
    loadCalendars();
  };

  return (
    <>
      <NavBar />

      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Gerenciar Calendário Acadêmico
        </h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow grid gap-4 mb-12">
          <label className="font-semibold">Título do Calendário:</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <label className="font-semibold">Arquivo (PDF, imagem, etc):</label>
          <input
            type="text"
            name="file"
            value={form.file}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <div className="flex gap-3 mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              {isEditing ? "Salvar Alterações" : "Criar Calendário"}
            </button>

            {isEditing && (
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setForm({ id: "", title: "", file: "" });
                  setIsEditing(false);
                }}>
                Cancelar
              </button>
            )}
          </div>
        </form>

        {/* LISTAGEM */}
        <div className="grid gap-4">
          {calendarList.length === 0 && (
            <p className="text-center text-gray-600">
              Nenhum calendário cadastrado ainda.
            </p>
          )}

          {calendarList.map((calendar) => (
            <div
              key={calendar.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">{calendar.title}</h3>

                {calendar.file && (
                  <p className="text-sm text-gray-600 break-all">
                    Arquivo: {calendar.file}
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  className="bg-yellow-500 px-3 py-2 text-white rounded"
                  onClick={() => handleEdit(calendar)}>
                  Editar
                </button>

                <button
                  className="bg-red-600 px-3 py-2 text-white rounded"
                  onClick={() => handleDelete(calendar.id)}>
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
