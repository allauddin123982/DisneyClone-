import React from "react";
const imgBaseURl = "https://image.tmdb.org/t/p/original";

const GenreCard = ({ movie }) => {
  return (
    <>
      <img
        src={imgBaseURl + movie.poster_path}
        alt=""
        className="w-[120px] md:w-[250px] rounded-lg hover:border-[5px] border-gray-500 hover:scale-110 transition-all duration-150 ease-in cursor-pointer"
      />
    </>
  );
};

export default GenreCard;
