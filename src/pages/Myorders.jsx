// src/pages/Myorders.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ListOrders from "../components/ListOrders";

export default function Myorders() {

  const token = localStorage.getItem("token");

  return (
    <>
      <Navbar active="Myorders" />

      <Hero title="My Orders" showButtons={false} showImage={false} />
       &nbsp;
      <div className="py-8">
        <ListOrders token={token} />
      </div>
    &nbsp;
      <Footer />
    </>
  );
}
