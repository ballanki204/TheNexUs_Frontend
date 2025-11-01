import React, { useEffect } from "react";
import { useSmoothScrollToTop } from "../hooks/useScrollAnimation";
import SearchBar from "../components/SearchBar";
import FilterSidebar from "../components/FilterSidebar";
import JobCards from "../components/JobCards";
import Pagination from "../components/Pagination";

const JobListings = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filters, setFilters] = React.useState({});
  const [currentPage, setCurrentPage] = React.useState(1);

  // Smooth scroll to top when component mounts
  useSmoothScrollToTop();

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleFilter = (filters) => {
    setFilters(filters);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
            Open Positions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in animate-stagger-1">
            Join our team and help build innovative solutions for buyers in
            software development, digital marketing, plant marketplace, and
            safety apps.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-fade-in animate-stagger-2">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-fade-in animate-stagger-3">
          <FilterSidebar onFilter={handleFilter} />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-fade-in animate-stagger-4">
          <JobCards
            searchQuery={searchQuery}
            filters={filters}
            currentPage={currentPage}
          />
        </div>

        <div className="flex justify-center animate-fade-in animate-stagger-5">
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default JobListings;
