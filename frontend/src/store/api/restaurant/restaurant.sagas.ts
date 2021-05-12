import axios from "axios";
import { put, takeLatest, all, call } from "redux-saga/effects";
import { searchRestaurantsFailure, searchRestaurantsStart, searchRestaurantsSuccess } from "./restaurant.slice";

function* onSearchRestaurantsStart(action: any) {
  try {
    // const data = axios.get("https://developers.zomato.com/api/v2.1");
    const response = yield call(() => axios.get("/api/categories"));

    yield put(
        searchRestaurantsSuccess({
        restaurantList: response.data,
      })
    );
  } catch (err) {
    console.error("getCountries:error", err);
    yield put(searchRestaurantsFailure(err));
    throw err;
  }
}


export function* restaurantSagaWatcher() {
  yield all([
    takeLatest(searchRestaurantsStart.type, onSearchRestaurantsStart),
  ]);
}
