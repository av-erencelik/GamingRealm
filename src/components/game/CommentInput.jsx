import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import defaultPP from "../../utilities/imgs/defaultPP.png";
const CommentInput = () => {
  const validationSchema = yup.object().shape({
    comment: yup.string().required(),
  });
  return (
    <Formik
      initialValues={{
        comment: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Handle the form submission here
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <div className="m-auto flex w-[95%] items-center gap-1 md:w-[70%] md:gap-3">
          <img src={defaultPP} className="h-[55px] w-[55px] rounded-full object-cover"></img>
          <Form className="m-auto flex w-[100%] gap-1 md:gap-3 ">
            <textarea
              type="text"
              name="comment"
              placeholder="Enter your comment here..."
              className="w-full rounded-md border-2 border-gray-400 bg-gray-300 p-2 outline-none transition-all focus:border-gray-800"
            />
            <button type="submit" disabled={isSubmitting} className="rounded-md bg-gray-800 p-3 text-gray-300">
              Send
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default CommentInput;
