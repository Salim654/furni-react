// src/components/WeHelp.jsx
import img1 from "../assets/images/img-grid-1.jpg";
import img2 from "../assets/images/img-grid-2.jpg";
import img3 from "../assets/images/img-grid-3.jpg";

export default function WeHelp() {
  return (
    <div className="we-help-section">
      <div className="container">
        <div className="row justify-content-between">
          {/* Images Grid */}
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1">
                <img src={img1} alt="Grid 1" />
              </div>
              <div className="grid grid-2">
                <img src={img2} alt="Grid 2" />
              </div>
              <div className="grid grid-3">
                <img src={img3} alt="Grid 3" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="col-lg-5 ps-lg-5">
            <h2 className="section-title mb-4">
              We Help You Make Modern Interior Design
            </h2>
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis 
              nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate 
              velit imperdiet dolor tempor tristique.
            </p>

            <ul className="list-unstyled custom-list my-4">
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
            </ul>
            <p>
              <a href="#" className="btn">Explore</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
