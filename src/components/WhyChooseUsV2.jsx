import truckIcon from "../assets/images/truck.svg";
import bagIcon from "../assets/images/bag.svg";
import supportIcon from "../assets/images/support.svg";
import returnIcon from "../assets/images/return.svg";

export default function WhyChooseUsV2() {
  const features = [
    {
      icon: truckIcon,
      title: "Fast & Free Shipping",
      desc: "Get your orders delivered quickly at no extra cost, ensuring a smooth shopping experience.",
    },
    {
      icon: bagIcon,
      title: "Easy to Shop",
      desc: "Our user-friendly interface and smart filters help you find exactly what you need in seconds.",
    },
    {
      icon: supportIcon,
      title: "24/7 Customer Support",
      desc: "Our dedicated support team is available around the clock to help with any questions or issues.",
    },
    {
      icon: returnIcon,
      title: "Hassle-Free Returns",
      desc: "Easily return or exchange items with our simple and transparent return policy.",
    },
  ];

  return (
    <div className="why-choose-section">
      <div className="container">
        <div className="row my-5">
          {features.map((feature, idx) => (
            <div className="col-6 col-md-6 col-lg-3 mb-4" key={idx}>
              <div className="feature text-center">
                <div className="icon mb-3">
                  <img src={feature.icon} alt={feature.title} className="img-fluid" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
