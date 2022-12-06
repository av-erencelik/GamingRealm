import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/home/Carousel";
import Display from "../components/home/Display";
import { gamesActions } from "../state/games";

const Home = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.games);
  useEffect(() => {
    const getGames = async () => {
      const response = await fetch(`https://rawg.io/api/games?&token&key=${import.meta.env.VITE_RAWG_API_KEY}`);
      const data = await response.json();
      dispatch(gamesActions.setGames(data.results));
    };
    const getGenres = async () => {
      const response = await fetch(`https://rawg.io/api/genres?&token&key=${import.meta.env.VITE_RAWG_API_KEY}`);
      const data = await response.json();
      dispatch(gamesActions.setGenres(data.results));
    };
    getGames();
    getGenres();
  }, []);
  return (
    <main className="min-h-[100vh] bg-gray-200 p-0 sm:p-10">
      <Carousel games={games}></Carousel>
      <Display></Display>
    </main>
  );
};

export default Home;
