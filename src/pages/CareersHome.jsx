import React from "react";
import CareersHero from "../components/CareersHero";
import QuickLinks from "../components/QuickLinks";
import CompanyOverview from "../components/CompanyOverview";
import TestimonialsSection from "../components/TestimonialsSection";
import FeaturedJobs from "../components/FeaturedJobs";

class CareersHome extends React.Component {
  render() {
    return (
      <div className="min-h-screen">
        <CareersHero />
        <QuickLinks />
        <CompanyOverview />
        <TestimonialsSection />
        <FeaturedJobs />
      </div>
    );
  }
}

export default CareersHome;
