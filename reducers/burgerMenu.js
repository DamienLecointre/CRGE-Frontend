import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const burgerMenuSlice = createSlice({
  name: "burgerMenu",
  initialState,
  reducers: {
    addBurgerMenu: (state, action) => {
      // console.log("from reducer :", action.payload);
      state.value = action.payload;
    },
  },
});

export const { addBurgerMenu } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;
