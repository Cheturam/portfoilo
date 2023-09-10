import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST } from "./LoginActionTypes";
import { loginFailure, loginSuccess } from "./LoginAction";
import api, { fetchData } from "../../apiservice/APIservice";

// const getTodos = () => axios.get("https://jsonplaceholder.typicode.com/todos");

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* LoginSaga(): any {
  try {
    const response = yield call(fetchData, { name: "chetan" });
    if (response.status === 200) {
      yield put(
        loginSuccess({
          todos: response.data,
        })
      );
    } else {
      yield put(
        loginFailure({
          error: response.data.error,
        })
      );
    }
  } catch (e: any) {
    yield put(
      loginFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
  yield all([takeLatest(LOGIN_REQUEST, LoginSaga)]);
}

export default todoSaga;
