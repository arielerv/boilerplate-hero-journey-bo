import { takeLatest, call, put, throttle } from 'redux-saga/effects';
import actionsCreator, { authTypes } from 'store/auth/actions';
import {
  requestLogin,
  requestValidateToken,
  requestRegister,
  requestConfirmEmail,
  requestVerifyEmail,
} from 'services/auth';
import { push } from 'connected-react-router';
import { setAuthorization } from 'services/http';
import { routes } from 'constant';
import { getToken, clearToken } from 'services/storage';
import { getResponseError } from 'utils';

export function* login({ email, password }) {
  try {
    const response = yield call(requestLogin, email, password);
    const error = yield getResponseError(response);
    if (!error) {
      yield setAuthorization(response.data.token);
      yield put(actionsCreator.authLoginSuccess(response.data.profile, response.data.token));
      yield put(push(routes.HOME));
    } else {
      yield put(actionsCreator.authLoginError(error));
    }
  } catch (error) {
    yield put(actionsCreator.authLoginError(getResponseError()));
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
    const error = yield getResponseError(response);
    if (!error) {
      yield setAuthorization(response.data.token);
      yield put(
        actionsCreator.authValidateTokenSuccess(response.data.profile, response.data.token)
      );
    } else {
      yield clearToken();
      yield put(actionsCreator.authValidateTokenError(error));
    }
  } catch (error) {
    yield put(actionsCreator.authValidateTokenError(getResponseError()));
  }
}

export function* register({ values }) {
  try {
    const response = yield call(requestRegister, values);
    const error = yield getResponseError(response);
    if (!error) {
      yield put(actionsCreator.authRegisterSuccess());
    } else {
      yield put(actionsCreator.authRegisterError(error));
    }
  } catch (error) {
    yield put(actionsCreator.authRegisterError(getResponseError()));
  }
}

export function* confirmEmail({ token }) {
  try {
    const response = yield call(requestConfirmEmail, token);
    const error = yield getResponseError(response);
    if (!error) {
      yield put(actionsCreator.authConfirmEmailSuccess());
      yield put(actionsCreator.authLoginSuccess(response.data.profile, response.data.token));
      yield setAuthorization(response.data.token);
      yield put(push(routes.HOME));
    } else {
      yield put(actionsCreator.authConfirmEmailError(error));
    }
  } catch (error) {
    yield put(actionsCreator.authConfirmEmailError(getResponseError()));
  }
}

export function* verifyEmail({ email }) {
  try {
    const response = yield call(requestVerifyEmail, email);
    const error = yield getResponseError(response);
    if (!error) {
      yield put(actionsCreator.authVerifyEmailSuccess(response.data.emailExists));
    } else {
      yield put(actionsCreator.authConfirmEmailError(error));
    }
  } catch (error) {
    yield put(actionsCreator.authConfirmEmailError(getResponseError()));
  }
}

export function* authSaga() {
  yield takeLatest(authTypes.AUTH_LOGIN_REQUEST, login);
  yield takeLatest(authTypes.AUTH_GET_TOKEN_REQUEST, tokenRequest);
  yield takeLatest(authTypes.AUTH_VALIDATE_TOKEN_REQUEST, validateToken);
  yield takeLatest(authTypes.AUTH_REGISTER_REQUEST, register);
  yield takeLatest(authTypes.AUTH_CONFIRM_EMAIL_REQUEST, confirmEmail);
  yield throttle(1000, authTypes.AUTH_VERIFY_EMAIL_REQUEST, verifyEmail);
}
