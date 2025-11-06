import axios from "axios";
import ConfigService from "./configService";

const { API_URL } = ConfigService;

export const getNoticias = async () => {
  try {
    const res = await axios.get(`${API_URL}noticias/read.php`);
    return res.data || [];
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
};

export const getNoticia = async (id) => {
  try {
    const res = await axios.get(`${API_URL}noticias/readOne.php`, {
      params: { id },
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar notícia:", error);
    return null;
  }
};

export const createNoticia = async (noticia) => {
  const { id, ...rest } = noticia;

  const payload = {
    ...rest,
    destaque: noticia.destaque ? 1 : 0,
  };

  return axios.post(`${API_URL}noticias/create.php`, payload, {
    headers: { "Content-Type": "application/json" },
  });
};

export const updateNoticia = async (noticia) => {
  if (!noticia.id) {
    console.error("ID ausente para atualizar!");
    return { success: false, message: "ID ausente" };
  }

  const payload = {
    ...noticia,
    id: Number(noticia.id),
    destaque: noticia.destaque ? 1 : 0,
  };

  const res = await axios.post(`${API_URL}noticias/update.php`, payload, {
    headers: { "Content-Type": "application/json" },
  });

  return res.data;
};

export const deleteNoticia = async (id) => {
  const res = await axios.post(
    `${API_URL}noticias/delete.php`,
    { id },
    { headers: { "Content-Type": "application/json" } }
  );
  return res.data;
};
