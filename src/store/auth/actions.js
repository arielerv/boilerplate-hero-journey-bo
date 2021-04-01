import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  authLoginRequest: ['email', 'password'],
  authLoginSuccess: ['profile', 'token'],
  authLoginError: ['error'],

  authGetTokenRequest: [],
  authGetTokenSuccess: ['token'],
  authGetTokenError: ['error'],

  authValidateTokenRequest: ['token'],
  authValidateTokenSuccess: ['profile', 'token'],
  authValidateTokenError: ['error'],

  authRegisterRequest: ['values'],
  authRegisterSuccess: [],
  authRegisterWithoutConfirmSuccess: [],
  authRegisterError: ['error'],

  authConfirmEmailRequest: ['token'],
  authConfirmEmailSuccess: ['profile', 'token'],
  authConfirmEmailError: ['error'],

  authVerifyEmailRequest: ['email'],
  authVerifyEmailSuccess: ['emailExists'],
  authVerifyEmailError: ['errorEmail'],

  authRecoveryPasswordRequest: ['email'],
  authRecoveryPasswordSuccess: [],
  authRecoveryPasswordError: ['error'],

  authResetPasswordRequest: ['token', 'email', 'password'],
  authResetPasswordSuccess: [null],
  authResetPasswordError: ['error'],

  authCleanValues: [null],
});

export const authTypes = Types;
export default Creators;
