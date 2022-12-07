import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
  genre: "",
  platform: "",
  metacritic: {
    min: "0",
    max: "100",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialFilterState,
  reducers: {
    setGenre(state, action) {
      state.genre = action.payload;
    },
    setPlatform(state, action) {
      state.platform = action.payload;
    },
    setMetacriticMin(state, action) {
      state.metacritic.min = action.payload;
    },
    setMetacriticMax(state, action) {
      state.metacritic.ax = action.payload;
    },
  },
});

export const filtersActions = filtersSlice.actions;
export default filtersSlice.reducer;
