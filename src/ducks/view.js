import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCharacter } from '../utils/api';

const types = {
  fetch: 'VIEW_FETCH',
  fetchSuccess: 'VIEW_FETCH_SUCCESS',
  fetchFail: 'VIEW_FETCH_FAIL',
};

const actions = {
  fetch: (id) => ({
    type: types.fetch,
    id,
  }),
  fetchSuccess: (character) => ({
    type: types.fetchSuccess,
    character,
  }),
  fetchFail: () => ({
    type: types.fetchFail,
  }),
};

function reducer(state = { loading: false }, action) {
  switch (action.type) {
    case types.fetch:
      return { loading: true };
    case types.fetchSuccess:
      return {
        loading: false,
        character: action.character,
      };
    case types.fetchFail:
      return { loading: false };
    default:
      return state;
  }
}

function* saga() {
  yield takeLatest(
    types.fetch,
    function* ({ id }) {
      try {
        const character = yield call(fetchCharacter, id);

        yield put(actions.fetchSuccess(character));
      } catch (error) {
        yield put(actions.fetchFail());
      }
    },
  );
}

export default { actions, reducer, saga };
