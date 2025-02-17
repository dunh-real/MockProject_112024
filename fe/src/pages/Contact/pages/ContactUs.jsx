import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let error = "";
    if (name === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
      error = "Please enter a valid email address.";
    } else if (value.trim() === "") {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    }
    setFormErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formErrors).some((error) => error !== "")) {
      alert("Please fix the errors in the form.");
      return;
    }
    console.log(formData);
    alert("Message Sent!");
  };

  return (
    <div className="bg-gray-50 p-10 min-h-screen">
      <div className="container mx-auto text-center">
        <div className="mb-12">
          <Typography variant="h5" className="mb-4 text-blue-500">
            We'd love to hear from you!
          </Typography>
          <Typography className="text-lg text-gray-600">
            Whether you have questions or need assistance, we're here to help.
            Fill out the form below or contact us directly.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Typography
                variant="h6"
                className="mb-4 text-blue-600 font-semibold"
              >
                Contact Information
              </Typography>
              <div className="space-y-4">
                <Typography className="text-gray-600">
                  <strong>Address:</strong> 123 Real Estate St, City, Country
                </Typography>
                <Typography className="text-gray-600">
                  <strong>Phone:</strong> (123) 456-7890
                </Typography>
                <Typography className="text-gray-600">
                  <strong>Email:</strong> contact@realestateinsurance.com
                </Typography>
              </div>
            </Card>

            <Card className="shadow-lg">
              <div className="w-full h-60 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed/v1/place?q=Place+Name&key=YOUR_GOOGLE_MAPS_API_KEY"
                  allowFullScreen
                  title="map"
                ></iframe>
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Typography
                variant="h6"
                className="mb-4 text-blue-600 font-semibold"
              >
                Send Us a Message
              </Typography>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    error={formErrors.name}
                    className="w-full"
                  />
                  {formErrors.name && (
                    <Typography className="text-red-500 text-sm mt-1">
                      {formErrors.name}
                    </Typography>
                  )}
                </div>

                <div>
                  <Input
                    label="Your Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    error={formErrors.email}
                    className="w-full"
                  />
                  {formErrors.email && (
                    <Typography className="text-red-500 text-sm mt-1">
                      {formErrors.email}
                    </Typography>
                  )}
                </div>

                <div>
                  <Input
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    error={formErrors.subject}
                    className="w-full"
                  />
                  {formErrors.subject && (
                    <Typography className="text-red-500 text-sm mt-1">
                      {formErrors.subject}
                    </Typography>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Your message..."
                    className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  {formErrors.message && (
                    <Typography className="text-red-500 text-sm mt-1">
                      {formErrors.message}
                    </Typography>
                  )}
                </div>

                <Button
                  type="submit"
                  color="blue"
                  className="w-full py-3 mt-4 text-white text-lg hover:bg-blue-700 transition duration-200"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
