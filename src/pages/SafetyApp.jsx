import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Camera,
  Shield,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Zap,
  Download,
  ArrowRight,
  Sparkles,
  Globe,
  Award,
} from "lucide-react";
import safetyIcon from "../assets/safety-icon.jpg";

// Safety App components
import Hero from "../components/safety/Hero";
import Features from "../components/safety/Features";
import About from "../components/safety/About";
import Services from "../components/safety/Services";
import Contact from "../components/safety/Contact";
import CTA from "../components/safety/CTA";

const SafetyApp = () => {
  const [animatedSteps, setAnimatedSteps] = useState([0, 0, 0]);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    downloads: 0,
  });
  const howItWorksRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSteps();
            animateNumbers();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (howItWorksRef.current) {
      observer.observe(howItWorksRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateSteps = () => {
    const targets = [200, 100, 150]; // Target step numbers
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedSteps(targets.map((target) => Math.floor(target * progress)));

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedSteps(targets);
      }
    }, increment);
  };

  const animateNumbers = () => {
    const targets = { downloads: 1000 };
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedNumbers({
        downloads: Math.floor(targets.downloads * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedNumbers(targets);
      }
    }, increment);
  };

  const features = [
    {
      icon: Camera,
      title: "Image Recognition",
      description:
        "Take a picture and instantly identify potential hazards using AI",
    },
    {
      icon: AlertTriangle,
      title: "HIRA Analysis",
      description:
        "Hazard Identification and Risk Assessment based on industry standards",
    },
    {
      icon: CheckCircle2,
      title: "Safety Recommendations",
      description:
        "Receive actionable suggestions to eliminate unsafe conditions",
    },
    {
      icon: FileText,
      title: "Safety Reports",
      description: "Generate detailed reports and documentation for compliance",
    },
    {
      icon: Shield,
      title: "Free for Home & Smallscale",
      description:
        "Currently available at no cost for home and small business use",
    },
    {
      icon: Zap,
      title: "Real-time Analysis",
      description: "Instant hazard detection and recommendations on the spot",
    },
  ];

  const useCases = [
    {
      title: "Home Safety",
      items: [
        "Kitchen hazards",
        "Electrical risks",
        "Fire safety",
        "Slip & fall prevention",
      ],
    },
    {
      title: "Workplace Safety",
      items: [
        "Equipment safety",
        "PPE compliance",
        "Workspace organization",
        "Emergency exits",
      ],
    },
    {
      title: "Construction Sites",
      items: [
        "Site hazards",
        "Material storage",
        "Equipment operation",
        "Worker safety",
      ],
    },
    {
      title: "Warehouses",
      items: [
        "Storage safety",
        "Loading docks",
        "Material handling",
        "Forklift operations",
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
              className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-400/15 via-primary/10 to-cyan-400/15 blur-[120px] animate-float opacity-60"
              style={{ animation: "mesh-gradient-1 18s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-primary/15 via-blue-400/10 to-indigo-400/15 blur-[140px] animate-float opacity-60"
              style={{
                animation: "mesh-gradient-2 20s ease-in-out infinite",
                animationDelay: "5s",
              }}
            />
          </div>

          <div className="container relative z-10">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6 animate-slide-up">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                    Safety First
                  </span>
                </div>
                <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight gradient-text-extended animate-slide-up">
                  Safety & Hazard Recognition App
                </h1>
                <p
                  className="mb-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-light animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  AI-powered safety application using image recognition and HIRA
                  analysis to identify and eliminate workplace hazards. Protect
                  your team with cutting-edge technology.
                </p>
                <div
                  className="flex flex-col gap-4 sm:flex-row animate-fade-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Link to="/safety">
                    <Button
                      size="lg"
                      className="group px-8 py-6 text-lg bg-gradient-to-r from-primary via-blue-500 to-indigo-500 hover:from-indigo-500 hover:via-blue-500 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Try Now
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-lg glass-card border-2 hover:text-gray-600 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                  >
                    Enterprise Inquiry
                  </Button>
                </div>
              </div>
              <div
                className="flex justify-center animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-indigo-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={safetyIcon}
                    alt="Safety application"
                    className="relative h-64 w-64 md:h-80 md:w-80 rounded-3xl object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500 border-4 border-primary/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative py-24 premium-bg-light overflow-hidden"
          ref={howItWorksRef}
        >
          <div className="container relative z-10">
            <div className="text-center mb-16 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                  How It Works
                </span>
              </div>
              <h2 className="mb-6 text-4xl md:text-5xl p-3 font-bold gradient-text-extended">
                Three Simple Steps to Safety
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
                Transform your workplace safety with AI-powered hazard detection
                in just three easy steps
              </p>
            </div>

            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    step: "01",
                    title: "Take Picture",
                    desc: "Capture an image of your workspace or environment",
                    icon: Camera,
                  },
                  {
                    step: "02",
                    title: "AI Analysis",
                    desc: "Our AI identifies potential hazards using HIRA methodology",
                    icon: Zap,
                  },
                  {
                    step: "03",
                    title: "Get Solutions",
                    desc: "Receive safety recommendations and actionable steps",
                    icon: CheckCircle2,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={item.step}
                      className="group relative overflow-hidden text-center glass-card border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 animate-hover-lift"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {/* Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                      <CardContent className="relative z-10 p-8">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-indigo-500/20 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                          <Icon className="h-8 w-8 text-primary group-hover:text-indigo-500 transition-colors" />
                        </div>
                        <div className="mb-4 text-4xl font-bold gradient-text-extended">
                          {animatedSteps[index] || 0}+
                        </div>
                        <h3 className="mb-3 text-xl font-semibold group-hover:gradient-text transition-all duration-300">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Downloads Stats */}
              <div
                className="mt-16 animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <Card className="glass-card border-2 border-primary/20 text-center p-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-indigo-500/20 shadow-lg">
                      <Download className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <span className="text-5xl font-bold gradient-text-extended">
                    {animatedNumbers.downloads.toLocaleString()}+
                  </span>
                  <p className="mt-2 text-lg text-muted-foreground">
                    App Downloads Worldwide
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 premium-bg overflow-hidden">
          <div className="container relative z-10">
            <div className="text-center mb-16 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                  Key Features
                </span>
              </div>
              <h2 className="mb-6 text-4xl md:text-5xl font-bold gradient-text-extended">
                Powerful Safety Features
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
                Comprehensive safety tools designed to protect your workplace
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={feature.title}
                    className="group relative overflow-hidden glass-card border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 animate-hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <CardHeader className="relative z-10">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-indigo-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                        <Icon className="h-7 w-7 text-primary group-hover:text-indigo-500 transition-colors" />
                      </div>
                      <CardTitle className="text-xl mb-2 group-hover:gradient-text transition-all duration-300">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Use Cases</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Applicable across various environments and industries
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {useCases.map((useCase) => (
                <Card key={useCase.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {useCase.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <div className="mt-1.5 h-1 w-1 rounded-full bg-safety-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/50 py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                Version Roadmap
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-2 border-safety-primary">
                  <CardHeader>
                    <CardTitle className="text-safety-primary">
                      Version 1 (Current)
                    </CardTitle>
                    <CardDescription>
                      Free for home & midscale businesses
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Image-based hazard recognition",
                        "Basic HIRA analysis",
                        "Safety recommendations",
                        "Simple reporting",
                        "Mobile & web access",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm"
                        >
                          <div className="mt-1.5 h-1 w-1 rounded-full bg-safety-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Enterprise Version (Coming Soon)</CardTitle>
                    <CardDescription>
                      Advanced features for large-scale operations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Industry-scale deployment",
                        "Automated mail triggers & alerts",
                        "Advanced dashboards & analytics",
                        "ERP integration",
                        "Predictive safety analytics",
                        "Custom compliance reports",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <div className="mt-1.5 h-1 w-1 rounded-full bg-safety-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-gradient-to-br from-primary/20 via-background to-indigo-500/10 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-50" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-50" />

          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6 animate-slide-up">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                  Get Started
                </span>
              </div>
              <h2 className="mb-6 text-4xl md:text-5xl p-3 lg:text-6xl font-bold gradient-text-extended animate-slide-up">
                Start Improving Safety Today
              </h2>
              <p
                className="mb-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-light animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Free for home and midscale businesses. Enterprise solutions
                available for larger organizations.
              </p>
              <div
                className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <Button
                  size="lg"
                  className="group px-8 py-6 text-lg bg-gradient-to-r from-primary via-blue-500 to-indigo-500 hover:from-indigo-500 hover:via-blue-500 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => (window.location.href = "/login")}
                >
                  Try Free Version
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg glass-card border-2 hover:text-gray-600 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                >
                  Enterprise Inquiry
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Merged Home Page Content */}
        <Features />
        <About />
        <Services />
        <Contact />
        <CTA />
      </main>
    </div>
  );
};

export default SafetyApp;
