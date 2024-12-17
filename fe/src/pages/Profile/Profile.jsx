import React, { useState } from "react";
import {
  Card,
  Typography,
  Input,
  Button,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import { Navbar } from "../../components/Navbar";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    workingAddress: "",
    livingAddress: "",
  });

  const handleProfileUpload = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleCoverUpload = (e) => {
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto py-10">
          <Card className="p-6">
            <Typography variant="h4" className="mb-4">
              Profile
            </Typography>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Cover Image */}
              <div
                className="relative w-full h-48 bg-cover bg-center rounded-lg mb-4"
                style={{
                  backgroundImage: `url(${
                    coverImage ||
                    "https://i.pinimg.com/474x/28/8f/82/288f82985709fed6986e02f7920c2877.jpg"
                  })`,
                }}
              >
                <label className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded cursor-pointer">
                  Upload Cover
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleCoverUpload}
                  />
                </label>
              </div>

              {/* Profile Image */}
              <div className="flex justify-center mb-4">
                <div
                  className="relative w-32 h-32 rounded-full bg-cover bg-center shadow-md"
                  style={{
                    backgroundImage: `url(${
                      profileImage ||
                      "https://i.pinimg.com/736x/99/da/09/99da09dd54a689895b6b61bfbab0070e.jpg"
                    })`,
                  }}
                >
                  <label className="absolute bottom-2 right-2 bg-blue-500 text-white px-2 py-1 text-sm rounded-full cursor-pointer">
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleProfileUpload}
                    />
                    Upload
                  </label>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <Select
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={(e) =>
                    handleChange({ target: { name: "gender", value: e } })
                  }
                  required
                >
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                  <Option value="Other">Other</Option>
                </Select>
                <Input
                  label="Birth Date"
                  name="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  label="Working Address"
                  name="workingAddress"
                  value={formData.workingAddress}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  label="Living Address"
                  name="livingAddress"
                  value={formData.livingAddress}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" color="blue" fullWidth>
                Save Profile
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Profile;
