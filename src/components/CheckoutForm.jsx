import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { placeOrder, applyPromo } from "../services/orderService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getToken } from "../services/authService";

export default function CheckoutForm() {
  const navigate = useNavigate();
  const { cart, subtotal } = useCart();

  const [billing, setBilling] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoAppliedMsg, setPromoAppliedMsg] = useState("");

  const handleChange = (e) => {
    setBilling({ ...billing, [e.target.id]: e.target.value });
  };

  const handleApplyPromo = async () => {
    if (!promoCode) {
      toast.warn("⚠️ Please enter a promo code!");
      return;
    }

    try {
      const data = await applyPromo(promoCode);
      const promo = data.promo;

      let discountAmount = 0;
      if (promo.type === "percent") {
        discountAmount = (subtotal * promo.value) / 100;
      } else if (promo.type === "fixed") {
        discountAmount = promo.value;
      }

      setDiscount(discountAmount);
      setPromoAppliedMsg(`Promo "${promo.code}" applied! 🎉`);
      toast.success(`🎉 Promo "${promo.code}" applied successfully!`);
    } catch (error) {
      setDiscount(0);
      setPromoAppliedMsg("");
      toast.error("Code doesn't exist or has expired!");
    }
  };

  const handlePlaceOrder = async () => {
    if (!cart || cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    const token = getToken();
    if (!token) {
      toast.warn("You must be logged in to place an order!");
      return;
    }

    const orderData = {
      items: cart.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      })),
      payment_method: "credit_card",
      shipping_address: billing.address,
      promo_code: promoCode,
    };

    try {
      await placeOrder(orderData, token);
      toast.success("Order placed successfully!");
      navigate("/thankyou");
    } catch (error) {
      console.error(error.response || error);
      toast.error("Fill your Information / Please try again.");
    }
  };

  const finalTotal = subtotal - discount;

  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row">
          {/* Billing Details */}
          <div className="col-md-6 mb-5 mb-md-0">
            <h2 className="h3 mb-3 text-black">Billing Details</h2>
            <div className="p-3 p-lg-5 border bg-white">
              <input type="text" id="first_name" placeholder="First Name"
                value={billing.first_name} onChange={handleChange}
                className="form-control mb-3"/>
              <input type="text" id="last_name" placeholder="Last Name"
                value={billing.last_name} onChange={handleChange}
                className="form-control mb-3"/>
              <input type="email" id="email" placeholder="Email"
                value={billing.email} onChange={handleChange}
                className="form-control mb-3"/>
              <input type="text" id="phone" placeholder="Phone"
                value={billing.phone} onChange={handleChange}
                className="form-control mb-3"/>
              <input type="text" id="address" placeholder="Address"
                value={billing.address} onChange={handleChange}
                className="form-control mb-3"/>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-md-6">
            <div className="p-3 p-lg-5 border bg-white mb-3">
              <h2 className="h3 mb-3 text-black">Coupon Code</h2>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="form-control me-2"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button
                  onClick={handleApplyPromo}
                  className="btn btn-black btn-lg py-3 btn-block mt-2"
                >
                  Apply
                </button>
              </div>
              {promoAppliedMsg && (
                <p className="text-success mt-2">{promoAppliedMsg}</p>
              )}
            </div>

            <div className="p-3 p-lg-5 border bg-white">
              <h2 className="h3 mb-3 text-black">Your Order</h2>
              <table className="table site-block-order-table mb-3">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name} x {item.quantity}</td>
                      <td>${item.price * item.quantity}</td>
                    </tr>
                  ))}
                  <tr>
                    <td><strong>Subtotal</strong></td>
                    <td><strong>${subtotal}</strong></td>
                  </tr>
                  {discount > 0 && (
                    <tr>
                      <td><strong>Discount</strong></td>
                      <td className="text-success">- ${discount}</td>
                    </tr>
                  )}
                  <tr>
                    <td><strong>Final Total</strong></td>
                    <td><strong>${finalTotal}</strong></td>
                  </tr>
                </tbody>
              </table>
              <button
                onClick={handlePlaceOrder}
                className="btn btn-black btn-lg py-3 btn-block"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
