import axios from "axios";

const API_URL = "http://localhost:8000/api";

export const subscribeNewsletter = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/subscriptions`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
