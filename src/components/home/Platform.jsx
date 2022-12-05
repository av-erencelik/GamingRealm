import { MdKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Platform = () => {
  const [isPlatformsOpened, setIsPlatformsOpened] = useState(false);
  const handleClick = () => {
    setIsPlatformsOpened((prev) => !prev);
  };
  return (
    <div className="flex w-[100%] cursor-pointer flex-col items-center justify-center rounded-md transition ">
      <div className=" group flex w-[100%] flex-row justify-center p-2 hover:bg-gray-600" onClick={handleClick}>
        <h2 className=" text-sm font-bold text-gray-300  transition-all group-hover:text-white sm:text-base">
          Platforms
        </h2>
        <motion.div animate={{ rotate: isPlatformsOpened ? 0 : 180 }}>
          <MdKeyboardArrowDown className="h-[25px] w-[25px] font-bold text-gray-200"></MdKeyboardArrowDown>
        </motion.div>
      </div>
      <AnimatePresence>
        {isPlatformsOpened && (
          <motion.div
            className="w-[100%] overflow-hidden rounded-b-md bg-gray-300"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="  bg-gray-400 pl-3 font-normal text-gray-800 transition hover:bg-gray-400">Pc</p>
            <p id="18" className="pl-3 font-normal text-gray-800 transition hover:bg-gray-400">
              Ps4
            </p>
            <p id="187" className=" pl-3 font-normal text-gray-800 transition hover:bg-gray-400">
              Ps5
            </p>
            <p id="1" className="pl-3 font-normal text-gray-800 transition hover:bg-gray-400">
              Xbox One/S
            </p>
            <p id="186" className="pl-3 font-normal text-gray-800 transition hover:bg-gray-400">
              Xbox Series S/X
            </p>
            <p id="7" className=" pl-3 font-normal text-gray-800 transition hover:bg-gray-400">
              Nintendo Switch
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Platform;
