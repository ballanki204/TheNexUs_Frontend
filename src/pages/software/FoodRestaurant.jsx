import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Breadcrumb from "../../components/Breadcrumb";

const FoodRestaurant = () => {
  const applications = [
    "POS Integration Systems",
    "Online Ordering / Delivery Apps",
    "Inventory & Stock Management",
    "Kitchen / Order Management",
    "Customer Loyalty & Rewards",
    "Recipe & Menu Management",
  ];

  return (
    <div className="min-h-screen">
      <div className="container py-4"></div>
      <main className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Food & Restaurant Applications
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Comprehensive software solutions for food and restaurant
              businesses
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((app, index) => (
              <Card
                key={app}
                className="group transition-all hover:shadow-lg animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{app}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Specialized software solution for {app.toLowerCase()}.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FoodRestaurant;
