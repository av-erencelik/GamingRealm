import React, { useState } from "react";
import Metacritic from "./Metacritic";
import Platform from "./Platform";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const Filter = (props) => {
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  return (
    <aside className=" z-30 mt-0 w-[50%] rounded-none bg-gray-800 p-2 sm:w-[250px] sm:rounded-b-md sm:rounded-bl-none sm:rounded-tr-md  sm:p-5">
      <div
        className="flex cursor-pointer flex-row items-center justify-center"
        onClick={() => setIsFilterOpened((prev) => !prev)}
      >
        <h2 className="text-sm font-bold text-gray-300 sm:text-base">Filters</h2>
        <motion.div animate={{ rotate: isFilterOpened ? 0 : 180 }}>
          <MdKeyboardArrowDown className="h-[25px] w-[25px] font-bold text-gray-200"></MdKeyboardArrowDown>
        </motion.div>
      </div>
      <AnimatePresence>
        {isFilterOpened && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className=" z-30 mt-4"
          >
            <Platform setPage={props.setPage}></Platform>
            <Metacritic setPage={props.setPage}></Metacritic>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};

export default Filter;
