import { takeLatest, call, put } from 'redux-saga/effects';
import actionsCreator, { authTypes } from 'store/auth/actions';
import { requestLogin, requestValidateToken } from 'services/auth';
import { push } from 'connected-react-router';
import { setAuthorization } from 'services/http';
import { routes } from 'constant';
import { getToken, clearToken } from 'services/storage';

export function* login({ email, password }) {
  try {
    const response = yield call(requestLogin, email, password);
    if (response.ok) {
      yield setAuthorization(response.data.token);
      yield put(actionsCreator.authLoginSuccess(response.data.profile, response.data.token));
      yield put(push(routes.HOME));
    } else {
      yield put(actionsCreator.authLoginError(response.data.message || response.problem));
    }
  } catch (error) {
    yield put(actionsCreator.authLoginError('Server error'));
  }
}

export function* tokenRequest() {
  try {
    const token = yield call(getToken);
    yield put(actionsCreator.authGetTokenSuccess(token));
  } catch (error) {
    yield put(actionsCreator.authGetTokenError(error));
  }
}

export function* validateToken({ token }) {
  try {
    const response = yield call(requestValidateToken, token);
    if (response.ok) {
      yield setAuthorization(response.data.token);
      yield put(
        actionsCreator.authValidateTokenSuccess(response.data.profile, response.data.token)
      );
    } else {
      yield clearToken();
      yield put(actionsCreator.authValidateTokenError(response.data.message || response.problem));
    }
  } catch (error) {
    yield put(actionsCreator.authValidateTokenError(error));
  }
}

export function* authSaga() {
  yield takeLatest(authTypes.AUTH_LOGIN_REQUEST, login);
  yield takeLatest(authTypes.AUTH_GET_TOKEN_REQUEST, tokenRequest);
  yield takeLatest(authTypes.AUTH_VALIDATE_TOKEN_REQUEST, validateToken);
}
