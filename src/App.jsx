import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Software from "./pages/Software";
import DigitalMarketing from "./pages/DigitalMarketing";
import PlantMarketplace from "./pages/PlantMarketplace";
import SafetyApp from "./pages/SafetyApp";
import NotFound from "./pages/NotFound";
import Login from "./pages/safety/Login";
import Register from "./pages/safety/Register";
import Dashboard from "./pages/safety/Dashboard";
import Hero from "./components/safety/Hero";
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

// Safety App imports
import { AuthProvider } from "./contexts/AuthContext";
import Contact from "./components/safety/Contact";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <Index />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              path="/software"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <Software />
                  <Footer />
                </>
              }
            />
            <Route
              path="/software/healthcare"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <Healthcare />
                  <Footer />
                </>
              }
            />
            <Route
              path="/software/real-estate"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <RealEstate />
                  <Footer />
                </>
              }
            />
            <Route
              path="/software/food-restaurant"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <FoodRestaurant />
                  <Footer />
                </>
              }
            />
            <Route
              path="/software/trading-financial"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <TradingFinancial />
                  <Footer />
                </>
              }
            />
            <Route
              path="/software/education-elearning"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <EducationElearning />
                  <Footer />
                </>
              }
            />
            <Route
              path="/software/enterprise"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <Enterprise />
                  <Footer />
                </>
              }
            />
            <Route
              path="/software/it-cloud"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <ItCloud />
                  <Footer />
                </>
              }
            />
            <Route
              path="/software/cybersecurity"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <Cybersecurity />
                  <Footer />
                </>
              }
            />
            <Route
              path="/software/ai-ml"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <AiMl />
                  <Footer />
                </>
              }
            />
            <Route
              path="/careers"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <CareersHome />
                  <Footer />
                </>
              }
            />
            <Route
              path="/careers/jobs"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <JobListings />
                  <Footer />
                </>
              }
            />
            <Route
              path="/careers/job/:id"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <JobDetails />
                  <Footer />
                </>
              }
            />
            <Route
              path="/careers/apply"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <ApplicationForm />
                  <Footer />
                </>
              }
            />
            <Route
              path="/careers/culture"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <Culture />
                  <Footer />
                </>
              }
            />
            <Route
              path="/careers/locations"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <Locations />
                  <Footer />
                </>
              }
            />
            <Route
              path="/careers/testimonials"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <Testimonials />
                  <Footer />
                </>
              }
            />
            <Route
              path="/careers/contact"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <ContactHelp />
                  <Footer />
                </>
              }
            />
            <Route
              path="/digital-marketing"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <DigitalMarketing />
                  <Footer />
                </>
              }
            />
            <Route
              path="/plant-marketplace"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <PlantMarketplace />
                  <Footer />
                </>
              }
            />
            <Route
              path="/safety-app"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <SafetyApp />
                  <Footer />
                </>
              }
            />
            {/* Safety App Routes */}
            <Route
              path="/safety"
              element={
                <>
                  <Hero />
                  <Contact />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/manager-dashboard" element={<Dashboard />} />
            <Route path="/supervisor-dashboard" element={<Dashboard />} />
            <Route path="/employee-dashboard" element={<Dashboard />} />
            <Route
              path="/home"
              element={
                <>
                  <Hero />
                  <Contact />
                </>
              }
            />
            {/* Safety App Pages */}
            <Route path="/hazards" element={<Dashboard />} />
            <Route path="/checklists" element={<Dashboard />} />
            <Route path="/training" element={<Dashboard />} />
            <Route path="/notifications" element={<Dashboard />} />
            <Route path="/profile" element={<Dashboard />} />
            <Route path="/settings" element={<Dashboard />} />
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <NotFound />
                  <Footer />
                </>
              }
            />
            <Route
              path="/book"
              element={
                <>
                  <Header />
                  <Breadcrumb />
                  <BookConsultancyModal />
                  <Footer />
                </>
              }
            />
          </Routes>
          <Toaster />
          <Chatbot />
          <GoToTopButton />
        </AuthProvider>
      </BrowserRouter>
    );
  }
}

export default App;
