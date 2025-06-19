import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    firstName: "",
    lastName: "",
    email: "",
    isConnected: false,
  },
};

export const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    addConnectionToStore: (state, action) => {
      console.log("VALEUR RECU DANS REDUCER :", action.payload);
      state.value = action.payload;
    },
  },
});

export const { addConnectionToStore } = connectionSlice.actions;
export default connectionSlice.reducer;
