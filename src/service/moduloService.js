import axios from "axios";
import ConfigService from "./configService";

const { API_URL } = ConfigService;

//  Buscar módulos de um curso
export const getModulos = async (curso_id) => {
  try {
    const res = await axios.get(`${API_URL}modulos-disciplinas/read.php`, {
      params: { curso_id },
    });
    return res.data || [];
  } catch (error) {
    console.error("Erro ao buscar módulos:", error);
    return [];
  }
};

//  Criar um módulo com disciplinas
export const createModulo = async (curso_id, modulo) => {
  try {
    const payload = { curso_id, ...modulo };
    const res = await axios.post(
      `${API_URL}modulos-disciplinas/create.php`,
      payload
    );
    return res.data;
  } catch (error) {
    console.error("Erro ao criar módulo:", error);
    return { success: false };
  }
};

//  Atualizar módulo e disciplinas
export const updateModulo = async (modulo_id, modulo) => {
  try {
    const payload = { id: modulo_id, ...modulo };
    const res = await axios.post(
      `${API_URL}modulos-disciplinas/update.php`,
      payload
    );
    return res.data;
  } catch (error) {
    console.error("Erro ao atualizar módulo:", error);
    return { success: false };
  }
};

//  Deletar módulo (e suas disciplinas)
export const deleteModulo = async (modulo_id) => {
  try {
    const res = await axios.post(`${API_URL}modulos-disciplinas/delete.php`, {
      id: modulo_id,
    });
    return res.data;
  } catch (error) {
    console.error("Erro ao deletar módulo:", error);
    return { success: false };
  }
};
