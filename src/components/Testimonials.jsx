// src/components/Testimonials.jsx
import { useState } from "react";
import person1 from "../assets/images/person-1.png";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Donec facilisis quam ut purus rutrum lobortis...",
      name: "Maria Jones",
      role: "CEO, Co-Founder, XYZ Inc.",
      img: person1,
    },
    {
      text: "Aliquam vulputate velit imperdiet dolor tempor...",
      name: "John Smith",
      role: "CTO, Startup ABC",
      img: person1,
    },
    {
      text: "Nullam ac aliquet velit. Donec vitae odio quis nisl...",
      name: "Sarah Lee",
      role: "Marketing Head, 123 Corp",
      img: person1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="testimonial-section">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h2 className="section-title">Testimonials</h2>
          </div>
        </div>

        {/* Slider */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="testimonial-slider-wrap text-center">
              {/* Navigation */}
              <div id="testimonial-nav">
                <span className="prev" onClick={prevSlide}>
                  ◀
                </span>
                <span className="next" onClick={nextSlide}>
                  ▶
                </span>
              </div>

              {/* Current Testimonial */}
              <div className="testimonial-slider">
                <div className="item">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 mx-auto">
                      <div className="testimonial-block text-center">
                        <blockquote className="mb-5">
                          <p>&ldquo;{testimonials[currentIndex].text}&rdquo;</p>
                        </blockquote>
                        <div className="author-info">
                          <div className="author-pic">
                            <img
                              src={testimonials[currentIndex].img}
                              alt={testimonials[currentIndex].name}
                              className="img-fluid"
                            />
                          </div>
                          <h3 className="font-weight-bold">
                            {testimonials[currentIndex].name}
                          </h3>
                          <span className="position d-block mb-3">
                            {testimonials[currentIndex].role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Testimonial */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
