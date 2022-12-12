import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

const Comments = () => {
  return (
    <section className="m-auto w-full border-gray-900 pb-5 md:w-[70%]">
      <CommentInput />
      {[1, 1].map((comment, index) => {
        return <Comment index={index} key={index} />;
      })}
    </section>
  );
};

export default Comments;
