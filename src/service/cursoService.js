import axios from "axios";
import ConfigService from "./configService";

const { API_URL } = ConfigService;

export const getCursos = async () => {
  try {
    const res = await axios.get(`${API_URL}cursos/read.php`);
    // O backend retorna um array direto
    return res.data || [];
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    return [];
  }
};

export const createCurso = async (curso) => {
  const payload = {
    ...curso,
    pre_requisitos: Array.isArray(curso.pre_requisitos)
      ? curso.pre_requisitos
      : [curso.pre_requisitos],
    turnos: curso.turnos || [],
  };

  return axios.post(`${API_URL}cursos/create.php`, payload, {
    headers: { "Content-Type": "application/json" },
  });
};

export const updateCurso = async (curso) => {
  const payload = {
    ...curso,
    turnos: curso.turnos || [],
  };

  const res = await axios.post(`${API_URL}cursos/update.php`, payload, {
    headers: { "Content-Type": "application/json" },
  });

  return res.data;
};

export const deleteCurso = async (id) => {
  const res = await axios.post(
    `${API_URL}cursos/delete.php`,
    { id },
    { headers: { "Content-Type": "application/json" } }
  );
  return res.data;
};

export const getCursoCompleto = async (id) => {
  try {
    const res = await axios.get(`${API_URL}cursos/readOne.php`, {
      params: { id },
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar curso completo:", error);
    return null;
  }
};
