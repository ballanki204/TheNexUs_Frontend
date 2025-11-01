import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Code, TrendingUp, Palette, Briefcase, ArrowRight } from "lucide-react";

class QuickLinks extends React.Component {
  render() {
    const categories = [
      {
        name: "Engineering",
        path: "/careers/jobs?department=engineering",
        icon: Code,
        count: 12,
        description: "Build the future with cutting-edge technology",
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        name: "Marketing",
        path: "/careers/jobs?department=marketing",
        icon: TrendingUp,
        count: 8,
        description: "Drive growth and brand awareness",
        gradient: "from-orange-500 to-red-500",
      },
      {
        name: "Design",
        path: "/careers/jobs?department=design",
        icon: Palette,
        count: 6,
        description: "Create beautiful user experiences",
        gradient: "from-purple-500 to-pink-500",
      },
      {
        name: "Sales",
        path: "/careers/jobs?department=sales",
        icon: Briefcase,
        count: 10,
        description: "Connect with clients and drive revenue",
        gradient: "from-green-500 to-teal-500",
      },
    ];

    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white border animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Explore Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover your next career move across our diverse teams and
              innovative projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm animate-hover-lift animate-stagger-${
                    index + 1
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>
                  <CardContent className="p-8 text-center relative">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 animate-scale-in`}
                    >
                      <IconComponent className="w-8 h-8 animate-icon-rotate" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-medium text-gray-500">
                        {category.count} openings
                      </span>
                      <div className="flex items-center text-sm text-green-600 font-medium">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse-soft"></div>
                        Active
                      </div>
                    </div>

                    <Link
                      to={category.path}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      <Button
                        className={`w-full bg-gradient-to-r ${category.gradient} hover:opacity-90 text-white border-0 group/btn animate-button-hover`}
                        size="lg"
                      >
                        View Jobs
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in animate-stagger-4">
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for?
            </p>
            <Link
              to="/careers/jobs"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-gray-400 animate-hover-lift"
              >
                View All Openings
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default QuickLinks;
