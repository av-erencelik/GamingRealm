import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./games";
import filtersReducer from "./filters";

const store = configureStore({
  reducer: { games: gamesReducer, filters: filtersReducer },
});
export default store;
