import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroData: [],
  navData: [],
  serviceCards: [],
  services: [],
  actualites: [],
  events: [],
  loading: false,
  error: null,
};

const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    setHomepageData(state, action) {
      // console.log("VALEUR RECU DANS HERODATA REDUX :", action.payload.heroData);
      state.heroData = action.payload.heroData || [];
      // console.log("VALEUR RECU DANS NAVDATA REDUX :", action.payload.navData);
      state.navData = action.payload.navData || [];
      // console.log(
      //   "VALEUR RECU DANS SERVICECARDSDATA REDUX :",
      //   action.payload.serviceCards
      // );
      state.serviceCards = action.payload.serviceCards || [];
      // console.log(
      //   "VALEUR RECU DANS ACTUALITEDATA REDUX :",
      //   action.payload.actualites
      // );
      state.services = action.payload.services || [];
      // console.log(
      //   "VALEUR RECU DANS SERVICESDATA REDUX :",
      //   action.payload.services
      // );
      state.actualites = action.payload.actualites || [];
      // console.log("VALEUR RECU DANS EVENTDATA REDUX :", action.payload.events);
      state.events = action.payload.events || [];
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
