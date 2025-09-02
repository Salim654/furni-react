// src/pages/Contact.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar active="contact" />
      <Hero
            title="Contact us"
            description=" Get in touch with us for inquiries, support, or custom furniture requests."
            showButtons={false}
            showImage={true}
      />
      <ContactForm />
      <Footer />
    </>
  );
}
