import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Software from "./pages/Software";
import DigitalMarketing from "./pages/DigitalMarketing";
import PlantMarketplace from "./pages/PlantMarketplace";
import SafetyApp from "./pages/SafetyApp";
import NotFound from "./pages/NotFound";
import Healthcare from "./pages/software/Healthcare";
import RealEstate from "./pages/software/RealEstate";
import FoodRestaurant from "./pages/software/FoodRestaurant";
import TradingFinancial from "./pages/software/TradingFinancial";
import EducationElearning from "./pages/software/EducationElearning";
import Enterprise from "./pages/software/Enterprise";
import ItCloud from "./pages/software/ItCloud";
import Cybersecurity from "./pages/software/Cybersecurity";
import AiMl from "./pages/software/AiMl";
import CareersHome from "./pages/CareersHome";
import JobListings from "./pages/JobListings";
import JobDetails from "./pages/JobDetails";
import ApplicationForm from "./pages/ApplicationForm";
import Culture from "./pages/Culture";
import Locations from "./pages/Locations";
import Testimonials from "./pages/Testimonials";
import ContactHelp from "./pages/ContactHelp";
import { Toaster } from "./components/ui/toaster";
import "./App.css";
import Footer from "./components/Footer";
import BookConsultancyModal from "./components/BookConsultancyModal";
import Header from "./components/Header";
import Chatbot from "./components/Chatbot";
import Breadcrumb from "./components/Breadcrumb";

import GoToTopButton from "./components/GoToTopButton";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <Header />
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/software" element={<Software />} />
          <Route path="/software/healthcare" element={<Healthcare />} />
          <Route path="/software/real-estate" element={<RealEstate />} />
          <Route
            path="/software/food-restaurant"
            element={<FoodRestaurant />}
          />
          <Route
            path="/software/trading-financial"
            element={<TradingFinancial />}
          />
          <Route
            path="/software/education-elearning"
            element={<EducationElearning />}
          />
          <Route path="/software/enterprise" element={<Enterprise />} />
          <Route path="/software/it-cloud" element={<ItCloud />} />
          <Route path="/software/cybersecurity" element={<Cybersecurity />} />
          <Route path="/software/ai-ml" element={<AiMl />} />
          <Route path="/careers" element={<CareersHome />} />
          <Route path="/careers/jobs" element={<JobListings />} />
          <Route path="/careers/job/:id" element={<JobDetails />} />
          <Route path="/careers/apply" element={<ApplicationForm />} />
          <Route path="/careers/culture" element={<Culture />} />
          <Route path="/careers/locations" element={<Locations />} />
          <Route path="/careers/testimonials" element={<Testimonials />} />
          <Route path="/careers/contact" element={<ContactHelp />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/plant-marketplace" element={<PlantMarketplace />} />
          <Route path="/safety-app" element={<SafetyApp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/book" element={<BookConsultancyModal />} />
        </Routes>
        <Footer />
        <Toaster />
        <Chatbot />
        <GoToTopButton />
      </BrowserRouter>
    );
  }
}

export default App;
