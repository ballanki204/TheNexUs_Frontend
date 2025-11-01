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
  Target,
  Users,
  Zap,
  Award,
  ArrowRight,
  TrendingUp,
  Globe,
  Heart,
  Shield,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    const values = [
      {
        icon: Target,
        title: "Innovation First",
        description:
          "Constantly pushing boundaries with cutting-edge technology solutions. We stay ahead of the curve, implementing the latest technologies to solve tomorrow's challenges today.",
        gradient: "from-blue-400 to-cyan-500",
      },
      {
        icon: Users,
        title: "Client-Centric Excellence",
        description:
          "Your success is our success. We build lasting partnerships by understanding your unique needs and delivering solutions that exceed expectations.",
        gradient: "from-purple-400 to-pink-500",
      },
      {
        icon: Zap,
        title: "Sustainable Growth",
        description:
          "Balancing business growth with environmental responsibility. We believe in creating value that benefits both your business and our planet.",
        gradient: "from-green-400 to-emerald-500",
      },
      {
        icon: Award,
        title: "Uncompromising Excellence",
        description:
          "Committed to delivering exceptional quality in everything we do. From design to deployment, excellence is our standard, not our goal.",
        gradient: "from-orange-400 to-red-500",
      },
    ];

    const stats = [
      { value: "500+", label: "Projects Delivered", icon: TrendingUp },
      { value: "150+", label: "Happy Clients", icon: Users },
      { value: "98%", label: "Satisfaction Rate", icon: Heart },
      { value: "50+", label: "Countries Served", icon: Globe },
    ];

    const features = [
      {
        title: "Global Reach, Local Expertise",
        description:
          "Serving clients across 50+ countries with deep understanding of local markets and regulations.",
      },
      {
        title: "Industry-Leading Innovation",
        description:
          "Pioneering AI-driven solutions and cutting-edge technologies that transform businesses.",
      },
      {
        title: "24/7 Support Network",
        description:
          "Round-the-clock support ensuring your operations never stop, no matter where you are.",
      },
    ];

    const platforms = [
      {
        title: "Plant & Greenery Marketplace",
        description:
          "Revolutionary platform empowering home-based entrepreneurs to build sustainable plant businesses",
      },
      {
        title: "Safety & HIRA Application",
        description:
          "AI-powered workplace safety solution using image recognition and hazard analysis",
      },
    ];

    return (
      <div className="min-h-screen">
        <main>
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 premium-bg overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-50" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-50" />

            <div className="container relative z-10">
              <div className="mx-auto max-w-4xl text-center animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6 animate-slide-up">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                    Our Story
                  </span>
                </div>
                <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight gradient-text-extended animate-slide-up">
                  About TheNexUS
                </h1>
                <p
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light mb-8 animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  We are a technology-driven company passionate about building
                  intelligent, scalable, and real-world solutions that empower
                  individuals, startups, and enterprises. Our expertise spans
                  Software Development, AI & Cloud Solutions, Digital Marketing,
                  Green Initiatives, and Safety Innovation.
                </p>
                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Link to="/book">
                    <Button
                      size="lg"
                      className="group px-8 py-6 text-lg bg-gradient-to-r from-primary via-blue-500 to-primary hover:from-blue-500 hover:via-primary hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/careers">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 py-6 hover:text-gray-600 text-lg glass-card border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                    >
                      Join Our Team
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="relative py-16 bg-gradient-to-br from-background via-primary/5 to-background">
            <div className="container">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="text-center animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 glass-card border border-primary/10">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="relative py-24 bg-gradient-to-br from-background via-primary/5 to-secondary/5 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />

            <div className="container relative z-10">
              <div className="mx-auto max-w-4xl">
                <div className="text-center mb-12 animate-slide-up">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/20 mb-6">
                    <Shield className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                      Our Journey
                    </span>
                  </div>
                  <h2 className="mb-6 text-4xl md:text-5xl font-bold gradient-text-extended">
                    Our Story
                  </h2>
                </div>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in">
                  <p className="text-base md:text-lg">
                    Our story began with a vision to blend technology with
                    purpose — creating solutions that drive growth, safety, and
                    sustainability. We started by developing software
                    applications for diverse industries and expanded into
                    real-world innovations that make a meaningful impact.
                  </p>
                  <p className="text-base md:text-lg">
                    Through our{" "}
                    <strong className="text-foreground">
                      Plant Marketplace
                    </strong>
                    , we empower home-based entrepreneurs to grow and earn
                    legally, creating sustainable income streams while promoting
                    green living. Our{" "}
                    <strong className="text-foreground">Safety App</strong>
                    ensures safer work environments using AI-driven hazard
                    recognition, protecting lives and reducing workplace
                    accidents. Today, our Green Initiative Network connects
                    people and technology to build a healthier, greener future
                    for generations to come.
                  </p>
                  <p className="text-base md:text-lg">
                    We've grown from a small team of passionate developers to a
                    global force, serving clients across 50+ countries while
                    maintaining our core values of innovation, excellence, and
                    environmental responsibility.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  {features.map((feature, index) => (
                    <Card
                      key={index}
                      className="glass-card border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 animate-hover-lift"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <CardTitle className="text-lg mb-2">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {feature.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-50" />

            <div className="container relative z-10">
              <div className="text-center mb-16 animate-slide-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                    What Drives Us
                  </span>
                </div>
                <h2 className="mb-4 text-4xl md:text-5xl font-bold gradient-text-extended">
                  Our Values
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide every decision we make and every
                  solution we create
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card
                      key={value.title}
                      className="group relative overflow-hidden glass-card border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 animate-hover-lift"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Gradient Background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                      <CardHeader className="relative z-10 text-center">
                        <div className="mb-6 flex justify-center">
                          <div
                            className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                          >
                            <Icon className="w-10 h-10" />
                          </div>
                        </div>
                        <CardTitle className="text-xl mb-3 group-hover:gradient-text transition-all duration-300">
                          {value.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {value.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="relative py-24 bg-gradient-to-br from-background via-secondary/5 to-primary/5 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-50" />

            <div className="container relative z-10">
              <div className="mx-auto max-w-5xl">
                <div className="text-center mb-16 animate-slide-up">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/20 mb-6">
                    <Sparkles className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                      Innovation Hub
                    </span>
                  </div>
                  <h2 className="mb-6 text-4xl md:text-5xl font-bold gradient-text-extended">
                    Our Innovative Platforms
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Revolutionary solutions that transform industries and
                    empower communities
                  </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  {platforms.map((platform, index) => (
                    <Card
                      key={platform.title}
                      className={`group relative overflow-hidden glass-card border-2 transition-all duration-500 animate-hover-lift ${
                        platform.title === "Plant & Greenery Marketplace"
                          ? "border-green-200/50 hover:border-green-400/50"
                          : "border-red-200/50 hover:border-red-400/50"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Gradient Background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          platform.title === "Plant & Greenery Marketplace"
                            ? "from-green-400/10 to-emerald-500/10"
                            : "from-red-400/10 to-orange-500/10"
                        } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                      <CardHeader className="relative z-10">
                        <CardTitle className="text-2xl mb-3 group-hover:gradient-text transition-all duration-300">
                          {platform.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {platform.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <Link
                          to={
                            platform.title === "Plant & Greenery Marketplace"
                              ? "/plant-marketplace"
                              : "/safety-app"
                          }
                        >
                          <Button
                            variant="outline"
                            className="group/btn w-full hover:text-gray-600 border-2 hover:bg-primary/10 transition-all duration-300"
                          >
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="container relative z-10">
              <div className="mx-auto max-w-3xl text-center animate-fade-in">
                <h2 className="mb-6 text-4xl md:text-5xl font-bold gradient-text-extended">
                  Ready to Transform Your Business?
                </h2>
                <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                  Join hundreds of successful companies who trust TheNexUS for
                  their digital transformation journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/book">
                    <Button
                      size="lg"
                      className="px-8 py-6 text-lg bg-gradient-to-r from-primary via-blue-500 to-primary hover:from-blue-500 hover:via-primary hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                    >
                      Book a Consultation
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 py-6 text-lg glass-card hover:text-gray-600 border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default About;
