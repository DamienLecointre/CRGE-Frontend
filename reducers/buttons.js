import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const buttonsSlice = createSlice({
  name: "buttons",
  initialState,
  reducers: {
    addTextToSignInButton: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addTextToSignInButton } = buttonsSlice.actions;
export default buttonsSlice.reducer;
