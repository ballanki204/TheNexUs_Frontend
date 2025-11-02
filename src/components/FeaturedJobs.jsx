import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";
import { Briefcase, GraduationCap, Sparkles, ArrowRight } from "lucide-react";

class FeaturedJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: "all", // "all", "full-time", "internship"
    };
  }

  handleTypeFilter = (type) => {
    this.setState({ selectedType: type });
  };

  render() {
    const { selectedType } = this.state;

    const featuredJobs = [
      {
        id: 1,
        title: "Senior Software Engineer",
        department: "Engineering",
        location: "Visakhapatnam, Andhra Pradesh",
        type: "Full-time",
        category: "full-time",
      },
      {
        id: 2,
        title: "Product Manager",
        department: "Product",
        location: "Visakhapatnam, Andhra Pradesh",
        type: "Full-time",
        category: "full-time",
      },
      {
        id: 3,
        title: "UX Designer",
        department: "Design",
        location: "Visakhapatnam, Andhra Pradesh",
        type: "Full-time",
        category: "full-time",
      },
      {
        id: 4,
        title: "Software Intern",
        department: "Engineering",
        location: "Visakhapatnam, Andhra Pradesh",
        type: "Internship",
        category: "internship",
        duration: "3-6 months",
        description:
          "Perfect for students and fresh graduates. Learn technologies while working on projects.",
      },
      {
        id: 5,
        title: "Marketing Intern",
        department: "Marketing",
        location: "Visakhapatnam, Andhra Pradesh",
        type: "Internship",
        category: "internship",
        duration: "3-6 months",
        description:
          "Gain hands-on experience in digital marketing, content creation, and campaign management.",
      },
      {
        id: 6,
        title: "Design Intern",
        department: "Design",
        location: "Visakhapatnam, Andhra Pradesh",
        type: "Internship",
        category: "internship",
        duration: "3-6 months",
        description:
          "Work with our design team to create beautiful, user-friendly interfaces and experiences.",
      },
    ];

    const filteredJobs =
      selectedType === "all"
        ? featuredJobs
        : featuredJobs.filter((job) => job.category === selectedType);

    return (
      <section
        id="opportunities"
        className="relative py-24 premium-bg-light overflow-hidden"
      >
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold pb-3 uppercase tracking-wider gradient-text">
                Career Opportunities
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text-extended mb-6">
              Featured Opportunities
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
              Join our team and help build innovative solutions. We welcome both
              experienced professionals and passionate young minds through our
              internship program.
            </p>
          </div>

          {/* Type Filter */}
          <div className="flex justify-center gap-4 mb-12 animate-fade-in">
            <Button
              variant={selectedType === "all" ? "default" : "outline"}
              onClick={() => this.handleTypeFilter("all")}
              className={`px-6 py-2 transition-all duration-300 ${
                selectedType === "all"
                  ? "bg-gradient-to-r from-primary via-purple-500 to-indigo-500 text-white shadow-lg"
                  : "glass-card border-2 border-primary/20 hover:border-primary/30"
              }`}
            >
              All Opportunities
            </Button>
            <Button
              variant={selectedType === "full-time" ? "default" : "outline"}
              onClick={() => this.handleTypeFilter("full-time")}
              className={`px-6 py-2 transition-all duration-300 ${
                selectedType === "full-time"
                  ? "bg-gradient-to-r from-primary via-purple-500 to-indigo-500 text-white shadow-lg"
                  : "glass-card border-2 border-primary/20 hover:border-primary/30"
              }`}
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Full-time
            </Button>
            <Button
              variant={selectedType === "internship" ? "default" : "outline"}
              onClick={() => this.handleTypeFilter("internship")}
              className={`px-6 py-2 transition-all duration-300 ${
                selectedType === "internship"
                  ? "bg-gradient-to-r from-primary via-purple-500 to-indigo-500 text-white shadow-lg"
                  : "glass-card border-2 border-primary/20 hover:border-primary/30"
              }`}
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Internships
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job, index) => (
              <Card
                key={job.id}
                className={`group relative overflow-hidden glass-card border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 animate-hover-lift`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    {job.category === "internship" ? (
                      <GraduationCap className="w-5 h-5 text-primary" />
                    ) : (
                      <Briefcase className="w-5 h-5 text-primary" />
                    )}
                    <CardTitle className="group-hover:gradient-text transition-all duration-300">
                      {job.title}
                    </CardTitle>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge
                      variant={
                        job.category === "internship" ? "default" : "secondary"
                      }
                      className="bg-primary/20 text-primary hover:bg-primary/30"
                    >
                      {job.department}
                    </Badge>
                    <Badge variant="outline">{job.location}</Badge>
                    {job.duration && (
                      <Badge
                        variant="outline"
                        className="border-secondary/30 text-secondary"
                      >
                        {job.duration}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-muted-foreground mb-4 font-semibold">
                    {job.type}
                  </p>
                  {job.description && (
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {job.description}
                    </p>
                  )}
                  <Button className="w-full group/btn bg-gradient-to-r from-primary via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-purple-500 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    {job.category === "internship"
                      ? "Apply for Internship"
                      : "Coming Soon"}
                    {job.category === "internship" && (
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div
            className="text-center mt-12 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <Link to="/careers/jobs">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg hover:text-gray-600 glass-card border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                View All Openings
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedJobs;
