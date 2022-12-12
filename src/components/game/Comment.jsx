import React from "react";
import defaultPP from "../../utilities/imgs/defaultPP.png";
const Comment = ({ index }) => {
  return (
    <div className="m-auto flex w-[95%] items-center gap-1  md:w-[70%] md:gap-3">
      <img src={defaultPP} className="h-[55px] w-[55px] rounded-full object-cover"></img>
      <div className={`mt-6 flex flex-col gap-3 ${index && "border-t-2"}  border-gray-400 pt-6`}>
        <h4 className="font-bold">John Carma</h4>
        <p>
          Good game! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa debitis dolores pariatur provident,
          adipisci totam, deserunt iste in perspiciatis sit nulla aliquid quo, nemo quas facere magni nostrum nam
          necessitatibus!
        </p>
      </div>
    </div>
  );
};

export default Comment;
