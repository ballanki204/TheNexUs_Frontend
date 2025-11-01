import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { MapPin } from "lucide-react";

class Locations extends React.Component {
  render() {
    const offices = [
      {
        city: "New York",
        address: "123 Tech Street, NY 10001",
        openRoles: 5,
        image: "/placeholder-office.jpg",
      },
      {
        city: "San Francisco",
        address: "456 Innovation Ave, CA 94105",
        openRoles: 3,
        image: "/placeholder-office.jpg",
      },
      {
        city: "London",
        address: "789 Digital Lane, London EC1A 1BB",
        openRoles: 2,
        image: "/placeholder-office.jpg",
      },
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Our Locations</h1>

          <div className="mb-8">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Interactive Map Placeholder</p>
              {/* Replace with actual map component, e.g., Google Maps or Mapbox */}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {office.city}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={office.image}
                    alt={`${office.city} office`}
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <p className="text-sm text-gray-600 mb-2">{office.address}</p>
                  <Badge variant="secondary">
                    {office.openRoles} open roles
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Locations;
