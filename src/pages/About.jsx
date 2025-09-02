// src/pages/About.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TeamSection from "../components/TeamSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import WhyChoose from "../components/WhyChoose";

export default function About() {
  return (
    <>
      <Navbar active="about" />
      <Hero
            title="About us"
            description="We create stylish, high-quality furniture to make every home comfortable and elegant."
            showButtons={false}
            showImage={true}
           
            />
      <WhyChoose />
      <TeamSection />
      <Testimonials />
      <Footer />
    </>
  );
}
