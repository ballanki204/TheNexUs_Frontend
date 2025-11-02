import React from "react";
import BookConsultancyModal from "../components/BookConsultancyModal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Leaf,
  ShoppingBag,
  Users,
  TrendingUp,
  Package,
  MapPin,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Globe,
  Award,
  Shield,
} from "lucide-react";
import plantIcon from "../assets/plant-icon.jpg";
import { Link } from "react-router-dom";

class PlantMarketplace extends React.Component {
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
    const features = [
      {
        icon: ShoppingBag,
        title: "Buy & Sell Plants",
        description:
          "Wide variety of plants, herbs, vegetables, ornamentals, and plant-based products",
      },
      {
        icon: Users,
        title: "Home Business Support",
        description:
          "Perfect platform for part-time entrepreneurs and home-based sellers",
      },
      {
        icon: TrendingUp,
        title: "Free Platform Access",
        description:
          "Currently offering free access to build your plant business",
      },
      {
        icon: Package,
        title: "Order Management",
        description:
          "Track orders, manage inventory, and handle transactions seamlessly",
      },
      {
        icon: MapPin,
        title: "Local & Beyond",
        description: "Connect with buyers and sellers in your area and beyond",
      },
      {
        icon: Leaf,
        title: "Green Community",
        description:
          "Join a network of plant enthusiasts and eco-conscious entrepreneurs",
      },
    ];

    const categories = [
      "Indoor Plants",
      "Outdoor Plants",
      "Herbs & Vegetables",
      "Fruits & Berries",
      "Ornamental Plants",
      "Plant Care Products",
      "Seeds & Saplings",
      "Plant-Based By-products",
    ];

    return (
      <div className="min-h-screen premium-bg-light">
        <main>
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 premium-bg overflow-hidden">
            {/* Animated Mesh Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div
                className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-green-400/15 via-emerald-400/10 to-teal-400/15 blur-[120px] animate-float opacity-60"
                style={{
                  animation: "mesh-gradient-1 18s ease-in-out infinite",
                }}
              />
              <div
                className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-secondary/15 via-green-400/10 to-emerald-400/15 blur-[140px] animate-float opacity-60"
                style={{
                  animation: "mesh-gradient-2 20s ease-in-out infinite",
                  animationDelay: "5s",
                }}
              />
            </div>

            <div className="container relative z-10">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="animate-fade-in">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/20 mb-6 animate-slide-up">
                    <Leaf className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                      Green Marketplace
                    </span>
                  </div>
                  <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight gradient-text-extended animate-slide-up">
                    Plant & Greenery Marketplace
                  </h1>
                  <p
                    className="mb-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-light animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Revolutionary platform empowering home-based entrepreneurs
                    to buy, sell, and grow their plant business legally and
                    sustainably. Build your green empire from the comfort of
                    your home.
                  </p>
                  <div
                    className="flex flex-col gap-4 sm:flex-row animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <Link to="/book">
                      <Button
                        size="lg"
                        className="group px-8 py-6 text-lg bg-gradient-to-r from-secondary via-green-500 to-emerald-500 hover:from-emerald-500 hover:via-green-500 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        Join as Seller
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 py-6 text-lg glass-card border-2 hover:text-gray-600 border-secondary/30 hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300 hover:scale-105"
                      onClick={() => this.setConsultancyOpen(true)}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
                <div
                  className="flex justify-center animate-fade-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-emerald-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={plantIcon}
                      alt="Plant marketplace"
                      className="relative h-64 w-64 md:h-80 md:w-80 rounded-3xl object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500 border-4 border-secondary/20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-24 premium-bg-light overflow-hidden">
            <div className="container relative z-10">
              <div className="text-center mb-16 animate-slide-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/20 mb-6">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                    Platform Features
                  </span>
                </div>
                <h2 className="mb-6 text-4xl md:text-5xl p-3 font-bold gradient-text-extended">
                  Everything You Need to Succeed
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
                  Comprehensive tools and features designed to help you start
                  and grow your plant business
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card
                      key={feature.title}
                      className="group relative overflow-hidden glass-card border-2 border-secondary/10 hover:border-secondary/30 transition-all duration-500 animate-hover-lift"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                      <CardHeader className="relative z-10">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-secondary/20 to-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                          <Icon className="h-7 w-7 text-secondary group-hover:text-emerald-500 transition-colors" />
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

          <section className="relative py-24 premium-bg overflow-hidden">
            <div className="container relative z-10">
              <div className="text-center mb-16 animate-slide-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/20 mb-6">
                  <Package className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                    Browse Categories
                  </span>
                </div>
                <h2 className="mb-6 text-4xl md:text-5xl p-3 font-bold gradient-text-extended">
                  Plant Categories
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
                  Explore and sell across diverse plant categories
                </p>
              </div>
              <div className="mx-auto max-w-5xl">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                  {categories.map((category, index) => (
                    <Card
                      key={category}
                      className="group relative overflow-hidden text-center glass-card border-2 border-secondary/10 hover:border-secondary/30 transition-all duration-300 animate-hover-lift cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <CardContent className="p-6 relative z-10">
                        <p className="font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                          {category}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                  Platform Roadmap
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-2 border-plant-primary">
                    <CardHeader>
                      <CardTitle className="text-plant-primary">
                        Version 1 (Current)
                      </CardTitle>
                      <CardDescription>
                        Available now for home & midscale sellers
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {[
                          "Free platform access",
                          "Buy & sell functionality",
                          "User profiles",
                          "Order tracking",
                          "Community features",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm"
                          >
                            <div className="mt-1.5 h-1 w-1 rounded-full bg-plant-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Future Enhancements</CardTitle>
                      <CardDescription>
                        Coming soon to scale your business
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {[
                          "Premium seller features",
                          "Enterprise marketplace",
                          "Advanced analytics",
                          "Bulk order management",
                          "Automated notifications",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <div className="mt-1.5 h-1 w-1 rounded-full bg-plant-primary" />
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

          <section className="relative py-24 bg-gradient-to-br from-secondary/20 via-background to-emerald-500/10 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-50" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-50" />

            <div className="container relative z-10">
              <div className="mx-auto max-w-4xl text-center animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/20 mb-6 animate-slide-up">
                  <Globe className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                    Join The Community
                  </span>
                </div>
                <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold gradient-text-extended animate-slide-up">
                  Ready to Start Your Plant Business?
                </h2>
                <p
                  className="mb-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-light animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  Join our growing community of plant entrepreneurs and start
                  earning from home. Build a sustainable business while
                  promoting green living.
                </p>
                <div
                  className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Link to="/book">
                    <Button
                      size="lg"
                      className="group px-8 py-6 text-lg bg-gradient-to-r from-secondary via-green-500 to-emerald-500 hover:from-emerald-500 hover:via-green-500 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Sign Up Free
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>

                  <Link to="/book">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 py-6 text-lg glass-card hover:text-gray-600 border-2 border-secondary/30 hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300 hover:scale-105"
                      onClick={() => {
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }, 100);
                      }}
                    >
                      Book a Session
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

export default PlantMarketplace;
