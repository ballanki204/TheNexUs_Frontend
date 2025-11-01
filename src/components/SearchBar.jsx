import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, MapPin, X } from "lucide-react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      location: "",
    };
  }

  handleInputChange = (field) => (e) => {
    this.setState({ [field]: e.target.value });
  };

  handleSearch = () => {
    this.props.onSearch({
      keyword: this.state.keyword,
      location: this.state.location,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleSearch();
    }
  };

  clearSearch = () => {
    this.setState({ keyword: "", location: "" });
    this.props.onSearch({ keyword: "", location: "" });
  };

  render() {
    const { keyword, location } = this.state;
    const hasSearch = keyword || location;

    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Keyword Search */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Job title, keywords, or company"
              value={keyword}
              onChange={this.handleInputChange("keyword")}
              onKeyPress={this.handleKeyPress}
              className="pl-12 h-12 text-base border-0 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Location Search */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="City, state, or 'remote'"
              value={location}
              onChange={this.handleInputChange("location")}
              onKeyPress={this.handleKeyPress}
              className="pl-12 h-12 text-base border-0 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Search Button */}
          <Button
            onClick={this.handleSearch}
            className="h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Search className="w-5 h-5 mr-2" />
            Search Jobs
          </Button>

          {/* Clear Button */}
          {hasSearch && (
            <Button
              onClick={this.clearSearch}
              variant="outline"
              className="h-12 px-6 border-gray-300 hover:border-gray-400"
            >
              <X className="w-4 h-4 mr-2" />
              Clear
            </Button>
          )}
        </div>

        {/* Popular Searches */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-gray-500 mr-2">Popular:</span>
          {["Remote", "React", "Senior", "Full-time"].map((term) => (
            <button
              key={term}
              onClick={() => {
                this.setState({ keyword: term });
                this.props.onSearch({
                  keyword: term,
                  location: this.state.location,
                });
              }}
              className="text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-1 rounded-full border border-blue-200 bg-blue-50/50 transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchBar;
