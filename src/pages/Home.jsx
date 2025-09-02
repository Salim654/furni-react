// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import WhyChoose from "../components/WhyChoose";
import WeHelp from "../components/WeHelp";
import PopularProducts from "../components/PopularProducts";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar active="home" />
      <Hero
        title="Modern Interior"
        description='Explore sleek, modern interiors that combine style and comfort. Perfect ideas to refresh your space.'
        showButtons={true}
        showImage={true}
      />
      <PopularProducts />
      <WhyChoose />
      <WeHelp />
      <Testimonials />
      <BlogSection />
      <Footer />
    </>
  );
}
