import React from "react";
import { Card, Typography, Button } from "@material-tailwind/react";

const insuranceTypes = [
  {
    title: "Homeowner Insurance",
    description: {
      whatIs:
        "Homeowner insurance provides financial protection for your home and belongings.",
      purpose:
        "It covers damages caused by incidents such as fire, theft, or vandalism.",
      customers:
        "Ideal for homeowners who want to protect their property from financial loss.",
      productCount: 5,
    },
  },
  {
    title: "Flood Insurance",
    description: {
      whatIs:
        "Flood insurance covers damage to your property caused by flooding.",
      purpose:
        "It helps homeowners, renters, and businesses recover from flood-related damage.",
      customers:
        "Required for those living in flood-prone areas or those wanting extra protection.",
      productCount: 3,
    },
  },
  {
    title: "Earthquake Insurance",
    description: {
      whatIs:
        "Earthquake insurance protects against the damage caused by earthquakes.",
      purpose:
        "It helps cover the cost of repairs to your property after an earthquake or tremor.",
      customers:
        "Available for homeowners in earthquake-prone areas or regions with seismic activity.",
      productCount: 4,
    },
  },
  {
    title: "Other Insurance",
    description: {
      whatIs:
        "Other insurance types include a variety of coverage options like renters, life, and more.",
      purpose:
        "These cover situations not addressed by standard homeowner or flood insurance policies.",
      customers:
        "Available for renters, vehicle owners, and people seeking specialized coverage.",
      productCount: 10,
    },
  },
];

export const InsuranceTypes = () => {
  return (
    <div className="bg-gray-50 p-10 min-h-screen">
      <div className="container mx-auto text-center">
        <Typography variant="h3" className="mb-6 font-bold text-blue-600">
          Available Insurance Types
        </Typography>

        <div className="mb-10">
          <Typography variant="h5" className="mb-4 text-blue-500">
            Explore the Different Insurance Options We Offer
          </Typography>
          <Typography className="text-lg text-gray-600">
            Discover the various insurance types we offer. Each insurance type
            is designed to protect you and your property in different ways.
            Click on any insurance type to view available products.
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insuranceTypes.map((insurance, index) => (
            <Card
              key={index}
              className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <Typography
                variant="h6"
                className="mb-4 text-blue-600 font-semibold text-center"
              >
                {insurance.title}
              </Typography>

              <div className="mb-4 text-gray-600">
                <p>
                  <strong>What is this insurance?</strong>{" "}
                  {insurance.description.whatIs}
                </p>
                <p>
                  <strong>What is it for?</strong>{" "}
                  {insurance.description.purpose}
                </p>
                <p>
                  <strong>Who can be a customer?</strong>{" "}
                  {insurance.description.customers}
                </p>
                <p>
                  <strong>How many products?</strong>{" "}
                  {insurance.description.productCount} products available
                </p>
              </div>

              <Button
                color="blue"
                className="w-full mt-4"
                onClick={() => alert(`View products for ${insurance.title}`)}
              >
                View Products
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
