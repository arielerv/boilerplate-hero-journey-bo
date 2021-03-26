import { takeLatest, call, put } from 'redux-saga/effects';
import actionsCreator, { statusTypes } from 'store/status/actions';
import { statusRequest } from 'services/status';

export function* status() {
  try {
    const response = yield call(statusRequest);
    if (response.ok) {
      yield put(actionsCreator.statusSuccess(response.data.profile, response.data.token));
    } else {
      yield put(actionsCreator.statusError(response.data.message || response.problem));
    }
  } catch (error) {
    yield put(actionsCreator.statusError('Server error'));
  }
}

export function* statusSaga() {
  yield takeLatest(statusTypes.STATUS_REQUEST, status);
}
