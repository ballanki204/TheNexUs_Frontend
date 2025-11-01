import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";
import { MapPin, Clock, DollarSign, ArrowRight, Star } from "lucide-react";

class JobCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    this.setState({
      jobs: [
        {
          id: 1,
          title: "Senior Software Engineer",
          department: "Engineering",
          location: "Visakhapatnam",
          type: "Full-time",
          salary: "₹12,00,000 - ₹15,00,000",
          description:
            "Lead development of custom software solutions for buyers, including web and mobile applications using React, Node.js, and cloud technologies to enhance user experiences and business operations.",
          tags: ["React", "Node.js", "AWS"],
          featured: true,
          postedDays: 2,
        },
        {
          id: 2,
          title: "Product Designer",
          department: "Design",
          location: "Visakhapatnam",
          type: "Full-time",
          salary: "₹9,00,000 - ₹12,00,000",
          description:
            "Design intuitive user interfaces for our software services, plant marketplace, and safety apps, ensuring seamless experiences for buyers across all platforms.",
          tags: ["Figma", "UX/UI", "Prototyping"],
          featured: false,
          postedDays: 5,
        },
        {
          id: 3,
          title: "Marketing Manager",
          department: "Marketing",
          location: "Visakhapatnam",
          type: "Full-time",
          salary: "₹10,00,000 - ₹13,00,000",
          description:
            "Manage digital marketing campaigns to promote our software development, plant marketplace, and safety app services to buyers, driving brand awareness and lead generation.",
          tags: ["Digital Marketing", "Analytics", "Strategy"],
          featured: true,
          postedDays: 1,
        },
        {
          id: 4,
          title: "DevOps Engineer",
          department: "Engineering",
          location: "Visakhapatnam",
          type: "Full-time",
          salary: "₹11,00,000 - ₹14,00,000",
          description:
            "Maintain cloud infrastructure and CI/CD pipelines for our software services, ensuring reliable deployment of applications for buyers in various industries.",
          tags: ["Docker", "Kubernetes", "Terraform"],
          featured: false,
          postedDays: 3,
        },
        {
          id: 5,
          title: "Sales Development Representative",
          department: "Sales",
          location: "Visakhapatnam",
          type: "Full-time",
          salary: "₹6,00,000 - ₹8,00,000 + Commission",
          description:
            "Generate qualified leads for our software solutions, digital marketing services, and plant marketplace by prospecting potential buyers and driving revenue.",
          tags: ["B2B Sales", "Lead Generation", "CRM"],
          featured: false,
          postedDays: 7,
        },
        {
          id: 6,
          title: "Data Scientist",
          department: "Engineering",
          location: "Visakhapatnam",
          type: "Full-time",
          salary: "₹13,00,000 - ₹16,00,000",
          description:
            "Analyze data from our software services and plant marketplace to provide insights for buyers, improving product recommendations and safety app functionalities.",
          tags: ["Python", "Machine Learning", "SQL"],
          featured: true,
          postedDays: 4,
        },
        {
          id: 7,
          title: "Software Development Intern",
          department: "Engineering",
          location: "Visakhapatnam",
          type: "Internship",
          salary: "₹1,50,000 - ₹2,00,000",
          description:
            "Assist in developing custom software solutions for buyers, gaining hands-on experience with React, Node.js, and cloud technologies in a supportive environment.",
          tags: ["React", "Node.js", "Internship"],
          featured: false,
          postedDays: 1,
        },
        {
          id: 8,
          title: "Digital Marketing Intern",
          department: "Marketing",
          location: "Visakhapatnam",
          type: "Internship",
          salary: "₹1,20,000 - ₹1,80,000",
          description:
            "Support digital marketing campaigns for our software, plant marketplace, and safety app services, learning analytics and strategy in a dynamic team.",
          tags: ["Digital Marketing", "Analytics", "Internship"],
          featured: false,
          postedDays: 3,
        },
        {
          id: 9,
          title: "UI/UX Design Intern",
          department: "Design",
          location: "Visakhapatnam",
          type: "Internship",
          salary: "₹1,40,000 - ₹1,90,000",
          description:
            "Work on designing user interfaces for our services, gaining experience with Figma and prototyping to create seamless buyer experiences.",
          tags: ["Figma", "UX/UI", "Internship"],
          featured: false,
          postedDays: 2,
        },
        {
          id: 10,
          title: "Data Analyst Intern",
          department: "Engineering",
          location: "Visakhapatnams",
          type: "Internship",
          salary: "₹1,60,000 - ₹2,20,000",
          description:
            "Analyze data from our software and plant marketplace to provide insights, learning Python and SQL in a real-world setting.",
          tags: ["Python", "SQL", "Internship"],
          featured: false,
          postedDays: 4,
        },
      ],
    });
  }

  render() {
    const { jobs } = this.state;
    const { searchQuery, filters } = this.props;

    const filteredJobs = jobs.filter((job) => {
      const matchesSearch =
        !searchQuery ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilters =
        (!filters?.department ||
          job.department.toLowerCase() === filters.department) &&
        (!filters?.location ||
          job.location.toLowerCase() === filters.location) &&
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
  }
}

export default JobCards;
