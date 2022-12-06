import React from "react";
import { useSelector } from "react-redux";

const Games = () => {
  const games = useSelector((state) => state.games.games);
  return (
    <div className=" mt-[2.5rem] w-[100%] flex-wrap gap-3 sm:m-auto sm:mt-28 sm:flex sm:w-[80%] sm:flex-row">
      {games.map((game, index) => {
        return (
          <div
            className={`inline-block w-[50%] py-2 sm:block sm:w-auto ${index % 2 == 0 ? "px-2" : "pr-2"} `}
            key={games.indexOf(game)}
          >
            <div className="relative flex  h-[300px] w-[100%] flex-col gap-0 overflow-hidden rounded-sm border-[1px] border-gray-400 bg-gradient-to-b from-zinc-100 via-neutral-100 to-stone-100 shadow-xl sm:h-[370px] sm:w-[225px]">
              <img
                src={game.background_image}
                alt={game.name}
                className=" h-[100%] w-[100%] cursor-pointer object-cover shadow-md transition-all hover:opacity-75"
              />
              <div className="flex w-[130px] flex-col gap-2 overflow-hidden pl-3 hover:w-auto sm:w-[175px]">
                <h3 className=" text-md  block min-w-[2px] truncate pt-1 font-normal text-gray-800" title={game.name}>
                  {game.name}
                </h3>
              </div>
              <div className="w-[130px] overflow-hidden pl-3 pb-2 sm:w-[175px]">
                {game.genres.map((genre, index) => {
                  return (
                    <span key={index} className="truncate">
                      <span className="cursor-pointer text-[0.800rem] font-normal text-gray-400 hover:border-b-[1px] hover:border-gray-300">
                        {genre.name}
                      </span>
                      {index < game.genres.length - 1 && (
                        <span className=" text-sm font-normal text-gray-400"> & </span>
                      )}
                    </span>
                  );
                })}
              </div>
              {game.metacritic && (
                <p
                  className=" absolute right-3 bottom-3 cursor-default rounded-sm bg-yellow-500 p-0.5 text-sm font-medium text-gray-100"
                  title="metacritic"
                >
                  {game.metacritic}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Games;
