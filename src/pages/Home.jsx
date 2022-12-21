import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/home/Carousel";
import Display from "../components/home/Display";
import { gamesActions } from "../state/games";

const Home = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const page = useSelector((state) => state.games.page);
  const genre = useSelector((state) => state.filters.genre);
  const platform = useSelector((state) => state.filters.platform);
  const metacritic = useSelector((state) => state.filters.metacritic);
  const carouselGames = useSelector((state) => state.games.carouselGames);
  const games = useSelector((state) => state.games.games);
  useEffect(() => {
    const getCarouselGames = async () => {
      const response = await fetch(`https://rawg.io/api/games?&page=1&token&key=${import.meta.env.VITE_RAWG_API_KEY}`);
      const data = await response.json();
      dispatch(
        gamesActions.setCarouselGames(
          data.results.map((game) => {
            return { name: game.name, id: game.id, background_image: game.background_image };
          })
        )
      );
    };
    const getGenres = async () => {
      const response = await fetch(`https://rawg.io/api/genres?&token&key=${import.meta.env.VITE_RAWG_API_KEY}`);
      const data = await response.json();
      dispatch(
        gamesActions.setGenres(
          data.results.map((genre) => {
            return { id: genre.id, name: genre.name, slug: genre.slug };
          })
        )
      );
    };
    getCarouselGames();
    getGenres();
  }, []);
  useEffect(() => {
    const getGames = async () => {
      setError("");
      try {
        const response = await fetch(
          `https://rawg.io/api/games?&page=${page}${genre}${platform}&metacritic=${metacritic.min},${
            metacritic.max
          }&page_size=40&token&key=${import.meta.env.VITE_RAWG_API_KEY}`
        );
        const data = await response.json();
        setIsLoading(false);
        if (games.length > 0 && games[games.length - 1].id === data.results[data.results.length - 1].id) {
          return;
        } else {
          dispatch(
            gamesActions.updateGames(
              data.results.map((game) => {
                return {
                  id: game.id,
                  background_image: game.background_image,
                  name: game.name,
                  genres: game.genres,
                  metacritic: game.metacritic,
                };
              })
            )
          );
        }
      } catch (err) {
        setIsLoading(false);
        console.log(err);
        setError("Something went wrong! Please, select another filter or category and try again.");
      }
    };
    getGames();
  }, [page, genre, platform, metacritic]);
  useEffect(() => {
    const onScroll = function () {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 5) {
        setIsLoading(true);
        dispatch(gamesActions.incrementPage());
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <main className="min-h-[100vh] bg-gray-200 p-0 sm:p-10">
        <Carousel games={carouselGames}></Carousel>
        <Display isLoading={isLoading} error={error}></Display>
      </main>
    </>
  );
};

export default Home;
