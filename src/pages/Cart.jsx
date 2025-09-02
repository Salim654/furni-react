import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BlogSection from "../components/BlogSection";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

  return (
    <>
      <Navbar active="cart" />
      <Hero title="Your Cart" showButtons={false} showImage={true} description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique." />

      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="site-blocks-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center">Your cart is empty</td>
                      </tr>
                    ) : (
                      cart.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <img
                              src={`http://127.0.0.1:8000/storage/${item.image}`}
                              alt={item.name}
                              className="img-fluid"
                              style={{ width: "70px" }}
                            />
                          </td>
                          <td>{item.name}</td>
                          <td>${item.price}</td>
                          <td>
                            <input
                              type="number"
                              className="form-control text-center"
                              value={item.quantity}
                              min={1}
                              onChange={(e) =>
                                updateQuantity(item.id, e.target.value)
                              }
                            />
                          </td>
                          <td>${(item.price * item.quantity).toFixed(2)}</td>
                          <td>
                            <button
                              className="btn btn-black btn-sm"
                              onClick={() => removeFromCart(item.id)}
                            >
                              X
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Cart Totals */}
          {cart.length > 0 && (
            <div className="row">
              <div className="col-md-6 ms-auto">
                <div className="cart-totals p-3 p-lg-5 border bg-white">
                  <h3 className="text-black h4">Cart Totals</h3>
                  <table className="table site-block-order-table mb-4">
                    <tbody>
                      <tr>
                        <td className="text-black">Subtotal</td>
                        <td className="text-black">${subtotal.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td className="text-black font-weight-bold">
                          <strong>Total</strong>
                        </td>
                        <td className="text-black font-weight-bold">
                          <strong>${subtotal.toFixed(2)}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="form-group">
                    <Link to="/checkout" className="btn btn-black btn-lg py-3 btn-block">
                      Proceed To Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <BlogSection />
      <Footer />
    </>
  );
}
