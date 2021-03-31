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

const registerRequest = state => ({
  ...state,
  isRegistering: true,
  isRegistered: initialState.isRegistered,
  error: null,
  token: null,
});

const registerSuccess = state => ({
  ...state,
  isRegistering: initialState.isRegistering,
  isRegistered: true,
  error: initialState.error,
});

const registerError = (state, { error }) => ({
  ...state,
  error,
  isRegistering: initialState.isRegistering,
  isRegistered: initialState.isRegistered,
});

const confirmEmailRequest = state => ({
  ...state,
  isConfirming: true,
  error: initialState.error,
});

const confirmEmailSuccess = (state, { data }) => ({
  ...state,
  data,
  isConfirming: initialState.isConfirming,
  error: initialState.error,
});

const confirmEmailError = (state, { error }) => ({
  ...state,
  error,
  isConfirming: initialState.isConfirming,
});

const verifyEmailRequest = state => ({
  ...state,
  emailExists: initialState.emailExists,
  isValidatingEmail: true,
  error: initialState.error,
});

const verifyEmailSuccess = (state, { emailExists }) => ({
  ...state,
  emailExists,
  isValidatingEmail: initialState.isValidatingEmail,
  error: initialState.error,
});

const verifyEmailError = (state, { errorEmail }) => ({
  ...state,
  errorEmail,
  emailExists: initialState.emailExists,
  isValidatingEmail: initialState.isValidatingEmail,
});

const recoveryPasswordRequest = state => ({
  ...state,
  isLoading: true,
  isEmailSent: initialState.isEmailSent,
  error: initialState.error,
});

const recoveryPasswordSuccess = state => ({
  ...state,
  isLoading: initialState.isLoading,
  isEmailSent: true,
  error: initialState.error,
});

const recoveryPasswordError = (state, { error }) => ({
  ...state,
  error,
  isLoading: initialState.isLoading,
  isEmailSent: initialState.isEmailSent,
});

const resetPasswordRequest = state => ({
  ...state,
  isLoading: true,
  error: initialState.error,
});

const resetPasswordSuccess = state => ({
  ...state,
  isLoading: initialState.isLoading,
  error: initialState.error,
});

const resetPasswordError = (state, { error }) => ({
  ...state,
  error,
  isLoading: initialState.isLoading,
});

const cleanValues = state => ({
  ...state,
  ...initialState,
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

  [authTypes.AUTH_REGISTER_REQUEST]: registerRequest,
  [authTypes.AUTH_REGISTER_SUCCESS]: registerSuccess,
  [authTypes.AUTH_REGISTER_ERROR]: registerError,

  [authTypes.AUTH_CONFIRM_EMAIL_REQUEST]: confirmEmailRequest,
  [authTypes.AUTH_CONFIRM_EMAIL_SUCCESS]: confirmEmailSuccess,
  [authTypes.AUTH_CONFIRM_EMAIL_ERROR]: confirmEmailError,

  [authTypes.AUTH_VERIFY_EMAIL_REQUEST]: verifyEmailRequest,
  [authTypes.AUTH_VERIFY_EMAIL_SUCCESS]: verifyEmailSuccess,
  [authTypes.AUTH_VERIFY_EMAIL_ERROR]: verifyEmailError,

  [authTypes.AUTH_RECOVERY_PASSWORD_REQUEST]: recoveryPasswordRequest,
  [authTypes.AUTH_RECOVERY_PASSWORD_SUCCESS]: recoveryPasswordSuccess,
  [authTypes.AUTH_RECOVERY_PASSWORD_ERROR]: recoveryPasswordError,

  [authTypes.AUTH_RESET_PASSWORD_REQUEST]: resetPasswordRequest,
  [authTypes.AUTH_RESET_PASSWORD_SUCCESS]: resetPasswordSuccess,
  [authTypes.AUTH_RESET_PASSWORD_ERROR]: resetPasswordError,

  [authTypes.AUTH_CLEAN_VALUES]: cleanValues,
});

export default reducer;
