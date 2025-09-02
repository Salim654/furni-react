// src/pages/DetailsProduct.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getProductById } from "../services/productService";
import { useCart } from "../context/CartContext"; // <-- import cart hook

export default function DetailsProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // <-- track quantity
  const { addToCart } = useCart(); // <-- from CartContext

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <p className="text-center mt-5">Loading product...</p>;

  const handleAddToCart = () => {
    addToCart(product, Number(quantity));
  };

  return (
    <>
      <Navbar />
      <Hero title="Product Details" showButtons={false} showImage={false} />

      <div className="container py-5">
        <div className="row">
          {/* Product Image */}
          <div className="col-md-6 text-center">
            <img
              src={`http://127.0.0.1:8000/storage/${product.image}`}
              alt={product.name}
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />
          </div>

          {/* Product Info */}
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <p className="text-muted">SKU: {product.sku || "N/A"}</p>
            <h4 className="text-primary mb-3">${product.sale_price}</h4>

            <p>{product.description || "No description available."}</p>

            <div className="d-flex align-items-center gap-3 my-4">
              <input
                type="number"
                value={quantity}
                min={1}
                className="form-control"
                style={{ width: "80px" }}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button className="btn btn-secondary" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>

            <ul className="list-unstyled mt-4">
              <li>
                <strong>Stock:</strong>{" "}
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </li>
              <li>
                <strong>Shipping:</strong> Free Shipping Worldwide
              </li>
              <li>
                <strong>Return Policy:</strong> 30 Days Return
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
