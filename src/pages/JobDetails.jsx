import React, { useEffect } from "react";
import { useSmoothScrollToTop } from "../hooks/useScrollAnimation";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Share2, MapPin, Clock, DollarSign, Users } from "lucide-react";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Smooth scroll to top when component mounts
  useSmoothScrollToTop();

  // Mock job data - replace with API call
  const job = {
    id,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Visakhapatnam, Andhra Pradesh",
    remote: false,
    type: "Full-time",
    salary: "₹120,000 - ₹160,000",
    postedDate: "2 days ago",
    description:
      "Join our innovative team to build cutting-edge software solutions in software development, digital marketing, plant marketplace, and safety apps. We're looking for passionate engineers who thrive in a collaborative environment.",
    responsibilities: [
      "Design and develop scalable web applications",
      "Collaborate with cross-functional teams",
      "Write clean, maintainable code",
      "Participate in code reviews and mentoring",
    ],
    requirements: [
      "5+ years of software development experience",
      "Strong proficiency in React and Node.js",
      "Experience with cloud platforms (AWS/Azure)",
      "Bachelor's degree in Computer Science or equivalent",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
    ],
  };

  const handleApply = () => {
    navigate("/careers/apply");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: job.title,
        text: `Check out this ${job.title} position at TheNexUS`,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {job.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">{job.department}</p>

              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {job.location}
                </Badge>
                {job.remote && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <Users className="w-3 h-3" />
                    Remote
                  </Badge>
                )}
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {job.type}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  {job.salary}
                </Badge>
              </div>

              <p className="text-sm text-gray-500">Posted {job.postedDate}</p>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleShare} variant="outline" size="lg">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button
                onClick={handleApply}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">About this role</h2>
                <p className="text-gray-700 leading-relaxed">
                  {job.description}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">What you'll do</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  What we're looking for
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Benefits & Apply */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Benefits & Perks</h3>
                <ul className="space-y-3">
                  {job.benefits.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Ready to apply?</h3>
                <p className="text-blue-100 mb-4">
                  Join our team and help shape the future of technology.
                </p>
                <Button
                  onClick={handleApply}
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 w-full"
                >
                  Apply for this position
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
