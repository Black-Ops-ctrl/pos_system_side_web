import React from "react";
import Navbar from "../components/common/NavBar";
import Slider from "../components/common/Slider";
import CategorySection from "../components/common/CategorySection"; 
import Footer from "../components/common/Footer";  

const HomePage = () => {
  return (
    <div className="min-h-screen bg-primary w-full mx-auto overflow-x-hidden">
      {/* Navbar Container */}
      <div className="px-4 sm:px-8 md:px-12 w-full">
        <Navbar />
      </div>
      
      {/* Main Content Container */}
      <div className="px-4 sm:px-8 md:px-12">
        <Slider />
        <CategorySection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;