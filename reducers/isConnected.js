import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    addConnectionToStore: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addConnectionToStore } = connectionSlice.actions;
export default connectionSlice.reducer;
