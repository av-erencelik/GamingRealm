import React from "react";
import addAvatar from "../../utilities/imgs/addAvatar.png";
const Register = () => {
  return (
    <form className="mt-8 flex w-full flex-col gap-2">
      <input
        className="rounded-md bg-gray-300 p-3 placeholder-gray-500  outline-gray-500 "
        placeholder="Username"
      ></input>
      <input className="rounded-md bg-gray-300 p-3 placeholder-gray-500  outline-gray-500 " placeholder="Email"></input>
      <input
        className="rounded-md bg-gray-300 p-3 placeholder-gray-500 outline-gray-500  "
        placeholder="Password"
      ></input>
      <input type="file" className="hidden"></input>
      <label htmlFor="file" className="flex items-center gap-2">
        <img src={addAvatar} alt="add" className="h-[40px] w-[40px] rounded-full"></img>
        <span className="text-gray-300">Add an avatar</span>
      </label>
      <button
        type="submit"
        className="rounded-md bg-gray-300 p-3 font-semibold text-gray-800 transition-all hover:bg-gray-400"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
