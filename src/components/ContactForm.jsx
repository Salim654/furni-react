import { useState } from "react";
import { BiMap, BiEnvelope, BiPhone } from "react-icons/bi"; 
import { sendMessage } from "../services/messageService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await sendMessage(formData);
      toast.success(response.message || "Message sent successfully!");
      setFormData({ first_name: "", last_name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="untree_co-section">
      <ToastContainer />
      <div className="container">
        <div className="block">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-8 pb-4">

              {/* Contact Info */}
              <div className="row mb-5">
                <div className="col-lg-4">
                  <div className="service d-flex align-items-center">
                    <div className="service-icon color-1 mb-4"><BiMap size={24} /></div>
                    <div className="service-contents"><p>43 Raymouth Rd. Baltemoer, London 3910</p></div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="service d-flex align-items-center">
                    <div className="service-icon color-1 mb-4"><BiEnvelope size={24} /></div>
                    <div className="service-contents"><p>info@yourdomain.com</p></div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="service d-flex align-items-center">
                    <div className="service-icon color-1 mb-4"><BiPhone size={24} /></div>
                    <div className="service-contents"><p>+1 294 3925 3939</p></div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" htmlFor="first_name">First name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" htmlFor="last_name">Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="text-black" htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mb-5">
                  <label className="text-black" htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    cols="30"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary-hover-outline" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
