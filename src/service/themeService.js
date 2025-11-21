import axios from "axios";
import ConfigService from "./configService";

const { API_URL } = ConfigService;

// Buscar tema atual
export const getTheme = async () => {
  try {
    const res = await axios.post(`${API_URL}theme/getTheme.php`, {});
    return res.data.theme ?? null;
  } catch (error) {
    console.error("Erro ao buscar tema:", error);
    return null;
  }
};

// Atualizar tema (null ou "christmas")
export const updateTheme = async (theme) => {
  try {
    const res = await axios.post(
      `${API_URL}theme/updateTheme.php`,
      { theme },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return res.data;
  } catch (error) {
    console.error("Erro ao atualizar tema:", error);
    return { success: false };
  }
};
