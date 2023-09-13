import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const imgBaseURl = "https://image.tmdb.org/t/p/original";
const Slide = () => {
  const [movies, setMovies] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = () => {
    GlobalApi.popular.then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  };

  const screenWidth = window.innerWidth;
  const SliderRight = (element) => {
    element.scrollLeft += screenWidth-120
  };

  const Sliderleft = (element) => {
    element.scrollLeft -= screenWidth -120
  };
  return (
    <>
      <div className="">
        <AiOutlineLeft
          className="text-white text-[30px] absolute mx-10 mt-[250px] cursor-pointer hidden md:block"
          onClick={() => Sliderleft(elementRef.current)}
        />
        <AiOutlineRight
          className="text-white text-[30px] absolute mx-10 mt-[250px] cursor-pointer right-0 hidden md:block"
          onClick={() => SliderRight(elementRef.current)}
        />
      </div>
      <div
        className="flex overflow-x-auto w-full py-5 px-20 scrollbar-hide md:scrollbar-default scroll-smooth"
        ref={elementRef}
      >
        {movies.map((item, index) => (
          <img
          src={imgBaseURl + item.backdrop_path}
          alt=""
          className="hover:border-[5px] border-gray-400 transition-all duration-150 ease-in min-w-full md:h-[500px] object-cover object-left-top mr-14 rounded-md"
        />
        
        ))}
      </div>
    </>
  );
};

export default Slide;
