import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export const AboutUs = () => {
  return (
    <div className="bg-gray-100 p-10 min-h-screen">
      <div className="container mx-auto text-center">
        <Typography variant="h3" className="mb-6 font-bold text-blue-500">
          About Us
        </Typography>
        <Typography variant="lead" className="mb-12 text-gray-600">
          We are dedicated to providing the best real estate insurance solutions
          that help protect your property and investments. Our goal is to ensure
          peace of mind for property owners with comprehensive coverage and
          tailored services.
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="max-w-sm mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardBody>
              <Typography variant="h5" className="mb-2 text-blue-500">
                Our Mission
              </Typography>
              <Typography className="text-gray-600">
                To provide reliable and affordable real estate insurance
                solutions that cater to the needs of individual property owners
                and businesses alike.
              </Typography>
            </CardBody>
          </Card>

          <Card className="max-w-sm mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardBody>
              <Typography variant="h5" className="mb-2 text-blue-500">
                Our Vision
              </Typography>
              <Typography className="text-gray-600">
                To be the leading provider of real estate insurance, helping
                clients safeguard their properties while building long-lasting
                relationships based on trust and integrity.
              </Typography>
            </CardBody>
          </Card>

          <Card className="max-w-sm mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardBody>
              <Typography variant="h5" className="mb-2 text-blue-500">
                Our Values
              </Typography>
              <Typography className="text-gray-600">
                Integrity, customer-first approach, transparency, and
                professionalism are the cornerstones of our business. We
                prioritize our clients' needs and work to deliver the best
                possible coverage and service.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
