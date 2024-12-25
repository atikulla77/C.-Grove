import React from "react";
import { useState } from "react";

import Logo1 from "../../Image/Portfolio/Logo/item_1.jpg";
import Logo2 from "../../Image/Portfolio/Logo/item_2.jpg";
import Logo3 from "../../Image/Portfolio/Logo/item_3.jpg";

import BooksCoverDesign1 from "../../Image/Portfolio/BooksCoverDesign/item_4.jpg";
import BooksCoverDesign2 from "../../Image/Portfolio/BooksCoverDesign/item_5.jpg";
import BooksCoverDesign3 from "../../Image/Portfolio/BooksCoverDesign/item_6.jpg";

import webDesign1 from "../../Image/Portfolio/Web_Design/1_PixPix_ScreenShot.png";
import webDesign2 from "../../Image/Portfolio/Web_Design/2_Kitoo_ScreenShot.png";
import webDesign3 from "../../Image/Portfolio/Web_Design/3_Leadbie_ScreenShot.png";
import webDesign4 from "../../Image/Portfolio/Web_Design/4_DevDock_ScreenShot.png";
import webDesign5 from "../../Image/Portfolio/Web_Design/5_WebstreX_ScreenShot.png";
import webDesign6 from "../../Image/Portfolio/Web_Design/6_SparxDev_ScreenShot.png";

import fullViewDesign1 from "../../Image/Portfolio/Web_Design/1_PixPix_Full_Web_View.png";
import fullViewDesign2 from "../../Image/Portfolio/Web_Design/2_Kitoo_Full_Web_View.png";
import fullViewDesign3 from "../../Image/Portfolio/Web_Design/3_Leadbie_Full_Web_View.png";
import fullViewDesign4 from "../../Image/Portfolio/Web_Design/4_DevDock_Full_Web_View.png";
import fullViewDesign5 from "../../Image/Portfolio/Web_Design/5_WebstreX_Full_Web_View.png";
import fullViewDesign6 from "../../Image/Portfolio/Web_Design/6_SparxDev_Full_Web_View.png";

import { FaArrowRight } from "react-icons/fa6";

