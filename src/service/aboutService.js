import axios from "axios";
import ConfigService from "./configService";

const { API_URL } = ConfigService;

// Buscar todos
export const getAbout = async () => {
  try {
    const res = await axios.get(`${API_URL}about/read.php`);
    return res.data || [];
  } catch (error) {
    console.error("Erro ao buscar informações do about:", error);
    return [];
  }
};

// Buscar por ID
export const getAboutById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}about/readOnephp`, {
      params: { id },
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar about:", error);
    return null;
  }
};

// Criar
export const createAbout = async (data) => {
  return axios.post(`${API_URL}about/create.php`, data, {
    headers: { "Content-Type": "application/json" },
  });
};

// Atualizar
export const updateAbout = async (data) => {
  if (!data.id) {
    console.error("ID ausente para atualizar!");
    return { success: false, message: "ID ausente" };
  }

  const payload = {
    ...data,
    id: Number(data.id),
  };

  const res = await axios.put(`${API_URL}about/update.php`, payload, {
    headers: { "Content-Type": "application/json" },
  });

  return res.data;
};

// Deletar
export const deleteAbout = async (id) => {
  const res = await axios.delete(`${API_URL}about/delete.php`, {
    params: { id },
  });
  return res.data;
};
