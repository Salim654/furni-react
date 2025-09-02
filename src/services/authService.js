// src/services/authService.js
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/register`, { name, email, password });
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const logout = async () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    await axios.post(
      `${API_URL}/logout`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    localStorage.removeItem("token");
  } catch (error) {
    console.error("Logout error:", error.response || error.message);
    localStorage.removeItem("token"); // still remove token if API fails
  }
};

export const getToken = () => localStorage.getItem("token");
