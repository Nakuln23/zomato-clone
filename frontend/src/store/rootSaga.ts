import { all, takeLatest } from "redux-saga/effects";
import { onSearchSagaWatcher } from "../features/Search";

export default function* rootSaga() {
  yield all([onSearchSagaWatcher()]);
}
