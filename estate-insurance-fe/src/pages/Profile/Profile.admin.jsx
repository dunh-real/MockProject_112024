import React, { useState } from "react";
import {
    Container,
    Grid,
    Paper,
    Typography,
    TextField,
    Button,
    MenuItem,
    InputLabel,
    Select,
    FormControl,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { Navbar } from "../../components/Navbar";

const UploadButton = styled(Button)({
    position: "relative",
    overflow: "hidden",
    '& input[type="file"]': {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0,
        cursor: "pointer",
    },
});

const ProfileForm = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        birthDate: "",
        workingAddress: "",
        livingAddress: ""
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
            <Container style={{ margin: 0, padding: 0, maxWidth: "100%", border: "none" }}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 0 }}>
                    <Typography variant="h4" gutterBottom>
                        Profile
                    </Typography>
                    {/* <Typography variant="subtitle1" gutterBottom>
                    Create Profile
                </Typography> */}
                    <form onSubmit={handleSubmit}>
                        {/* Cover Image */}
                        <Paper
                            sx={{
                                height: 200,
                                backgroundImage: `url(${coverImage || "https://i.pinimg.com/474x/28/8f/82/288f82985709fed6986e02f7920c2877.jpg"})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "relative",
                                mb: 2,
                            }}
                        >
                            <UploadButton variant="contained" sx={{ position: "absolute", top: 16, right: 16 }}>
                                Upload Cover
                                <input type="file" onChange={handleCoverUpload} />
                            </UploadButton>
                        </Paper>
                        {/* Profile Image */}
                        <Grid container justifyContent="center" sx={{ mb: 3 }}>
                            <Paper
                                elevation={3}
                                sx={{
                                    width: 140,
                                    height: 140,
                                    borderRadius: "50%",
                                    backgroundImage: `url(${profileImage || "https://i.pinimg.com/736x/99/da/09/99da09dd54a689895b6b61bfbab0070e.jpg"})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    position: "relative",
                                }}
                            >
                                <UploadButton
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        position: "absolute",
                                        bottom: 8,
                                        right: 8,
                                        borderRadius: "50%",
                                    }}
                                >
                                    <input type="file" onChange={handleProfileUpload} />
                                    Upload
                                </UploadButton>
                            </Paper>
                        </Grid>
                        {/* Form Fields */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="First Name"
                                    fullWidth
                                    variant="outlined"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Last Name"
                                    fullWidth
                                    variant="outlined"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel>Gender</InputLabel>
                                    <Select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                    >
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Birth Date"
                                    type="date"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    name="birthDate"
                                    value={formData.birthDate}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Working address"
                                    fullWidth
                                    variant="outlined"
                                    name="workingAddress"
                                    value={formData.workingAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Living address"
                                    fullWidth
                                    variant="outlined"
                                    name="livingAddress"
                                    value={formData.livingAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{ mt: 2 }}
                                >
                                    Save Profile
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </>
    );
};

export default ProfileForm;
