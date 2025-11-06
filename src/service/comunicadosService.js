import axios from "axios";
import ConfigService from "./configService";

const { API_URL } = ConfigService;

// ✅ Buscar todos
export const getComunicados = async () => {
  try {
    const res = await axios.get(`${API_URL}comunicados/read.php`);
    return res.data || [];
  } catch (error) {
    console.error("Erro ao buscar comunicados:", error);
    return [];
  }
};

// ✅ Buscar 1 comunicado
export const getComunicado = async (id) => {
  try {
    const res = await axios.get(`${API_URL}comunicados/readOne.php`, {
      params: { id },
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar comunicado:", error);
    return null;
  }
};

// ✅ Criar
export const createComunicado = async (comunicado) => {
  const { id, ...rest } = comunicado;

  const payload = {
    ...rest,
  };

  return axios.post(`${API_URL}comunicados/create.php`, payload, {
    headers: { "Content-Type": "application/json" },
  });
};

// ✅ Atualizar
export const updateComunicado = async (comunicado) => {
  if (!comunicado.id) {
    console.error("ID ausente para atualizar!");
    return { success: false, message: "ID ausente" };
  }

  const payload = {
    ...comunicado,
    id: Number(comunicado.id),
  };

  const res = await axios.post(`${API_URL}comunicados/update.php`, payload, {
    headers: { "Content-Type": "application/json" },
  });

  return res.data;
};

// ✅ Deletar
export const deleteComunicado = async (id) => {
  const res = await axios.post(
    `${API_URL}comunicados/delete.php`,
    { id },
    { headers: { "Content-Type": "application/json" } }
  );
  return res.data;
};
