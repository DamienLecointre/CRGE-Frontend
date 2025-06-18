import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const buttonsSlice = createSlice({
  name: "buttons",
  initialState,
  reducers: {
    addTextToButton: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addTextToButton } = buttonsSlice.actions;
export default buttonsSlice.reducer;

// FILE CAN BE DELETED
