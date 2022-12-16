import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-gray-800 text-gray-300">
      <div className="container mx-auto py-2">
        <div className="flex items-center justify-center text-xs">
          <div className="flex items-center pl-2">
            <p>Copyright © 2022 av-erencelik</p>
            <a href="https://github.com/av-erencelik" className="pr-2 pl-1 underline hover:opacity-70">
              <FaGithub className=" text-base text-gray-400 transition-all" />
            </a>
          </div>
          <p>
            Created with{" "}
            <a href="https://rawg.io/apidocs" className=" underline hover:text-gray-400" target="_blank">
              RAWG.io
            </a>{" "}
            API
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
