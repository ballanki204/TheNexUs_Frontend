import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";
import { MapPin, Clock, DollarSign, ArrowRight, Star } from "lucide-react";
import { jobsData } from "../lib/jobsData";

const JobCards = ({ searchQuery, filters, currentPage }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      !searchQuery ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilters =
      (!filters?.department ||
        job.department.toLowerCase() === filters.department) &&
      (!filters?.location || job.location.toLowerCase() === filters.location) &&
      (!filters?.jobType ||
        job.type.toLowerCase().replace("-", "") === filters.jobType);

    return matchesSearch && matchesFilters;
  });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
      {filteredJobs.map((job, index) => (
        <Card
          key={job.id}
          className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white animate-hover-lift animate-stagger-${
            (index % 4) + 1
          } ${job.featured ? "ring-2 ring-blue-500/20" : ""} p-6`}
        >
          {job.featured && (
            <div className="absolute top-6 right-6 z-10">
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 animate-scale-in">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}

          <CardHeader className="pb-4 px-0">
            <div className="flex items-start justify-between mb-3">
              <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors animate-fade-in leading-tight">
                {job.title}
              </CardTitle>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600 animate-fade-in animate-stagger-1">
              <Badge
                variant="secondary"
                className="bg-blue-50 text-blue-700 border-blue-200 animate-scale-in"
              >
                {job.department}
              </Badge>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {job.postedDays} days ago
              </span>
            </div>
          </CardHeader>

          <CardContent className="pt-0 px-0">
            <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed animate-fade-in animate-stagger-2 text-sm">
              {job.description}
            </p>

            <div className="space-y-4 mb-6 animate-fade-in animate-stagger-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>{job.location}</span>
                <span className="mx-1">•</span>
                <span>{job.type}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-medium text-green-600">
                  {job.salary.replace("$", "")}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6 animate-fade-in animate-stagger-4">
              {job.tags.slice(0, 3).map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs bg-gray-50 border-gray-200 animate-scale-in"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {job.type === "Full-time" ? (
              <Button className="w-full bg-gradient-to-r from-gray-400 to-gray-500 text-white border-0 cursor-not-allowed opacity-60">
                Coming Soon
              </Button>
            ) : (
              <Link to={`/careers/job/${job.id}`}>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 group/btn animate-button-hover">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            )}
          </CardContent>
        </Card>
      ))}
      {filteredJobs.length === 0 && (
        <div className="col-span-full text-center py-12 animate-fade-in">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
              <MapPin className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No jobs found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or browse all available
              positions.
            </p>
            <Link to="/careers/jobs">
              <Button variant="outline" className="animate-hover-lift">
                View All Jobs
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobCards;
