import React from "react";

const Books = () => {
  return (
    <main className={`w-full h-full relative`}>
      <div className="w-full pt-[2rem] [@media(min-width:420px)]:pb-[3rem] pb-[2rem]">
        <div className="w-full text-center text-black relative z-10 pb-[30px]">
          <h1 className="[@media(min-width:750px)]:text-[40px] [@media(min-width:420px)]:text-[30px] text-[25px] font-[700] [@media(min-width:750px)]:pb-[10px] pb-[5px] Poppins">
            Books
          </h1>
          <p className="text-[#ffa200] [@media(min-width:750px)]:text-[15px] [@media(min-width:420px)]:text-[14px] text-[13px] font-[500] mx-auto">
            Take A Look At Our Latest Books
          </p>
        </div>
        <div
          className={`w-[98%] h-[100%] flex justify-center items-center mx-auto`}
        >
          <div className=" xl:w-[1230px] w-[96%] relative z-[1] flex flex-col justify-center items-center">
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default Books;
