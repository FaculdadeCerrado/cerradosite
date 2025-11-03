import axios from "axios";

const API_URL = "http://localhost:8000/modulos-disciplinas";

// ✅ Buscar módulos de um curso
export const getModulos = async (curso_id) => {
  try {
    const res = await axios.get(`${API_URL}/read.php`, {
      params: { curso_id },
    });
    return res.data || [];
  } catch (error) {
    console.error("Erro ao buscar módulos:", error);
    return [];
  }
};

// ✅ Criar um módulo com disciplinas
export const createModulo = async (curso_id, modulo) => {
  try {
    const payload = { curso_id, ...modulo };
    const res = await axios.post(`${API_URL}/create.php`, payload);
    return res.data;
  } catch (error) {
    console.error("Erro ao criar módulo:", error);
    return { success: false };
  }
};

// ✅ Atualizar módulo e disciplinas
export const updateModulo = async (modulo_id, modulo) => {
  try {
    const payload = { id: modulo_id, ...modulo };
    const res = await axios.post(`${API_URL}/update.php`, payload);
    return res.data;
  } catch (error) {
    console.error("Erro ao atualizar módulo:", error);
    return { success: false };
  }
};

// ✅ Deletar módulo (e suas disciplinas)
export const deleteModulo = async (modulo_id) => {
  try {
    const res = await axios.post(`${API_URL}/delete.php`, { id: modulo_id });
    return res.data;
  } catch (error) {
    console.error("Erro ao deletar módulo:", error);
    return { success: false };
  }
};
