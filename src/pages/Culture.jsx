import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";

class Culture extends React.Component {
  render() {
    const teamMembers = [
      { name: "John Doe", role: "CEO", image: "/placeholder-avatar.jpg" },
      { name: "Jane Smith", role: "CTO", image: "/placeholder-avatar.jpg" },
      // Add more team members
    ];

    const values = [
      {
        title: "Innovation",
        description: "We embrace new technologies and ideas.",
      },
      { title: "Collaboration", description: "Teamwork drives our success." },
      {
        title: "Integrity",
        description: "We act with honesty and transparency.",
      },
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Our Culture</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700">
              TheNexUS was founded with a vision to connect technology with
              human needs. We believe in creating solutions that make a
              difference in people's lives.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardContent className="flex flex-col items-center p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mb-4"
                    />
                    <h3 className="font-semibold">{member.name}</h3>
                    <Badge variant="secondary">{member.role}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Diversity & Inclusion
            </h2>
            <p className="text-gray-700 mb-4">
              We are committed to fostering an inclusive environment where
              everyone feels valued and respected.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Equal Opportunity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We provide equal opportunities for all, regardless of
                    background.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Work-Life Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We support flexible working arrangements to help our team
                    thrive.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Culture;
