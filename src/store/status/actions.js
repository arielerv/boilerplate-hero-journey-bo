import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  statusRequest: ['credentials'],
  statusSuccess: ['profile'],
  statusError: ['error'],
});

export const statusTypes = Types;
export default Creators;
