import React from "react";
import "./App.css"; // Import styles
import Header from "./components/Header";
import Hero from "./components/Hero";
import VehicleFilter from "./components/VehicleFilter";
import FeaturedVehicles from "./components/FeaturedVehicles";
import SpecialOffers from "./components/SpecialOffers";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <VehicleFilter />
      <FeaturedVehicles />
      <SpecialOffers />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
