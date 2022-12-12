import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import GameDetails from "../components/game/GameDetails";
import { gameDetailsActions } from "../state/gameDetails";

const Game = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    const getGameDetails = async () => {
      const response = await fetch(
        `https://rawg.io/api/games/${id}?&page=1&token&key=de0932ab0bf04fb8a288dc63c5891339`
      );
      const data = await response.json();
      dispatch(gameDetailsActions.setName(data.name));
      dispatch(gameDetailsActions.setDescription(data.description));
      dispatch(gameDetailsActions.setPlaytime(data.playtime));
      dispatch(gameDetailsActions.setMetacritic(data.metacritic));
      dispatch(gameDetailsActions.setReleaseDate(data.released));
      dispatch(gameDetailsActions.setBackgroundImage(data.background_image));
      dispatch(gameDetailsActions.setAdditional(data.background_image_additional));
      dispatch(gameDetailsActions.setPublisherName(data.publishers[0].name));
      dispatch(gameDetailsActions.setGameGenres(data.genres.map((genre) => genre.name)));
      dispatch(
        gameDetailsActions.setPlatfroms(
          data.platforms.map((platform) => {
            return platform.platform.name;
          })
        )
      );
    };
    const getScreenshots = async () => {
      const response = await fetch(
        `https://rawg.io/api/games/${id}/screenshots?&page=1&token&key=de0932ab0bf04fb8a288dc63c5891339`
      );
      const data = await response.json();
      dispatch(gameDetailsActions.setScreenshots(data.results.map((screenshot) => screenshot.image)));
    };
    const getTrailers = async () => {
      const response = await fetch(
        `https://rawg.io/api/games/${id}/movies?&page=1&token&key=de0932ab0bf04fb8a288dc63c5891339`
      );
      const data = await response.json();
      dispatch(
        gameDetailsActions.setTrailers(
          data.results.map((trailer, index) => {
            return trailer.data[480];
          })
        )
      );
    };
    getGameDetails();
    getScreenshots();
    getTrailers();
  });
  return (
    <main className="min-h-[80vh] bg-gray-300 md:min-h-[100vh]">
      <GameDetails></GameDetails>
    </main>
  );
};

export default Game;
