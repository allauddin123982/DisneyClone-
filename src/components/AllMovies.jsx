import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import GenreCard from "./GenreCard";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const AllMovies = ({ genreId }) => {
  const [allMovies, setAllMovies] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId)
      .then((response) => {
        setAllMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const screenWidth = window.innerWidth;
  const SliderRight = (element) => {
    element.scrollLeft += screenWidth - 120;
  };

  const Sliderleft = (element) => {
    element.scrollLeft -= screenWidth - 120;
  };

  return (
    <>
      <div className="relative">
        <AiOutlineLeft
          className="text-yellow-400 text-[40px] hidden md:block z-10 cursor-pointer absolute mt-[190px]   "
          onClick={() => Sliderleft(elementRef.current)}
        />
        <div
          ref={elementRef}
          className="flex overflow-x-auto gap-10 p-5 px-5 scrollbar-hide md:scrollbar-default"
          style={{ scrollBehavior: 'smooth' }} // Enable smooth scrolling
        >
          {allMovies.map((item, index) => (
            <GenreCard movie={item} />
          ))}
        </div>
        <AiOutlineRight
          className="text-yellow-400 text-[40px] hidden md:block cursor-pointer z-10 top-0 absolute right-0 mt-[190px]"
          onClick={() => SliderRight(elementRef.current)}
        />
      </div>
    </>
  );
};

export default AllMovies;
