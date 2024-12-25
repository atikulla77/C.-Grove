import { useState } from "react";
import logo from "../../Image/cgrove_logo.jpg";

import { HiOutlineMenu } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

function Navber() {
  //      ``````````````````
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 24) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const [nevMobileVButton, setNevMobileVButton] = useState(false);

  const navItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about-us",
    },
    {
      id: 3,
      name: "Reviews",
      link: "/reviews",
    },
    {
      id: 4,
      name: "Design",
      link: "/design",
    },
    {
      id: 5,
      name: "Speaking",
      link: "/speaking",
    },
    {
      id: 6,
      name: "Blog",
      link: "/blog",
    },
    {
      id: 7,
      name: "FAQs",
      link: "/faqs",
    },
  ];

  return (
    <div className={` w-full flex fixed top-[0px] z-50`}>
      <nav
        className={`text-[#000] w-full relative ${
          color
            ? "bg-[#ededed] shadow-[0px_0px_3px_0px_#0003]"
            : "bg-[#ededed] shadow-[0px_0px_3px_0px_#0003]"
        }`}
        style={{ transition: ".1s ease-in" }}
      >
        <div
          className="mx-auto container [@media(min-width:768px)]:px-[5px] px-[1rem]"
          // data-aos="fade-down"
        >
          <div className="h-[4.5rem] flex items-center justify-between w-full KarlaFont ">
            <Link to="/" className="flex items-center z-[2] relative">
              <img
                src={logo}
                className="w-[30px] select-none cursor-pointer rounded-[50%] mr-[6px]"
              />
              <p className="text-[16px] font-[500]">C. Grove</p>
            </Link>

            {/* ---------------Web Nav Item--------------- */}
            <div className="[@media(min-width:768px)]:flex hidden items-center justify-center text-[#000] mt-[5px]">
              <div className="flex sm:space-x-4 space-x-1">
                {navItems.map((key) => {
                  return (
                    <NavLink
                      key={key.id}
                      to={key.link}
                      className={({ isActive }) =>
                        isActive
                          ? "[@media(min-width:1024px)]:px-3 px-[5px] py-2 text-[15px] font-medium cursor-pointer text-[#03bfff] transition-[0.3s]"
                          : "[@media(min-width:1024px)]:px-3 px-[5px] py-2 text-[15px] font-medium cursor-pointer hover:text-[#03bfff] transition-[0.3s]"
                      }
                    >
                      {key.name}
                    </NavLink>
                  );
                })}
              </div>
            </div>

            {/* ---------------Mobile Nav Button--------------- */}
            <div
              className={`${
                nevMobileVButton
                  ? "hidden"
                  : "flex [@media(min-width:768px)]:hidden"
              } z-[2]`}
              onClick={() => setNevMobileVButton(true)}
            >
              <HiOutlineMenu className="[@media(min-width:420px)]:text-[25px] text-[22px] text-white" />
            </div>
            <div
              className={`${
                nevMobileVButton
                  ? "flex [@media(min-width:768px)]:hidden"
                  : "hidden"
              } z-[2]`}
              onClick={() => setNevMobileVButton(false)}
            >
              <p className="[@media(min-width:420px)]:text-[40px] text-[38px] rotate-[45deg] text-white">
                +
              </p>
            </div>
            {/* ---------------Mobile Nav Item--------------- */}
            <div
              className={`absolute top-0 right-0 w-[250px] h-[100vh] bg-[#1b1b1b] z-0 ${
                nevMobileVButton
                  ? `NavberMViewAnimationLeft flex [@media(min-width:768px)]:hidden`
                  : `NavberMViewAnimationRight flex [@media(min-width:768px)]:hidden`
              }`}
            >
              <div className="w-full h-full flex flex-col justify-start pl-[2.5rem] [@media(min-width:420px)]:pt-[6rem] pt-[5.5rem] text-white">
                {navItems.map((key) => {
                  return (
                    <NavLink
                      key={key.id}
                      to={key.link}
                      className={({ isActive }) =>
                        isActive
                          ? "sm:px-3 px-[5px] py-2 [@media(min-width:420px)]:text-base text-[14px] font-medium cursor-pointer block text-[#03bfff]"
                          : "sm:px-3 px-[5px] py-2 [@media(min-width:420px)]:text-base text-[14px] font-medium cursor-pointer block hover:text-[#03bfff]"
                      }
                      onClick={() => setNevMobileVButton(false)}
                    >
                      {key.name}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navber;
