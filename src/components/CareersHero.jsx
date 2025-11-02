import React from "react";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Users,
  Target,
  Heart,
  Sparkles,
  Briefcase,
  GraduationCap,
} from "lucide-react";

class CareersHero extends React.Component {
  render() {
    return (
      <section className="relative py-24 md:py-32 premium-bg overflow-hidden">
        {/* Animated Mesh Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div
            className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/15 via-purple-500/10 to-indigo-500/15 blur-[120px] animate-float opacity-60"
            style={{ animation: "mesh-gradient-1 18s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-purple-500/15 via-primary/10 to-orange-500/15 blur-[140px] animate-float opacity-60"
            style={{
              animation: "mesh-gradient-2 20s ease-in-out infinite",
              animationDelay: "5s",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 py-5 lg:px-10 lg:py-10 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6 animate-slide-up">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                  Join 200+ Innovators
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 p-4 leading-tight gradient-text-extended animate-slide-up">
                Shape the Future of
                <span className="block"> Technology</span>
              </h1>

              <p
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                We're not just building software—we're crafting experiences that
                transform industries and empower millions. Join us on our
                journey to grow young minds and build the future.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <a href="#opportunities">
                  <Button
                    size="lg"
                    className="group px-8 py-6 text-lg bg-gradient-to-r from-primary via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-purple-500 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Explore Opportunities
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <a href="/culture">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-lg glass-card border-2 hover:text-gray-600 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                  >
                    Our Culture
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div
              className="grid grid-cols-2 gap-6 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="glass-card border-2 border-primary/10 hover:border-primary/30 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 animate-hover-lift">
                <Target className="w-8 h-8 mx-auto mb-3 text-primary " />
                <div className="text-3xl font-bold mb-1 gradient-text-extended">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Active Projects
                </div>
              </div>

              <div className="glass-card border-2 border-primary/10 hover:border-primary/30 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 animate-hover-lift">
                <Heart className="w-8 h-8 mx-auto mb-3 text-primary " />
                <div className="text-3xl font-bold mb-1 gradient-text-extended">
                  98%
                </div>
                <div className="text-sm text-muted-foreground">
                  Employee Satisfaction
                </div>
              </div>

              <div className="glass-card border-2 border-primary/10 hover:border-primary/30 rounded-2xl p-6 text-center col-span-2 transition-all duration-300 hover:scale-105 animate-hover-lift">
                <Users className="w-8 h-8 mx-auto mb-3 text-primary " />
                <div className="text-3xl font-bold mb-1 gradient-text-extended">
                  15+
                </div>
                <div className="text-sm text-muted-foreground">
                  Countries Represented
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-16 text-center animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-muted-foreground mb-4">
              Trusted by industry leaders
            </p>
            <div className="flex justify-center items-center gap-3 md:gap-8 opacity-60">
              {/* Placeholder for company logos */}
              <div className="text-muted-foreground md:font-semibold">
                TechCorp
              </div>
              <div className="text-muted-foreground font-semibold">
                InnovateLab
              </div>
              <div className="text-muted-foreground font-semibold">
                FutureWorks
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CareersHero;
