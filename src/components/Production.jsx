import React from "react";
import pixarPic from "../Images/pixar.png";
import DisnepPic from "../Images/Disnep.png";
import NationalPic from "../Images/National.png";
import starPic from "../Images/star.png";
import marvelPic from "../Images/marvel.png";
import Disnepvid from "../Images/Disnep.mp4";
import Nationalvid from "../Images/National.mp4";
import marvelVideovid from "../Images/marvelVideo.mp4";
import pixarvid from "../Images/pixar.mp4";
import starvid from "../Images/star.mp4";
const Production = () => {
  const list = [
    {
      id: 1,
      pic: DisnepPic,
      vid: Disnepvid,
    },
    {
      id: 2,
      pic: starPic,
      vid: starvid,
    },
    {
      id: 3,
      pic: marvelPic,
      vid: marvelVideovid,
    },
    {
      id: 4,
      pic: pixarPic,
      vid: pixarvid,
    },
    {
      id: 5,
      pic: NationalPic,
      vid: Nationalvid,
    },
  ];
  return (
    <>
      <div className=" bg-[#121520] flex gap-5 md:mx-16">
        {list.map((items, index) => (
          <div
            className="bg-gradient-to-b from-gray-800 to-gray-900 
            border-[3px] border-gray-500 
            flex justify-center items-center m-5 
            w-[200px] h-[80px] md:w-[400px] md:h-[150px]
            relative overflow-hidden shadow-xl shadow-gray-800 rounded-lg cursor-pointer "
            key={index}
          >
            <img
              src={items.pic}
              className="w-[140px] h-[50px] md:w-[220px] md:h-[80px]"
              alt={`Image ${index}`}
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden">
              <video
                src={items.vid}
                muted
                loop
                autoPlay
                playsInline
                className="w-full h-full transform scale-100 transition-all duration-300 ease-in-out opacity-0 hover:opacity-80 hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Production;
