import axios from "axios";
import { put, takeLatest, all, call } from "redux-saga/effects";
import {
  getDefaultsSuccess,
  getDefaultsStart,
  getDefaultsFailure,
} from "./search.slice";

function* getDefaults(action: any) {
  try {
    // const data = axios.get("https://developers.zomato.com/api/v2.1");
    const response = yield call(() =>
      axios.get("https://developers.zomato.com/api/v2.1")
    );
    console.log(response);
    yield put(
      getDefaultsSuccess({
        restaurantList: response,
      })
    );
  } catch (err) {
    console.error("getCountries:error", err);
    yield put(getDefaultsFailure(err));
    throw err;
  }
}

export function* onSearchSagaWatcher() {
  yield all([takeLatest(getDefaultsStart.type, getDefaults)]);
}
