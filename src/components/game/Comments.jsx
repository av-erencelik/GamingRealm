import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

const Comments = ({ id }) => {
  const [allComments, setAllComments] = useState([]);
  useEffect(() => {
    const getComments = async () => {
      const comments = onSnapshot(doc(db, "comments", id), (doc) => {
        setAllComments(doc.data().allComments);
      });
      try {
        const res = await getDoc(doc(db, "comments", id));
        if (!res.exists()) {
          await setDoc(doc(db, "comments", id), { allComments: [] });
        }
        return () => [comments()];
      } catch (err) {
        console.log(err);
      }
    };
    getComments();
  }, []);
  return (
    <section className="m-auto w-full border-gray-900 pb-10 md:w-[70%]">
      <CommentInput id={id} />
      {allComments.map((comment, index) => {
        return <Comment index={index} key={index} comment={comment} />;
      })}
      {allComments.length === 0 && (
        <div className="m-auto mt-6 w-[95%] md:w-[70%]">
          <p className="text-center text-lg font-semibold text-gray-800">
            There are no comments for this game yet! Want to be the first to comment?
          </p>
        </div>
      )}
    </section>
  );
};

export default Comments;
