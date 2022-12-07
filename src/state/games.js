import { createSlice } from "@reduxjs/toolkit";

const initialGamesState = {
  games: [],
  genres: [],
  carouselGames: [],
};

const gamesSlice = createSlice({
  name: "games",
  initialState: initialGamesState,
  reducers: {
    setGames(state, action) {
      state.games = action.payload;
    },
    setGenres(state, action) {
      state.genres = action.payload;
    },
    setCarouselGames(state, action) {
      state.carouselGames = action.payload;
    },
    updateGames(state, action) {
      state.games = state.games.concat(action.payload);
    },
  },
});

export const gamesActions = gamesSlice.actions;
export default gamesSlice.reducer;
