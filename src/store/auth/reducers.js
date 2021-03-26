import { createReducer } from 'reduxsauce';
import { authTypes } from 'store/auth/actions';
import { initialState } from 'store/auth/initial-state';

const loginRequest = state => ({
  ...state,
  isLoading: true,
  profile: initialState.profile,
  error: initialState.error,
  token: null,
});

const loginSuccess = (state, { profile, token }) => ({
  ...state,
  profile,
  token,
  isLoading: initialState.isLoading,
  error: initialState.error,
});

const loginError = (state, { error }) => ({
  ...state,
  error,
  isLoading: initialState.isLoading,
  token: initialState.token,
  profile: initialState.profile,
});

const getTokenRequest = state => ({
  ...state,
  isLoadingToken: true,
  error: null,
  token: null,
});

const getTokenSuccess = (state, { token }) => ({
  ...state,
  token,
  isLoadingToken: false,
  error: null,
});

const getTokenError = (state, { error }) => ({
  ...state,
  error,
  token: null,
  isLoadingToken: false,
});

const validateTokenRequest = state => ({
  ...state,
  isValidatingToken: true,
  isAuthorized: initialState.isAuthorized,
  error: null,
  token: null,
});

const validateTokenSuccess = (state, { token, profile }) => ({
  ...state,
  token,
  profile,
  isAuthorized: true,
  isValidatingToken: false,
  error: null,
});

const validateTokenError = (state, { error }) => ({
  ...state,
  error,
  isValidatingToken: initialState.isValidatingToken,
});
const reducer = createReducer(initialState, {
  [authTypes.AUTH_LOGIN_REQUEST]: loginRequest,
  [authTypes.AUTH_LOGIN_SUCCESS]: loginSuccess,
  [authTypes.AUTH_LOGIN_ERROR]: loginError,

  [authTypes.AUTH_GET_TOKEN_REQUEST]: getTokenRequest,
  [authTypes.AUTH_GET_TOKEN_SUCCESS]: getTokenSuccess,
  [authTypes.AUTH_GET_TOKEN_ERROR]: getTokenError,

  [authTypes.AUTH_VALIDATE_TOKEN_REQUEST]: validateTokenRequest,
  [authTypes.AUTH_VALIDATE_TOKEN_SUCCESS]: validateTokenSuccess,
  [authTypes.AUTH_VALIDATE_TOKEN_ERROR]: validateTokenError,
});

export default reducer;
