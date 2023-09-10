import { all, fork } from "redux-saga/effects";
import todoSaga from "./Login/LoginSaga";

export function* rootSaga() {
  yield all([
    fork(todoSaga),
    // fork(new saga) new saga can we added here
  ]);
}
