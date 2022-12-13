import React from "react";

const SearchCard = ({ name, image, id }) => {
  const handleOnClick = (e) => {
    e.stopPropagation();
    window.open(`/game/${e.target.id}`, "_blank");
  };
  return (
    <div
      className="game-card flex h-[50px] cursor-pointer items-center gap-5 py-8 px-4 text-gray-800 transition-all hover:bg-gray-300"
      id={id}
      onClick={handleOnClick}
    >
      <img src={image} className="h-[50px] w-[35px] object-cover"></img>
      <h3 className="text-sm">{name}</h3>
    </div>
  );
};

export default SearchCard;
