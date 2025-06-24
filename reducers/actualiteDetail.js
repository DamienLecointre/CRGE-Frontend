import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: "",
    category: "",
    title: "",
    date: "",
    titleImg: "",
    titleImg: "",
    intro: "",
    sections: [],
  },
};

export const actualiteDetailSlice = createSlice({
  name: "actualiteDetail",
  initialState,
  reducers: {
    addactualiteDetailToStore: (state, action) => {
      console.log(
        "VALEUR RECU DANS REDUCER ACTUALITE DETAIL :",
        action.payload
      );
      state.value = action.payload;
    },
  },
});

export const { addactualiteDetailToStore } = actualiteDetailSlice.actions;
export default actualiteDetailSlice.reducer;
