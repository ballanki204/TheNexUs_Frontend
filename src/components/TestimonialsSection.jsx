import React from "react";
import { Card, CardContent } from "./ui/card";

class TestimonialsSection extends React.Component {
  render() {
    const testimonials = [
      {
        quote:
          "TheNexUS is more than a workplace—it's a community where innovation thrives.",
        author: "Sarah Chen",
        role: "Senior Developer",
      },
      {
        quote:
          "I've grown tremendously here, both professionally and personally.",
        author: "Mike Johnson",
        role: "Product Manager",
      },
    ];

    return (
      <section className="py-16 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 animate-slide-up">
            What Our Team Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`animate-hover-lift animate-stagger-${index + 1}`}
              >
                <CardContent className="p-6">
                  <blockquote className="text-lg italic mb-4 animate-fade-in">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-right animate-fade-in animate-stagger-1">
                    <cite className="font-semibold">{testimonial.author}</cite>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default TestimonialsSection;
