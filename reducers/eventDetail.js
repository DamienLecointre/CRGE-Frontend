import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: "",
    category: "",
    title: "",
    lieu: "",
    description: [],
    speaker: {
      name: "",
      role: "",
    },
    audience: {
      description: "",
      prerequisites: "",
    },
    objectives: [],
    programme: [],
    funding: "",
    pricing: [],
  },
};

export const eventDetailSlice = createSlice({
  name: "eventDetail",
  initialState,
  reducers: {
    addeventDetailToStore: (state, action) => {
      // console.log("VALEUR RECU DANS REDUCER EVENT DETAIL :", action.payload);
      state.value = action.payload;
    },
  },
});

export const { addeventDetailToStore } = eventDetailSlice.actions;
export default eventDetailSlice.reducer;
