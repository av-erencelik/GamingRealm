import React, { useEffect, useState } from "react";
import Carousel from "../components/home/Carousel";

const Home = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const getGames = async () => {
      const response = await fetch(`https://rawg.io/api/games?&token&key=${import.meta.env.VITE_RAWG_API_KEY}`);
      const data = await response.json();
      setGames(data.results);
    };
    getGames();
  }, []);
  return (
    <main className="min-h-[100vh] overflow-hidden bg-gray-200 p-0 sm:p-10">
      <Carousel games={games}></Carousel>
    </main>
  );
};

export default Home;
