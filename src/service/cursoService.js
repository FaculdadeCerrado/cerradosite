import axios from "axios";

// URL base da sua API
// const API_URL = "https://api.faculdadecerrado.edu.br/cursos";

const API_URL = "http://localhost:8000/cursos";

export const getCursos = async () => {
  try {
    const res = await axios.get(`${API_URL}/read.php`);
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
  };

  return axios.post(`${API_URL}/create.php`, payload, {
    headers: { "Content-Type": "application/json" },
  });
};

export const updateCurso = async (curso) => {
  const res = await axios.post(`${API_URL}/update.php`, curso, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};

export const deleteCurso = async (id) => {
  const res = await axios.post(
    `${API_URL}/delete.php`,
    { id },
    { headers: { "Content-Type": "application/json" } }
  );
  return res.data;
};
