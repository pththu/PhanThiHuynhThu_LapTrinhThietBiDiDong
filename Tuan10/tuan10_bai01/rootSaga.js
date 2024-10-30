import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchTodos() {
  const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos');
  yield put({ type: 'SET_TODOS', payload: response.data });
}

function* watchFetchTodos() {
  yield takeLatest('FETCH_TODOS', fetchTodos);
}

export default function* rootSaga() {
  yield all([watchFetchTodos()]);
}
