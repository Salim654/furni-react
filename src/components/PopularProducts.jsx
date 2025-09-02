// src/components/PopularProducts.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import crossIcon from "../assets/images/cross.svg";
import { getAllProducts } from "../services/productService";
import { useCart } from "../context/CartContext";

export default function PopularProducts() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
            <p className="mb-4">
              Made from high-quality materials for durability and style. Perfect craftsmanship for your home.
            </p>
            <p>
              <Link to="/shop" className="btn">Explore</Link>
            </p>
          </div>

      {/* Dynamic Products */}
      {products.slice(0, 3).map((product) => (
        <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
          <div className="product-item">
            <Link to={`/product/${product.id}`}>
              <img
                src={`http://127.0.0.1:8000/storage/${product.image}`}
                className="img-fluid product-thumbnail"
                alt={product.name}
              />
              <h3 className="product-title">{product.name}</h3>
              <strong className="product-price">{product.sale_price} DT</strong>
            </Link>
            {/* cart add  /cart/add/${product.id} */}
                <button
                  onClick={() => addToCart(product)}
                  className="icon-cross btn btn-link p-0"
                >
                  <img src={crossIcon} className="img-fluid" alt="add to cart" />
                </button>
          </div>
        </div>
      ))}
        </div>
      </div>
    </div>
  );
}
