import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Search,
  Share2,
  TrendingUp,
  Mail,
  BarChart3,
  Target,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

class DigitalMarketing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consultancyOpen: false,
    };
  }

  setConsultancyOpen = (open) => {
    this.setState({ consultancyOpen: open });
  };

  render() {
    const services = [
      {
        icon: Search,
        title: "SEO Optimization",
        description:
          "Improve your search engine rankings and organic visibility",
        features: [
          "On-page SEO",
          "Off-page SEO",
          "Content Strategy",
          "Technical SEO",
          "Keyword Research",
        ],
      },
      {
        icon: Share2,
        title: "Social Media Management",
        description: "Build and engage your audience across social platforms",
        features: [
          "Profile Optimization",
          "Content Creation",
          "Post Scheduling",
          "Community Management",
          "Brand Monitoring",
        ],
      },
      {
        icon: Target,
        title: "Lead Generation",
        description: "Convert visitors into qualified leads for your business",
        features: [
          "Landing Page Design",
          "A/B Testing",
          "Conversion Optimization",
          "Lead Nurturing",
          "Marketing Automation",
        ],
      },
      {
        icon: Mail,
        title: "Email Marketing",
        description: "Reach your audience with targeted email campaigns",
        features: [
          "Campaign Design",
          "List Segmentation",
          "Automation Workflows",
          "Performance Tracking",
          "Template Design",
        ],
      },
      {
        icon: BarChart3,
        title: "Analytics & Reporting",
        description: "Data-driven insights to optimize your marketing efforts",
        features: [
          "Campaign Analytics",
          "ROI Tracking",
          "Custom Reports",
          "Performance Metrics",
          "Competitor Analysis",
        ],
      },
      {
        icon: TrendingUp,
        title: "Content Marketing",
        description: "Create compelling content that drives engagement",
        features: [
          "Content Strategy",
          "Blog Writing",
          "Visual Content",
          "Video Marketing",
          "Infographics",
        ],
      },
    ];

    return (
      <div className="min-h-screen premium-bg-light">
        <main>
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 premium-bg overflow-hidden">
            {/* Animated Mesh Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div
                className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-400/15 via-yellow-400/10 to-amber-400/15 blur-[120px] animate-float opacity-60"
                style={{
                  animation: "mesh-gradient-1 18s ease-in-out infinite",
                }}
              />
              <div
                className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-orange-500/15 via-yellow-400/10 to-orange-400/15 blur-[140px] animate-float opacity-60"
                style={{
                  animation: "mesh-gradient-2 20s ease-in-out infinite",
                  animationDelay: "5s",
                }}
              />
            </div>

            <div className="container relative z-10">
              <div className="mx-auto max-w-4xl text-center animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-orange-500/20 mb-6 animate-slide-up">
                  <TrendingUp className="w-4 h-4 text-orange-600" />
                  <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                    Marketing Excellence
                  </span>
                </div>
                <h1 className="mb-6 text-5xl md:text-6xl pb-3 lg:text-7xl font-bold tracking-tight gradient-text-extended animate-slide-up">
                  Digital Marketing Services
                </h1>
                <p
                  className="mb-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-light animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  Comprehensive digital marketing solutions to grow your online
                  presence, reach your target audience, and drive measurable
                  results. Transform your brand with data-driven strategies.
                </p>
                <div
                  className="animate-fade-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Link to="/book">
                    <Button
                      size="lg"
                      className="group px-8 py-6 text-lg bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-yellow-500 hover:via-amber-500 hover:to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-24 premium-bg-light overflow-hidden">
            <div className="container relative z-10">
              <div className="text-center mb-16 animate-slide-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-orange-500/20 mb-6">
                  <Sparkles className="w-4 h-4 text-orange-600" />
                  <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                    Our Solutions
                  </span>
                </div>
                <h2 className="mb-6 text-4xl md:text-5xl pb-3 font-bold gradient-text-extended">
                  Our Marketing Solutions
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
                  Full-service digital marketing to elevate your brand and drive
                  measurable results
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card
                      key={service.title}
                      className="group relative overflow-hidden glass-card border-2 border-orange-500/10 hover:border-orange-500/30 transition-all duration-500 animate-hover-lift"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 via-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                      <CardHeader className="relative z-10">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                          <Icon className="h-7 w-7 text-orange-600 group-hover:text-amber-600 transition-colors" />
                        </div>
                        <CardTitle className="text-xl mb-2 group-hover:gradient-text transition-all duration-300">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="mt-0.5 h-4 w-4 text-orange-600 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div
                className="mt-12 text-center animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <Link to="/book">
                  <Button
                    size="lg"
                    className="group px-8 py-6 text-lg bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-yellow-500 hover:via-amber-500 hover:to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Book Consultancy
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="relative py-24 bg-gradient-to-br from-orange-500/10 via-background to-amber-500/10 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-50" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-50" />

            <div className="container relative z-10">
              <div className="mx-auto max-w-4xl">
                <div className="text-center mb-16 animate-slide-up">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-orange-500/20 mb-6">
                    <Target className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                      Why Choose Us
                    </span>
                  </div>
                  <h2 className="mb-6 text-4xl md:text-5xl pb-3 font-bold gradient-text-extended">
                    Why Choose Our Digital Marketing?
                  </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Data-Driven Strategy",
                      desc: "Every decision backed by analytics and insights",
                      icon: BarChart3,
                    },
                    {
                      title: "ROI Focused",
                      desc: "Measurable results that impact your bottom line",
                      icon: TrendingUp,
                    },
                    {
                      title: "Multi-Channel Approach",
                      desc: "Integrated campaigns across all digital platforms",
                      icon: Share2,
                    },
                    {
                      title: "Expert Team",
                      desc: "Experienced marketers dedicated to your success",
                      icon: Target,
                    },
                  ].map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <Card
                        key={benefit.title}
                        className="group relative overflow-hidden glass-card border-2 border-orange-500/10 hover:border-orange-500/30 transition-all duration-500 animate-hover-lift"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 via-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        <CardContent className="p-6 relative z-10">
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/20 group-hover:scale-110 transition-all duration-300">
                              <Icon className="h-5 w-5 text-orange-600 group-hover:text-amber-600 transition-colors" />
                            </div>
                            <div className="flex-1">
                              <h3 className="mb-2 text-lg font-semibold group-hover:gradient-text transition-all duration-300">
                                {benefit.title}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed">
                                {benefit.desc}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default DigitalMarketing;
