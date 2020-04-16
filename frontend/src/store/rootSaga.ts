import { all, takeLatest } from "redux-saga/effects";
import { onSearchSagaWatcher } from "../features/Search/search.sagas";

export default function* rootSaga() {
  yield all([onSearchSagaWatcher()]);
}
