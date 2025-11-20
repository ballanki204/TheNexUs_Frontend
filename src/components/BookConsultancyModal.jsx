import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronRight,
  Home,
  Sparkles,
  CheckCircle,
  Calendar,
  Clock,
  Shield,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";

// BookConsultancyPage.jsx
// Single-file React + Tailwind component. Drop into a React app that already has Tailwind configured.

const BookConsultancyModal = () => {
  const location = useLocation();
  const [form, setForm] = useState({
    name: "",
    service: "",
    email: "",
    phone: "",
    place: "",
    package: "standard",
    date: "",
    time: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Scroll to form on mount if hash is #book
  React.useEffect(() => {
    if (location.hash === "#book") {
      const element = document.getElementById("book");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  // console.log(form);

  // Build breadcrumb trail based on how user arrived
  const buildBreadcrumbs = () => {
    const breadcrumbs = [{ label: "Home", path: "/", icon: Home }];

    // Check if user came from a specific page via state or referrer
    const state = location.state;
    if (state && state.fromPage) {
      breadcrumbs.push({
        label: state.fromPage.label,
        path: state.fromPage.path,
      });
    } else {
      // If no state, check referrer or current path
      const referrer = document.referrer;
      if (referrer) {
        // Try to extract page name from referrer
        const url = new URL(referrer);
        const path = url.pathname;
        if (path !== "/" && path !== "/book") {
          // Map common paths to labels
          const pageMap = {
            "/software": "Software Solutions",
            "/digital-marketing": "Digital Marketing",
            "/plant-marketplace": "Plant Marketplace",
            "/safety-app": "Safety App",
            "/careers": "Careers",
            "/about": "About Us",
          };
          const pageLabel = pageMap[path] || "Page";
          breadcrumbs.push({ label: pageLabel, path: path });
        }
      }
    }
    breadcrumbs.push({ label: "  Book a Session", path: "/book" });

    return breadcrumbs;
  };

  const breadcrumbs = buildBreadcrumbs();

  const packages = [
    {
      id: "starter",
      title: "Starter",
      price: "₹xxxx",
      desc: "30-min quick audit + recommendations",
    },
    {
      id: "standard",
      title: "Standard",
      price: "₹xxxxx",
      desc: "60-min deep consultancy + action plan",
    },
    {
      id: "premium",
      title: "Premium",
      price: "₹xxxxx",
      desc: "2-hour strategy session + follow-up",
    },
  ];

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.service.trim()) e.service = "Service is required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = "Valid email required";
    if (!/^[0-9]{10}$/.test(form.phone)) e.phone = "Enter 10-digit phone";
    if (!form.place.trim()) e.place = "Place is required";
    if (!form.date) e.date = "Select a date";
    if (!form.time) e.time = "Select a time";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;
    setSubmitting(true);

    // Simulate submit (replace with real API call)
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

  function handleChange(k, v) {
    setForm((s) => ({ ...s, [k]: v }));
    setErrors((err) => ({ ...err, [k]: undefined }));
  }

  return (
    <div className="min-h-screen premium-bg-light">
      {/* Hero Section with Apple-style Background */}
      <section className="relative py-24 md:py-32 premium-bg overflow-hidden">
        {/* Animated Mesh Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div
            className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/15 via-blue-400/10 to-cyan-400/15 blur-[120px] animate-float opacity-60"
            style={{ animation: "mesh-gradient-1 18s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-purple-400/15 via-pink-400/10 to-orange-400/15 blur-[140px] animate-float opacity-60"
            style={{
              animation: "mesh-gradient-2 20s ease-in-out infinite",
              animationDelay: "5s",
            }}
          />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4">
          {/* Hero Header */}
          <div className="mx-auto max-w-4xl text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6 animate-slide-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                Book Your Session
              </span>
            </div>
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight gradient-text-extended animate-slide-up">
              Book a Consultancy Session
            </h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto mb-4 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Hands-on guidance for Product, Engineering, AI and Growth. Get an
              actionable plan you can implement immediately.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-12">
        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text-extended leading-tight">
                Get an Actionable Plan
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Choose a package and pick a slot that works for you. We provide
                practical, implementable solutions tailored to your unique
                needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book">
                <Button
                  size="lg"
                  className="group px-8 py-6 text-lg bg-gradient-to-r from-primary via-blue-500 to-primary hover:from-blue-500 hover:via-primary hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Book a Session
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#packages">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg glass-card border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                >
                  See Packages
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-6 glass-card border border-primary/10 rounded-2xl group hover:border-primary/30 transition-all duration-300 animate-hover-lift">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-foreground">
                  Practical deliverables
                </span>
              </div>
              <div className="flex items-center gap-3 p-6 glass-card border border-primary/10 rounded-2xl group hover:border-primary/30 transition-all duration-300 animate-hover-lift">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-foreground">
                  Flexible scheduling
                </span>
              </div>
              <div className="flex items-center gap-3 p-6 glass-card border border-primary/10 rounded-2xl group hover:border-primary/30 transition-all duration-300 animate-hover-lift">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-foreground">
                  Follow-up support
                </span>
              </div>
            </div>
          </div>

          <div
            id="book"
            className="glass-card border-2 border-primary/10 p-8 rounded-3xl shadow-strong animate-fade-in relative overflow-hidden group"
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            {submitted ? (
              <div className="text-center relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-6 animate-scale-in">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold gradient-text mb-4">
                  Booking confirmed 🎉
                </h3>
                <p className="mt-2 text-lg text-muted-foreground mb-8">
                  We sent a confirmation to{" "}
                  <strong className="text-foreground">{form.email}</strong>.
                  You'll receive a calendar invite shortly.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  size="lg"
                  className="px-8 py-6 text-lg bg-gradient-to-r from-primary via-blue-500 to-primary hover:from-blue-500 hover:via-primary hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Make another booking
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2 text-left">
                    Full name
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="block w-full px-4 py-3 rounded-xl border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/80 backdrop-blur-sm hover:border-primary/40"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1 animate-fade-in">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2 text-left">
                    Service
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    className="block w-full px-4 py-3 rounded-xl border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/80 backdrop-blur-sm hover:border-primary/40"
                  >
                    <option value="">Select a service</option>
                    <option value="software-development">
                      Software Development
                    </option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="plant-marketplace">Plant Marketplace</option>
                    <option value="safety-app">Safety & HIRA App</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2 text-left">
                    Place
                  </label>
                  <input
                    value={form.place}
                    onChange={(e) => handleChange("place", e.target.value)}
                    className="block w-full px-4 py-3 rounded-xl border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/80 backdrop-blur-sm hover:border-primary/40"
                    placeholder="Your city/location"
                  />
                  {errors.place && (
                    <p className="text-red-600 text-sm mt-1 animate-fade-in">
                      {errors.place}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 text-left">
                      Email
                    </label>
                    <input
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="block w-full px-4 py-3 rounded-xl border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/80 backdrop-blur-sm hover:border-primary/40"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1 animate-fade-in">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 text-left">
                      Phone
                    </label>
                    <input
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="block w-full px-4 py-3 rounded-xl border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/80 backdrop-blur-sm hover:border-primary/40"
                      placeholder="9876543210"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1 animate-fade-in">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2 text-left">
                    Package
                  </label>
                  <input
                    value={form.package}
                    onChange={(e) => handleChange("package", e.target.value)}
                    className="block w-full px-4 py-3 rounded-xl border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/80 backdrop-blur-sm hover:border-primary/40"
                    placeholder="Enter package type (e.g., Starter, Standard, Premium)"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 text-left">
                      Preferred date
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className="block w-full px-4 py-3 rounded-xl border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/80 backdrop-blur-sm hover:border-primary/40"
                    />
                    {errors.date && (
                      <p className="text-red-600 text-sm mt-1 animate-fade-in">
                        {errors.date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 text-left">
                      Preferred time
                    </label>
                    <input
                      type="time"
                      value={form.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                      className="block w-full px-4 py-3 rounded-xl border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/80 backdrop-blur-sm hover:border-primary/40"
                    />
                    {errors.time && (
                      <p className="text-red-600 text-sm mt-1 animate-fade-in">
                        {errors.time}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2 text-left">
                    What would you like to cover?
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                    className="block w-full px-4 py-3 rounded-xl border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/80 backdrop-blur-sm resize-none hover:border-primary/40"
                    placeholder="Tell us more about your requirements (optional)"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                  <button
                    disabled={submitting}
                    type="submit"
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg bg-gradient-to-r from-primary via-blue-500 to-primary hover:from-blue-500 hover:via-primary hover:to-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 rounded-xl"
                  >
                    {submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Booking...
                      </>
                    ) : (
                      <>
                        Confirm & Book
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <div className="text-sm text-muted-foreground glass-card border border-primary/10 px-4 py-2 rounded-lg">
                    <Shield className="w-4 h-4 inline mr-2 text-primary" />
                    Secure payment • Cancel or reschedule 24h prior
                  </div>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="mt-20">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                Our Packages
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold gradient-text-extended mb-6">
              Choose Your Package
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the perfect consultation package for your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((p, index) => (
              <div
                key={p.id}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`group/package relative overflow-hidden rounded-3xl p-8 glass-card border-2 transition-all duration-500 animate-hover-lift ${
                    form.package === p.id
                      ? "border-primary/50 shadow-strong"
                      : "border-primary/10 hover:border-primary/30"
                  }`}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover/package:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/package:translate-x-full transition-transform duration-1000" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-2xl font-bold text-foreground group-hover/package:gradient-text transition-all duration-300">
                        {p.title}
                      </h4>
                      <div className="text-3xl font-bold gradient-text">
                        {p.price}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                      {p.desc}
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-3 mb-8">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Direct session with expert
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        Actionable report
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-500" />
                        Email summary & resources
                      </li>
                    </ul>
                    <button
                      onClick={() => handleChange("package", p.id)}
                      className={`w-full rounded-xl px-6 py-3 font-semibold transition-all duration-300 relative z-10 group/btn overflow-hidden ${
                        form.package === p.id
                          ? "bg-gradient-to-r from-primary via-blue-500 to-primary text-white shadow-lg"
                          : "border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                      }`}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      <span className="relative z-10">
                        {form.package === p.id
                          ? "✓ Selected"
                          : "Choose Package"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-20">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                Simple Process
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold gradient-text-extended mb-6">
              How It Works
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three easy steps to get started
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: 1,
                title: "Pick a package",
                desc: "Choose a session length and scope that fits your needs perfectly.",
                gradient: "from-blue-400 to-purple-500",
                icon: "🎯",
              },
              {
                num: 2,
                title: "Book & pay",
                desc: "Confirm your slot and complete secure payment after availability check.",
                gradient: "from-green-400 to-blue-500",
                icon: "💳",
              },
              {
                num: 3,
                title: "Get an action plan",
                desc: "Receive a practical, prioritized plan you can implement right away.",
                gradient: "from-purple-400 to-pink-500",
                icon: "📋",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden glass-card border-2 border-primary/10 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 animate-hover-lift group-hover:border-primary/30">
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <div className="relative z-10">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                    >
                      {step.num}
                    </div>
                    <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mt-20">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/20 mb-6">
              <Users className="w-4 h-4 text-secondary" />
              <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                Client Stories
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold gradient-text-extended mb-6">
              What Our Clients Say
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by industry leaders worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Helped us rescue a failing product roadmap — clear, practical, fast.",
                author: "Priya R., Product Lead",
                gradient: "from-blue-400 to-cyan-500",
                color: "text-blue-500",
              },
              {
                quote:
                  "The strategy session delivered a 3-step plan we executed in 2 weeks.",
                author: "Arjun K., Founder",
                gradient: "from-green-400 to-emerald-500",
                color: "text-green-500",
              },
              {
                quote: "Excellent mix of technical depth and business sense.",
                author: "Meera S., CTO",
                gradient: "from-purple-400 to-pink-500",
                color: "text-purple-500",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <blockquote className="relative overflow-hidden glass-card border-2 border-primary/10 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 animate-hover-lift h-full group-hover:border-primary/30">
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <div className="relative z-10">
                    <div className={`${testimonial.color} text-5xl mb-4`}>
                      "
                    </div>
                    <p className="text-foreground text-lg leading-relaxed mb-6 font-medium">
                      "{testimonial.quote}"
                    </p>
                    <footer className="text-sm font-semibold text-muted-foreground border-t border-primary/10 pt-4">
                      — {testimonial.author}
                    </footer>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BookConsultancyModal;
