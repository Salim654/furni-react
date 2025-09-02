// src/services/productService.js
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const getAllProducts = async () => {
  try {
    const res = await axios.get(`${API_URL}/products`);
    return res.data.Products; // returns array of products
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/products/${id}`);
    return res.data.Product; // returns single product object
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
};
