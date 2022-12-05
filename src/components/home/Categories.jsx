import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Categories = () => {
  const genres = useSelector((state) => state.games.genres);
  const [categoriesOpened, setCategoriesOpened] = useState(false);
  const handleClick = () => {
    setCategoriesOpened((prev) => !prev);
  };
  return (
    <div className=" flex  flex-col flex-wrap items-center justify-center gap-3 rounded-b-none bg-gray-800 p-2 transition-all sm:rounded-b-md sm:p-5">
      <div className="flex cursor-pointer flex-row items-center" onClick={handleClick}>
        <h2 className="text-sm font-bold text-gray-300 sm:text-base">Categories</h2>
        <motion.div animate={{ rotate: categoriesOpened ? 0 : 180 }}>
          <MdKeyboardArrowDown className="h-[25px] w-[25px] font-bold text-gray-200"></MdKeyboardArrowDown>
        </motion.div>
      </div>
      <AnimatePresence>
        {categoriesOpened && (
          <motion.div
            className="sm:max-h-none flex max-h-[100px] w-[100%] flex-col flex-nowrap gap-1 overflow-scroll sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 sm:overflow-hidden"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button className="rounded-md bg-gray-900 p-2 font-normal text-gray-200 transition hover:bg-gray-700 hover:text-white sm:font-semibold">
              New
            </button>
            {genres.map((genre) => {
              return (
                <button
                  className="rounded-md p-2 font-normal text-gray-200 transition hover:bg-gray-700 hover:text-white sm:font-semibold"
                  key={genre.id}
                  value={genre.name}
                >
                  {genre.name}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Categories;
