// src/pages/Blog.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AllBlogSection from "../components/AllBlogSection";
import Testimonials from "../components/Testimonials";


export default function Blog() {
  return (
    <>
      <Navbar active="blog" />
      <Hero
            title="Blog"
            description="Get the latest tips, trends, and inspiration for modern interiors and stylish living."
            showButtons={false}
            showImage={true}
            />
      <AllBlogSection />
      <Testimonials />
      <Footer />
    </>
  );
}
