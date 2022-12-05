import { createSlice } from "@reduxjs/toolkit";

const initialGamesState = {
  games: [],
  genres: [],
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
  },
});

export const gamesActions = gamesSlice.actions;
export default gamesSlice.reducer;
