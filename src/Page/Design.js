import React from "react";
import Navber from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import DesignHome from "../Components/Design/DesignHome";

const Protfolio = () => {
  

  return (
    <div className="w-full h-[100%] bg-[#fff] [@media(min-width:420px)]:pt-[5rem] pt-[4.5rem] scrollbar-hide">

      <Navber />
      <DesignHome />
      <Footer />
      
    </div>
  );
};

export default Protfolio;
