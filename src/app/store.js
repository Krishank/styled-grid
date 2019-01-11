import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware  from 'redux-saga';
import { onFetchRecords } from "./sagas/helloSaga";


const sagaMiddleware = createSagaMiddleware();

import productsReducer from "./reducers/productsReducer"

const store = createStore(
  combineReducers({productsReducer}),
  {},
  applyMiddleware(logger,sagaMiddleware)
);

sagaMiddleware.run(onFetchRecords);

export default store;
