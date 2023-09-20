import React from "react";
import Navbar from "../navbar";
import Home from "../home/home";
import About from "../about/about";
import Settings from "../settings/settings";
import { Routes, Route } from "react-router-dom";

//Landing Page
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="absolute top-10 flex w-full p-2 justify-items-center">
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default LandingPage;
