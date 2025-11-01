import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import ProductsGrid from "../components/ProductsGrid";
import GreenInitiative from "../components/GreenInitiative";
import Footer from "../components/Footer";
import BookConsultancyModal from "../components/BookConsultancyModal";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consultancyOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener("openConsultancy", this.handleOpenConsultancy);
  }

  componentWillUnmount() {
    window.removeEventListener("openConsultancy", this.handleOpenConsultancy);
  }

  handleOpenConsultancy = () => {
    this.setState({ consultancyOpen: true });
  };

  setConsultancyOpen = (open) => {
    this.setState({ consultancyOpen: open });
  };

  render() {
    return (
      <div className="min-h-screen">
        <main className="premium-bg-light">
          <Hero />
          <ServicesGrid />
          <ProductsGrid />
          <GreenInitiative />
        </main>
      </div>
    );
  }
}

export default Index;
