import { Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/Auth";
import { Home } from "./pages/Home/Home";
import { AboutUs } from "./pages/About";
import { ContactUs } from "./pages/Contact";
import { InsuranceTypes } from "./pages/Insurance";
import Profile from "./pages/Profile/Profile";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/insurance-types" element={<InsuranceTypes />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
