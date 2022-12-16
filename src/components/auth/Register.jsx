import React, { useState } from "react";
import addAvatar from "../../utilities/imgs/addAvatar.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Register = () => {
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
      file: "",
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
      username: Yup.string()
        .max(15, "*Must be 15 characters or less")
        .required("*Required")
        .min(5, "*Must be 5 characters or more")
        .matches(/^([a-zA-Z0-9 _-]+)$/, "*Must not contain special character"),
      file: Yup.mixed()
        .nullable()
        .test("required", "*You need to provide an avatar", (file) => {
          if (file) {
            return true;
          }
          return false;
        }),
    }),
    onSubmit: async (data) => {
      try {
        const res = await getDoc(doc(db, "users", "usernames"));
        if (!res.exists()) {
          await setDoc(doc(db, "users", "usernames"), {
            usernames: [],
          });
        }
        if (res.exists() && res.data().usernames.includes(data.username)) {
          throw "Username already in use!";
        } else {
          await updateDoc(doc(db, "users", "usernames"), {
            usernames: arrayUnion(data.username),
          });
        }

        const response = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const storageRef = ref(storage, data.username);
        await uploadBytesResumable(storageRef, data.file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              await updateProfile(response.user, {
                displayName: data.username,
                photoURL: downloadURL,
              });
              await setDoc(doc(db, "favGames", response.user.uid), {
                favs: [],
              });
            } catch (err) {
              console.log(err);
            }
          });
        });
      } catch (error) {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setError("Email is alreay in use! Please, try to sing up with another email or login with current email");
        } else {
          setError(error.message || error);
        }
      }
    },
  });
  return (
    <form className="mt-8 flex w-full flex-col gap-2" onSubmit={formik.handleSubmit}>
      <input
        className="rounded-md bg-gray-300 p-3 placeholder-gray-500  outline-gray-500 "
        placeholder="Username"
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      ></input>
      {formik.touched.username && formik.errors.username ? (
        <div className="text-xs text-red-600">{formik.errors.username}</div>
      ) : null}
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
      <input
        type="file"
        className="hidden"
        id="file"
        name="file"
        onChange={(event) => {
          formik.values.file = event.target.files[0];
          console.log(formik.values.file);
        }}
        onBlur={formik.handleBlur}
      ></input>
      <label htmlFor="file" className="flex items-center gap-2">
        <img src={addAvatar} alt="add" className="h-[40px] w-[40px] rounded-full"></img>
        <span className="text-gray-300">Add an avatar</span>
      </label>
      {formik.touched.file && formik.errors.file ? (
        <div className="text-xs text-red-600">{formik.errors.file}</div>
      ) : null}
      <button
        type="submit"
        className="rounded-md bg-gray-300 p-3 font-semibold text-gray-800 transition-all hover:bg-gray-400"
      >
        Register
      </button>
      {error != "" && <div className=" text-center text-sm text-red-600">{error}</div>}
    </form>
  );
};

export default Register;
