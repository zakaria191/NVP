import React from "react";
// import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "../components/About";
import { Consulting } from "../components/Consulting";
import { ContactUs } from "../components/ContactUs";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../Hero";
import { IndustryExpertise } from "../components/IndustryExpertise";
import { Services } from "../components/Services";
// import HomePage from "./pages/homePage";

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Features /> */}
      <About />
      {/* <Consulting /> */}
      <IndustryExpertise />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default HomePage;
