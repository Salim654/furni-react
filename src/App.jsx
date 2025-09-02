// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";
import DetailsProduct from "./pages/DetailsProduct";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Myorders from "./pages/Myorders";
import { getToken } from "./services/authService";



import { useCart } from "./context/CartContext"; 

// Wrapper to protect checkout route
function ProtectedCheckout({ children }) {
  const { cart } = useCart();
  const location = useLocation();

  if (!cart || cart.length === 0) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
function ProtectedRoute({ children }) {
  const location = useLocation();
  const token = getToken(); // check if user is logged in

  if (!token) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <ProtectedCheckout>
              <Checkout />
            </ProtectedCheckout>
          }
        />

        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/product/:id" element={<DetailsProduct />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route
          path="/myorders"
          element={
            <ProtectedRoute>
              <Myorders />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
