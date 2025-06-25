import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const herosSlice = createSlice({
  name: "heros",
  initialState,
  reducers: {
    addContentToHero: (state, action) => {
      // console.log("VALEURS RECU DANS REDUCER HERO :", action.payload);
      state.value = action.payload;
    },
  },
});

export const { addContentToHero } = herosSlice.actions;
export default herosSlice.reducer;
