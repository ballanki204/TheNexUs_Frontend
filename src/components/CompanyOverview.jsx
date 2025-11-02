import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Sparkles,
  Users,
  Target,
  Lightbulb,
  Rocket,
  Heart,
} from "lucide-react";

class CompanyOverview extends React.Component {
  render() {
    const values = [
      {
        icon: Target,
        title: "Innovation First",
        description:
          "We push boundaries and challenge the status quo to create groundbreaking solutions.",
      },
      {
        icon: Users,
        title: "Collaborative Spirit",
        description:
          "We believe in the power of teamwork and open communication to achieve extraordinary results.",
      },
      {
        icon: Lightbulb,
        title: "Continuous Learning",
        description:
          "We foster an environment where curiosity is encouraged and learning never stops.",
      },
      {
        icon: Rocket,
        title: "Growth Mindset",
        description:
          "We invest in our team's growth, providing opportunities to develop skills and advance careers.",
      },
      {
        icon: Heart,
        title: "Work-Life Balance",
        description:
          "We care about our team's well-being and support a healthy work-life integration.",
      },
    ];

    return (
      <section className="relative py-24 premium-bg overflow-hidden">
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider gradient-text">
                Our Journey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl pb-3 font-bold gradient-text-extended mb-6">
              Growing Young Minds With Us
            </h2>
            <p className="mx-auto max-w-4xl text-lg text-muted-foreground leading-relaxed">
              At TheNexUS, we believe in the power of technology to transform
              businesses and improve lives. Our mission is to create innovative
              solutions that bridge the gap between cutting-edge technology and
              real-world applications. But more than that, we're committed to
              nurturing the next generation of innovators. Through our
              internship program, we partner with passionate young minds,
              providing them with real-world experience, mentorship, and
              opportunities to grow. We foster a culture of collaboration,
              creativity, and continuous learning—where every voice matters and
              every idea can spark change. Join us on this journey, whether
              you're starting your career or looking to make an impact.
              Together, we'll build the future.
            </p>
          </div>

          <div className="mb-16">
            <Card className="glass-card border-2 border-primary/10 p-8 md:p-12 animate-hover-lift">
              <CardContent>
                <div className="prose prose-lg max-w-none text-center">
                  <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                    <strong className="text-foreground gradient-text-extended">
                      Our Promise:
                    </strong>{" "}
                    We're not just offering jobs—we're building partnerships.
                    For our interns, we provide hands-on experience with
                    cutting-edge technologies, mentorship from industry experts,
                    and a supportive environment where you can learn,
                    experiment, and grow. We believe young minds bring fresh
                    perspectives and innovative ideas that drive our company
                    forward. If you're passionate, curious, and eager to learn,
                    we want you to be part of our journey.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12 animate-slide-up">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text-extended mb-6">
              Our Core Values
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These values guide everything we do and shape our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="group relative overflow-hidden glass-card border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 animate-hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <CardHeader className="relative z-10">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-indigo-500/20 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                      <Icon className="h-7 w-7 text-primary group-hover:text-indigo-500 transition-colors" />
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:gradient-text transition-all duration-300 text-center">
                      {value.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground leading-relaxed text-center">
                      {value.description}
                    </p>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default CompanyOverview;
