import {
    createSlice,
    createSelector,
    Action,
    PayloadAction,
  } from "@reduxjs/toolkit";
  
  export const RESTAURANT_FEATURE_KEY = "restaurant";
  
  /*
   * Change this from `any` if there is a more specific error type.
   */
  
  export const initialSearchRestaurantState = {
    restaurantList: [],
    locationBySearch: {} as any,
    loaded: false,
    error: null,
  };
  
  export const restaurantSlice = createSlice({
    name: RESTAURANT_FEATURE_KEY,
    initialState: initialSearchRestaurantState,
    reducers: {
      searchRestaurantsStart: (state, action) => {
        state.loaded = false;
        console.log(action);
      },
      searchRestaurantsSuccess: (state, action) => {
        state.loaded = true;
        state.restaurantList = action.payload.restaurantList;
      },
      searchRestaurantsFailure: (state, action) => {
        state.error = action.payload;
      }
    },
  });
  
  /*
   * Export reducer for store configuration.
   */
  export const restaurantReducer = restaurantSlice.reducer;
  
  export const {
    searchRestaurantsStart,
    searchRestaurantsSuccess,
    searchRestaurantsFailure
  } = restaurantSlice.actions;
  
  export const getSearchState = (rootState: any) =>
    rootState[RESTAURANT_FEATURE_KEY];
  
  export const selectLoaded = createSelector(getSearchState, (s) => s.loaded);
  
  export const selectLocationBySearch = createSelector(
    getSearchState,
    (s) => s.locationBySearch
  );
  