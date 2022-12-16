import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import { MdKeyboardArrowDown, MdRemoveCircle } from "react-icons/md";

const Profile = ({ currentUser }) => {
  const [allFavs, setAllFavs] = useState([]);
  const [profileOpen, setProfileOpen] = useState(true);
  const [favsOpen, setFavsOpen] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const checkUser = () => {
      if (currentUser === "") {
        return;
      } else if (currentUser) {
        return;
      } else {
        navigate("/home");
      }
    };
    checkUser();
  }, [currentUser]);
  useEffect(() => {
    const getFavs = () => {
      const favs = onSnapshot(doc(db, "favGames", currentUser.uid), (doc) => {
        setAllFavs(doc.data().favs);
      });
      return () => [favs()];
    };
    currentUser && getFavs();
  }, [currentUser]);
  const handleOnClick = (e) => {
    window.open(`/game/${e.target.id}`, "_blank");
  };
  const handleRemove = async (e) => {
    let objectWillDelete = allFavs.filter((obj) => obj.id === e.target.id);
    await updateDoc(doc(db, "favGames", currentUser.uid), {
      favs: arrayRemove({
        id: objectWillDelete[0].id,
        backgroundImage: objectWillDelete[0].backgroundImage,
        name: objectWillDelete[0].name,
      }),
    });
  };
  return (
    <div className="min-h-[83vh] items-center justify-center bg-gray-300 md:flex md:min-h-[88vh]">
      <div className="min-h-[83vh] w-[100%] bg-gray-800 p-4 md:min-h-max md:w-[70%] md:p-10">
        <div className="mb-5 flex cursor-pointer text-gray-300" onClick={() => setProfileOpen((prev) => !prev)}>
          <h2 className="ml-auto text-xs font-semibold text-gray-300 md:text-base">PROFILE</h2>
          <motion.div animate={{ rotate: profileOpen ? 0 : 180 }} className="mr-auto flex items-center">
            <MdKeyboardArrowDown className="flex h-[15px] w-[15px] items-center font-bold text-gray-300 md:h-[20px] md:w-[20px]"></MdKeyboardArrowDown>
          </motion.div>
        </div>

        <AnimatePresence>
          {profileOpen && currentUser && (
            <motion.div
              id="description"
              className=" mb-5 flex items-center justify-center gap-5 text-xs text-gray-300"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={currentUser.photoURL}
                className="h-[100px] w-[100px] rounded-full object-cover md:h-[200px] md:w-[200px]"
              ></img>
              <div className="flex flex-col gap-2 md:gap-5">
                <div>
                  <span className="md:text-base">USERNAME: </span>
                  <span className="md:text-base">{currentUser.displayName}</span>
                </div>
                <div>
                  <span className="md:text-base">EMAIL: </span>
                  <span className="md:text-base">{currentUser.email}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mb-5 flex cursor-pointer text-gray-300" onClick={() => setFavsOpen((prev) => !prev)}>
          <h2 className="ml-auto text-xs font-semibold text-gray-300 md:text-base">FAVORITE GAMES</h2>
          <motion.div animate={{ rotate: favsOpen ? 0 : 180 }} className="mr-auto flex items-center">
            <MdKeyboardArrowDown className="flex h-[15px] w-[15px] items-center font-bold text-gray-300 md:h-[20px] md:w-[20px]"></MdKeyboardArrowDown>
          </motion.div>
        </div>
        <AnimatePresence>
          {favsOpen && (
            <motion.div
              id="description"
              className=" scrollbar flex max-h-[300px] flex-col items-center overflow-y-scroll text-xs text-gray-300"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {allFavs.length === 0 ? (
                <p className="m-auto mt-5 text-base">You haven't added a game to your favorites yet.</p>
              ) : (
                <>
                  {allFavs.map((game, index) => {
                    return (
                      <div
                        className="flex w-[100%] cursor-pointer items-center transition-all hover:bg-gray-700"
                        key={index}
                      >
                        <div
                          id={game.id}
                          className="flex w-[100%] cursor-pointer items-center gap-10 p-2 "
                          onClick={handleOnClick}
                        >
                          <img
                            src={game.backgroundImage}
                            className="h-[120px] w-[100px] object-cover"
                            id={game.id}
                          ></img>
                          <h3 className="text-base text-gray-300" id={game.id}>
                            {game.name}
                          </h3>
                        </div>
                        <button id={game.id} onClick={handleRemove} className="flex items-center">
                          <span className="text-base text-gray-300" id={game.id}>
                            Delete
                          </span>
                          <MdRemoveCircle className="h-[20px] w-[20px] text-gray-300" id={game.id}></MdRemoveCircle>
                        </button>
                      </div>
                    );
                  })}
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Profile;
