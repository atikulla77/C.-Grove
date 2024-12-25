import React from "react";
import "../App.css"
import Navber from "../Components/Navbar/Navbar";
import HomeComponents from "../Components/Home/HomeComponents";
import Branding from "../Components/Home/Branding";
import Footer from "../Components/Footer/Footer";
import Portfolio from "../Components/Home/Portfolio";

const Home = () => {
  return (
    <div className="w-full h-[100%] bg-[#fff] [@media(min-width:420px)]:pt-[5rem] pt-[4.5rem] scrollbar-hide">

      <Navber />
      <HomeComponents />
      <Branding />
      <Portfolio />
      <Footer />
      
    </div>
  );
};

export default Home;
