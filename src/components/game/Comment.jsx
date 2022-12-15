import React from "react";
const Comment = ({ index, comment }) => {
  return (
    <div className="m-auto flex w-[95%] items-center gap-1  md:w-[70%] md:gap-3">
      <img src={comment.photoURL} className="h-[55px] w-[55px] rounded-full object-cover"></img>
      <div className={`mt-6 flex flex-col gap-3 ${index && "border-t-2"}  w-full border-gray-400 pt-6`}>
        <h4 className="font-bold">{comment.username}</h4>
        <p className="w-full">{comment.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
