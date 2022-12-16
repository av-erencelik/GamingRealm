import React from "react";
const Comment = ({ index, comment }) => {
  return (
    <>
      {index > 0 ? (
        // line between comments
        <div className="m-auto flex w-[95%] items-center gap-2 md:w-[70%] md:gap-3">
          <div className="h-[55px] w-[55px]"></div>
          <div className="w-[90%] border-t-2 border-gray-400"></div>
        </div>
      ) : (
        <div className="m-auto flex w-[95%] items-center gap-2 md:w-[70%] md:gap-3">
          <div className="h-[25px] w-[25px]"></div>
          <div className="w-[90%]"></div>
        </div>
      )}
      <div className="m-auto flex w-[95%] items-center gap-2 md:w-[70%] md:gap-3">
        <img src={comment.photoURL} className="h-[55px] w-[55px] rounded-full object-cover"></img>
        <div className={` flex w-[90%] flex-col gap-3 `}>
          <h4 className="font-bold">{comment.username}</h4>
          <p className="w-full">{comment.comment}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
