import { all, takeLatest } from "redux-saga/effects";
import { onSearchSagaWatcher } from "../features/Search/search.sagas";
import { HomeSagaWatcher } from "../pages/Home";

export default function* rootSaga() {
  yield all([onSearchSagaWatcher(), HomeSagaWatcher()]);
}
