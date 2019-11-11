import {put, takeEvery, all, call, takeLatest} from 'redux-saga/effects'
import {outputFromLocalStorage} from "../State/ToDo-Reducer";
import API from "./../Api/Api";

export function* outPutDataSaga() {
  yield put(outputFromLocalStorage(yield call(API.getAllTasks)));
}

export function* watchSaga() {
  yield takeLatest('INITIALIZATION', outPutDataSaga);
  yield takeEvery(['ADD_TASK',
    'CHANGE_TASK_STATUS',
    'REMOVE_TASK',
    'SELECT_ALL_TASK',
    'REMOVE_SELECT_TASKS',
    'END_EDIT_TASK',
    'REMOVE_SELECT_TASKS'], outPutDataSaga);
}

export default function* rootSaga() {
  yield all([
    watchSaga()
  ])
}