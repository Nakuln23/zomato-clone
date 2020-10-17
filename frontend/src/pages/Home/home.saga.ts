import axios from "axios";
import { put, takeLatest, all, call } from "redux-saga/effects";
import {
    getLocationStart,
    getLocationSuccess,
    getLocationFailure,
} from "./home.slice";

function* onGetLocation(action: any) {

  try {
    const response = yield call(() =>
      axios({
        method: "GET",
        url: `/api/locations`,
        params: action.payload.params,
      })
    );

    yield put(getLocationSuccess(response.data));
  } catch (err) {
    console.error("getCountries:error", err);
    yield put(getLocationFailure(err));
    throw err;
  }
}

export function* HomeSagaWatcher() {
  yield all([
    takeLatest(getLocationStart.type, onGetLocation),
  ]);
}