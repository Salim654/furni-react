// src/pages/Checkout.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import CheckoutForm from "../components/CheckoutForm";


export default function Checkout() {
  return (
    <>
      <Navbar />
      <Hero
            title="Checkout"
            showButtons={false}
            showImage={false}
            />
        <CheckoutForm />
      <Footer />
    </>
  );
}
