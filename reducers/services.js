import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    addServicesCardTitle: (state, action) => {
      // console.log("VALEURS RECU DANS REDUCER SERVICES :", action.payload);
      state.value = action.payload;
    },
  },
});

export const { addServicesCardTitle } = servicesSlice.actions;
export default servicesSlice.reducer;
