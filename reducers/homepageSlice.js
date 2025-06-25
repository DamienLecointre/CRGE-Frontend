import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navData: [],
  heroData: [],
  serviceCards: [],
  actualites: [],
  loading: false,
  error: null,
};

const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    setHomepageData(state, action) {
      // console.log("VALEUR RECU DANS NAVDATA REDUX :", action.payload.navData);
      state.navData = action.payload.navData || [];
      // console.log("VALEUR RECU DANS HERODATA REDUX :", action.payload.heroData);
      state.heroData = action.payload.heroData || [];
      // console.log(
      //   "VALEUR RECU DANS SERVICECARDSDATA REDUX :",
      //   action.payload.serviceCards
      // );
      state.serviceCards = action.payload.serviceCards || [];
      // console.log(
      //   "VALEUR RECU DANS ACTUALITEDATA REDUX :",
      //   action.payload.actualites
      // );
      state.actualites = action.payload.actualites || [];
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setHomepageData, setLoading, setError } = homepageSlice.actions;
export default homepageSlice.reducer;
