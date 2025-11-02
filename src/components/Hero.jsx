import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "../assets/hero-bg.jpg";
import { Link } from "react-router-dom";

class Hero extends React.Component {
  render() {
    return (
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden apple-background">
        {/* Apple-style Animated Mesh Gradient Background */}
        <div className="absolute inset-0 premium-bg" />

        {/* Additional Background Image Layer (subtle) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-soft-light"
          style={{
            backgroundImage: `url(${heroBackground})`,
          }}
        />

        {/* Animated Mesh Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div
            className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/20 via-blue-400/15 to-cyan-400/20 blur-[120px] animate-float opacity-70"
            style={{ animation: "mesh-gradient-1 15s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-secondary/20 via-emerald-400/15 to-green-400/20 blur-[140px] animate-float opacity-70"
            style={{
              animation: "mesh-gradient-2 18s ease-in-out infinite",
              animationDelay: "5s",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-300/15 via-blue-400/12 to-purple-400/15 blur-[100px] animate-float opacity-60"
            style={{
              animation: "mesh-gradient-3 12s ease-in-out infinite",
              animationDelay: "2s",
            }}
          />
        </div>

        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_0%_/_0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_0%_/_0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

        {/* Noise Texture for Depth (Apple-style) */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        {/* Light Reflection Effect (Apple-style) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />

        {/* Content with Apple-style Glass Effect */}
        <div className="container relative z-10 py-20 px-4">
          {/* Subtle backdrop blur for content area */}
          <div
            className="absolute inset-0 bg-background/10 backdrop-blur-[80px] -z-10"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.03), transparent)",
            }}
          />

          <div className="mx-auto max-w-4xl text-center space-y-10 animate-fade-in relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-4 animate-slide-up">
              <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
              <span className="text-sm font-medium gradient-text">
                World-Class Solutions
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl font-bold tracking-tight  sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] animate-slide-up">
              <span className="block">Innovating for a</span>
              <span className="block gradient-text-extended mt-2 pb-3 bg-clip-text">
                Brighter Future
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Empowering businesses with cutting-edge technology solutions,
              professional back-office services, and comprehensive IT support.
              Your partner in digital transformation.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Link to={"/book"}>
                <Button
                  size="lg"
                  className="group relative px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary via-blue-500 to-cyan-400 hover:from-cyan-400 hover:via-blue-500 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold glass-card border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>

            {/* Stats or Features */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-8 border-t border-primary/10 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-60">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 rounded-full bg-primary/50 animate-pulse" />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
