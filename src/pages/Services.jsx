// src/pages/Services.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import WhyChooseUsV2 from "../components/WhyChooseUsV2";
export default function Services() {
  return (
    <>
      <Navbar active="services" />
      <Hero
      title="Services"
      description="We offer design, delivery, and installation services to enhance your living spaces."
      showButtons={false}
      showImage={true}
      />
      <WhyChooseUsV2 />
      <Testimonials />
      <Footer />
    </>
  );
}