const Protfolio = () => {
  // OnClick to protfolio image
  const [showPopUpImg, setshowPopUpImg] = useState(false);
  const [popUpImg, setpopUpImg] = useState(Logo1);

  const OnClickToShowAndSetPopUpImg = (x) => {
    setpopUpImg(x);
    setshowPopUpImg(true);
  };

  const LogoCatagoryCard = [
    {
      id: 1_1,
      img: Logo1,
      catagoryName: "Coffee Cup Design",
    },
    {
      id: 1_2,
      img: Logo2,
      catagoryName: "T-Shirt Design",
    },
    {
      id: 1_3,
      img: Logo3,
      catagoryName: "3D Bag Mockup",
    },
  ];
  const WebDesignCatagoryCard = [
    {
      id: 1,
      img: webDesign1,
      name: "PixPix",
      fullView: fullViewDesign1,
      link: "https://pixpix.vercel.app/",
    },
    {
      id: 2,
      img: webDesign2,
      name: "Kitoo",
      fullView: fullViewDesign2,
      link: "https://kitoo-zeta.vercel.app/",
    },
    {
      id: 3,
      img: webDesign3,
      name: "LeadBie",
      fullView: fullViewDesign3,
      link: "https://leadbie.vercel.app/",
    },
    {
      id: 4,
      img: webDesign4,
      name: "DevDock",
      fullView: fullViewDesign4,
      link: "https://devdockui.vercel.app/",
    },
    {
      id: 5,
      img: webDesign5,
      name: "WebstreX",
      fullView: fullViewDesign5,
      link: "https://webstrex.vercel.app/",
    },
    {
      id: 6,
      img: webDesign6,
      name: "SparxDev",
      fullView: fullViewDesign6,
      link: "https://sparxdev.vercel.app/",
    },
  ];
  const BooksCoverDesignCatagoryCard = [
    { id: 3_1, img: BooksCoverDesign1, catagoryName: "Packaging Box Mockup" },
    { id: 3_2, img: BooksCoverDesign2, catagoryName: "Modern Bag Design" },
    { id: 3_3, img: BooksCoverDesign3, catagoryName: "Label Tag Mockup" },
  ];
  const AllCatagoryCard = [
    ...LogoCatagoryCard,
    // ...WebDesignCatagoryCard,
    ...BooksCoverDesignCatagoryCard,
  ];

  const [Catagory, setCatagory] = useState(AllCatagoryCard);
  // ********************************************************
  const [onClickProjectLi1, setOnClickProjectLi1] = useState(true);
  const [onClickProjectLi2, setOnClickProjectLi2] = useState(false);
  const [onClickProjectLi3, setOnClickProjectLi3] = useState(false);
  const [onClickProjectLi4, setOnClickProjectLi4] = useState(false);

  const HandleProjectLi1 = () => {
    setOnClickProjectLi1(true);
    setOnClickProjectLi2(false);
    setOnClickProjectLi3(false);
    setOnClickProjectLi4(false);
    setCatagory(AllCatagoryCard);
  };
  const HandleProjectLi2 = () => {
    setOnClickProjectLi1(false);
    setOnClickProjectLi2(true);
    setOnClickProjectLi3(false);
    setOnClickProjectLi4(false);
    setCatagory(LogoCatagoryCard);
  };
  const HandleProjectLi3 = () => {
    setOnClickProjectLi1(false);
    setOnClickProjectLi2(false);
    setOnClickProjectLi3(true);
    setOnClickProjectLi4(false);
    setCatagory(AllCatagoryCard);
  };
  const HandleProjectLi4 = () => {
    setOnClickProjectLi1(false);
    setOnClickProjectLi2(false);
    setOnClickProjectLi3(false);
    setOnClickProjectLi4(true);
    setCatagory(BooksCoverDesignCatagoryCard);
  };

  return (
    <main className={`w-[100%] h-[100%] flex relative GeologicaFont bg-[#fff]`}>
      <div className="xl:w-[1230px] w-[100%] h-[100%] mx-auto flex flex-col Quicksand ">
        <div className="w-full text-center text-black relative z-10 [@media(min-width:530px)]:pb-[25px] pb-[15px] pt-[4.5rem]">
          <h1 className="[@media(min-width:530px)]:text-[30px] sm4:text-[25px] text-[22px] font-semibold">
            Projects
          </h1>
          <p className="text-[#03bfff] [@media(min-width:450px)]:text-[13px] text-[12px] mx-auto pt-[5px]">
            Take A Look At Our Latest Portfolio
          </p>
        </div>

        <div className="flex items-center justify-center text-center w-[95%]  mx-auto protfolio-Scroll-bar ">
          <ul className="flex flex-wrap justify-center pb-[5px] font-[400]">
            <li
              className={`pb-[3px] [@media(min-width:450px)]:w-[35px] w-[27px] [@media(min-width:530px)]:text-[15px] [@media(min-width:450px)]:text-[14px] text-[13px] cursor-pointer  my-[5px] mx-[8px] ${
                onClickProjectLi1 === true
                  ? "text-[#03bfff] border-b-[2px] border-b-[#03bfff]"
                  : "text-[#000] hover:text-[#03bfff] border-b-[2px] border-b-[#ffffff00] hover:border-b-[#03bfff] transition-[0.1s]"
              }`}
              onClick={HandleProjectLi1}
            >
              All
            </li>

            <li
              className={`pb-[3px] [@media(min-width:530px)]:w-[50px] w-[45px] [@media(min-width:530px)]:text-[15px] [@media(min-width:450px)]:text-[14px] text-[13px] cursor-pointer  my-[5px] mx-[8px] ${
                onClickProjectLi2 === true
                  ? "text-[#03bfff] border-b-[2px] border-b-[#03bfff]"
                  : "text-[#000] hover:text-[#03bfff] border-b-[2px] border-b-[#ffffff00] hover:border-b-[#03bfff] transition-[0.1s]"
              }`}
              onClick={HandleProjectLi2}
            >
              Logo
            </li>
            <li
              className={`pb-[3px] [@media(min-width:530px)]:w-[100px] w-[85px] [@media(min-width:530px)]:text-[15px] [@media(min-width:450px)]:text-[14px] text-[13px] cursor-pointer my-[5px] mx-[8px] ${
                onClickProjectLi3 === true
                  ? "text-[#03bfff] border-b-[2px] border-b-[#03bfff]"
                  : "text-[#000] hover:text-[#03bfff] border-b-[2px] border-b-[#ffffff00] hover:border-b-[#03bfff] transition-[0.1s]"
              }`}
              onClick={HandleProjectLi3}
            >
              Web Design
            </li>
            <li
              className={`pb-[3px] [@media(min-width:530px)]:w-[150px] w-[136px] [@media(min-width:530px)]:text-[15px] [@media(min-width:450px)]:text-[14px] text-[13px] cursor-pointer my-[5px] mx-[8px] ${
                onClickProjectLi4 === true
                  ? "text-[#03bfff] border-b-[2px] border-b-[#03bfff]"
                  : "text-[#000] hover:text-[#03bfff] border-b-[2px] border-b-[#ffffff00] hover:border-b-[#03bfff] transition-[0.1s]"
              }`}
              onClick={HandleProjectLi4}
            >
              Books Cover Design
            </li>
          </ul>
        </div>
        {/* Logo -- Web Design -- Books Cover Design */}
        <div
          className={`${
            onClickProjectLi3 ? "hidden" : "flex"
          } flex-wrap justify-center items-center w-full [@media(min-width:450px)]:pt-[25px] pt-[10px] pb-[3rem] relative`}
        >
          {Catagory.map((catagory) => (
            <div key={catagory.id}>
              <label
              data-aos="fade-up"
                className={`[@media(min-width:450px)]:w-[380px] [@media(min-width:400px)]:w-[300px] w-[280px] h-[100%] overflow-hidden [@media(min-width:450px)]:mx-[15px] mx-0 my-[15px] relative flex justify-center items-center cursor-pointer shadow-[0px_0px_6px_0px_#0000000f]`}
              >
                <div 
                  onClick={() => {
                    OnClickToShowAndSetPopUpImg(catagory.img);
                  }}
                  className={`w-[100%] h-[100%] overflow-hidden portfolioCard`}
                >
                  <img
                    src={catagory.img} 
                    className="w-[100%] cursor-pointer"
                    alt=""
                  />
                  {/* <div className="absolute top-0 left-0 right-0 w-full h-full bg-transparent hover:bg-[#000000d2] flex-col justify-center items-center transition-[0.5s] text-black portfolioCardImgInfo">
                    <p className="text-[15px] font-[400]">
                      {catagory.catagoryName}
                    </p>
                    <p className="text-[13px] font-[400] text-[#03bfff] pt-[7px]">
                      More Info
                    </p>
                  </div> */}
                </div>
              </label>
            </div>
          ))}
        </div>

        {/* Web Design */}
        <div
          className={`${
            onClickProjectLi3 ? "flex" : "hidden"
          } flex-wrap justify-center items-center w-full [@media(min-width:450px)]:pt-[25px] pt-[10px] pb-[3rem] relative`}
        >
          {WebDesignCatagoryCard.map((catagory) => (
            <div key={catagory.id} className="">
              <label
                htmlFor={`my_modal_${catagory.id}`}
                data-aos="fade-up"
                className="[@media(min-width:430px)]:w-[365px] [@media(min-width:350px)]:w-[320px] w-[300px] [@media(min-width:430px)]:h-[205px] [@media(min-width:350px)]:h-[180px] h-[170px] rounded-[10px] bg-[#261856] overflow-hidden projectCardAnimation mb-[30px] relative flex justify-center items-center cursor-pointer shadow-[0px_0px_6px_0px_#0000000f] mx-[10px]"
              >
                <div className="w-[100%] h-[100%] rounded-[10px] overflow-hidden">
                  <img
                    src={catagory.img}
                    className="w-[100%] cursor-pointer"
                    alt=""
                  />
                </div>
                <div className="absolute bottom-0 left-0 [@media(min-width:430px)]:h-[60px] h-[40px] w-[100%] text-left flex justify-left items-end bg-gradient-to-t from-[#000000ab] text-white mb-[-3px]">
                  <p className="px-[25px] [@media(min-width:430px)]:text-[14px] [@media(min-width:350px)]:text-[13px] text-[12px] pl-[10px] pb-[8px]">
                    {catagory.name}
                  </p>
                </div>
                <a
                  href={catagory.link}
                  target="_blank"
                  className="absolute bottom-0 right-0 h-[30px] [@media(min-width:430px)]:w-[95px] w-[88px] [@media(min-width:430px)]:hover:w-[101px] hover:w-[95px] text-right flex justify-end items-end text-white mb-[-3px] cursor-pointer transition-[0.3s]"
                >
                  <p className="[@media(min-width:430px)]:text-[13px] text-[12px] pr-[10px] pb-[8px] flex items-center justify-between w-full">
                    <span>Live Demo</span>
                    <FaArrowRight className="[@media(min-width:430px)]:text-[14px] [@media(min-width:350px)]:text-[13px] text-[12px]" />
                  </p>
                </a>
              </label>
              <input
                type="checkbox"
                id={`my_modal_${catagory.id}`}
                className="modal-toggle"
              />
              <div className="modal GeologicaFont " role="dialog">
                <div className="modal-box [@media(min-width:640px)]:px-[1rem] px-[5px] [@media(min-width:640px)]:py-[1rem] py-[5px] max-w-[55rem] [@media(min-width:640px)]:!h-[30rem] [@media(min-width:480px)]:h-[22rem] h-[18rem] bg-[#fffffff0] !rounded-none cursor-default scrollbar-hide"  data-aos="zoom-in">
                  <div className="w-full overflow-y-hidden relative">
                    <img src={catagory.fullView} className="w-[100%]" alt="" />
                    <div className="absolute bottom-0 right-0 [@media(min-width:640px)]:h-[30px] h-[25px] [@media(min-width:360px)]:w-[100px] w-[90px] bg-[#fff] text-right flex justify-start items-end pl-[10px] ">
                    <a
                      href={catagory.link}
                      target="_blank"
                      className="h-[100%] [@media(min-width:640px)]:w-[85px] [@media(min-width:475px)]:w-[80px] [@media(min-width:360px)]:w-[70px] w-[65px] [@media(min-width:640px)]:hover:w-[101px] [@media(min-width:475px)]:hover:w-[85px] [@media(min-width:360px)]:hover:w-[75px] hover:w-[70px] cursor-pointer text-right flex justify-start items-center transition-[0.3s] "
                    >
                      <p className="[@media(min-width:640px)]:text-[13px] [@media(min-width:475px)]:text-[12px] [@media(min-width:360px)]:text-[11px] text-[10px] flex items-center justify-between w-full text-black">
                        <span>Live Demo</span>{" "}
                        <FaArrowRight className="[@media(min-width:640px)]:text-[14px] [@media(min-width:475px)]:text-[13px] [@media(min-width:360px)]:text-[11px] text-[10px]" />
                      </p>
                    </a>
                  </div>
                  </div>
                  
                </div>
                <label
                  className="modal-backdrop"
                  htmlFor={`my_modal_${catagory.id}`}
                >
                  Close
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop Up Img */}
      <div
        className={`w-[100%] h-[100vh] fixed top-0 left-0 right-0 ${
          showPopUpImg ? `${onClickProjectLi3 ? "hidden" : "flex"}` : "hidden"
        } justify-center items-center z-50 bg-[#000000d2]`}
      >
        <img  data-aos="zoom-in"
          src={popUpImg}
          className="[@media(min-width:800px)]:!w-auto [@media(min-width:700px)]:w-[35rem] w-[30rem] [@media(min-width:800px)]:h-full h-auto mx-auto absolute right-0 left-0 py-[8px] z-[29]"

        />

        <div
          onClick={() => {
            setshowPopUpImg(false);
          }}
          className="w-full h-full relative z-[28]"
        >
          <p
            onClick={() => {
              setshowPopUpImg(false);
            }}
            className={`[@media(min-width:555px)]:w-[35px] w-[25px] [@media(min-width:555px)]:h-[35px] h-[25px] flex [@media(min-width:555px)]:text-[45px] text-[35px] text-white rotate-[45deg] text-center justify-center items-center absolute [@media(min-width:555px)]:top-[1rem] top-[23px] [@media(min-width:555px)]:right-[1rem] right-[14px] cursor-pointer z-[29]`}
          >
            +
          </p>
        </div>
      </div>
    </main>
  );
};

export default Protfolio;
