import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  authLoginRequest: ['email', 'password'],
  authLoginSuccess: ['profile', 'token'],
  authLoginError: ['error'],

  authGetTokenRequest: [null],
  authGetTokenSuccess: ['token'],
  authGetTokenError: ['error'],

  authValidateTokenRequest: ['token'],
  authValidateTokenSuccess: ['profile', 'token'],
  authValidateTokenError: ['error'],

  authRegisterRequest: ['values'],
  authRegisterSuccess: [null],
  authRegisterError: ['error'],

  authConfirmEmailRequest: ['token'],
  authConfirmEmailSuccess: ['profile', 'token'],
  authConfirmEmailError: ['error'],

  authVerifyEmailRequest: ['email'],
  authVerifyEmailSuccess: ['emailExists'],
  authVerifyEmailError: ['error'],

  authCleanValues: [null],
});

export const authTypes = Types;
export default Creators;
