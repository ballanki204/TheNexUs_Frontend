import React from "react";
import { Card, CardContent } from "../components/ui/card";

class Testimonials extends React.Component {
  render() {
    const testimonials = [
      {
        name: "Alice Johnson",
        role: "Software Engineer",
        quote:
          "Working at TheNexUS has been an incredible journey. The team is supportive and the projects are challenging.",
        image: "/placeholder-avatar.jpg",
      },
      {
        name: "Bob Smith",
        role: "Product Manager",
        quote:
          "The culture here promotes innovation and collaboration. I've grown both personally and professionally.",
        image: "/placeholder-avatar.jpg",
      },
      // Add more testimonials
    ];

    const photos = [
      "/placeholder-event1.jpg",
      "/placeholder-event2.jpg",
      "/placeholder-office.jpg",
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Life at TheNexUS
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Employee Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Team Events & Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <Card key={index}>
                  <CardContent className="p-0">
                    <img
                      src={photo}
                      alt={`Team event ${index + 1}`}
                      className="w-full h-48 object-cover rounded"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Behind-the-Scenes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {photos.concat(photos).map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Behind the scenes ${index + 1}`}
                  className="w-full h-32 object-cover rounded"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Testimonials;
