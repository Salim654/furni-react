import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import crossIcon from "../assets/images/cross.svg";
import { getAllProducts } from "../services/productService";
import { useCart } from "../context/CartContext";

export default function ProductSection() {
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
        <div className="row gy-5">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <div className="product-item">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={`http://127.0.0.1:8000/storage/${product.image}`}
                    className="img-fluid product-thumbnail"
                    alt={product.name}
                  />
                  <h3 className="product-title">{product.name}</h3>
                  <strong className="product-price">{product.sale_price ?? product.price} DT</strong>
                </Link>
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
