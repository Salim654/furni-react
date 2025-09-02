// src/services/messageService.js
import axios from "axios";

const API_URL = "http://localhost:8000/api"; // replace with your backend URL

export const sendMessage = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/messages`, data);
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error.response?.data || error.message);
    throw error;
  }
};
