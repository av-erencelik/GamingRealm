import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./games";
import filtersReducer from "./filters";
import gameDetailsReducer from "./gameDetails";

const store = configureStore({
  reducer: { games: gamesReducer, filters: filtersReducer, gameDetails: gameDetailsReducer },
});
export default store;
