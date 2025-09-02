import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../services/authService";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/"); // redirect to home or checkout
    } catch (err) {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <>
      <Navbar active="login"/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f8f9fa",
          padding: "20px"
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "30px",
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control mb-3"
            />
            <button type="submit" className="btn btn-black btn-block">
              Login
            </button>
          </form>
          <p className="mt-3 text-center">
            Don't have an account? <Link to="/auth/register">Register</Link>
          </p>
        </div>
      </div>
      <Footer />
      {/* Toast container must be at root */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
