import React from "react";
import { useNavigate } from "react-router-dom";

const SearchCard = ({ name, image, id }) => {
  const navigate = useNavigate();
  const handleOnClick = (e) => {
    e.stopPropagation();
    navigate(`/game/${e.target.id}`);
  };
  return (
    <div
      className="game-card flex h-[50px] cursor-pointer items-center gap-5 py-8 px-4 text-gray-800 transition-all hover:bg-gray-300"
      id={id}
      onClick={handleOnClick}
    >
      <img src={image} className="game-card h-[50px] w-[35px] object-cover" id={id}></img>
      <h3 className="game-card text-sm" id={id}>
        {name}
      </h3>
    </div>
  );
};

export default SearchCard;
