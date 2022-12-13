import React, { useState } from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const Auth = () => {
  const [islogin, setIsLogin] = useState(true);
  const handleAuthChange = (e) => {
    if (e.target.innerHTML === "Login") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };
  return (
    <div className="flex h-[calc(100vh-170px)] items-center justify-center bg-gray-300  md:h-[calc(100vh-120px)]">
      <div className=" min-h-[300px] w-[400px] gap-8 rounded-md border-2 bg-gray-800 p-10">
        <div className="inline-flex w-full rounded-md border-2 border-gray-300 bg-gray-300">
          <div
            className={`flex w-full cursor-pointer items-center justify-center rounded-md py-3 font-semibold  transition-all ${
              islogin ? "bg-gray-800 text-gray-300" : "text-gray-800"
            }`}
            onClick={handleAuthChange}
          >
            Login
          </div>
          <div
            className={`flex w-full cursor-pointer items-center justify-center rounded-md py-3 font-semibold  transition-all ${
              !islogin ? "bg-gray-800 text-gray-300" : "text-gray-800"
            }`}
            onClick={handleAuthChange}
          >
            Register
          </div>
        </div>
        {islogin && <Login></Login>}
        {!islogin && <Register></Register>}
      </div>
    </div>
  );
};

export default Auth;
