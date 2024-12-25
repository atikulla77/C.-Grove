import { useState } from "react";
import "./App.css";
import Home from "./Page/Home";
import Design from "./Page/Design";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <div className="bg-[#fff] w-full h-[100%]  relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
      </Routes>
    </div>
  );
}

export default App;
