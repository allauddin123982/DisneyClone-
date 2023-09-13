import React from "react";
import GenresList from "../constant/GenresList";
import AllMovies from "./AllMovies";

const GenreMovieList = () => {
  return (
    <div className="mt-14">
      {GenresList.genere.map((item, index) => index <= 4 && (
            <div className="mx-16">
              <h2 className="text-white text-2xl md:text-3xl m-2 px-6 md:px-16">
                {item.name}
              </h2>
              <AllMovies genreId={item.id} />
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovieList;
