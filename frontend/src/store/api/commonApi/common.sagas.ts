import axios from "axios";
import { put, takeLatest, all, call } from "redux-saga/effects";
import { getListOfCategoriesFailure, getListOfCategoriesStart, getListOfCategoriesSuccess, getLocationsDetailsBasedOnCoordinatesFailure, getLocationsDetailsBasedOnCoordinatesStart, getLocationsDetailsBasedOnCoordinatesSuccess, getUserCityDetailsFailure, getUserCityDetailsStart, getUserCityDetailsSuccess } from "./common.slice";

function* onGetListOfCategories(action: any) {
  try {
    // const data = axios.get("https://developers.zomato.com/api/v2.1");
    const response = yield call(() => axios.get("/api/categories"));

    yield put(
        getListOfCategoriesSuccess({
        restaurantList: response.data,
      })
    );
  } catch (err) {
    console.error("getCountries:error", err);
    yield put(getListOfCategoriesFailure(err));
    throw err;
  }
}

function* onGetUserCityStart(action: any) {
  try {
    const response = yield call(() =>
      axios({
        method: "GET",
        url: `/api/cities`,
        params: action.payload.params,
      })
    );
   
    yield put(getUserCityDetailsSuccess(response.data.location_suggestions[0]));
    yield
    
  } catch (err) {
    console.error("getCountries:error", err);
    yield put(getUserCityDetailsFailure(err));
    throw err;
  }
}

function* onGetLocationsDetailsBasedOnCoordinatesStart(action: any) {
  try {
    const response = yield call(() =>
      axios({
        method: "GET",
        url: `/api/locations`,
        params: action.payload.params,
      })
    );

    yield put(getLocationsDetailsBasedOnCoordinatesSuccess(response.data));
  } catch (err) {
    console.error("getCountries:error", err);
    yield put(getLocationsDetailsBasedOnCoordinatesFailure(err));
    throw err;
  }
}


export function* commonSagaWatcher() {
  yield all([
    takeLatest(getListOfCategoriesStart.type, onGetListOfCategories),
    takeLatest(getLocationsDetailsBasedOnCoordinatesStart.type, onGetLocationsDetailsBasedOnCoordinatesStart),
    takeLatest(getUserCityDetailsStart.type, onGetUserCityStart),
  ]);
}
