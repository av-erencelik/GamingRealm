import { AnimatePresence, motion } from "framer-motion";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MixedCarousel from "./MixedCarousel";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdHeartDislike } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import "react-lazy-load-image-component/src/effects/blur.css";
import Comments from "./Comments";
import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../state/AuthContext";
import { useNavigate } from "react-router-dom";

const GameDetails = ({ id }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);
  const { currentUser } = useContext(AuthContext);
  const [allFavs, setAllFavs] = useState([]);
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const backgroundAdditional = useSelector((state) => state.gameDetails.background_image_additional);
  const backgroundImage = useSelector((state) => state.gameDetails.background_image);
  const name = useSelector((state) => state.gameDetails.name);
  const releaseDate = useSelector((state) => state.gameDetails.releaseDate);
  const publisherName = useSelector((state) => state.gameDetails.publisher_name);
  const metacritic = useSelector((state) => state.gameDetails.metacritic);
  const genres = useSelector((state) => state.gameDetails.game_genres);
  const platforms = useSelector((state) => state.gameDetails.platforms);
  const description = useSelector((state) => state.gameDetails.description);
  const screenshots = useSelector((state) => state.gameDetails.screenshots);
  const trailers = useSelector((state) => state.gameDetails.trailers);
  const playtime = useSelector((state) => state.gameDetails.playtime);
  useEffect(() => {
    if (document.getElementById("description")) {
      document.getElementById("description").innerHTML = description;
    }
  }, [descriptionOpen]);
  useEffect(() => {
    const getFavs = () => {
      const favs = onSnapshot(doc(db, "favGames", currentUser.uid), (doc) => {
        setAllFavs(doc.data().favs);
      });
      return () => [favs()];
    };
    currentUser && getFavs();
  }, [currentUser]);

  const handleFav = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    if (allFavs.find((f) => f.id === id)) {
      await updateDoc(doc(db, "favGames", currentUser.uid), {
        favs: arrayRemove({
          id,
          backgroundImage,
          name,
        }),
      });
    } else {
      await updateDoc(doc(db, "favGames", currentUser.uid), {
        favs: arrayUnion({
          id,
          backgroundImage,
          name,
        }),
      });
      setShowModal(true);
    }
  };
  return (
    <>
      <div className="relative">
        <div className=" -z-10 h-[200px] max-h-[400px] w-full overflow-hidden md:h-[400px]">
          <LazyLoadImage
            src={backgroundAdditional}
            className=" box-border block h-full max-h-[100%] w-full max-w-[100%] scale-105 object-cover blur-md"
            effect="blur"
          ></LazyLoadImage>
        </div>
        <div className=" m-auto mt-[-100px] flex w-[90%] gap-5 md:mt-[-225px] xl:w-[70%]">
          <div className=" h-[150px] w-[100px] shrink-0 md:h-[350px] md:w-[250px]">
            <LazyLoadImage
              src={backgroundImage}
              className="relative z-50  h-full w-full object-cover"
              effect="blur"
            ></LazyLoadImage>
            {allFavs.find((f) => f.id === id) ? (
              <button
                className="flex w-full items-center justify-center rounded-sm bg-gray-800 p-1 text-sm font-medium text-gray-300 transition-all hover:bg-gray-700 sm:p-2"
                onClick={handleFav}
              >
                UNFAV <IoMdHeartDislike className="ml-2 mt-[0.2rem] sm:mt-[0]"></IoMdHeartDislike>
              </button>
            ) : (
              <button
                className="flex w-full items-center justify-center rounded-sm bg-gray-800 p-1 text-sm font-medium text-gray-300 hover:bg-gray-700 sm:p-2"
                onClick={handleFav}
              >
                FAV <IoMdHeart className="ml-2 mt-[0.2rem] sm:mt-[0]"></IoMdHeart>
              </button>
            )}
          </div>
          <div className="flex w-[100%] flex-col gap-2 md:mt-[75px] 2xl:mt-[50px]">
            <h3 className="relative font-bold tracking-wider text-gray-300 md:text-3xl 2xl:text-6xl">{name}</h3>
            <h5 className="relative pl-1 font-medium text-gray-300 md:text-xl md:font-semibold 2xl:text-2xl">
              {moment(releaseDate, "YYYY-MM-DD").format("MMMM D, Y")}
            </h5>
            <h5 className="relative pl-1 italic text-gray-300 md:text-xl 2xl:text-2xl">{publisherName}</h5>
            <div className="mt-6 md:mt-10 2xl:mt-8">
              <span className="text-xs font-semibold text-gray-800 md:text-sm">Genre: </span>
              {genres.map((genre, index) => {
                if (index < genres.length - 1) {
                  return (
                    <span key={index}>
                      <span className=" text-xs text-gray-500 underline md:text-sm">{genre}</span>
                      <span className=" pr-1 text-xs text-gray-500 md:text-sm">,</span>
                    </span>
                  );
                } else {
                  return (
                    <span className=" text-xs text-gray-500 underline md:text-sm" key={index}>
                      {genre}
                    </span>
                  );
                }
              })}
            </div>
            <div>
              <span className="text-xs font-semibold text-gray-800 md:text-sm">Platforms: </span>
              {platforms.map((platform, index) => {
                if (index < platforms.length - 1) {
                  return (
                    <span key={platform}>
                      <span className=" text-xs text-gray-500 underline md:text-sm">{platform}</span>
                      <span className=" pr-1 text-xs text-gray-500 md:text-sm">,</span>
                    </span>
                  );
                } else {
                  return (
                    <span className=" text-xs text-gray-500 underline md:text-sm" key={platform}>
                      {platform}
                    </span>
                  );
                }
              })}
            </div>
            <div className="mb-5">
              <span className="text-xs font-semibold text-gray-800 md:text-sm">Playtime: {playtime}</span>
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer sm:mt-7" onClick={() => setDescriptionOpen((prev) => !prev)}>
          <h2 className="ml-auto text-xs font-semibold text-gray-800 md:text-sm">Description</h2>
          <motion.div animate={{ rotate: descriptionOpen ? 0 : 180 }} className="mr-auto flex items-center">
            <MdKeyboardArrowDown className="flex h-[15px] w-[15px] items-center font-bold text-gray-800 md:h-[20px] md:w-[20px]"></MdKeyboardArrowDown>
          </motion.div>
        </div>
        <AnimatePresence>
          {descriptionOpen && (
            <motion.div
              id="description"
              className="m-auto w-[90%] text-xs text-gray-600 md:text-sm xl:w-[70%]"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          )}
        </AnimatePresence>
        <div className=" absolute top-16 right-2 md:top-80 md:right-40 xl:right-60 2xl:right-72 2xl:top-80">
          <p className=" m-auto mt-24 w-fit  text-xl font-bold text-yellow-500 md:mt-2 md:text-4xl" title="metacritic">
            {metacritic}
          </p>
        </div>
        <div className="mt-10 pb-24">
          <MixedCarousel images={screenshots} trailer={trailers}></MixedCarousel>
        </div>
        <Comments id={id}></Comments>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}

                {/*body*/}
                <div className="relative flex-auto p-6">
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-xl leading-none text-black outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                  <p className="my-4 p-1 text-lg leading-relaxed text-gray-800">
                    You can view your favorite games on profile page!
                  </p>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default GameDetails;
