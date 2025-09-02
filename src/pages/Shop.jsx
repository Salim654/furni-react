// src/pages/Shop.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BlogSection from "../components/BlogSection";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";

export default function Shop() {
  return (
    <>
      <Navbar active="shop" />
            <Hero
              title="Shop"
              description="Browse our curated collection of furniture and decor. Find stylish pieces for every room."
              showButtons={false}
              showImage={false}
            />
      <ProductSection />
      <Footer />
    </>
  );
}
