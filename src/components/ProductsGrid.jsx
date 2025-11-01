import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Leaf, Shield, ArrowRight } from "lucide-react";

class ProductsGrid extends React.Component {
  render() {
    const products = [
      {
        icon: Leaf,
        title: "Plant Marketplace",
        description:
          "Revolutionary platform for buying and selling plants and greenery",
        link: "/plant-marketplace",
        gradient: "from-green-300 to-green-700",
      },
      {
        icon: Shield,
        title: "Safety & HIRA App",
        description:
          "AI-powered hazard recognition and workplace safety solutions",
        link: "/safety-app",
        gradient: "from-red-400 to-orange-500",
      },
    ];

    return (
      <section className="relative py-24 premium-bg-light overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-50" />
        
        <div className="container relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/20 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider gradient-text">Our Innovations</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text-extended">
              Our Products
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Innovative solutions designed to enhance your business operations. 
              Built with cutting-edge technology for tomorrow's challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card
                  key={index}
                  className={`group relative overflow-hidden glass-card border-2 border-secondary/10 hover:border-secondary/30 transition-all duration-500 animate-hover-lift animate-stagger-${
                    index + 1
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Animated Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <CardContent className="p-10 lg:p-12 text-center relative z-10">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${product.gradient} text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl relative z-10`}
                      >
                        <IconComponent className="w-10 h-10 animate-hover-scale" />
                      </div>
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:gradient-text transition-all duration-300">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                      {product.description}
                    </p>

                    {/* CTA Button */}
                    <Link
                      to={product.link}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      className="block"
                    >
                      <Button
                        className={`relative w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white border-0 group/btn overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                        size="lg"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                        <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                          Learn More
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </span>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default ProductsGrid;
