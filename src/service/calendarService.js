import axios from "axios";
import ConfigService from "./configService";

const { API_URL } = ConfigService;

export const getCalendars = async () => {
  const res = await axios.get(`${API_URL}calendar/read.php`);
  return res.data || [];
};

export const getCalendarById = async (id) => {
  const res = await axios.get(`${API_URL}calendar/readOne.php`, {
    params: { id },
  });
  return res.data;
};

export const createCalendar = (data) => {
  return axios.post(`${API_URL}calendar/create.php`, data, {
    headers: { "Content-Type": "application/json" },
  });
};

export const updateCalendar = (data) => {
  return axios.put(`${API_URL}calendar/update.php`, data, {
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteCalendar = (id) => {
  return axios.delete(`${API_URL}calendar/delete.php`, {
    params: { id },
  });
};
