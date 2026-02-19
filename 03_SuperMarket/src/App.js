import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Offcanvas } from "./components/Offcanvas";
import { Footer } from "./components/Footer";
import { Dashboard } from "./components/Admin/Dashboard";
import { Contact } from "./components/Contact";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import React from 'react';



function App() {
  
console.log(React.version);
  return (
    <div className="app">
      <Navbar />
      <Offcanvas />
      <Routes>
        {/* User */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/about" element={<Contact />} />
        {/* Admin */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
