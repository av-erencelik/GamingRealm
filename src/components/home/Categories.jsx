import React from "react";
import { useSelector } from "react-redux";

const Categories = () => {
  const genres = useSelector((state) => state.games.genres);
  return (
    <div className="roundedn-b-md flex flex-row flex-wrap items-center justify-center gap-3 overflow-hidden bg-gray-800 p-10">
      <button className="rounded-md bg-gray-900 p-2 font-semibold text-gray-200 transition hover:bg-gray-700 hover:text-white">
        New
      </button>
      {genres.map((genre) => {
        return (
          <button
            className="rounded-md p-2 font-semibold text-gray-200 transition hover:bg-gray-700 hover:text-white"
            key={genre.id}
            value={genre.name}
          >
            {genre.name}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
