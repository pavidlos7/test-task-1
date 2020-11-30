import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCharacters } from '../utils/api';

const types = {
  fetch: 'LIST_FETCH',
  fetchSuccess: 'LIST_FETCH_SUCCESS',
  fetchFail: 'LIST_FETCH_FAIL',
};

const actions = {
  fetch: (params) => ({
    type: types.fetch,
    params,
  }),
  fetchSuccess: (characters, pages) => ({
    type: types.fetchSuccess,
    characters,
    pages,
  }),
  fetchFail: () => ({
    type: types.fetchFail,
  }),
};

const reducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case types.fetch:
      return { loading: true };
    case types.fetchSuccess:
      return {
        loading: false,
        characters: action.characters,
        pages: action.pages,
      };
    case types.fetchFail:
      return { loading: false };
    default:
      return state;
  }
};

function* saga() {
  yield takeLatest(
    types.fetch,
    function* fetch({ params }) {
      try {
        const { info, results } = yield call(fetchCharacters, params);

        yield put(actions.fetchSuccess(results, info.pages));
      } catch (error) {
        yield put(actions.fetchFail());
      }
    },
  );
}

export default { actions, reducer, saga };
