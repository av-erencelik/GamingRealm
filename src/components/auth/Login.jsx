import React from "react";

const Login = () => {
  return (
    <form className="mt-8 flex w-full flex-col gap-2">
      <input className="rounded-md bg-gray-300 p-3 placeholder-gray-500  outline-gray-500 " placeholder="Email"></input>
      <input
        className="rounded-md bg-gray-300 p-3 placeholder-gray-500 outline-gray-500  "
        placeholder="Password"
      ></input>
      <button
        type="submit"
        className="rounded-md bg-gray-300 p-3 font-semibold text-gray-800 transition-all hover:bg-gray-400"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
