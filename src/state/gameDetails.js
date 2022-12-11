import { createSlice } from "@reduxjs/toolkit";

const initialGameDetailsState = {
  name: "",
  description: "",
  metacritic: "",
  releaseDate: "",
  background_image: "",
  background_image_additional: "",
  publisher_name: "",
  game_genres: [],
  platforms: [],
  screenshots: [],
  trailers: [],
};

const gameDetailsSlice = createSlice({
  name: "GameDetails",
  initialState: initialGameDetailsState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setMetacritic(state, action) {
      state.metacritic = action.payload;
    },
    setReleaseDate(state, action) {
      state.releaseDate = action.payload;
    },
    setBackgroundImage(state, action) {
      state.background_image = action.payload;
    },
    setAdditional(state, action) {
      state.background_image_additional = action.payload;
    },
    setPublisherName(state, action) {
      state.publisher_name = action.payload;
    },
    setGameGenres(state, action) {
      state.game_genres = action.payload;
    },
    setPlatfroms(state, action) {
      state.platforms = action.payload;
    },
    setScreenshots(state, action) {
      state.screenshots = action.payload;
    },
    setTrailers(state, action) {
      state.trailers = action.payload;
    },
  },
});
export const gameDetailsActions = gameDetailsSlice.actions;
export default gameDetailsSlice.reducer;
