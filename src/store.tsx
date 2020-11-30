import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { list, view } from './ducks';

function* rootSaga() {
  yield all([list.saga(), view.saga()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    list: list.reducer,
    view: view.reducer,
  }),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
