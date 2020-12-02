import {
  createSlice,
  createSelector,
  Action,
  PayloadAction,
} from "@reduxjs/toolkit";

export const HOME_FEATURE_KEY = "HomeState";

interface IUserLocationDetails {
  
    entity_type: string,
    entity_id: number,
    title: string,
    latitude: number,
    longitude: number,
    city_id: number,
    city_name: string,
    country_id: number,
    country_name: string
  
}

interface IHomeState {
  restaurantList: [],
  userLocationDetails: IUserLocationDetails[],
  loaded: boolean,
  error: null | string,
}

export const initialHomeState : IHomeState = {
  restaurantList: [],
  userLocationDetails: [],
  loaded: false,
  error: null,
};

export const homeSlice = createSlice({
  name: HOME_FEATURE_KEY,
  initialState: initialHomeState,
  reducers: {
    getLocationStart: (state, action) => {
      state.loaded = false;
    },
    getLocationSuccess: (state, action) => {
      state.userLocationDetails = action.payload.location_suggestions;
    },
    getLocationFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

/*
 * Export reducer for store configuration.
 */
export const homeReducer = homeSlice.reducer;

export const {
  getLocationStart,
  getLocationSuccess,
  getLocationFailure,
} = homeSlice.actions;

export const getHomeState = (rootState: any) => {
  return rootState[HOME_FEATURE_KEY];
};

export const selectLoaded = createSelector(getHomeState, (s) => s.loaded);

export const selectuserLocationDetails = createSelector(
  getHomeState,
  (s) => s?.userLocationDetails
);
