import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(15, "*Must be 15 characters or less")
        .required("*Required")
        .min(6, "*Must be 6 characters or more")
        .matches(/[a-z]+/, "Must contain one lowercase character")
        .matches(/[A-Z]+/, "Must contain one uppercase character")
        .matches(/\d+/, "Must contain one number"),
      email: Yup.string().email("*Invalid email address").required("*Required"),
    }),
    onSubmit: async (data) => {
      try {
        setError("");
        await signInWithEmailAndPassword(auth, data.email, data.password);
      } catch (error) {
        if (
          error.message === "Firebase: Error (auth/user-not-found)." ||
          error.message === "Firebase: Error (auth/wrong-password)."
        ) {
          setError("User not found! Please, enter valid email and password.");
        } else {
          setError(error.message);
        }
      }
    },
  });

  return (
    <form className="mt-8 flex w-full flex-col gap-2" onSubmit={formik.handleSubmit}>
      <input
        className="rounded-md bg-gray-300 p-3 placeholder-gray-500  outline-gray-500 "
        placeholder="Email"
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      ></input>
      {formik.touched.email && formik.errors.email ? (
        <div className="text-xs text-red-600">{formik.errors.email}</div>
      ) : null}
      <input
        className="rounded-md bg-gray-300 p-3 placeholder-gray-500 outline-gray-500  "
        placeholder="Password"
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      ></input>
      {formik.touched.password && formik.errors.password ? (
        <div className="text-xs text-red-600">{formik.errors.password}</div>
      ) : null}

      <button
        type="submit"
        className="rounded-md bg-gray-300 p-3 font-semibold text-gray-800 transition-all hover:bg-gray-400"
      >
        Login
      </button>
      {error != "" && <div className=" text-center text-sm text-red-600">{error}</div>}
    </form>
  );
};

export default Login;
