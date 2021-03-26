import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  userSetThemeRequest: ['theme'],
  userSetThemeSuccess: ['theme'],
  userSetThemeError: [null],

  userGetThemeRequest: [null],
  userGetThemeSuccess: ['theme'],
});

export const userTypes = Types;
export default Creators;
