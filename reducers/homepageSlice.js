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
      state.navData = action.payload.navData || [];
      state.heroData = action.payload.heroData || [];
      state.serviceCards = action.payload.serviceCards || [];
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
