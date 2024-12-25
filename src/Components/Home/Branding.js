import React from "react";
import brandLogo1 from "../../Image/Branding/branding-1.png";
import brandLogo2 from "../../Image/Branding/branding-2.png";
import brandLogo3 from "../../Image/Branding/branding-3.png";
import brandLogo4 from "../../Image/Branding/branding-4.png";
import brandLogo5 from "../../Image/Branding/branding-5.png";
import brandLogo6 from "../../Image/Branding/branding-6.png";
import brandLogo7 from "../../Image/Branding/branding-7.png";
import brandLogo8 from "../../Image/Branding/branding-8.png";
import Marquee from "react-fast-marquee";

const Branding = () => {
  const brandLogoData = [
    { id: 1, image: brandLogo1 },
    { id: 2, image: brandLogo2 },
    { id: 3, image: brandLogo3 },
    { id: 4, image: brandLogo4 },
    { id: 5, image: brandLogo5 },
    { id: 6, image: brandLogo6 },
    { id: 7, image: brandLogo7 },
    { id: 8, image: brandLogo8 },
    { id: 9, image: brandLogo1 },
    { id: 10, image: brandLogo2 },
    { id: 11, image: brandLogo3 },
    { id: 12, image: brandLogo4 },
    { id: 13, image: brandLogo5 },
    { id: 14, image: brandLogo6 },
    { id: 15, image: brandLogo7 },
    { id: 16, image: brandLogo8 },
  ];
  return (
    <main>
      <section className="w-full h-full bg-[#1b1b1b] body-font GeologicaFont">
        <div className="xl:w-[1230px] w-[100%] [@media(min-width:400px)]:px-5 px-0 [@media(min-width:400px)]:pt-[2rem] pt-[1.5rem] [@media(min-width:625px)]:pb-[2rem] pb-[0.5rem] mx-auto">
          <div className="w-[95%] mx-auto flex justify-center text-center text-white items-center">
            <p className="[@media(min-width:768px)]:text-[15px] [@media(min-width:640px)]:text-[14px] text-[12px]">
              Our Authors Have Been Featured In
            </p>
          </div>

          <div className="w-full [@media(min-width:400px)]:h-[90px] h-[60px] flex items-center [@media(min-width:400px)]:mt-[1rem] mt-[0.8rem] relative">
            <Marquee className="z-0">
              {brandLogoData.map((key) => {
                return (
                  <div
                    key={key.id}
                    className={`[@media(min-width:625px)]:w-[65px] [@media(min-width:400px)]:w-[55px] w-[40px] [@media(min-width:625px)]:mr-[45px] [@media(min-width:400px)]:mr-[35px] mr-[25px] shadow-[0px_0px_6px_0px_#0000000f]`}
                  >
                    <img src={key.image} className="w-full" alt="" />
                  </div>
                );
              })}
            </Marquee>
            <div className="[@media(min-width:550px)]:w-[100px] [@media(min-width:400px)]:w-[80px] w-[50px] [@media(min-width:400px)]:h-[90px] h-[60px] absolute top-0 left-0 bg-gradient-to-r from-[#1b1b1b] z-[10]"></div>
            <div className="[@media(min-width:550px)]:w-[100px] [@media(min-width:400px)]:w-[80px] w-[50px] [@media(min-width:400px)]:h-[90px] h-[60px] absolute top-0 right-0 bg-gradient-to-l from-[#1b1b1b] z-[10]"></div>
          </div>
        </div>
      </section>

      <div className="relative w-full bg-[#fff] text-black ">
        <div className="xl:w-[1100px] w-[100%] flex flex-wrap justify-around items-center mx-auto [@media(min-width:600px)]:py-[2rem] py-[2rem]">
          <div className="flex flex-col items-center text-center [@media(min-width:600px)]:w-[220px] w-[100%] py-[1rem]">
            <p className="[@media(min-width:920px)]:text-[45px] [@media(min-width:660px)]:text-[40px] [@media(min-width:430px)]:text-[33px] text-[27px] font-[700] Poppins">
              150+
            </p>
            <p className="[@media(min-width:920px)]:text-[18px] [@media(min-width:660px)]:text-[16px] text-[15px] font-[500] w-full [@media(min-width:920px)]:leading-[22px] leading-[19px] mx-auto KarlaFont">
              BOOKS
              <br /> PUBLISHED
            </p>
          </div>
          <div className="flex flex-col items-center text-center [@media(min-width:600px)]:w-[220px] w-[100%] py-[1rem]">
            <p className="[@media(min-width:920px)]:text-[45px] [@media(min-width:660px)]:text-[40px] [@media(min-width:430px)]:text-[33px] text-[27px] font-[700] Poppins">
              150+
            </p>
            <p className="[@media(min-width:920px)]:text-[18px] [@media(min-width:660px)]:text-[16px] text-[15px] font-[500] w-full [@media(min-width:920px)]:leading-[22px] leading-[19px] mx-auto KarlaFont">
              #1 BESTSELLERS
              <br />
              ACHIEVED
            </p>
          </div>
          <div className="flex flex-col items-center text-center [@media(min-width:600px)]:w-[220px] w-[100%] py-[1rem]">
            <p className="[@media(min-width:920px)]:text-[45px] [@media(min-width:660px)]:text-[40px] [@media(min-width:430px)]:text-[33px] text-[27px] font-[700] Poppins">
              33+
            </p>
            <p className="[@media(min-width:920px)]:text-[18px] [@media(min-width:660px)]:text-[16px] text-[15px] font-[500] w-full [@media(min-width:920px)]:leading-[22px] leading-[19px] mx-auto KarlaFont">
              INTERNATIONAL #1
              <br /> BESTSELLERS ACHIEVED
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Branding;
