// src/components/Hero.jsx
import couchImg from "../assets/images/couch.png";

export default function Hero({ title, description, showButtons, showImage }) {
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>{title}</h1>
              <p className="mb-4">{description}</p>

              {showButtons && (
                <p>
                  <a href="/shop" className="btn btn-secondary me-2">
                    Shop Now
                  </a>
                  <a href="#" className="btn btn-white-outline">
                    Explore
                  </a>
                </p>
              )}
            </div>
          </div>

          {showImage && (
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src={couchImg} className="img-fluid" alt="Couch" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
