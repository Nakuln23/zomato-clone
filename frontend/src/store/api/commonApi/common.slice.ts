import {
    createSlice,
    createSelector,
    Action,
    PayloadAction,
  } from "@reduxjs/toolkit";
  
  export const COMMON_API_FEATURE_KEY = "commonApiState";
  
  /*
   * Change this from `any` if there is a more specific error type.
   */
  
  export const initialState = {
    userCityDetails: {},
    loaded: false,
    error: null,
  };
  
  export const commonApiSlice = createSlice({
    name: COMMON_API_FEATURE_KEY,
    initialState: initialState,
    reducers: {
        getListOfCategoriesStart: (state, action) => {
        state.loaded = false;
      },
       getListOfCategoriesSuccess: (state, action) => {
        state.loaded = true;
      },
      getListOfCategoriesFailure: (state, action) => {
        state.error = action.payload;
      },
      getUserCityDetailsStart: (state, action) => {
        state.loaded = false;
      },
      getUserCityDetailsSuccess: (state, action) => {
        state.loaded = true;
        state.userCityDetails = action.payload
      },
      getUserCityDetailsFailure: (state, action) => {
        state.error = action.payload;
      },
      getCollectionsInCityStart: (state, action) => {
        state.loaded = false;
      },
      getCollectionsInCitySuccess: (state, action) => {
        state.loaded = true;
      },
      getCollectionsInCityFailure: (state, action) => {
        state.error = action.payload;
      },
      getListOfCuisinesStart: (state, action) => {
        state.loaded = false;
        ;
      },
      getListOfCuisinesStartSuccess: (state, action) => {
        state.loaded = true;
      },
      getListOfCuisinesStartFailure: (state, action) => {
        state.error = action.payload;
      },
      getListOfEstablishmentsStart: (state, action) => {
        state.loaded = false;
      },
      getListOfEstablishmentsSuccess: (state, action) => {
        state.loaded = true;
      },
      getListOfEstablishmentsFailure: (state, action) => {
        state.error = action.payload;
      },
      getLocationsDetailsBasedOnCoordinatesStart: (state, action) => {
        state.loaded = false;
      },
      getLocationsDetailsBasedOnCoordinatesSuccess: (state, action) => {
        state.loaded = true;
        state.userCityDetails = action.payload.location_suggestions;
      },
      getLocationsDetailsBasedOnCoordinatesFailure: (state, action) => {
        state.error = action.payload;
      },
    },
  });
  
  /*
   * Export reducer for store configuration.
   */
  export const commonApiReducer = commonApiSlice.reducer;
  
  export const {
    getListOfCategoriesStart,
    getListOfCategoriesSuccess,
    getListOfCategoriesFailure,
    getUserCityDetailsStart,
    getUserCityDetailsSuccess,
    getUserCityDetailsFailure,
    getCollectionsInCityStart,
    getCollectionsInCitySuccess,
      getCollectionsInCityFailure,
      getListOfCuisinesStart,
      getListOfCuisinesStartSuccess,
      getListOfCuisinesStartFailure,
      getListOfEstablishmentsStart,
      getListOfEstablishmentsSuccess,
      getListOfEstablishmentsFailure,
      getLocationsDetailsBasedOnCoordinatesStart,
      getLocationsDetailsBasedOnCoordinatesSuccess,
      getLocationsDetailsBasedOnCoordinatesFailure,
  } = commonApiSlice.actions;
  
  export const getCommonApiState = (rootState: any) => rootState[COMMON_API_FEATURE_KEY];
  export const selectLoaded = createSelector(getCommonApiState, (s) => s.loaded);
  export const selectuserLocationDetails = createSelector(
    getCommonApiState,
    (s) => s?.userCityDetails
  );
  