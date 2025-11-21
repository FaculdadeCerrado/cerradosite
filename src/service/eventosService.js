import axios from "axios";
import ConfigService from "./configService";

const { API_URL } = ConfigService;

export const getEventos = async () => {
  try {
    const res = await axios.get(`${API_URL}eventos/read.php`);
    return res.data || [];
  } catch (error) {
    console.error("Erro ao buscar eventos:", error);
    return [];
  }
};

export const createEvento = async (evento) => {
  const payload = {
    ...evento,
  };

  return axios.post(`${API_URL}eventos/create.php`, payload, {
    headers: { "Content-Type": "application/json" },
  });
};

export const updateEvento = async (evento) => {
  const payload = {
    ...evento,
  };

  const res = await axios.post(`${API_URL}eventos/update.php`, payload, {
    headers: { "Content-Type": "application/json" },
  });

  return res.data;
};

export const deleteEvento = async (id) => {
  const res = await axios.post(
    `${API_URL}eventos/delete.php`,
    { id },
    { headers: { "Content-Type": "application/json" } }
  );
  return res.data;
};

export const getEventoCompleto = async (id) => {
  try {
    const res = await axios.get(`${API_URL}eventos/readOne.php`, {
      params: { id },
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar evento completo:", error);
    return null;
  }
};

export const getStatusEventos = async () => {
  try {
    const res = await axios.get(`${API_URL}eventos/readStatus.php`);
    return res.data || [];
  } catch (error) {
    console.error("Erro ao buscar status:", error);
    return [];
  }
};
