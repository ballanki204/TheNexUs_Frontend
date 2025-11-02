import React, { useEffect, useRef, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Code2,
  Building2,
  UtensilsCrossed,
  TrendingUp,
  GraduationCap,
  Briefcase,
  Cloud,
  Shield,
  Bot,
  Download,
  Search,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const Software = () => {
  const [consultancyOpen, setConsultancyOpen] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0]);
  const processRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetNumbers = [100, 32, 29]; // Different targets for each step
            targetNumbers.forEach((target, index) => {
              let current = 0;
              const increment = target / 50; // Divide animation into 50 steps
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                setAnimatedNumbers((prev) => {
                  const newNumbers = [...prev];
                  newNumbers[index] = Math.floor(current);
                  return newNumbers;
                });
              }, 30); // Update every 30ms
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownloadBrochure = (category) => {
    // Create a simple PDF-like content for the brochure
    const brochureContent = `
${category.title} Brochure

Overview:
${
  category.title
} solutions provide comprehensive software applications tailored for your business needs.

Key Applications:
${category.applications.map((app) => `- ${app}`).join("\n")}

Contact us for more information about our ${category.title.toLowerCase()} solutions.
`;

    // Create a blob with the brochure content
    const blob = new Blob([brochureContent], { type: "text/plain" });

    // Create a download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${category.slug}-brochure.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const categories = [
    {
      icon: Code2,
      title: "Healthcare / Medical Applications",
      slug: "healthcare",
      applications: [
        "Hospital Management System (HMS)",
        "Patient Management System",
        "Pharmacy & Inventory Management",
        "Laboratory Information System (LIS)",
        "Telemedicine / Online Consultations",
        "Appointment Scheduling Systems",
        "Billing & Insurance Management",
      ],
    },
    {
      icon: Building2,
      title: "Real Estate Applications",
      slug: "real-estate",
      applications: [
        "Property / Building Management Systems",
        "Renovation & Maintenance Tracking",
        "Rental / Lease Management Systems",
        "Real Estate CRM",
        "Property Valuation & Analytics",
        "Construction Project Management",
      ],
    },
    {
      icon: UtensilsCrossed,
      title: "Food & Restaurant Applications",
      slug: "food-restaurant",
      applications: [
        "POS Integration Systems",
        "Online Ordering / Delivery Apps",
        "Inventory & Stock Management",
        "Kitchen / Order Management",
        "Customer Loyalty & Rewards",
        "Recipe & Menu Management",
      ],
    },
    {
      icon: TrendingUp,
      title: "Trading & Financial Applications",
      slug: "trading-financial",
      applications: [
        "Algorithmic / Automated Trading Platforms",
        "Portfolio Management Systems",
        "Stock / Futures / Options Tracking",
        "Risk & Compliance Management",
        "Accounting & Reporting Tools",
      ],
    },
    {
      icon: GraduationCap,
      title: "Education & E-Learning",
      slug: "education-elearning",
      applications: [
        "Learning Management Systems (LMS)",
        "Online Exam & Assessment Platforms",
        "Student / Faculty Information Systems",
        "Course Management & Certification",
        "Virtual Classrooms & Collaboration",
      ],
    },
    {
      icon: Briefcase,
      title: "Enterprise Applications",
      slug: "enterprise",
      applications: [
        "ERP Systems (Inventory, Accounting, Sales, HR)",
        "HRMS (Attendance, Payroll, Recruitment)",
        "CRM Systems",
        "Project Management & Collaboration",
        "Document & Workflow Automation",
      ],
    },
    {
      icon: Cloud,
      title: "IT & Cloud Applications",
      slug: "it-cloud",
      applications: [
        "Cloud Infrastructure Management",
        "Server & Database Management",
        "Backup & Disaster Recovery",
        "DevOps & CI/CD Tools",
        "Virtualization & Remote Access",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity Applications",
      slug: "cybersecurity",
      applications: [
        "Vulnerability Assessment & Pen-testing",
        "Security Audit & Compliance",
        "Network Monitoring & Intrusion Detection",
        "Identity & Access Management",
        "Data Protection & Encryption",
      ],
    },
    {
      icon: Bot,
      title: "AI / ML Applications",
      slug: "ai-ml",
      applications: [
        "Chatbots & Virtual Assistants",
        "Predictive Analytics & Recommendation Engines",
        "Image / Video Recognition Systems",
        "NLP Applications (Text Analytics, Sentiment Analysis)",
        "Automation & Decision Support Systems",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <main>
        <section className="relative py-24 md:py-32 premium-bg overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-50" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-50" />

          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6 animate-slide-up">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                  Custom Solutions
                </span>
              </div>
              <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight gradient-text-extended animate-slide-up">
                Software Development Solutions
              </h1>
              <p
                className="mb-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                End-to-end custom software applications for mid-to-large scale
                industries, tailored for business efficiency and automation.
                Transform your operations with cutting-edge technology
                solutions.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <Link to="/book">
                  <Button
                    size="lg"
                    className="group px-8 py-6 text-lg bg-gradient-to-r from-primary via-blue-500 to-primary hover:from-blue-500 hover:via-primary hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    onClick={() => {
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }, 100);
                    }}
                  >
                    Book a Session
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-lg glass-card border-2 hover:text-gray-500 border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                  >
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-gradient-to-br from-background via-primary/5 to-secondary/5 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-50" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-50" />

          <div className="container relative z-10">
            <div className="text-center mb-16 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                  Our Expertise
                </span>
              </div>
              <h2 className="mb-6 text-4xl md:text-5xl pb-3 font-bold gradient-text-extended">
                Industry-Specific Solutions
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
                Comprehensive software applications across multiple domains.
                Tailored solutions designed to drive efficiency, growth, and
                innovation.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card
                    key={category.title}
                    className="group relative overflow-hidden glass-card border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 animate-hover-lift bg-gradient-to-br from-primary/5 via-background to-primary/5"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <CardHeader className="relative z-10">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <Link
                        to={`/software/${category.slug}`}
                        onClick={() => {
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }, 100);
                        }}
                      >
                        <CardTitle className="text-xl mb-2 hover:text-primary group-hover:gradient-text transition-all duration-300 cursor-pointer">
                          {category.title}
                        </CardTitle>
                      </Link>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <ul className="space-y-2.5 mb-6">
                        {category.applications.slice(0, 4).map((app) => (
                          <li
                            key={app}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                          >
                            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary group-hover:bg-secondary transition-colors" />
                            <span className="leading-relaxed">{app}</span>
                          </li>
                        ))}
                        {category.applications.length > 4 && (
                          <li className="text-xs text-muted-foreground italic">
                            +{category.applications.length - 4} more
                            applications
                          </li>
                        )}
                      </ul>
                      <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                        <Link
                          to={`/software/${category.slug}`}
                          onClick={() => {
                            setTimeout(() => {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }, 100);
                          }}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            className="group/btn text-primary hover:text-primary hover:bg-primary/10"
                          >
                            View Details
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </Link>
                        <Download
                          className="h-5 w-5 text-primary cursor-pointer hover:text-secondary transition-colors hover:scale-110"
                          onClick={() => handleDownloadBrochure(category)}
                        />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-16 text-center animate-fade-in">
              <Link to="/book">
                <Button
                  size="lg"
                  className="group px-8 py-6 text-lg bg-gradient-to-r from-primary via-blue-500 to-primary hover:from-blue-500 hover:via-primary hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section
          className="relative py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30 overflow-hidden"
          ref={processRef}
        >
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />

          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-16 animate-slide-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                    Our Methodology
                  </span>
                </div>
                <h2 className="mb-6 text-4xl md:text-5xl font-bold gradient-text-extended">
                  Our Development Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A proven methodology that delivers exceptional results
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    step: "100",
                    title: "Discovery",
                    desc: "Understanding your requirements and existing projects. We dive deep into your business needs to create the perfect solution.",
                    icon: Search,
                    gradient: "from-blue-400 to-cyan-500",
                  },
                  {
                    step: "32",
                    title: "Development",
                    desc: "Building custom solutions with modern technologies. Agile methodology ensures rapid iteration and continuous improvement.",
                    icon: Code2,
                    gradient: "from-purple-400 to-pink-500",
                  },
                  {
                    step: "29",
                    title: "Delivery",
                    desc: "Deployment and ongoing support for your application. We're with you every step of the way, ensuring long-term success.",
                    icon: CheckCircle,
                    gradient: "from-green-400 to-emerald-500",
                  },
                ].map((item, index) => (
                  <Card
                    key={item.step}
                    className="group relative overflow-hidden glass-card border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 animate-hover-lift text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    <CardHeader className="relative z-10">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                        <item.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="mb-4 text-5xl font-bold gradient-text">
                        {animatedNumbers[index] || 0}+
                      </div>
                      <CardTitle className="mb-3 text-2xl group-hover:gradient-text transition-all duration-300">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {item.desc}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Software;
