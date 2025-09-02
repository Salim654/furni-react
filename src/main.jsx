// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Import CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/tiny-slider.css";
import "./assets/css/style.css";

// Import Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <CartProvider>
    <App />
        <ToastContainer position="top-right" autoClose={2000} />
    </CartProvider>
  </React.StrictMode>
);
