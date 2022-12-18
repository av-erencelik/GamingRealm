import { MdKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../state/filters";
import { gamesActions } from "../../state/games";

const Platform = (props) => {
  const [isPlatformsOpened, setIsPlatformsOpened] = useState(false);
  const activeButton = useSelector((state) => state.filters.platformSelectedButton);
  console.log(activeButton);
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsPlatformsOpened((prev) => !prev);
  };

  function handlePlatformChoose(e) {
    const selectedPlatform = `&platforms=${e.target.id}`;
    if (e.target.innerHTML == "All") {
      dispatch(filtersActions.setPlatformSelectedButton(""));
      dispatch(filtersActions.setPlatform(""));
      dispatch(gamesActions.setGames([]));
      props.setPage(1);
    } else {
      dispatch(filtersActions.setPlatformSelectedButton(`${e.target.innerHTML}`));
      dispatch(filtersActions.setPlatform(selectedPlatform));
      dispatch(gamesActions.setGames([]));
      props.setPage(1);
    }
  }
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
            <p
              className={` pl-3 font-normal text-gray-800 transition hover:bg-gray-400 ${
                activeButton === "" && "bg-gray-400"
              }`}
              id="platformAll"
              onClick={handlePlatformChoose}
            >
              All
            </p>
            <p
              className={` pl-3 font-normal text-gray-800 transition hover:bg-gray-400 ${
                activeButton === "Pc" && "bg-gray-400"
              }`}
              id="4"
              onClick={handlePlatformChoose}
            >
              Pc
            </p>
            <p
              id="18"
              className={` pl-3 font-normal text-gray-800 transition hover:bg-gray-400 ${
                activeButton === "Ps4" && "bg-gray-400"
              }`}
              onClick={handlePlatformChoose}
            >
              Ps4
            </p>
            <p
              id="187"
              className={` pl-3 font-normal text-gray-800 transition hover:bg-gray-400 ${
                activeButton === "Ps5" && "bg-gray-400"
              }`}
              onClick={handlePlatformChoose}
            >
              Ps5
            </p>
            <p
              id="1"
              className={` pl-3 font-normal text-gray-800 transition hover:bg-gray-400 ${
                activeButton === "Xbox One/S" && "bg-gray-400"
              }`}
              onClick={handlePlatformChoose}
            >
              Xbox One/S
            </p>
            <p
              id="186"
              className={` pl-3 font-normal text-gray-800 transition hover:bg-gray-400 ${
                activeButton === "Xbox Series S/X" && "bg-gray-400"
              }`}
              onClick={handlePlatformChoose}
            >
              Xbox Series S/X
            </p>
            <p
              id="7"
              className={` pl-3 font-normal text-gray-800 transition hover:bg-gray-400 ${
                activeButton === "Nintendo Switch" && "bg-gray-400"
              }`}
              onClick={handlePlatformChoose}
            >
              Nintendo Switch
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Platform;
