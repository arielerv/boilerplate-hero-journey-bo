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
});

export const authTypes = Types;
export default Creators;
