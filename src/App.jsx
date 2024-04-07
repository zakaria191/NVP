import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Consulting } from "./components/Consulting";
import { ContactUs } from "./components/ContactUs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./Hero";
import { IndustryExpertise } from "./components/IndustryExpertise";
import { Services } from "./components/Services";
import HomePage from "./pages/homePage";
import AgriculturePage from "./pages/AgriculturePage";
import WaterManagementPage from "./pages/WaterManagementPage";
import EnergyTransitionPage from "./pages/EnergyTransitionPage";

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/agriculture" element={<AgriculturePage />} />
        <Route path="/water-management" element={<WaterManagementPage />} />
        <Route path="/energy-transition" element={<EnergyTransitionPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
  );
}

export default App;
