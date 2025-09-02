import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const getAllBlogs = async () => {
  try {
    const response = await axios.get(`${API_URL}/blogs`);
    return response.data.blogs; // assuming your API returns { message, blogs }
  } catch (error) {
    console.error("Get blogs error:", error.response || error.message);
    throw error;
  }
};
