import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

class FilterSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "",
      location: "",
      experienceLevel: "",
      jobType: "",
    };
  }

  handleDepartmentChange = (department) => {
    this.setState({ department }, () => this.props.onFilter(this.state));
  };

  handleLocationChange = (location) => {
    this.setState({ location }, () => this.props.onFilter(this.state));
  };

  handleExperienceChange = (experienceLevel) => {
    this.setState({ experienceLevel }, () => this.props.onFilter(this.state));
  };

  handleJobTypeChange = (jobType) => {
    this.setState({ jobType }, () => this.props.onFilter(this.state));
  };

  render() {
    const { department, location, experienceLevel, jobType } = this.state;

    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Filters</h3>
          <button
            onClick={() =>
              this.setState(
                {
                  department: "",
                  location: "",
                  experienceLevel: "",
                  jobType: "",
                },
                () => this.props.onFilter(this.state)
              )
            }
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <Label
              htmlFor="department"
              className="text-sm font-medium text-gray-700"
            >
              Department
            </Label>
            <Select
              value={department}
              onValueChange={this.handleDepartmentChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="location"
              className="text-sm font-medium text-gray-700"
            >
              Location
            </Label>
            <Select value={location} onValueChange={this.handleLocationChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="visakhapatnam">
                  Visakhapatnam, Andhra Pradesh
                </SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="experience"
              className="text-sm font-medium text-gray-700"
            >
              Experience Level
            </Label>
            <Select
              value={experienceLevel}
              onValueChange={this.handleExperienceChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="mid">Mid Level</SelectItem>
                <SelectItem value="senior">Senior Level</SelectItem>
                <SelectItem value="executive">Executive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="job-type"
              className="text-sm font-medium text-gray-700"
            >
              Job Type
            </Label>
            <Select value={jobType} onValueChange={this.handleJobTypeChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fulltime">Full-time</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterSidebar;
