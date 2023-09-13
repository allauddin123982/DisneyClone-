import React, { useState } from "react";
import logo from "../Images/disneylogo.png";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { HiStar, HiDotsVertical } from "react-icons/hi";
import HeaderItems from "./HeaderItems";
import profile from "../Images/profilepic.png";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "Home",
      icon: AiFillHome,
    },
    {
      name: "Search",
      icon: AiOutlineSearch,
    },
    {
      name: "Original",
      icon: HiStar,
    },
    {
      name: "WatchList",
      icon: GrAdd,
    },
    {
      name: "Original",
      icon: HiStar,
    },
    {
      name: "Original",
      icon: HiStar,
    },
    {
      name: "Movies",
      icon: HiStar,
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between p-2">
        <div className="flex gap-8 md:gap-72 items-center ">
          <img
            src={logo}
            className="w-[100px] md:w-[120px] object-cover ms-5"
          />
          <div className="hidden md:flex gap-10">
            {menu.map((item) => (
              <HeaderItems name={item.name} Icon={item.icon} />
            ))}
          </div>

          {/* Responsive menu */}
          <div className="flex md:hidden gap-2">
            {menu.map(
              (item, index) =>
                index < 3 && <HeaderItems name={""} Icon={item.icon} />
            )}

            <div className="md:hidden" onClick={() => setToggle(!toggle)}>
              <HeaderItems name={""} Icon={HiDotsVertical} />
              {toggle ? (
                <div className="border border-gray-500 absolute right-0 me-[30px] mt-5 bg-gray-950 p-4 py-3 px-6 flex flex-col gap-y-2 rounded-md">
                  {menu.map(
                    (item, index) =>
                      index > 3 && (
                        <HeaderItems name={item.name} Icon={item.icon} />
                      )
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>


        <img
          src={profile}
          className="w-[50px] md:w-[70px] rounded-full object-cover"
        />
   
</div>
    </>
  );
};

export default Header;
