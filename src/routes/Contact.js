import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Form from "../components/Form";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="CONTACT" text="Join A New World" />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
