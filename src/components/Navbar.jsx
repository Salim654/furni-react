import { Link, useNavigate } from "react-router-dom";
import userIcon from "../assets/images/user.svg";
import cartIcon from "../assets/images/cart.svg";
import { useCart } from "../context/CartContext";
import { logout, getToken } from "../services/authService";
import logoutIcon from "../assets/images/logout.svg";

export default function Navbar({ active }) {
  const { cart } = useCart();
  const navigate = useNavigate();
  const token = getToken();

  const isActive = (navName) => (navName === active ? "active" : "");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Furni<span>.</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className={`nav-item ${isActive("home")}`}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className={`nav-item ${isActive("shop")}`}>
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            <li className={`nav-item ${isActive("about")}`}>
              <Link className="nav-link" to="/about">About us</Link>
            </li>
            <li className={`nav-item ${isActive("services")}`}>
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className={`nav-item ${isActive("blog")}`}>
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className={`nav-item ${isActive("contact")}`}>
              <Link className="nav-link" to="/contact">Contact us</Link>
            </li>
          </ul>

       <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                    {token ? (
                    <li className={`nav-item ${isActive("Myorders")}`}>
              <Link className="nav-link" to="/myorders">My orders</Link>
            </li>
            ) : null

            }

          <li className={`nav-item position-relative ${isActive("login")}`}>
            {token ? (
              <button
                onClick={handleLogout}
                style={{
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={logoutIcon}
                  alt="logout"
                  style={{ width: "30px", height: "30px", display: "block" }}
                />
              </button>
            ) : (
              <Link className="nav-link d-flex align-items-center" to="/auth/login">
                <img src={userIcon} alt="user" style={{ width: "30px", height: "30px" }} />
              </Link>
              
            )}
          </li>

<li className={`nav-item position-relative ${isActive("cart")}`}>
  <Link className="nav-link" to="/cart">
    <img src={cartIcon} alt="cart" />
    <span
      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      style={{ fontSize: "0.75rem" }}
    >
      {totalItems}
    </span>
  </Link>
</li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
