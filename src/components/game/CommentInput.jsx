import React, { useContext } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import defaultPP from "../../utilities/imgs/defaultPP.png";
import { AuthContext } from "../../state/AuthContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const CommentInput = ({ id }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: yup.object().shape({
      comment: yup.string().required(),
    }),
    onSubmit: async (values) => {
      if (!currentUser) {
        navigate("/login");
      }
      await updateDoc(doc(db, "comments", id), {
        allComments: arrayUnion({
          username: currentUser.displayName,
          photoURL: currentUser.photoURL,
          comment: values.comment,
        }),
      });
      values.comment = "";
    },
  });
  return (
    <div>
      <div className="m-auto flex w-[95%] items-center gap-1 md:w-[70%] md:gap-3">
        <img
          src={currentUser ? currentUser.photoURL : defaultPP}
          className="h-[55px] w-[55px] rounded-full object-cover"
        ></img>
        <form className="m-auto flex w-[100%] gap-1 md:gap-3" onSubmit={formik.handleSubmit}>
          <textarea
            type="text"
            name="comment"
            id="comment"
            placeholder="Enter your comment here..."
            className="w-full rounded-md border-2 border-gray-400 bg-gray-300 p-2 outline-none transition-all focus:border-gray-800"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comment}
          />
          <button type="submit" className="rounded-md bg-gray-800 p-3 text-gray-300">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentInput;
