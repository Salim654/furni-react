import { useState } from "react";
import { subscribeNewsletter } from "../services/subscriptionService";
import { toast } from "react-toastify";
import sofaImg from "../assets/images/sofa.png";
import envelopeIcon from "../assets/images/envelope-outline.svg";

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await subscribeNewsletter(form);
      toast.success("Subscribed successfully!");
      setForm({ name: "", email: "" });
    } catch (err) {
      toast.error(err.message || "Subscription failed.");
    }
  };

  return (
    <footer className="footer-section">
      <div className="container relative">
        <div className="sofa-img">
          <img src={sofaImg} alt="Sofa" className="img-fluid" />
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h3 className="d-flex align-items-center">
                <span className="me-1">
                  <img src={envelopeIcon} alt="Envelope" className="img-fluid" />
                </span>
                <span>Subscribe to Newsletter</span>
              </h3>
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-auto">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary" type="submit">
                    <span className="fa fa-paper-plane"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
