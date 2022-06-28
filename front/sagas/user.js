import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function logInAPI(data) {
  return axiosos.post('/api/login', data)
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(1000);  // 서버가 없기 떄문에 비동기적인 효과
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: action.data
    });
  } catch (err) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data
    })
  }
}

function logOutAPI() {
  return axios.post('/api/logout')
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: 'LOG_OUT_SUCCESS',
    });
  } catch (err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.response.data
    })
  }
}

function* watchLogIn() {
  yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
  yield takeLatest('LOG_OUT_REQUEST', logOut);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
  ])
}