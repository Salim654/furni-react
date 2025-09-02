import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const placeOrder = async (orderData, token) => {
  try {
    const response = await axios.post(`${API_URL}/orders`, orderData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Order error:", error.response || error.message);
    throw error;
  }
};

export const getMyOrders = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Get orders error:", error.response || error.message);
    throw error;
  }
};
export const cancelOrder = async (orderId, token) => {
  try {
    const response = await axios.post(
      `${API_URL}/orders/${orderId}/cancel`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Cancel order error:", error.response || error.message);
    throw error;
  }
};

// ✅ Fixed: GET request without token
export const applyPromo = async (promoCode) => {
  try {
    const response = await axios.get(`${API_URL}/apply-promo`, {
      params: { code: promoCode },
    });
    return response.data;
  } catch (error) {
    console.error("Apply promo error:", error.response || error.message);
    throw error;
  }
  
};
