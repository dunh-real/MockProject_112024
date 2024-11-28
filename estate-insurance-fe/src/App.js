import { Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/Auth";
import { Home } from "./pages/Home/Home";
import { AboutUs } from "./pages/About";
import { ContactUs } from "./pages/Contact";
import { InsuranceTypes } from "./pages/Insurance";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/insurance-types" element={<InsuranceTypes />} />
      </Routes>
    </div>
  );
}

export default App;
