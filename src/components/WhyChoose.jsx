import truckIcon from "../assets/images/truck.svg";
import bagIcon from "../assets/images/bag.svg";
import supportIcon from "../assets/images/support.svg";
import returnIcon from "../assets/images/return.svg";
import chooseImg from "../assets/images/why-choose-us-img.jpg";

export default function WhyChoose() {
  return (
    <div className="why-choose-section">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* Left Column */}
          <div className="col-lg-6">
            <h2 className="section-title">Why Choose Us</h2>
            <p>
              We are committed to providing top-quality products and exceptional service. 
              From fast shipping to hassle-free returns, we make shopping simple and enjoyable.
            </p>

            <div className="row my-5">
              <div className="col-6 col-md-6">
                <div className="feature text-center">
                  <div className="icon mb-2">
                    <img src={truckIcon} alt="Fast Shipping" className="img-fluid" />
                  </div>
                  <h3>Fast &amp; Free Shipping</h3>
                  <p>
                    Receive your orders quickly without paying extra shipping fees.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature text-center">
                  <div className="icon mb-2">
                    <img src={bagIcon} alt="Easy to Shop" className="img-fluid" />
                  </div>
                  <h3>Easy to Shop</h3>
                  <p>
                    Browse and find products effortlessly with our intuitive interface.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature text-center">
                  <div className="icon mb-2">
                    <img src={supportIcon} alt="24/7 Support" className="img-fluid" />
                  </div>
                  <h3>24/7 Support</h3>
                  <p>
                    Our friendly support team is always ready to assist you, anytime.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature text-center">
                  <div className="icon mb-2">
                    <img src={returnIcon} alt="Returns" className="img-fluid" />
                  </div>
                  <h3>Hassle-Free Returns</h3>
                  <p>
                    Return or exchange products easily with our transparent return policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-5">
            <div className="img-wrap">
              <img src={chooseImg} alt="Why Choose Us" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
