import {combineReducers, createStore, applyMiddleware} from "redux";
import taskReducer from "./ToDo-Reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Api/Saga";

const sagaMiddleware = createSagaMiddleware()

let reducer = combineReducers(
  {
    task: taskReducer
  }
);

let store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;