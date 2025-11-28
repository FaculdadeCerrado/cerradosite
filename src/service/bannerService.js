import axios from "axios";
import ConfigService from "./configService";

const { API_URL } = ConfigService;

export const getBanners = async (pagina) => {
  const res = await fetch(`${API_URL}banners/read.php?pagina=${pagina}`);
  return res.json();
};

export const createBanner = async (data) => {
  const res = await fetch(`${API_URL}banners/create.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateBanner = async (data) => {
  const res = await fetch(`${API_URL}banners/update.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteBanner = async (id) => {
  const res = await fetch(`${API_URL}banners/delete.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  return res.json();
};
