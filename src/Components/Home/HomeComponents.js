import React from "react";
import image from "../../Image/info-img.jpg";
import { FaStar } from "react-icons/fa6";

const HomeComponents = () => {
  return (
    <main className={`w-full h-full relative GeologicaFont`}>
      <div className="w-full [@media(min-width:380px)]:pt-[4.5rem] pt-[3rem] [@media(min-width:420px)]:pb-[3rem] pb-[2rem]">
        <div
          className={`w-[98%] h-[100%] flex justify-center items-center mx-auto`}
        >
          <div className=" xl:w-[1230px] w-[96%] relative z-[1] flex flex-col justify-center items-center KarlaFont">
            <div className="flex [@media(min-width:920px)]:flex-row flex-col items-center w-full [@media(min-width:920px)]:h-[507px] justify-around text-black z-10">
              <div className="[@media(min-width:460px)]:!w-[420px] [@media(min-width:380px)]:w-[360px] w-[300px] [@media(min-width:460px)]:!h-[507px] [@media(min-width:380px)]:h-[447px] h-[387px] overflow-hidden [@media(min-width:920px)]:mx-0 mx-auto relative shadow-[0px_0px_4px_0px_#0000002e]">
                <div className="h-full max-h-full flex justify-center items-center relative overflow-hidden">
                  <img
                    src={image}
                    className={`w-full h-[100%] object-cover mx-auto`}
                    alt=""
                  />
                </div>
              </div>
              <div className="[@media(min-width:920px)]:w-[55%] w-full h-full grid items-center text-black text-left [@media(min-width:920px)]:!mt-[0px] [@media(min-width:400px)]:mt-[3.5rem] mt-[2rem] [@media(min-width:920px)]:!px-0 [@media(min-width:560px)]:px-[2rem] [@media(min-width:400px)]:px-[1rem] px-[0.3rem] relative [@media(min-width:920px)]:ml-[2rem] ml-0">
                <div className="w-full h-auto">
                  <div className="w-full [@media(min-width:560px)]:pb-[15px] pb-[12px]">
                    <h1 className="[@media(min-width:920px)]:!text-[35px] [@media(min-width:400px)]:text-[28px] text-[22px] font-[700] tracking-[1px] [@media(min-width:400px)]:leading-[41px] leading-[31px] InterFont text-[#000] pb-[8px]">
                      Schedule your book consultation now...
                    </h1>
                    <p className="[@media(min-width:560px)]:text-[18px] [@media(min-width:400px)]:text-[14px] text-[13px] font-[600] text-[#000000c7] uppercase">
                      - TAKE ACTION TODAY
                    </p>
                  </div>
                  <div className="[@media(min-width:560px)]:text-[18px] [@media(min-width:400px)]:text-[15px] text-[14px] font-[400] text-[#000000] [@media(min-width:400px)]:leading-[30px] leading-[25px] z-10 relative border-b-[2px] border-b-[#ffffff14] pb-[10px]">
                    <p>
                      Sit down with International Best-selling author Everett
                      O'Keefe to discuss your book idea and what a book can do
                      for your brand and business.
                    </p>
                    <p className="pt-[10px]">
                      During your consultation, you can discuss:
                    </p>
                    <div className="pt-[10px] pl-[10px]">
                      <div className="flex items-center pb-[8px]">
                        <FaStar className="[@media(min-width:560px)]:text-[19px] text-[15px] mr-[8px] text-[#ffa200d4]" />
                        <p>Bestseller Campaigns!</p>
                      </div>
                      <div className="flex items-center pb-[8px]">
                        <FaStar className="[@media(min-width:560px)]:text-[19px] text-[15px] mr-[8px] text-[#ffa200d4]" />
                        <p>Titles and Subtitles!</p>
                      </div>
                      <div className="flex items-center pb-[8px]">
                        <FaStar className="[@media(min-width:560px)]:text-[19px] text-[15px] mr-[8px] text-[#ffa200d4]" />
                        <p>Cover Ideas and Options!</p>
                      </div>
                      <div className="flex items-center pb-[8px]">
                        <FaStar className="[@media(min-width:560px)]:text-[19px] text-[15px] mr-[8px] text-[#ffa200d4]" />
                        <p>Book Creation Strategies!</p>
                      </div>
                      <div className="flex items-center pb-[8px]">
                        <FaStar className="[@media(min-width:560px)]:text-[19px] text-[15px] mr-[8px] text-[#ffa200d4]" />
                        <p>Much, more!</p>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <button className="[@media(min-width:560px)]:text-[18px] [@media(min-width:400px)]:text-[15px] text-[14px] font-[400] text-[#ffffff] hover:text-black bg-[#ffa200] hover:bg-transparent border-[2px] border-[#ffa200] py-[7px] px-[25px] rounded-[5px] transition-[0.3s] shadow-[0px_0px_4px_0px_#00000038]">
                      Book Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeComponents;
