import { all, takeLatest } from "redux-saga/effects";
import { commonSagaWatcher } from "./api/commonApi/common.sagas";

export default function* rootSaga() {
  yield all(
    [
    commonSagaWatcher()
    ],
  );
}
