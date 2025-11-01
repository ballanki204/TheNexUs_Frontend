import React from "react";
import { Card, CardContent } from "./ui/card";
import { Leaf, Heart, Globe } from "lucide-react";

const GreenInitiative = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Implementing eco-friendly solutions in all our operations and processes.",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Heart,
      title: "Carbon Neutral",
      description: "Working towards zero carbon emissions in our projects and operations.",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      icon: Globe,
      title: "Community Impact",
      description: "Supporting local communities and environmental causes worldwide.",
      gradient: "from-teal-400 to-cyan-500",
    },
  ];

    return (
      <section className="relative py-24 premium-bg-light overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-50" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/20 mb-6">
            <Leaf className="w-4 h-4 text-secondary" />
            <span className="text-xs font-semibold uppercase tracking-wider gradient-text">Our Commitment</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text-extended">
            Our Green Initiative
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Committed to sustainability and environmental responsibility. 
            Building a greener future, one project at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {initiatives.map((initiative, index) => {
            const IconComponent = initiative.icon;
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden glass-card border-2 border-secondary/10 hover:border-secondary/30 transition-all duration-500 animate-hover-lift animate-stagger-${
                  index + 1
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Animated Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${initiative.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <CardContent className="p-8 lg:p-10 text-center relative z-10">
                  {/* Icon Container */}
                  <div className="relative mb-6 flex justify-center">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${initiative.gradient} text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl relative z-10`}
                    >
                      <IconComponent className="w-10 h-10 animate-hover-scale" />
                    </div>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${initiative.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:gradient-text transition-all duration-300">
                    {initiative.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {initiative.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GreenInitiative;
