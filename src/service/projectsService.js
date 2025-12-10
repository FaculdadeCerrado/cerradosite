import axios from "axios";
import ConfigService from "./configService";

const { API_URL } = ConfigService;

export const getProjects = async () => {
  const res = await axios.get(`${API_URL}clinic/read.php`);
  return res.data || [];
};

export const getProjectById = async (id) => {
  const res = await axios.get(`${API_URL}clinic/readOne.php`, {
    params: { id },
  });
  return res.data;
};

export const createProject = (data) => {
  return axios.post(`${API_URL}clinic/create.php`, data, {
    headers: { "Content-Type": "application/json" },
  });
};

export const updateProject = (data) => {
  return axios.put(`${API_URL}clinic/update.php`, data, {
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteProject = (id) => {
  return axios.delete(`${API_URL}clinic/delete.php`, {
    params: { id },
  });
};
