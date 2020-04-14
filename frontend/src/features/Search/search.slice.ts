import {
  createSlice,
  createSelector,
  Action,
  PayloadAction,
} from "@reduxjs/toolkit";

export const SEARCH_RESTAURANT_FEATURE_KEY = "search";

/*
 * Change this from `any` if there is a more specific error type.
 */

export const initialSearchRestaurantState = {
  restaurantList: [],
  loaded: false,
  error: null,
};

export const onSearchSlice = createSlice({
  name: SEARCH_RESTAURANT_FEATURE_KEY,
  initialState: initialSearchRestaurantState,
  reducers: {
    getDefaultsStart: (state, action) => {
      state.loaded = false;
      console.log(action);
    },
    getDefaultsSuccess: (state, action) => {
      state.loaded = true;
      state.restaurantList = action.payload.restaurantList;
    },
    getDefaultsFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

/*
 * Export reducer for store configuration.
 */
export const onSearchReducer = onSearchSlice.reducer;

export const {
  getDefaultsStart,
  getDefaultsSuccess,
  getDefaultsFailure,
} = onSearchSlice.actions;

export const getSearchState = (rootState: any) =>
  rootState[SEARCH_RESTAURANT_FEATURE_KEY];
