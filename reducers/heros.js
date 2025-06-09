import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const herosSlice = createSlice({
  name: "heros",
  initialState,
  reducers: {
    addContentToHero: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addContentToHero } = herosSlice.actions;
export default herosSlice.reducer;
